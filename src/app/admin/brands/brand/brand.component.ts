import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../../../model/brand';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-brand]',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  // get brand from brand-list
  @Input() brand: Brand;

  constructor() { }

  ngOnInit(): void {
  }
}
