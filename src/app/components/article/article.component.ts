import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { articlesList } from '../../data/articles-data';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class ArticleComponent implements OnInit{
  @Input() article!: Article;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  router: Router = inject(Router);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.article = articlesList.find(article => article.id === id)!;
    }
    if (!this.article) {
      this.router.navigate(['/not-found']);
    }
  }

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished
  }

  sendNotification() {
    this.notifyParent.emit(this.article.title);
  }
}
