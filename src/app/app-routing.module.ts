import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDetallesHistoriaComponent } from './Components/agregar-detalles-historia/agregar-detalles-historia.component';
import { DetallesHistoriaComponent } from './Components/detalles-historia/detalles-historia.component';
import { ColaboradorDataComponent } from './Components/interfaz-inicio/colaborador-data/colaborador-data.component';
import { InterfazInicioComponent } from './Components/interfaz-inicio/interfaz-inicio.component';
import { MascotaDataComponent } from './Components/interfaz-inicio/mascota-data/mascota-data.component';
import { UsuarioDataComponent } from './Components/interfaz-inicio/usuario-data/usuario-data.component';
import { ModificarDetallesHistoriaComponent } from './Components/modificar-detalles-historia/modificar-detalles-historia.component';
import { RevisarDatosComponent } from './Components/revisar-datos/revisar-datos.component';
import { RevisarHistorialesComponent } from './Components/revisar-historiales/revisar-historiales.component';
import { VisualizarDetallesHistoriaComponent } from './Components/visualizar-detalles-historia/visualizar-detalles-historia.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: InterfazInicioComponent, children: [
    {path: '', redirectTo: 'usuario-data', pathMatch: 'full' },
    {path: 'usuario-data', component: UsuarioDataComponent},
    {path: 'mascota-data', component: MascotaDataComponent},
    {path: 'colaborador-data', component: ColaboradorDataComponent}
  ]},
  {path: 'detalles-historia', component: DetallesHistoriaComponent},
  {path: 'agregar-detalles', component: AgregarDetallesHistoriaComponent},
  {path: 'modificar-detalles', component: ModificarDetallesHistoriaComponent},
  {path: 'visualiza-detalles', component: VisualizarDetallesHistoriaComponent},
  {path: 'revisar-historiales', component: RevisarHistorialesComponent},
  {path: 'revisar-datos', component: RevisarDatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
