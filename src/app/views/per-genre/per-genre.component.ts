import { Component, OnInit, Input } from '@angular/core';
import { MovieDbService } from 'src/app/services/movieDb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-per-genre',
  templateUrl: './per-genre.component.html',
  styleUrls: ['./per-genre.component.scss']
})
export class PerGenreComponent implements OnInit {

    movies: any;

  constructor(private movieDbService: MovieDbService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getPerGenre();
  }

  getPerGenre() {
    const id = this.route.snapshot.queryParams['id'];
    console.log('id => ', id)
    this.movieDbService.getPerGenre(id).subscribe(
      data => this.movies = data
    );    
  }

}