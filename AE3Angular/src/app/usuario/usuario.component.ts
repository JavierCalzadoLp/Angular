import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  nombreUsuario: String;
  password: String;


  constructor(){
    this.nombreUsuario = "JavierCalzadoLp"
    this.password="1234"

  }

 

}
