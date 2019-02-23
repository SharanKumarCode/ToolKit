import { SupplementService } from './../supplement.service';
import { CompVisibService } from './../comp-visib.service';
import { BmiService } from './../bmi.service';
import { BmiInterface } from './bmi-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss']
})
export class BmiCalcComponent implements OnInit {

  public bmi:BmiInterface = {
    unitType:"metric",
    age:null,
    gender:null,
    weight:null,
    height:null,
    activity:null,
    bmi:null,
    bmr:null
  }

  public weightText: string = 'in Kgs';
  public heightText: string = 'in cms';

  constructor(public bmiCalc:BmiService, public visib:CompVisibService, public datasupp:SupplementService) { }

  ngOnInit() {
  }

  setUnit(event){
    this.bmi.unitType = event.target.getAttribute('data-value');
    if(this.bmi.unitType === 'metric'){
      this.weightText = 'in Kgs';
      this.heightText = 'in cms';
    } else {
      this.weightText = 'in lbs';
      this.heightText = 'in feet';
    }
  }

  setGender(event){
    this.bmi.gender = event.target.value;
  }

  calc_bmiBmr(age,weight,height,activity){
    this.bmi.age = age.value;
    this.bmi.weight = weight.value;
    this.bmi.height = height.value;
    this.bmi.activity = activity.value;
    this.bmiCalc.calc_bmiBmr(this.bmi);
  }

  onKey(){
    this.visib.setVisib('home');
    this.datasupp.setSupplVisible(false);
  }

}
