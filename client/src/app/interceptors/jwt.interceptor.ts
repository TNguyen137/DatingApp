import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser!: User; //So if you are certain that certain variable actually will not be null or undefined, you may hint TS by postfix !, which simply removes null and undefined from the type of an expression.

    this._accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user); //take means we want to complete after we take one, we dont need to unsub since complete unsubs
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    
    return next.handle(request);
  }
}
