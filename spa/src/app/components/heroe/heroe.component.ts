import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../sevicios/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};
  heroeCasa:string = "";
  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router:Router
              ) {

    this.activateRoute.params.subscribe( params => {
        this.heroe = this._heroesService.getHeroe( params['id'] );

        this.heroeCasa = this._heroesService.getHeroeCasa( params['id']);

    } )

  }
  ngOnInit(): void {

  }
}
