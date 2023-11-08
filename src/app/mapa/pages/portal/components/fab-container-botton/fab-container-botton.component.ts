import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';
import * as L from 'leaflet';

export interface data {
	icon: string;
	iconsvg?: string;
	descripcion: string;
	f?: () => void;
	childrenView: boolean;
	children?: data[];
}

@Component({
	selector: 'app-fab-container-botton',
	templateUrl: './fab-container-botton.component.html',
	styleUrls: ['./fab-container-botton.component.scss'],
})
export class FabContainerBottonComponent {
	public _portalService = inject(PortalService);
	mapaBaseView = false;
	data: data[] = [
		{
			icon: 'architecture',
			descripcion:
				'Con este conjunto de herramientas podrás dibujar y editar el área o polígono de interés. También podrás descargar información del área dibujada',
			childrenView: false,
			children: [
				{
					icon: 'shape_line',
					descripcion: 'Generar polilínea',
					f: () => this._portalService.drawControl?._toolbars.draw._modes.polyline.handler.enable(),
					childrenView: false,
				},
				{
					icon: 'polyline',
					descripcion: 'Generar polígono',
					f: () => this._portalService.drawControl?._toolbars.draw._modes.polygon.handler.enable(),
					childrenView: false,
				},
				{
					icon: 'circle',
					descripcion: 'Generar circulo',
					f: () => this._portalService.drawControl?._toolbars.draw._modes.circle.handler.enable(),
					childrenView: false,
				},
				{
					icon: 'square',
					descripcion: 'Generar cuadrado',
					f: () => this._portalService.drawControl?._toolbars.draw._modes.rectangle.handler.enable(),
					childrenView: false,
				},
				{
					icon: 'location_on',
					descripcion: 'Generar marcador',
					f: () => this._portalService.drawControl?._toolbars.draw._modes.marker.handler.enable(),
					childrenView: false,
				},
				{
					icon: 'pin_drop',
					descripcion: 'Generar marcador circular',
					f: () => this._portalService.drawControl?._toolbars.draw._modes.circlemarker.handler.enable(),
					childrenView: false,
				},
			],
		},
		{
			icon: 'draw',
			descripcion:
				'Con este conjunto de herramientas podrás dibujar y editar el área o polígono de interés. También podrás descargar información del área dibujada',
			childrenView: false,
			children: [
				{
					// editar
					icon: 'draw',
					descripcion: '',
					f: () => this._portalService.drawControl?._toolbars.edit._modes.edit.handler.enable(),
					childrenView: false,
				},
				{
					// guardar editado
					icon: 'save',
					descripcion: '',
					f: () => this._portalService.drawControl?._toolbars.edit._modes.edit.handler.disable(),
					childrenView: false,
				},
				{
					// cancelar editado
					icon: 'cancel',
					descripcion: '',
					f: () => this._portalService.drawControl?._toolbars.edit.disable(),
					childrenView: false,
				},

				//  *

				{
					// editar
					icon: 'delete',
					descripcion: '',
					f: () => this._portalService.drawControl?._toolbars.edit._modes.remove.handler.enable(),
					childrenView: false,
				},
				{
					// editar
					icon: 'restore',
					descripcion: '',
					f: () => this._portalService.drawControl?._toolbars.edit._modes.remove.handler.revertLayers(),
					childrenView: false,
				},
				{
					// editar
					icon: 'delete_forever',
					descripcion: '',
					f: () => this._portalService.drawControl?._toolbars.edit._modes.remove.handler.disable(),
					childrenView: false,
				},
			],
		},
		{
			icon: 'straighten',
			descripcion: 'Esta herramienta te servira para medir distancias',
			childrenView: false,
			f: () => (this._portalService.MedirMapa = !this._portalService.MedirMapa),
		},
		{
			icon: 'print',
			descripcion: 'Con esta herramienta puedes imprimir el área consultada',
			childrenView: false,
			// f: () => (this._portalService.modalMove.generarMapa = !this._portalService.modalMove.generarMapa),
			f: () => window.print(),
		},
		{
			icon: 'search',
			descripcion: 'Con esta herramienta podrás acercarte o alejarte del área consultada',
			childrenView: false,

			children: [
				{
					icon: 'zoom_in',
					descripcion: 'Aumentar',
					f: () => this._portalService.zoomIn(),
					childrenView: false,
				},
				{
					icon: 'zoom_out',
					descripcion: 'Reducir',
					f: () => this._portalService.zoomOut(),
					childrenView: false,
				},
			],
		},
		{
			icon: 'map',
			descripcion: 'Plotear puntos',
			childrenView: false,
			f: () => (this._portalService.modalMove.plotearPuntos = !this._portalService.modalMove.plotearPuntos),
		},
		{
			icon: 'upload',
			descripcion: 'Aquí podrás subir un archivo en formato shapefile y comprimido en formato zip para visualizarlo en el mapa',
			childrenView: false,
			f: () => (this._portalService.modalMove.subirShape = !this._portalService.modalMove.subirShape),
		},
		{
			icon: 'download',
			descripcion: 'Descargar información',
			childrenView: false,
			f: () => (this._portalService.modalMove.descargarInfo = !this._portalService.modalMove.descargarInfo),
		},
		{
			icon: 'home',
			descripcion: 'Mapa inicial',
			f: () => this._portalService.map?.setView([-9.1963858, -75.3050354], 6),
			childrenView: false,
		},
	];
}
