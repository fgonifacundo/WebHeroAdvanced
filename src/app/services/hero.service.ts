import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../_model/Hero.model';
import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService implements OnInit {
  
  
  heroes: Hero[] = [];
  heroe: Hero;

  ngOnInit(): void {
   
  }

  constructor(private _httpClient: HttpClient) {
    this.listHeroes();
  }

   listHeroes(){
    let publicKey = "3dd713652ea40d873d1eeaf335b6dfa0";
    let keyHash = "483aa97942f9d09c0ed5dc874bd8e31c";
  
    let lendPoint = `https://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=${publicKey}&hash=${keyHash}`;
    return this._httpClient.get(lendPoint)
      .pipe(
        map( (response: any) => response.data.results),
        delay(2300)
      )
      .subscribe( (result: any) => {
        console.log(result.length);
        result.forEach(element => {
            let ldescription = element.description ? element.description.substring(0,60) + " ..." : "Sin descripcion";
            this.heroes.push(new Hero(element.id, element.name, element.description, (element.thumbnail.path + "." + element.thumbnail.extension), ldescription));
        });
    });
  }

  heroeSeleccionado(idHeroe: number){
    debugger;
    this.heroe = this.heroes.find(s => s.Id == idHeroe);
  }

}
