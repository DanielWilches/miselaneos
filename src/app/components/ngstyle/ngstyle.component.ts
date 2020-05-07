import { Component, OnInit } from '@angular/core';
import { IconServiceService } from '../../services/icon-service.service';


@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  tamano = 30;
  constructor( public icon: IconServiceService ) {

  }

  ngOnInit(): void {
  }

}
