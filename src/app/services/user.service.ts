import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() {
    this.generateAdmin()
  }

  generateAdmin() {

    this.users = [{
      user: 'admin',
      password: bcrypt.hashSync('1011', 10),
      icon: 'ancla',
      question: '¿Cual es su sopa preferida?',
      answer: 'SOPA DE FIDEO',
      first_name:'KEVIN',
      last_name:'AGUILAR',
      identification:'0101010101'
    }, {
      user: 'test_user',
      password: bcrypt.hashSync('1012', 10),
      icon: 'paloma',
      answer: '1012',
      question: '¿Cual es su primer dibujo?',
      first_name:'JUAN',
      last_name:'PEREZ',
      identification:'1010101010'
    }]
  }


  login(user: string, password: string): User | null {
    const foundUser = this.users.find(u => u.user === user);
    if (foundUser && bcrypt.compareSync(password, foundUser.password!)) {
      return foundUser;
    }
    return null;
  }
}
