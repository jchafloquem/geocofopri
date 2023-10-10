import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {Map, control, tileLayer} from 'leaflet';

@Injectable({
	providedIn: 'root',
})
export class PortalService {
	map: L.Map | undefined;

	private MapBase = {
		Satélite: tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
		}),

		Callejero: tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
		}),

		Topográfico: tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
		}),
	};
	constructor() {}

	mapabase(mapaValor: 'Satélite' | 'Callejero' | 'Topográfico') {
		//document.querySelector(".leaflet-control-attribution").innerHTML = document.querySelector(".leaflet-control-attribution").innerHTML.substring(0, document.querySelector(".leaflet-control-attribution").innerHTML.indexOf('|'));

		if (this.map && this.MapBase[mapaValor]) {
			this.map.eachLayer((layer) => {
				if (layer !== this.MapBase[mapaValor]) {
					this.map?.removeLayer(layer);
				}
			});
			this.MapBase[mapaValor].addTo(this.map);
		}
	}
}
