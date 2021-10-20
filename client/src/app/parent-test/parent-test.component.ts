import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildTestComponent } from '../child-test/child-test.component';
import { Observable, observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent-test',
  templateUrl: './parent-test.component.html',
  styleUrls: ['./parent-test.component.css']
})
export class ParentTestComponent implements OnInit {
  @ViewChild(ChildTestComponent) child: any; //Defined to inject the child component and then you can use stuff form child
  parentMessage = 'This is a message from the Parent';
  messageFromChild: string;

  constructor(private _changeDetect: ChangeDetectorRef) {
    this.messageFromChild = '';    
  }

  obsDataSource: any;
  random$: Observable<any> | undefined;
  displayedColumns = ['idNumber'];

  ngOnInit(): void {
    this.random$ = of([1,2,3]).pipe(map((x) => [...x.filter(y => y != 2).map(data => (data + 1) + '!!!'), 4, 5, 6]));
    //Pipe Operator is pure function that takes an observable as the input and then returns a new observable with those values
    this.random$.subscribe( 
      response =>
      {
         this.obsDataSource = response;
         console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.messageFromChild = this.child.messageFromChild;
    // }, 0)

    Promise.resolve().then(() => this.messageFromChild = this.child.messageFromChild)

    // this._changeDetect.detectChanges();
  }
}
