import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  imagen100 = "./assets/fifa.svg";
  imagen200 = "./assets/poker.svg";
  imagen300 = "./assets/dance.svg";
  imagen400 = "./assets/pro.svg";
  imagen500 = "./assets/golf.svg";
  imagen600 = "./assets/lol.svg";
  imagen700 = "./assets/basket.svg";
  imagen800 = "./assets/rain.svg";

  listaVideojuegos = [
    {id: 100, titulo:'FIFA', compania:'EA', imagen: '', valoracionMedia:'4,5 de 5 estrellas'},
    {id: 200, titulo:'PÓKER', compania:'SEGA', imagen: '', valoracionMedia:'4 de 5 estrellas'},
    {id: 300, titulo:'DANCE', compania:'SONY', imagen: '', valoracionMedia:'4,7 de 5 estrellas'},
    {id: 400, titulo:'PRO', compania:'EA', imagen: '', valoracionMedia:'5 de 5 estrellas'},
    {id: 500, titulo:'GOLF', compania:'EA', imagen: '', valoracionMedia:'4 de 5 estrellas'},
    {id: 600, titulo:'LOL', compania:'SEGA', imagen: '', valoracionMedia:'4,5 de 5 estrellas'},
    {id: 700, titulo:'BASKET', compania:'EA', imagen: '', valoracionMedia:'3,5 de 5 estrellas'},
    {id: 800, titulo:'RAIN', compania:'SONY', imagen: '', valoracionMedia:'5 de 5 estrellas'}

  ]
  

 
  constructor(){


  }

}
