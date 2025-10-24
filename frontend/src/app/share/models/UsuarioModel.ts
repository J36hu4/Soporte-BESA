import { Idioma, MotivoDisponible, Roles, TipoNotificacion } from "./Enums";
import { Asignacion, Ticket, Valoracion } from "./ticketModel";

export interface UserModel {
    id: number;
    correo: string;
    nombre: string;
    role: Roles;
    idioma: Idioma,
    imagen: string
}

export interface Usuario {
  id: number;
  nombre?: string;
  imagen?: string;
  correo: string;
  contrasenna?: string;
  role: Roles;
  ultimaSesion: Date;
  estado: boolean;
  idioma: Idioma;
  ticket?: Ticket[];
  valoracion?: Valoracion[];
  notificacionesRemitente?: Notificacion[];
  notificaciones?: Notificacion[];
}

export interface Notificacion {
  id: number;
  Remitente?: Usuario;
  Destinatario: Usuario;
  tipo: TipoNotificacion;
  leido: boolean;
  mensaje: string;
  fecha: Date;
}

export interface Tecnico {
  id: number;
  usuario: Usuario;
  disponible: boolean;
  motivoDisponible: MotivoDisponible;
  fechaDisponible?: Date;
  carga: number;
  especialidades?: Especialidad[];
  Asignacion?: Asignacion[];
}

export interface Especialidad {
  id: number;
  nombre: string;
  descripcion: string;
}

