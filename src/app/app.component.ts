import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlePageComponent } from "./article-page/article-page.component";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, ArticlePageComponent, ArticlesListComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
