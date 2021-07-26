import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuccessResponse } from '../interfaces/success-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signUpWithGoogle(idToken: string): Observable<SuccessResponse> {
    const url = environment.ApiUrl + 'auth/sign-up-with-google';

    const model = {
      idToken,
    };

    return this.httpClient.post<SuccessResponse>(url, model);
  }

  logInWithGoogle(idToken: string): Observable<SuccessResponse> {
    const url = environment.ApiUrl + 'auth/log-in-with-google';

    const model = {
      idToken,
    };

    return this.httpClient.post<SuccessResponse>(url, model);
  }

  logOut(): Observable<SuccessResponse> {
    const url = environment.ApiUrl + 'auth/log-out';

    return this.httpClient.get<SuccessResponse>(url);
  }

  isAuthenticated(): Observable<SuccessResponse> {
    const url = environment.ApiUrl + 'auth/is-authenticated';

    return this.httpClient.get<SuccessResponse>(url);
  }
}
