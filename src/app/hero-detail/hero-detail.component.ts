import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Hero} from "../common/models/hero.model";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../common/services/hero.service";
import {Subscription} from "rxjs/index";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  @Input('hero') hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sub1 = this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  goBack(): void {
    this.location.back();
  }

}
