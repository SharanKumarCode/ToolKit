import { CalcService } from './../calc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  

  constructor( public calc:CalcService ) {

  }

  ngOnInit() {
  }

  onKey(event){
    this.calc.onKey(event);
  }


}