import { Component } from '@angular/core';
import { OtpgeneratorService } from '../../Service/otpgenerator.service';

@Component({
  selector: 'app-otpgenerator',
  templateUrl: './otpgenerator.component.html',
  styleUrls: ['./otpgenerator.component.css']
})
export class OtpgeneratorComponent {

  phoneNumber:any;
  otp: any;
  generatedOtp: any;

  constructor(private otpService: OtpgeneratorService) { }

  sendOtp() {
    this.generatedOtp = this.otpService.sendOtp(this.phoneNumber);
  }

  verifyOtp() {
    const isVerified = this.otpService.verifyOtp(this.generatedOtp, this.otp);
    if (isVerified) {
      console.log('OTP verified successfully');
    } else {
      console.error('Failed to verify OTP');
    }
  }

}
