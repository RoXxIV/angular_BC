import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../model/user';
const USER_KEY = 'auth-user';
@Injectable()
export class AuthAdminGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router, private token: TokenStorageService) {}
    // Controlle acces page ADMIN
    canActivate(): boolean {
      const user = window.sessionStorage.getItem(USER_KEY);
      const AdminCheck = JSON.parse(user);
      if (AdminCheck.roles == 'ROLES_ADMIN'){
        return true;
      }else{
          this.router.navigateByUrl('/home');
          console.log(user);
          return false;
      }

    }
}
