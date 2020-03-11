import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieDbService {
    
    urlDiscover = 'https://api.themoviedb.org/3/discover/movie';
    urlSearch = 'https://api.themoviedb.org/3/search/movie';
    api_key = 'api_key=871af326ea42ac846f6291a42c4ab279';

    constructor(private http: HttpClient){}

    getMostPopular(): Observable<object> {
        return this.http.get(`${this.urlDiscover}?sort_by=popularity.desc&${this.api_key}`)
    }

    getTopRated(): Observable<object> {
        return this.http.get(`${this.urlDiscover}?certification_country=US&certification=R&sort_by=vote_average.desc&${this.api_key}`)
    }

    getPerGenre(id_genre) {
        return this.http.get(`${this.urlDiscover}?${this.api_key}&with_genres=${id_genre}`)
    }

    getPerName(name): Observable<object> {
        return this.http.get(`${this.urlSearch}?${this.api_key}&query=${name}`)
    }
    
    /*https://api.themoviedb.org/3/search/movie?api_key=871af326ea42ac846f6291a42c4ab279&query=the+avengers*/

}