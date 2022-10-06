import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseControlComponent } from './firebase-control.component';

describe('FirebaseControlComponent', () => {
  let component: FirebaseControlComponent;
  let fixture: ComponentFixture<FirebaseControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
