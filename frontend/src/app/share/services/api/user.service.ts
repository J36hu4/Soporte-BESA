import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { UserModel } from '../../models/UsuarioModel';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseAPI<UserModel> {
    override urlAPI: string = environment.apiURL;
    urlUser: string = environment.endPointUser;

    constructor(httpClient: HttpClient, private router: Router) {
        super(httpClient, environment.endPointUser);
    }

    auth(correo: string, contrasenna: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.urlAPI}/${this.urlUser}/auth`,
            { myCorreo: correo, myContrasenna: contrasenna }
        );
    }


    getUser(): UserModel | null {
        const token = sessionStorage.getItem('token');
        if (!token) return null;
        const usuario: UserModel = jwtDecode<UserModel>(token);
        console.log(usuario);
        return usuario;
    }


    isAuthenticated(): boolean {
        const token = sessionStorage.getItem('token');
        if (!token) return false;
        return true;
    }

    logOut(): void {
        sessionStorage.removeItem('token'); // Elimina el token
        this.router.navigate(['/login']); // Redirige al login
    }


}