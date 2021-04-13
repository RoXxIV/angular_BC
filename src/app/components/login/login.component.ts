import { Component, OnInit } from '@angular/core';
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

  constructor(private authent: AuthService, private tokenStorage: TokenStorageService) { }

  onSubmit(): void{

    this.authent.login(this.formUser).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);

        this.authent.saveUser(data.token).subscribe(then =>
        {
          this.tokenStorage.saveUser(then);
        });
        /*this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();*/
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
