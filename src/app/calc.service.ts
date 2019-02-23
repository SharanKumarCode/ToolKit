import { CompVisibService } from './comp-visib.service';
import { Calculator } from './calculator';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(public visib:CompVisibService) { }

  public calculator: Calculator = {
    dispVal: '0',
    num_1: null,
    isSecondOper: false,
    operator: null
  };

  onKey(event){
    let e = event.target;
    let e_class = e.getAttribute("class");
    let e_val = e.value;
    console.log(e_class);

    if(this.calculator.isSecondOper === true && e_class === 'number-button'){
      this.calculator.dispVal = e_val;
      this.calculator.isSecondOper = false;
    } else {
    
    if(e_class === 'number-button'){
      if(e_val === '.' && !this.calculator.dispVal.includes('.')){
          this.calculator.dispVal = this.calculator.dispVal === '0' ? e_val : this.calculator.dispVal + e_val;
      } else if(e_val !== '.') {
      this.calculator.dispVal = this.calculator.dispVal === '0' ? e_val : this.calculator.dispVal + e_val;
      }
    }
    }

    if(e_class === 'operator-button'){
      this.operatorFunc(e_val);
    }

    if(e_class === 'reset-button'){
      this.calculator.dispVal = '0';
      this.calculator.num_1 = null;
      this.calculator.isSecondOper = false;
      this.calculator.operator = null;
    }

    if(e_class === 'clear-button'){
      this.calculator.dispVal = this.calculator.dispVal.slice(0,this.calculator.dispVal.length - 1);
    }

    if(e_class === 'closeCalc'){
      this.visib.setVisib('home');
    }
  }

  operatorFunc(operator){
    let input_value = parseFloat(this.calculator.dispVal);
    let result: number;
    let currentValue: number;

    console.log(this.calculator.operator);
    if(this.calculator.operator && this.calculator.isSecondOper){
      this.calculator.operator = operator;
      console.log('hi');
      return;
    }

    if(this.calculator.num_1 === null){
      this.calculator.num_1 = input_value;
    } else if(this.calculator.operator){
        currentValue = this.calculator.num_1 || 0;
        result = this.operator_select(currentValue,this.calculator.operator,input_value);
        this.calculator.dispVal = result.toString();
        this.calculator.num_1 = result;
    }

    this.calculator.operator = operator;
    this.calculator.isSecondOper = true;
  }

  operator_select(num_1,operator,num_2){
    if(operator === '+'){
      return num_1 + num_2;
    }

    if(operator === '-'){
      return num_1 - num_2;
    }

    if(operator === '*'){
      return num_1 * num_2;
    }

    if(operator === '/'){
      return num_1 / num_2;
    }

    if(operator === '='){
      return num_2;      
    }
  }
}
