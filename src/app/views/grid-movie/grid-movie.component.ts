import { Component, OnInit, Output } from '@angular/core';
import { MovieDbService } from 'src/app/services/movieDb.service';

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.scss']
})
export class GridMovieComponent implements OnInit {

  movies: any;

  constructor(private movieDbServices: MovieDbService) { }

  ngOnInit(): void {
      this.mostPopular();
      setTimeout(() => {
        console.log(this.movies)
      }, 2000);
  }

  mostPopular() {
    this.movieDbServices.getMostPopular().subscribe(
      data => this.movies = data
      )
  }



}
