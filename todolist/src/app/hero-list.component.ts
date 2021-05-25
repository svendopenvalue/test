import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  value = '';

  onChange($event: any){
    this.value = $event.target.value;
  }

  onEnter($event: any) {
    // this.value = $event.target.value;
    // if ($event.target.value){
    //   const new_hero = new Hero(this.value, "yo");
    //   this.heroes = [...this.heroes, new_hero];
    //   $event.target.value = '';
    //   this.value = '';
    // }
  }

  onClick(){
    if (this.value){
      const new_hero = new Hero(this.value, "yo");
      this.heroes = [...this.heroes, new_hero];
    }
  }


  selectHero(hero: Hero) { this.selectedHero = hero; }
}
