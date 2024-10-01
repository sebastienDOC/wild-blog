import { NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../models/article.model';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { articlesList } from '../data/articles-data';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [FormsModule, NgStyle, NgClass, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})

export class ArticlesListComponent {
  articles = articlesList

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished
  }
  toggleAllArticles(): void {
    this.articles.forEach(article => {
      article.isPublished = !article.isPublished;
    });
  }
  hasPublishedArticles(): boolean {
    return this.articles.some(article => article.isPublished);
  }
}
