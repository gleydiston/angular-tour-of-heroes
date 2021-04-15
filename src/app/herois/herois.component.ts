import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  herois = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void{

    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
