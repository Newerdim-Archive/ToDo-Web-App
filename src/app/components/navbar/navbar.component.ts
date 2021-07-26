import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  toggleNav(): void {
    this.navService.toggle();
  }

  isNavOpen(): boolean {
    return this.navService.isOpen;
  }
}
