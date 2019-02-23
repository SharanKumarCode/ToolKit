import { SupplementService } from './../supplement.service';
import { CompVisibService } from './../comp-visib.service';
import { EmiService } from './../emi.service';
import { Component, OnInit } from '@angular/core';
import { Emi } from '../emi';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.scss']
})
export class EmiCalcComponent implements OnInit {

  public emiCalc: Emi = {
    principal:null,
    roi:null,
    period:null,
    emi:null
  }

  public periodYears: string = '0 Years';

  constructor(public emiserv: EmiService, public visib:CompVisibService, public datasupp:SupplementService) { }

  ngOnInit() {
  }

  calcEmi(){

    this.emiserv.calcEmi(this.emiCalc.principal,this.emiCalc.roi,this.emiCalc.period);
  }

  period_year(){
    this.periodYears = ((this.emiCalc.period / 12 ).toFixed(2)).toString() + ' Years';
  }

  onKey(){
    this.visib.setVisib('home');
    this.datasupp.setSupplVisible(false);
  }
}
