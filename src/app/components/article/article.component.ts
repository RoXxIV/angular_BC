import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../../model/advert';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-article]',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input() advert: Advert;

  ngOnInit(): void {
    console.log(this.advert);
  }
}
