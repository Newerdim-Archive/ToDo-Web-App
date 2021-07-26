import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../interfaces/profile';
import { SuccessWithDataResponse } from '../interfaces/success-with-data-response';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getCurrentProfile(): Observable<SuccessWithDataResponse<Profile>> {
    const url = environment.ApiUrl + 'profile';

    return this.httpClient.get<SuccessWithDataResponse<Profile>>(url);
  }
}
