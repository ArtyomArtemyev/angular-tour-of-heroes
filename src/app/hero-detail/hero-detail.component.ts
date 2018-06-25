import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../common/models/hero.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input('hero') hero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
