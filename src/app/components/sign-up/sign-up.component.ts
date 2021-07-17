import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorResponse } from 'src/app/types/http-responses';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  socialUser!: SocialUser;
  errorMessage!: string;
  buttonLoading = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.buttonLoading = true;

      if (user) {
        this.authService.signUpWithGoogle(user.idToken)
          .subscribe(
            () => {
              this.router.navigate(['/']);
            },
            (error: ErrorResponse) => {
              this.errorMessage = error.message
            }
          )
          .add(() => this.buttonLoading = false);
      }
    });
  }

  signUpWithGoogle(): void {
    this.errorMessage = '';
    this.buttonLoading = true;
    
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
