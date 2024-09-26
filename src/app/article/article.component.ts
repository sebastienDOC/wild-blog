import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  article = {
    title: 'Tartiflette',
    author: 'Seb D.',
    content: "La tartiflette est une recette de cuisine à base de gratin de pommes de terre, d'oignons, de lardons et de crème fraîche, le tout gratiné au reblochon",
    image: 'https://i.ibb.co/JK3dvBD/tartiflette.jpg',
    isPublished: true,
    comment: '',
    likes: 120
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

}
