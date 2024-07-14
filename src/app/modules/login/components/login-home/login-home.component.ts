import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService, NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent {
  user: any = "";
  password: any = "";
  passwordVisible = false;



  constructor(private ntService: NzNotificationService, private userService: UserService, private router: Router) {

    if (localStorage.getItem('user')) {
      this.ntService.info('TIENE UN USUARIO QUE INICIO SESION', '')
      this.router.navigate(["login/verification"])
    } 
  }

  log() {
    if ((this.user != null && this.password != null) && (this.user != '' && this.password != '')) {
      const authenticatedUser = this.userService.login(this.user, this.password);
      if (authenticatedUser) {
        this.ntService.success('INGRESO PERMITIDO', '');
        console.log(authenticatedUser)
        this.router.navigate(["login/verification"])
        localStorage.setItem('user', JSON.stringify(authenticatedUser))
      } else {
        this.ntService.error('CREDENCIALES INCORRECTOS', '');
      }
    } else {
      this.ntService.error('EL FORMULARIO TIENE CAMPOS VACIOS, VERIFICAR POR FAVOR', '');
    }
  }
}
