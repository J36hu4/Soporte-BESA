import { Role, MotivoDisponible } from "../../generated/prisma";
export const usuarios = [
  // Administradores
  {
    nombre_completo: "Jeshua Herrera Salas",
    nombre: "Jeshua",
    apellidos: "Herrera Salas",
    correo: "jeshua.herrera@admin.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.ADMIN,
    imagen: 'PassaportFt.png'
  },
  {
    nombre_completo: "Administrador General",
    nombre: "Admin",
    apellidos: "General",
    correo: "admin@admin.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.ADMIN,
    imagen: 'notImage.png'
  },

  // Usuarios
  {
    nombre_completo: "Sofía Jiménez",
    nombre: "Sofía",
    apellidos: "Jiménez",
    correo: "sofia.jimenez@besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    imagen: 'sofia.png'
  },
  {
    nombre_completo: "Pedro Vargas",
    nombre: "Pedro",
    apellidos: "Vargas",
    correo: "pedro.vargas@besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    imagen: 'pedro.png'
  },
  {
    nombre_completo: "Laura Fernández",
    nombre: "Laura",
    apellidos: "Fernández",
    correo: "laura.fernandez@besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    imagen: 'laura.png'
  },

  // Técnicos
  {
    nombre_completo: "Luis Vega",
    nombre: "Luis",
    apellidos: "Vega",
    correo: "luis.vega@tec.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.TEC,
    imagen: 'luis.png'
  },
  {
    nombre_completo: "María Solano",
    nombre: "María",
    apellidos: "Solano",
    correo: "maria.solano@tec.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.TEC,
    imagen: 'maria.png'
  },
  {
    nombre_completo: "Jorge Castillo",
    nombre: "Jorge",
    apellidos: "Castillo",
    correo: "jorge.castillo@tec.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.TEC,
    imagen: 'notImage.png'
  },
  {
    nombre_completo: "Andrea Mora",
    nombre: "Andrea",
    apellidos: "Mora",
    correo: "andrea.mora@tec.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.TEC,
    imagen: 'andrea.png'
  },
  {
    nombre_completo: "David Rojas",
    nombre: "David",
    apellidos: "Rojas",
    correo: "david.rojas@tec.besa.com",
    contrasenna: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.TEC,
    imagen: 'david.png'
  },
];




export const tecnicos = [
  {
    id: 6, // Luis Vega
    disponible: true,
    motivoDisponible: MotivoDisponible.disponible,
    fechaDisponible: new Date(),
    carga: 2,
    especialidades: {
      connect: [
        { id: 1 }, // Técnico en reparación de equipos
        { id: 2 }, // Electrónica básica
        { id: 3 }  // Mantenimiento preventivo/correctivo
      ]
    }
  },
  {
    id: 7, // María Solano
    disponible: true,
    motivoDisponible: MotivoDisponible.disponible,
    fechaDisponible: new Date(),
    carga: 0,
    especialidades: {
      connect: [
        { id: 4 }, // Administración de directorios activos (AD)
        { id: 5 }, // Soporte de sistemas
        { id: 11 } // Soporte de aplicaciones empresariales
      ]
    }
  },
  {
    id: 8, // Jorge Castillo
    disponible: true,
    motivoDisponible: MotivoDisponible.disponible,
    fechaDisponible: new Date(),
    carga: 0,
    especialidades: {
      connect: [
        { id: 6 }, // Técnico en redes
        { id: 7 }, // Administración de infraestructura de red
        { id: 8 }  // Telecomunicaciones
      ]
    }
  },
  {
    id: 9, // Andrea Mora
    disponible: true,
    motivoDisponible: MotivoDisponible.disponible,
    fechaDisponible: new Date(),
    carga: 0,
    especialidades: {
      connect: [
        { id: 9 },  // Ingeniero de software
        { id: 10 }, // Soporte de aplicaciones empresariales
        { id: 11 }  // Gestión de sistemas operativos
      ]
    }
  },
  {
    id: 10, // David Rojas
    disponible: true,
    motivoDisponible: MotivoDisponible.disponible,
    fechaDisponible: new Date(),
    carga: 6,
    especialidades: {
      connect: [
        { id: 12 }, // Administrador de servidores
        { id: 13 }, // DBA
        { id: 14 }, // Ingeniero de sistemas
        { id: 15 }, // Especialista en ciberseguridad
        { id: 16 }, // Gestión de firewalls
        { id: 17 }  // Monitoreo SIEM
      ]
    }
  }
];

