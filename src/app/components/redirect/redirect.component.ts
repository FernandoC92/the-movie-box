import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }

  idGenre: number;
  name: string;

  ngOnInit(): void {
    // this.redirectPerGenre();
    this.redirectRoute();
  }

  redirectRoute() {
    const id = this.name = this.route.snapshot.queryParams['id'];
    const name = this.name = this.route.snapshot.queryParams['name'];
    if (id) {
      this.redirectPerGenre()
    } else {
      this.redirectPerName()
    }
  }

  redirectPerGenre() {
    this.idGenre = this.route.snapshot.queryParams.id;
    this.router.navigate([`genre`], {queryParams: {id: this.idGenre}})
  }

  redirectPerName() {
    this.name = this.route.snapshot.queryParams['name'];
    this.router.navigate([`/search-name`], {queryParams: { name: this.name }})
  }

}
