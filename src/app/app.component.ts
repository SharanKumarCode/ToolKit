import { CompVisibService } from './comp-visib.service';
import { SupplementService } from './supplement.service';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('void',style({opacity:0})),
      state('*',style({opacity:1})),
      transition(':enter',[
        animate(1000)
      ])
    ]),
    trigger('rotateCalc',[
      state('home',style({transform: 'rotateY(0)'})),
      state('calc',style({transform: 'rotateY(-90deg)'})),
      state('emi',style({transform: 'rotateY(90deg)'})),
      state('bmi',style({transform: 'rotateX(-90deg)'})),
      state('toDo',style({transform: 'rotateY(180deg)'})),
      state('currency',style({transform: 'rotateX(90deg)'})),
      transition('home <=> calc , home <=>emi, home <=> emi, home <=> bmi, home <=> toDo, home <=>currency',[
        animate('600ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {

  private side: string = this.visibComp.state;

  constructor(public dataSupp:SupplementService, public visibComp:CompVisibService){

  }

  
}
