import { TestBed } from '@angular/core/testing';

import { AuthCredentialInterceptor } from './auth-credential.interceptor';

describe('AuthCredentialInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthCredentialInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthCredentialInterceptor = TestBed.inject(AuthCredentialInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
