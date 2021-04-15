import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  onSelect(hero: Hero): void{

    this.selectedHero = hero;
  }

  

  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
