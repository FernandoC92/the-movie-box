import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movieDb.service';

@Component({
  selector: 'app-treding',
  templateUrl: './treding.component.html',
  styleUrls: ['./treding.component.scss']
})
export class TredingComponent implements OnInit {

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
