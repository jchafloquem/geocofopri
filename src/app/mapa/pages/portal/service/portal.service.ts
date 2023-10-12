import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {Map, tileLayer, Control, FeatureGroup} from 'leaflet';

@Injectable({
	providedIn: 'root',
})
export class PortalService {
	map: Map | undefined;
	drawnItems: FeatureGroup<any> | undefined;
	drawControl: Control.Draw | any | undefined;
	zoom? = 0;
	private firstLatLng?: L.LatLng;
	private secondLatLng?: L.LatLng;
	public MedirMapa = false;
	public MapBase = {
		Satélite: tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
			minZoom: 6,
			zIndex: 0,
		}),

		Callejero: tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
			minZoom: 6,
			zIndex: 0,
		}),

		Topográfico: tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
			minZoom: 6,
			zIndex: 0,
		}),
	};
	constructor() {
		this.zoom = this.map?.getZoom();
	}

	mapabase(mapaValor: 'Satélite' | 'Callejero' | 'Topográfico') {
		//document.querySelector(".leaflet-control-attribution").innerHTML = document.querySelector(".leaflet-control-attribution").innerHTML.substring(0, document.querySelector(".leaflet-control-attribution").innerHTML.indexOf('|'));
		console.log(' =>', mapaValor);
		this.map?.removeLayer(this.MapBase.Satélite);
		this.map?.removeLayer(this.MapBase.Callejero);
		this.map?.removeLayer(this.MapBase.Topográfico);
		this.map?.addLayer(this.MapBase[mapaValor]);

		// const mapv = ['Satélite', 'Callejero', 'Topográfico'].filter((x) => x !== mapaValor);
		// if (this.map && this.MapBase[mapaValor]) {
		// 	this.map.eachLayer((layer) => {
		// 		console.log(' =>', layer);
		// 		console.log(' =>', this.MapBase[mapaValor]);
		// 		if (layer !== this.MapBase[mapaValor] && layer.options.attribution === '') {
		// 			console.log(' =>', layer);
		// 			this.map?.removeLayer(layer);
		// 			if (this.map) {
		// 				this.MapBase[mapaValor].addTo(this.map);
		// 			}
		// 		}
		// 	});
		// }
	}
	zoomIn() {
		this.zoom = this.map?.getZoom();
		if (this.zoom !== undefined) {
			this.zoom++;
			this.map?.setZoom(this.zoom);
		}
	}
	zoomOut() {
		this.zoom = this.map?.getZoom();
		if (this.zoom !== undefined) {
			this.zoom--;
			this.map?.setZoom(this.zoom);
		}
	}

	public medir(e: L.LeafletMouseEvent) {
		// if (!this.firstLatLng) {
		// 	this.firstLatLng = e.latlng;
		// 	if (this.map !== undefined) {
		// 		L.marker(this.firstLatLng)
		// 			.addTo(this.map)
		// 			.bindPopup('Point A<br/>' + e.latlng)
		// 			.openPopup();
		// 	}
		// } else {
		// 	this.secondLatLng = e.latlng;
		// 	if (this.map !== undefined) {
		// 		L.marker(this.secondLatLng)
		// 			.addTo(this.map)
		// 			.bindPopup('Point B<br/>' + e.latlng)
		// 			.openPopup();
		// 	}
		// }

		if (!this.firstLatLng) {
			this.firstLatLng = e.latlng;
			if (this.map !== undefined) {
				L.marker(this.firstLatLng)
					.addTo(this.map)
					.bindPopup('Point A<br/>' + e.latlng)
					.openPopup();
			}
		} else {
			this.secondLatLng = e.latlng;
			if (this.map !== undefined) {
				L.marker(this.secondLatLng)
					.addTo(this.map)
					.bindPopup('Point B<br/>' + e.latlng + this.medirDistancia(this.firstLatLng, e.latlng))
					.openPopup();
			}
		}

		if (this.firstLatLng && this.secondLatLng) {
			// Dibujamos una línea entre los dos puntos
			if (this.map !== undefined) {
				L.polyline([this.firstLatLng, e.latlng], {
					color: '#2A5E8A',
				}).addTo(this.map);
				this.firstLatLng = e.latlng;
			}
		}
	}

	private medirDistancia(latlng1: L.LatLng, latlng2: L.LatLng): string {
		const dis = this.map?.distance(latlng1, latlng2);
		// console.log(' =>', dis && dis * 0.001);
		return dis ? '' + dis * 0.001 : '';
		// Aquí puedes implementar la lógica para medir la distancia
		// entre this.firstLatLng y this.secondLatLng
	}
}
