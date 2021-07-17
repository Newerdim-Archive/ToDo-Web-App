import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuccessResponse } from '../types/http-responses';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signUpWithGoogle(idToken: string): Observable<SuccessResponse>
  {
    const url = environment.ApiUrl + 'auth/sign-up-with-google';

    const model = {
      idToken
    };

    return this.httpClient.post<SuccessResponse>(url, model);
  }
}
