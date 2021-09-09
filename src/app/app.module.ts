import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InterfazInicioComponent } from './Components/interfaz-inicio/interfaz-inicio.component';
import { UsuarioDataComponent } from './Components/interfaz-inicio/usuario-data/usuario-data.component';
import { MascotaDataComponent } from './Components/interfaz-inicio/mascota-data/mascota-data.component';
import { ColaboradorDataComponent } from './Components/interfaz-inicio/colaborador-data/colaborador-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InterfazInicioComponent,
    UsuarioDataComponent,
    MascotaDataComponent,
    ColaboradorDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
