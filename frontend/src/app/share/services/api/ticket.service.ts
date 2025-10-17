import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { TicketsModel } from '../../models/ticketModel';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseAPI<TicketsModel> {

    constructor(httpClient: HttpClient) { 
        super(
          httpClient,
          environment.endPointTicket);
      }
}