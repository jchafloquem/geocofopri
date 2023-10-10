import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';

export interface data {
	icon: string;
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
			icon: '1',
			descripcion: '',
			f: () => this._portalService.mapabase('Callejero'),
			childrenView: false,
			children: [
				{
					icon: '1',
					descripcion: '',
					f: () => this._portalService.mapabase('Callejero'),
					childrenView: false,
				},
			],
		},
		{
			icon: '2',
			descripcion: '',
			childrenView: false,
			children: [
				{
					icon: '1',
					descripcion: '',
					f: () => this._portalService.mapabase('Topográfico'),
					childrenView: false,
				},
				{
					icon: '2',
					descripcion: '',
					f: () => this._portalService.mapabase('Topográfico'),
					childrenView: false,
				},
			],
		},
		{
			icon: '3',
			descripcion: '',
			f: () => this._portalService.mapabase('Topográfico'),
			childrenView: false,

			children: [
				{
					icon: '1',
					descripcion: '',
					f: () => this._portalService.mapabase('Topográfico'),
					childrenView: false,
				},
				{
					icon: '2',
					descripcion: '',
					f: () => this._portalService.mapabase('Topográfico'),
					childrenView: false,
				},
				{
					icon: '1',
					descripcion: '',
					f: () => this._portalService.mapabase('Topográfico'),
					childrenView: false,
				},
			],
		},
	];
}
