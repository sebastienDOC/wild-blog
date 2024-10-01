import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: '**', component: NotFoundComponent}
];
