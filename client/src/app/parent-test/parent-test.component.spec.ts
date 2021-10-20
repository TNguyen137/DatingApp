import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTestComponent } from './parent-test.component';

describe('ParentTestComponent', () => {
  let component: ParentTestComponent;
  let fixture: ComponentFixture<ParentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
