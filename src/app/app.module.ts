import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { AnnoncesListComponent } from './annonces-list/annonces-list.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const appRoutes: Routes = [
  { path: 'reservations', component: ReservationsListComponent },
  { path: 'annonces', component: AnnoncesListComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: '', component: ReservationsListComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesListComponent,
    ReservationsListComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(), MDBBootstrapModule, HttpClientModule,



  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
