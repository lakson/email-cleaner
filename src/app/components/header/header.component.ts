import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    // @Inject(Window) private window: Window
  ) { }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixed = true
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }


}
