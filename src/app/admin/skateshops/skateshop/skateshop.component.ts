import { Component, Input, OnInit } from '@angular/core';
import { Skateshop } from 'src/app/model/skateshop';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-skateshop]',
  templateUrl: './skateshop.component.html',
  styleUrls: ['./skateshop.component.scss']
})
export class SkateshopComponent implements OnInit {

  @Input() skateshop: Skateshop;
  constructor() { }

  ngOnInit(): void {
  }

}
