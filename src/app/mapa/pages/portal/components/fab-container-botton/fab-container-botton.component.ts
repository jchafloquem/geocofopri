import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';

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
			icon: 'edit',
			descripcion:
				'Con este conjunto de herramientas podrás dibujar y editar el área o polígono de interés. También podrás descargar información del área dibujada',
			childrenView: false,
			children: [
				{
					icon: 'polyline',

					descripcion: '',
					f: () => this._portalService.mapabase('Callejero'),
					childrenView: false,
				},
				{
					icon: 'architecture',

					descripcion: '',
					f: () => this._portalService.mapabase('Callejero'),
					childrenView: false,
				},
				{
					icon: 'draw',

					descripcion: '',
					f: () => this._portalService.mapabase('Callejero'),
					childrenView: false,
				},
				{
					icon: 'shape_line',

					descripcion: '',
					f: () => this._portalService.mapabase('Callejero'),
					childrenView: false,
				},
			],
		},
		{
			icon: 'square_foot',
			descripcion: 'Esta herramienta te servira para medir distancias',
			childrenView: false,
			f: () => (this._portalService.MedirMapa = !this._portalService.MedirMapa),
		},
		{
			icon: 'print',
			descripcion: 'Con esta herramienta puedes imprimir el área consultada',
			childrenView: false,
			f: () => (this._portalService.modalMove.generarMapa = !this._portalService.modalMove.generarMapa),
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
			childrenView: false,
		},
	];
}
