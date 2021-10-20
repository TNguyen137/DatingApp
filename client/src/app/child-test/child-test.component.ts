import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {

  @Input() messageFromParent: string | undefined; //This is an input so that parent can pass to child
  messageFromChild = 'This is a message from the child!'; //This message is to be used by the parent

  obsDataSource: any;
  @Input() obsFromParent$: Observable<any> | undefined;

  @Output() onChange =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getObsValue() {
    this.obsDataSource
  }

  change(newValue: any) {
    console.log('newValue from child', newValue);
    this.onChange.emit({value: newValue});
  }
}
