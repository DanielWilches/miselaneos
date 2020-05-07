import { Injectable } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';


// import { s } from '@fortawesome/fontawesome-svg-core';


@Injectable({
  providedIn: 'root'
})
export class IconServiceService {
  faplus: any;
  faminus: any;
  faSave: any;
  faSync: any;
  constructor(  ) {
    this.faplus = faPlus;
    this.faminus = faMinus;
    this.faSave = faSave;
    this.faSync = faSync;
  }
}
