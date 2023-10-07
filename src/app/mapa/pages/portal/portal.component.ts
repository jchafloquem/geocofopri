import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import * as L from 'leaflet';
import {Map, control, tileLayer} from 'leaflet';
import {Subscription} from 'rxjs';

type RouterNameMap = {
	[key: string]: string;
};

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements AfterViewInit, OnInit {
	public floatButton = false;
	showMenu = false;
	map: L.Map | undefined;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}

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

	constructor(private router: Router) {}
	ngOnInit() {}

	// reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state

	ngAfterViewInit(): void {
		this.map = new Map('map', {zoomControl: false, minZoom: 6}).setView([-9.1963858, -75.3050354], 6);

		tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
		}).addTo(this.map);
		//Capas Base

		//Capas Cartograficas
		//Instituo Geofisico del Peru
		const igndepartamentos = tileLayer
			.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
				layers: '0',
				format: 'image/png',
				transparent: true,
			})
			.addTo(this.map);
		const ignprovincia = tileLayer.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
			layers: '2',
			format: 'image/png',
			transparent: true,
		});
		const igndistrito = tileLayer.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
			layers: '3',
			format: 'image/png',
			transparent: true,
		});
		//Autoridad Nacional del Agua
		const anarios = tileLayer.wms('https://geosnirh.ana.gob.pe/server/services/Público/Rios/MapServer/WMSServer', {
			layers: '0',
			format: 'image/png',
			transparent: true,
		});
		const analagunas = tileLayer
			.wms('https://geosnirh.ana.gob.pe/server/services/Público/Lagunas/MapServer/WMSServer', {
				layers: '0',
				format: 'image/png',
				transparent: true,
			})
			.addTo(this.map);
		const cofopri = tileLayer.wms('http://172.16.16.33:8081/geoserver/GeoCatastro/wms?', {
			layers: 'tg_cartografia',
			format: 'image/png',
			maxZoom: 22,
			transparent: true,
		});
	}

	// reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state

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
