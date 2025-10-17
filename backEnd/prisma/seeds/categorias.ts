import { Prioridad } from "../../generated/prisma";

export const categorias = [
  {
    nombre: "Hardware",
    descripcion: "Incidentes relacionados con fallos físicos en dispositivos como laptops, impresoras, monitores y periféricos.",
    tiempoMaximoRespuesta: 2,
    tiempoMaximoSolucion: 24,
    prioridad: Prioridad.media,
    especialidades: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  },
  {
    nombre: "Soporte a Usuario Final",
    descripcion: "Solicitudes comunes de usuarios como creación de cuentas, restablecimiento de contraseñas y configuración de correo.",
    tiempoMaximoRespuesta: 0.5, // 30 minutos
    tiempoMaximoSolucion: 4,
    prioridad: Prioridad.media,
    especialidades: { connect: [{ id: 4 }, { id: 5 }] },
  },
  {
    nombre: "Redes y Conectividad",
    descripcion: "Problemas de conectividad como caída de internet, fallos en WiFi, VPN o cableado estructurado.",
    tiempoMaximoRespuesta: 1,
    tiempoMaximoSolucion: 8,
    prioridad: Prioridad.alta,
    especialidades: { connect: [{ id: 6 }, { id: 7 }, { id: 8 }] },
  },
  {
    nombre: "Software y Aplicaciones",
    descripcion: "Errores en aplicaciones empresariales, instalación de software, actualizaciones y gestión de licencias.",
    tiempoMaximoRespuesta: 2,
    tiempoMaximoSolucion: 12,
    prioridad: Prioridad.baja,
    especialidades: { connect: [{ id: 9 }, { id: 10 }, { id: 11 }] },
  },
  {
    nombre: "Infraestructura y Servidores",
    descripcion: "Incidentes relacionados con servidores, bases de datos, almacenamiento y copias de seguridad.",
    tiempoMaximoRespuesta: 0.25, // 15 minutos
    tiempoMaximoSolucion: 4,
    prioridad: Prioridad.alta,
    especialidades: { connect: [{ id: 12 }, { id: 13 }, { id: 14 }] },
  },
  {
    nombre: "Seguridad Informática",
    descripcion: "Amenazas como virus, malware, accesos no autorizados, phishing y vulnerabilidades técnicas.",
    tiempoMaximoRespuesta: 0.25, // 15 minutos
    tiempoMaximoSolucion: 6,
    prioridad: Prioridad.alta,
    especialidades: { connect: [{ id: 15 }, { id: 16 }, { id: 17 }] },
  }
];

export const etiquetas = [
  // 🖥️ Categoría 1: Hardware
  //1
  { idCategoria: 1, nombre: "Laptop" },
  //2
  { idCategoria: 1, nombre: "Impresora" },
  //3 
  { idCategoria: 1, nombre: "Monitor" },
  //4
  { idCategoria: 1, nombre: "Teclado" },
  //5
  { idCategoria: 1, nombre: "CPU" },
  //6
  { idCategoria: 1, nombre: "Periféricos" },
  //7

  // 👨‍💼 Categoría 2: Soporte a Usuario Final
  { idCategoria: 2, nombre: "Creación de usuario" },
  //8
  { idCategoria: 2, nombre: "Restablecimiento de contraseña" },
  //9
  { idCategoria: 2, nombre: "Configuración de correo" },
  //10
  { idCategoria: 2, nombre: "Soporte de sistemas" },
  //11
  { idCategoria: 2, nombre: "Permiso de acceso" },

  // 🌐 Categoría 3: Redes y Conectividad
  //12
  { idCategoria: 3, nombre: "Caída de internet" },
  //12
  { idCategoria: 3, nombre: "Problemas de WiFi" },
  //14
  { idCategoria: 3, nombre: "Switch dañado" },
  //15
  { idCategoria: 3, nombre: "Cableado estructurado" },
  //16
  { idCategoria: 3, nombre: "VPN" },

  // 💻 Categoría 4: Software y Aplicaciones
  //17
  { idCategoria: 4, nombre: "Errores en aplicaciones empresariales" },
  //18
  { idCategoria: 4, nombre: "Instalación de software" },
  //19
  { idCategoria: 4, nombre: "Actualizaciones" },
  //20
  { idCategoria: 4, nombre: "Licencias" },

  // 🏢 Categoría 5: Infraestructura y Servidores
  //21
  { idCategoria: 5, nombre: "Caída de servidor" },
  //22
  { idCategoria: 5, nombre: "Problemas en base de datos" },
  //23
  { idCategoria: 5, nombre: "Fallos de almacenamiento" },
  //24
  { idCategoria: 5, nombre: "Copias de seguridad" },

  // 🔐 Categoría 6: Seguridad Informática
  //25
  { idCategoria: 6, nombre: "Virus" },
  //26
  { idCategoria: 6, nombre: "Malware" },
  //27
  { idCategoria: 6, nombre: "Phishing" },
  //28
  { idCategoria: 6, nombre: "Accesos no autorizados" },
  //29
  { idCategoria: 6, nombre: "Vulnerabilidades" }
];

export const autotriage = [
  {
    nombre: "Reparaciones",
    idCategoria: 1,
    prioridad: 3,
    carga: 0,
    etiquetas: { connect: [{ id: 1 }, { id: 2 }, { id: 5 }] },
    especialidades: { connect: [{ id: 1 }] }
  }, // 1
]

