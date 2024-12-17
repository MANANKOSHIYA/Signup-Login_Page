import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpgeneratorService {

  constructor() { }
  sendOtp(phoneNumber: string): string {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    alert('OTP send to console');
    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    return otp; // Return the OTP (for simulation purposes)
  }

  verifyOtp(otp: string, enteredOtp: string): boolean {
    // Simulate OTP verification
    return otp === enteredOtp;
    
  }
}
