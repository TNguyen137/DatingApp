import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  number: number | undefined;
  title = 'The Dating App: ';
  users: any;
  spreadUsers : any;
  singleUser: any;
  dateTest = new Date('12/07/1962');
  exponentTest = 5;

  states: any[] = [
    {
      USA: [
        {
          name: 'Alabama',
          abbreviation: 'AL',
          country: 'USA'
        },
        {
          name: 'Alaska',
          abbreviation: 'AK',
          country: 'USA'
        }
      ]
    },
    {
      Canada: [
        {
          name: 'Alberta',
          abbreviation: 'ALB',
          country: 'Canada'
        }
      ]
    }
  ];

  constructor(private _http: HttpClient, private _userService: UserService, private _accountService: AccountService) {
    // this.number = this.users ? Object.keys(this.users).length : 1;
    // console.log(this.states);

    // this.states.forEach(state => {
    //   console.log(state);
    //   for (let key in state) {
    //     console.log(key);
    //     console.log(state[key][0].name);
    //     for (let key2 in state[key]) {
    //       console.log(state[key][key2]);
    //       for (let key3 in state[key][key2]) {
    //         console.log([key3]);
    //         console.log(state[key][key2][key3]);
    //       }
    //     }
    //   }
    // })
  }

  ngOnInit() {
    //this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')!);
    this._accountService.setCurrentUser(user);
  }

  fakeCallBackFunction() {
    console.log("Execution of callback function");
  };

  // getUsers() {
  //   this._userService.getUsers$().subscribe(
  //     response => {
  //         this.users = response; 
  //         this.number = this.users ? Object.keys(this.users).length : 1;
  //         this.spreadUsers = [...response, { id: 4, userName: 'Becky Hammond' }];
  //         this.singleUser = {...this.users[1]};
  //       }, error => {
  //         console.log(error);
  //       }, () => this.fakeCallBackFunction())
  // }
}
