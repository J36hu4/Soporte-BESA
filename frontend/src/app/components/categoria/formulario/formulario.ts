import { Component, ElementRef, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadService } from '../../../share/services/api/file-upload.service';
import { NotificationService } from '../../../share/services/app/notification.service';
import { Subject } from 'rxjs/internal/Subject';
import { minWordsValidator } from '../../../share/validators/min-words-validator';
import { Location } from '@angular/common';
import { Especialidad, Tecnico, Usuario } from '../../../share/models/UsuarioModel';
import { takeUntil } from 'rxjs';
import { TecnicoService } from '../../../share/services/api/tecnico.service';
import { Idioma, MotivoDisponible, Prioridad, Roles } from '../../../share/models/Enums';
import { CategoriaService } from '../../../share/services/api/categoria.service';
import { Categoria, Etiqueta, ReglaAutotriage } from '../../../share/models/CategoriaModel';
import { numberValidator } from '../../../share/validators/number-validator';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-CategoriaFormulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class CategoriaFormulario implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private uploadService: FileUploadService,
    private noti: NotificationService,
    private categoriaSv: CategoriaService
  ) { }

  // Subject para controlar la destrucción de suscripciones y evitar memory leaks
  private destroy$ = new Subject<void>();

  // Título del formulario, id del videojuego y bandera de creación/actualización
  titleForm = 'Crear una nueva categoria';
  idCategoria: number | null = null;
  isCreate = true;
  categoria: Categoria | null = null

  // Listas de géneros y plataformas con signals
  verEspecialidades = false;
  verReglas = false;
  verEtiquetas = false;

  // Formulario reactivo
  categoriaForm!: FormGroup;

  // Variables etiqueta
  Etiquetas = signal<Etiqueta[]>([])
  etiquetasSeleccionadas: Etiqueta[] = [];
  private fuse!: Fuse<Etiqueta>;
  sugerencias: Etiqueta[] = [];
  nuevoNombreEtiqueta: string = '';

  //Variebales Regla autotriage
  Regla: ReglaAutotriage | null = null;
  reglaForm!: FormGroup;


  /**
   * Ciclo de vida OnInit: inicializa el formulario, carga listas y verifica si es actualización
   */
  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.idCategoria = parseInt(atob(fragment));
        this.isCreate = this.idCategoria == null
        this.titleForm = this.isCreate ? 'Crear una nueva categoria' : 'Actualizar una categoria existente'
        this.initForm();

        if (this.idCategoria) {
          this.categoriaSv.getById(this.idCategoria).subscribe((data) => this.patchFormValues(data))
        }
      } else {
        this.initForm();
      }
    });

    this.categoriaSv.getEtiquetas().subscribe(lista => {
      this.Etiquetas.set(lista)
      const options = {
        keys: ['nombre'],       // campo a buscar
        threshold: 0.5,         // tolerancia a errores (0 exacto, 1 muy permisivo)
        distance: 100           // distancia máxima de coincidencia
      };
      this.fuse = new Fuse(lista, options);

    })
  }

  /**
   * Inicializa el formulario reactivo con validaciones
   */
  private initForm(): void {
    this.categoriaForm = this.fb.group({
      id: [null],
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      descripcion: [null, [Validators.required, Validators.minLength(2)]],
      tiempoRespuesta: [null, [Validators.required, numberValidator(0)]],
      tiempoSolcion: [null, [Validators.required, numberValidator(0)]],
      prioridad: [null, Validators.required],
      etiquetas: [this.fb.array([]), [Validators.required]],
      reglas: [this.fb.array([]), [Validators.required]],
      especialidades: [this.fb.array([]), [Validators.required]],
    });

    this.reglaForm = this.fb.group({
      id: [null],
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      carga: ['baja', [Validators.required]],
      reglaPrioridad: ['baja', Validators.required],
      etiquetas: [this.fb.array([]), [Validators.required]],
      especialidades: [this.fb.array([]), [Validators.required]],
      activa: [true]
    });
  }

  private patchFormValues(data: Categoria) {
    this.categoria = data

  }

  submit() {
    this.categoriaForm.markAllAsTouched();

    if (this.categoriaForm.invalid) {
      this.noti.error('Formulario Inválido', 'Revise los campos marcados.', 5000);
      return;
    }

    // const save = () => {
    //   const request$ = this.isCreate
    //     ? this.categoriaSv.create()
    //     : this.categoriaSv.update();

    //   request$.pipe(takeUntil(this.destroy$)).subscribe(data => {
    //     this.noti.success(
    //       this.isCreate ? 'Crear Tecnico' : 'Actualizar Tecnico',
    //       this.isCreate ? 'Nuevo tecnico creado exitosamente' : 'Tecnico actualizado exitosamente',
    //       5000
    //     );
    //     this.router.navigate(['tecnicos'])
    //   });
    // };

  }

  /**
   * Ciclo de vida OnDestroy: limpia suscripciones
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onReset(): void {
    this.categoriaForm.reset();
    this.categoriaForm.patchValue({
      id: null,
      nombre: '',
      descripcion: '',
      tiempoRespuesta: null,
      tiempoSolcion: null,
      prioridad: '',
      etiquetas: [],
      reglas: [],
      especialidades: [],
    });
    if (this.categoria)
      this.patchFormValues(this.categoria)

  }

  volver(): void {
    this.router.navigate(['/categorias']);
  }

  onEspecialidadesConfirmadas(lista: Especialidad[]) {
    this.verEspecialidades = false;
    this.categoriaForm.controls['especialidades'].setValue(lista);
  }

  closePops(): void {
    this.verEspecialidades = false;
    this.verReglas = false;
    this.verEtiquetas = false;
    this.etiquetasSeleccionadas = [];
    this.nuevoNombreEtiqueta = '';
    this.sugerencias = [];
  }

  onVerEtiquetas() {
    if (this.verEtiquetas) {
      this.verEtiquetas = false;
      this.etiquetasSeleccionadas = [];
      this.nuevoNombreEtiqueta = '';
      this.sugerencias = [];
    } else {
      this.verEtiquetas = true;
      const etiquetasFormValue = this.categoriaForm.controls['etiquetas'].value;
      this.etiquetasSeleccionadas = Array.isArray(etiquetasFormValue) ? etiquetasFormValue : [];
    }
  }


  onInputEtiqueta(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    if (input.trim().length > 0) {
      const resultados = this.fuse.search(input);
      this.sugerencias = resultados.map(r => r.item);
    } else {
      this.sugerencias = [];
    }
  }

  seleccionarEtiqueta(etiqueta: Etiqueta) {
    // Evitar duplicados
    if (!this.etiquetasSeleccionadas.find(e => e.nombre === etiqueta.nombre)) {
      this.etiquetasSeleccionadas.push(etiqueta);
      // Limpiar input y sugerencias
      this.nuevoNombreEtiqueta = '';
      this.sugerencias = [];
    }
    console.log('Etiqueta seleccionada:', etiqueta.nombre);
  }

  agregarEtiqueta() {
    const nombre = this.nuevoNombreEtiqueta.trim();
    if (!nombre) {
      return; // no agregar si está vacío
    }

    // Buscar si ya existe en la lista de etiquetas
    const existente = this.Etiquetas().find(e => e.nombre.toLowerCase() === nombre.toLowerCase());

    if (existente) {
      // Si existe, añadirlo a seleccionados si no está ya
      if (!this.etiquetasSeleccionadas.find(e => e.nombre.toLowerCase() === existente.nombre.toLowerCase())) {
        this.etiquetasSeleccionadas.push(existente);
      }
    } else {
      // Crear nueva etiqueta
      const nuevaEtiqueta: Etiqueta = { id: 0, nombre: nombre };
      // Añadir a la lista global
      this.Etiquetas.update(lista => [...lista, nuevaEtiqueta]);
      // Añadir a seleccionados
      this.etiquetasSeleccionadas.push(nuevaEtiqueta);
    }

    // Limpiar input y sugerencias
    this.nuevoNombreEtiqueta = '';
    this.sugerencias = [];
  }

  guardarEtiquetas() {
    this.categoriaForm.controls['etiquetas'].setValue(this.etiquetasSeleccionadas);
    this.onVerEtiquetas()
  }

  eliminarEtiqueta(eti: Etiqueta) {
    this.etiquetasSeleccionadas = this.etiquetasSeleccionadas.filter(etq => etq.id !== eti.id && etq.nombre !== eti.nombre)
  }


  onVerRegla() {
    if (this.verReglas) {
      this.verReglas = false
      this.reglaForm.reset();
    } else {
      this.verReglas = true;
      this.reglaForm.reset();
      this.reglaForm.patchValue({
        id: null,
        nombre: null,
        carga: 'baja',
        reglaPrioridad: 'baja',
        etiquetas: [],
        especialidades: [],
        activa: true
      });
    }
  }

  guardarRegla() {

  }

  get listEtiquetas() {
    return this.categoriaForm.controls['etiquetas'].value
  }

  get listEspecialidades() {
    return this.categoriaForm.controls['especialidades'].value
  }

}
