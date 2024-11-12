import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../models/article.model';
import { articlesList } from '../../data/articles-data';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [FormsModule, ArticleComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})

export class ArticlesListComponent {
  articles: Article[] = articlesList
  likeFromChild: string = '';

  handleNotification(articleTitle: string) {
    this.likeFromChild = `L'article "${articleTitle}" vient d'être liké !`;

    setTimeout(() => {
      this.likeFromChild = '';
    }, 2000);
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
