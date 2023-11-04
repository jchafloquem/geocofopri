import {Component, OnInit, inject} from '@angular/core';
import {FormControl, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {PortalService} from '../../service/portal.service';
import {MatSelectModule} from '@angular/material/select';
import * as L from 'leaflet';
import {CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Observable, map, startWith, take, tap} from 'rxjs';
interface Departamentos {
	iddpto: string;
	nombdep: string;
	envelope: {
		type: string;
		coordinates: number[][][];
	};
}
interface Provincias {
	iddpto: string;
	nombdep: string;
	idprov: string;
	nombprov: string;
	envelope: {
		type: string;
		coordinates: number[][][];
	};
}
interface Distritos {
	iddpto: string;
	nombdep: string;
	idprov: string;
	nombprov: string;
	iddist: string;
	nombdist: string;
	envelope: {
		type: string;
		coordinates: number[][][];
	};
}

@Component({
	selector: 'app-filtro-ubigeo',
	templateUrl: './filtro-ubigeo.component.html',
	styleUrls: ['./filtro-ubigeo.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		MatCommonModule,
		MatIconModule,
		MatInputModule,
		FormsModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
	],
})
export class FiltroUbigeoComponent implements OnInit {
	public _portalService = inject(PortalService);
	// *Departamentos
	DepartamentosControl = new FormControl<string | null>(null, Validators.required);
	Departamentos: Departamentos[] = this._portalService.Limites.Departamentos;
	filteredDepartamentos!: Observable<Departamentos[]>;
	// *Provincias
	ProvinciasControl = new FormControl<string | null>(null, Validators.required);
	Provincias: Provincias[] = this._portalService.Limites.Provincias;
	filteredProvincias!: Observable<Provincias[]>;
	// *Distritos
	DistritosControl = new FormControl<string | null>(null, Validators.required);
	Distritos: Distritos[] = this._portalService.Limites.Distritos;
	filteredDistritos!: Observable<Distritos[]>;

	constructor() {
		this.DepartamentosControl.enable();
		this.ProvinciasControl.disable();
		this.DistritosControl.disable();
	}
	ngOnInit(): void {
		this.filteredDepartamentos = this.DepartamentosControl.valueChanges.pipe(
			startWith(''),
			map((value) => this._filterDepartamentos(value || '')),
			tap((x) => {
				if (this.DepartamentosControl.value !== null) {
					this.ProvinciasControl.enable();
					this.ProvinciasControl.reset();
				}
			})
		);
		this.filteredProvincias = this.ProvinciasControl.valueChanges.pipe(
			startWith(''),
			map((value) => this._filterProvincias(value || '')),
			tap((x) => {
				if (this.DepartamentosControl.value !== null) {
					this.DistritosControl.enable();
					this.DistritosControl.reset();
				}
			})
		);
		this.filteredDistritos = this.DistritosControl.valueChanges.pipe(
			startWith(''),
			map((value) => this._filterDistritos(value || ''))
		);
	}
	private _filterDepartamentos(value: string): Departamentos[] {
		const filterValue = value.toUpperCase();
		const Filtrado = this.Departamentos.filter((x) => x.nombdep.toUpperCase().includes(filterValue));
		if (Filtrado.length === 1) {
			this.fitBounds(Filtrado[0].envelope.coordinates);
		}
		return Filtrado;
	}
	private _filterProvincias(value: string): Provincias[] {
		const filterValue = value.toUpperCase();
		const DepartamentosControl = this.DepartamentosControl.value ? this.DepartamentosControl.value?.toUpperCase() : '';
		const fil = this.Provincias.filter((Y) => Y.nombdep.toUpperCase().includes(DepartamentosControl));
		const Filtrado = fil.filter((x) => x.nombprov.toUpperCase().includes(filterValue));
		if (Filtrado.length === 1) {
			this.fitBounds(Filtrado[0].envelope.coordinates);
		}
		return Filtrado;
	}
	private _filterDistritos(value: string): Distritos[] {
		const filterValue = value.toUpperCase();
		const ProvinciasControl = this.ProvinciasControl.value ? this.ProvinciasControl.value?.toUpperCase() : '';
		const fil = this.Distritos.filter((Y) => Y.nombprov.toUpperCase().includes(ProvinciasControl));
		const Filtrado = fil.filter((x) => x.nombdist.toUpperCase().includes(filterValue));
		if (Filtrado.length === 1) {
			this.fitBounds(Filtrado[0].envelope.coordinates);
		}
		return Filtrado;
	}
	fitBounds(coordinates: number[][][]) {
		let coords = coordinates[0].map((resp: any[]) => resp.reverse());
		let envelope = L.polygon(coords);
		this._portalService.map?.fitBounds(envelope.getBounds());
		coordinates[0].map((resp) => resp.reverse());
	}
}
