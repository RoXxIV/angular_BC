import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkateshopHttpService } from '../../../services/skateshop-http.service';
import { UserHttpService } from '../../../services/user-http.service';
import { User } from '../../../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-skateshop',
  templateUrl: './add-skateshop.component.html',
  styleUrls: ['./add-skateshop.component.scss']
})
export class AddSkateshopComponent implements OnInit {

  skateshopForm: FormGroup;
  professionals: Observable<User[]>;
  submitted = false;

  constructor(private fb: FormBuilder, private skateshopHttpService: SkateshopHttpService, private userHttpService: UserHttpService,
              private router: Router) { }

    submitForm(): void {
    this.submitted = true;
    if (this.skateshopForm.valid){
      console.log(this.skateshopForm.value);
      this.skateshopHttpService.add(this.skateshopForm.value).subscribe(v => this.router.navigateByUrl('/skateshops'), err => console.log(err));
    }
  }
  ngOnInit(): void {

    this.skateshopForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      professional: this.fb.group(
        {id: 1}
      )
    });
    this.userHttpService.findAll().subscribe(m => this.professionals = m['hydra:member']);
  }

}
