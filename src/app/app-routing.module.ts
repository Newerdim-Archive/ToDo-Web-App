import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

const routes: Routes = [
  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      // { path: '', component:  }
    ],
  },

  // No layout routes
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
