import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../../../model/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  @Input() brand: Brand;
  constructor() { }

  ngOnInit(): void {
    console.log(this.brand);
  }

}
