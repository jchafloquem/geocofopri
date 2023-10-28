import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';
import {ProyectosService} from '../../service/proyectos.service';
import {ThemePalette} from '@angular/material/core';

@Component({
	selector: 'app-menu-portal',
	templateUrl: './menu-portal.component.html',
	styleUrls: ['./menu-portal.component.scss'],
})
export class MenuPortalComponent {
	public _portalService = inject(PortalService);
	public _proyectosService = inject(ProyectosService);
	color: ThemePalette = 'primary';
	disabled = false;
	subMenu = 'capas';
	closetMenu(value: string) {
		if (!this._portalService.menu) {
			this._portalService.menu = !this._portalService.menu;
		} else if (this.subMenu == value) {
			this._portalService.menu = !this._portalService.menu;
		}
		setTimeout(() => {
			this._portalService.map?.invalidateSize();
		}, 200);
	}
	toogleMenu() {
		this._portalService.menu = !this._portalService.menu;
		setTimeout(() => {
			this._portalService.map?.invalidateSize();
		}, 200);
	}
	onElementClick(
		event: MouseEvent,
		tema: string,
		grupo: string,
		idLayer: string,
		layer: {
			ide: number;
			nombre: string;
			url: string;
			capas: string[];
			tipo: string;
			activa: boolean;
			transparente: boolean;
			formato: string;
			orden: number;
			opacidad: number;
			isLeyenda: boolean;
			isInfo: boolean;
			template: string;
		},
		activa: boolean
	) {
		this._portalService.clientX = event.clientX;
		this._portalService.clientY = event.clientY;
		this._portalService.nameLayer = layer.nombre;
		this._portalService.LayerConfig = {
			tema,
			grupo,
			idLayer,
			layer,
			activa,
		};
		// this._portalService.nameLayer = 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide;
	}
}
