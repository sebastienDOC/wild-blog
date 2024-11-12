import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo: string = 'https://i.ibb.co/09qftbn/Pngtree-human-with-spoon-and-fork-3628124.png'
  title: string = 'Bienvenue sur le Wild Blog de Seb !';
  subtitle: string = 'Des classiques comme la fondue savoyarde aux créations modernes comme des tartes au fromage et aux légumes, ce blog offre des recettes faciles à suivre pour tous les amateurs de fromage. Que vous soyez fan de mozzarella fondante, de chèvre frais ou de parmesan vieilli, chaque recette est pensée pour sublimer le fromage dans des plats du quotidien ou pour des occasions spéciales. Découvrez un univers de plaisir gourmand, où chaque bouchée est une explosion de saveurs crémeuses et réconfortantes.'
}
