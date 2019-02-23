import { EmiService } from './../emi.service';
import { BmiService } from './../bmi.service';
import { SupplementService } from './../supplement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplement',
  templateUrl: './supplement.component.html',
  styleUrls: ['./supplement.component.scss']
})
export class SupplementComponent implements OnInit {

  public pieChartLabels:string[] = ["Interest Paid", "Principal Amount"];
  public pieChartData:number[] = [this.emi.emiCalc.emi*this.emi.emiCalc.period, this.emi.emiCalc.principal];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
            "#E7E9ED",
            "#36A2EB"
            ]}

  constructor(public suppl:SupplementService,public emi:EmiService) {
   }

  ngOnInit() {
  }

}
