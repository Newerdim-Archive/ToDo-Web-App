import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ErrorResponse } from 'src/app/interfaces/error-response';
import { Profile } from 'src/app/interfaces/profile';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
})
export class ProfileDropdownComponent implements OnInit {
  profile: Profile = {
    username: 'unknown',
    email: 'unknown',
  };

  isOpenDropdown = false;

  constructor(
    private elementRef: ElementRef,
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.profileService.getCurrentProfile().subscribe((response) => {
      this.profile = response.data;
    });
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.isOutsideDropdown(event.target) && this.isOpenDropdown) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.isOpenDropdown = false;
  }

  toggleDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  logOut() {
    this.authService.logOut().subscribe(() => {
      this.socialAuthService.signOut().finally(() => {
        this.router.navigate(['/log-in']);
      });
    });
  }

  private isOutsideDropdown(element: EventTarget | null) {
    if (!element) {
      return true;
    }

    return !this.elementRef.nativeElement.contains(element);
  }
}
