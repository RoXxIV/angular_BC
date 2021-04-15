import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../../model/advert';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-article]',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() advert: Advert;

  constructor() { }

  ngOnInit(): void {

  }
}
