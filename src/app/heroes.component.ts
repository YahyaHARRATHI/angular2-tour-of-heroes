import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['heroes.component.css']



})
export class HeroesComponent implements OnInit {



  selectedHero: Hero;
  heroes: Hero[];



  constructor(private heroService: HeroService, private router: Router) {

  }

  ngOnInit(): void {
    this.getHeroes();

  }


  gotodetail(): void {

    this.router.navigate(['/detail', this.selectedHero.id]);

  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);


  }



  onSelect(h: Hero): void {
    this.selectedHero = h;
  }

}
