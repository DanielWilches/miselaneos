import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ResultadoDirective } from './directives/resultado.directive';
import { DirectivaPersonalisadaComponent } from './components/directiva-personalisada/directiva-personalisada.component';
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { NgSiwtchComponent } from './components/ng-siwtch/ng-siwtch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgClassComponent,
    ResultadoDirective,
    DirectivaPersonalisadaComponent,
    MayusculaPipe,
    NgSiwtchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    APP_ROUTING
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
