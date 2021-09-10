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
import { RevisarHistorialesComponent } from './Components/revisar-historiales/revisar-historiales.component';
import { DetallesHistoriaComponent } from './Components/detalles-historia/detalles-historia.component';
import { VisualizarDetallesHistoriaComponent } from './Components/visualizar-detalles-historia/visualizar-detalles-historia.component';
import { AgregarDetallesHistoriaComponent } from './Components/agregar-detalles-historia/agregar-detalles-historia.component';
import { ModificarDetallesHistoriaComponent } from './Components/modificar-detalles-historia/modificar-detalles-historia.component';
import { DetallesCardComponent } from './Components/detalles-historia/detalles-card/detalles-card.component';
import { RevisarDatosComponent } from './Components/revisar-datos/revisar-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InterfazInicioComponent,
    UsuarioDataComponent,
    MascotaDataComponent,
    ColaboradorDataComponent,
    RevisarHistorialesComponent,
    DetallesHistoriaComponent,
    VisualizarDetallesHistoriaComponent,
    AgregarDetallesHistoriaComponent,
    ModificarDetallesHistoriaComponent,
    DetallesCardComponent,
    RevisarDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
