import { TestBed } from '@angular/core/testing';

import { PreventUnsavedChangedGuard } from './prevent-unsaved-changed.guard';

describe('PreventUnsavedChangedGuard', () => {
  let guard: PreventUnsavedChangedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventUnsavedChangedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
