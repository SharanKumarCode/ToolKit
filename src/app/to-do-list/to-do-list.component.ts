import { CompVisibService } from './../comp-visib.service';
import { Component, OnInit } from '@angular/core';
import { SupplementService } from '../supplement.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(private visib:CompVisibService, private datasupp:SupplementService) { }

  ngOnInit() {
  }

  onKey(){
    this.visib.setVisib('home');
    this.datasupp.setSupplVisible(false);
  }

}
