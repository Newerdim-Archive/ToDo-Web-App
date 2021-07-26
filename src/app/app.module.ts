import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';

import { getSocialAuthServiceConfig } from './helpers/social-auth-service-config';
import { AuthService } from './services/auth.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthCredentialInterceptor } from './interceptors/auth-credential.interceptor';
import { LogInComponent } from './components/log-in/log-in.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';
import { IconComponent } from './components/icon/icon.component';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    SiteLayoutComponent,
    NavbarComponent,
    NavComponent,
    ProfileDropdownComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: getSocialAuthServiceConfig,
    },
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthCredentialInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
