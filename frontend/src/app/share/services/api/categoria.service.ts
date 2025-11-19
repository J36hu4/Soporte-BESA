import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { Categoria, Etiqueta } from '../../models/CategoriaModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class CategoriaService extends BaseAPI<Categoria> {
  override urlAPI: string = environment.apiURL;
  urlCategoria: string = environment.endPointCategoria;


  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.endPointCategoria);
  }

  getEtiquetas(): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(`${this.urlAPI}/${this.urlCategoria}/etiquetas`)
  }

}