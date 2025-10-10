import { Prioridad } from "../../generated/prisma";

export const categorias = [
  {
    nombre: "Hardware",
    descripcion: "Incidentes relacionados con fallos físicos en dispositivos como laptops, impresoras, monitores y periféricos.",
    tiempoMaximoRespuesta: 2, 
    tiempoMaximoSolucion: 24, 
    prioridad: Prioridad.media,
    especialidades: { connect: [{id: 1}, {id: 2}, {id: 3}] },
  },
  {
    nombre: "Soporte a Usuario Final",
    descripcion: "Solicitudes comunes de usuarios como creación de cuentas, restablecimiento de contraseñas y configuración de correo.",
    tiempoMaximoRespuesta: 0.5, // 30 minutos
    tiempoMaximoSolucion: 4, 
    prioridad: Prioridad.media,
    especialidades: { connect: [{id: 4}, {id: 5}] },
  },
  {
    nombre: "Redes y Conectividad",
    descripcion: "Problemas de conectividad como caída de internet, fallos en WiFi, VPN o cableado estructurado.",
    tiempoMaximoRespuesta: 1, 
    tiempoMaximoSolucion: 8, 
    prioridad: Prioridad.alta,
    especialidades: { connect: [{id: 6}, {id: 7}, {id: 8}] },
  },
  {
    nombre: "Software y Aplicaciones",
    descripcion: "Errores en aplicaciones empresariales, instalación de software, actualizaciones y gestión de licencias.",
    tiempoMaximoRespuesta: 2, 
    tiempoMaximoSolucion: 12, 
    prioridad: Prioridad.baja,
    especialidades: { connect: [{id: 9}, {id: 10}, {id: 11}] },
  },
  {
    nombre: "Infraestructura y Servidores",
    descripcion: "Incidentes relacionados con servidores, bases de datos, almacenamiento y copias de seguridad.",
    tiempoMaximoRespuesta: 0.25, // 15 minutos
    tiempoMaximoSolucion: 4, 
    prioridad: Prioridad.alta,
    especialidades: { connect: [{id: 12}, {id: 13}, {id: 14}] },
  },
  {
    nombre: "Seguridad Informática",
    descripcion: "Amenazas como virus, malware, accesos no autorizados, phishing y vulnerabilidades técnicas.",
    tiempoMaximoRespuesta: 0.25, // 15 minutos
    tiempoMaximoSolucion: 6, 
    prioridad: Prioridad.alta,
    especialidades: { connect: [{id: 15}, {id: 16}, {id: 17}] },
  }
];

export const etiquetas = [
  // 🖥️ Categoría 1: Hardware
  { idCategoria: 1, nombre: "Laptop" },
  { idCategoria: 1, nombre: "Impresora" },
  { idCategoria: 1, nombre: "Monitor" },
  { idCategoria: 1, nombre: "Teclado" },
  { idCategoria: 1, nombre: "CPU" },
  { idCategoria: 1, nombre: "Periféricos" },

  // 👨‍💼 Categoría 2: Soporte a Usuario Final
  { idCategoria: 2, nombre: "Creación de usuario" },
  { idCategoria: 2, nombre: "Restablecimiento de contraseña" },
  { idCategoria: 2, nombre: "Configuración de correo" },
  { idCategoria: 2, nombre: "Soporte de sistemas" },
  { idCategoria: 2, nombre: "Permiso de acceso" },

  // 🌐 Categoría 3: Redes y Conectividad
  { idCategoria: 3, nombre: "Caída de internet" },
  { idCategoria: 3, nombre: "Problemas de WiFi" },
  { idCategoria: 3, nombre: "Switch dañado" },
  { idCategoria: 3, nombre: "Cableado estructurado" },
  { idCategoria: 3, nombre: "VPN" },

  // 💻 Categoría 4: Software y Aplicaciones
  { idCategoria: 4, nombre: "Errores en aplicaciones empresariales" },
  { idCategoria: 4, nombre: "Instalación de software" },
  { idCategoria: 4, nombre: "Actualizaciones" },
  { idCategoria: 4, nombre: "Licencias" },

  // 🏢 Categoría 5: Infraestructura y Servidores
  { idCategoria: 5, nombre: "Caída de servidor" },
  { idCategoria: 5, nombre: "Problemas en base de datos" },
  { idCategoria: 5, nombre: "Fallos de almacenamiento" },
  { idCategoria: 5, nombre: "Copias de seguridad" },

  // 🔐 Categoría 6: Seguridad Informática
  { idCategoria: 6, nombre: "Virus" },
  { idCategoria: 6, nombre: "Malware" },
  { idCategoria: 6, nombre: "Phishing" },
  { idCategoria: 6, nombre: "Accesos no autorizados" },
  { idCategoria: 6, nombre: "Vulnerabilidades" }
];

