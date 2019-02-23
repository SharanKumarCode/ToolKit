import { CompVisibService } from './../comp-visib.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private compVisibSet:CompVisibService) { }

  ngOnInit() {
  }

  compVisib(event){
    this.compVisibSet.setVisib(event.getAttribute('data-comp'));
  }

}
