import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  dataSource: any;
  displayedColumns = ['idNumber', 'Name'];
  number: number | undefined
  constructor(private _http:HttpClient, private _userService:UserService) { }
  error: string = '';
  dataString: string = '';
  click = true;
  ngOnInit() {
  }

  getUsers() {
    if (this.click) {
      this._userService.getUsers$().subscribe(
        response => {
            this.dataSource = response; this.number = this.dataSource ? Object.keys(this.dataSource).length : 1;
            this.dataString = this.dataSource;
          }, error => {
            console.log(error);
            this.error = error;
          })
    } else {
      this.dataSource = [];
    }
    this.click = !this.click;
  }

  onMouseLeave() {
    console.log("onMouseLeave!");
    //this.dataSource = [];
  }

  onRowClicked(row: any) {
    alert('Row clicked: '+ row.id + ' ' + row.userName);
    console.log('Row clicked: ', row);
  }
}
