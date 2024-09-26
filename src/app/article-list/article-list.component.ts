import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [FormsModule, NgStyle, NgClass],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})

export class ArticleListComponent {
  articles = [
    new Article(
      'Tartiflette',
      'Seb D.',
      "La tartiflette est une recette de cuisine à base de gratin de pommes de terre...",
      'https://i.ibb.co/JK3dvBD/tartiflette.jpg',
      true,
      '',
      120,
    ),
    new Article(
      'Raclette',
      'Coline L.',
      "La raclette est une recette de cuisine traditionnelle et emblématique de la cuisine suisse.",
      'https://i.ibb.co/J7PZTs3/appareil-a-raclette-demi-meule-1.jpg',
      true,
      '',
      200
    ),
    new Article(
      'Fondue',
      'Joffrey M.',
      "Une fondue est une spécialité culinaire consistant à plonger des aliments dans un récipient de liquide chaud.",
      'https://i.ibb.co/3FD7byj/fondue-savoyarde-1.png',
      true,
      '',
      75
    ),
    new Article(
      "Mont d'Or",
      'Rémy L.',
      "Le Mont d'Or cuit au four est un incontournable de l'hiver. Servez-le avec des pommes de terre et des charcuteries pour une expérience gustative inoubliable.",
      'https://i.ibb.co/8NkzjBm/adobestock-628868034.jpg',
      true,
      '',
      286
    ),
    new Article(
      'Grilled cheese',
      'Florian V.',
      "Un classique venu tout droit des États-Unis, le grilled cheese est un sandwich ultra-réconfortant avec une profusion de fromage fondu.",
      'https://i.ibb.co/4FmkVWD/adobestock-155440784.jpg',
      true,
      '',
      19
    ),
    new Article(
      'Tarte au maroilles',
      'Laura I.',
      "Les amateurs de fromage ne pourront pas résister à cette délicieuse tarte au Maroilles, fromage emblématique du Nord de la France.",
      'https://i.ibb.co/tL6mXy6/tarte-maroille.jpg',
      true,
      '',
      76
    )
  ];

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished
  }
  hasPublishedArticles(): boolean {
    return this.articles.some(article => article.isPublished);
  }

}
