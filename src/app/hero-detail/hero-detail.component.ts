import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Hero} from "../common/models/hero.model";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../common/services/hero.service";
import {Subscription} from "rxjs/index";
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;
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

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sub1 = this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.sub2 = this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }


}
