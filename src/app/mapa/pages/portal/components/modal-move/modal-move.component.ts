import {Component, ElementRef, inject, OnInit, Input} from '@angular/core';
import {PortalService} from '../../service/portal.service';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
	selector: 'app-modal-move',
	templateUrl: './modal-move.component.html',
	styleUrls: ['./modal-move.component.scss'],
	standalone: true,
	imports: [CommonModule, MatIconModule],
})
export class ModalMoveComponent implements OnInit {
	@Input() titulo = '';
	@Input() width = 192;
	@Input() centerX = false;
	@Input() centerY = false;
	@Input() closed = 'modalMove';
	public _portalService = inject(PortalService);
	private isDragging = false;
	private offsetX = 0;
	private offsetY = 0;
	public modal!: HTMLElement;
	constructor(private el: ElementRef) {}
	ngOnInit(): void {
		if (this.titulo == '') {
			this.titulo = this._portalService.nameLayer;
		}
		this.modal = this.el.nativeElement.querySelector('.modal') as HTMLElement;
		const maximoX = this.width === 192 ? window.innerWidth - 192 : window.innerWidth - this.width;
		const maximoY = window.innerHeight;

		const left = this.centerX ? maximoX / 2 : 15 + this._portalService.clientX > maximoX ? maximoX : 10 + this._portalService.clientX;
		this.modal.style.left = left + 'px';
		this.modal.style.width = this.width + 'px';

		const top = this.centerY ? maximoY / 2 - 300 : this._portalService.clientY - 15;
		this.modal.style.top = top + 'px';
	}

	toogleClosed() {
		this._portalService.toogleClosed(this.closed);
	}
	startDragging(event: MouseEvent) {
		this.isDragging = true;
		this.offsetX = event.clientX;
		this.offsetY = event.clientY;
	}
	startDraggingTouch(event: TouchEvent) {
		this.isDragging = true;
		this.offsetX = event.touches[0].clientX;
		this.offsetY = event.touches[0].clientY;
	}
	stopDragging() {
		this.isDragging = false;
	}
	onDragTouch(event: TouchEvent) {
		if (this.isDragging) {
			const touch = event.touches[0];
			const newOffsetX = touch.clientX;
			const newOffsetY = touch.clientY;
			const dx = newOffsetX - this.offsetX;
			const dy = newOffsetY - this.offsetY;

			// Mover el modal
			this.modal.style.left = this.modal.offsetLeft + dx + 'px';
			this.modal.style.top = this.modal.offsetTop + dy + 'px';

			this.offsetX = newOffsetX;
			this.offsetY = newOffsetY;
		}
	}
	onDrag(event: MouseEvent) {
		if (this.isDragging) {
			const newOffsetX = event.clientX;
			const newOffsetY = event.clientY;
			const dx = newOffsetX - this.offsetX;
			const dy = newOffsetY - this.offsetY;

			// Mover el modal
			this.modal.style.left = this.modal.offsetLeft + dx + 'px';
			this.modal.style.top = this.modal.offsetTop + dy + 'px';

			this.offsetX = newOffsetX;
			this.offsetY = newOffsetY;
		}
	}
}
