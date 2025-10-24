import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { Ticket } from '../../models/ticketModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class TicketService extends BaseAPI<Ticket> {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.endPointTicket);
  }
  
}