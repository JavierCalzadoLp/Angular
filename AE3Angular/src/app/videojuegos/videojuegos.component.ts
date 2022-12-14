import { ImageConfig } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent {

 //Creamos las variables dondo se incluyen las imagenes, que posteriormente serán llamadas desde el HTML
  imagen100 = "./assets/fifa.svg";
  imagen200 = "./assets/poker.svg";
  imagen300 = "./assets/dance.svg";
  imagen400 = "./assets/pro.svg";
  imagen500 = "./assets/golf.svg";
  imagen600 = "./assets/lol.svg";
  imagen700 = "./assets/basket.svg";
  imagen800 = "./assets/rain.svg";

  /*
  Hemos creado una lista de videojuegos con sus atributos y sus valores
  */

  listaVideojuegos = [
    {id: 100, titulo:'FIFA', compañia:'EA', imagen: '', valoracionMedia:'4,5 de 5 estrellas'},
    {id: 200, titulo:'PÓKER', compañia:'SEGA', imagen: '', valoracionMedia:'4 de 5 estrellas'},
    {id: 300, titulo:'DANCE', compañia:'SONY', imagen: '', valoracionMedia:'4,7 de 5 estrellas'},
    {id: 400, titulo:'PRO', compañia:'EA', imagen: '', valoracionMedia:'5 de 5 estrellas'},
    {id: 500, titulo:'GOLF', compañia:'EA', imagen: '', valoracionMedia:'4 de 5 estrellas'},
    {id: 600, titulo:'LOL', compañia:'SEGA', imagen: '', valoracionMedia:'4,5 de 5 estrellas'},
    {id: 700, titulo:'BASKET', compañia:'EA', imagen: '', valoracionMedia:'3,5 de 5 estrellas'},
    {id: 800, titulo:'RAIN', compañia:'SONY', imagen: '', valoracionMedia:'5 de 5 estrellas'}

  ]
  

 
  constructor(){


  }

}
