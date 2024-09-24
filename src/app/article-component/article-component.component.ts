import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.scss']
})
export class ArticleComponentComponent {
  article = {
    title: 'Tartiflette',
    author: 'Seb D.',
    content: "La tartiflette est une recette de cuisine à base de gratin de pommes de terre, d'oignons, de lardons et de crème fraîche, le tout gratiné au reblochon",
    image: 'https://i.ibb.co/JK3dvBD/tartiflette.jpg',
    isPublished: true,
    comment: ''
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

}
