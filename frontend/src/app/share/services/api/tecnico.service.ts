import { Injectable } from "@angular/core";
import { BaseAPI } from "./base-api";
import { Tecnico } from "../../models/UsuarioModel";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class TicketService extends BaseAPI<Tecnico> {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.endPointTecnico);
  }
  
}