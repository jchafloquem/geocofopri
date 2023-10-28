import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
	selector: 'app-plotear-puntos',
	templateUrl: './plotear-puntos.component.html',
	styleUrls: ['./plotear-puntos.component.scss'],
	standalone: true,
	imports: [MatCommonModule, MatIconModule, MatInputModule, FormsModule],
})
export class PlotearPuntosComponent {}
