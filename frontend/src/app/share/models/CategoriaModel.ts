import { Prioridad } from "./Enums";
import { Especialidad } from "./UsuarioModel";

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  tiempoMaximoRespuesta: number;
  tiempoMaximoSolucion: number;
  prioridad: Prioridad;
  especialidades?: Especialidad[];
  etiquetas?: Etiqueta[];
  reglas?: ReglaAutotriage[];
}

export interface Etiqueta {
  id: number;
  categoria: Categoria;
  nombre: string;
}

export interface ReglaAutotriage {
  id: number;
  nombre: string;
  categoria: Categoria;
  prioridad: number;
  carga: number;
  etiquetas?: Etiqueta[];
  especialidades?: Especialidad[];
  activa: boolean;
}
