import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { Categoria } from '../../models/CategoriaModel';

@Injectable({
  providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class CategoriaService extends BaseAPI<Categoria> {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.endPointCategoria);
  }
  
}