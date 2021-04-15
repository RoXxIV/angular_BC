import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelHttpService } from '../../../services/model-http.service';
import { BrandHttpService } from '../../../services/brand-http.service';
import { Observable } from 'rxjs';
import { Brand } from '../../../model/brand';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  modelForm: FormGroup;
  brands: Observable<Brand[]>;
  submitted = false;

  constructor(private fb: FormBuilder, private modelHttpService: ModelHttpService,
              private brandHttpService: BrandHttpService) { }

  submitForm(): void {
    this.submitted = true;
    if (this.modelForm.valid){
      this.modelHttpService.add(this.modelForm.value).subscribe(
        error => {
          console.log(error);
        });
      window.location.reload();
    }
  }
  getBrand(): void{
    this.brandHttpService.findAll().subscribe(
      m => this.brands = m['hydra:member'],
      error => {
        console.log(error);
        });
  }

  ngOnInit(): void {
    this.modelForm = this.fb.group({
      name: ['', Validators.required],
      brand: this.fb.group(
        {id: 1}
      )
    });
    this.getBrand();
  }
}
