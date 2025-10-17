import { EstadoTicket, MetodoAsignacion } from "../../generated/prisma";
import { newFecha } from "../util";
//   fechaCreacion 
//   fechaCierre   
//   slaRespusta   
//   slaSolucion   




export const tickets = [
    //1
    {
        idUsuario: 3,
        idEtiqueta: 1,
        titulo: "Laptop no enciende",
        descripcion: "El equipo no responde al presionar el botón de encendido.",
        fechaCreacion: newFecha(0, 1, 0, 0, 0, 0),
        slaRespusta: newFecha(0, 1, 0, 0, 2, 0),
        slaSolucion: newFecha(0, 1, 0, 0, 24, 0)
    },
    //2
    {
        idUsuario: 4,
        idEtiqueta: 2,
        titulo: "Impresora sin conexión",
        descripcion: "No aparece en la red.",
        estado: EstadoTicket.asignado,
        fechaCreacion: newFecha(0, 4, 0, 0, 0, 0),
        slaRespusta: newFecha(0, 4, 0, 0, 2, 0),
        slaSolucion: newFecha(0, 4, 0, 0, 24, 0)
    },
    //3
    {
        idUsuario: 5,
        idEtiqueta: 3,
        titulo: "Monitor parpadea",
        descripcion: "La pantalla se apaga y enciende intermitentemente.",
        fechaCreacion: newFecha(0, 0, 42, 0, 0, 0),
        slaRespusta: newFecha(0, 0, 42, 0, 2, 0),
        slaSolucion: newFecha(0, 0, 42, 0, 25, 0)
    },
    //4
    {
        idUsuario: 3,
        idEtiqueta: 8,
        titulo: "Restablecer contraseña",
        descripcion: "Usuario olvidó su contraseña.",
        estado: EstadoTicket.resuelto,
        fechaCreacion: newFecha(0, 3, 0, 0, 0, 0),
        slaRespusta: newFecha(0, 3, 0, 0, 0, 30),
        slaSolucion: newFecha(0, 3, 0, 0, 4, 0)
    },
    //5
    {
        idUsuario: 4,
        idEtiqueta: 16,
        titulo: "VPN no conecta",
        descripcion: "Error al intentar conectarse desde casa.",
        estado: EstadoTicket.cerrado,
        fechaCreacion: newFecha(1, 7, 0, 0, 0, 0),
        slaRespusta: newFecha(1, 7, 0, 0, 1, 0),
        slaSolucion: newFecha(1, 7, 0, 0, 8, 0),
        fechaCierre: newFecha(0, 7, 0, 0, 0, 0)
    },
    //6
    {
        idUsuario: 5,
        idEtiqueta: 20,
        titulo: "Licencia vencida",
        descripcion: "No se puede abrir el software por expiración de licencia.",
        fechaCreacion: newFecha(0, 1, 12, 0, 0, 0),
        slaRespusta: newFecha(0, 1, 12, 0, 2, 0),
        slaSolucion: newFecha(0, 1, 12, 0, 12, 0)
    },
    //7
    {
        idUsuario: 3,
        idEtiqueta: 21,
        titulo: "Servidor caído",
        descripcion: "No hay acceso a los archivos compartidos.",
        estado: EstadoTicket.asignado,
        fechaCreacion: newFecha(0, 0, 8, 0, 0, 0),
        slaRespusta: newFecha(0, 0, 8, 0, 0, 15),
        slaSolucion: newFecha(0, 0, 8, 0, 4, 0)
    },
    //8
    {
        idUsuario: 4,
        idEtiqueta: 25,
        titulo: "Virus detectado",
        descripcion: "Antivirus detectó amenaza persistente.",
        estado: EstadoTicket.en_proceso,
        fechaCreacion: newFecha(0, 1, 23, 0, 0, 0),
        slaRespusta: newFecha(0, 1, 23, 0, 0, 15),
        slaSolucion: newFecha(0, 1, 23, 0, 6, 0)
    },
    //9
    {
        idUsuario: 5,
        idEtiqueta: 27,
        titulo: "Phishing sospechoso",
        descripcion: "Correo sospechoso recibido por varios usuarios.",
        estado: EstadoTicket.resuelto,
        fechaCreacion: newFecha(0, 12, 0, 0, 0, 0),
        slaRespusta: newFecha(0, 12, 0, 0, 0, 15),
        slaSolucion: newFecha(0, 12, 0, 0, 6, 0)
    },
    //10
    {
        idUsuario: 3,
        idEtiqueta: 29,
        titulo: "Vulnerabilidad en sistema",
        descripcion: "Se detectó acceso no autorizado.",
        estado: EstadoTicket.cerrado,
        fechaCreacion: newFecha(2, 4, 50, 0, 0, 0),
        slaRespusta: newFecha(2, 4, 50, 0, 0, 15),
        slaSolucion: newFecha(2, 4, 50, 0, 6, 0),
        fechaCierre: newFecha(0, 20, 50, 0, 0, 0)
    }
]

