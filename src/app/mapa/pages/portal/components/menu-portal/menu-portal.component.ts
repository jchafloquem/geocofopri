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
	}
	toogleMenu() {
		this._portalService.menu = !this._portalService.menu;
	}
}
