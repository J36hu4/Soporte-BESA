import { Etiqueta, ReglaAutotriage } from "./CategoriaModel";
import { EstadoTicket, MetodoAsignacion } from "./Enums";
import { Tecnico, Usuario } from "./UsuarioModel";

export interface Ticket {
  id: number;
  usuario: Usuario;
  etiqueta: Etiqueta;
  titulo: string;
  descripcion: string;
  fechaCreacion: Date;
  fechaCierre?: Date;
  slaRespusta?: Date;
  slaSolucion?: Date;
  estado: EstadoTicket;
  historial?: HistorialTicket[];
  asignaciones?: Asignacion[];
  Valoracion?: Valoracion[];
}

export interface HistorialTicket {
  id: number;
  usuario?: Usuario;
  estadoAnterior: EstadoTicket;
  estadoNuevo: EstadoTicket;
  fecha: Date;
  observacion?: string;
  imagenes?: TicketImagen[];
}

export interface TicketImagen {
  id: number;
  historial: HistorialTicket;
  imagen?: Uint8Array;
  url?: string;
}

export interface Asignacion {
  id: number;
  ticket: Ticket;
  tecnico: Tecnico;
  regla?: ReglaAutotriage;
  fecha: Date;
  puntajePrioridad: number;
  motivo?: string;
  activo: boolean;
  metodo?: MetodoAsignacion;
}

export interface Valoracion {
  id: number;
  ticket: Ticket;
  usuario: Usuario;
  puntaje: number;
  comentario?: string;
  fecha: Date;
}
