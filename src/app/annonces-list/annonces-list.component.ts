import { Component, OnInit } from '@angular/core';
import { Annonce } from '../model/annonces';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-annonces-list',
  templateUrl: './annonces-list.component.html',
  styleUrls: ['./annonces-list.component.scss']
})
export class AnnoncesListComponent implements OnInit {

  annoncesList: Annonce[];
  constructor(private annoncesService: AnnoncesService) { }

  ngOnInit() {
    this.annoncesService.getAnnonces().subscribe( annonce => this.annoncesList = annonce);

  }

}
