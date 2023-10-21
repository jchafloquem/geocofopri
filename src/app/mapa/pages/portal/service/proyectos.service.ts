import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ProyectosService {
	proyectos: {img: string; nombdist: string; idDist: string}[] = [
		{img: 'losolivos.jpg', nombdist: 'Los Olivos', idDist: '150117'},
		{img: 'sanluis.png', nombdist: 'San Luis', idDist: '150134'},
		{img: 'piura.jpg', nombdist: 'Piura', idDist: '200101'},
	];
}
