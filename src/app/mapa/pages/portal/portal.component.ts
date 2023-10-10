import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Map, control, tileLayer} from 'leaflet';
import {Subscription} from 'rxjs';
import * as L from 'leaflet';
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
		this._portalService.map = new Map('map', {
			zoomControl: false,
			minZoom: 6,
			maxZoom: 23,
			layers: [this._portalService.MapBase.Satélite],
		}).setView([-9.1963858, -75.3050354], 6);
		//Capas Base
		// const ff = new L.control.Measure()
		this._portalService.map?.on('click', (e) => {
			if (!this._portalService.MedirMapa) {
				this._portalService.medir(e);
			}
		});
		//Capas Cartograficas
		//Instituo Geofisico del Peru
		const igndepartamentos = tileLayer
			.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
				attribution: 'igndepartamentos',

				layers: '1',
				format: 'image/png',
				transparent: true,
			})
			.addTo(this._portalService.map);
		const ignprovincia = tileLayer.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
			attribution: 'ignprovincia',

			layers: '2',
			format: 'image/png',
			transparent: true,
		});
		const igndistrito = tileLayer.wms('https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer', {
			attribution: 'igndistrito',

			layers: '3',
			format: 'image/png',
			transparent: true,
		});
		//Autoridad Nacional del Agua
		const anarios = tileLayer.wms('https://geosnirh.ana.gob.pe/server/services/Público/Rios/MapServer/WMSServer', {
			attribution: 'anarios',

			layers: '4',
			format: 'image/png',
			transparent: true,
		});
		const analagunas = tileLayer
			.wms('https://geosnirh.ana.gob.pe/server/services/Público/Lagunas/MapServer/WMSServer', {
				attribution: 'analagunas',

				layers: '5',
				format: 'image/png',
				transparent: true,
			})
			.addTo(this._portalService.map);
		const cofopri = tileLayer.wms('http://172.16.16.33:8081/geoserver/GeoCatastro/wms?', {
			attribution: 'cofopri',

			layers: 'tg_cartografia',
			format: 'image/png',
			maxZoom: 22,
			transparent: true,
		});
	}

	// reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state
}
