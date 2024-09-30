import { Routes } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: '**', component: NotFoundComponent}
];
