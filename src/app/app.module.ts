import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnnoncesListComponent } from './annonces-list/annonces-list.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'header.component.html', component: HeaderComponent },
  { path: 'annonces', component: AnnoncesListComponent },
  { path: 'reservations', component: ReservationsListComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'footer.component.html', component: FooterComponent },
  { path: 'annonces/contact', component: ContactFormComponent }


];

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    AnnoncesListComponent,
    ReservationsListComponent,
    ArticlesListComponent,
    HeaderComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    



  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
