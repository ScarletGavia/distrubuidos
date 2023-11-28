import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    IniciosesionComponent,
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
