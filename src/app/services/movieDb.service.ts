import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieDbService {
    
    // urlDiscover = 'https://api.themoviedb.org/3/discover/movie';
    // urlSearch = 'https://api.themoviedb.org/3/search/movie';
    // api_key = 'api_key=871af326ea42ac846f6291a42c4ab279';

    urlDiscover = 'http://localhost:8080/discover'
    urlSearch = 'http://localhost:8080/search'

    constructor(private http: HttpClient){}
    
    getMostPopular(): Observable<any> {
        return this.http.get(`${this.urlDiscover}?sort_by=popularity.desc`)
    }

    getTopRated(): Observable<any> {
        return this.http.get(`${this.urlDiscover}?sort_by=vote_average.desc`)
    }

    getPerGenre(id_genre) {
        return this.http.get(`${this.urlDiscover}?with_genre=${id_genre}`)
    }

    getPerName(name): Observable<any> {
        return this.http.get(`${this.urlSearch}?query=${name}`)
    }
    
    /*https://api.themoviedb.org/3/search/movie?api_key=871af326ea42ac846f6291a42c4ab279&query=the+avengers*/

}