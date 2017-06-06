import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServicesApiMarvel {

  constructor(private http: Http) { }


  getCharactersAll() {
    return this.http.get("http://gateway.marvel.com/v1/public/characters?apikey=20f56aa12d770b4b367aea812d88f234&ts=1&hash=a39522a08ef5a982f4ead54b5b92ce53&limit=100")
      .map(res => res.json());
  }


  getCharactersFilter(filter: string) {
    return this.http.get("http://gateway.marvel.com/v1/public/characters?apikey=20f56aa12d770b4b367aea812d88f234&ts=1&hash=a39522a08ef5a982f4ead54b5b92ce53&limit=100&nameStartsWith=" + filter)
      .map(res => res.json());
  }
} 