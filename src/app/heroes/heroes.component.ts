import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from "../common/models/hero.model";
import {HEROES} from '../mock-heroes';
import {HeroService} from "../common/services/hero.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  selectedHero: Hero;
  heroes: Hero [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
