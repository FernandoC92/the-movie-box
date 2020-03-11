import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDbService } from './services/movieDb.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TredingComponent } from './views/treding/treding.component';
import { TopRatedComponent } from './views/top-rated/top-rated.component';
import { GenreComponent } from './views/genre/genre.component';
import { PerGenreComponent } from './views/per-genre/per-genre.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { SearchNameComponent } from './views/search-name/search-name.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieCardComponent,
    TredingComponent,
    TopRatedComponent,
    GenreComponent,
    PerGenreComponent,
    RedirectComponent,
    SearchNameComponent,
    MovieDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [MovieDbService],
  entryComponents: [MovieDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
