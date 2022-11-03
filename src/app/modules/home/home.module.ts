import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { WikipediaComponent } from './pages/wikipedia/wikipedia.component';

@NgModule({
  declarations: [BusquedaComponent, RespuestaComponent, WikipediaComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
