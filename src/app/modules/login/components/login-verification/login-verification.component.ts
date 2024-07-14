import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-verification',
  templateUrl: './login-verification.component.html',
  styleUrls: ['./login-verification.component.css']
})
export class LoginVerificationComponent {

  userLogin?: User;
  identification = "";
  listImages: any[] = [];
  selectedImage: any

  constructor(private router: Router, private ntService: NzNotificationService) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const verificationUser = localStorage.getItem('verification');
      if (verificationUser) {
        this.router.navigate(["plataform"])
      } else {
        this.userLogin = JSON.parse(storedUser) as User;
        this.listImages.sort(() => Math.random() - 0.5);
        this.generateRandomQuestions()
      }
    } else {
      this.router.navigate(["login"])
    }
  }


  generateRandomQuestions() {
    this.listImages = [
      {
        route: './../../../../../assets/ICONOV3/ancla.PNG',
        value: 'ancla',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/bicicleta.PNG',
        value: 'bicicleta',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/billete.PNG',
        value: 'billete',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/calculadora.PNG',
        value: 'calculadora',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/corazon.PNG',
        value: 'corazon',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/impresora.PNG',
        value: 'impresora',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/metro.PNG',
        value: 'metro',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/microfono.PNG',
        value: 'microfono',
        selected: false
      },

      {
        route: './../../../../../assets/ICONOV3/mundo.PNG',
        value: 'mundo',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/palmera.PNG',
        value: 'palmera',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/paloma.PNG',
        value: 'paloma',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/pelota.JPG',
        value: 'pelota',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/satelite.PNG',
        value: 'satelite',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/taco.PNG',
        value: 'taco',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/telefono.PNG',
        value: 'telefono',
        selected: false
      },
      {
        route: './../../../../../assets/ICONOV3/televisor.PNG',
        value: 'televisor',
        selected: false
      },
    ]
    this.listImages.sort(() => Math.random() - 0.5);
  }


  verificate() {
    if (this.selectedImage != null && this.identification != null && this.identification != '') {
      if (this.verificateIdentification()) {
        localStorage.setItem("verification", JSON.stringify(true));
        this.ntService.success('INGRESO SATISFACTORIO', '')
        this.router.navigate(["plataform"])
      } else {
        this.ntService.error('LOS VALORES QUE INGRESO SON ERRONEOS, VERIFICAR POR FAVOR', '')
      }
    } else {
      this.ntService.error('NO HA COMPLETADO LOS PASOS SOLICITADOS, VERIFICAR POR FAVOR', '');
    }

  }

  selectImage(index: any) {
    if (this.selectedImage === index) {
      this.selectedImage = null; // Deseleccionar si se hace clic nuevamente en la misma imagen
    } else {
      this.selectedImage = index; // Seleccionar la imagen clicada
    }
  }

  verificateIdentification() {
    if (this.identification == this.userLogin?.answer && this.selectedImage.value == this.userLogin?.icon) return true
    return false;
  }
}
