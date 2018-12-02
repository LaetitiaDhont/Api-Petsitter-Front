import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservations';
import { ReservationService } from '../services/reservations.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss']
})
export class ReservationsListComponent implements OnInit {

  reservationsList: Reservation[];

  constructor(private reservationsService: ReservationService) { }

  ngOnInit() {
    this.reservationsService.getReservations().subscribe(reservation => this.reservationsList = reservation);

  }

}
