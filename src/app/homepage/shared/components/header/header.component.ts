import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSticky: boolean = false;
  mobile: boolean = false;
  isFilled: boolean = true;
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          this.isFilled = false;
        } else {
          this.isFilled = true;
        }
      }
    });
  }

  ngOnInit(): void {
    if (window.screen.width <= 968) {
      this.mobile = true;
      console.log(this.mobile);
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const verticalOffset = window.pageYOffset;
    verticalOffset > 40 ? (this.isSticky = true) : (this.isSticky = false);
  }
}
