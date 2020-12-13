import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService,private messageService: MessageService) { }
  heroes :Hero[] = [] ;
  selectedHero :any;
  ngOnInit(): void {
    this.getHeroes();

  }

  getHeroes(): void {

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
