import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movieDb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-movies',
  templateUrl: './grid-movies.component.html',
  styleUrls: ['./grid-movies.component.scss']
})
export class GridMoviesComponent implements OnInit {

  genre = this.route.snapshot.queryParams.idGenre;
  name = this.route.snapshot.queryParams.name;
  trend = this.route.snapshot.queryParams.trend;
  topRated = this.route.snapshot.queryParams.topRated;
  movies: object;

  constructor(
    private movieDbService: MovieDbService,
    private route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.selectService();
  }

  selectService() {
      if (this.trend) {
        this.movieDbService.getMostPopular().subscribe(
          data => {
            this.movies = data
          } 
        ) 
      } if (this.genre) {
          this.movieDbService.getPerGenre(this.genre).subscribe(
            data => this.movies = data
          )
        } if (this.name) {
              this.movieDbService.getPerName(this.name).subscribe(
                data => this.movies = data
              )
        } if (this.topRated) {
          this.movieDbService.getTopRated().subscribe(
            data => this.movies = data
          )
    }

      
  }



}
