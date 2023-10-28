import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MapaRoutingModule} from './mapa-routing.module';
import {LayoutPageComponent} from './pages/layout-page/layout-page.component';
import {PortalComponent} from './pages/portal/portal.component';
import {SharedModule} from '../shared/shared.module';
import {FabContainerBottonComponent} from './pages/portal/components/fab-container-botton/fab-container-botton.component';
import {FabContainerTopComponent} from './pages/portal/components/fab-container-top/fab-container-top.component';
import {MenuPortalComponent} from './pages/portal/components/menu-portal/menu-portal.component';

// *
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

// *
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletDrawModule} from '@asymmetrik/ngx-leaflet-draw';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {ModalMoveComponent} from './pages/portal/components/modal-move/modal-move.component';

import {FiltroUbigeoComponent} from './pages/portal/dialog/filtro-ubigeo/filtro-ubigeo.component';
import {DescargarInfoComponent} from './pages/portal/dialog/descargar-info/descargar-info.component';
import {SubirShapeComponent} from './pages/portal/dialog/subir-shape/subir-shape.component';
import {PlotearPuntosComponent} from './pages/portal/dialog/plotear-puntos/plotear-puntos.component';
import {GenerarMapaComponent} from './pages/portal/dialog/generar-mapa/generar-mapa.component';
import {LeyendaComponent} from './pages/portal/dialog/leyenda/leyenda.component';
import {ContactanosComponent} from './pages/portal/dialog/contactanos/contactanos.component';
import {ConfiguracionCapaComponent} from './pages/portal/dialog/configuracion-capa/configuracion-capa.component';
@NgModule({
	declarations: [LayoutPageComponent, PortalComponent, FabContainerBottonComponent, FabContainerTopComponent, MenuPortalComponent],
	imports: [
		CommonModule,
		MapaRoutingModule,
		SharedModule,
		MatTooltipModule,
		MatIconModule,
		LeafletModule,
		LeafletDrawModule,
		MatSlideToggleModule,
		FormsModule,
		ModalMoveComponent,
		ConfiguracionCapaComponent,
		ContactanosComponent,
		LeyendaComponent,
		FiltroUbigeoComponent,
		DescargarInfoComponent,
		SubirShapeComponent,
		PlotearPuntosComponent,
		GenerarMapaComponent,
	],
})
export class MapaModule {}
