import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  isNavOpen(): boolean {
    return this.navService.isOpen;
  }

  closeNav(): void {
    this.navService.close();
  }
}
