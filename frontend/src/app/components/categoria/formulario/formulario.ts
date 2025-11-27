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
import { numberValidator, numberValidatorManual } from '../../../share/validators/number-validator';
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
    private categoriaSv: CategoriaService,
    private especialidadSvc: TecnicoService
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
  newRegla = true

  //Variables Especialidades
  especialidades: Especialidad[] = []
  seleccionadas: Especialidad[] = []
  filtroEspecialidad = '';
  visibles: Especialidad[] = [];
  seleccion: Set<number> = new Set();


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
        threshold: 0.4,         // tolerancia a errores (0 exacto, 1 muy permisivo)
        distance: 100          // distancia máxima de coincidencia
      };
      this.fuse = new Fuse(lista, options);

    })

    this.especialidadSvc.getEspecialidades().subscribe(e => {
      this.especialidades = e;
      this.actualizarEspecialidades()
    });
  }

  /**
   * Inicializa el formulario reactivo con validaciones
   */
  private initForm(): void {
    this.categoriaForm = this.fb.group({
      id: [0],
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      descripcion: [null, [Validators.required, Validators.minLength(2)]],
      tiempoRespuesta: [null, [Validators.required, numberValidator]],
      tiempoSolcion: [null, [Validators.required, numberValidator]],
      prioridad: [null, Validators.required],
      etiquetas: [this.fb.array([])],
      reglas: [this.fb.array([])],
      especialidades: [this.fb.array([])],
    });

    this.reglaForm = this.fb.group({
      id: [0],
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      carga: [0, [Validators.required]],
      reglaPrioridad: [0, Validators.required],
      etiquetas: [[], [Validators.required]],
      especialidades: [[], [Validators.required]],
      activa: [true]
    });
  }

  private patchFormValues(data: Categoria) {
    this.categoria = data
    this.categoriaForm.patchValue({
      id: this.categoria.id,
      nombre: this.categoria.nombre,
      descripcion: this.categoria.descripcion,
      tiempoRespuesta: this.categoria.tiempoMaximoRespuesta,
      tiempoSolcion: this.categoria.tiempoMaximoSolucion,
      prioridad: this.categoria.prioridad,
      etiquetas: [],
      reglas: [],
      especialidades: [],
    });

    this.categoriaForm.controls['especialidades'].setValue(data.especialidades);
    this.categoriaForm.controls['reglas'].setValue(data.reglas);
    this.categoriaForm.controls['etiquetas'].setValue(data.etiquetas);
  }

  submit() {
    this.categoriaForm.markAllAsTouched();

    if (this.categoriaForm.invalid) {
      this.noti.error('Formulario Inválido', 'Revise los campos marcados.', 5000);
      return;
    }

    const cat = this.categoriaForm.value;

    if (cat.tiempoRespuesta >= cat.tiempoSolcion) {
      this.categoriaForm.controls['tiempoRespuesta'].setErrors({ greaterOrEqual: true });
      this.noti.error('Formulario Inválido', 'El tiempo respuesta no puede ser mayor o igual al tiempo de solucion', 5000);
      return;
    }

    if (numberValidatorManual(cat.tiempoRespuesta)) {
      this.categoriaForm.controls['tiempoRespuesta'].setErrors({ invalidNumber: true });
      this.noti.error('Formulario Inválido', 'Debe ser un numero', 5000);
      return;
    }

    if (cat.etiquetas.length <= 0) {

      this.categoriaForm.controls['etiquetas'].setErrors({ invalid: true });
      this.noti.error('Formulario Inválido', 'Debe agregar al menos una etiqueta', 5000);
      return;
    }

    if (cat.especialidades.length <= 0) {

      this.categoriaForm.controls['especialidades'].setErrors({ invalid: true });
      this.noti.error('Formulario Inválido', 'Debe agregar al menos una especialidad', 5000);
      return;
    }


    const newCategoria: Categoria = {
      id: cat.id,
      nombre: cat.nombre,
      descripcion: cat.descripcion,
      tiempoMaximoRespuesta: cat.tiempoRespuesta,
      tiempoMaximoSolucion: cat.tiempoSolcion,
      prioridad: cat.prioridad,
      especialidades: cat.especialidades,
      etiquetas: cat.etiquetas,
      reglas: Array.isArray(cat.reglas) ? cat.reglas : []
    }

    console.log(newCategoria)


    const request$ = this.isCreate
      ? this.categoriaSv.create(newCategoria)
      : this.categoriaSv.update(newCategoria);

    request$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.noti.success(
        this.isCreate ? 'Crear Categoria' : 'Actualizar Categoria',
        this.isCreate ? 'Nueva categoria creada exitosamente' : 'Categoria actualizada exitosamente',
        5000
      );
      this.router.navigate(['categorias'])
    });


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
      id: 0,
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

  closePops(): void {
    this.verEspecialidades = false;
    this.verReglas = false;
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
    this.verEtiquetas = false;
    this.etiquetasSeleccionadas = [];
    this.nuevoNombreEtiqueta = '';
    this.sugerencias = [];
    console.log()
  }

  onVerEspecialidades() {
    this.verEspecialidades = true;
    this.categoriaForm.controls['especialidades'].setErrors(null);
    this.filtroEspecialidad = ''
    this.actualizarEspecialidades()
  }

  actualizarEspecialidades() {
    this.visibles = this.especialidades;
    const especialidadesSelect = this.categoriaForm.controls['especialidades'].value;
    this.seleccionadas = Array.isArray(especialidadesSelect) ? especialidadesSelect : [];
    if (this.seleccionadas && this.seleccionadas.length > 0) {
      for (const esp of this.seleccionadas) {
        this.seleccion.add(esp.id);
      }
    }
  }

  onFiltroEspecialidad() {
    const removeAccents = (str: string): string => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const v = removeAccents(this.filtroEspecialidad.toLowerCase()); this.visibles = this.especialidades.filter(e =>
      removeAccents(e.nombre.toLowerCase()).includes(v)
    );
  }

  estaSeleccionada(e: Especialidad): boolean {
    return this.seleccion.has(e.id);
  }

  chechEspecialidad(especialidad: Especialidad) {
    this.seleccion.has(especialidad.id)
      ? this.seleccion.delete(especialidad.id)
      : this.seleccion.add(especialidad.id);
  }

  onEspecialidadesConfirmadas() {
    const lista = this.especialidades.filter(e => this.seleccion.has(e.id));
    this.categoriaForm.controls['especialidades'].setValue(lista);
    this.verEspecialidades = false;
    this.seleccion.clear()
    this.seleccionadas = []
    this.filtroEspecialidad = ''
  }


  onVerEtiquetas() {
    this.categoriaForm.controls['etiquetas'].setErrors(null);
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
    this.etiquetasSeleccionadas = this.etiquetasSeleccionadas.filter(etq => etq.nombre !== eti.nombre)
  }


  onVerRegla(id: number | null, nombre: number | null) {
    if (this.verReglas) {
      this.verReglas = false
      this.reglaForm.reset();
    } else {
      this.verReglas = true;
      this.reglaForm.reset();
      this.Regla = this.listReglas.find((r: any) => r.id === id && r.nombre === nombre)
      if (this.Regla) {
        this.newRegla = false
        this.reglaForm.patchValue({
          id: this.Regla.id,
          nombre: this.Regla.nombre,
          carga: this.Regla.carga,
          reglaPrioridad: this.Regla.prioridad,
          etiquetas: [],
          especialidades: [],
          activa: this.Regla.activa
        });
        this.reglaForm.controls['etiquetas'].setValue(this.Regla.etiquetas?.map((e: any) => e.nombre));
        this.reglaForm.controls['especialidades'].setValue(this.Regla.especialidades?.map((e: any) => e.nombre))
      } else {
        this.newRegla = true
        this.reglaForm.patchValue({
          id: null,
          nombre: null,
          carga: 0,
          reglaPrioridad: 0,
          etiquetas: [],
          especialidades: [],
          activa: true
        });
      }
    }
  }

  guardarRegla() {
    if (this.reglaForm.invalid) {
      this.noti.error('Formulario Inválido', 'Revise los campos marcados.', 5000);
      return;
    }

    const reglaValue = this.reglaForm.value;

    let especialidades: Especialidad[] = [];
    if (reglaValue.especialidades?.length > 0) {
      this.listEspecialidades.forEach((es: Especialidad) => {
        if (reglaValue.especialidades.includes(es.nombre)) {
          especialidades.push({
            id: es.id,
            nombre: es.nombre,
            descripcion: es.descripcion
          });
        }
      });
    }

    let etiquetas: Etiqueta[] = [];
    if (reglaValue.etiquetas?.length > 0) {
      this.listEtiquetas.forEach((etq: Etiqueta) => {
        if (reglaValue.etiquetas.includes(etq.nombre)) {
          etiquetas.push({
            id: etq.id,
            nombre: etq.nombre
          });
        }
      });
    }

    const nuevaRegla: ReglaAutotriage = {
      id: reglaValue.id ?? 0,
      nombre: reglaValue.nombre,
      carga: parseInt(reglaValue.carga),
      prioridad: parseInt(reglaValue.reglaPrioridad),
      etiquetas: etiquetas,
      especialidades: especialidades,
      activa: reglaValue.activa
    }


    let reglas = (this.listReglas.length || []) > 0 ? this.listReglas : [];
    let nuevasReglas = [];
    if (this.newRegla) {
      nuevasReglas = [...reglas, nuevaRegla];
    } else {
      reglas = reglas.filter((r: any) => r.id !== this.Regla?.id && r.nombre !== this.Regla?.nombre);
      nuevasReglas = [...reglas, nuevaRegla];
    }



    this.categoriaForm.controls['reglas'].setValue(nuevasReglas);

    this.closePops();
  }

  get listEtiquetas() {
    return this.categoriaForm.controls['etiquetas'].value
  }

  get listEspecialidades() {
    return this.categoriaForm.controls['especialidades'].value
  }
  get listReglas() {
    return this.categoriaForm.controls['reglas'].value
  }







  blockInvalidKeys(event: KeyboardEvent) {
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const controlKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"];

    if (![...allowedKeys, ...controlKeys].includes(event.key)) {
      event.preventDefault();
    }
  }




}
