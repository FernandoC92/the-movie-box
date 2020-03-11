import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movieDb.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  movies: any;

  constructor(private movieDbService: MovieDbService) { }

  ngOnInit(): void {
    this.getTopRated();
  }

  getTopRated() {
    this.movieDbService.getTopRated().subscribe(
      data => this.movies = data
    )
  }

}
