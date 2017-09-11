import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'clicloDeVidaDoComponente',
  templateUrl: './cliclo.component.html',
  styleUrls: ['./cliclo.component.css']
})
export class ClicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() valorInicial: number = 10;
  constructor() { 
    console.log('construtor');
  }

  //é um dos metodos que mais usaremos como desenvolvedor
  //dentro dele é feito a chamada para o servidor
  //para obter os dados para mostrar no template do nosso componente
  ngOnInit() {
    
  }
  // se muda o input property, somente o ngOnChanges é disparado na mudança
  ngOnChanges(){
    
  }
  ngDoCheck() {
   
  }
  ngAfterContentInit() {
    
  }
  ngAfterContentChecked() {
    
  }
  ngAfterViewInit() {
    
  }
  ngAfterViewChecked() {
    
  }
  ngOnDestroy(){
    
  }
  private log(hook: string){
  
  }

}

//outros importantes:
//ngOnChanges(changes: SimpleChanges): quando trabalho com input property e o input property muda, 
// ngOnDestroy 
  
