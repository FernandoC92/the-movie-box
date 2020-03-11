import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }
  fontSize = 20;
  @ViewChild('para', {static: true}) para: ElementRef;
  
  ngOnInit(): void {
    // this.list.push('PROFIT!!!');
  }

  changeFont(operator) {
    operator === '+' ? this.fontSize++ : this.fontSize--;
    (this.para.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
  }


}
