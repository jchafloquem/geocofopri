import {AfterViewInit, Component, inject} from '@angular/core';
import {Map, tileLayer} from 'leaflet';
import * as L from 'leaflet';
import {PortalService} from './service/portal.service';
import {ProyectosService} from './service/proyectos.service';

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements AfterViewInit {
	height = ` calc(100vh - 64px) `;
	menu = true;

	public _portalService = inject(PortalService);
	public _proyectosService = inject(ProyectosService);

	public floatButton = false;
	showMenu = false;
	cargaSpinner: boolean = true;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}

	constructor() {}

	spinner() {
		this.cargaSpinner = false;
	}

	ngAfterViewInit(): void {
		this._portalService.map = new Map('map', {
			// renderer: L.canvas(),
			zoomControl: false,
			minZoom: 6,
			maxZoom: 23,
			layers: [this._portalService.MapBase.Satélite],
		}).setView([-9.1963858, -75.3050354], 6);

		this._portalService.map?.on('click', (e) => {
			if (this._portalService.MedirMapa) {
				this._portalService.medir(e);
			}
		});
		this._portalService.map?.on('dblclick', (e) => {
			if (this._portalService.MedirMapa) {
				// this._portalService.drawControl?._toolbars.draw._modes.polyline.handler.e
			}
		});
		this._portalService.MapBase.Satélite.on('load', () => {
			console.log(' =>');
			// La función que deseas ejecutar después de que el mapa se haya cargado
			this.spinner();
		});

		// #

		// #
		// this._portalService.drawnItems = new L.FeatureGroup();
		this._portalService.drawnItems = new L.FeatureGroup().addTo(this._portalService.map);

		this._portalService.map.on(L.Draw.Event.CREATED, (e: any) => {
			const layer = e.layer;
			this._portalService.drawnItems?.addLayer(layer);
		});

		this._portalService.drawControl = new L.Control.Draw({
			edit: {
				featureGroup: this._portalService.drawnItems,
			},
		});
		this._portalService.map.addLayer(this._portalService.drawnItems);
		this._portalService.map.addControl(this._portalService.drawControl);
		// #
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
