import { GoogleLoginProvider, SocialAuthServiceConfig } from "angularx-social-login";
import { environment } from "src/environments/environment";

const googleLoginOptions = {
  scope: 'profile email'
}

const config = {
  autoLogin: true,
  providers: [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        environment.GoogleClientId,
        googleLoginOptions
      )
    }
  ]
} as SocialAuthServiceConfig

export function getSocialAuthServiceConfig()
{
  return config;
}
