import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movieDb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit {

  movies: any;
  params: any;

  constructor(private movideDbService: MovieDbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPerName();
  }

  getPerName() {
        this.route.queryParams.subscribe(
          data => this.params = data
        )
        console.log('query params', this.params)
        this.movideDbService.getPerName( this.params.name).subscribe(
        data => this.movies = data
      );
  }

}
