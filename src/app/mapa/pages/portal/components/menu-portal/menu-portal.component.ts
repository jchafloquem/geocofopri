import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';

@Component({
	selector: 'app-menu-portal',
	templateUrl: './menu-portal.component.html',
	styleUrls: ['./menu-portal.component.scss'],
})
export class MenuPortalComponent {
	public _portalService = inject(PortalService);
	subMenu = 'capas';
	closetMenu(value: string) {
		if (!this._portalService.menu) {
			this._portalService.menu = !this._portalService.menu;
		} else if (this.subMenu == value) {
			this._portalService.menu = !this._portalService.menu;
		}
	}
}
