import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Article } from '../model/articles';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpclient: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.httpclient.get<Article[]>('http://localhost:8080/api/articles');
   }
}