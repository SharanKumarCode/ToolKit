import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplementService {

  constructor() { }

  public valueOutput1: string;
  public valueOutput2: string;
  public isSupplVisible: boolean;

  fireEvent(output1?,output2?){
    this.valueOutput1= output1;
    this.valueOutput2 = output2;
    this.setSupplVisible(true);
  }

  setSupplVisible(visibility){
    this.isSupplVisible = visibility;
  }
}
