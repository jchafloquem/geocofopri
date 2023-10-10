import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';

@Component({
	selector: 'app-fab-container-top',
	templateUrl: './fab-container-top.component.html',
	styleUrls: ['./fab-container-top.component.scss'],
})
export class FabContainerTopComponent {
	public _portalService = inject(PortalService);

	public mapaBaseView = false;
}
