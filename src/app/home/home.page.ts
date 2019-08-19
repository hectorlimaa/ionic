import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { cliente } from 'src/modelo/cliente';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public clientes: cliente[];
  constructor(public navCtrl:NavController) {

    this.clientes = [
      {id:1,nome: "Megan Fox", telefone:"2424-2424", imagem:"assets/megan.png", endereco: "Rua A"},
      {id:2,nome: "Nicky Minaj", telefone:"1212-1212", imagem: "assets/nicky.png", endereco: "Rua B"},
      {id:3,nome: "Rihanna", telefone:"1212-1212", imagem: "assets/rihanna.jfif", endereco: "Rua C"}, 
      {id:4,nome: "Cardi B", telefone:"1212-1212", imagem: "assets/cardi.jfif", endereco: "Rua D"},
      {id:5,nome: "Travis", telefone:"1212-1212", imagem: "assets/travis.jfif", endereco: "Rua E"},
      {id:6,nome: "Rocky", telefone:"1212-1212", imagem: "assets/rocky.jfif",  endereco: "Rua F"}, 
      {id:7,nome: "Carti", telefone:"1212-1212", imagem: "assets/carti.jfif",  endereco: "Rua G"},
      {id:8,nome: "Lil uzi", telefone:"1212-1212", imagem: "assets/uzi.jpg",  endereco: "Rua H"},
      {id:9,nome: "Lil pump", telefone:"1212-1212", imagem: "assets/pump.jfif",  endereco: "Rua I"},
      {id:10,nome: "Drake", telefone:"1212-1212", imagem: "assets/drake.jfif",  endereco: "Rua J"}

      


    ];


  }

  selecionarCliente(cliente:cliente)
  { 
   // console.log("este é um teste de um método " + cliente.nome + " " + cliente.telefone+ " " + cliente.endereco) ;
   // alert(cliente.nome + cliente.telefone + cliente.endereco);

    this.navCtrl.navigateForward('/escolha')


  }

  cliqueSobre(cliente:cliente)
  {
    this.navCtrl.navigateForward('/sobre')
  }

}
