import { HttpClient } from '@angular/common/http';
import { Currency, CurrencyExch, CurrencyList } from './currency';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currencyConvBase:Currency = {
    base: '',
    amount: 0
  }

  public currencyConvExch:CurrencyExch = {
    inr:0,
    usd:0,
    eur:0,
    gbp:0,
    cad:0,
    mxn:0,
    aud:0,
    cny:0,
    php:0
  }

  public currencyList:CurrencyList = {
    INR: {
      countryName: 'INR',
      countryFlag: "country-flag flags-ind",
      amount:0
    },
    USD: {
      countryName: 'USD',
      countryFlag: "country-flag flags-usd",
      amount:0
    },
    EUR: {
      countryName: 'EUR',
      countryFlag: "country-flag flags-eur",
      amount:0
    },
    GBP: {
      countryName: 'GBP',
      countryFlag: "country-flag flags-gbp",
      amount:0
    },
    CAD: {
      countryName: 'CAD',
      countryFlag: "country-flag flags-cad",
      amount:0
    },
    MXN: {
      countryName: 'MXN',
      countryFlag: "country-flag flags-mxn",
      amount:0
    },
    AUD: {
      countryName: 'AUD',
      countryFlag: "country-flag flags-aud",
      amount:0
    },
    CNY: {
      countryName: 'CNY',
      countryFlag: "country-flag flags-cny",
      amount:0
    },
    PHP: {
      countryName: 'PHP',
      countryFlag: "country-flag flags-php",
      amount:0
    }
  }

  public currencyLists:any;

  public convOver:boolean = false;

  public index:number = 0;

  constructor(public http:HttpClient ) { }

  currencyCalc(currencySelect,amount){
    console.log(currencySelect.value,amount.value);
    this.currencyConvBase.base = currencySelect.value;
    this.currencyConvBase.amount = parseFloat(amount.value);
    let currencyurl:string = 'https://api.exchangeratesapi.io/latest?base=' + this.currencyConvBase.base.toUpperCase();
    this.showCurrency(currencyurl);
    return this.currencyLists;
  }

  getCurrency(url){
    return this.http.get(url);
  }

  showCurrency(url){
    this.getCurrency(url)
    .subscribe((data)=> {
      for(let currency in this.currencyConvExch)
      {
        this.currencyConvExch[currency] = data['rates'][currency.toUpperCase()];
      }
      if(data){
        console.log(this.currencyConvExch);
        this.amountCalc();
        console.log('first');
      }
    })
  }

  amountCalc(){
    for(let currency in this.currencyList){
      this.currencyList[currency]['amount'] = (this.currencyConvBase.amount * this.currencyConvExch[currency.toLowerCase()]).toFixed(2);
    }

    this.currencyLists = Object.keys(this.currencyList).map(key => {
      return this.currencyList[key];
    })

    for(let i = 0; i<this.currencyLists.length;i++){
      if(this.currencyLists[i].countryName === this.currencyConvBase.base.toUpperCase()){
      this.index = i;
      }
    }

    this.currencyLists.splice(this.index,1);
    console.log('second');
    
    this.convOver = true;
  }
}