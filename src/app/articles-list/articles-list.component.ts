import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleComponent } from '../article/article.component';
import { articlesList } from '../data/articles-data';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [FormsModule, NgStyle, NgClass, HeaderComponent, FooterComponent, ArticleComponent, RouterLink],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})

export class ArticlesListComponent {
  articles: Article[] = articlesList

  toggleAllArticles(): void {
    this.articles.forEach(article => {
      article.isPublished = !article.isPublished;
    });
  }
  hasPublishedArticles(): boolean {
    return this.articles.some(article => article.isPublished);
  }
}
