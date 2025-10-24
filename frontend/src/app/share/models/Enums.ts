export enum Roles {
  USER = 'USER',
  TEC = 'TEC',
  ADMIN = 'ADMIN',
}

export enum Idioma {
  es = 'es',
  en = 'en',
}

export enum TipoNotificacion {
  asignacion = 'asignacion',
  cambio_estado = 'cambio_estado',
  observacion = 'observacion',
  inicio_sesion = 'inicio_sesion',
  exito = 'exito',
  error = 'error',
  advertencia = 'advertencia',
  info = 'info',
  nuevo = 'nuevo',
}

export enum MotivoDisponible {
  disponible = 'disponible',
  almuerzo = 'almuerzo',
  descanso = 'descanso',
  ausente = 'ausente',
}

export enum Prioridad {
  baja = 'baja',
  media = 'media',
  alta = 'alta',
}

export enum EstadoTicket {
  pendiente = 'pendiente',
  asignado = 'asignado',
  en_proceso = 'en_proceso',
  resuelto = 'resuelto',
  cerrado = 'cerrado',
}

export enum MetodoAsignacion {
  manual = 'manual',
  automatico = 'automatico',
}
