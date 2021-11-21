import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;
  // currentUser$!: Observable<User>;

  constructor(public _accountService: AccountService, private _router: Router, 
    private _toastr: ToastrService) { }

  ngOnInit(): void {
    // this.getCurrentUser();
    // this.currentUser$ = this._accountService.currentUser$;
  }

  login() {
    this._accountService.login(this.model).subscribe(response => {
      console.log(response);
      this._router.navigateByUrl('/members');
    });
  }

  logout() {
    this._accountService.logout();
    this._router.navigateByUrl('/');
  }



  // getCurrentUser() {
  //   this._accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   })
  //}
}
