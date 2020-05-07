import { Component, OnInit } from '@angular/core';
import { IconServiceService } from 'src/app/services/icon-service.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  alert = 'alert-success';
  fin: string;
  incio: string;
  loading: boolean;
  constructor( public iconsS: IconServiceService ) {
    this.incio = 'Proceso asincrono comenenzo';
    this.fin = 'Proceso asincrono finalizo';
  }

  ngOnInit(): void {
  }
  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
