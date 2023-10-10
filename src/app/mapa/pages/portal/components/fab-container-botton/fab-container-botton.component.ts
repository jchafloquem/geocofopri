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
	mapaBaseView2 = false;
	data: data[] = [
		{
			icon: 'edit',
			descripcion: '',
			f: () => this._portalService.mapabase('Callejero'),
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
			descripcion: '',
			childrenView: false,
			f: () => (this._portalService.MedirMapa = !this._portalService.MedirMapa),
		},
		{
			icon: 'print',
			descripcion: '',
			childrenView: false,
		},
		{
			icon: 'search',
			descripcion: '',
			f: () => this._portalService.mapabase('Topográfico'),
			childrenView: false,

			children: [
				{
					icon: 'zoom_in',
					descripcion: '',
					f: () => this._portalService.zoomIn(),
					childrenView: false,
				},
				{
					icon: 'zoom_out',
					descripcion: '',
					f: () => this._portalService.zoomOut(),
					childrenView: false,
				},
			],
		},
		{
			icon: 'map',
			descripcion: '',
			f: () => this._portalService.mapabase('Topográfico'),
			childrenView: false,
		},
		{
			icon: 'upload',
			descripcion: '',
			f: () => this._portalService.mapabase('Topográfico'),
			childrenView: false,
		},
		{
			icon: 'download',
			descripcion: '',
			f: () => this._portalService.mapabase('Topográfico'),
			childrenView: false,
		},
		{
			icon: 'home',
			descripcion: '',
			f: () => this._portalService.mapabase('Topográfico'),
			childrenView: false,
		},
	];
}
