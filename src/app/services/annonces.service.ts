import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonces';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private baseUrl = 'http://localhost:8080/api/annonces';
  constructor(private httpclient: HttpClient) { }

  public getAnnonces(): Observable<Annonce[]> {
    return this.httpclient.get<Annonce[]>('http://localhost:8080/api/annonces');
   }

   public createAnnonce(annonce: Object): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}` + `/create`, annonce);
  }
}
