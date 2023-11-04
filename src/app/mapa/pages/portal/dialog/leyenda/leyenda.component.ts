import {Component, OnInit, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {PortalService} from '../../service/portal.service';
import {CommonModule} from '@angular/common';
interface leyenda {
	nombre: string;
	grupos: grupo[];
}
interface grupo {
	nombre: string;
	layer: layer[];
}
interface layer {
	nombre: string;
	titulo: string;
	imagenes: string;
}

@Component({
	selector: 'app-leyenda',
	templateUrl: './leyenda.component.html',
	styleUrls: ['./leyenda.component.scss'],
	standalone: true,
	imports: [MatIconModule, MatInputModule, FormsModule, CommonModule],
})
export class LeyendaComponent implements OnInit {
	public _portalServiced = inject(PortalService);
	public leyenda: leyenda[] = [];

	ngOnInit(): void {
		this.leyendaList();
	}
	leyendaList() {
		let data = this._portalServiced.Layers.Temas.map((tema) => {
			const leyenda = {
				nombre: tema.nombre,
				grupos: tema.Grupos.map((grupo) => {
					const filteredLayers = grupo.Layers.filter((layer) => layer.activa === true);
					return {
						nombre: grupo.nombre,
						layer: filteredLayers.map((layer) => {
							return {
								nombre: layer.nombre,
								titulo: layer.leyenda.titulo,
								imagenes: layer.leyenda.imagenes[0].url,
							};
						}),
					};
				}),
			};
			return leyenda;
		});
		this.leyenda = data.filter((tema) => tema.grupos.some((grupo) => grupo.layer.length > 0));
		console.log(this.leyenda);
	}
}
