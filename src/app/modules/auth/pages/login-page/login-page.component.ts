import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.model';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../../../core/services/jwt.service';
import { UserSession } from '../../../../shared/interfaces/user-session.model';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {

  public loginForm : FormGroup = new FormGroup({});
  
  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private jwtService : JwtService
  ) { 
    this.initForm();
  }
  
  login() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value as User).subscribe((userSession : UserSession) =>{
        if(userSession){
          this.jwtService.saveToken(userSession);
          this.router.navigate(['/wallet']);
        }else{
          console.log('User not found');
        }
      });
    }
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  

}
