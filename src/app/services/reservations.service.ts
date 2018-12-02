import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservations';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpclient: HttpClient) { }

  public getReservations(): Observable<Reservation[]> {
    return this.httpclient.get<Reservation[]>('http://localhost:8080/api/reservations');
   }
}