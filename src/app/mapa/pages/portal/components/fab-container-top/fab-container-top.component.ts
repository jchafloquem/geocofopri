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
	selector: 'app-fab-container-top',
	templateUrl: './fab-container-top.component.html',
	styleUrls: ['./fab-container-top.component.scss'],
})
export class FabContainerTopComponent {
	public _portalService = inject(PortalService);

	public mapaBaseView = false;
	data: data[] = [
		{
			icon: 'email',
			descripcion: 'Contactenos',
			childrenView: false,
			f: () => (this._portalService.modalMove.contactanos = !this._portalService.modalMove.contactanos),
		},
		{
			icon: 'format_list_bulleted',
			descripcion: 'Mostrar Leyenda',
			childrenView: false,
			f: () => (this._portalService.modalMove.leyenda = !this._portalService.modalMove.leyenda),
		},
		{
			icon: 'filter_alt',
			descripcion: 'Mostrar Filtros',
			childrenView: false,
			f: () => (this._portalService.modalMove.filtroUbigeo = !this._portalService.modalMove.filtroUbigeo),
		},
	];
}
