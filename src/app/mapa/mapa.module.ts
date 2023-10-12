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
@NgModule({
	declarations: [LayoutPageComponent, PortalComponent, FabContainerBottonComponent, FabContainerTopComponent, MenuPortalComponent],
	imports: [CommonModule, MapaRoutingModule, SharedModule, MatTooltipModule, MatIconModule, LeafletModule, LeafletDrawModule],
})
export class MapaModule {}
