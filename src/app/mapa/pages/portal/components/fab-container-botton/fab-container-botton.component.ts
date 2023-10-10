import {Component, inject} from '@angular/core';
import {PortalService} from '../../service/portal.service';

@Component({
	selector: 'app-fab-container-botton',
	templateUrl: './fab-container-botton.component.html',
	styleUrls: ['./fab-container-botton.component.scss'],
})
export class FabContainerBottonComponent {
	public _portalService = inject(PortalService);
}
