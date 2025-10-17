// import { OrdenModel } from "./OrdenModel";
// import { RoleModel } from "./RoleModel";



// export interface UsuarioModel {
//     id: number;
//     email: string;
//     nombre?: string;
//     role: RoleModel;
//     password: string;
//     ordenes: OrdenModel[];
//   }
export interface UserModel {
    id: number;
    correo: string;
    nombre: string;
    role: Roles;
    idioma: Idioma,
    imagen: string
}

export enum Roles {
    USER,
    TEC,
    ADMIN
}

export enum Idioma {
    es,
    en
}