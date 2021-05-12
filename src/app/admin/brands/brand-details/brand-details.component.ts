import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../../model/brand';
import { BrandHttpService } from '../../../services/brand-http.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {

  currentBrand: Brand = {
    id: null,
    name: ''
  };

  constructor(private route: ActivatedRoute, private brandHttpService: BrandHttpService, private router: Router) { }

  // Get the selected brand
  getBrandDetails(id: number): void {
    this.brandHttpService.findById(id)
      .subscribe(
        data => {
          this.currentBrand = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  // Edit the selected brand
  updateBrand(): void {
    this.brandHttpService.update(this.currentBrand.id, this.currentBrand)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/brands']);
        },
        error => {
          console.log(error);
        });
  }

  // Delete the selected brand
  deleteBrand(): void {
    this.brandHttpService.deleteOne(this.currentBrand.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/brands']);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    // get brand id from url
    this.getBrandDetails(this.route.snapshot.params.id);
  }
}
