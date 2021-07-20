import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ErrorResponse } from 'src/app/interfaces/error-response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  socialUser!: SocialUser;
  errorMessage!: string;
  buttonLoading = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {

      if (user) {
        this.buttonLoading = true;

        this.authService.logInWithGoogle(user.idToken)
          .subscribe(
            () => {
              this.router.navigate(['/']);
            },
            (error: ErrorResponse) => {
              this.errorMessage = error.message;
              this.buttonLoading = false;
            }
          )
      }
    });
  }

  logInWithGoogle(): void {
    this.errorMessage = '';
    this.buttonLoading = true;
    
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .catch(() => this.buttonLoading = false);
  }

}
