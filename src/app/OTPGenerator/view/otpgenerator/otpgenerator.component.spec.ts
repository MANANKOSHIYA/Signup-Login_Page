import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpgeneratorComponent } from './otpgenerator.component';

describe('OtpgeneratorComponent', () => {
  let component: OtpgeneratorComponent;
  let fixture: ComponentFixture<OtpgeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpgeneratorComponent]
    });
    fixture = TestBed.createComponent(OtpgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
