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
  brand: Brand;

  constructor(private brandHttpService: BrandHttpService) { }

  ngOnInit(): void {
    console.log(this.model);
    console.log(this.model.brand.substr(- 1));
    this.brandHttpService.findById(Number(this.model.brand.split('/').pop())).subscribe(b => this.brand = b);
  }

}

