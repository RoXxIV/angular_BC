import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../../../model/advert';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-advert]',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {

  @Input() advert: Advert;

  constructor() { }

  ngOnInit(): void {
    console.log(this.advert);


  }

}
