import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelHttpService } from '../../../services/model-http.service';
import { AdvertHttpService } from '../../../services/advert-http.service';
import { Router } from '@angular/router';
import { SkateshopHttpService } from '../../../services/skateshop-http.service';
import { Observable } from 'rxjs';
import { Model } from 'src/app/model/model';
import { Skateshop } from '../../../model/skateshop';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.scss']
})
export class AddAdvertComponent implements OnInit {

  advertForm: FormGroup;
  models: Observable<Model[]>;
  skateshops: Observable<Skateshop[]>;
  submitted = false;
  widths = ['7.5', '7.6', '7.750', '8', '8.125', '8.250', '8.500', '9', '9.5', '10'];
  concaves = ['Leger', 'Moyen', 'Forte'];
  shapes = ['Strandard', 'Shaped', 'Full'];
  constructor(
        private fb: FormBuilder, private advertHttpService: AdvertHttpService,
        private modelHttpService: ModelHttpService, private skateshopHttpService: SkateshopHttpService,
        private router: Router
        ){}
  submitForm(): void {
    this.submitted = true;
    if (this.advertForm.valid){
      const advertObj = this.advertForm.value;
      console.log(this.advertForm.value);
      advertObj.price = advertObj.price * 100;
      this.advertHttpService.add(this.advertForm.value).subscribe(v => this.router.navigateByUrl('/adverts'));
    }
  }
  ngOnInit(): void {
    this.advertForm = this.fb.group({
      description: ['une description', Validators.required],
      width: ['', Validators.required],
      length: ['39.9', Validators.required],
      shape: ['', Validators.required],
      concave: ['', Validators.required],
      picturePath: ['unephoto.jgp', Validators.required],
      price: [],
      model: this.fb.group({
        id: 1
      }),
      skateshop: this.fb.group({
        id: 1
      })
    });
    this.modelHttpService.findAll().subscribe(m => this.models = m['hydra:member']);
    this.skateshopHttpService.findAll().subscribe(m => this.skateshops = m['hydra:member']);
  }
}
