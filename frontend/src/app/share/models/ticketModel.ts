export interface TicketsModel {
    id: number,
    usuario: {nombre: string},
    etiqueta: {nombre: string, categoria: {nombre: string, prioridad: string}},
    titulo: string,
    fechaCreacion: Date,
    estado: string

//     email: string;
//     nombre?: string;
//     role: RoleModel;
//     password: string;
//     ordenes: OrdenModel[];
}