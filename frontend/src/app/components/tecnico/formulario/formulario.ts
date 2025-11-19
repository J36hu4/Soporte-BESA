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
import { Idioma, MotivoDisponible, Roles } from '../../../share/models/Enums';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class TecnicoFormulario implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private uploadService: FileUploadService,
    private noti: NotificationService,
    private tecnicoSv: TecnicoService
  ) { }

  // Subject para controlar la destrucción de suscripciones y evitar memory leaks
  private destroy$ = new Subject<void>();

  // Título del formulario, id del videojuego y bandera de creación/actualización
  titleForm = 'Crear un nuevo tecnico';
  idTecnico: number | null = null;
  isCreate = true;
  tecnico: Tecnico | null = null

  // Listas de géneros y plataformas con signals
  verEspecialidades = false;

  // Formulario reactivo
  tecnicoForm!: FormGroup;

  // Variables para gestión de imagen
  @ViewChild('fileUpload') fileInput!: ElementRef<HTMLInputElement>;
  currentFile?: File;
  preview = '';
  nameImage = 'notImage.png';
  previousImage: string | null = null;

  // Expresiones regulares para validaciones
  number4digits = /^\d{4}$/;
  number2decimals = /^[0-9]+[.,]{1,1}[0-9]{2,2}$/;


  /**
   * Ciclo de vida OnInit: inicializa el formulario, carga listas y verifica si es actualización
   */
  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.idTecnico = parseInt(atob(fragment));
        this.isCreate = this.idTecnico == null
        this.titleForm = this.isCreate ? 'Crear un nuevo tecnico' : 'Actualizar un tecnico existente'
        this.initForm();

        if (this.idTecnico) {
          this.tecnicoSv.getById(this.idTecnico).subscribe((data) => this.patchFormValues(data))
        }
      } else {
        this.initForm();
      }
    });
  }

  /**
   * Inicializa el formulario reactivo con validaciones
   */
  private initForm(): void {
    this.tecnicoForm = this.fb.group({
      id: [null],
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      apellido1: [null, [Validators.required, Validators.minLength(2)]],
      apellido2: [null, [Validators.minLength(2)]],
      correo: [null, [Validators.required, Validators.email]],
      estado: [{ value: true, disabled: this.isCreate }, Validators.required],
      carga: [{ value: 0, disabled: true }, [Validators.required, Validators.min(0)]],
      imagen: [this.nameImage],
      especialidades: [this.fb.array([]), [Validators.required, Validators.minLength(1)]],
    });
  }

  private patchFormValues(data: Tecnico) {
    this.tecnico = data
    const nombreCompleto = data?.usuario?.nombre ?? '';
    const partes = nombreCompleto.split(' ');
    let nombre = '';
    let apellido1 = '';
    let apellido2 = ''
    if (partes.length > 2) {
      nombre = partes.slice(0, partes.length - 2).join(' ') || '';
      apellido1 = partes[partes.length - 2] ?? '';
      apellido2 = partes[partes.length - 1] ?? '';
    } else {
      nombre = partes[partes.length - 2] ?? '';
      apellido1 = partes[partes.length - 1] ?? '';
    }

    //setValue
    this.tecnicoForm.patchValue({
      id: data.id,
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      correo: data.usuario.correo,
      estado: data.usuario.estado,
      carga: data.carga,
      imagen: data.usuario.imagen,
      especialidades: [],
    });

    this.tecnicoForm.controls['especialidades'].setValue(data.especialidades);

    // Actualiza la imagen previa
    this.nameImage = data.usuario.imagen || 'notImage.png';
    this.previousImage = data.usuario.imagen ?? null;
  }

  submit() {
    this.tecnicoForm.markAllAsTouched();

    if (this.tecnicoForm.invalid) {
      this.noti.error('Formulario Inválido', 'Revise los campos marcados.', 5000);
      return;
    }



    const formValue = this.tecnicoForm.value;
    const correo: String = formValue.correo
    const nombreImagen = this.nameImage === 'notImage.png' ? 'notImage.png' : this.previousImage !== 'notImage.png' ? this.previousImage ?? '' : correo.replace('@', '').replace('.', '').toLocaleLowerCase() + '.png'
    const usuario: Usuario = {
      id: formValue.id ?? 0,
      nombre: formValue.nombre + ' ' + formValue.apellido1 + (formValue.apellido2 ? ' ' + formValue.apellido2 : ''),
      imagen: nombreImagen,
      correo: correo.toLocaleLowerCase(),
      contrasenna: '123456',
      ultimaSesion: new Date(),
      role: Roles.TEC,
      estado: true,
      idioma: Idioma.es
    };
    const tecnico: Tecnico = {
      id: formValue.id ?? 0,
      disponible: false,
      motivoDisponible: MotivoDisponible.ausente,
      carga: formValue.carga,
      especialidades: formValue.especialidades,
      usuario: usuario
    }

    const save = () => {
      const request$ = this.isCreate
        ? this.tecnicoSv.create(tecnico)
        : this.tecnicoSv.update(tecnico);

      request$.pipe(takeUntil(this.destroy$)).subscribe(data => {
        this.noti.success(
          this.isCreate ? 'Crear Tecnico' : 'Actualizar Tecnico',
          this.isCreate ? 'Nuevo tecnico creado exitosamente' : 'Tecnico actualizado exitosamente',
          5000
        );
        this.router.navigate(['tecnicos'])
      });
    };

    // Primero subir imagen si se seleccionó archivo
    if (this.currentFile) {
      const renamedFile = new File([this.currentFile], nombreImagen, {
        type: this.currentFile.type,
      });
      this.uploadService.upload(renamedFile, this.previousImage)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          save();
        });
    } else {
      if (this.nameImage === 'notImage.png')
        this.uploadService.delate(this.previousImage ?? '').pipe(takeUntil(this.destroy$)).subscribe(data => {
          console.log(data)
        })
      save();
    }

  }

  /**
   * Gestiona la selección de archivo para la imagen del videojuego
   * @param event Evento de cambio de input file
   */
  selectFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.currentFile = input.files[0];
      this.nameImage = this.currentFile.name;
      const reader = new FileReader();
      reader.onload = e => (this.preview = e.target?.result as string);
      reader.readAsDataURL(this.currentFile);
      this.tecnicoForm.controls['imagen'].setValue(this.nameImage)
    } else {
      // Si no se selecciona archivo, restaurar imagen previa
      this.currentFile = undefined;
      this.preview = '';
      this.nameImage = this.previousImage || 'notImage.png';
    }
  }

  fileDelete() {
    this.currentFile = undefined;
    this.preview = '';
    this.nameImage = 'notImage.png';
    this.tecnicoForm.controls['imagen'].setValue('notImage.png');
    this.fileInput.nativeElement.value = '';
  }


  /**
   * Ciclo de vida OnDestroy: limpia suscripciones
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onReset(): void {
    this.nameImage = 'notImage.png';
    this.currentFile = undefined;
    this.preview = '';
    this.tecnicoForm.reset();
    this.tecnicoForm.patchValue({
      id: null,
      nombre: '',
      apellido1: '',
      apellido2: '',
      correo: '',
      estado: true,
      carga: 0,
      imagen: this.nameImage,
      especialidades: [],
    });
    if (this.tecnico)
      this.patchFormValues(this.tecnico)

  }

  volver(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/mytickets']);
    }
  }

  onEspecialidadesConfirmadas(lista: Especialidad[]) {
    this.verEspecialidades = false;
    this.tecnicoForm.controls['especialidades'].setValue(lista);
  }
}
