import { Injectable } from "@angular/core";
import { BaseAPI } from "./base-api";
import { Tecnico } from "../../models/UsuarioModel";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { Observable } from "rxjs";
import { Ticket } from "../../models/ticketModel";

@Injectable({
  providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class TecnicoService extends BaseAPI<Tecnico> {
  override urlAPI: string = environment.apiURL;
  urlTecnico: string = environment.endPointTecnico;

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.endPointTecnico);
  }

  counAsignaciones(id: Number): Observable<{ total: number, bajos: number, medios: number, altos: number, asignados: number, proceso: number, resueltos: number, cerrados: number }> {
    return this.http.get<{
      total: number,
      bajos: number,
      medios: number,
      altos: number,
      asignados: number,
      proceso: number,
      resueltos: number,
      cerrados: number
    }>(`${this.urlAPI}/${this.urlTecnico}/asignaciones/count/${id}`
    );
  }

  getAsignaciones(query: string): Observable<{ lista: Ticket[]; count: number }> {
    return this.http.get<{ lista: Ticket[]; count: number }>(`${this.urlAPI}/ticket/asignaciones/search?${query}`)
  }

}