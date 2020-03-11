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
    this.bsModalRef = this.modalService.show(MovieDetailsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Back';
  }

}
