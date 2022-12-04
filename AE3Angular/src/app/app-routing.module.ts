import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  /*{
    path : 'main',
    component : MainComponent
  },*/
  { 
    path : 'videojuegos',
    component : VideojuegosComponent
  },

  {
    path : 'contacto',
    component : ContactoComponent
  },
  {
    path : 'nosotros',
    component : NosotrosComponent
  },
  {
    path : 'detalles',
    component : DetallesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
