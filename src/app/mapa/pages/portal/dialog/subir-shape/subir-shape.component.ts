import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
	selector: 'app-subir-shape',
	templateUrl: './subir-shape.component.html',
	styleUrls: ['./subir-shape.component.scss'],
	standalone: true,
	imports: [MatCommonModule, MatIconModule, MatInputModule, FormsModule],
})
export class SubirShapeComponent {}
