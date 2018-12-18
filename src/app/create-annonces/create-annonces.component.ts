import { Component, OnInit } from '@angular/core';
import { Annonce } from '../model/annonces';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-create-annonces',
  templateUrl: './create-annonces.component.html',
  styleUrls: ['./create-annonces.component.scss']
})
export class CreateAnnoncesComponent implements OnInit {

  annonce: Annonce = new Annonce();
  submitted = false;

  constructor(private annonceService: AnnoncesService) { }

  ngOnInit() {
  }

   newAnnonce(): void {
     this.submitted = false;
     this.annonce = new Annonce();
   }

   save() {
     this.annonceService.createAnnonce(this.annonce)
     .subscribe(data => console.log(data), error => console.log(error));
     this.annonce = new Annonce();
   }

   onSubmit() {
     this.submitted = true;
     this.save();
   }

}