export const asignaciones = [
    //1
    {
        idTicket: 2,
        idTecnico: 6,
        idRegla: 1,
        puntajePrioridad: 3,
        metodo: MetodoAsignacion.automatico,
        fecha: newFecha(0, 1, 39, 0, 0, 0)

    },
    //2
    {
        idTicket: 4,
        idTecnico: 7,
        puntajePrioridad: 0,
        metodo: MetodoAsignacion.manual,
        fecha: newFecha(0, 3, 0, 0, 0, 12),
        motivo: "Tecnico aplica a la asignacion"
    },
    //3
    {
        idTicket: 5,
        idTecnico: 8,
        puntajePrioridad: 0,
        metodo: MetodoAsignacion.manual,
        motivo: "Tecnico aplica a la asignacion",
        fecha: newFecha(1, 6, 20, 0, 0, 0)
    },
    //4
    {
        idTicket: 7,
        idTecnico: 10,
        puntajePrioridad: 0,
        metodo: MetodoAsignacion.manual,
        motivo: "Tecnico aplica a la asignacion",
        fecha: newFecha(0, 8, 0, 0, 0, 8)
    },
    //5
    {
        idTicket: 8,
        idTecnico: 10,
        puntajePrioridad: 0,
        metodo: MetodoAsignacion.manual,
        motivo: "Tecnico aplica a la asignacion",
        fecha: newFecha(1, 23, 0, 0, 0, 50)
    },
    //6
    {
        idTicket: 9,
        idTecnico: 10,
        puntajePrioridad: 0,
        metodo: MetodoAsignacion.manual,
        motivo: "Tecnico aplica a la asignacion",
        fecha: newFecha(0, 12, 0, 0, 0, 20)
    },
    //7
    {
        idTicket: 10,
        idTecnico: 10,
        puntajePrioridad: 0,
        metodo: MetodoAsignacion.manual,
        motivo: "Tecnico aplica a la asignacion",
        fecha: newFecha(2, 4, 50, 0, 0, 12)
    }
]

