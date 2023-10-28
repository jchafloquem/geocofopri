import {AfterViewInit, Component, ElementRef, inject, OnInit} from '@angular/core';
import {PortalService} from '../../service/portal.service';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {environment} from 'src/environments/environment';
import * as L from 'leaflet';

@Component({
	selector: 'app-configuracion-capa',
	templateUrl: './configuracion-capa.component.html',
	styleUrls: ['./configuracion-capa.component.scss'],
	standalone: true,
	imports: [CommonModule, MatSliderModule, MatIconModule, MatInputModule, FormsModule],
})
export class ConfiguracionCapaComponent {
	public _portalService = inject(PortalService);
	public value = 100;

	ActivaLayer() {
		let tema = this._portalService.LayerConfig.tema;
		let grupo = this._portalService.LayerConfig.grupo;
		let idLayer = this._portalService.LayerConfig.idLayer;
		let layer = this._portalService.LayerConfig.layer;
		let activa = this._portalService.LayerConfig.activa;
		console.log(' =>', activa);
		console.log(' =>', this.value);
		let ide_layer = 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide;
		if (activa) {
			if (this._portalService.map !== undefined) {
				let existeLayer = this._portalService.getLayer(ide_layer);
				if (existeLayer) {
					existeLayer.forEach((itemLayer, i) => {
						let opacidad = this.value / 100;
						itemLayer.setOpacity(opacidad);
					});
				}
			}
		}
		if (!activa) {
			let existeLayer = this._portalService.getLayer(ide_layer);
			existeLayer.forEach((itemLayer, i) => {
				this._portalService.map?.removeLayer(itemLayer);
			});
			// if (this.map !== undefined) {
			// 	let lyr = L.tileLayer
			// 		.wms(environment.ServerMap + layer.url, {
			// 			layers: layer.capas[0],
			// 			transparent: layer.transparente,
			// 			format: layer.formato,
			// 			id: 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide,
			// 		})
			// 		.addTo(this.map);
			// 	lyr.setZIndex(layer.orden);
			// 	lyr.setOpacity(layer.opacidad / 100);
			// 	// lyr.grupo = grupo;
			// 	// lyr.tema = tema;
			// 	// lyr.idLayer = idLayer;
			// 	// lyr.idLayerExtra = layer.ide;
			// }
		}
	}
}
