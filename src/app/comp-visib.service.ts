import { VisibilityComp } from './visibility-comp';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompVisibService {

  constructor() { }

  public compVisib:VisibilityComp = {
    home:true,
    calc:false,
    bmi:false,
    emi:false,
    toDo:false,
    currency:false,
  }

  public state: string = 'home';

  setVisib(visibTarget){
    this.setVisibDefault();
    for(let compKeys in this.compVisib){
      if(compKeys === visibTarget){
      this.compVisib[compKeys] = true;
      this.state = visibTarget;
      }
    }
    console.log(this.compVisib);
  }

  private setVisibDefault(){
    for(let compKeys in this.compVisib){
      this.compVisib[compKeys] = false;
  }
}
}
