import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
	selector: 'app-filtro-ubigeo',
	templateUrl: './filtro-ubigeo.component.html',
	styleUrls: ['./filtro-ubigeo.component.scss'],
	standalone: true,
	imports: [MatCommonModule, MatIconModule, MatInputModule, FormsModule],
})
export class FiltroUbigeoComponent {}
