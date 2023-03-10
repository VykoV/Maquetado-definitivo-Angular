import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

import { DOCUMENT } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme: Theme = 'light-theme';

  constructor(@Inject(DOCUMENT) private document: Document, 
              private renderer: Renderer2,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme, 
      this.theme === 'light-theme' 
      ? (this.theme = 'dark-theme') 
      : (this.theme = 'light-theme')
    );

  }
  
  initializeTheme = (): void => 
    this.renderer.addClass(this.document.body, this.theme);
  
}

export type Theme = 'light-theme' | 'dark-theme';
