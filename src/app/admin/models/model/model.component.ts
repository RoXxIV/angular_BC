import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/model/model';
import { BrandHttpService } from '../../../services/brand-http.service';
import { Brand } from '../../../model/brand';

@Component({
  selector: '[app-model]',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  @Input() model: Model;


  constructor() { }

  ngOnInit(): void {

    console.log(this.model);
  }

}

