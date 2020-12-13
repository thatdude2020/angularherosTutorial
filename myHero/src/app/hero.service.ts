import { Injectable } from '@angular/core';
import {HEROES} from './mock-heros';
import {Hero} from './hero';
import { Observable, of} from 'rxjs';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService:MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messagesService.addMessage('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero| undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.addMessage(`HeroService: fetched hero id=${id}`);
    const hero = HEROES.find(element => element.id === id);
    return of(hero);
  }
}
