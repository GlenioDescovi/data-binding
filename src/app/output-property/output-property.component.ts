import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


  @Input() valor: number= 0;

  @Output() mudouValor = new EventEmitter();// para o componente pai conseguir ver os eventos.
  
  @ViewChild('campoInput') inputCampoValor: ElementRef;

  incrementa(){
    console.log(this.inputCampoValor);
    //this.valor++;
    this.inputCampoValor.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor}); //pode ser passado uma string tbm, ou objetos complexos o quanto for necessario. para o componente pai.
  }
  decrementa(){
    //this.valor--;
    this.inputCampoValor.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
