import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdata: any[] = [];

  constructor(private router: Router) { }


  error_messages = {

    'fname': [{
      type: 'required',
      message: 'First Name is required.'
    }],

    'lname': [{
      type: 'required',
      message: 'Last Name is required.'
    }],

    'mobileNo': [{
      type: 'required',
      message: 'Mobile Number is required.'
    },
    {
      type: 'pattern',
      message: 'Mobile Number must be a 10-digit number.'
    }
  ],

    'email': [{
      type: 'required',
      message: 'Email is required.'
    },
    {
      type: 'pattern',
      message: 'please enter a valid email address.'
    },
    {
      type: 'match',
      message: 'Email Address is already used.'
    }
    ],

    'password': [{
      type: 'required',
      message: 'password is required.'
    },
    {
      type: 'minlength',
      message: 'Password is required atlast 8 latters.'
    },
    {
      type: 'maxlength',
      message: 'Password is required only 15 latters.'
    },
    {
      type: 'pattern',
      message: 'Complate Password correctly like "AAaa@1234"'
    }
    ],

    'confirmpassword': [{
      type: 'required',
      message: 'password is required.'
    }],

  }

  loginForm = new FormGroup({
    fname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    lname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    mobileNo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[- +()0-9]{10,12}')

    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.pattern ('/^[_a-z0-9]+(\.[_a-z0-9]+)*@@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/'),
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.pattern ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,13}'),
      // Validators.minLength(8),
      // Validators.maxLength(15)
    ])),
    confirmpassword: new FormControl('', Validators.compose([
      Validators.required,
    ])),

  })




  OnSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      const passwordMatchingError = this.passwordMatchingValidator(this.loginForm);
      if (passwordMatchingError) {
        alert("Passwords do not match");
        return;
      }

      const EmailMatchingError = this.reusedEmailCheck(this.loginForm);
      if (EmailMatchingError) {
        alert("Email Address is already used.");
        return;
      }
      this.userdata.push({
        id: this.userdata.length + 1,
        firstName: formData.fname,
        lastName: formData.lname,
        mobileNumber: formData.mobileNo,
        email: formData.email,
        password: formData.password
      });
      console.log("datasasasas>>.", this.userdata);

      alert("Data added successfully!");
      localStorage.setItem('UserData', JSON.stringify(this.userdata));

      // this.router.navigate(['/practice']);
      this.loginForm.reset();
     
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }

  ngOnInit() {
  }


  mobileNumberValidator(control: { value: any; }) {
    const mobileNumber = control.value;
    if (mobileNumber && mobileNumber.length === 10 && !isNaN(Number(mobileNumber))) {
      return null;
    } else {
      return { invalidMobileNumber: true };
    }
  }


  passwordMatchingValidator(loginForm: FormGroup): Validators | null {
    const passwordControl = this.loginForm.get('password');
    const confirmPasswordControl = this.loginForm.get('confirmpassword');

    if (passwordControl && confirmPasswordControl) {
      const passwordValue = passwordControl.value;
      const confirmPasswordValue = confirmPasswordControl.value;

      if (passwordValue !== confirmPasswordValue) {
        // confirm("Passwords do not match");
        return { notmatched: true };
      } else {
        // console.log("Passwords match");
        return null;
      }
    } else {
      console.error("Unable to retrieve password or confirmPassword controls");
      return null;
    }
  }



  reusedEmailCheck(loginForm: FormGroup): Validators | null {
    const email = loginForm.get('email')?.value;
    console.log("Signup->email>>", email);
    const storedUsers = JSON.parse(localStorage.getItem('UserData') || '[]');
    const user = storedUsers.find((userData: any) => userData.email === email);
    if (user) {
      // alert('Email Address is already used.');
      return ({ match: true });
    } else {
      return null;
    }
  }




 



}
