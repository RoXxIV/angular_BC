import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandHttpService } from '../../../services/brand-http.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  brandForm: FormGroup;
  submitted = false;



  constructor(private fb: FormBuilder, private brandHttpService: BrandHttpService) { }

  submitForm(): void {
    this.submitted = true;
    if (this.brandForm.valid){
      this.brandHttpService.add(this.brandForm.value).subscribe(
          () => {
        window.location.reload();
      },
      error => {
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
}
