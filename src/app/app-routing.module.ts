import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesMainComponent } from './pages/heroes/heroes-main/heroes-main.component';
import { HeroesDatailComponent } from './pages/heroes/heroes-datail/heroes-datail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesMainComponent
  },
  {
    path: 'detail/:id',
    component: HeroesDatailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
