import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata: any[] = [];
  ngOnInit(): void {
  }

  constructor(private router: Router) { }

  error_messages = {

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
    ]

  }

  loginForm = new FormGroup({

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
  })




  Onlogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log("login>email>>", email);
    console.log("login>password>>", password);

    const storedUsers = JSON.parse(localStorage.getItem('UserData') || '[]');

    const user = storedUsers.find((userData: any) => userData.email === email && userData.password === password);

    if (user) {
      alert('Login successful!');
      console.log("after>email>>", email);
      console.log("after>password>>", password);
      this.router.navigate(['/home']);
    } else {
      alert('Invalid email or password!');
    }
  }

}
