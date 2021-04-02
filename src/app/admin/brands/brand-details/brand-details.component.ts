import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../../model/brand';
import { BrandHttpService } from '../../../services/brand-http.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {

  brandDetails: Brand;
  constructor(private route: ActivatedRoute, private brandHttpService: BrandHttpService, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.brandHttpService.findById(Number(id)).subscribe(brand => this.brandDetails = brand);
  }

}
