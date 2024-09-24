import { Component } from '@angular/core';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [],
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.scss']
})
export class ArticleComponentComponent {
  title: string = 'Tartiflette'
  imageUrl: string = "https://i.ibb.co/JK3dvBD/tartiflette.jpg"
  description: string = "La tartiflette est une recette de cuisine à base de gratin de pommes de terre, d'oignons, de lardons et de crème fraîche, le tout gratiné au reblochon"
}
