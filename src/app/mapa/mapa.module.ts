import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PortalComponent } from './pages/portal/portal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    PortalComponent
  ],
  imports: [
    CommonModule,
    MapaRoutingModule,
    SharedModule
  ]
})
export class MapaModule { }
