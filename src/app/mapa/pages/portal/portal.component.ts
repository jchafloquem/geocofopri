import {AfterViewInit, Component, OnInit, inject} from '@angular/core';
import {Map, tileLayer} from 'leaflet';
import * as L from 'leaflet';
import {PortalService} from './service/portal.service';
import {ProyectosService} from './service/proyectos.service';

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements AfterViewInit, OnInit {
	height = ` calc(100vh - 64px) `;
	menu = true;

	public _portalService = inject(PortalService);
	public _proyectosService = inject(ProyectosService);

	public floatButton = false;
	showMenu = false;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}

	constructor() {}
	ngOnInit() {}
	gg2() {
		L.Control.Draw.prototype.initialize();
		this._portalService.map?.fire('enabled', {handler: 'polyline'}, true);
	}
	// reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state
	gg() {
		// Para activar la herramienta de dibujo de polígonos

		this._portalService.drawControl?._toolbars.draw._modes.polyline.handler.enable();
	}
	gg3() {
		// Para activar la herramienta de dibujo de polígonos

		this._portalService.drawControl?._toolbars.edit._modes.edit.handler.enable();
	}
	gg4(e: any) {
		const layers = e.layers;
		layers.eachLayer((layer: any) => {
			this._portalService.drawnItems?.addLayer(layer);
		});
	}
	gg5() {
		this._portalService.drawControl?._toolbars.edit._modes.edit.handler.disable();

		// this._portalService.drawControl?._toolbars.edit._modes.edit.handler.prototype.save();
		// console.log(' =>', this._portalService.drawControl?._toolbars.edit._modes.edit.handler.prototype.save());

		// L.EditToolbar.Edit.prototype.save();
		// this._portalService.drawControl?._toolbars.edit._modes.edit.handler.save();
		// L.EditToolbar.Edit.prototype.save();
		// L.EditToolbar.Delete.prototype.save();
		// L.EditToolbar.Edit.prototype.save();
		// this._portalService.drawControl?._toolbars.edit._startMeasuring();
		// this._portalService.drawControl?._toolbars.edit.handler.save();
		// this._portalService.drawControl?._toolbars.edit._modes.edit.handler._save();
	}

	gg6() {
		this._portalService.drawControl?._toolbars.edit._modes.edit.handler.removeAllLayers();

		// let t: L.LayerGroup<any> = new L.LayerGroup();
		// const t = this._portalService.drawnItems?.getLayer;
		// this._portalService.drawnItems?.eachLayer((layer) => {
		// 	t.addLayer(layer);
		// });
		// this._portalService.drawnItems?.eachLayer((e: any) => {
		// 	t.addLayer(e);
		// });
		// console.log(' =>', t);
		// this._portalService.drawnItems?.eachLayer((layer: any) => {
		// 	this._portalService.drawnItems?.addLayer(layer);
		// });

		// this._portalService.map?.fire(L.Draw.Event.EDITED, {layers: t});
	}
	gg7() {
		this._portalService.Load();
	}
	gg8() {
		this._portalService.Activo('150117');
	}
	ngAfterViewInit(): void {
		this._portalService.map = new Map('map', {
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

		// #

		// #
		// this._portalService.drawnItems = new L.FeatureGroup();
		this._portalService.drawnItems = new L.FeatureGroup().addTo(this._portalService.map);

		this._portalService.map.on(L.Draw.Event.CREATED, (e: any) => {
			const layer = e.layer;
			console.log('ddddddddd =>');

			this._portalService.drawnItems?.addLayer(layer);
		});
		this._portalService.map.on(L.Draw.Event.EDITED, (e: any) => {
			console.log('ss =>', e);
			const layers = e.layers;
			layers.eachLayer((layer: any) => {
				this._portalService.drawnItems?.addLayer(layer);
			});
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
