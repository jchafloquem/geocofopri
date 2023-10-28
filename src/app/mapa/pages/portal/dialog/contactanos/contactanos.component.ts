import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
	selector: 'app-contactanos',
	templateUrl: './contactanos.component.html',
	styleUrls: ['./contactanos.component.scss'],
	standalone: true,
	imports: [MatCommonModule, MatIconModule, MatInputModule, FormsModule],
})
export class ContactanosComponent {}
