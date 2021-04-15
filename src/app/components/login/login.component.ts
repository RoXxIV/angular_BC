import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formUser = new User();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authent: AuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  onSubmit(): void{

    this.authent.login(this.formUser).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);

        this.authent.saveUser(data.token).subscribe(then =>
        {
          this.tokenStorage.saveUser(then);
        });
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigateByUrl('/profil');
      },
      err => {
        console.log(err);
        this.isLoginFailed = true;
      });
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