export const historialTickets = [
    //1
    {
        idTicket: 1,
        idUsuario: 3,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 1, 0, 0, 0, 0),
    },
    //2
    {
        idTicket: 2,
        idUsuario: 4,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 4, 0, 0, 0, 0),
    },
    //3
    {
        idTicket: 2,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asignado automáticamente.",
        fecha: newFecha(0, 1, 39, 0, 0, 0),
    },
    //4
    {
        idTicket: 3,
        idUsuario: 5,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 0, 42, 0, 0, 0),
    },
    //5
    {
        idTicket: 4,
        idUsuario: 3,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 3, 0, 0, 0, 0),
    },
    //6
    {
        idTicket: 4,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asigando manualmente",
        fecha: newFecha(0, 3, 0, 0, 0, 12),
    },
    //7
    {
        idTicket: 4,
        idUsuario: 7,
        estadoAnterior: EstadoTicket.asignado,
        estadoNuevo: EstadoTicket.en_proceso,
        observacion: "Comienzo de trabajo del tecnico en el ticket",
        fecha: newFecha(0, 3, 0, 0, 1, 8),
    },
    //8
    {
        idTicket: 4,
        idUsuario: 7,
        estadoAnterior: EstadoTicket.en_proceso,
        estadoNuevo: EstadoTicket.resuelto,
        observacion: "Ticket resulto",
        fecha: newFecha(0, 3, 0, 0, 3, 28),
    },
    //9
    {
        idTicket: 5,
        idUsuario: 4,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(1, 7, 0, 0, 0, 0),
    },
    //10
    {
        idTicket: 5,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asigando manualmente",
        fecha: newFecha(1, 6, 20, 0, 0, 0),
    },
    //11
    {
        idTicket: 5,
        idUsuario: 8,
        estadoAnterior: EstadoTicket.asignado,
        estadoNuevo: EstadoTicket.en_proceso,
        observacion: "Comienzo de trabajo del tecnico en el ticket",
        fecha: newFecha(1, 3, 37, 0, 0, 0),
    },
    //12
    {
        idTicket: 5,
        idUsuario: 8,
        estadoAnterior: EstadoTicket.en_proceso,
        estadoNuevo: EstadoTicket.resuelto,
        observacion: "Ticket resulto",
        fecha: newFecha(23, 0, 52, 0, 0, 0),
    },
    //13
    {
        idTicket: 5,
        idUsuario: 4,
        estadoAnterior: EstadoTicket.resuelto,
        estadoNuevo: EstadoTicket.cerrado,
        observacion: "Gracias",
        fecha: newFecha(0, 7, 0, 0, 0, 0),
    },
    //14
    {
        idTicket: 6,
        idUsuario: 5,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 1, 12, 0, 0, 0),
    },
    //15
    {
        idTicket: 7,
        idUsuario: 3,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 0, 8, 0, 0, 0),
    },
    //16
    {
        idTicket: 7,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(0, 8, 0, 0, 0, 8),
    },
    //17
    {
        idTicket: 8,
        idUsuario: 4,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 1, 23, 0, 0, 0),
    },
    //18
    {
        idTicket: 8,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(1, 23, 0, 0, 0, 50),
    },
    //19
    {
        idTicket: 8,
        idUsuario: 10,
        estadoAnterior: EstadoTicket.asignado,
        estadoNuevo: EstadoTicket.en_proceso,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(1, 23, 0, 0, 1, 30),
    },
    //20
    {
        idTicket: 9,
        idUsuario: 5,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(0, 12, 0, 0, 0, 0),
    },
    //21
    {
        idTicket: 9,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(0, 12, 0, 0, 0, 20),
    },
    //22
    {
        idTicket: 9,
        idUsuario: 10,
        estadoAnterior: EstadoTicket.asignado,
        estadoNuevo: EstadoTicket.en_proceso,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(0, 12, 0, 0, 2, 48),
    },
    //23
    {
        idTicket: 9,
        idUsuario: 10,
        estadoAnterior: EstadoTicket.en_proceso,
        estadoNuevo: EstadoTicket.resuelto,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(0, 12, 0, 0, 6, 39),
    },
    //24
    {
        idTicket: 10,
        idUsuario: 3,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.pendiente,
        observacion: "Ticket creado",
        fecha: newFecha(2, 4, 50, 0, 0, 0),
    },
    //25
    {
        idTicket: 10,
        idUsuario: 1,
        estadoAnterior: EstadoTicket.pendiente,
        estadoNuevo: EstadoTicket.asignado,
        observacion: "Ticket asignado manualmente.",
        fecha: newFecha(2, 4, 50, 0, 0, 12),
    },
    //26
    {
        idTicket: 10,
        idUsuario: 10,
        estadoAnterior: EstadoTicket.asignado,
        estadoNuevo: EstadoTicket.en_proceso,
        observacion: "Trabajando",
        fecha: newFecha(2, 4, 50, 0, 1, 23),
    },
    //27
    {
        idTicket: 10,
        idUsuario: 10,
        estadoAnterior: EstadoTicket.en_proceso,
        estadoNuevo: EstadoTicket.resuelto,
        observacion: "Listo, su problema quedo resuelto",
        fecha: newFecha(2, 4, 50, 0, 5, 5),
    },
    //28
    {
        idTicket: 10,
        idUsuario: 3,
        estadoAnterior: EstadoTicket.resuelto,
        estadoNuevo: EstadoTicket.cerrado,
        observacion: "Gracias, todo esta bien",
        fecha: newFecha(0, 20, 50, 0, 0, 0),
    }
];

export const valoraciones = [
  {
    idTicket: 10,
    idUsuario: 3,
    puntaje: 5,
    comentario: "Muy rápido y eficiente.",
    fecha: newFecha(0, 20, 50, 0, 0, 0)
  },
  {
    idTicket: 5,
    idUsuario: 4,
    puntaje: 4,
    comentario: "Resuelto, pero tardó un poco.",
    fecha: newFecha(0, 7, 0, 0, 0, 0)
  }
]
