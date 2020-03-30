import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor( 
    private router: Router, 
    private route: ActivatedRoute ) { }

  idGenre = this.route.snapshot.queryParams.idGenre;
  name = this.route.snapshot.queryParams.name;
  topRated = this.route.snapshot.queryParams.topRated;

  ngOnInit(): void {
    this.redirectRoute();
  }

  redirectRoute() {

    if (this.idGenre) {
      this.redirectPerGenre();
    } else if  (this.name) {
      this.redirectPerName(); 
    } else if  (this.topRated) {
      this.redirectTopRated(); 
    }
     else {
      this.redirecPerTrend();
    }

  }

  redirectPerGenre() {
    console.log(this.idGenre)
    this.router.navigate([`result`], {queryParams: {idGenre: this.idGenre}})
  }

  redirectPerName() {
    this.router.navigate([`/result`], {queryParams: { name: this.name }})
  }

  redirecPerTrend() {
    this.router.navigate(['result'], {queryParams: {trend: true}});
  }

  redirectTopRated() {
    this.router.navigate(['result'], {queryParams: {topRated: true}})
  }

}
