import { Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { UserComponent } from './components/user/user.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'signup', component: UserComponent},
  // {path: 'signin', component: },
  {path: '**', component: NotFoundComponent}
];
