import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public accountService: AccountService,
    private toastr: ToastrService
  ) {}

  canActivate(): Observable<any> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (user) return true;
        return this.toastr.error('You shall not pass');
      })
    );
  }
}