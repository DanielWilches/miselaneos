import { Component } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCoffee = faCamera;
  constructor( public faCoffe: FaConfig ){}
  title = 'miselaneos';
}
