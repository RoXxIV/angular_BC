import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHttpService } from '../../../services/user-http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private userHttpService: UserHttpService,
              private router: Router) { }

    submitForm(): void {
    this.submitted = true;
    if (this.userForm.valid){
      const advertObj = this.userForm.value;
      console.log(this.userForm.value);
     // this.userHttpService.add(this.userForm.value).subscribe(v => this.router.navigateByUrl('/users'));
    }
  }
  ngOnInit(): void {

    this.userForm = this.fb.group({
      username: ['username', Validators.required],
      plainPassword: ['azerty', Validators.required],
      email: ['even@gmail.com', Validators.required],
      lastName: ['lennon', Validators.required],
      firstName: ['bob', Validators.required],
      siretNumber: ['1236547896', Validators.required],
      phone: ['0752568545', Validators.required],
    });

  }

}
