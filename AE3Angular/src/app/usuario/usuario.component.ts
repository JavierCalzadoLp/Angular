import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  /* 
  Hemos creado un usario por defecto, dándole los valores en el constructor
  */

  nombreUsuario: String;
  password: String;


  constructor(){
    
    this.nombreUsuario = "JavierCalzadoLp"
    this.password="1234"

  }

 

}
