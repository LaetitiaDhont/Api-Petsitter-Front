import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../model/articles';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articlesList: Article[];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe( article => this.articlesList = article);

  }

}
