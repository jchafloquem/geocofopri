import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PortalComponent } from './pages/portal/portal.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    PortalComponent
  ],
  imports: [
    CommonModule,
    MapaRoutingModule
  ]
})
export class MapaModule { }
