import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { articlesList } from '../data/articles-data';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule, NgStyle, HeaderComponent, FooterComponent],
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent {
  article!: Article;
  router: Router = inject(Router);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.article = articlesList.find(article => article.id === id)!;
      if (!this.article) {
        this.router.navigate(['/not-found']);
      }
    } else {
      this.router.navigate(['/not-found']);
    }
  }
}
