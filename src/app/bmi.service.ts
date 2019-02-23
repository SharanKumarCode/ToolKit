import { SupplementService } from './supplement.service';
import { SupplementComponent } from './supplement/supplement.component';
import { BmiInterface } from './bmi-calc/bmi-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  private bmiServ:BmiInterface;

  constructor(private sendDatasupp:SupplementService) { }

  calc_bmiBmr(bmiCalc: BmiInterface){
    this.bmiServ = bmiCalc;

    if(this.bmiServ.unitType === "metric"){
    this.bmiServ.bmi = parseFloat((this.bmiServ.weight / Math.pow((this.bmiServ.height/100),2)).toFixed(2));
    } else {
      this.bmiServ.bmi = parseFloat((this.bmiServ.weight * 703 / Math.pow(this.bmiServ.height*12,2)).toFixed(2));
    }

    if(this.bmiServ.unitType == "metric"){
      if(this.bmiServ.gender === "male"){
        this.bmiServ.bmr = 66.5 + (13.75 * this.bmiServ.weight) + (5.003 * this.bmiServ.height) - (6.755 * this.bmiServ.age);
      } else {
        this.bmiServ.bmr = 655.1 + (9.563 * this.bmiServ.weight) + (1.850 * this.bmiServ.height) - (4.676 * this.bmiServ.age);
      }
    } else {
      if(this.bmiServ.gender === "male"){
        this.bmiServ.bmr = 66 + (6.2 * this.bmiServ.weight) + (12.7 * this.bmiServ.height) - (6.76 * this.bmiServ.age);
      } else {
        this.bmiServ.bmr = 655.1 + (4.35 * this.bmiServ.weight) + (4.7 * this.bmiServ.height) - (4.7 * this.bmiServ.age);
      }
    }

    this.bmiServ.bmr = this.bmiServ.bmr * this.bmiServ.activity;

    // this.sendDatasupp.fireEvent('BMI : ' + this.bmiServ.bmi,'Your daily Calorie requirements are : ' +this.bmiServ.bmr);
    this.sendDatasupp.fireEvent('BMI : ' + this.bmiServ.bmi,'Your daily Calorie\n requirements are : ' + this.bmiServ.bmr);

    console.log(this.bmiServ.bmi,this.bmiServ.bmr);
  }
}
