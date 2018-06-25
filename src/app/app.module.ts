import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesMainComponent } from './pages/heroes/heroes-main/heroes-main.component';
import { HeroesDatailComponent } from './pages/heroes/heroes-datail/heroes-datail.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HeroService } from './services/hero.service';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VendedorService } from './services/vendedor.service';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HeroesMainComponent,
    HeroesDatailComponent,
    LoadingComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [
    HeroService,
    VendedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
