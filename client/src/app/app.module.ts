import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { HighlighDirective2 } from './app2.directive2';
import { TableComponentComponent } from './table-component/table-component.component';
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { UserService } from './services/user.service';
import { ParentTestComponent } from './parent-test/parent-test.component';
import { ChildTestComponent } from './child-test/child-test.component';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { ExponentialPipePipe } from './pipes/exponential-pipe.pipe';
import { DatePipe } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './modules/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlighDirective2,
    TableComponentComponent,
    ParentTestComponent,
    ChildTestComponent,
    CalendarComponentComponent,
    DatePipePipe,
    ExponentialPipePipe,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    NoopAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [UserService, DatePipe, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
