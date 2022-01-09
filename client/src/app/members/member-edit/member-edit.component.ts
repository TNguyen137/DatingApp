import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm!: NgForm
  member!: Member; //! is the definite assignment assertion that says 
                   //"There is a property called name with a type of string | undefined. It starts with a value of undefined. 
                   //But every time I get or set that property, I want to treat it as type string."
  user!: User;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private _accountService: AccountService, private _memberService: MembersService, private _toastr: ToastrService) { 
    this._accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this._memberService.getMember(this.user.userName).subscribe(member =>
      {
        this.member = member;
      })
  }

  updateMember() {
    this._memberService.updateMembner(this.member).subscribe(() => {
      this._toastr.success('Profile Updated Successfully');
      this.editForm.reset(this.member);
    })
  }
}
