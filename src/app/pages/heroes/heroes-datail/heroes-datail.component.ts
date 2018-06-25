import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../_model/Hero.model';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'app-heroes-datail',
  templateUrl: './heroes-datail.component.html',
  styles: []
})
export class HeroesDatailComponent implements OnInit {


  heroe: Hero;

  constructor(private _activateRoute: ActivatedRoute, private _heroService: HeroService) {
    this._activateRoute.params.subscribe(params => {
      this._heroService.heroeSeleccionado(params['id']);
    })

   }

  ngOnInit() {
    this.heroe = this._heroService.heroe;
  }

}
