import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {Map, tileLayer, Control, FeatureGroup} from 'leaflet';
import {environment} from 'src/environments/environment';
import {Layers, Limites} from './data';

@Injectable({
	providedIn: 'root',
})
export class PortalService {
	menu = true;
	map: Map | undefined;
	drawnItems: FeatureGroup<any> | undefined;
	drawControl: Control.Draw | any | undefined;
	zoom? = 0;
	Limites = Limites;
	Layers = Layers;
	private firstLatLng?: L.LatLng;
	private secondLatLng?: L.LatLng;
	public MedirMapa = false;
	public MapBase = {
		Satélite: tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
			minZoom: 6,
			zIndex: 0,
		}),

		Callejero: tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
			minZoom: 6,
			zIndex: 0,
		}),

		Topográfico: tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
			attribution: '',
			maxNativeZoom: 19,
			maxZoom: 23,
			minZoom: 6,
			zIndex: 0,
		}),
	};
	constructor() {
		this.zoom = this.map?.getZoom();
	}

	mapabase(mapaValor: 'Satélite' | 'Callejero' | 'Topográfico') {
		//document.querySelector(".leaflet-control-attribution").innerHTML = document.querySelector(".leaflet-control-attribution").innerHTML.substring(0, document.querySelector(".leaflet-control-attribution").innerHTML.indexOf('|'));
		console.log(' =>', mapaValor);
		this.map?.removeLayer(this.MapBase.Satélite);
		this.map?.removeLayer(this.MapBase.Callejero);
		this.map?.removeLayer(this.MapBase.Topográfico);
		this.map?.addLayer(this.MapBase[mapaValor]);

		// const mapv = ['Satélite', 'Callejero', 'Topográfico'].filter((x) => x !== mapaValor);
		// if (this.map && this.MapBase[mapaValor]) {
		// 	this.map.eachLayer((layer) => {
		// 		console.log(' =>', layer);
		// 		console.log(' =>', this.MapBase[mapaValor]);
		// 		if (layer !== this.MapBase[mapaValor] && layer.options.attribution === '') {
		// 			console.log(' =>', layer);
		// 			this.map?.removeLayer(layer);
		// 			if (this.map) {
		// 				this.MapBase[mapaValor].addTo(this.map);
		// 			}
		// 		}
		// 	});
		// }
	}
	zoomIn() {
		this.zoom = this.map?.getZoom();
		if (this.zoom !== undefined) {
			this.zoom++;
			this.map?.setZoom(this.zoom);
		}
	}
	zoomOut() {
		this.zoom = this.map?.getZoom();
		if (this.zoom !== undefined) {
			this.zoom--;
			this.map?.setZoom(this.zoom);
		}
	}

	public medir(e: L.LeafletMouseEvent) {
		// if (!this.firstLatLng) {
		// 	this.firstLatLng = e.latlng;
		// 	if (this.map !== undefined) {
		// 		L.marker(this.firstLatLng)
		// 			.addTo(this.map)
		// 			.bindPopup('Point A<br/>' + e.latlng)
		// 			.openPopup();
		// 	}
		// } else {
		// 	this.secondLatLng = e.latlng;
		// 	if (this.map !== undefined) {
		// 		L.marker(this.secondLatLng)
		// 			.addTo(this.map)
		// 			.bindPopup('Point B<br/>' + e.latlng)
		// 			.openPopup();
		// 	}
		// }

		if (!this.firstLatLng) {
			this.firstLatLng = e.latlng;
			if (this.map !== undefined) {
				L.marker(this.firstLatLng)
					.addTo(this.map)
					.bindPopup('Point A<br/>' + e.latlng)
					.openPopup();
			}
		} else {
			this.secondLatLng = e.latlng;
			if (this.map !== undefined) {
				L.marker(this.secondLatLng)
					.addTo(this.map)
					.bindPopup('Point B<br/>' + e.latlng + this.medirDistancia(this.firstLatLng, e.latlng))
					.openPopup();
			}
		}

		if (this.firstLatLng && this.secondLatLng) {
			// Dibujamos una línea entre los dos puntos
			if (this.map !== undefined) {
				L.polyline([this.firstLatLng, e.latlng], {
					color: '#2A5E8A',
				}).addTo(this.map);
				this.firstLatLng = e.latlng;
			}
		}
	}

	private medirDistancia(latlng1: L.LatLng, latlng2: L.LatLng): string {
		const dis = this.map?.distance(latlng1, latlng2);
		// console.log(' =>', dis && dis * 0.001);
		return dis ? '' + dis * 0.001 : '';
		// Aquí puedes implementar la lógica para medir la distancia
		// entre this.firstLatLng y this.secondLatLng
	}

	Load() {
		let endpoint = environment.BasePath + 'resources/config.json?id=' + new Date().getTime();
		fetch(endpoint, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.Layers = response;
				this.getLimites();
			})
			.catch((error) => {
				console.error('load', error);
			});
	}
	getLimites() {
		let endpoint = environment.BasePath + 'resources/distritos.json?id=' + new Date().getTime();
		fetch(endpoint, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.Limites = response;
				// Mapa.Fill();
				// Mapa.TOC(Mapa.Layers);
			})
			.catch((error) => {
				console.error('load', error);
			});
	}
	Activo(idDist: string) {
		let geom = this.Limites.Distritos.find((resp) => resp.iddist == idDist);
		if (geom) {
			let coords = geom.envelope.coordinates[0].map((resp: any[]) => resp.reverse());
			let envelope = L.polygon(coords);
			this.map?.fitBounds(envelope.getBounds());
			geom.envelope.coordinates[0].map((resp: any[]) => resp.reverse());
		}
	}
	getLayer(ide: any) {
		let myLayer: any[] = [];
		this.map?.eachLayer((layer) => {
			// if (layer.id == ide) {
			// 	myLayer.push(layer);
			// }
			console.log('layer =>', layer);
		});
		return myLayer;
	}
	addLayerExtra(
		tema: string,
		grupo: string,
		idLayer: string,
		layer: {
			ide: number;
			nombre: string;
			url: string;
			capas: string[];
			tipo: string;
			activa: boolean;
			transparente: boolean;
			formato: string;
			orden: number;
			opacidad: number;
			isLeyenda: boolean;
			isInfo: boolean;
			template: string;
		}
	) {
		console.log(' =>', tema, grupo, idLayer, layer);
		let viewparams: any[] = [];
		// let NivelDepartamento = document.querySelector('#Mapa-Filter-Departamento');
		// let NivelProvincia = document.querySelector('#Mapa-Filter-Provincia');
		// let NivelDistrito = document.querySelector('#Mapa-Filter-Distrito');

		// if (NivelDistrito) {
		// 	if (parseInt(NivelDistrito.value) > 0) {
		// 		viewparams.push('ubigeo:' + NivelDistrito.value);

		// 		viewparams.push('dpto:' + NivelDepartamento.value);
		// 		viewparams.push('prov:' + NivelProvincia.value);
		// 		viewparams.push('dist:' + NivelDistrito.value);
		// 	} else if (parseInt(NivelProvincia.value) > 0) {
		// 		viewparams.push('ubigeo:' + NivelProvincia.value);

		// 		viewparams.push('dpto:' + NivelDepartamento.value);
		// 		viewparams.push('prov:' + NivelProvincia.value);
		// 	} else if (parseInt(NivelDepartamento.value) > 0) {
		// 		viewparams.push('ubigeo:' + NivelDepartamento.value);

		// 		viewparams.push('dpto:' + NivelDepartamento.value);
		// 		viewparams.push('iddpto:' + NivelDepartamento.value);
		// 	} else {
		// 	}
		// }

		// if (layer.params) {
		// 	layer.params.forEach((item, i) => {
		// 		let filter = document.querySelector(
		// 			".clsLayerFiltro[data-tema='" +
		// 				tema +
		// 				"'][data-grupo='" +
		// 				grupo +
		// 				"'][data-layer='" +
		// 				idLayer +
		// 				"'][data-filtro='" +
		// 				item.filter +
		// 				"']"
		// 		);
		// 		if (filter) {
		// 			viewparams.push(item.viewparams + ':' + filter.value);
		// 		}
		// 	});
		// }

		if (layer.activa) {
			if (layer.activa) {
				if (this.map !== undefined) {
					let lyr = L.tileLayer
						.wms(environment.ServerMap + layer.url, {
							layers: layer.capas[0],
							transparent: layer.transparente,
							format: layer.formato,
							id: 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide,
						})
						.addTo(this.map);
					lyr.setZIndex(layer.orden);
					lyr.setOpacity(layer.opacidad / 100);
					// lyr.id = 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide;
					// lyr.grupo = grupo;
					// lyr.tema = tema;
					// lyr.idLayer = idLayer;
					// lyr.idLayerExtra = layer.ide;
				}
			} else {
				let ide_layer = 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide;
				let existeLayer = this.getLayer(ide_layer);
				existeLayer.forEach((itemLayer, i) => {
					this.map?.removeLayer(itemLayer);
				});
			}
		}
		if (!layer.activa) {
			let ide_layer = 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide;
			let existeLayer = this.getLayer(ide_layer);
			existeLayer.forEach((itemLayer, i) => {
				this.map?.removeLayer(itemLayer);
			});
			if (this.map !== undefined) {
				let lyr = L.tileLayer
					.wms(environment.ServerMap + layer.url, {
						layers: layer.capas[0],
						transparent: layer.transparente,
						format: layer.formato,
					})
					.addTo(this.map);
				lyr.setZIndex(layer.orden);
				lyr.setOpacity(layer.opacidad / 100);
				// lyr.id = 'layer_' + tema + '_' + grupo + '_' + idLayer + '_' + layer.ide;
				// lyr.grupo = grupo;
				// lyr.tema = tema;
				// lyr.idLayer = idLayer;
				// lyr.idLayerExtra = layer.ide;
			}
		}
	}
}
