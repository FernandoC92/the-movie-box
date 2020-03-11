import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDbService } from './services/movieDb.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GridMovieComponent } from './views/grid-movie/grid-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TredingComponent } from './views/treding/treding.component';
import { TopRatedComponent } from './views/top-rated/top-rated.component';
import { GenreComponent } from './views/genre/genre.component';
import { PerGenreComponent } from './views/per-genre/per-genre.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { SearchNameComponent } from './views/search-name/search-name.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GridMovieComponent,
    MovieCardComponent,
    TredingComponent,
    TopRatedComponent,
    GenreComponent,
    PerGenreComponent,
    RedirectComponent,
    SearchNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
