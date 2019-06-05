import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UsuarioService]
})

export class HomePage {

  public usuarios = [];
  public usuarioCadastro = {"nome":"", "idade":null};

  constructor( private usuarioService:UsuarioService){
    this.getUsuarios();
  }

  public getUsuarios(){

    this.usuarioService.findAll().subscribe(response => this.usuarios = response );

  }

  public salvarUsuario(){
    this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
  }
  
}
