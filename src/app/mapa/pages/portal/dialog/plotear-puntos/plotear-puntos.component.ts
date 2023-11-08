import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import * as L from 'leaflet';
import {PortalService} from '../../service/portal.service';
import {MatSelectModule} from '@angular/material/select';
import proj4 from 'proj4';

interface sistema {
	value: string;
	name: string;
}

@Component({
	selector: 'app-plotear-puntos',
	templateUrl: './plotear-puntos.component.html',
	styleUrls: ['./plotear-puntos.component.scss'],
	standalone: true,
	imports: [MatCommonModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, CommonModule],
})
export class PlotearPuntosComponent {
	public _portalService = inject(PortalService);
	sistemasControl = new FormControl<string | null>(null, Validators.required);
	sistemas: sistema[] = [
		{value: '4326', name: 'Geograficas'},
		{value: '32717', name: 'Zona 17s'},
		{value: '32718', name: 'Zona 18s'},
		{value: '32719', name: 'Zona 19s'},
	];
	descripcionControl = new FormControl<string | null>(null, Validators.required);
	latitudControl = new FormControl<number | null>(null, Validators.required);
	longitudControl = new FormControl<number | null>(null, Validators.required);
	public zona: number = 0;

	constructor() {}
	generarPunto() {
		if (
			this._portalService.map &&
			this.sistemasControl.valid &&
			this.descripcionControl.valid &&
			this.latitudControl.valid &&
			this.longitudControl.valid &&
			this.sistemasControl.value
		) {
			// let layerTemp = L.layerGroup();

			let latitud = this.latitudControl.value !== null ? this.latitudControl.value : 0;
			let longitud = this.longitudControl.value !== null ? this.longitudControl.value : 0;
			if (this.sistemasControl.value === '4326') {
				const LatLng: L.LatLng = new L.LatLng(latitud, longitud);
				L.marker(LatLng)
					.addTo(this._portalService.map)
					.bindPopup('<b>' + this.descripcionControl.value + '</b>')
					.openPopup();
				// const LatLng: L.LatLng = new L.LatLng(latitud, longitud);
				// let marker = L.marker(LatLng).bindPopup('<b>' + this.descripcionControl.value + '</b>');
				// layerTemp.addLayer(marker);
			} else {
				this.zona = 0;
				if (this.sistemasControl.value == '32717') this.zona = 17;
				if (this.sistemasControl.value == '32718') this.zona = 18;
				if (this.sistemasControl.value == '32719') this.zona = 19;
				let coords: {
					latitude: number;
					longitude: number;
				};

				// let layerTemp = L.layerGroup();
				coords = this.convertUTMtoLatLon(this.zona, latitud, longitud, this.sistemasControl.value);
				console.log(' =>', coords);

				const LatLng: L.LatLng = new L.LatLng(coords.latitude, coords.longitude);
				L.marker(LatLng)
					.addTo(this._portalService.map)
					.bindPopup('<b>' + this.descripcionControl.value + '</b>')
					.openPopup();
				// const LatLng: L.LatLng = new L.LatLng(coords.latitude, coords.longitude);
				// let marker = L.marker(LatLng).bindPopup('<b>' + this.descripcionControl.value + '</b>');
				// layerTemp.addLayer(marker);
			}
			// this._portalService.map.addLayer(layerTemp);

			// Mapa.Zoom = Mapa.Map._zoom;
		}
	}
	convertUTMtoLatLon(zone: number, easting: number, northing: number, sistema: string): {latitude: number; longitude: number} {
		console.log(' =>', zone);
		console.log(' =>', easting);
		console.log(' =>', northing);
		console.log(' =>', sistema);
		let southern = 'S';
		let ellipsoid = 'WGS84';
		// Define la proyección UTM correspondiente a tu zona (por ejemplo, 17S).
		proj4.defs(`EPSG:${sistema}`, `+proj=utm +zone=${zone} +south +ellps=${ellipsoid} +datum=${ellipsoid} +units=m +no_defs`);

		// Realiza la conversión UTM a latitud/longitud.
		const result = proj4(`EPSG:${sistema}`, 'EPSG:4326', [easting, northing]);

		return {latitude: result[1], longitude: result[0]};
	}
	// remove() {
	// 	let layers = this._portalService.getLayer('LayerPuntos');
	// 	Mapa.Map.removeLayer(item);
	// }
}
