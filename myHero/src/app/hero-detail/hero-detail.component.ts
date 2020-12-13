import { Component, OnInit ,Input} from '@angular/core';

import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  hero:any;
  ngOnInit(): void {
    this.gethero();
  }

  gethero():void{
    var id = this.route.snapshot.paramMap.get('id');
    if (id!= null){
      this.heroService.getHero(+id).subscribe(hero => this.hero = hero);
    }
  }

  goBack():void{
    this.location.back();
  }

  

  

}
