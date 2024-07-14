import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-plataform-home',
  templateUrl: './plataform-home.component.html',
  styleUrls: ['./plataform-home.component.css']
})
export class PlataformHomeComponent {

  userLogin?: User;
  dateIngress = new Date();
  constructor(private router: Router) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const verificationUser = localStorage.getItem('verification');
      if (verificationUser) {
        this.userLogin = JSON.parse(storedUser) as User
      } else {
        this.router.navigate(["login"])
      }
    } else {
      this.router.navigate(["login"])
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }
}


