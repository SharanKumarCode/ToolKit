import { Emi } from './emi';
import { Injectable } from '@angular/core';
import { SupplementService } from './supplement.service';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  constructor(private dataSuppl:SupplementService) { }

  public emiCalc: Emi = {
    principal: 0,
    roi: 0,
    period: 0,
    emi: 0
  }

  calcEmi(principal,roi,period){
    this.emiCalc.principal = principal;
    this.emiCalc.roi = roi;
    this.emiCalc.period = period;

    let roiMonth = 1 + (this.emiCalc.roi / 1200);
    let upperEmi = this.emiCalc.principal * (this.emiCalc.roi / 1200) * Math.pow(roiMonth,this.emiCalc.period);
    let lowerEmi = Math.pow(roiMonth,this.emiCalc.period) - 1;
    this.emiCalc.emi = parseFloat((upperEmi / lowerEmi).toFixed(2));

    this.dataSuppl.fireEvent('EMI : Rs '+this.emiCalc.emi,'Total Interest to be paid :\n' + 'Rs. '+(this.emiCalc.emi * this.emiCalc.period).toFixed(2))

    console.log(this.emiCalc.emi);
  }
}
