import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

 isCollapsed = false;

 genres = [
   {type: 'action', id: 28 },
   {type: 'adventure', id: 12 },
   {type: 'animation', id: 16 },
   {type: 'Comedy', id: 35 },
   {type: 'Crime', id: 80 },
   {type: 'Documentary', id: 99 },
   {type: 'Drama', id: 18 },
   {type: 'Family', id: 10751 },
   {type: 'Fantasy', id: 14 },
   {type: 'History', id: 36 },
   {type: 'Horror', id: 27 },
   {type: 'Music', id: 10402 },
   {type: 'Mystery', id: 9648 },
   {type: 'Romance', id: 10749 },
   {type: 'Science Fiction', id: 878 },
   {type: 'TV Movie', id: 10770 },
   {type: 'Thriller', id: 53 },
   {type: 'War', id: 10752 },
   {type: 'Western', id: 37 }
 ]

  inputSearch: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  getValue(value) {
    this.inputSearch = value;
    this.searchName(this.inputSearch);
  }

  searchName(nameMovie) {
    this.router.navigate([`/redirect`], { queryParams: { name: nameMovie } });
  }


}
