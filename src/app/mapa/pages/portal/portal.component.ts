import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Map, control, tileLayer} from 'leaflet';
import {Subscription} from 'rxjs';
import {PortalService} from './service/portal.service';

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements AfterViewInit, OnInit {
	public _portalService = inject(PortalService);

	public floatButton = false;
	showMenu = false;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}

	constructor(private router: Router) {}
	ngOnInit() {}

	// reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state

	ngAfterViewInit(): void {
		this._portalService.map = new Map('map', {zoomControl: false, minZoom: 6}).setView([-9.1963858, -75.3050354], 6);

		tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
		}).addTo(this._portalService.map);
		//Capas Base

		//Capas Cartograficas
		//Instituo Geofisico del Peru
		const igndepartamentos = tileLayer
			.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
				layers: '0',
				format: 'image/png',
				transparent: true,
			})
			.addTo(this._portalService.map);
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
			.addTo(this._portalService.map);
		const cofopri = tileLayer.wms('http://172.16.16.33:8081/geoserver/GeoCatastro/wms?', {
			layers: 'tg_cartografia',
			format: 'image/png',
			maxZoom: 22,
			transparent: true,
		});
	}

	// reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state
}
