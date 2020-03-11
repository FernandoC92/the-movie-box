import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TredingComponent } from './views/treding/treding.component';
import { TopRatedComponent } from './views/top-rated/top-rated.component';
import { PerGenreComponent } from './views/per-genre/per-genre.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { SearchNameComponent } from './views/search-name/search-name.component';

const routes: Routes = [
  {
    path: '',
    component: TredingComponent
  },
  {
    path: 'top-rated',
    component: TopRatedComponent
  },
  {
    path: 'genre',
    component: PerGenreComponent
  },
  {
    path: 'redirect',
    component: RedirectComponent
  },
  {
    path: 'search-name',
    component: SearchNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
