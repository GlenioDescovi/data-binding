import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string= 'http://loiane.com';
  cursoAngular: boolean= true;
  urlImagem: string= 'https://simg.minhateca.com.br/29b7da040214fe652630df4032e1a02e90cb9479?url=http%3A%2F%2Fi62.tinypic.com%2F2mw9kr9.jpg';
  valorAtual: string= '';
  valorSalvo: string='';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  valorinicial:number= 15;

  nomeDoCurso: string= 'Angular';

  //any pq nao tem ela em nenhuma classe, so para teste mesmo
  pessoa: any={
    nome: 'def',
    idade: 20
  };

  //é uma função como é typescript não precisa declarar function
  getValor(){
      return 1;
  }
    getCurtirCurso(){
      return true;
    }

    botaoClicado(){
      alert('Botão clicado!');
    }
    onkeyUp(evento: KeyboardEvent){
      console.log();
      this.valorAtual= (<HTMLInputElement> evento.target).value;
    }
    salvarValor(valor){
      this.valorSalvo= valor;
    }
    onMouseOverOut(){
      this.isMouseOver= !this.isMouseOver;
    }

    //evento que esta no data-binding html para receber o novo valor do componente output.
    onMudouValor(evento){
      //console.log(evento.novoValor);// fica assim= 1
      console.log(evento);// fica assim= {valorNovo: 1}

    }

  
  constructor() { }

  ngOnInit() {
  }

}
