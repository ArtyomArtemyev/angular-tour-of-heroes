import {Injectable} from '@angular/core';
import {HEROES} from "../../mock-heroes";
import {Hero} from "../models/hero.model";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
