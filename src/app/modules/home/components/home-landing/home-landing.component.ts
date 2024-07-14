import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent {


  constructor(private router: Router) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const verificationUser = localStorage.getItem('verification');
      if (verificationUser) {
        this.router.navigate([""])
      } else {
        this.router.navigate(["login"])
      }
    } else {
      this.router.navigate([""])
    }
  }

  goLogin() {
    this.router.navigate(['/login'])
  }
}
