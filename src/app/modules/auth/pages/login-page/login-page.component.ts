import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.model';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../../../core/services/jwt.service';
import { UserSession } from '../../../../shared/interfaces/user-session.model';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  
  public isHidden : boolean = true;
  public loginForm : FormGroup = new FormGroup({});
  
  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private jwtService : JwtService,
    private sweetAlertService : SweetAlertService
  ) { 
    this.initForm();
  }
  
  login() {
    if(this.loginForm.valid){

      this.authService.login(this.loginForm.value as User).subscribe((userSession : UserSession) =>{
        if(userSession){
          this.loginUser(userSession);
          return;
        }

        this.sweetAlertService.showErrorAlert('Error', 'Credenciales incorrectas');

      });
    }
  }

  private loginUser(userSession: UserSession) {
    this.jwtService.saveToken(userSession);
    this.sweetAlertService.showSuccessAlert(`Bienvenido ${userSession.nickName}`, 'Inicio de sesión exitoso');
    this.router.navigate(['/wallet']);
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public hidePassword(event: MouseEvent) {
    this.isHidden = !this.isHidden;
  }
  

}
