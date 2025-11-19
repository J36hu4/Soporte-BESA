import { ChangeDetectorRef, Component, EventEmitter, input, Input, Output, signal } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TecnicoService } from "../../../share/services/api/tecnico.service";
import { Especialidad } from "../../../share/models/UsuarioModel";

@Component({
    selector: 'app-lista-especialidades',
    standalone: false,
    templateUrl: './especialidades.html',
    styleUrl: './especialidades.css'
})
export class ListaEspecialidades {
    constructor(private cdr: ChangeDetectorRef, private especialidadSvc: TecnicoService) { }
    @Input() set cargar(value: boolean) {
        this.hidden = value;
        if (!value) {
            this.actualizarVisiblesYSeleccion();
        }
    };
    @Input() seleccionadas: Especialidad[] = [];
    @Output() aceptar = new EventEmitter<Especialidad[]>();

    especialidades = signal<Especialidad[]>([]);
    filtro = '';
    visibles: Especialidad[] = [];
    seleccion: Set<number> = new Set();
    hidden = true

    ngOnInit() {
        this.cargarEspecialidades();
        this.actualizarVisiblesYSeleccion();
    }

    cargarEspecialidades() {
        this.especialidadSvc.getEspecialidades().subscribe(e => {
            this.especialidades.set(e);
            this.actualizarVisiblesYSeleccion();
            this.cdr.detectChanges();
        });
    }


    actualizarVisiblesYSeleccion() {
        this.visibles = [...this.especialidades()];
        if (this.seleccionadas && this.seleccionadas.length > 0) {
            for (const esp of this.seleccionadas) {
                this.seleccion.add(esp.id);
            }
        }
    }

    toggle(especialidad: Especialidad) {
        this.seleccion.has(especialidad.id)
            ? this.seleccion.delete(especialidad.id)
            : this.seleccion.add(especialidad.id);
    }

    confirmar() {
        const seleccionadas = this.especialidades().filter(e => this.seleccion.has(e.id));
        this.aceptar.emit(seleccionadas);
        this.seleccion.clear();
    }


    estaSeleccionada(e: Especialidad): boolean {
        return this.seleccion.has(e.id);
    }

    onFiltroChange() {
        const v = this.filtro.toLowerCase();
        this.visibles = this.especialidades().filter(e =>
            e.nombre.toLowerCase().includes(v)
        );
    }

}