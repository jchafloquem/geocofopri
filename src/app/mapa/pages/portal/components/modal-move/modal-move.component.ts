import {Component, inject, OnInit} from '@angular/core';
import {PortalService} from '../../service/portal.service';

@Component({
	selector: 'app-modal-move',
	templateUrl: './modal-move.component.html',
	styleUrls: ['./modal-move.component.scss'],
})
export class ModalMoveComponent implements OnInit {
	public _portalService = inject(PortalService);

	private isDragging = false;
	private offsetX = 0;
	private offsetY = 0;
	ngOnInit(): void {
		const modal = document.querySelector('.modal') as HTMLElement;
		const maximo = window.innerWidth - 128;
		const left = 15 + this._portalService.clientX > maximo ? maximo : 10 + this._portalService.clientX;
		modal.style.left = left + 'px';
		modal.style.top = this._portalService.clientY - 15 + 'px';
	}

	startDragging(event: MouseEvent) {
		this.isDragging = true;
		this.offsetX = event.clientX;
		this.offsetY = event.clientY;
	}

	stopDragging() {
		this.isDragging = false;
	}

	onDrag(event: MouseEvent) {
		if (this.isDragging) {
			const newOffsetX = event.clientX;
			const newOffsetY = event.clientY;
			const dx = newOffsetX - this.offsetX;
			const dy = newOffsetY - this.offsetY;

			// Mover el modal
			const modal = document.querySelector('.modal') as HTMLElement;
			modal.style.left = modal.offsetLeft + dx + 'px';
			modal.style.top = modal.offsetTop + dy + 'px';

			this.offsetX = newOffsetX;
			this.offsetY = newOffsetY;
		}
	}
}
