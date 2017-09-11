import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //pode ser declarado os inputs aqui tbm
  //inputs: ['nomeCurso: nome']
})
export class InputPropertyComponent implements OnInit {

  //@Input() nomeCurso: string=''; se a variavel fosse com o mesmo nome no outro html
  @Input('nome') nomeCurso: string='';
  
  constructor() { }

  ngOnInit() {
  }

}
