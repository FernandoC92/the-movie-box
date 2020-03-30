import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDbService } from './services/movieDb.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridMoviesComponent } from './views/grid-movies/grid-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    FooterComponent,
    GridMoviesComponent
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
