import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any ;
  errorMsg: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
  }

  onSubmit(){
    if(!this.loginForm.invalid){
      this.authService.login(this.loginForm.value).subscribe(
         res=> {
        // console.log("res :",res.status);
        
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.id);
        localStorage.setItem('name', res.name);
        this.router.navigate(['/questions']);
      },
      err=> {
      // console.log("err :",err);
      this.errorMsg = err.error;
    }
    );
    }
    
  }
}
