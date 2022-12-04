import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { MainComponent } from './main/main.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    VideojuegosComponent,
    MainComponent,
    UsuarioComponent,
    ContactoComponent,
    NosotrosComponent,
    LoginComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //importamos el modulo FormsModule para hacer TWB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
