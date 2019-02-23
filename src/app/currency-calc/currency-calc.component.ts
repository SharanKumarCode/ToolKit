import { CompVisibService } from './../comp-visib.service';
import { CurrencyService } from './../currency.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';
import { SupplementService } from '../supplement.service';

@Component({
  selector: 'app-currency-calc',
  templateUrl: './currency-calc.component.html',
  styleUrls: ['./currency-calc.component.scss'],
  animations: [
    trigger('fade', [
      state('void',style({opacity:0})),
      state('*',style({opacity:1})),
      transition(':enter',[
        animate(2000)
      ]),
      transition(':leave',[
        animate(1000)
      ])
    ])
  ]
})
export class CurrencyCalcComponent implements OnInit {

  public currencyList:any;

  constructor(public curren:CurrencyService,public visib:CompVisibService, public datasupp:SupplementService) { }

  ngOnInit() {
  }

  currencyCalc(currencySelect,amount){
    this.currencyList = this.curren.currencyCalc(currencySelect,amount);
  }

  onKey(){
    this.visib.setVisib('home');
    this.datasupp.setSupplVisible(false);
  }


}
