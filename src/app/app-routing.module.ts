import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TredingComponent } from './views/treding/treding.component';
// import { TopRatedComponent } from './views/top-rated/top-rated.component';
// import { PerGenreComponent } from './views/per-genre/per-genre.component';
import { RedirectComponent } from './components/redirect/redirect.component';
// import { SearchNameComponent } from './views/search-name/search-name.component';
import { GridMoviesComponent } from './views/grid-movies/grid-movies.component';

const routes: Routes = [
  {
    path: '',
    component: RedirectComponent
  },
  {
    path: 'result',
    component: GridMoviesComponent
  },
  {
    path: 'redirect',
    component: RedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
