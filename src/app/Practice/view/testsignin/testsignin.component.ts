import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-testsignin',
  templateUrl: './testsignin.component.html',
  styleUrls: ['./testsignin.component.css']
})
export class TestsigninComponent implements OnInit {
  userdata: any[] = [];

  loginForm: FormGroup;

  error_messages = {

    'fname': [{
      type: 'required',
      message: 'First Name is required.'
    }],

    'lname': [{
      type: 'required',
      message: 'Last Name is required.'
    }],

    'email': [{
      type: 'required',
      message: 'Email is required.'
    },
    {
      type: 'pattern',
      message: 'please enter a valid email address.'
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
    }
    ],
  }
  confirmpassword: any;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern ('/^[_a-z0-9]+(\.[_a-z0-9]+)*@@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/')
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
  }
  OnSubmit() {
    this.userdata.push(this.loginForm.value)
    console.log(this.userdata);
    alert("Data added successfully!");
    localStorage.setItem('UserData', JSON.stringify(this.userdata));
    this.loginForm.reset();
    // this.confirmpassword.reset();
  }
  ngOnInit() {


  }

}