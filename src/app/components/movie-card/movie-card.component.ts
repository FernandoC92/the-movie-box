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
  @Input() movies: object;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

  }

  openModalWithComponent(item) {
    const initialState = {
      list: [
        item.title,
        item.voteAverage,
        item.overview,
        item.posterPath
      ],
    };
    this.bsModalRef = this.modalService.show(MovieDetailsComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Back';
  }

  arrayForString2(arr: Array<any>) {
      arr = arr.map(element => {
      switch (element) {
        case 28:
          return ' Action'
          break;
        case 878:
          return ' Science Fiction'
          break;
        case 12:
          return ' Adventure'
          break;
        case 16:
          return ' Animation'
          break;
        case 35:
          return ' Comedy'
          break;
        case 80:
          return ' Crime'
          break;
        case 99:
          return ' Documentary'
          break;
        case 18:
          return ' Drama'
          break;
        case 14:
          return ' Fantasy'
          break;
        case 36:
          return ' History'
          break;
        case 27:
          return ' Horror'
          break;
        case 10402:
          return ' Music'
          break;
        case 9648:
          return ' Mystery'
          break;
        case 10749:
          return ' Romance'
          break;
          case 10751:
          return ' Family'
          break;
        case 10770:
          return ' TV Movie'
          break;
        case 53:
          return ' Thriller'
          break;
        case 10752:
          return ' War'
          break;
        case 37:
          return ' Western'
          break;
        default: 'No have tag'
          break;
      }
    })
    
    return arr
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
