import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup|any;
  passwordMatch: string = '';
  error: string = '';
  
  constructor(private fb: FormBuilder, private authService: AuthService) {}
   
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9._%+-]+@volkswagen\.co\.in$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
  }  

  passwordMatchValidator(): boolean {
    const passwordControl = this.signupForm.get('password');
    const confirmPasswordControl = this.signupForm.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
     return false;
    } 
    else
    return true;
  }
  

  onSubmit():void {
    if (this.signupForm.valid) {
     
      // console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe(
        res=>{
        console.log(res)
      },
      err=>{
      // console.log(err);
      this.error = err.error;
    }
  );
    
  }
  }}