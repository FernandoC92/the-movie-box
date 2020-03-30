import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  bsModalRef: BsModalRef;
  @Input() movies: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

    console.log(this.movies)

    setTimeout(() => {
      console.log('Hello world!')
      for (let index = 0; index < this.movies.results.length; index++) {
        const element = this.movies.results[index].genre_ids;
      }
    }, 3000);

  }

  openModalWithComponent(item) {
    const initialState = {
      list: [
        item.title,
        item.vote_average,
        item.overview,
        item.poster_path
      ],
    };
    this.bsModalRef = this.modalService.show(MovieDetailsComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Back';
  }

  arrayForString(arr): string {
    let genreString = '';
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case 28:
          genreString += 'Action, '
          break;
        case 878:
          genreString += 'Science Fiction, '
          break;
        case 12:
          genreString += 'Adventure, '
          break;
        case 16:
          genreString += 'Animation, '
          break;
        case 35:
          genreString += 'Comedy, '
          break;
        case 80:
          genreString += 'Crime, '
          break;
        case 99:
          genreString += 'Documentary, '
          break;
        case 18:
          genreString += 'Drama, '
          break;
        case 14:
          genreString += 'Fantasy, '
          break;
        case 36:
          genreString += 'History, '
          break;
        case 27:
          genreString += 'Horror, '
          break;
        case 10402:
          genreString += 'Music, '
          break;
        case 9648:
          genreString += 'Mystery, '
          break;
        case 10749:
          genreString += 'Romance, '
          break;
        case 10770:
          genreString += 'TV Movie, '
          break;
        case 53:
          genreString += 'Thriller, '
          break;
        case 10752:
          genreString += 'War, '
          break;
        case 37:
          genreString += 'Western, '
          break;
        default: genreString += 'No have tag, '
          break;
      }

    }
    return genreString;
  }

}
