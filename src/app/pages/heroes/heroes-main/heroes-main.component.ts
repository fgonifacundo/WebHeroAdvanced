import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroService } from '../../../services/hero.service';
import { Hero } from '../../../_model/Hero.model';
import swal from 'sweetalert2'

@Component({
  selector: 'app-heroes-main',
  templateUrl: './heroes-main.component.html',
  styleUrls: [
    
  ]
})
export class HeroesMainComponent implements OnInit {

  busqueda: string = "";
  heroes: Hero[] = [];

  constructor(private _heroService: HeroService) { 
    this.heroes = this._heroService.heroes;
  }

  ngOnInit() {
    
  }

  buscar(){
    
    
    swal("Operación Exitosa!", "Se generó correctamente la reserva!", "success");
  }

  keyUp(texto: string){
    this.heroes = this._heroService.heroes.filter(t => t.Nombre.toLowerCase().includes(texto.toLocaleLowerCase()));
  }

}
