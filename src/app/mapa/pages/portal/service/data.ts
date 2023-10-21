export const Layers = {
	Temas: [
		{
			ide: 0,
			nombre: 'Mapa Base',
			orden: 0,
			isOpen: false,
			Grupos: [
				{
					ide: 0,
					nombre: 'Ubigeos',
					orden: 0,
					isOpen: true,
					Layers: [
						{
							ide: 0,
							nombre: 'Departamentos',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:vi_departamento'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 82,
							opacidad: 100,
							isLeyenda: true,
							leyenda: {
								titulo: 'Departamentos',
								imagenes: [
									{
										titulo: 'Departamentos',
										url: 'resources/img/maker/poligonos/departamento.png',
									},
								],
							},
							isInfo: false,
							template: '',
						},
						{
							ide: 1,
							nombre: 'Provincias',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:vi_provincia'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 81,
							opacidad: 100,
							isLeyenda: true,
							leyenda: {
								titulo: 'Provincias',
								imagenes: [
									{
										titulo: 'Provincias',
										url: 'resources/img/maker/poligonos/provincia.png',
									},
								],
							},
							isInfo: false,
							template: '',
						},
						{
							ide: 2,
							nombre: 'Distritos',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:tg_limite_distrital'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 80,
							opacidad: 100,
							isLeyenda: true,
							leyenda: {
								titulo: 'Distritos',
								imagenes: [
									{
										titulo: 'Distritos',
										url: 'resources/img/maker/poligonos/distrito.png',
									},
								],
							},
							isInfo: false,
							template: '',
						},
					],
				},
			],
		},
		{
			ide: 100,
			nombre: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
			orden: 0,
			isOpen: true,
			Grupos: [
				{
					ide: 0,
					nombre: 'ED1',
					orden: 0,
					isOpen: true,
					Layers: [
						{
							ide: 0,
							nombre: 'Vuelo',
							url: 'losolivos/wms',
							capas: ['losolivos:VueloLosOlivos'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
					],
				},
			],
		},
		{
			ide: 1,
			nombre: 'MUNICIPALIDAD DISTRITAL DE SAN LUIS',
			orden: 0,
			isOpen: false,
			Grupos: [
				{
					ide: 0,
					nombre: 'ED1',
					orden: 0,
					isOpen: true,
					Layers: [
						{
							ide: 0,
							nombre: 'Vuelo',
							url: 'Vuelos/wms',
							capas: ['Vuelos:SanLuis'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 1,
							nombre: 'Manzana',
							url: 'SanLuis/wms',
							capas: ['SanLuis:manzana'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 2,
							nombre: 'Lote',
							url: 'SanLuis/wms',
							capas: ['SanLuis:lote'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 3,
							nombre: 'Contrucción',
							url: 'SanLuis/wms',
							capas: ['SanLuis:construccion'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 4,
							nombre: 'Parque',
							url: 'SanLuis/wms',
							capas: ['SanLuis:parque'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 5,
							nombre: 'Piscina',
							url: 'SanLuis/wms',
							capas: ['SanLuis:piscina'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 6,
							nombre: 'Campo Deportivo',
							url: 'SanLuis/wms',
							capas: ['SanLuis:campodeportivo'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
					],
				},
				{
					ide: 1,
					nombre: 'Caracterización',
					orden: 0,
					isOpen: true,
					Layers: [
						{
							ide: 0,
							nombre: 'Habilitación',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:tg_hab_urb'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: 'capa_consulta_previa',
							isDownloadFilter: {
								ubigeos: ['#Mapa-Filter-Departamento', '#Mapa-Filter-Provincia', '#Mapa-Filter-Distrito'],
								filtros: ['0', '1'],
							},
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: 'capa_asis_consul_prev',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},
						{
							ide: 1,
							nombre: 'Sector',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:tg_sectores'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: 'capa_consulta_previa',
							isDownloadFilter: {
								ubigeos: ['#Mapa-Filter-Departamento', '#Mapa-Filter-Provincia', '#Mapa-Filter-Distrito'],
								filtros: ['0', '1'],
							},
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: 'capa_asis_consul_prev',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},
						{
							ide: 2,
							nombre: 'Manzana',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:tg_manzana'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 50,
							isDownload: true,
							idenDownload: 'capa_consulta_previa',
							isDownloadFilter: {
								ubigeos: ['#Mapa-Filter-Departamento', '#Mapa-Filter-Provincia', '#Mapa-Filter-Distrito'],
								filtros: ['0', '1'],
							},
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: 'capa_asis_consul_prev',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},
						{
							ide: 3,
							nombre: 'Lote',
							url: 'GeoCatastro/wms',
							capas: ['GeoCatastro:tg_lt_urb'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 50,
							isDownload: true,
							idenDownload: 'capa_consulta_previa',
							isDownloadFilter: {
								ubigeos: ['#Mapa-Filter-Departamento', '#Mapa-Filter-Provincia', '#Mapa-Filter-Distrito'],
								filtros: ['0', '1'],
							},
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: 'capa_asis_consul_prev',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},
					],
				},
				{
					ide: 3,
					nombre: 'Compatibilización',
					orden: 0,
					isOpen: true,
					Layers: [
						{
							ide: 0,
							nombre: 'Habilitación',
							url: 'losolivos/wms',
							capas: ['losolivos:tg_hab_urb'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: '',
							isDownloadFilter: {
								ubigeos: [],
								filtros: [],
							},
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: '',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},

						{
							ide: 1,
							nombre: 'Sector',
							url: 'losolivos/wms',
							capas: ['losolivos:tg_sector'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: '',
							isDownloadFilter: {
								ubigeos: [],
								filtros: [],
							},
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: '',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},

						{
							ide: 2,
							nombre: 'Manzana',
							url: 'losolivos/wms',
							capas: ['losolivos:tg_manzana'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: '',
							isDownloadFilter: {
								ubigeos: [],
								filtros: [],
							},
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: '',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},

						{
							ide: 3,
							nombre: 'Lote',
							url: 'losolivos/wms',
							capas: ['losolivos:tg_lote'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: '',
							isDownloadFilter: {
								ubigeos: [],
								filtros: [],
							},
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: '',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},

						{
							ide: 4,
							nombre: 'Vía',
							url: 'losolivos/wms',
							capas: ['losolivos:tg_eje_via'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: '',
							isDownloadFilter: {
								ubigeos: [],
								filtros: [],
							},
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: '',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},
						{
							ide: 5,
							nombre: 'Numeración',
							url: 'losolivos/wms',
							capas: ['losolivos:numeracion'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: true,
							idenDownload: '',
							isDownloadFilter: {
								ubigeos: [],
								filtros: [],
							},
							isLeyenda: true,
							leyenda: {
								titulo: '',
								imagenes: [
									{
										titulo: '',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							info: {
								capa: '',
								isZoom: true,
							},
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
								isLimites: false,
							},
						},
					],
				},
			],
		},
		{
			ide: 2,
			nombre: 'MUNICIPALIDAD PROVINCIAL DE PIURA',
			orden: 0,
			isOpen: false,
			Grupos: [
				{
					ide: 0,
					nombre: 'ED1',
					orden: 0,
					isOpen: true,
					Layers: [
						{
							ide: 0,
							nombre: 'Vuelo',
							url: 'Vuelos/wms',
							capas: ['Vuelos:Piura'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 1,
							nombre: 'Manzana',
							url: 'Piura/wms',
							capas: ['Piura:manzana'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 2,
							nombre: 'Lote',
							url: 'Piura/wms',
							capas: ['Piura:lote'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 3,
							nombre: 'Contrucción',
							url: 'Piura/wms',
							capas: ['Piura:construccion'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 4,
							nombre: 'Parque',
							url: 'Piura/wms',
							capas: ['Piura:parque'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 5,
							nombre: 'Piscina',
							url: 'Piura/wms',
							capas: ['Piura:piscina'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
						{
							ide: 6,
							nombre: 'Campo Deportivo',
							url: 'Piura/wms',
							capas: ['Piura:campodeportivo'],
							tipo: 'wms',
							activa: false,
							transparente: true,
							formato: 'image/png',
							orden: 100,
							opacidad: 100,
							isDownload: false,
							isLeyenda: true,
							leyenda: {
								titulo: 'Asistencias Técnicas de Consulta Previa',
								imagenes: [
									{
										titulo: 'Asistencias Técnicas de Consulta Previa',
										url: 'resources/img/maker/poligonos/consulta_1.png',
									},
								],
							},
							isInfo: false,
							template: '',
							isExtend: true,
							Extend: {
								isOpacidad: true,
							},
						},
					],
				},
			],
		},
	],
};
export const Limites = {
	Distritos: [
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1009',
			nombprov: 'PUERTO INCA',
			iddist: '100902',
			nombdist: 'CODO DEL POZUZO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.76142973499998, -9.992174602999967],
						[-75.76142973499998, -9.288764749999928],
						[-75.17321873399999, -9.288764749999928],
						[-75.17321873399999, -9.992174602999967],
						[-75.76142973499998, -9.992174602999967],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1009',
			nombprov: 'PUERTO INCA',
			iddist: '100904',
			nombdist: 'TOURNAVISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.20844254399998, -9.264060601999972],
						[-75.20844254399998, -8.784833351999964],
						[-74.60662110899995, -8.784833351999964],
						[-74.60662110899995, -9.264060601999972],
						[-75.20844254399998, -9.264060601999972],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2503',
			nombprov: 'PADRE ABAD',
			iddist: '250305',
			nombdist: 'ALEXANDER VON HUMBOLDT',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.15346741099995, -8.90100323699994],
						[-75.15346741099995, -8.73935838999995],
						[-74.95447223099995, -8.73935838999995],
						[-74.95447223099995, -8.90100323699994],
						[-75.15346741099995, -8.90100323699994],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2503',
			nombprov: 'PADRE ABAD',
			iddist: '250302',
			nombdist: 'IRAZOLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45614249599998, -9.310229776999961],
						[-75.45614249599998, -8.536141464999957],
						[-75.10840465099994, -8.536141464999957],
						[-75.10840465099994, -9.310229776999961],
						[-75.45614249599998, -9.310229776999961],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2503',
			nombprov: 'PADRE ABAD',
			iddist: '250304',
			nombdist: 'NESHUYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.16768678799997, -8.800072351999972],
						[-75.16768678799997, -8.44509701499993],
						[-74.93916998399999, -8.44509701499993],
						[-74.93916998399999, -8.800072351999972],
						[-75.16768678799997, -8.800072351999972],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2503',
			nombprov: 'PADRE ABAD',
			iddist: '250301',
			nombdist: 'PADRE ABAD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94788601799996, -9.418436897999982],
						[-75.94788601799996, -8.423288344999946],
						[-75.28727220599995, -8.423288344999946],
						[-75.28727220599995, -9.418436897999982],
						[-75.94788601799996, -9.418436897999982],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2503',
			nombprov: 'PADRE ABAD',
			iddist: '250303',
			nombdist: 'CURIMANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.68731386799999, -8.63987788999998],
						[-75.68731386799999, -8.210028617999967],
						[-75.00383855399997, -8.210028617999967],
						[-75.00383855399997, -8.63987788999998],
						[-75.68731386799999, -8.63987788999998],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1009',
			nombprov: 'PUERTO INCA',
			iddist: '100901',
			nombdist: 'PUERTO INCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.31333034999994, -9.546195352999973],
						[-75.31333034999994, -9.032142601999965],
						[-74.58715023399998, -9.032142601999965],
						[-74.58715023399998, -9.546195352999973],
						[-75.31333034999994, -9.546195352999973],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250106',
			nombdist: 'NUEVA REQUENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45303885999994, -8.392004476999944],
						[-75.45303885999994, -7.950054725999962],
						[-74.64973348399997, -7.950054725999962],
						[-74.64973348399997, -8.392004476999944],
						[-75.45303885999994, -8.392004476999944],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250102',
			nombdist: 'CAMPOVERDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.02990253899998, -8.863568021999981],
						[-75.02990253899998, -8.254080101999932],
						[-74.65784360899994, -8.254080101999932],
						[-74.65784360899994, -8.863568021999981],
						[-75.02990253899998, -8.863568021999981],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			iddist: '160601',
			nombdist: 'CONTAMANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.98555661099994, -8.71519138399998],
						[-75.98555661099994, -7.139271974999929],
						[-74.49950160899994, -7.139271974999929],
						[-74.49950160899994, -8.71519138399998],
						[-75.98555661099994, -8.71519138399998],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130104',
			nombdist: 'HUANCHACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.21079722399998, -8.133132975999956],
						[-79.21079722399998, -7.892261850999944],
						[-78.92180098799997, -7.892261850999944],
						[-78.92180098799997, -8.133132975999956],
						[-79.21079722399998, -8.133132975999956],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130207',
			nombdist: 'SANTIAGO DE CAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.28465036299997, -7.998824273999958],
						[-79.28465036299997, -7.839080089999925],
						[-79.14949465399997, -7.839080089999925],
						[-79.14949465399997, -7.998824273999958],
						[-79.28465036299997, -7.998824273999958],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130110',
			nombdist: 'SIMBAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.94602223799995, -8.019390600999941],
						[-78.94602223799995, -7.796724077999954],
						[-78.69377136299994, -7.796724077999954],
						[-78.69377136299994, -8.019390600999941],
						[-78.94602223799995, -8.019390600999941],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130204',
			nombdist: 'MAGDALENA DE CAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.38326755899999, -7.94432222599994],
						[-79.38326755899999, -7.795340013999976],
						[-79.20695581299998, -7.795340013999976],
						[-79.20695581299998, -7.94432222599994],
						[-79.38326755899999, -7.94432222599994],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1311',
			nombprov: 'GRAN CHIMU',
			iddist: '131101',
			nombdist: 'CASCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.94449223799995, -7.622670475999939],
						[-78.94449223799995, -7.395154350999974],
						[-78.62510948799996, -7.395154350999974],
						[-78.62510948799996, -7.622670475999939],
						[-78.94449223799995, -7.622670475999939],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130208',
			nombdist: 'CASA GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.31251917499998, -7.784322385999928],
						[-79.31251917499998, -7.388720331999934],
						[-79.06404486299994, -7.388720331999934],
						[-79.06404486299994, -7.784322385999928],
						[-79.31251917499998, -7.784322385999928],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130203',
			nombdist: 'CHOCOPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.30104873299996, -7.839158100999953],
						[-79.30104873299996, -7.730459682999936],
						[-79.15155624799996, -7.730459682999936],
						[-79.15155624799996, -7.839158100999953],
						[-79.30104873299996, -7.839158100999953],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060505',
			nombdist: 'SAN BENITO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.07164211299994, -7.660949350999942],
						[-79.07164211299994, -7.380458225999973],
						[-78.81038086299998, -7.380458225999973],
						[-78.81038086299998, -7.660949350999942],
						[-79.07164211299994, -7.660949350999942],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1307',
			nombprov: 'PACASMAYO',
			iddist: '130701',
			nombdist: 'SAN PEDRO DE LLOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.57901173799996, -7.636639353999954],
						[-79.57901173799996, -7.365039974999945],
						[-79.18645086299995, -7.365039974999945],
						[-79.18645086299995, -7.636639353999954],
						[-79.57901173799996, -7.636639353999954],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230403',
			nombdist: 'ESTIQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.19330272999997, -17.778212984999982],
						[-70.19330272999997, -17.497386734999964],
						[-69.84612310399996, -17.497386734999964],
						[-69.84612310399996, -17.778212984999982],
						[-70.19330272999997, -17.778212984999982],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230407',
			nombdist: 'TARUCACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.07387485499999, -17.542029984999942],
						[-70.07387485499999, -17.462808609999968],
						[-69.84857035399995, -17.462808609999968],
						[-69.84857035399995, -17.542029984999942],
						[-70.07387485499999, -17.542029984999942],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130205',
			nombdist: 'PAIJAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.36900186299994, -7.798863525999934],
						[-79.36900186299994, -7.676759225999945],
						[-79.24231549799998, -7.676759225999945],
						[-79.24231549799998, -7.798863525999934],
						[-79.36900186299994, -7.798863525999934],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130613',
			nombdist: 'SINSICAP',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.91437311299995, -7.886878850999949],
						[-78.91437311299995, -7.632973475999961],
						[-78.62596673799999, -7.632973475999961],
						[-78.62596673799999, -7.886878850999949],
						[-78.91437311299995, -7.886878850999949],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130202',
			nombdist: 'CHICAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.20695581299998, -7.988335263999943],
						[-79.20695581299998, -7.573449224999933],
						[-78.79354873799997, -7.573449224999933],
						[-78.79354873799997, -7.988335263999943],
						[-79.20695581299998, -7.988335263999943],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130206',
			nombdist: 'RAZURI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.46570698899995, -7.814686415999972],
						[-79.46570698899995, -7.558663584999977],
						[-79.27602686299997, -7.558663584999977],
						[-79.27602686299997, -7.814686415999972],
						[-79.46570698899995, -7.814686415999972],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1311',
			nombprov: 'GRAN CHIMU',
			iddist: '131103',
			nombdist: 'MARMOT',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.80762886299993, -7.796993850999968],
						[-78.80762886299993, -7.549048850999952],
						[-78.59475198799998, -7.549048850999952],
						[-78.59475198799998, -7.796993850999968],
						[-78.80762886299993, -7.796993850999968],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			iddist: '130201',
			nombdist: 'ASCOPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.19593377999996, -7.750557754999932],
						[-79.19593377999996, -7.520982905999972],
						[-78.95992289599997, -7.520982905999972],
						[-78.95992289599997, -7.750557754999932],
						[-79.19593377999996, -7.750557754999932],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060503',
			nombdist: 'CUPISNIQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.18817523799999, -7.472684580999953],
						[-79.18817523799999, -7.271297850999929],
						[-78.95143923799998, -7.271297850999929],
						[-78.95143923799998, -7.472684580999953],
						[-79.18817523799999, -7.472684580999953],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1803',
			nombprov: 'ILO',
			iddist: '180301',
			nombdist: 'ILO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.38145310599998, -17.821482360999937],
						[-71.38145310599998, -17.621069984999963],
						[-71.08199223099996, -17.621069984999963],
						[-71.08199223099996, -17.821482360999937],
						[-71.38145310599998, -17.821482360999937],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230110',
			nombdist: 'CORONEL GREGORIO ALBARRACIN LANCHIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.33773635499995, -18.184739984999965],
						[-70.33773635499995, -18.022460984999952],
						[-70.14408785499995, -18.022460984999952],
						[-70.14408785499995, -18.184739984999965],
						[-70.33773635499995, -18.184739984999965],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230102',
			nombdist: 'ALTO DE LA ALIANZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.42373997999994, -18.005099735999977],
						[-70.42373997999994, -17.595271484999955],
						[-70.14317772999993, -17.595271484999955],
						[-70.14317772999993, -18.005099735999977],
						[-70.42373997999994, -18.005099735999977],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230106',
			nombdist: 'PACHIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.18422460499994, -17.980257859999938],
						[-70.18422460499994, -17.57782423499998],
						[-69.86161322899994, -17.57782423499998],
						[-69.86161322899994, -17.980257859999938],
						[-70.18422460499994, -17.980257859999938],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230404',
			nombdist: 'ESTIQUE-PAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.20143947999998, -17.775636734999978],
						[-70.20143947999998, -17.518376984999975],
						[-70.02005660399993, -17.518376984999975],
						[-70.02005660399993, -17.775636734999978],
						[-70.20143947999998, -17.775636734999978],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230108',
			nombdist: 'POCOLLAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.23709960499997, -18.093087860999958],
						[-70.23709960499997, -17.92612110999994],
						[-69.90466997899995, -17.92612110999994],
						[-69.90466997899995, -18.093087860999958],
						[-70.23709960499997, -18.093087860999958],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230103',
			nombdist: 'CALANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.22352235499994, -18.00567186099994],
						[-70.22352235499994, -17.903884734999963],
						[-70.06763472999995, -17.903884734999963],
						[-70.06763472999995, -18.00567186099994],
						[-70.22352235499994, -18.00567186099994],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230101',
			nombdist: 'TACNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.63855660499996, -18.322187484999972],
						[-70.63855660499996, -17.889834235999956],
						[-69.75253322999998, -17.889834235999956],
						[-69.75253322999998, -18.322187484999972],
						[-70.63855660499996, -18.322187484999972],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230109',
			nombdist: 'SAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.89009185599997, -18.201109359999975],
						[-70.89009185599997, -17.778095734999965],
						[-70.42373997999994, -17.778095734999965],
						[-70.42373997999994, -18.201109359999975],
						[-70.89009185599997, -18.201109359999975],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230104',
			nombdist: 'CIUDAD NUEVA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.25788872999993, -17.99231048599995],
						[-70.25788872999993, -17.710808609999958],
						[-70.07111135399998, -17.710808609999958],
						[-70.07111135399998, -17.99231048599995],
						[-70.25788872999993, -17.99231048599995],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2303',
			nombprov: 'JORGE BASADRE',
			iddist: '230303',
			nombdist: 'ITE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.13944335599996, -17.976559984999938],
						[-71.13944335599996, -17.64721960999998],
						[-70.71643947999996, -17.64721960999998],
						[-70.71643947999996, -17.976559984999938],
						[-71.13944335599996, -17.976559984999938],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230105',
			nombdist: 'INCLAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.71643947999996, -17.889834235999956],
						[-70.71643947999996, -17.45955510999994],
						[-70.16079885499994, -17.45955510999994],
						[-70.16079885499994, -17.889834235999956],
						[-70.71643947999996, -17.889834235999956],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2303',
			nombprov: 'JORGE BASADRE',
			iddist: '230301',
			nombdist: 'LOCUMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.90781485599996, -17.778095734999965],
						[-70.90781485599996, -17.43771673499998],
						[-70.50889647999998, -17.43771673499998],
						[-70.50889647999998, -17.778095734999965],
						[-70.90781485599996, -17.778095734999965],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1803',
			nombprov: 'ILO',
			iddist: '180302',
			nombdist: 'EL ALGARROBAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.32137310599995, -17.72157623499993],
						[-71.32137310599995, -17.427080109999963],
						[-70.90716998099998, -17.427080109999963],
						[-70.90716998099998, -17.72157623499993],
						[-71.32137310599995, -17.72157623499993],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230107',
			nombdist: 'PALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.01084960499998, -17.987990234999927],
						[-70.01084960499998, -17.393039984999973],
						[-69.46829297899995, -17.393039984999973],
						[-69.46829297899995, -17.987990234999927],
						[-70.01084960499998, -17.987990234999927],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230402',
			nombdist: 'HEROES ALBARRACIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.34578710499994, -17.59181048499994],
						[-70.34578710499994, -17.38462173499994],
						[-70.06660935499997, -17.38462173499994],
						[-70.06660935499997, -17.59181048499994],
						[-70.34578710499994, -17.59181048499994],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			iddist: '230206',
			nombdist: 'QUILAHUANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.30791172999994, -17.390015984999934],
						[-70.30791172999994, -17.290279234999957],
						[-70.21823835399994, -17.290279234999957],
						[-70.21823835399994, -17.390015984999934],
						[-70.30791172999994, -17.390015984999934],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			iddist: '230204',
			nombdist: 'CURIBAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.40572260499994, -17.460740234999946],
						[-70.40572260499994, -17.33488698399998],
						[-70.27235985499993, -17.33488698399998],
						[-70.27235985499993, -17.460740234999946],
						[-70.40572260499994, -17.460740234999946],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230405',
			nombdist: 'SITAJARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.26457435499998, -17.474210983999967],
						[-70.26457435499998, -17.314530859999934],
						[-70.04187510399998, -17.314530859999934],
						[-70.04187510399998, -17.474210983999967],
						[-70.26457435499998, -17.474210983999967],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1803',
			nombprov: 'ILO',
			iddist: '180303',
			nombdist: 'PACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.49079898099995, -17.623529984999948],
						[-71.49079898099995, -17.25171660999996],
						[-71.25844173099995, -17.25171660999996],
						[-71.25844173099995, -17.623529984999948],
						[-71.49079898099995, -17.623529984999948],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230401',
			nombdist: 'TARATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.08111910499997, -17.50583785999993],
						[-70.08111910499997, -17.23292910999993],
						[-69.46731635399993, -17.23292910999993],
						[-69.46731635399993, -17.50583785999993],
						[-70.08111910499997, -17.50583785999993],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			iddist: '180101',
			nombdist: 'MOQUEGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.44095610599999, -17.649454984999977],
						[-71.44095610599999, -16.753355108999926],
						[-70.57250785499997, -16.753355108999926],
						[-70.57250785499997, -17.649454984999977],
						[-71.44095610599999, -17.649454984999977],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			iddist: '230205',
			nombdist: 'HUANUARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.41178322999997, -17.374384859999964],
						[-70.41178322999997, -17.23088898499998],
						[-70.26904297999994, -17.23088898499998],
						[-70.26904297999994, -17.374384859999964],
						[-70.41178322999997, -17.374384859999964],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230408',
			nombdist: 'TICACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.09052735499995, -17.485509984999965],
						[-70.09052735499995, -17.202124984999955],
						[-69.79624147899995, -17.202124984999955],
						[-69.79624147899995, -17.485509984999965],
						[-70.09052735499995, -17.485509984999965],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2303',
			nombprov: 'JORGE BASADRE',
			iddist: '230302',
			nombdist: 'ILABAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.78766998099996, -17.573292984999966],
						[-70.78766998099996, -17.19410935999997],
						[-70.34392585499995, -17.19410935999997],
						[-70.34392585499995, -17.573292984999966],
						[-70.78766998099996, -17.573292984999966],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2105',
			nombprov: 'EL COLLAO',
			iddist: '210502',
			nombdist: 'CAPAZO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.92967172899995, -17.295466733999945],
						[-69.92967172899995, -16.89950135899994],
						[-69.53406235399996, -16.89950135899994],
						[-69.53406235399996, -17.295466733999945],
						[-69.92967172899995, -17.295466733999945],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			iddist: '230201',
			nombdist: 'CANDARAVE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.46501685499999, -17.34190585999994],
						[-70.46501685499999, -16.770431609999946],
						[-70.06988697999998, -16.770431609999946],
						[-70.06988697999998, -17.34190585999994],
						[-70.46501685499999, -17.34190585999994],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			iddist: '040704',
			nombdist: 'ISLAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.22383885699998, -17.022363609999957],
						[-72.22383885699998, -16.766656858999966],
						[-71.99670410699997, -16.766656858999966],
						[-71.99670410699997, -17.022363609999957],
						[-72.22383885699998, -17.022363609999957],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			iddist: '180104',
			nombdist: 'SAMEGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.91237798099996, -17.19651560899996],
						[-70.91237798099996, -17.111033233999933],
						[-70.77188098099998, -17.111033233999933],
						[-70.77188098099998, -17.19651560899996],
						[-70.91237798099996, -17.19651560899996],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			iddist: '040706',
			nombdist: 'PUNTA DE BOMBON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.84072873199995, -17.285005609999928],
						[-71.84072873199995, -17.056396484999937],
						[-71.30224610599998, -17.056396484999937],
						[-71.30224610599998, -17.285005609999928],
						[-71.84072873199995, -17.285005609999928],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			iddist: '230202',
			nombdist: 'CAIRANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.43724997999993, -17.34738085999993],
						[-70.43724997999993, -17.04262885999998],
						[-70.28707997999999, -17.04262885999998],
						[-70.28707997999999, -17.34738085999993],
						[-70.43724997999993, -17.34738085999993],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			iddist: '230406',
			nombdist: 'SUSAPAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.14763110499996, -17.371432109999944],
						[-70.14763110499996, -17.034914233999928],
						[-69.92967172899995, -17.034914233999928],
						[-69.92967172899995, -17.371432109999944],
						[-70.14763110499996, -17.371432109999944],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			iddist: '180106',
			nombdist: 'TORATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.04165060599996, -17.19787998399994],
						[-71.04165060599996, -16.761799984999982],
						[-70.43920122999998, -16.761799984999982],
						[-70.43920122999998, -17.19787998399994],
						[-71.04165060599996, -17.19787998399994],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			iddist: '040701',
			nombdist: 'MOLLENDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.05649560699999, -17.067626983999958],
						[-72.05649560699999, -16.675044983999953],
						[-71.66641235599997, -16.675044983999953],
						[-71.66641235599997, -17.067626983999958],
						[-72.05649560699999, -17.067626983999958],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			iddist: '040703',
			nombdist: 'DEAN VALDIVIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.89252298099996, -17.170343358999958],
						[-71.89252298099996, -17.030759858999943],
						[-71.75655360599995, -17.030759858999943],
						[-71.75655360599995, -17.170343358999958],
						[-71.89252298099996, -17.170343358999958],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			iddist: '230203',
			nombdist: 'CAMILACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.57250785499997, -17.335580234999952],
						[-70.57250785499997, -16.990588233999972],
						[-70.34111997999997, -16.990588233999972],
						[-70.34111997999997, -17.335580234999952],
						[-70.57250785499997, -17.335580234999952],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			iddist: '040705',
			nombdist: 'MEJIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.94850160599998, -17.124094234999973],
						[-71.94850160599998, -16.96030810999997],
						[-71.81218723199999, -16.96030810999997],
						[-71.81218723199999, -17.124094234999973],
						[-71.94850160599998, -17.124094234999973],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			iddist: '180103',
			nombdist: 'CUCHUMBAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.76687998099999, -16.804278858999965],
						[-70.76687998099999, -16.736978483999962],
						[-70.59358985499995, -16.736978483999962],
						[-70.59358985499995, -16.804278858999965],
						[-70.76687998099999, -16.804278858999965],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210405',
			nombdist: 'PISACOMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.60296885499997, -17.174983234999956],
						[-69.60296885499997, -16.719750234999935],
						[-69.26053072899998, -16.719750234999935],
						[-69.26053072899998, -17.174983234999956],
						[-69.60296885499997, -17.174983234999956],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			iddist: '040702',
			nombdist: 'COCACHACRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.87884523099996, -17.120927859999938],
						[-71.87884523099996, -16.68190760899995],
						[-71.31881710599998, -16.68190760899995],
						[-71.31881710599998, -17.120927859999938],
						[-71.87884523099996, -17.120927859999938],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180205',
			nombdist: 'LA CAPILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.46594235599997, -16.980491608999955],
						[-71.46594235599997, -16.65177535899994],
						[-71.13962698099994, -16.65177535899994],
						[-71.13962698099994, -16.980491608999955],
						[-71.46594235599997, -16.980491608999955],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040201',
			nombdist: 'CAMANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.72584535699997, -16.653325983999935],
						[-72.72584535699997, -16.60957723399997],
						[-72.69944760699997, -16.60957723399997],
						[-72.69944760699997, -16.653325983999935],
						[-72.72584535699997, -16.653325983999935],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180209',
			nombdist: 'QUINISTAQUILLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.98853998099997, -16.778270108999948],
						[-70.98853998099997, -16.583906233999926],
						[-70.77907660499994, -16.583906233999926],
						[-70.77907660499994, -16.778270108999948],
						[-70.98853998099997, -16.778270108999948],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040202',
			nombdist: 'JOSE MARIA QUIMPER',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.76012423199995, -16.615344983999933],
						[-72.76012423199995, -16.575010358999975],
						[-72.71104448299997, -16.575010358999975],
						[-72.71104448299997, -16.615344983999933],
						[-72.76012423199995, -16.615344983999933],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210404',
			nombdist: 'KELLUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.39382422899996, -16.868237233999935],
						[-69.39382422899996, -16.56662698399998],
						[-69.05520897899999, -16.56662698399998],
						[-69.05520897899999, -16.868237233999935],
						[-69.39382422899996, -16.868237233999935],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			iddist: '180105',
			nombdist: 'SAN CRISTOBAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.82464410499995, -16.79366648399997],
						[-70.82464410499995, -16.546389983999973],
						[-70.47203997999998, -16.546389983999973],
						[-70.47203997999998, -16.79366648399997],
						[-70.82464410499995, -16.79366648399997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210402',
			nombdist: 'DESAGUADERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.16126660399993, -16.68832810899994],
						[-69.16126660399993, -16.53798173399997],
						[-68.99610160399993, -16.53798173399997],
						[-68.99610160399993, -16.68832810899994],
						[-69.16126660399993, -16.68832810899994],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100201',
			nombdist: 'AMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.25557611099998, -10.239195352999957],
						[-76.25557611099998, -10.067855477999956],
						[-76.04056636099995, -10.067855477999956],
						[-76.04056636099995, -10.239195352999957],
						[-76.25557611099998, -10.239195352999957],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040208',
			nombdist: 'SAMUEL PASTOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.71543123199996, -16.66407585899998],
						[-72.71543123199996, -16.531835608999927],
						[-72.58679673199998, -16.531835608999927],
						[-72.58679673199998, -16.66407585899998],
						[-72.71543123199996, -16.66407585899998],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040114',
			nombdist: 'POLOBAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.48318485599998, -16.764869733999944],
						[-71.48318485599998, -16.482358983999973],
						[-71.23613735599997, -16.482358983999973],
						[-71.23613735599997, -16.764869733999944],
						[-71.48318485599998, -16.764869733999944],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040115',
			nombdist: 'QUEQUEÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.49654385599996, -16.57183460899995],
						[-71.49654385599996, -16.51657098399994],
						[-71.39086910599997, -16.51657098399994],
						[-71.39086910599997, -16.57183460899995],
						[-71.49654385599996, -16.57183460899995],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180201',
			nombdist: 'OMATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.05097660599995, -16.76936998499997],
						[-71.05097660599995, -16.51258598399994],
						[-70.89586385599995, -16.51258598399994],
						[-70.89586385599995, -16.76936998499997],
						[-71.05097660599995, -16.76936998499997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2105',
			nombprov: 'EL COLLAO',
			iddist: '210504',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.14662497999996, -17.20220310999997],
						[-70.14662497999996, -16.500966483999946],
						[-69.51145097899996, -16.500966483999946],
						[-69.51145097899996, -17.20220310999997],
						[-70.14662497999996, -17.20220310999997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040127',
			nombdist: 'YARABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.70536798099994, -16.76795573399994],
						[-71.70536798099994, -16.49107748399996],
						[-71.40167235599995, -16.49107748399996],
						[-71.40167235599995, -16.76795573399994],
						[-71.70536798099994, -16.76795573399994],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040111',
			nombdist: 'MOLLEBAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.52985373099995, -16.531082108999954],
						[-71.52985373099995, -16.481136233999962],
						[-71.42494198099996, -16.481136233999962],
						[-71.42494198099996, -16.531082108999954],
						[-71.52985373099995, -16.531082108999954],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			iddist: '180102',
			nombdist: 'CARUMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.90545998099998, -16.959413859999927],
						[-70.90545998099998, -16.46145110899994],
						[-69.99505210499996, -16.46145110899994],
						[-69.99505210499996, -16.959413859999927],
						[-70.90545998099998, -16.959413859999927],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180208',
			nombdist: 'PUQUINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.29603573099996, -16.858736358999977],
						[-71.29603573099996, -16.460559858999943],
						[-71.01372822999997, -16.460559858999943],
						[-71.01372822999997, -16.858736358999977],
						[-71.29603573099996, -16.858736358999977],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040207',
			nombdist: 'QUILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.62194060699994, -16.927019108999957],
						[-72.62194060699994, -16.458721108999953],
						[-72.12759398099996, -16.458721108999953],
						[-72.12759398099996, -16.927019108999957],
						[-72.62194060699994, -16.927019108999957],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210403',
			nombdist: 'HUACULLANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.54250510399999, -16.755600108999943],
						[-69.54250510399999, -16.437496108999937],
						[-69.26258772899996, -16.437496108999937],
						[-69.26258772899996, -16.755600108999943],
						[-69.54250510399999, -16.755600108999943],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040122',
			nombdist: 'SOCABAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.56158448099995, -16.508148233999975],
						[-71.56158448099995, -16.434630483999968],
						[-71.50266260599994, -16.434630483999968],
						[-71.50266260599994, -16.508148233999975],
						[-71.56158448099995, -16.508148233999975],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040206',
			nombdist: 'OCOÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.29160310799995, -16.50915335899998],
						[-73.29160310799995, -16.022636357999943],
						[-72.79827123299998, -16.022636357999943],
						[-72.79827123299998, -16.50915335899998],
						[-73.29160310799995, -16.50915335899998],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180203',
			nombdist: 'COALAQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.12564848099998, -16.701982483999927],
						[-71.12564848099998, -16.454402983999955],
						[-70.96883398099999, -16.454402983999955],
						[-70.96883398099999, -16.701982483999927],
						[-71.12564848099998, -16.701982483999927],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040113',
			nombdist: 'POCSI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.44828798099996, -16.553367608999963],
						[-71.44828798099996, -16.43133923399995],
						[-71.23853298099993, -16.43133923399995],
						[-71.23853298099993, -16.553367608999963],
						[-71.44828798099996, -16.553367608999963],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040105',
			nombdist: 'CHARACATO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.51615910599998, -16.49519535899998],
						[-71.51615910599998, -16.403093358999968],
						[-71.23930360599996, -16.403093358999968],
						[-71.23930360599996, -16.49519535899998],
						[-71.51615910599998, -16.49519535899998],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040107',
			nombdist: 'JACOBO HUNTER',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.58551023099994, -16.496570608999946],
						[-71.58551023099994, -16.42223710899998],
						[-71.53782010599997, -16.42223710899998],
						[-71.53782010599997, -16.496570608999946],
						[-71.58551023099994, -16.496570608999946],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040108',
			nombdist: 'LA JOYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.91767123099999, -16.785982109999964],
						[-71.91767123099999, -16.39306260899997],
						[-71.62410735599997, -16.39306260899997],
						[-71.62410735599997, -16.785982109999964],
						[-71.91767123099999, -16.785982109999964],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2105',
			nombprov: 'EL COLLAO',
			iddist: '210503',
			nombdist: 'PILCUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.60341997899997, -16.18007335799996],
						[-69.60341997899997, -15.999863232999928],
						[-69.42222235499997, -15.999863232999928],
						[-69.42222235499997, -16.18007335799996],
						[-69.60341997899997, -16.18007335799996],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180204',
			nombdist: 'ICHUÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.67645997999995, -16.422070232999943],
						[-70.67645997999995, -15.982499982999968],
						[-70.32403322999994, -15.982499982999968],
						[-70.32403322999994, -16.422070232999943],
						[-70.67645997999995, -16.422070232999943],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210113',
			nombdist: 'SAN ANTONIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.40830160499996, -16.208782483999983],
						[-70.40830160499996, -15.978716732999942],
						[-70.14292085499994, -15.978716732999942],
						[-70.14292085499994, -16.208782483999983],
						[-70.40830160499996, -16.208782483999983],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040116',
			nombdist: 'SABANDIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.52140810599997, -16.48474885899998],
						[-71.52140810599997, -16.419551858999966],
						[-71.40637973099996, -16.419551858999966],
						[-71.40637973099996, -16.48474885899998],
						[-71.52140810599997, -16.48474885899998],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2105',
			nombprov: 'EL COLLAO',
			iddist: '210505',
			nombdist: 'CONDURIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.89506535499999, -16.718835483999953],
						[-69.89506535499999, -16.416281483999967],
						[-69.47088835399995, -16.416281483999967],
						[-69.47088835399995, -16.718835483999953],
						[-69.89506535499999, -16.718835483999953],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180210',
			nombdist: 'UBINAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.98656460599994, -16.447511108999947],
						[-70.98656460599994, -15.975963608999962],
						[-70.65598997999996, -15.975963608999962],
						[-70.65598997999996, -16.447511108999947],
						[-70.98656460599994, -16.447511108999947],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210111',
			nombdist: 'PICHACANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.38237347999996, -16.53962660899998],
						[-70.38237347999996, -15.966025358999957],
						[-69.93748435499998, -15.966025358999957],
						[-69.93748435499998, -16.53962660899998],
						[-70.38237347999996, -16.53962660899998],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040129',
			nombdist: 'JOSE LUIS BUSTAMANTE Y RIVERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.54755935599997, -16.455306983999947],
						[-71.54755935599997, -16.41001698399998],
						[-71.50128135699998, -16.41001698399998],
						[-71.50128135699998, -16.455306983999947],
						[-71.54755935599997, -16.455306983999947],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040118',
			nombdist: 'SAN JUAN DE SIGUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.19961548199996, -16.483339358999956],
						[-72.19961548199996, -16.341472608999936],
						[-72.12694548199994, -16.341472608999936],
						[-72.12694548199994, -16.483339358999956],
						[-72.19961548199996, -16.483339358999956],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040123',
			nombdist: 'TIABAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.62519073199996, -16.519720108999934],
						[-71.62519073199996, -16.407482108999943],
						[-71.57412723099998, -16.407482108999943],
						[-71.57412723099998, -16.519720108999934],
						[-71.62519073199996, -16.519720108999934],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040117',
			nombdist: 'SACHACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.60216210699997, -16.448178233999954],
						[-71.60216210699997, -16.40421885899997],
						[-71.55155185599995, -16.40421885899997],
						[-71.55155185599995, -16.448178233999954],
						[-71.60216210699997, -16.448178233999954],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040112',
			nombdist: 'PAUCARPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.51672348099999, -16.449068608999937],
						[-71.51672348099999, -16.393033983999942],
						[-71.42760473099997, -16.393033983999942],
						[-71.42760473099997, -16.449068608999937],
						[-71.51672348099999, -16.449068608999937],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040121',
			nombdist: 'SANTA RITA DE SIGUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.28337098099996, -16.63898835899994],
						[-72.28337098099996, -16.377023733999977],
						[-72.03378298099994, -16.377023733999977],
						[-72.03378298099994, -16.63898835899994],
						[-72.28337098099996, -16.63898835899994],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040128',
			nombdist: 'YURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.90691798099994, -16.395574608999937],
						[-71.90691798099994, -15.92534160899993],
						[-71.28713223099999, -15.92534160899993],
						[-71.28713223099999, -16.395574608999937],
						[-71.90691798099994, -16.395574608999937],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040119',
			nombdist: 'SAN JUAN DE TARUCANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.41060635599996, -16.49857898399995],
						[-71.41060635599996, -15.921892108999941],
						[-70.80408473099999, -15.921892108999941],
						[-70.80408473099999, -16.49857898399995],
						[-71.41060635599996, -16.49857898399995],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040101',
			nombdist: 'AREQUIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.56665860599998, -16.43413848399996],
						[-71.56665860599998, -16.37400385899997],
						[-71.51333048099997, -16.37400385899997],
						[-71.51333048099997, -16.43413848399996],
						[-71.56665860599998, -16.43413848399996],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180207',
			nombdist: 'MATALAQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.97952273099997, -16.71802923399997],
						[-70.97952273099997, -16.37176360799998],
						[-70.70314847999998, -16.37176360799998],
						[-70.70314847999998, -16.71802923399997],
						[-70.97952273099997, -16.71802923399997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040508',
			nombdist: 'HUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.99623110699997, -16.15907623399994],
						[-71.99623110699997, -15.883160608999958],
						[-71.70429235599994, -15.883160608999958],
						[-71.70429235599994, -16.15907623399994],
						[-71.99623110699997, -16.15907623399994],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210106',
			nombdist: 'CHUCUITO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.97097460499998, -15.987076232999982],
						[-69.97097460499998, -15.78338873399997],
						[-69.78115610499998, -15.78338873399997],
						[-69.78115610499998, -15.987076232999982],
						[-69.97097460499998, -15.987076232999982],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040126',
			nombdist: 'YANAHUARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.56661498099999, -16.409044983999934],
						[-71.56661498099999, -16.36735185899994],
						[-71.53272073099998, -16.36735185899994],
						[-71.53272073099998, -16.409044983999934],
						[-71.56661498099999, -16.409044983999934],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040124',
			nombdist: 'UCHUMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.82183848199998, -16.558158858999946],
						[-71.82183848199998, -16.366208983999968],
						[-71.59571835599996, -16.366208983999968],
						[-71.59571835599996, -16.558158858999946],
						[-71.82183848199998, -16.558158858999946],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040205',
			nombdist: 'NICOLAS DE PIEROLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.77231598199995, -16.591930358999946],
						[-72.77231598199995, -16.357069107999962],
						[-72.46635435699994, -16.357069107999962],
						[-72.46635435699994, -16.591930358999946],
						[-72.77231598199995, -16.591930358999946],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210407',
			nombdist: 'ZEPITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.32292835399994, -16.646987859999967],
						[-69.32292835399994, -16.350609358999975],
						[-69.04247510399995, -16.350609358999975],
						[-69.04247510399995, -16.646987859999967],
						[-69.32292835399994, -16.646987859999967],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040203',
			nombdist: 'MARIANO NICOLAS VALCARCEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.24060060799997, -16.237607983999965],
						[-73.24060060799997, -15.874050108999938],
						[-72.98542785699993, -15.874050108999938],
						[-72.98542785699993, -16.237607983999965],
						[-73.24060060799997, -16.237607983999965],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040407',
			nombdist: 'HUANCARQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.49111173199998, -16.21246335799998],
						[-72.49111173199998, -15.814234732999978],
						[-72.22535698199994, -15.814234732999978],
						[-72.22535698199994, -16.21246335799998],
						[-72.49111173199998, -16.21246335799998],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211303',
			nombdist: 'COPANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.14509835399997, -16.420401733999938],
						[-69.14509835399997, -16.34013910899995],
						[-69.02313835399997, -16.34013910899995],
						[-69.02313835399997, -16.420401733999938],
						[-69.14509835399997, -16.420401733999938],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040605',
			nombdist: 'IRAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.67882535699994, -16.03046598399993],
						[-72.67882535699994, -15.799905733999935],
						[-72.50746160699998, -15.799905733999935],
						[-72.50746160699998, -16.03046598399993],
						[-72.67882535699994, -16.03046598399993],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040401',
			nombdist: 'APLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.71317923199996, -16.24807548399997],
						[-72.71317923199996, -15.785957357999962],
						[-72.44380960699993, -15.785957357999962],
						[-72.44380960699993, -16.24807548399997],
						[-72.71317923199996, -16.24807548399997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210101',
			nombdist: 'PUNO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.18441560399998, -16.024098358999936],
						[-70.18441560399998, -15.773850482999933],
						[-69.91987385499993, -15.773850482999933],
						[-69.91987385499993, -16.024098358999936],
						[-70.18441560399998, -16.024098358999936],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040109',
			nombdist: 'MARIANO MELGAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.51650810599995, -16.41056060899996],
						[-71.51650810599995, -16.320571858999926],
						[-71.42059323099994, -16.320571858999926],
						[-71.42059323099994, -16.41056060899996],
						[-71.51650810599995, -16.41056060899996],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180202',
			nombdist: 'CHOJATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.76679360499998, -16.572841858999936],
						[-70.76679360499998, -16.318451482999933],
						[-70.30610335499995, -16.318451482999933],
						[-70.30610335499995, -16.572841858999936],
						[-70.76679360499998, -16.572841858999936],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			iddist: '040204',
			nombdist: 'MARISCAL CACERES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.01499935699997, -16.648096108999937],
						[-73.01499935699997, -16.304172483999935],
						[-72.69869998199994, -16.304172483999935],
						[-72.69869998199994, -16.648096108999937],
						[-73.01499935699997, -16.648096108999937],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210114',
			nombdist: 'TIQUILLACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.44311185499998, -16.10166023299996],
						[-70.44311185499998, -15.751617857999975],
						[-70.13328685499994, -15.751617857999975],
						[-70.13328685499994, -16.10166023299996],
						[-70.44311185499998, -16.10166023299996],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040303',
			nombdist: 'ATICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.90206148399994, -16.405406983999967],
						[-73.90206148399994, -15.73461148399997],
						[-73.19506835799996, -15.73461148399997],
						[-73.19506835799996, -16.405406983999967],
						[-73.90206148399994, -16.405406983999967],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040511',
			nombdist: 'LLUTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.27063748199998, -16.20845985799997],
						[-72.27063748199998, -15.72379210899993],
						[-71.77741235699995, -15.72379210899993],
						[-71.77741235699995, -16.20845985799997],
						[-72.27063748199998, -16.20845985799997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040110',
			nombdist: 'MIRAFLORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.52882010599996, -16.40292948399997],
						[-71.52882010599996, -16.29621123399994],
						[-71.41060635599996, -16.29621123399994],
						[-71.41060635599996, -16.40292948399997],
						[-71.52882010599996, -16.40292948399997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211304',
			nombdist: 'CUTURAPI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.20457422899995, -16.327785733999974],
						[-69.20457422899995, -16.260071108999966],
						[-69.15464597899995, -16.260071108999966],
						[-69.15464597899995, -16.327785733999974],
						[-69.20457422899995, -16.327785733999974],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210406',
			nombdist: 'POMATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.41401947899993, -16.472349608999934],
						[-69.41401947899993, -16.253902607999976],
						[-69.13898122899997, -16.253902607999976],
						[-69.13898122899997, -16.472349608999934],
						[-69.41401947899993, -16.472349608999934],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040106',
			nombdist: 'CHIGUATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.45108035599998, -16.44179535899997],
						[-71.45108035599998, -16.29621123399994],
						[-71.25406648099994, -16.29621123399994],
						[-71.25406648099994, -16.44179535899997],
						[-71.45108035599998, -16.44179535899997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211302',
			nombdist: 'ANAPIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-68.91851760299994, -16.403720733999933],
						[-68.91851760299994, -16.233295357999964],
						[-68.81421685299995, -16.233295357999964],
						[-68.81421685299995, -16.403720733999933],
						[-68.91851760299994, -16.403720733999933],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180206',
			nombdist: 'LLOQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.75241997999996, -16.375796857999944],
						[-70.75241997999996, -16.220396482999945],
						[-70.51684473099994, -16.220396482999945],
						[-70.51684473099994, -16.375796857999944],
						[-70.75241997999996, -16.375796857999944],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040102',
			nombdist: 'ALTO SELVA ALEGRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.53735348099997, -16.39054648399997],
						[-71.53735348099997, -16.284511608999935],
						[-71.41060635599996, -16.284511608999935],
						[-71.41060635599996, -16.39054648399997],
						[-71.53735348099997, -16.39054648399997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211306',
			nombdist: 'TINICACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-68.98623060299997, -16.206490232999954],
						[-68.98623060299997, -16.189081983999927],
						[-68.95664497899998, -16.189081983999927],
						[-68.95664497899998, -16.206490232999954],
						[-68.98623060299997, -16.206490232999954],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211307',
			nombdist: 'UNICACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-68.98413672899994, -16.24550385899994],
						[-68.98413672899994, -16.202993857999957],
						[-68.93605660299994, -16.202993857999957],
						[-68.93605660299994, -16.24550385899994],
						[-68.98413672899994, -16.24550385899994],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211301',
			nombdist: 'YUNGUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.18511247899994, -16.35863085899996],
						[-69.18511247899994, -16.197361608999927],
						[-69.00714297899998, -16.197361608999927],
						[-69.00714297899998, -16.35863085899996],
						[-69.18511247899994, -16.35863085899996],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			iddist: '210401',
			nombdist: 'JULI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.68675197899995, -16.498762358999954],
						[-69.68675197899995, -16.17421485899996],
						[-69.32969335399997, -16.17421485899996],
						[-69.32969335399997, -16.498762358999954],
						[-69.68675197899995, -16.498762358999954],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040103',
			nombdist: 'CAYMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.55669398199996, -16.39334385899997],
						[-71.55669398199996, -16.164405983999927],
						[-71.33836360599997, -16.164405983999927],
						[-71.33836360599997, -16.39334385899997],
						[-71.55669398199996, -16.39334385899997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			iddist: '211305',
			nombdist: 'OLLARAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.03093260399999, -16.274380233999977],
						[-69.03093260399999, -16.19229523399997],
						[-68.97001560299998, -16.19229523399997],
						[-68.97001560299998, -16.274380233999977],
						[-69.03093260399999, -16.274380233999977],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040104',
			nombdist: 'CERRO COLORADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.65071985599997, -16.407878857999947],
						[-71.65071985599997, -16.18908773399994],
						[-71.49935348099996, -16.18908773399994],
						[-71.49935348099996, -16.407878857999947],
						[-71.65071985599997, -16.407878857999947],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040520',
			nombdist: 'MAJES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.60469060699995, -16.61182598399995],
						[-72.60469060699995, -16.03727723399993],
						[-72.07321935599998, -16.03727723399993],
						[-72.07321935599998, -16.61182598399995],
						[-72.60469060699995, -16.61182598399995],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			iddist: '180211',
			nombdist: 'YUNGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.73184998099998, -16.28163673399996],
						[-70.73184998099998, -16.15402998299993],
						[-70.59825673099994, -16.15402998299993],
						[-70.59825673099994, -16.28163673399996],
						[-70.73184998099998, -16.28163673399996],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040125',
			nombdist: 'VITOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.28353135699996, -16.799554859999944],
						[-72.28353135699996, -16.14243160899997],
						[-71.78939060599998, -16.14243160899997],
						[-71.78939060599998, -16.799554859999944],
						[-72.28353135699996, -16.799554859999944],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			iddist: '040120',
			nombdist: 'SANTA ISABEL DE SIGUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.14461523199998, -16.39665223399993],
						[-72.14461523199998, -16.13713648299995],
						[-71.95734410599994, -16.13713648299995],
						[-71.95734410599994, -16.39665223399993],
						[-72.14461523199998, -16.39665223399993],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040413',
			nombdist: 'URACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.65615848199997, -16.430480983999928],
						[-72.65615848199997, -16.09214398399996],
						[-72.35610198199998, -16.09214398399996],
						[-72.35610198199998, -16.430480983999928],
						[-72.65615848199997, -16.430480983999928],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040411',
			nombdist: 'TIPAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.53428423299994, -15.808853108999926],
						[-72.53428423299994, -15.681893358999957],
						[-72.46678923199994, -15.681893358999957],
						[-72.46678923199994, -15.808853108999926],
						[-72.53428423299994, -15.808853108999926],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040301',
			nombdist: 'CARAVELI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.50126648299994, -16.064552357999958],
						[-73.50126648299994, -15.663985233999938],
						[-73.22093960799998, -15.663985233999938],
						[-73.22093960799998, -16.064552357999958],
						[-73.50126648299994, -16.064552357999958],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040606',
			nombdist: 'RIO GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.26244348299997, -16.020194982999953],
						[-73.26244348299997, -15.663757357999941],
						[-72.95745848199994, -15.663757357999941],
						[-72.95745848199994, -16.020194982999953],
						[-73.26244348299997, -16.020194982999953],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040307',
			nombdist: 'CHALA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.29701235799996, -15.88886735799997],
						[-74.29701235799996, -15.661087982999959],
						[-74.05711360799995, -15.661087982999959],
						[-74.05711360799995, -15.88886735799997],
						[-74.29701235799996, -15.88886735799997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040502',
			nombdist: 'ACHOMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.78414923199995, -15.983284982999976],
						[-71.78414923199995, -15.64393523299998],
						[-71.59193423199997, -15.64393523299998],
						[-71.59193423199997, -15.983284982999976],
						[-71.78414923199995, -15.983284982999976],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210110',
			nombdist: 'PAUCARCOLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.15329285499996, -15.807511732999956],
						[-70.15329285499996, -15.641953107999939],
						[-69.95601572999993, -15.641953107999939],
						[-69.95601572999993, -15.807511732999956],
						[-70.15329285499996, -15.807511732999956],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040412',
			nombdist: 'UÑON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.47965998199999, -15.85818573299997],
						[-72.47965998199999, -15.62656973299994],
						[-72.24365998199994, -15.62656973299994],
						[-72.24365998199994, -15.85818573299997],
						[-72.47965998199999, -15.85818573299997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040512',
			nombdist: 'MACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.87081148199997, -15.853813232999983],
						[-71.87081148199997, -15.623663983999961],
						[-71.71623998199993, -15.623663983999961],
						[-71.71623998199993, -15.853813232999983],
						[-71.87081148199997, -15.853813232999983],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2111',
			nombprov: 'SAN ROMAN',
			iddist: '211103',
			nombdist: 'CABANILLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.89629360599997, -16.034189857999934],
						[-70.89629360599997, -15.619808232999958],
						[-70.32600847999998, -15.619808232999958],
						[-70.32600847999998, -16.034189857999934],
						[-70.89629360599997, -16.034189857999934],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210104',
			nombdist: 'ATUNCOLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.24623822999996, -15.738064733999977],
						[-70.24623822999996, -15.616880857999945],
						[-70.07301260499997, -15.616880857999945],
						[-70.07301260499997, -15.738064733999977],
						[-70.24623822999996, -15.738064733999977],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040519',
			nombdist: 'YANQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.68386835599995, -15.990863858999944],
						[-71.68386835599995, -15.614513357999954],
						[-71.20102685599994, -15.614513357999954],
						[-71.20102685599994, -15.990863858999944],
						[-71.68386835599995, -15.990863858999944],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040601',
			nombdist: 'CHUQUIBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.89580535699997, -16.461814858999958],
						[-72.89580535699997, -15.61175635799998],
						[-72.55909723199994, -15.61175635799998],
						[-72.55909723199994, -16.461814858999958],
						[-72.89580535699997, -16.461814858999958],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210107',
			nombdist: 'COATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.01492497999993, -15.62436723299993],
						[-70.01492497999993, -15.506370857999968],
						[-69.84639060399996, -15.506370857999968],
						[-69.84639060399996, -15.62436723299993],
						[-70.01492497999993, -15.62436723299993],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040507',
			nombdist: 'HUAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.31292723099995, -15.961603107999963],
						[-72.31292723099995, -15.606447232999926],
						[-71.98704523099997, -15.606447232999926],
						[-71.98704523099997, -15.961603107999963],
						[-72.31292723099995, -15.961603107999963],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040503',
			nombdist: 'CABANACONDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.10789498199995, -15.799704608999946],
						[-72.10789498199995, -15.578555107999932],
						[-71.81081248099997, -15.578555107999932],
						[-71.81081248099997, -15.799704608999946],
						[-72.10789498199995, -15.799704608999946],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040514',
			nombdist: 'SAN ANTONIO DE CHUCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.43034360599995, -16.025598483999943],
						[-71.43034360599995, -15.57539935899996],
						[-70.84533835499997, -15.57539935899996],
						[-70.84533835499997, -16.025598483999943],
						[-71.43034360599995, -16.025598483999943],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210108',
			nombdist: 'HUATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.08588285399998, -15.68767435899997],
						[-70.08588285399998, -15.559651857999938],
						[-69.91585422999998, -15.559651857999938],
						[-69.91585422999998, -15.68767435899997],
						[-70.08588285399998, -15.68767435899997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040308',
			nombdist: 'CHAPARRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.20961760799997, -16.10357660899996],
						[-74.20961760799997, -15.557517982999968],
						[-73.70927423299997, -15.557517982999968],
						[-73.70927423299997, -16.10357660899996],
						[-74.20961760799997, -16.10357660899996],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2111',
			nombprov: 'SAN ROMAN',
			iddist: '211102',
			nombdist: 'CABANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.37976172999998, -15.741159232999962],
						[-70.37976172999998, -15.548185732999968],
						[-70.19292222899998, -15.548185732999968],
						[-70.19292222899998, -15.741159232999962],
						[-70.37976172999998, -15.741159232999962],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040410',
			nombdist: 'PAMPACOLCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.72351835699999, -15.808306733999927],
						[-72.72351835699999, -15.545888857999955],
						[-72.50704198199998, -15.545888857999955],
						[-72.50704198199998, -15.808306733999927],
						[-72.72351835699999, -15.808306733999927],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040403',
			nombdist: 'AYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.39064023199995, -15.741228108999962],
						[-72.39064023199995, -15.527238857999976],
						[-72.19432060699995, -15.527238857999976],
						[-72.19432060699995, -15.741228108999962],
						[-72.39064023199995, -15.741228108999962],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040414',
			nombdist: 'VIRACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.62929535699993, -15.703146482999955],
						[-72.62929535699993, -15.537275357999931],
						[-72.50931548199998, -15.537275357999931],
						[-72.50931548199998, -15.703146482999955],
						[-72.62929535699993, -15.703146482999955],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040602',
			nombdist: 'ANDARAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.01733398199997, -16.041355107999948],
						[-73.01733398199997, -15.534765232999973],
						[-72.66069798199999, -15.534765232999973],
						[-72.66069798199999, -16.041355107999948],
						[-73.01733398199997, -16.041355107999948],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040501',
			nombdist: 'CHIVAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.62472535599994, -15.763047232999952],
						[-71.62472535599994, -15.520934107999949],
						[-71.46876523099996, -15.520934107999949],
						[-71.46876523099996, -15.763047232999952],
						[-71.62472535599994, -15.763047232999952],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040506',
			nombdist: 'COPORAQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.68976598099994, -15.66110135799994],
						[-71.68976598099994, -15.516415607999932],
						[-71.57113648099994, -15.516415607999932],
						[-71.57113648099994, -15.66110135799994],
						[-71.68976598099994, -15.66110135799994],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040608',
			nombdist: 'YANAQUIHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.22677598299998, -15.871257732999936],
						[-73.22677598299998, -15.510603857999968],
						[-72.80530548199994, -15.510603857999968],
						[-72.80530548199994, -15.871257732999936],
						[-73.22677598299998, -15.871257732999936],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040304',
			nombdist: 'ATIQUIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.45323948399994, -15.849730482999973],
						[-74.45323948399994, -15.481039107999948],
						[-74.19342035799997, -15.481039107999948],
						[-74.19342035799997, -15.849730482999973],
						[-74.45323948399994, -15.849730482999973],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210105',
			nombdist: 'CAPACHICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.90694135499996, -15.729740482999944],
						[-69.90694135499996, -15.478590982999947],
						[-69.74376260499997, -15.478590982999947],
						[-69.74376260499997, -15.729740482999944],
						[-69.90694135499996, -15.729740482999944],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210702',
			nombdist: 'CABANILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.51819147999998, -15.677268982999976],
						[-70.51819147999998, -15.474238232999937],
						[-70.25733422999997, -15.474238232999937],
						[-70.25733422999997, -15.677268982999976],
						[-70.51819147999998, -15.677268982999976],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040513',
			nombdist: 'MADRIGAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.92675023199996, -15.623663983999961],
						[-71.92675023199996, -15.454999982999936],
						[-71.78874210599997, -15.454999982999936],
						[-71.78874210599997, -15.623663983999961],
						[-71.92675023199996, -15.623663983999961],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2109',
			nombprov: 'MOHO',
			iddist: '210904',
			nombdist: 'TILALI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.39130185399995, -15.53797923299993],
						[-69.39130185399995, -15.439007857999968],
						[-69.30058297899996, -15.439007857999968],
						[-69.30058297899996, -15.53797923299993],
						[-69.39130185399995, -15.53797923299993],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2111',
			nombprov: 'SAN ROMAN',
			iddist: '211104',
			nombdist: 'CARACOTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.21083785499997, -15.669872858999952],
						[-70.21083785499997, -15.437537107999958],
						[-69.96175435499998, -15.437537107999958],
						[-69.96175435499998, -15.669872858999952],
						[-70.21083785499997, -15.669872858999952],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2109',
			nombprov: 'MOHO',
			iddist: '210902',
			nombdist: 'CONIMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.47795272899998, -15.505774857999938],
						[-69.47795272899998, -15.402898732999972],
						[-69.35500260399994, -15.402898732999972],
						[-69.35500260399994, -15.505774857999938],
						[-69.47795272899998, -15.505774857999938],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040509',
			nombdist: 'ICHUPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.73818973099998, -15.661190982999926],
						[-71.73818973099998, -15.510467482999957],
						[-71.67601010599998, -15.510467482999957],
						[-71.67601010599998, -15.661190982999926],
						[-71.73818973099998, -15.661190982999926],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040313',
			nombdist: 'YAUCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.65197748399999, -15.766385107999952],
						[-74.65197748399999, -15.506202732999952],
						[-74.28008273399996, -15.506202732999952],
						[-74.28008273399996, -15.766385107999952],
						[-74.65197748399999, -15.766385107999952],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040408',
			nombdist: 'MACHAGUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.55761723199998, -15.732397983999931],
						[-72.55761723199998, -15.505386732999966],
						[-72.38530735699999, -15.505386732999966],
						[-72.38530735699999, -15.732397983999931],
						[-72.55761723199998, -15.732397983999931],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040604',
			nombdist: 'CHICHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.11695860799995, -15.65050598299996],
						[-73.11695860799995, -15.394479732999969],
						[-72.79785923199995, -15.394479732999969],
						[-72.79785923199995, -15.65050598299996],
						[-73.11695860799995, -15.65050598299996],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040309',
			nombdist: 'HUANUHUANU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.23491660899998, -15.704936858999929],
						[-74.23491660899998, -15.390773732999946],
						[-73.84577935899995, -15.390773732999946],
						[-73.84577935899995, -15.704936858999929],
						[-74.23491660899998, -15.704936858999929],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040518',
			nombdist: 'TUTI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.68114473199995, -15.572714857999927],
						[-71.68114473199995, -15.389076357999954],
						[-71.50993348099996, -15.389076357999954],
						[-71.50993348099996, -15.572714857999927],
						[-71.68114473199995, -15.572714857999927],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210605',
			nombdist: 'PUSI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.09470555199994, -15.53636523299997],
						[-70.09470555199994, -15.352948732999948],
						[-69.89693760499995, -15.352948732999948],
						[-69.89693760499995, -15.53636523299997],
						[-70.09470555199994, -15.53636523299997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040402',
			nombdist: 'ANDAGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.52651760699996, -15.609323482999969],
						[-72.52651760699996, -15.376056732999928],
						[-72.23243710699995, -15.376056732999928],
						[-72.23243710699995, -15.609323482999969],
						[-72.52651760699996, -15.609323482999969],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040306',
			nombdist: 'CAHUACHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.66444398299996, -15.751712858999952],
						[-73.66444398299996, -15.35567760799995],
						[-73.20372010799997, -15.35567760799995],
						[-73.20372010799997, -15.751712858999952],
						[-73.66444398299996, -15.751712858999952],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040510',
			nombdist: 'LARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.87673948199995, -15.645607107999979],
						[-71.87673948199995, -15.351916357999926],
						[-71.65034385599995, -15.351916357999926],
						[-71.65034385599995, -15.645607107999979],
						[-71.87673948199995, -15.645607107999979],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040312',
			nombdist: 'QUICACHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.88407910799998, -15.798640233999947],
						[-73.88407910799998, -15.32397173299995],
						[-73.55265810799995, -15.32397173299995],
						[-73.55265810799995, -15.798640233999947],
						[-73.88407910799998, -15.798640233999947],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210709',
			nombdist: 'SANTA LUCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.03897098099998, -15.851253483999926],
						[-71.03897098099998, -15.31664860799998],
						[-70.45260285499995, -15.31664860799998],
						[-70.45260285499995, -15.851253483999926],
						[-71.03897098099998, -15.851253483999926],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2111',
			nombprov: 'SAN ROMAN',
			iddist: '211101',
			nombdist: 'JULIACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.34296285499994, -15.576883232999933],
						[-70.34296285499994, -15.313784232999978],
						[-70.06996560499994, -15.313784232999978],
						[-70.06996560499994, -15.576883232999933],
						[-70.34296285499994, -15.576883232999933],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030607',
			nombdist: 'URANMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.72305985799994, -13.736613230999978],
						[-73.72305985799994, -13.592591855999956],
						[-73.59267760799997, -13.592591855999956],
						[-73.59267760799997, -13.736613230999978],
						[-73.72305985799994, -13.736613230999978],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100502',
			nombdist: 'ARANCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.81816211099994, -9.193671851999966],
						[-76.81816211099994, -9.053033351999943],
						[-76.64247261099996, -9.053033351999943],
						[-76.64247261099996, -9.193671851999966],
						[-76.81816211099994, -9.193671851999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021805',
			nombdist: 'MORO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.23610736299997, -9.27470122699998],
						[-78.23610736299997, -9.044148851999978],
						[-78.01633223699997, -9.044148851999978],
						[-78.01633223699997, -9.27470122699998],
						[-78.23610736299997, -9.27470122699998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021803',
			nombdist: 'COISHCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.63767973799997, -9.049132851999957],
						[-78.63767973799997, -9.008273351999946],
						[-78.59830461299998, -9.008273351999946],
						[-78.59830461299998, -9.049132851999957],
						[-78.63767973799997, -9.049132851999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			iddist: '020301',
			nombdist: 'LLAMELLIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.07196623699997, -9.133986351999965],
						[-77.07196623699997, -9.007740226999942],
						[-76.94361911099998, -9.007740226999942],
						[-76.94361911099998, -9.133986351999965],
						[-77.07196623699997, -9.133986351999965],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021809',
			nombdist: 'NUEVO CHIMBOTE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.61084573799997, -9.235123101999932],
						[-78.61084573799997, -9.002115101999948],
						[-78.28419898699997, -9.002115101999948],
						[-78.28419898699997, -9.235123101999932],
						[-78.61084573799997, -9.235123101999932],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022001',
			nombdist: 'YUNGAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.78294136199997, -9.178679726999974],
						[-77.78294136199997, -8.993812601999934],
						[-77.57378973699997, -8.993812601999934],
						[-77.57378973699997, -9.178679726999974],
						[-77.78294136199997, -9.178679726999974],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1004',
			nombprov: 'HUACAYBAMBA',
			iddist: '100403',
			nombdist: 'COCHABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.91739848599997, -9.238437476999934],
						[-76.91739848599997, -8.984766889999946],
						[-76.27210548599999, -8.984766889999946],
						[-76.27210548599999, -9.238437476999934],
						[-76.91739848599997, -9.238437476999934],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			iddist: '020305',
			nombdist: 'MIRGAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17387123699996, -9.202418101999967],
						[-77.17387123699996, -9.008357476999947],
						[-77.04722261199998, -9.008357476999947],
						[-77.04722261199998, -9.202418101999967],
						[-77.17387123699996, -9.202418101999967],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021203',
			nombdist: 'HUATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.92340036199994, -9.079645976999927],
						[-77.92340036199994, -8.986216851999927],
						[-77.81884361199997, -8.986216851999927],
						[-77.81884361199997, -9.079645976999927],
						[-77.92340036199994, -9.079645976999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021806',
			nombdist: 'NEPEÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.46768561299996, -9.266288851999946],
						[-78.46768561299996, -8.985676851999926],
						[-78.18438023799996, -8.985676851999926],
						[-78.18438023799996, -9.266288851999946],
						[-78.46768561299996, -9.266288851999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021206',
			nombdist: 'PAMPAROMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.07383011199994, -9.261451351999938],
						[-78.07383011199994, -8.97846147699994],
						[-77.83947073699994, -8.97846147699994],
						[-77.83947073699994, -9.261451351999938],
						[-78.07383011199994, -9.261451351999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0207',
			nombprov: 'CARLOS FERMIN FITZCARRALD',
			iddist: '020701',
			nombdist: 'SAN LUIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.36602348699995, -9.208715476999942],
						[-77.36602348699995, -8.97707460199996],
						[-77.20013573699998, -8.97707460199996],
						[-77.20013573699998, -9.208715476999942],
						[-77.36602348699995, -9.208715476999942],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			iddist: '020303',
			nombdist: 'CHACCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.12278511199997, -9.100810601999967],
						[-77.12278511199997, -8.971515601999954],
						[-77.03315823599996, -8.971515601999954],
						[-77.03315823599996, -9.100810601999967],
						[-77.12278511199997, -9.100810601999967],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210809',
			nombdist: 'UMACHIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.83440435599994, -15.046468481999966],
						[-70.83440435599994, -14.723861356999976],
						[-70.65909010599995, -14.723861356999976],
						[-70.65909010599995, -15.046468481999966],
						[-70.83440435599994, -15.046468481999966],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080805',
			nombdist: 'PALLPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.28910548099998, -15.16603248299998],
						[-71.28910548099998, -14.722952231999955],
						[-70.97488960599998, -14.722952231999955],
						[-70.97488960599998, -15.16603248299998],
						[-71.28910548099998, -15.16603248299998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021808',
			nombdist: 'SANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.65848048799995, -9.028582601999972],
						[-78.65848048799995, -8.954865601999927],
						[-78.57033111299995, -8.954865601999927],
						[-78.57033111299995, -9.028582601999972],
						[-78.65848048799995, -9.028582601999972],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021201',
			nombdist: 'CARAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88309886199994, -9.096963852999977],
						[-77.88309886199994, -8.95139897699994],
						[-77.61300073699994, -8.95139897699994],
						[-77.61300073699994, -9.096963852999977],
						[-77.88309886199994, -9.096963852999977],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210201',
			nombdist: 'AZANGARO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.32118322999997, -15.012766607999936],
						[-70.32118322999997, -14.70859185699993],
						[-69.96592472999998, -14.70859185699993],
						[-69.96592472999998, -15.012766607999936],
						[-70.32118322999997, -15.012766607999936],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080801',
			nombdist: 'ESPINAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.48794535599995, -15.120224981999968],
						[-71.48794535599995, -14.707705106999981],
						[-71.21539310599996, -14.707705106999981],
						[-71.21539310599996, -15.120224981999968],
						[-71.48794535599995, -15.120224981999968],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1103',
			nombprov: 'NASCA',
			iddist: '110301',
			nombdist: 'NASCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.30135348499994, -15.004070357999979],
						[-75.30135348499994, -14.703112231999967],
						[-74.71439685899998, -14.703112231999967],
						[-74.71439685899998, -15.004070357999979],
						[-75.30135348499994, -15.004070357999979],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020903',
			nombdist: 'BAMBAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13048998699998, -8.672566350999944],
						[-78.13048998699998, -8.531760850999945],
						[-77.96598511199994, -8.531760850999945],
						[-77.96598511199994, -8.672566350999944],
						[-78.13048998699998, -8.672566350999944],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0216',
			nombprov: 'POMABAMBA',
			iddist: '021603',
			nombdist: 'PAROBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.50506673699994, -8.72254397699993],
						[-77.50506673699994, -8.507086976999972],
						[-77.28722073699998, -8.507086976999972],
						[-77.28722073699998, -8.72254397699993],
						[-77.50506673699994, -8.72254397699993],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2110',
			nombprov: 'SAN ANTONIO DE PUTINA',
			iddist: '211004',
			nombdist: 'QUILCAPUNCU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.78033772999999, -14.997689482999931],
						[-69.78033772999999, -14.698462106999955],
						[-69.49954310399994, -14.698462106999955],
						[-69.49954310399994, -14.997689482999931],
						[-69.78033772999999, -14.997689482999931],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210801',
			nombdist: 'AYAVIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.77638648099997, -15.19489135799995],
						[-70.77638648099997, -14.674523481999927],
						[-70.43642110499997, -14.674523481999927],
						[-70.43642110499997, -15.19489135799995],
						[-70.77638648099997, -15.19489135799995],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040806',
			nombdist: 'PUYCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.74237060799999, -15.225691857999948],
						[-72.74237060799999, -14.658203106999963],
						[-72.30193323199995, -14.658203106999963],
						[-72.30193323199995, -15.225691857999948],
						[-72.74237060799999, -15.225691857999948],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040804',
			nombdist: 'HUAYNACOTAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.90032973299998, -15.204485857999941],
						[-72.90032973299998, -14.643874106999931],
						[-72.58966060699998, -14.643874106999931],
						[-72.58966060699998, -15.204485857999941],
						[-72.90032973299998, -15.204485857999941],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080808',
			nombdist: 'ALTO PICHIGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.36822260599996, -14.841396482999926],
						[-71.36822260599996, -14.633773856999937],
						[-71.07868598099998, -14.633773856999937],
						[-71.07868598099998, -14.841396482999926],
						[-71.36822260599996, -14.841396482999926],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040603',
			nombdist: 'CAYARANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.56957248199996, -15.419841732999942],
						[-72.56957248199996, -14.632744731999935],
						[-71.89389860699998, -14.632744731999935],
						[-71.89389860699998, -15.419841732999942],
						[-72.56957248199996, -15.419841732999942],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080806',
			nombdist: 'PICHIGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.45457623099998, -14.776544232999981],
						[-71.45457623099998, -14.602072231999955],
						[-71.15653335599995, -14.602072231999955],
						[-71.15653335599995, -14.776544232999981],
						[-71.45457623099998, -14.776544232999981],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101104',
			nombdist: 'APARICIO POMARES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.68971873599997, -9.779540976999954],
						[-76.68971873599997, -9.665648476999934],
						[-76.46292386099998, -9.665648476999934],
						[-76.46292386099998, -9.779540976999954],
						[-76.68971873599997, -9.779540976999954],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021701',
			nombdist: 'RECUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.53625148599997, -9.765530352999974],
						[-77.53625148599997, -9.661595727999952],
						[-77.32691886199996, -9.661595727999952],
						[-77.32691886199996, -9.765530352999974],
						[-77.53625148599997, -9.765530352999974],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020501',
			nombdist: 'CHIQUIAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28044923599998, -10.308007853999982],
						[-77.28044923599998, -10.07017697799995],
						[-77.10265236099997, -10.07017697799995],
						[-77.10265236099997, -10.308007853999982],
						[-77.28044923599998, -10.308007853999982],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020104',
			nombdist: 'HUANCHAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.96354848699997, -9.800761352999928],
						[-77.96354848699997, -9.66495310299996],
						[-77.72675873699995, -9.66495310299996],
						[-77.72675873699995, -9.800761352999928],
						[-77.96354848699997, -9.800761352999928],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100323',
			nombdist: 'YANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.76459373599994, -9.753671852999958],
						[-76.76459373599994, -9.653238227999964],
						[-76.70206048599994, -9.653238227999964],
						[-76.70206048599994, -9.753671852999958],
						[-76.76459373599994, -9.753671852999958],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021710',
			nombdist: 'TICAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.52527586199994, -9.819898602999956],
						[-77.52527586199994, -9.64873885299994],
						[-77.24904086099997, -9.64873885299994],
						[-77.24904086099997, -9.819898602999956],
						[-77.52527586199994, -9.819898602999956],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101004',
			nombdist: 'QUEROPALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.91624023599996, -10.268956977999949],
						[-76.91624023599996, -10.115080103999958],
						[-76.78203323599996, -10.115080103999958],
						[-76.78203323599996, -10.268956977999949],
						[-76.91624023599996, -10.268956977999949],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060103',
			nombdist: 'CHETILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.70810161299994, -7.186212850999937],
						[-78.70810161299994, -7.084287099999926],
						[-78.60321386299995, -7.084287099999926],
						[-78.60321386299995, -7.186212850999937],
						[-78.70810161299994, -7.186212850999937],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			iddist: '130301',
			nombdist: 'BOLIVAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88309673699996, -7.439402224999981],
						[-77.88309673699996, -7.080787100999942],
						[-77.60526161199994, -7.080787100999942],
						[-77.60526161199994, -7.439402224999981],
						[-77.88309673699996, -7.439402224999981],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1304',
			nombprov: 'CHEPEN',
			iddist: '130403',
			nombdist: 'PUEBLO NUEVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.69062111399995, -7.288554725999973],
						[-79.69062111399995, -7.07299222499995],
						[-79.45412286399994, -7.07299222499995],
						[-79.45412286399994, -7.288554725999973],
						[-79.69062111399995, -7.288554725999973],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2206',
			nombprov: 'MARISCAL CACERES',
			iddist: '220601',
			nombdist: 'JUANJUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.90746998699996, -7.475411350999934],
						[-76.90746998699996, -7.068503599999929],
						[-76.65379186099995, -7.068503599999929],
						[-76.65379186099995, -7.475411350999934],
						[-76.90746998699996, -7.475411350999934],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061007',
			nombdist: 'JOSE SABOGAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.11445323699996, -7.364236350999931],
						[-78.11445323699996, -7.06461347499993],
						[-77.82890748699998, -7.06461347499993],
						[-77.82890748699998, -7.364236350999931],
						[-78.11445323699996, -7.364236350999931],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080401',
			nombdist: 'CALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.05955548099996, -13.407821480999928],
						[-72.05955548099996, -13.170125480999957],
						[-71.84306498099994, -13.170125480999957],
						[-71.84306498099994, -13.407821480999928],
						[-72.05955548099996, -13.407821480999928],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			iddist: '220405',
			nombdist: 'SACANCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.85471636099999, -7.175039224999978],
						[-76.85471636099999, -7.030641849999938],
						[-76.66370261099996, -7.030641849999938],
						[-76.66370261099996, -7.175039224999978],
						[-76.85471636099999, -7.175039224999978],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140104',
			nombdist: 'ETEN PUERTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.87392186399995, -6.989801099999966],
						[-79.87392186399995, -6.918712849999963],
						[-79.81318098799994, -6.918712849999963],
						[-79.81318098799994, -6.989801099999966],
						[-79.87392186399995, -6.989801099999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020505',
			nombdist: 'CAJACAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.47090823699995, -10.284771602999967],
						[-77.47090823699995, -10.127044227999932],
						[-77.25159873699994, -10.127044227999932],
						[-77.25159873699994, -10.284771602999967],
						[-77.47090823699995, -10.284771602999967],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040516',
			nombdist: 'TAPAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.00986485599998, -15.604697232999968],
						[-72.00986485599998, -15.243604607999941],
						[-71.85675810699996, -15.243604607999941],
						[-71.85675810699996, -15.604697232999968],
						[-72.00986485599998, -15.604697232999968],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210607',
			nombdist: 'TARACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.00637310499997, -15.38426173299996],
						[-70.00637310499997, -15.232460482999954],
						[-69.79112485399997, -15.232460482999954],
						[-69.79112485399997, -15.38426173299996],
						[-70.00637310499997, -15.38426173299996],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150801',
			nombdist: 'HUACHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.65422661199995, -11.44717972999996],
						[-77.65422661199995, -11.099904353999932],
						[-77.31989998699999, -11.099904353999932],
						[-77.31989998699999, -11.44717972999996],
						[-77.65422661199995, -11.44717972999996],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			iddist: '220403',
			nombdist: 'EL ESLABON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.78520898599999, -7.047184475999927],
						[-76.78520898599999, -6.916625099999976],
						[-76.63391986099998, -6.916625099999976],
						[-76.63391986099998, -7.047184475999927],
						[-76.78520898599999, -7.047184475999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021404',
			nombdist: 'CARHUAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28214973599995, -10.560605477999957],
						[-77.28214973599995, -10.435366603999967],
						[-77.16682036099996, -10.435366603999967],
						[-77.16682036099996, -10.560605477999957],
						[-77.28214973599995, -10.560605477999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021010',
			nombdist: 'PAUCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.94643948699996, -9.251675726999963],
						[-76.94643948699996, -9.070605476999958],
						[-76.82493361099995, -9.070605476999958],
						[-76.82493361099995, -9.251675726999963],
						[-76.94643948699996, -9.251675726999963],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150606',
			nombdist: 'IHUARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.08805823599994, -11.348609978999946],
						[-77.08805823599994, -11.078249978999963],
						[-76.82651236099997, -11.078249978999963],
						[-76.82651236099997, -11.348609978999946],
						[-77.08805823599994, -11.348609978999946],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060305',
			nombdist: 'JORGE CHAVEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13092973699997, -6.974533224999959],
						[-78.13092973699997, -6.907962849999933],
						[-78.00084561199998, -6.907962849999933],
						[-78.00084561199998, -6.974533224999959],
						[-78.13092973699997, -6.974533224999959],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021510',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.23558198699999, -8.695007726999961],
						[-78.23558198699999, -8.450014351999926],
						[-78.01836911199996, -8.450014351999926],
						[-78.01836911199996, -8.695007726999961],
						[-78.23558198699999, -8.695007726999961],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100313',
			nombdist: 'PACHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.94782811099998, -9.82348435299997],
						[-76.94782811099998, -9.58734960199996],
						[-76.71680273599998, -9.58734960199996],
						[-76.71680273599998, -9.82348435299997],
						[-76.94782811099998, -9.82348435299997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020111',
			nombdist: 'PIRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.79412311199997, -9.620534101999965],
						[-77.79412311199997, -9.389765601999954],
						[-77.61693661199996, -9.389765601999954],
						[-77.61693661199996, -9.620534101999965],
						[-77.79412311199997, -9.620534101999965],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020503',
			nombdist: 'ANTONIO RAYMONDI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56770311199995, -10.262693727999931],
						[-77.56770311199995, -10.145732602999942],
						[-77.41421048699993, -10.145732602999942],
						[-77.41421048699993, -10.262693727999931],
						[-77.56770311199995, -10.262693727999931],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020107',
			nombdist: 'LA LIBERTAD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.78936723699996, -9.702177227999925],
						[-77.78936723699996, -9.561158227999954],
						[-77.62129886099996, -9.561158227999954],
						[-77.62129886099996, -9.702177227999925],
						[-77.78936723699996, -9.702177227999925],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210109',
			nombdist: 'MAÑAZO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.56288997999997, -16.050369108999973],
						[-70.56288997999997, -15.726128733999928],
						[-70.29109360499996, -15.726128733999928],
						[-70.29109360499996, -16.050369108999973],
						[-70.56288997999997, -16.050369108999973],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100316',
			nombdist: 'QUIVILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.74318948599995, -9.612236351999968],
						[-76.74318948599995, -9.547304726999926],
						[-76.60870311099995, -9.547304726999926],
						[-76.60870311099995, -9.612236351999968],
						[-76.74318948599995, -9.612236351999968],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210115',
			nombdist: 'VILQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.32410985499996, -15.901185857999963],
						[-70.32410985499996, -15.673222607999946],
						[-70.19871835499998, -15.673222607999946],
						[-70.19871835499998, -15.901185857999963],
						[-70.32410985499996, -15.901185857999963],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040405',
			nombdist: 'CHILCAYMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.44066610699997, -15.44108960799997],
						[-72.44066610699997, -15.249736732999963],
						[-72.32211298199996, -15.249736732999963],
						[-72.32211298199996, -15.44108960799997],
						[-72.44066610699997, -15.44108960799997],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040504',
			nombdist: 'CALLALLI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.53388973099999, -15.73606773299997],
						[-71.53388973099999, -15.243862107999973],
						[-70.99262235599997, -15.243862107999973],
						[-70.99262235599997, -15.73606773299997],
						[-71.53388973099999, -15.73606773299997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020103',
			nombdist: 'COLCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88774223699994, -9.62379260199998],
						[-77.88774223699994, -9.54561322799998],
						[-77.78278548699996, -9.54561322799998],
						[-77.78278548699996, -9.62379260199998],
						[-77.88774223699994, -9.62379260199998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020108',
			nombdist: 'OLLEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.50128998699995, -9.67971747799993],
						[-77.50128998699995, -9.536070352999957],
						[-77.26562361099997, -9.536070352999957],
						[-77.26562361099997, -9.67971747799993],
						[-77.50128998699995, -9.67971747799993],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020109',
			nombdist: 'PAMPAS GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.04189061299996, -9.772918351999976],
						[-78.04189061299996, -9.531023476999962],
						[-77.76940348699998, -9.531023476999962],
						[-77.76940348699998, -9.772918351999976],
						[-78.04189061299996, -9.772918351999976],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020901',
			nombdist: 'CORONGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.99283873699994, -8.641945351999937],
						[-77.99283873699994, -8.449294976999965],
						[-77.86189648699997, -8.449294976999965],
						[-77.86189648699997, -8.641945351999937],
						[-77.99283873699994, -8.641945351999937],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1007',
			nombprov: 'MARAÑON',
			iddist: '100701',
			nombdist: 'HUACRACHUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.31748636199995, -8.77131835199998],
						[-77.31748636199995, -8.44002147599997],
						[-77.03425586099996, -8.44002147599997],
						[-77.03425586099996, -8.77131835199998],
						[-77.31748636199995, -8.77131835199998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020902',
			nombdist: 'ACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.91631248699997, -8.596138725999936],
						[-77.91631248699997, -8.439812851999932],
						[-77.85227986199999, -8.439812851999932],
						[-77.85227986199999, -8.596138725999936],
						[-77.91631248699997, -8.596138725999936],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090613',
			nombdist: 'SANTIAGO DE CHOCORVOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.56618548499995, -13.99388473199997],
						[-75.56618548499995, -13.591935605999936],
						[-74.90058010899997, -13.591935605999936],
						[-74.90058010899997, -13.99388473199997],
						[-75.56618548499995, -13.99388473199997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210308',
			nombdist: 'OLLACHEA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.73586685599997, -13.915103981999948],
						[-70.73586685599997, -13.585772856999938],
						[-70.38801072999996, -13.585772856999938],
						[-70.38801072999996, -13.915103981999948],
						[-70.73586685599997, -13.915103981999948],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081202',
			nombdist: 'ANDAHUAYLILLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.74836723199996, -13.736858606999931],
						[-71.74836723199996, -13.580646480999974],
						[-71.64231635599998, -13.580646480999974],
						[-71.64231635599998, -13.736858606999931],
						[-71.74836723199996, -13.736858606999931],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110507',
			nombdist: 'SAN CLEMENTE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.21704098599997, -13.709451230999946],
						[-76.21704098599997, -13.564083980999953],
						[-76.04480273499996, -13.564083980999953],
						[-76.04480273499996, -13.709451230999946],
						[-76.21704098599997, -13.709451230999946],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030204',
			nombdist: 'HUANCARAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.11243548199997, -13.731272230999934],
						[-73.11243548199997, -13.560599605999926],
						[-72.94462598299998, -13.560599605999926],
						[-72.94462598299998, -13.731272230999934],
						[-73.11243548199997, -13.731272230999934],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110504',
			nombdist: 'INDEPENDENCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.10171110999994, -13.736093855999968],
						[-76.10171110999994, -13.560441355999956],
						[-75.91860935999995, -13.560441355999956],
						[-75.91860935999995, -13.736093855999968],
						[-76.10171110999994, -13.736093855999968],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210102',
			nombdist: 'ACORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.18538697999998, -16.655232233999982],
						[-70.18538697999998, -15.889763607999953],
						[-69.60874997899998, -15.889763607999953],
						[-69.60874997899998, -16.655232233999982],
						[-70.18538697999998, -16.655232233999982],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0204',
			nombprov: 'ASUNCION',
			iddist: '020402',
			nombdist: 'ACOCHACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.49046036199996, -9.151322351999966],
						[-77.49046036199996, -9.056789101999925],
						[-77.36191398599993, -9.056789101999925],
						[-77.36191398599993, -9.151322351999966],
						[-77.49046036199996, -9.151322351999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020105',
			nombdist: 'INDEPENDENCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63425711199994, -9.58246272699995],
						[-77.63425711199994, -9.36796985199993],
						[-77.31448311099996, -9.36796985199993],
						[-77.31448311099996, -9.58246272699995],
						[-77.63425711199994, -9.58246272699995],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021901',
			nombdist: 'SIHUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.65339061199995, -8.58735547599997],
						[-77.65339061199995, -8.496147600999961],
						[-77.57744036099996, -8.496147600999961],
						[-77.57744036099996, -8.58735547599997],
						[-77.65339061199995, -8.58735547599997],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100506',
			nombdist: 'MIRAFLORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.93633786099997, -9.509884726999928],
						[-76.93633786099997, -9.36767985299997],
						[-76.78113861099996, -9.36767985299997],
						[-76.78113861099996, -9.509884726999928],
						[-76.93633786099997, -9.509884726999928],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040409',
			nombdist: 'ORCOPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.37693023199995, -15.390929232999952],
						[-72.37693023199995, -14.881257982999955],
						[-72.09920498099996, -14.881257982999955],
						[-72.09920498099996, -15.390929232999952],
						[-72.37693023199995, -15.390929232999952],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080807',
			nombdist: 'SUYCKUTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.84954835599996, -15.146117231999938],
						[-71.84954835599996, -14.855669982999927],
						[-71.48210148099997, -14.855669982999927],
						[-71.48210148099997, -15.146117231999938],
						[-71.84954835599996, -15.146117231999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021507',
			nombdist: 'LLAPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.06963286199993, -8.538537101999964],
						[-78.06963286199993, -8.48929497599994],
						[-77.98341836199995, -8.48929497599994],
						[-77.98341836199995, -8.538537101999964],
						[-78.06963286199993, -8.538537101999964],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0211',
			nombprov: 'HUARMEY',
			iddist: '021104',
			nombdist: 'HUAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.85395698699995, -9.974212852999926],
						[-77.85395698699995, -9.837005852999937],
						[-77.61689761199995, -9.837005852999937],
						[-77.61689761199995, -9.974212852999926],
						[-77.85395698699995, -9.974212852999926],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101102',
			nombdist: 'CAHUAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.68824023599996, -9.905281226999932],
						[-76.68824023599996, -9.827921851999974],
						[-76.60608398599999, -9.827921851999974],
						[-76.60608398599999, -9.905281226999932],
						[-76.68824023599996, -9.905281226999932],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020504',
			nombdist: 'AQUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.22435736099999, -10.099857852999946],
						[-77.22435736099999, -9.827049227999964],
						[-77.02189061099995, -9.827049227999964],
						[-77.02189061099995, -10.099857852999946],
						[-77.22435736099999, -10.099857852999946],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100301',
			nombdist: 'LA UNION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.87321286099996, -10.011109352999938],
						[-76.87321286099996, -9.802273476999972],
						[-76.72006048599997, -9.802273476999972],
						[-76.72006048599997, -10.011109352999938],
						[-76.87321286099996, -10.011109352999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0202',
			nombprov: 'AIJA',
			iddist: '020205',
			nombdist: 'SUCCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70948436199996, -9.873305977999962],
						[-77.70948436199996, -9.79348247799993],
						[-77.55614148699993, -9.79348247799993],
						[-77.55614148699993, -9.873305977999962],
						[-77.70948436199996, -9.873305977999962],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101106',
			nombdist: 'OBAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.75801948599997, -9.928845727999942],
						[-76.75801948599997, -9.743923852999956],
						[-76.59606448599999, -9.743923852999956],
						[-76.59606448599999, -9.928845727999942],
						[-76.75801948599997, -9.928845727999942],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0202',
			nombprov: 'AIJA',
			iddist: '020203',
			nombdist: 'HUACLLAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70940823699993, -9.826421727999957],
						[-77.70940823699993, -9.742445352999937],
						[-77.63938711199995, -9.742445352999937],
						[-77.63938711199995, -9.826421727999957],
						[-77.70940823699993, -9.826421727999957],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040404',
			nombdist: 'CHACHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.31307985699993, -15.542880857999933],
						[-72.31307985699993, -14.837326106999967],
						[-71.91380310599999, -14.837326106999967],
						[-71.91380310599999, -15.542880857999933],
						[-72.31307985699993, -15.542880857999933],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1103',
			nombprov: 'NASCA',
			iddist: '110305',
			nombdist: 'VISTA ALEGRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.00117773499994, -15.003142607999962],
						[-75.00117773499994, -14.836628232999942],
						[-74.64624123399994, -14.836628232999942],
						[-74.64624123399994, -15.003142607999962],
						[-75.00117773499994, -15.003142607999962],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210215',
			nombdist: 'TIRAPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.46816597999998, -15.01871848299993],
						[-70.46816597999998, -14.831342606999954],
						[-70.30236135499996, -14.831342606999954],
						[-70.30236135499996, -15.01871848299993],
						[-70.46816597999998, -15.01871848299993],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210803',
			nombdist: 'CUPI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.99665422999993, -15.00132035699994],
						[-70.99665422999993, -14.82086198199994],
						[-70.78981835599996, -14.82086198199994],
						[-70.78981835599996, -15.00132035699994],
						[-70.99665422999993, -15.00132035699994],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0202',
			nombprov: 'AIJA',
			iddist: '020204',
			nombdist: 'LA MERCED',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.69860936099997, -9.774191352999935],
						[-77.69860936099997, -9.620830102999946],
						[-77.53879923699998, -9.620830102999946],
						[-77.53879923699998, -9.774191352999935],
						[-77.69860936099997, -9.774191352999935],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100307',
			nombdist: 'CHUQUIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.72355273599999, -9.701542976999974],
						[-76.72355273599999, -9.606888727999944],
						[-76.52597261099999, -9.606888727999944],
						[-76.52597261099999, -9.701542976999974],
						[-76.72355273599999, -9.701542976999974],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100508',
			nombdist: 'PUNCHAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.88643548599998, -9.472009726999943],
						[-76.88643548599998, -9.389744101999952],
						[-76.78091211099996, -9.389744101999952],
						[-76.78091211099996, -9.472009726999943],
						[-76.88643548599998, -9.472009726999943],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021015',
			nombdist: 'SAN PEDRO DE CHANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03735936099997, -9.563365226999963],
						[-77.03735936099997, -9.379855476999978],
						[-76.92923823699994, -9.379855476999978],
						[-76.92923823699994, -9.563365226999963],
						[-77.03735936099997, -9.563365226999963],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020110',
			nombdist: 'PARIACOTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.94679298699998, -9.567769477999946],
						[-77.94679298699998, -9.370708976999936],
						[-77.67450511199996, -9.370708976999936],
						[-77.67450511199996, -9.567769477999946],
						[-77.94679298699998, -9.567769477999946],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040505',
			nombdist: 'CAYLLOMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.98238373199996, -15.417002732999947],
						[-71.98238373199996, -14.789601232999928],
						[-71.57704923099993, -14.789601232999928],
						[-71.57704923099993, -15.417002732999947],
						[-71.98238373199996, -15.417002732999947],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210602',
			nombdist: 'COJATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.58086672899998, -15.268890607999936],
						[-69.58086672899998, -14.762841856999955],
						[-69.11962310399997, -14.762841856999955],
						[-69.11962310399997, -15.268890607999936],
						[-69.58086672899998, -15.268890607999936],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040805',
			nombdist: 'PAMPAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.03594973199995, -15.232339982999974],
						[-73.03594973199995, -14.75788685699996],
						[-72.82497410799994, -14.75788685699996],
						[-72.82497410799994, -15.232339982999974],
						[-73.03594973199995, -15.232339982999974],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1103',
			nombprov: 'NASCA',
			iddist: '110302',
			nombdist: 'CHANGUILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.50449998399995, -15.003040982999948],
						[-75.50449998399995, -14.582089731999929],
						[-75.13951360999994, -14.582089731999929],
						[-75.13951360999994, -15.003040982999948],
						[-75.50449998399995, -15.003040982999948],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210807',
			nombdist: 'ORURILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.61646285499995, -14.824920231999954],
						[-70.61646285499995, -14.574565606999954],
						[-70.38181422999997, -14.574565606999954],
						[-70.38181422999997, -14.824920231999954],
						[-70.61646285499995, -14.824920231999954],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210805',
			nombdist: 'MACARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.11809173099994, -14.859894482999948],
						[-71.11809173099994, -14.572214856999949],
						[-70.75934260499997, -14.572214856999949],
						[-70.75934260499997, -14.859894482999948],
						[-71.11809173099994, -14.859894482999948],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210204',
			nombdist: 'ASILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.45423460499995, -14.892619106999973],
						[-70.45423460499995, -14.56226473199996],
						[-70.23708397999997, -14.56226473199996],
						[-70.23708397999997, -14.892619106999973],
						[-70.45423460499995, -14.892619106999973],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100103',
			nombdist: 'CHINCHAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.26392998499995, -9.83779685299993],
						[-76.26392998499995, -9.469232726999962],
						[-75.91598688799996, -9.469232726999962],
						[-75.91598688799996, -9.83779685299993],
						[-76.26392998499995, -9.83779685299993],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1008',
			nombprov: 'PACHITEA',
			iddist: '100802',
			nombdist: 'CHAGLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94664398499998, -10.02723822799993],
						[-75.94664398499998, -9.39098822799997],
						[-75.59227335999998, -9.39098822799997],
						[-75.59227335999998, -10.02723822799993],
						[-75.94664398499998, -10.02723822799993],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250103',
			nombdist: 'IPARIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.70942010899995, -10.093853477999971],
						[-74.70942010899995, -8.776133226999946],
						[-73.06659235699993, -8.776133226999946],
						[-73.06659235699993, -10.093853477999971],
						[-74.70942010899995, -10.093853477999971],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190308',
			nombdist: 'CONSTITUCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.31063860999996, -10.099271227999964],
						[-75.31063860999996, -9.445704476999936],
						[-74.41098885899999, -9.445704476999936],
						[-74.41098885899999, -10.099271227999964],
						[-75.31063860999996, -10.099271227999964],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1009',
			nombprov: 'PUERTO INCA',
			iddist: '100905',
			nombdist: 'YUYAPICHIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.33108598499996, -9.864063726999973],
						[-75.33108598499996, -9.389939351999942],
						[-74.67596148399997, -9.389939351999942],
						[-74.67596148399997, -9.864063726999973],
						[-75.33108598499996, -9.864063726999973],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2105',
			nombprov: 'EL COLLAO',
			iddist: '210501',
			nombdist: 'ILAVE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.88446947999995, -16.512988233999977],
						[-69.88446947999995, -15.956399357999942],
						[-69.44759372899995, -15.956399357999942],
						[-69.44759372899995, -16.512988233999977],
						[-69.88446947999995, -16.512988233999977],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220704',
			nombdist: 'PILLUANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.32213673599995, -6.830662974999939],
						[-76.32213673599995, -6.692069099999969],
						[-76.20996423499997, -6.692069099999969],
						[-76.20996423499997, -6.830662974999939],
						[-76.32213673599995, -6.830662974999939],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010103',
			nombdist: 'BALSAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.03815423699996, -6.913963099999933],
						[-78.03815423699996, -6.689789098999938],
						[-77.87170736199994, -6.689789098999938],
						[-77.87170736199994, -6.913963099999933],
						[-78.03815423699996, -6.913963099999933],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140110',
			nombdist: 'OYOTUN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.44063223899997, -6.885964849999937],
						[-79.44063223899997, -6.671405974999971],
						[-79.12084773799995, -6.671405974999971],
						[-79.12084773799995, -6.885964849999937],
						[-79.44063223899997, -6.885964849999937],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220710',
			nombdist: 'TRES UNIDOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.25188473599997, -6.932244099999934],
						[-76.25188473599997, -6.687993099999972],
						[-76.01051173499997, -6.687993099999972],
						[-76.01051173499997, -6.932244099999934],
						[-76.25188473599997, -6.932244099999934],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060415',
			nombdist: 'QUEROCOTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.21083411299998, -6.445734349999952],
						[-79.21083411299998, -6.268585973999961],
						[-78.95774423799998, -6.268585973999961],
						[-78.95774423799998, -6.445734349999952],
						[-79.21083411299998, -6.445734349999952],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060601',
			nombdist: 'CUTERVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.99520898799994, -6.550066348999962],
						[-78.99520898799994, -6.266568348999954],
						[-78.71100248799996, -6.266568348999954],
						[-78.71100248799996, -6.550066348999962],
						[-78.99520898799994, -6.550066348999962],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140111',
			nombdist: 'PICSI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.82948048899993, -6.752331724999976],
						[-79.82948048899993, -6.679587849999962],
						[-79.71308611399996, -6.679587849999962],
						[-79.71308611399996, -6.752331724999976],
						[-79.82948048899993, -6.752331724999976],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2203',
			nombprov: 'EL DORADO',
			iddist: '220303',
			nombdist: 'SAN MARTIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.97181261099996, -6.553408224999942],
						[-76.97181261099996, -6.264608598999928],
						[-76.66936523599998, -6.264608598999928],
						[-76.66936523599998, -6.553408224999942],
						[-76.97181261099996, -6.553408224999942],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010515',
			nombdist: 'PROVIDENCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.37008911299995, -6.370978349999973],
						[-78.37008911299995, -6.260199223999962],
						[-78.22985948799999, -6.260199223999962],
						[-78.22985948799999, -6.370978349999973],
						[-78.37008911299995, -6.370978349999973],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010603',
			nombdist: 'COCHAMAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.75226323699997, -6.457168224999975],
						[-77.75226323699997, -6.280755973999931],
						[-77.55202536199994, -6.280755973999931],
						[-77.55202536199994, -6.457168224999975],
						[-77.75226323699997, -6.457168224999975],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090411',
			nombdist: 'SANTA ANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.25657048499994, -13.254887605999954],
						[-75.25657048499994, -12.914190979999944],
						[-74.98895498399997, -12.914190979999944],
						[-74.98895498399997, -13.254887605999954],
						[-75.25657048499994, -13.254887605999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150705',
			nombdist: 'CHICLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.32511261099995, -11.79298010499997],
						[-76.32511261099995, -11.553800728999931],
						[-76.17953511099995, -11.553800728999931],
						[-76.17953511099995, -11.79298010499997],
						[-76.32511261099995, -11.79298010499997],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140120',
			nombdist: 'TUMAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.75379848899996, -6.867811099999926],
						[-79.75379848899996, -6.67820222499995],
						[-79.64354511399995, -6.67820222499995],
						[-79.64354511399995, -6.867811099999926],
						[-79.75379848899996, -6.867811099999926],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220702',
			nombdist: 'BUENOS AIRES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.52619886099995, -6.815896724999959],
						[-76.52619886099995, -6.677917473999969],
						[-76.27497636099997, -6.677917473999969],
						[-76.27497636099997, -6.815896724999959],
						[-76.52619886099995, -6.815896724999959],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060304',
			nombdist: 'HUASMIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.45463261299994, -6.994394475999968],
						[-78.45463261299994, -6.677777223999954],
						[-78.19626623799996, -6.677777223999954],
						[-78.19626623799996, -6.994394475999968],
						[-78.45463261299994, -6.994394475999968],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010504',
			nombdist: 'COLCAMAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.08837111199995, -6.381596099999968],
						[-78.08837111199995, -6.256808599999942],
						[-77.93137111199997, -6.256808599999942],
						[-77.93137111199997, -6.381596099999968],
						[-78.08837111199995, -6.381596099999968],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021016',
			nombdist: 'UCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.96978323599996, -9.227382851999948],
						[-76.96978323599996, -9.135400101999949],
						[-76.87898886099998, -9.135400101999949],
						[-76.87898886099998, -9.227382851999948],
						[-76.96978323599996, -9.227382851999948],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100505',
			nombdist: 'JIRCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.74432036099995, -9.29838085199998],
						[-76.74432036099995, -9.13312297699997],
						[-76.53510348599997, -9.13312297699997],
						[-76.53510348599997, -9.29838085199998],
						[-76.74432036099995, -9.29838085199998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060416',
			nombdist: 'SAN JUAN DE LICUPIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.32707798899997, -6.600201223999932],
						[-79.32707798899997, -6.354360349999979],
						[-79.17873236299994, -6.354360349999979],
						[-79.17873236299994, -6.600201223999932],
						[-79.32707798899997, -6.600201223999932],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120601',
			nombdist: 'SATIPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.91105998399996, -11.302932728999963],
						[-74.91105998399996, -11.005549102999964],
						[-74.38006998299994, -11.005549102999964],
						[-74.38006998299994, -11.302932728999963],
						[-74.91105998399996, -11.302932728999963],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022003',
			nombdist: 'MANCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.72089761199999, -9.246450727999957],
						[-77.72089761199999, -9.131993851999937],
						[-77.58881698699997, -9.131993851999937],
						[-77.58881698699997, -9.246450727999957],
						[-77.72089761199999, -9.246450727999957],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090507',
			nombdist: 'PAUCARBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.59967160899998, -12.643183479999948],
						[-74.59967160899998, -12.50849022999995],
						[-74.45762898399994, -12.50849022999995],
						[-74.45762898399994, -12.643183479999948],
						[-74.59967160899998, -12.643183479999948],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090503',
			nombdist: 'CHINCHIHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.63864748399999, -12.541162104999955],
						[-74.63864748399999, -12.359906229999979],
						[-74.50715835899996, -12.359906229999979],
						[-74.50715835899996, -12.541162104999955],
						[-74.63864748399999, -12.541162104999955],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022006',
			nombdist: 'RANRAHIRCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.73630636199994, -9.184218726999973],
						[-77.73630636199994, -9.12813085199997],
						[-77.64809673699995, -9.12813085199997],
						[-77.64809673699995, -9.184218726999973],
						[-77.73630636199994, -9.184218726999973],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021006',
			nombdist: 'HUACCHIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.84949586199997, -9.263475102999962],
						[-76.84949586199997, -9.12262497699993],
						[-76.75686911099996, -9.12262497699993],
						[-76.75686911099996, -9.263475102999962],
						[-76.84949586199997, -9.263475102999962],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090705',
			nombdist: 'COLCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.81592223399997, -12.49303195999994],
						[-74.81592223399997, -12.28513001899995],
						[-74.58677473399996, -12.28513001899995],
						[-74.58677473399996, -12.49303195999994],
						[-74.81592223399997, -12.49303195999994],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021008',
			nombdist: 'HUANTAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.32619548599996, -9.518324352999969],
						[-77.32619548599996, -9.411984976999975],
						[-77.14107036099995, -9.411984976999975],
						[-77.14107036099995, -9.518324352999969],
						[-77.32619548599996, -9.518324352999969],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2502',
			nombprov: 'ATALAYA',
			iddist: '250204',
			nombdist: 'YURUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.27658010799996, -10.366138602999968],
						[-73.27658010799996, -9.411396477999972],
						[-72.13593535599995, -9.411396477999972],
						[-72.13593535599995, -10.366138602999968],
						[-73.27658010799996, -10.366138602999968],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			iddist: '020304',
			nombdist: 'CHINGAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.06740111099998, -9.179531226999927],
						[-77.06740111099998, -9.111037101999955],
						[-76.94181048599995, -9.111037101999955],
						[-76.94181048599995, -9.179531226999927],
						[-77.06740111099998, -9.179531226999927],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190113',
			nombdist: 'YANACANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.26651998599993, -10.756677727999943],
						[-76.26651998599993, -10.512507852999931],
						[-76.13323998499999, -10.512507852999931],
						[-76.13323998499999, -10.756677727999943],
						[-76.26651998599993, -10.756677727999943],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190208',
			nombdist: 'VILCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.50068698599995, -10.605456978999939],
						[-76.50068698599995, -10.463009978999935],
						[-76.39728323599996, -10.463009978999935],
						[-76.39728323599996, -10.605456978999939],
						[-76.50068698599995, -10.605456978999939],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1503',
			nombprov: 'CAJATAMBO',
			iddist: '150304',
			nombdist: 'HUANCAPON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.18880861099996, -10.585632852999936],
						[-77.18880861099996, -10.462539102999926],
						[-77.02602923599994, -10.462539102999926],
						[-77.02602923599994, -10.585632852999936],
						[-77.18880861099996, -10.585632852999936],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190203',
			nombdist: 'GOYLLARISQUIZGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.42679211099994, -10.519591853999941],
						[-76.42679211099994, -10.456398477999926],
						[-76.38111273599998, -10.456398477999926],
						[-76.38111273599998, -10.519591853999941],
						[-76.42679211099994, -10.519591853999941],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060812',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.70749111299995, -5.520032848999961],
						[-78.70749111299995, -5.324943598999937],
						[-78.51128036299997, -5.324943598999937],
						[-78.51128036299997, -5.520032848999961],
						[-78.70749111299995, -5.520032848999961],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010514',
			nombdist: 'PISUQUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.20625198699997, -6.565469724999957],
						[-78.20625198699997, -6.37497634999994],
						[-77.99095511199994, -6.37497634999994],
						[-77.99095511199994, -6.565469724999957],
						[-78.20625198699997, -6.565469724999957],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090510',
			nombdist: 'PACHAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.53248823399997, -12.580117230999974],
						[-74.53248823399997, -12.443769980999946],
						[-74.39716998399996, -12.443769980999946],
						[-74.39716998399996, -12.580117230999974],
						[-74.53248823399997, -12.580117230999974],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080706',
			nombdist: 'LLUSCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.40198373199996, -14.556316356999957],
						[-72.40198373199996, -14.30801373199995],
						[-72.08582998099996, -14.30801373199995],
						[-72.08582998099996, -14.556316356999957],
						[-72.40198373199996, -14.556316356999957],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210213',
			nombdist: 'SAN JUAN DE SALINAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.18617947999996, -15.062005607999936],
						[-70.18617947999996, -14.931642857999975],
						[-70.05962910499994, -14.931642857999975],
						[-70.05962910499994, -15.062005607999936],
						[-70.18617947999996, -15.062005607999936],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220509',
			nombdist: 'SHANAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.60266086099995, -6.439601599999946],
						[-76.60266086099995, -6.372979974999964],
						[-76.54612036099996, -6.372979974999964],
						[-76.54612036099996, -6.439601599999946],
						[-76.60266086099995, -6.439601599999946],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140306',
			nombdist: 'MORROPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.62713286499996, -6.651437474999966],
						[-80.62713286499996, -6.371869099999969],
						[-79.90110536399999, -6.371869099999969],
						[-79.90110536399999, -6.651437474999966],
						[-80.62713286499996, -6.651437474999966],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			iddist: '140205',
			nombdist: 'PITIPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.82997848899998, -6.590710973999933],
						[-79.82997848899998, -6.371586099999945],
						[-79.42215561299997, -6.371586099999945],
						[-79.42215561299997, -6.590710973999933],
						[-79.82997848899998, -6.590710973999933],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060418',
			nombdist: 'TOCMOCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.45348986299996, -6.569181599999979],
						[-79.45348986299996, -6.369490224999936],
						[-79.29720048799999, -6.369490224999936],
						[-79.29720048799999, -6.569181599999979],
						[-79.45348986299996, -6.569181599999979],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220909',
			nombdist: 'LA BANDA DE SHILCAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.37087998499999, -6.570709974999943],
						[-76.37087998499999, -6.364468723999948],
						[-76.14061923499997, -6.364468723999948],
						[-76.14061923499997, -6.570709974999943],
						[-76.37087998499999, -6.570709974999943],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210806',
			nombdist: 'NUÑOA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.98603598099999, -14.680085856999938],
						[-70.98603598099999, -14.074739355999952],
						[-70.40473522999997, -14.074739355999952],
						[-70.40473522999997, -14.680085856999938],
						[-70.98603598099999, -14.680085856999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020102',
			nombdist: 'COCHABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.93353123699995, -9.523473101999969],
						[-77.93353123699995, -9.402726601999973],
						[-77.77390136199995, -9.402726601999973],
						[-77.77390136199995, -9.523473101999969],
						[-77.93353123699995, -9.523473101999969],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0208',
			nombprov: 'CASMA',
			iddist: '020804',
			nombdist: 'YAUTAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.15715361199995, -9.621022976999939],
						[-78.15715361199995, -9.394906227999968],
						[-77.90099611199997, -9.394906227999968],
						[-77.90099611199997, -9.621022976999939],
						[-78.15715361199995, -9.621022976999939],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020106',
			nombdist: 'JANGAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.65531298699995, -9.494570351999926],
						[-77.65531298699995, -9.392188601999976],
						[-77.54824611199996, -9.392188601999976],
						[-77.54824611199996, -9.494570351999926],
						[-77.65531298699995, -9.494570351999926],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0602',
			nombprov: 'CAJABAMBA',
			iddist: '060201',
			nombdist: 'CAJABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13171673799997, -7.696168850999925],
						[-78.13171673799997, -7.565045350999981],
						[-77.93195248699999, -7.565045350999981],
						[-77.93195248699999, -7.696168850999925],
						[-78.13171673799997, -7.696168850999925],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			iddist: '160603',
			nombdist: 'PADRE MARQUEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.41529748499994, -8.170540976999973],
						[-75.41529748499994, -7.562018350999949],
						[-74.51560960899997, -7.562018350999949],
						[-74.51560960899997, -8.170540976999973],
						[-75.41529748499994, -8.170540976999973],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151011',
			nombdist: 'COLONIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.97469998499997, -12.68017185499997],
						[-75.97469998499997, -12.47090997999993],
						[-75.69446673499993, -12.47090997999993],
						[-75.69446673499993, -12.68017185499997],
						[-75.97469998499997, -12.68017185499997],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090103',
			nombdist: 'ACORIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.95738873399995, -12.727437480999981],
						[-74.95738873399995, -12.463525354999945],
						[-74.68380348399995, -12.463525354999945],
						[-74.68380348399995, -12.727437480999981],
						[-74.95738873399995, -12.727437480999981],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151027',
			nombdist: 'SAN PEDRO DE PILAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.24426973499999, -12.551763230999939],
						[-76.24426973499999, -12.443549979999943],
						[-76.12720810999997, -12.443549979999943],
						[-76.12720810999997, -12.551763230999939],
						[-76.24426973499999, -12.551763230999939],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090106',
			nombdist: 'HUACHOCOLPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.04024960899994, -13.185635480999963],
						[-75.04024960899994, -12.925612730999944],
						[-74.83829298499995, -12.925612730999944],
						[-74.83829298499995, -13.185635480999963],
						[-75.04024960899994, -13.185635480999963],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080404',
			nombdist: 'LARES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.19119548099997, -13.21498635599994],
						[-72.19119548099997, -12.920826854999973],
						[-71.86179173099998, -12.920826854999973],
						[-71.86179173099998, -13.21498635599994],
						[-72.19119548099997, -13.21498635599994],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210705',
			nombdist: 'OCUVIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.99436322999998, -15.36120673299996],
						[-70.99436322999998, -15.00132035699994],
						[-70.70301247999998, -15.00132035699994],
						[-70.70301247999998, -15.36120673299996],
						[-70.99436322999998, -15.36120673299996],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2110',
			nombprov: 'SAN ANTONIO DE PUTINA',
			iddist: '211003',
			nombdist: 'PEDRO VILCA APAZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.97610547899995, -15.110800982999933],
						[-69.97610547899995, -14.925445106999973],
						[-69.84315660399994, -14.925445106999973],
						[-69.84315660399994, -15.110800982999933],
						[-69.97610547899995, -15.110800982999933],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080804',
			nombdist: 'OCORURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.23985223099999, -15.232830607999972],
						[-71.23985223099999, -14.915968731999953],
						[-71.03247997999995, -14.915968731999953],
						[-71.03247997999995, -15.232830607999972],
						[-71.23985223099999, -15.232830607999972],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210604',
			nombdist: 'INCHUPALLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.79201172999996, -15.094076232999953],
						[-69.79201172999996, -14.912711357999967],
						[-69.51084347899996, -14.912711357999967],
						[-69.51084347899996, -15.094076232999953],
						[-69.79201172999996, -15.094076232999953],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210708',
			nombdist: 'PUCARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.55256072999998, -15.226260107999963],
						[-70.55256072999998, -14.912378606999937],
						[-70.34432297999996, -14.912378606999937],
						[-70.34432297999996, -15.226260107999963],
						[-70.55256072999998, -15.226260107999963],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080704',
			nombdist: 'COLQUEMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.11567598199997, -14.397623731999943],
						[-72.11567598199997, -14.08989048199993],
						[-71.91251573199997, -14.08989048199993],
						[-71.91251573199997, -14.397623731999943],
						[-72.11567598199997, -14.397623731999943],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030710',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.68955335699997, -14.158110356999941],
						[-72.68955335699997, -14.085728481999979],
						[-72.63499810699994, -14.085728481999979],
						[-72.63499810699994, -14.158110356999941],
						[-72.68955335699997, -14.158110356999941],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080508',
			nombdist: 'TUPAC AMARU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.59581835599994, -14.217030106999971],
						[-71.59581835599994, -14.083456731999945],
						[-71.45290935599996, -14.083456731999945],
						[-71.45290935599996, -14.217030106999971],
						[-71.59581835599994, -14.217030106999971],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030402',
			nombdist: 'CAPAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.41147460799993, -14.159999606999975],
						[-73.41147460799993, -14.067382730999952],
						[-73.28768560799995, -14.067382730999952],
						[-73.28768560799995, -14.159999606999975],
						[-73.41147460799993, -14.159999606999975],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210302',
			nombdist: 'AJOYANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.33523135499996, -14.309731106999948],
						[-70.33523135499996, -14.057435230999943],
						[-70.10230260399999, -14.057435230999943],
						[-70.10230260399999, -14.309731106999948],
						[-70.33523135499996, -14.309731106999948],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080606',
			nombdist: 'SAN PABLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.37258673099996, -14.289386731999969],
						[-71.37258673099996, -14.056168981999974],
						[-70.78981835599996, -14.056168981999974],
						[-70.78981835599996, -14.289386731999969],
						[-71.37258673099996, -14.289386731999969],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1104',
			nombprov: 'PALPA',
			iddist: '110401',
			nombdist: 'PALPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.22275973499995, -14.560210981999944],
						[-75.22275973499995, -14.415908231999936],
						[-75.05299410999999, -14.415908231999936],
						[-75.05299410999999, -14.560210981999944],
						[-75.22275973499995, -14.560210981999944],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030712',
			nombdist: 'VILCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.65668023199999, -14.093544856999927],
						[-72.65668023199999, -14.062998106999942],
						[-72.61654298299999, -14.062998106999942],
						[-72.61654298299999, -14.093544856999927],
						[-72.65668023199999, -14.093544856999927],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			iddist: '030506',
			nombdist: 'CHALLHUAHUACHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.47975648199997, -14.30396335699993],
						[-72.47975648199997, -14.052433855999936],
						[-72.14407948199994, -14.052433855999936],
						[-72.14407948199994, -14.30396335699993],
						[-72.47975648199997, -14.30396335699993],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120116',
			nombdist: 'HUACRAPUQUIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24169998499997, -12.210595229999967],
						[-75.24169998499997, -12.156548854999926],
						[-75.16570148399995, -12.156548854999926],
						[-75.16570148399995, -12.210595229999967],
						[-75.24169998499997, -12.210595229999967],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081301',
			nombdist: 'URUBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.21894348199999, -13.313142605999928],
						[-72.21894348199999, -13.174951230999966],
						[-72.05256135699995, -13.174951230999966],
						[-72.05256135699995, -13.313142605999928],
						[-72.21894348199999, -13.313142605999928],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030706',
			nombdist: 'MICAELA BASTIDAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.64330273199994, -14.208338481999931],
						[-72.64330273199994, -14.062367231999929],
						[-72.48410185699998, -14.062367231999929],
						[-72.48410185699998, -14.208338481999931],
						[-72.64330273199994, -14.208338481999931],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080204',
			nombdist: 'MOSOC LLACTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.54631673099993, -14.138353105999954],
						[-71.54631673099993, -14.051212856999939],
						[-71.43924810599998, -14.051212856999939],
						[-71.43924810599998, -14.138353105999954],
						[-71.54631673099993, -14.138353105999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150511',
			nombdist: 'PACARAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.18497060999994, -13.004098604999967],
						[-76.18497060999994, -12.786571479999964],
						[-75.95743098599996, -12.786571479999964],
						[-75.95743098599996, -13.004098604999967],
						[-76.18497060999994, -13.004098604999967],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090204',
			nombdist: 'CAJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.51116010899995, -12.966863230999934],
						[-74.51116010899995, -12.78582223099994],
						[-74.44065523399996, -12.78582223099994],
						[-74.44065523399996, -12.966863230999934],
						[-74.51116010899995, -12.966863230999934],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090405',
			nombdist: 'CHUPAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.63932973499993, -13.057066730999964],
						[-75.63932973499993, -12.774177480999981],
						[-75.37130885999994, -12.774177480999981],
						[-75.37130885999994, -13.057066730999964],
						[-75.63932973499993, -13.057066730999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150119',
			nombdist: 'LURIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.93986323599995, -12.311703104999935],
						[-76.93986323599995, -12.164414104999935],
						[-76.66203123599996, -12.164414104999935],
						[-76.66203123599996, -12.311703104999935],
						[-76.93986323599995, -12.311703104999935],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030211',
			nombdist: 'POMACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.61557623299996, -14.145771356999944],
						[-73.61557623299996, -14.049751731999947],
						[-73.37710985799998, -14.049751731999947],
						[-73.37710985799998, -14.145771356999944],
						[-73.61557623299996, -14.145771356999944],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090711',
			nombdist: 'PAZOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.10522148399997, -12.341560104999928],
						[-75.10522148399997, -12.102497229999926],
						[-74.94252535899994, -12.102497229999926],
						[-74.94252535899994, -12.341560104999928],
						[-75.10522148399997, -12.341560104999928],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090207',
			nombdist: 'POMACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.55124710899997, -12.922642604999965],
						[-74.55124710899997, -12.798806605999971],
						[-74.48884523399994, -12.798806605999971],
						[-74.48884523399994, -12.922642604999965],
						[-74.55124710899997, -12.922642604999965],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150510',
			nombdist: 'NUEVO IMPERIAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.35744998599995, -13.102331480999965],
						[-76.35744998599995, -12.787945355999966],
						[-76.17726948499995, -12.787945355999966],
						[-76.17726948499995, -13.102331480999965],
						[-76.35744998599995, -13.102331480999965],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110204',
			nombdist: 'CHINCHA BAJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.18932623499995, -13.553537106999954],
						[-76.18932623499995, -13.437435605999951],
						[-76.08279486099997, -13.437435605999951],
						[-76.08279486099997, -13.553537106999954],
						[-76.18932623499995, -13.553537106999954],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090404',
			nombdist: 'CAPILLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.80965798499994, -13.439670106999927],
						[-75.80965798499994, -13.231089855999926],
						[-75.45021873499996, -13.231089855999926],
						[-75.45021873499996, -13.439670106999927],
						[-75.80965798499994, -13.439670106999927],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110201',
			nombdist: 'CHINCHA ALTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.14453510999994, -13.442343730999937],
						[-76.14453510999994, -13.212728480999942],
						[-75.94663285999997, -13.212728480999942],
						[-75.94663285999997, -13.442343730999937],
						[-76.14453510999994, -13.442343730999937],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210304',
			nombdist: 'COASA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.20983435499994, -14.121962606999944],
						[-70.20983435499994, -13.201144480999972],
						[-69.63228510499994, -13.201144480999972],
						[-69.63228510499994, -14.121962606999944],
						[-70.20983435499994, -14.121962606999944],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090406',
			nombdist: 'COCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.41215423499995, -13.356847480999932],
						[-75.41215423499995, -13.19126760599994],
						[-75.32718910999995, -13.19126760599994],
						[-75.32718910999995, -13.356847480999932],
						[-75.41215423499995, -13.356847480999932],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110206',
			nombdist: 'GROCIO PRADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.24479285999996, -13.416314480999972],
						[-76.24479285999996, -13.165134730999966],
						[-76.10027735999995, -13.165134730999966],
						[-76.10027735999995, -13.416314480999972],
						[-76.24479285999996, -13.416314480999972],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090410',
			nombdist: 'SAN JUAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.79844923499996, -13.373775355999953],
						[-75.79844923499996, -13.156928855999979],
						[-75.61037298499997, -13.156928855999979],
						[-75.61037298499997, -13.373775355999953],
						[-75.79844923499996, -13.373775355999953],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090409',
			nombdist: 'MOLLEPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.50324385999994, -13.43216010599997],
						[-75.50324385999994, -13.14607498099997],
						[-75.35855473399994, -13.14607498099997],
						[-75.35855473399994, -13.43216010599997],
						[-75.50324385999994, -13.43216010599997],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060607',
			nombdist: 'QUEROCOTILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.27466461299997, -6.32938597499998],
						[-79.27466461299997, -6.054669348999937],
						[-78.89732611299996, -6.054669348999937],
						[-78.89732611299996, -6.32938597499998],
						[-79.27466461299997, -6.32938597499998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060411',
			nombdist: 'LLAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.36254461399994, -6.680265599999927],
						[-79.36254461399994, -6.39566259999998],
						[-79.02384961299998, -6.39566259999998],
						[-79.02384961299998, -6.680265599999927],
						[-79.36254461399994, -6.680265599999927],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220507',
			nombdist: 'RUMISAPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.50440236099996, -6.487156224999978],
						[-76.50440236099996, -6.393790974999945],
						[-76.44361173499993, -6.393790974999945],
						[-76.44361173499993, -6.487156224999978],
						[-76.50440236099996, -6.487156224999978],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150516',
			nombdist: 'ZUÑIGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.09723248599994, -12.922460980999972],
						[-76.09723248599994, -12.75635848099995],
						[-75.94078123499997, -12.75635848099995],
						[-75.94078123499997, -12.922460980999972],
						[-76.09723248599994, -12.922460980999972],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010501',
			nombdist: 'LAMUD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.02356098699994, -6.160974473999943],
						[-78.02356098699994, -6.060790973999929],
						[-77.89082223699995, -6.060790973999929],
						[-77.89082223699995, -6.160974473999943],
						[-78.02356098699994, -6.160974473999943],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060303',
			nombdist: 'CORTEGANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.36851811299994, -6.583957099999964],
						[-78.36851811299994, -6.388961474999974],
						[-78.17651998699995, -6.388961474999974],
						[-78.17651998699995, -6.583957099999964],
						[-78.36851811299994, -6.583957099999964],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060403',
			nombdist: 'CHADIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.44933011199998, -6.483792849999929],
						[-78.44933011199998, -6.384747348999952],
						[-78.36545511299994, -6.384747348999952],
						[-78.36545511299994, -6.483792849999929],
						[-78.44933011199998, -6.483792849999929],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190304',
			nombdist: 'PALCAZU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.51335773499994, -10.57775197799998],
						[-75.51335773499994, -9.870609852999962],
						[-75.00221298499997, -9.870609852999962],
						[-75.00221298499997, -10.57775197799998],
						[-75.51335773499994, -10.57775197799998],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090203',
			nombdist: 'ANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.72983598399998, -12.899874980999982],
						[-74.72983598399998, -12.754132355999957],
						[-74.61245123399993, -12.754132355999957],
						[-74.61245123399993, -12.899874980999982],
						[-74.72983598399998, -12.899874980999982],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090201',
			nombdist: 'ACOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.61890235899995, -12.914370980999934],
						[-74.61890235899995, -12.745234480999954],
						[-74.49719710899996, -12.745234480999954],
						[-74.49719710899996, -12.914370980999934],
						[-74.61890235899995, -12.914370980999934],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080901',
			nombdist: 'SANTA ANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.86425785699998, -12.988366355999972],
						[-72.86425785699998, -12.733115854999937],
						[-72.62220560699996, -12.733115854999937],
						[-72.62220560699996, -12.988366355999972],
						[-72.86425785699998, -12.988366355999972],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060404',
			nombdist: 'CHIGUIRIP',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.74717698799998, -6.465716848999932],
						[-78.74717698799998, -6.384652348999964],
						[-78.66604823799997, -6.384652348999964],
						[-78.66604823799997, -6.465716848999932],
						[-78.74717698799998, -6.465716848999932],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2206',
			nombprov: 'MARISCAL CACERES',
			iddist: '220603',
			nombdist: 'HUICUNGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.76474898699996, -8.064925725999956],
						[-77.76474898699996, -6.382130974999939],
						[-76.70804598599995, -6.382130974999939],
						[-76.70804598599995, -8.064925725999956],
						[-77.76474898699996, -8.064925725999956],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2203',
			nombprov: 'EL DORADO',
			iddist: '220304',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73661323599998, -6.810219849999953],
						[-76.73661323599998, -6.591220724999971],
						[-76.52253148599993, -6.591220724999971],
						[-76.52253148599993, -6.810219849999953],
						[-76.73661323599998, -6.810219849999953],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150512',
			nombdist: 'QUILMANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.44678261099995, -13.010229980999952],
						[-76.44678261099995, -12.725254979999931],
						[-76.24201760999995, -12.725254979999931],
						[-76.24201760999995, -13.010229980999952],
						[-76.44678261099995, -13.010229980999952],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151019',
			nombdist: 'LINCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.78703323499997, -12.87699423099997],
						[-75.78703323499997, -12.725216730999932],
						[-75.50749998499998, -12.725216730999932],
						[-75.50749998499998, -12.87699423099997],
						[-75.78703323499997, -12.87699423099997],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090118',
			nombdist: 'ASCENSION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.38097535999998, -12.936554979999926],
						[-75.38097535999998, -12.71549235599997],
						[-74.97303710899996, -12.71549235599997],
						[-74.97303710899996, -12.936554979999926],
						[-75.38097535999998, -12.936554979999926],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140301',
			nombdist: 'LAMBAYEQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.11174611499996, -6.755434349999973],
						[-80.11174611499996, -6.589843598999948],
						[-79.78142973899998, -6.589843598999948],
						[-79.78142973899998, -6.755434349999973],
						[-80.11174611499996, -6.755434349999973],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220914',
			nombdist: 'SHAPAJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.29583835999995, -6.671394474999943],
						[-76.29583835999995, -6.486257849999959],
						[-76.11160185999995, -6.486257849999959],
						[-76.11160185999995, -6.671394474999943],
						[-76.29583835999995, -6.671394474999943],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020611',
			nombdist: 'YUNGAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.68154261199999, -9.452799476999928],
						[-77.68154261199999, -9.361849101999951],
						[-77.58087473599994, -9.361849101999951],
						[-77.58087473599994, -9.452799476999928],
						[-77.68154261199999, -9.452799476999928],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150727',
			nombdist: 'SANTA CRUZ DE COCACHACRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.59384998599995, -11.961200979999944],
						[-76.59384998599995, -11.89348010499998],
						[-76.53002360999994, -11.89348010499998],
						[-76.53002360999994, -11.961200979999944],
						[-76.59384998599995, -11.961200979999944],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120402',
			nombdist: 'ACOLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.62279123499997, -11.779885729999933],
						[-75.62279123499997, -11.577163729999938],
						[-75.51279485999999, -11.577163729999938],
						[-75.51279485999999, -11.779885729999933],
						[-75.62279123499997, -11.779885729999933],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150102',
			nombdist: 'ANCON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.19880273599995, -11.821102039999971],
						[-77.19880273599995, -11.57240696499997],
						[-77.00476011899997, -11.57240696499997],
						[-77.00476011899997, -11.821102039999971],
						[-77.19880273599995, -11.821102039999971],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100110',
			nombdist: 'YARUMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.48736998599998, -10.006667977999939],
						[-76.48736998599998, -9.917783226999973],
						[-76.37628860999996, -9.917783226999973],
						[-76.37628860999996, -10.006667977999939],
						[-76.48736998599998, -10.006667977999939],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150508',
			nombdist: 'LUNAHUANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.25059998499995, -13.13814010599998],
						[-76.25059998499995, -12.885936854999954],
						[-75.96057810999997, -12.885936854999954],
						[-75.96057810999997, -13.13814010599998],
						[-76.25059998499995, -13.13814010599998],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210703',
			nombdist: 'CALAPUJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.33667897999999, -15.376986648999946],
						[-70.33667897999999, -15.25128910799998],
						[-70.14808597999996, -15.25128910799998],
						[-70.14808597999996, -15.376986648999946],
						[-70.33667897999999, -15.376986648999946],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100102',
			nombdist: 'AMARILIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.25196348599997, -10.017464852999979],
						[-76.25196348599997, -9.884824227999957],
						[-76.11536323599995, -9.884824227999957],
						[-76.11536323599995, -10.017464852999979],
						[-76.25196348599997, -10.017464852999979],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101108',
			nombdist: 'CHORAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.63575198599995, -9.959232477999933],
						[-76.63575198599995, -9.867601602999969],
						[-76.51865036099997, -9.867601602999969],
						[-76.51865036099997, -9.959232477999933],
						[-76.63575198599995, -9.959232477999933],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090602',
			nombdist: 'AYAVI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.51397460999993, -13.81455660599994],
						[-75.51397460999993, -13.634522481999966],
						[-75.28311260999999, -13.634522481999966],
						[-75.28311260999999, -13.81455660599994],
						[-75.51397460999993, -13.81455660599994],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101105',
			nombdist: 'JACAS CHICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.54793948599996, -9.913676477999957],
						[-76.54793948599996, -9.835448352999947],
						[-76.46506636099997, -9.835448352999947],
						[-76.46506636099997, -9.913676477999957],
						[-76.54793948599996, -9.913676477999957],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100101',
			nombdist: 'HUANUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.40928948599998, -9.96162322799995],
						[-76.40928948599998, -9.797839977999956],
						[-76.17983198599995, -9.797839977999956],
						[-76.17983198599995, -9.96162322799995],
						[-76.40928948599998, -9.96162322799995],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210307',
			nombdist: 'ITUATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.32514722999997, -14.098086231999957],
						[-70.32514722999997, -13.615599230999976],
						[-69.84929385399994, -13.615599230999976],
						[-69.84929385399994, -14.098086231999957],
						[-70.32514722999997, -14.098086231999957],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110503',
			nombdist: 'HUMAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.08544923499994, -13.856458981999936],
						[-76.08544923499994, -13.61142973099993],
						[-75.56811523499994, -13.61142973099993],
						[-75.56811523499994, -13.856458981999936],
						[-76.08544923499994, -13.856458981999936],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081005',
			nombdist: 'HUANOQUITE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.23285623199996, -13.783513730999971],
						[-72.23285623199996, -13.608860105999952],
						[-71.94828235599994, -13.608860105999952],
						[-71.94828235599994, -13.783513730999971],
						[-72.23285623199996, -13.783513730999971],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120130',
			nombdist: 'SAN JERONIMO DE TUNAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.31277535999999, -11.975665478999929],
						[-75.31277535999999, -11.892064478999941],
						[-75.26543535999997, -11.892064478999941],
						[-75.26543535999997, -11.975665478999929],
						[-75.31277535999999, -11.975665478999929],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090306',
			nombdist: 'CONGALLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.63483785899996, -13.063483729999973],
						[-74.63483785899996, -12.893527355999936],
						[-74.44624410899996, -12.893527355999936],
						[-74.44624410899996, -13.063483729999973],
						[-74.63483785899996, -13.063483729999973],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090308',
			nombdist: 'HUAYLLAY GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.70659873399995, -12.961013230999981],
						[-74.70659873399995, -12.88186523099995],
						[-74.64095898399995, -12.88186523099995],
						[-74.64095898399995, -12.961013230999981],
						[-74.70659873399995, -12.961013230999981],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090307',
			nombdist: 'HUANCA-HUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.67062773399994, -13.062165979999975],
						[-74.67062773399994, -12.888314604999948],
						[-74.57298048399997, -12.888314604999948],
						[-74.57298048399997, -13.062165979999975],
						[-74.67062773399994, -13.062165979999975],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151015',
			nombdist: 'HUANGASCAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.86462998599995, -12.989093730999969],
						[-75.86462998599995, -12.881589979999944],
						[-75.78502998499994, -12.881589979999944],
						[-75.78502998499994, -12.989093730999969],
						[-75.86462998599995, -12.989093730999969],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090401',
			nombdist: 'CASTROVIRREYNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.43380560999998, -13.455879730999982],
						[-75.43380560999998, -12.879239980999955],
						[-75.15603598499996, -12.879239980999955],
						[-75.15603598499996, -13.455879730999982],
						[-75.43380560999998, -13.455879730999982],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150504',
			nombdist: 'CERRO AZUL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51646286099998, -13.055798854999978],
						[-76.51646286099998, -12.879182855999943],
						[-76.42720323599997, -12.879182855999943],
						[-76.42720323599997, -13.055798854999978],
						[-76.51646286099998, -13.055798854999978],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081001',
			nombdist: 'PARURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.92156023199993, -13.82339260699996],
						[-71.92156023199993, -13.637757231999956],
						[-71.78976173099994, -13.637757231999956],
						[-71.78976173099994, -13.82339260699996],
						[-71.92156023199993, -13.82339260699996],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030201',
			nombdist: 'ANDAHUAYLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.43356023299998, -13.92655548199997],
						[-73.43356023299998, -13.605587106999963],
						[-73.31378896999996, -13.605587106999963],
						[-73.31378896999996, -13.92655548199997],
						[-73.43356023299998, -13.92655548199997],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030213',
			nombdist: 'SAN JERONIMO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.40329685799998, -13.82830323199994],
						[-73.40329685799998, -13.605063730999973],
						[-73.18275698299993, -13.605063730999973],
						[-73.18275698299993, -13.82830323199994],
						[-73.40329685799998, -13.82830323199994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150729',
			nombdist: 'SANTIAGO DE ANCHUCAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.25603998499997, -12.108899979999933],
						[-76.25603998499997, -11.973169979999966],
						[-76.13118010999995, -11.973169979999966],
						[-76.13118010999995, -12.108899979999933],
						[-76.25603998499997, -12.108899979999933],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120208',
			nombdist: 'MANZANARES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.39992573499995, -12.02777161299997],
						[-75.39992573499995, -11.972697228999948],
						[-75.33258721999994, -11.972697228999948],
						[-75.33258721999994, -12.02777161299997],
						[-75.39992573499995, -12.02777161299997],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150702',
			nombdist: 'ANTIOQUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.72233873599998, -12.166070354999931],
						[-76.72233873599998, -11.948474604999944],
						[-76.44151948599995, -11.948474604999944],
						[-76.44151948599995, -12.166070354999931],
						[-76.72233873599998, -12.166070354999931],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081201',
			nombdist: 'URCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.65574610599998, -13.75910423099998],
						[-71.65574610599998, -13.597476981999932],
						[-71.52463660599994, -13.597476981999932],
						[-71.52463660599994, -13.75910423099998],
						[-71.65574610599998, -13.75910423099998],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030215',
			nombdist: 'SANTA MARIA DE CHICMO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.61500385799997, -13.736898481999958],
						[-73.61500385799997, -13.596189480999954],
						[-73.46640085799999, -13.596189480999954],
						[-73.46640085799999, -13.736898481999958],
						[-73.61500385799997, -13.736898481999958],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211201',
			nombdist: 'SANDIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.58924960399997, -14.478107731999955],
						[-69.58924960399997, -14.144251980999968],
						[-69.28477735399997, -14.144251980999968],
						[-69.28477735399997, -14.478107731999955],
						[-69.58924960399997, -14.478107731999955],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081009',
			nombdist: 'YAURISQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.99170698099994, -13.705913481999971],
						[-71.99170698099994, -13.593626480999944],
						[-71.83838298099994, -13.593626480999944],
						[-71.83838298099994, -13.705913481999971],
						[-71.99170698099994, -13.705913481999971],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120129',
			nombdist: 'SAN AGUSTIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.26679660999997, -12.03302322899998],
						[-75.26679660999997, -11.945661479999956],
						[-75.19745985999998, -11.945661479999956],
						[-75.19745985999998, -12.03302322899998],
						[-75.26679660999997, -12.03302322899998],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120117',
			nombdist: 'HUALHUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.26932998399997, -11.991586104999953],
						[-75.26932998399997, -11.941104979999977],
						[-75.21033023499996, -11.941104979999977],
						[-75.21033023499996, -11.991586104999953],
						[-75.26932998399997, -11.991586104999953],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030417',
			nombdist: 'YANACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.22222673299996, -14.293699606999951],
						[-73.22222673299996, -14.143165980999981],
						[-73.09659235699996, -14.143165980999981],
						[-73.09659235699996, -14.293699606999951],
						[-73.22222673299996, -14.293699606999951],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120213',
			nombdist: 'ORCOTUNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.38099098499998, -12.009326621999946],
						[-75.38099098499998, -11.93800310499995],
						[-75.27920110999997, -11.93800310499995],
						[-75.27920110999997, -12.009326621999946],
						[-75.38099098499998, -12.009326621999946],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120212',
			nombdist: 'NUEVE DE JULIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.32798235999996, -11.905300729999965],
						[-75.32798235999996, -11.876539979999961],
						[-75.29570998499997, -11.876539979999961],
						[-75.29570998499997, -11.905300729999965],
						[-75.32798235999996, -11.905300729999965],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211204',
			nombdist: 'PATAMBUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.73727335399997, -14.450509231999945],
						[-69.73727335399997, -14.150971480999942],
						[-69.50837497999999, -14.150971480999942],
						[-69.50837497999999, -14.450509231999945],
						[-69.73727335399997, -14.450509231999945],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030707',
			nombdist: 'PATAYPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.87961310699995, -14.29243185699994],
						[-72.87961310699995, -14.150624231999927],
						[-72.63999810699994, -14.150624231999927],
						[-72.63999810699994, -14.29243185699994],
						[-72.87961310699995, -14.29243185699994],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030410',
			nombdist: 'POCOHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.12704298299997, -14.310083606999967],
						[-73.12704298299997, -14.147173856999927],
						[-73.04172785699996, -14.147173856999927],
						[-73.04172785699996, -14.310083606999967],
						[-73.12704298299997, -14.310083606999967],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211207',
			nombdist: 'SAN JUAN DEL ORO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.21734760399994, -14.263366856999937],
						[-69.21734760399994, -14.137941105999971],
						[-68.96874547899995, -14.137941105999971],
						[-68.96874547899995, -14.263366856999937],
						[-69.21734760399994, -14.263366856999937],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110113',
			nombdist: 'TATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.71509573499998, -14.16869348199998],
						[-75.71509573499998, -14.13709760699993],
						[-75.69015423499997, -14.13709760699993],
						[-75.69015423499997, -14.16869348199998],
						[-75.71509573499998, -14.16869348199998],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110111',
			nombdist: 'SANTIAGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.86754685999995, -14.929660106999961],
						[-75.86754685999995, -14.131203106999976],
						[-75.21794923499994, -14.131203106999976],
						[-75.21794923499994, -14.929660106999961],
						[-75.86754685999995, -14.929660106999961],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030412',
			nombdist: 'SAÑAYCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.46105860799997, -14.466923731999941],
						[-73.46105860799997, -14.131011731999934],
						[-73.27245310799998, -14.131011731999934],
						[-73.27245310799998, -14.466923731999941],
						[-73.46105860799997, -14.466923731999941],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030306',
			nombdist: 'PACHACONAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.07075635799998, -14.316837981999981],
						[-73.07075635799998, -14.130414106999979],
						[-72.88491010699994, -14.130414106999979],
						[-72.88491010699994, -14.316837981999981],
						[-73.07075635799998, -14.316837981999981],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030413',
			nombdist: 'SORAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.32528923299998, -14.204580606999968],
						[-73.32528923299998, -14.128699231999974],
						[-73.23451948299999, -14.128699231999974],
						[-73.23451948299999, -14.204580606999968],
						[-73.32528923299998, -14.204580606999968],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110105',
			nombdist: 'PACHACUTEC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.69863673499998, -14.181124981999972],
						[-75.69863673499998, -14.127863231999982],
						[-75.59209760999994, -14.127863231999982],
						[-75.59209760999994, -14.181124981999972],
						[-75.69863673499998, -14.181124981999972],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080607',
			nombdist: 'SAN PEDRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.37961323099995, -14.219573731999958],
						[-71.37961323099995, -14.121861980999938],
						[-71.27594723099998, -14.121861980999938],
						[-71.27594723099998, -14.219573731999958],
						[-71.37961323099995, -14.219573731999958],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080705',
			nombdist: 'LIVITACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.83573660599995, -14.709997981999948],
						[-71.83573660599995, -14.116285106999953],
						[-71.51497223099994, -14.116285106999953],
						[-71.51497223099994, -14.709997981999948],
						[-71.83573660599995, -14.709997981999948],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			iddist: '030504',
			nombdist: 'HAQUIRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.37092860699994, -14.440689481999982],
						[-72.37092860699994, -14.108695355999942],
						[-72.05666985699997, -14.108695355999942],
						[-72.05666985699997, -14.440689481999982],
						[-72.37092860699994, -14.440689481999982],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030210',
			nombdist: 'PAMPACHIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.58662510799996, -14.544308606999948],
						[-73.58662510799996, -14.107335981999938],
						[-73.36876623299997, -14.107335981999938],
						[-73.36876623299997, -14.544308606999948],
						[-73.58662510799996, -14.544308606999948],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030302',
			nombdist: 'EL ORO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.07908160799997, -14.221042981999972],
						[-73.07908160799997, -14.10729185699995],
						[-72.97498248299996, -14.10729185699995],
						[-72.97498248299996, -14.221042981999972],
						[-73.07908160799997, -14.221042981999972],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			iddist: '120306',
			nombdist: 'VITOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.43478960999994, -11.350232478999942],
						[-75.43478960999994, -11.167795353999963],
						[-75.02465448499999, -11.167795353999963],
						[-75.02465448499999, -11.350232478999942],
						[-75.43478960999994, -11.350232478999942],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080608',
			nombdist: 'TINTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.44111023099998, -14.229900355999973],
						[-71.44111023099998, -14.106617856999947],
						[-71.34226923099999, -14.106617856999947],
						[-71.34226923099999, -14.229900355999973],
						[-71.44111023099998, -14.229900355999973],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110107',
			nombdist: 'PUEBLO NUEVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.72822073499998, -14.149525356999959],
						[-75.72822073499998, -14.103839856999969],
						[-75.62474610999999, -14.103839856999969],
						[-75.62474610999999, -14.149525356999959],
						[-75.72822073499998, -14.149525356999959],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120706',
			nombdist: 'PALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.62221485999999, -11.428937603999941],
						[-75.62221485999999, -11.224076228999934],
						[-75.40194935999995, -11.224076228999934],
						[-75.40194935999995, -11.428937603999941],
						[-75.62221485999999, -11.428937603999941],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150602',
			nombdist: 'ATAVILLOS ALTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.77753998599997, -11.35375785399998],
						[-76.77753998599997, -11.202407729999948],
						[-76.45693248499998, -11.202407729999948],
						[-76.45693248499998, -11.35375785399998],
						[-76.77753998599997, -11.35375785399998],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1703',
			nombprov: 'TAHUAMANU',
			iddist: '170302',
			nombdist: 'IBERIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.13024997999997, -11.683898479999982],
						[-70.13024997999997, -11.198359353999933],
						[-69.33657622899995, -11.198359353999933],
						[-69.33657622899995, -11.683898479999982],
						[-70.13024997999997, -11.683898479999982],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080914',
			nombdist: 'MEGANTONI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.47983135799996, -12.250949144999936],
						[-73.47983135799996, -11.212293478999982],
						[-72.23920548199999, -11.212293478999982],
						[-72.23920548199999, -12.250949144999936],
						[-73.47983135799996, -12.250949144999936],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120707',
			nombdist: 'PALCAMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.85754373499998, -11.34300972899996],
						[-75.85754373499998, -11.178914103999944],
						[-75.69816998499994, -11.178914103999944],
						[-75.69816998499994, -11.34300972899996],
						[-75.85754373499998, -11.34300972899996],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150607',
			nombdist: 'LAMPIAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.94650961099995, -11.342819979999945],
						[-76.94650961099995, -11.141701228999978],
						[-76.80345998599995, -11.141701228999978],
						[-76.80345998599995, -11.342819979999945],
						[-76.94650961099995, -11.342819979999945],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150803',
			nombdist: 'CALETA DE CARQUIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63385761199999, -11.098943353999971],
						[-77.63385761199999, -11.07722672899996],
						[-77.60873573699996, -11.07722672899996],
						[-77.60873573699996, -11.098943353999971],
						[-77.63385761199999, -11.098943353999971],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150805',
			nombdist: 'HUALMAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.62535161199997, -11.107114353999975],
						[-77.62535161199997, -11.075505728999929],
						[-77.59486736199995, -11.075505728999929],
						[-77.59486736199995, -11.107114353999975],
						[-77.62535161199997, -11.107114353999975],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120807',
			nombdist: 'SANTA BARBARA DE CARHUACAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51922661099997, -11.33258985499998],
						[-76.51922661099997, -11.07042185399996],
						[-76.16719223499996, -11.07042185399996],
						[-76.16719223499996, -11.33258985499998],
						[-76.51922661099997, -11.33258985499998],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150610',
			nombdist: 'SANTA CRUZ DE ANDAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.65590998599998, -11.22699997899997],
						[-76.65590998599998, -11.050986353999974],
						[-76.49121286099995, -11.050986353999974],
						[-76.49121286099995, -11.22699997899997],
						[-76.65590998599998, -11.22699997899997],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			iddist: '120305',
			nombdist: 'SAN RAMON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.67090660999997, -11.268875478999973],
						[-75.67090660999997, -11.04102772899995],
						[-75.12214373499995, -11.04102772899995],
						[-75.12214373499995, -11.268875478999973],
						[-75.67090660999997, -11.268875478999973],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1701',
			nombprov: 'TAMBOPATA',
			iddist: '170101',
			nombdist: 'TAMBOPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.21888468299994, -13.341306605999932],
						[-72.21888468299994, -11.033527728999957],
						[-68.65227910299996, -11.033527728999957],
						[-68.65227910299996, -13.341306605999932],
						[-72.21888468299994, -13.341306605999932],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150810',
			nombdist: 'SANTA MARIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.59817048699995, -11.169349228999977],
						[-77.59817048699995, -11.066346478999947],
						[-77.35053323599999, -11.066346478999947],
						[-77.35053323599999, -11.169349228999977],
						[-77.59817048699995, -11.169349228999977],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150612',
			nombdist: 'VEINTISIETE DE NOVIEMBRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.83680661099999, -11.273159978999956],
						[-76.83680661099999, -11.034867728999927],
						[-76.70298286099995, -11.034867728999927],
						[-76.70298286099995, -11.273159978999956],
						[-76.83680661099999, -11.273159978999956],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050404',
			nombdist: 'IGUAIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.29271598399998, -13.026988137999979],
						[-74.29271598399998, -12.927026354999953],
						[-74.14352323399999, -12.927026354999953],
						[-74.14352323399999, -13.026988137999979],
						[-74.29271598399998, -13.026988137999979],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050508',
			nombdist: 'TAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.14873235899995, -13.006730018999974],
						[-74.14873235899995, -12.83757735599994],
						[-73.88646835799995, -12.83757735599994],
						[-73.88646835799995, -13.006730018999974],
						[-74.14873235899995, -13.006730018999974],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080907',
			nombdist: 'KIMBIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.80513485799997, -12.861238319999927],
						[-73.80513485799997, -12.372047229999964],
						[-73.48171948299995, -12.372047229999964],
						[-73.48171948299995, -12.861238319999927],
						[-73.80513485799997, -12.861238319999927],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050403',
			nombdist: 'HUAMANGUILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.24304626599996, -13.051245695999967],
						[-74.24304626599996, -12.914444105999962],
						[-74.10399448299995, -12.914444105999962],
						[-74.10399448299995, -13.051245695999967],
						[-74.24304626599996, -13.051245695999967],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080910',
			nombdist: 'PICHARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.98110210799996, -12.575269354999932],
						[-73.98110210799996, -12.220118354999954],
						[-73.64448385799994, -12.220118354999954],
						[-73.64448385799994, -12.575269354999932],
						[-73.98110210799996, -12.575269354999932],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030604',
			nombdist: 'HUACCANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.83479906399998, -13.505316230999938],
						[-73.83479906399998, -13.170714854999972],
						[-73.57502198299994, -13.170714854999972],
						[-73.57502198299994, -13.505316230999938],
						[-73.83479906399998, -13.505316230999938],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050511',
			nombdist: 'ORONCCOY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.54434777299997, -13.476693730999955],
						[-73.54434777299997, -13.18096001899994],
						[-73.20934798199994, -13.18096001899994],
						[-73.20934798199994, -13.476693730999955],
						[-73.54434777299997, -13.476693730999955],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050407',
			nombdist: 'SIVIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.16852735799995, -12.765790018999951],
						[-74.16852735799995, -12.435696354999948],
						[-73.82991510799997, -12.435696354999948],
						[-73.82991510799997, -12.765790018999951],
						[-74.16852735799995, -12.765790018999951],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050406',
			nombdist: 'SANTILLANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.34936998399996, -12.787360018999948],
						[-74.34936998399996, -12.536723105999954],
						[-74.14234760899996, -12.536723105999954],
						[-74.14234760899996, -12.787360018999948],
						[-74.34936998399996, -12.787360018999948],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050408',
			nombdist: 'LLOCHEGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.26502935799994, -12.579158354999947],
						[-74.26502935799994, -12.33112936799995],
						[-73.87746185899994, -12.33112936799995],
						[-73.87746185899994, -12.579158354999947],
						[-74.26502935799994, -12.579158354999947],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050502',
			nombdist: 'ANCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.85494423299997, -13.194807355999956],
						[-73.85494423299997, -12.892891753999947],
						[-73.44883810799996, -12.892891753999947],
						[-73.44883810799996, -13.194807355999956],
						[-73.85494423299997, -13.194807355999956],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050509',
			nombdist: 'SAMUGARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.90041648299996, -12.95398247999998],
						[-73.90041648299996, -12.724969980999958],
						[-73.58822860799995, -12.724969980999958],
						[-73.58822860799995, -12.95398247999998],
						[-73.90041648299996, -12.95398247999998],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050504',
			nombdist: 'CHILCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.96993310799996, -13.23366610599993],
						[-73.96993310799996, -13.114604355999973],
						[-73.77195785799995, -13.114604355999973],
						[-73.77195785799995, -13.23366610599993],
						[-73.96993310799996, -13.23366610599993],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050501',
			nombdist: 'SAN MIGUEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.07759773399994, -13.17361185599998],
						[-74.07759773399994, -12.899955730999977],
						[-73.83018010799998, -12.899955730999977],
						[-73.83018010799998, -13.17361185599998],
						[-74.07759773399994, -13.17361185599998],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050510',
			nombdist: 'ANCHIHUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.86384560799996, -13.046149491999927],
						[-73.86384560799996, -12.832350730999963],
						[-73.53216351299994, -12.832350730999963],
						[-73.53216351299994, -13.046149491999927],
						[-73.86384560799996, -13.046149491999927],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050409',
			nombdist: 'CANAYRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.24149685899994, -12.410700018999933],
						[-74.24149685899994, -12.242588354999953],
						[-73.96585898299998, -12.242588354999953],
						[-73.96585898299998, -12.410700018999933],
						[-74.24149685899994, -12.410700018999933],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100106',
			nombdist: 'QUISQUI (KICHKI)',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.49996861099999, -9.94716897799998],
						[-76.49996861099999, -9.79067360299996],
						[-76.33895310999998, -9.79067360299996],
						[-76.33895310999998, -9.94716897799998],
						[-76.49996861099999, -9.94716897799998],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190303',
			nombdist: 'HUANCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.87026348499995, -10.599178852999955],
						[-75.87026348499995, -10.207184352999946],
						[-75.40397373499997, -10.207184352999946],
						[-75.40397373499997, -10.599178852999955],
						[-75.87026348499995, -10.599178852999955],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190305',
			nombdist: 'POZUZO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.72787998599995, -10.292902352999931],
						[-75.72787998599995, -9.95179197799996],
						[-75.45552235999997, -9.95179197799996],
						[-75.45552235999997, -10.292902352999931],
						[-75.72787998599995, -10.292902352999931],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190306',
			nombdist: 'PUERTO BERMUDEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.14559673499997, -10.915840728999967],
						[-75.14559673499997, -9.926247477999937],
						[-74.13098148399996, -9.926247477999937],
						[-74.13098148399996, -10.915840728999967],
						[-75.14559673499997, -10.915840728999967],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1008',
			nombprov: 'PACHITEA',
			iddist: '100801',
			nombdist: 'PANAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.06738085999996, -10.488890728999934],
						[-76.06738085999996, -9.831673852999927],
						[-75.64517960999996, -9.831673852999927],
						[-75.64517960999996, -10.488890728999934],
						[-76.06738085999996, -10.488890728999934],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1008',
			nombprov: 'PACHITEA',
			iddist: '100804',
			nombdist: 'UMARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.12454298599994, -9.940105477999964],
						[-76.12454298599994, -9.805535602999953],
						[-75.92397660999995, -9.805535602999953],
						[-75.92397660999995, -9.940105477999964],
						[-76.12454298599994, -9.940105477999964],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1311',
			nombprov: 'GRAN CHIMU',
			iddist: '131102',
			nombdist: 'LUCMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.69694998699998, -7.726296850999972],
						[-78.69694998699998, -7.545445349999966],
						[-78.45484386199996, -7.545445349999966],
						[-78.45484386199996, -7.726296850999972],
						[-78.69694998699998, -7.726296850999972],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1311',
			nombprov: 'GRAN CHIMU',
			iddist: '131104',
			nombdist: 'SAYAPULLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.55593361299998, -7.643990225999971],
						[-78.55593361299998, -7.483468975999926],
						[-78.32207836199996, -7.483468975999926],
						[-78.32207836199996, -7.643990225999971],
						[-78.55593361299998, -7.643990225999971],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061311',
			nombdist: 'YAUYUCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.87866686299998, -6.71677509999995],
						[-78.87866686299998, -6.648135474999947],
						[-78.80606648799994, -6.648135474999947],
						[-78.80606648799994, -6.71677509999995],
						[-78.87866686299998, -6.71677509999995],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061302',
			nombdist: 'ANDABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.83349923799994, -6.681197099999963],
						[-78.83349923799994, -6.646283349999976],
						[-78.79580236299995, -6.646283349999976],
						[-78.79580236299995, -6.681197099999963],
						[-78.83349923799994, -6.681197099999963],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130908',
			nombdist: 'SARTIMBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.86953123699999, -7.769055475999949],
						[-77.86953123699999, -7.478212724999935],
						[-77.66828323699997, -7.478212724999935],
						[-77.66828323699997, -7.769055475999949],
						[-77.86953123699999, -7.769055475999949],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0602',
			nombprov: 'CAJABAMBA',
			iddist: '060203',
			nombdist: 'CONDEBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.16750786199998, -7.610365225999942],
						[-78.16750786199998, -7.454060600999981],
						[-78.01654098699998, -7.454060600999981],
						[-78.01654098699998, -7.610365225999942],
						[-78.16750786199998, -7.610365225999942],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			iddist: '130303',
			nombdist: 'CONDORMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70814448699997, -7.674077225999952],
						[-77.70814448699997, -7.44344097499993],
						[-77.48576361199997, -7.44344097499993],
						[-77.48576361199997, -7.674077225999952],
						[-77.70814448699997, -7.674077225999952],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220913',
			nombdist: 'SAUCE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.26792361099996, -6.772613474999957],
						[-76.26792361099996, -6.645740724999939],
						[-76.12676998599994, -6.645740724999939],
						[-76.12676998599994, -6.772613474999957],
						[-76.26792361099996, -6.772613474999957],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061308',
			nombdist: 'SAUCEPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.95253711299995, -6.714578099999926],
						[-78.95253711299995, -6.655599474999974],
						[-78.87248048799995, -6.655599474999974],
						[-78.87248048799995, -6.714578099999926],
						[-78.95253711299995, -6.714578099999926],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061306',
			nombdist: 'NINABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.81698473799997, -6.745435099999952],
						[-78.81698473799997, -6.638999973999944],
						[-78.71841411199995, -6.638999973999944],
						[-78.71841411199995, -6.745435099999952],
						[-78.81698473799997, -6.745435099999952],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220902',
			nombdist: 'ALBERTO LEVEAU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.29420661099994, -6.746636849999959],
						[-76.29420661099994, -6.637008349999974],
						[-76.23400786099995, -6.637008349999974],
						[-76.23400786099995, -6.746636849999959],
						[-76.29420661099994, -6.746636849999959],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010110',
			nombdist: 'LEIMEBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.89281461199994, -6.964507849999961],
						[-77.89281461199994, -6.647456223999939],
						[-77.70719798599998, -6.647456223999939],
						[-77.70719798599998, -6.964507849999961],
						[-77.89281461199994, -6.964507849999961],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061307',
			nombdist: 'PULAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.00755448799998, -6.847156849999976],
						[-79.00755448799998, -6.656443349999961],
						[-78.84767561299998, -6.656443349999961],
						[-78.84767561299998, -6.847156849999976],
						[-79.00755448799998, -6.847156849999976],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0607',
			nombprov: 'HUALGAYOC',
			iddist: '060703',
			nombdist: 'HUALGAYOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.68902536199994, -6.86762884999996],
						[-78.68902536199994, -6.653157974999942],
						[-78.52559373699995, -6.653157974999942],
						[-78.52559373699995, -6.86762884999996],
						[-78.68902536199994, -6.86762884999996],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2206',
			nombprov: 'MARISCAL CACERES',
			iddist: '220602',
			nombdist: 'CAMPANILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.04726611099994, -7.921300350999957],
						[-77.04726611099994, -7.423659975999954],
						[-76.56560948599997, -7.423659975999954],
						[-76.56560948599997, -7.921300350999957],
						[-77.04726611099994, -7.921300350999957],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010520',
			nombdist: 'SANTA CATALINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.17354386199997, -6.152376849999939],
						[-78.17354386199997, -5.994149973999981],
						[-78.02209436199996, -5.994149973999981],
						[-78.02209436199996, -6.152376849999939],
						[-78.17354386199997, -6.152376849999939],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010518',
			nombdist: 'SAN JERONIMO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.17241111199996, -6.104394473999946],
						[-78.17241111199996, -5.902560598999969],
						[-77.93742186299994, -5.902560598999969],
						[-77.93742186299994, -6.104394473999946],
						[-78.17241111199996, -6.104394473999946],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010705',
			nombdist: 'JAMALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.34193161299999, -6.064312723999933],
						[-78.34193161299999, -5.80912697399998],
						[-78.13080473699995, -5.80912697399998],
						[-78.13080473699995, -6.064312723999933],
						[-78.34193161299999, -6.064312723999933],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060802',
			nombdist: 'BELLAVISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.94650786299997, -5.792526348999957],
						[-78.94650786299997, -5.37414059799994],
						[-78.54995761299995, -5.37414059799994],
						[-78.54995761299995, -5.792526348999957],
						[-78.94650786299997, -5.792526348999957],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060811',
			nombdist: 'SAN JOSE DEL ALTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.19986723799997, -5.668749973999979],
						[-79.19986723799997, -5.365683598999965],
						[-78.92466111299996, -5.365683598999965],
						[-78.92466111299996, -5.668749973999979],
						[-79.19986723799997, -5.668749973999979],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060904',
			nombdist: 'LA COIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.10116223799997, -5.477166348999958],
						[-79.10116223799997, -5.265874723999957],
						[-78.83242086299998, -5.265874723999957],
						[-78.83242086299998, -5.477166348999958],
						[-79.10116223799997, -5.477166348999958],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210707',
			nombdist: 'PARATIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.89695522999995, -15.593655482999964],
						[-70.89695522999995, -15.305861231999927],
						[-70.51291560499993, -15.305861231999927],
						[-70.51291560499993, -15.593655482999964],
						[-70.89695522999995, -15.593655482999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150720',
			nombdist: 'SAN JUAN DE TANTARANCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.22520998599998, -12.132729979999965],
						[-76.22520998599998, -11.886905604999981],
						[-76.10723035999996, -11.886905604999981],
						[-76.10723035999996, -12.132729979999965],
						[-76.22520998599998, -12.132729979999965],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120201',
			nombdist: 'CONCEPCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.34513785999997, -11.93800310499995],
						[-75.34513785999997, -11.881779979999976],
						[-75.29045898399994, -11.881779979999976],
						[-75.29045898399994, -11.93800310499995],
						[-75.34513785999997, -11.93800310499995],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150709',
			nombdist: 'HUAROCHIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.34822960999998, -12.215097604999926],
						[-76.34822960999998, -11.878977729999974],
						[-76.16218073499994, -11.878977729999974],
						[-76.16218073499994, -12.215097604999926],
						[-76.34822960999998, -12.215097604999926],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090511',
			nombdist: 'COSME',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.70950973399994, -12.648798855999928],
						[-74.70950973399994, -12.512479605999943],
						[-74.59541885899995, -12.512479605999943],
						[-74.59541885899995, -12.648798855999928],
						[-74.70950973399994, -12.648798855999928],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090113',
			nombdist: 'NUEVO OCCORO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24056348399995, -12.82199198099994],
						[-75.24056348399995, -12.54363473099994],
						[-75.01233785999995, -12.54363473099994],
						[-75.01233785999995, -12.82199198099994],
						[-75.24056348399995, -12.82199198099994],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090104',
			nombdist: 'CONAYCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.09645110899999, -12.553154354999947],
						[-75.09645110899999, -12.485672979999947],
						[-74.98736523399998, -12.485672979999947],
						[-74.98736523399998, -12.553154354999947],
						[-75.09645110899999, -12.553154354999947],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090601',
			nombdist: 'HUAYTARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.55458235899994, -13.817899230999956],
						[-75.55458235899994, -13.515461355999946],
						[-75.18542573499997, -13.515461355999946],
						[-75.18542573499997, -13.817899230999956],
						[-75.55458235899994, -13.817899230999956],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081210',
			nombdist: 'OCONGATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.48773160599995, -13.853625231999956],
						[-71.48773160599995, -13.513888605999966],
						[-71.06475823099998, -13.513888605999966],
						[-71.06475823099998, -13.853625231999956],
						[-71.48773160599995, -13.853625231999956],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150515',
			nombdist: 'SANTA CRUZ DE FLORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.70377736099994, -12.635657604999949],
						[-76.70377736099994, -12.484827604999964],
						[-76.59891048599997, -12.484827604999964],
						[-76.59891048599997, -12.635657604999949],
						[-76.70377736099994, -12.635657604999949],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090108',
			nombdist: 'IZCUCHACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.04116985999997, -12.518191854999941],
						[-75.04116985999997, -12.476728479999963],
						[-74.98331248399995, -12.476728479999963],
						[-74.98331248399995, -12.518191854999941],
						[-75.04116985999997, -12.518191854999941],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090604',
			nombdist: 'HUAYACUNDO ARMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.36105073499994, -13.595153230999927],
						[-75.36105073499994, -13.522938480999926],
						[-75.24584173499994, -13.522938480999926],
						[-75.24584173499994, -13.595153230999927],
						[-75.36105073499994, -13.595153230999927],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080108',
			nombdist: 'WANCHAQ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.97381485599993, -13.540203105999979],
						[-71.97381485599993, -13.519683231999977],
						[-71.91861135699997, -13.519683231999977],
						[-71.91861135699997, -13.540203105999979],
						[-71.97381485599993, -13.540203105999979],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080106',
			nombdist: 'SANTIAGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.02318648199997, -13.618196355999942],
						[-72.02318648199997, -13.52233998099996],
						[-71.92170123199998, -13.52233998099996],
						[-71.92170123199998, -13.618196355999942],
						[-72.02318648199997, -13.618196355999942],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030207',
			nombdist: 'KISHUARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.22994048199996, -13.803636980999954],
						[-73.22994048199996, -13.52233010599997],
						[-73.06787573299994, -13.52233010599997],
						[-73.06787573299994, -13.803636980999954],
						[-73.22994048199996, -13.803636980999954],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090615',
			nombdist: 'SANTO DOMINGO DE CAPILLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.39316410999999, -13.785189480999975],
						[-75.39316410999999, -13.521261980999952],
						[-75.03360698399996, -13.521261980999952],
						[-75.03360698399996, -13.785189480999975],
						[-75.39316410999999, -13.785189480999975],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120909',
			nombdist: 'YANACANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.67126214699994, -12.413370018999956],
						[-75.67126214699994, -12.098583411999925],
						[-75.29984760999997, -12.098583411999925],
						[-75.29984760999997, -12.413370018999956],
						[-75.67126214699994, -12.413370018999956],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120908',
			nombdist: 'TRES DE DICIEMBRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.26204842399994, -12.142811758999926],
						[-75.26204842399994, -12.094332039999927],
						[-75.23181785999998, -12.094332039999927],
						[-75.23181785999998, -12.142811758999926],
						[-75.26204842399994, -12.142811758999926],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150130',
			nombdist: 'SAN BORJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.01211323599995, -12.112384729999974],
						[-77.01211323599995, -12.07993947999995],
						[-76.97816598699995, -12.07993947999995],
						[-76.97816598699995, -12.112384729999974],
						[-77.01211323599995, -12.112384729999974],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150116',
			nombdist: 'LINCE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.04858598599998, -12.09191022999994],
						[-77.04858598599998, -12.078710979999926],
						[-77.02281236099998, -12.078710979999926],
						[-77.02281236099998, -12.09191022999994],
						[-77.04858598599998, -12.09191022999994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150140',
			nombdist: 'SANTIAGO DE SURCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.01835161099996, -12.174162104999937],
						[-77.01835161099996, -12.07570697999995],
						[-76.94774611099996, -12.07570697999995],
						[-76.94774611099996, -12.174162104999937],
						[-77.01835161099996, -12.174162104999937],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120119',
			nombdist: 'HUANCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.23338985999999, -12.126049979999948],
						[-75.23338985999999, -12.091957979999961],
						[-75.17746010899998, -12.091957979999961],
						[-75.17746010899998, -12.126049979999948],
						[-75.23338985999999, -12.126049979999948],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150131',
			nombdist: 'SAN ISIDRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.06079498599996, -12.111019479999982],
						[-77.06079498599996, -12.085040979999974],
						[-77.00754686099998, -12.085040979999974],
						[-77.00754686099998, -12.111019479999982],
						[-77.06079498599996, -12.111019479999982],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150120',
			nombdist: 'MAGDALENA DEL MAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.07767573599995, -12.107716854999978],
						[-77.07767573599995, -12.083583979999958],
						[-77.05498436099998, -12.083583979999958],
						[-77.05498436099998, -12.107716854999978],
						[-77.07767573599995, -12.107716854999978],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090714',
			nombdist: 'SALCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.84793898399994, -12.294672229999946],
						[-74.84793898399994, -12.075466854999945],
						[-74.69806835899993, -12.075466854999945],
						[-74.69806835899993, -12.294672229999946],
						[-74.84793898399994, -12.294672229999946],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2403',
			nombprov: 'ZARUMILLA',
			iddist: '240303',
			nombdist: 'MATAPALO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.34229886399999, -3.925990222999928],
						[-80.34229886399999, -3.617706971999951],
						[-80.12679198899997, -3.617706971999951],
						[-80.12679198899997, -3.925990222999928],
						[-80.34229886399999, -3.925990222999928],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160502',
			nombdist: 'ALTO TAPICHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.64282235899998, -7.534361350999973],
						[-74.64282235899998, -5.946212848999949],
						[-73.69487910799995, -5.946212848999949],
						[-73.69487910799995, -7.534361350999973],
						[-74.64282235899998, -7.534361350999973],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010102',
			nombdist: 'ASUNCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.78016386199994, -6.044816348999973],
						[-77.78016386199994, -5.944943348999971],
						[-77.70328723699998, -5.944943348999971],
						[-77.70328723699998, -6.044816348999973],
						[-77.78016386199994, -6.044816348999973],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120906',
			nombdist: 'SAN JUAN DE ISCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.33791898499999, -12.153051354999945],
						[-75.33791898499999, -12.077035550999938],
						[-75.26622675299996, -12.077035550999938],
						[-75.26622675299996, -12.153051354999945],
						[-75.33791898499999, -12.153051354999945],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150121',
			nombdist: 'PUEBLO LIBRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.08103236099998, -12.086652354999956],
						[-77.08103236099998, -12.066546854999956],
						[-77.04965873599997, -12.066546854999956],
						[-77.04965873599997, -12.086652354999956],
						[-77.08103236099998, -12.086652354999956],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151033',
			nombdist: 'VITIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94222873499996, -12.261975229999962],
						[-75.94222873499996, -12.070169979999946],
						[-75.77698910999999, -12.070169979999946],
						[-75.77698910999999, -12.261975229999962],
						[-75.94222873499996, -12.261975229999962],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070105',
			nombdist: 'LA PUNTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17074223699996, -12.075363229999937],
						[-77.17074223699996, -12.066453104999937],
						[-77.15640823699994, -12.066453104999937],
						[-77.15640823699994, -12.075363229999937],
						[-77.17074223699996, -12.075363229999937],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			iddist: '220104',
			nombdist: 'JEPELACIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.06492998599998, -6.287746099999936],
						[-77.06492998599998, -6.050239973999965],
						[-76.81450998599996, -6.050239973999965],
						[-76.81450998599996, -6.287746099999936],
						[-77.06492998599998, -6.287746099999936],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160113',
			nombdist: 'SAN JUAN BAUTISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.13543748399997, -4.449160096999947],
						[-74.13543748399997, -3.731401221999931],
						[-73.24693560699995, -3.731401221999931],
						[-73.24693560699995, -4.449160096999947],
						[-74.13543748399997, -4.449160096999947],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010604',
			nombdist: 'HUAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.60993161199997, -6.477236349999942],
						[-77.60993161199997, -6.400830099999951],
						[-77.46880336199996, -6.400830099999951],
						[-77.46880336199996, -6.477236349999942],
						[-77.60993161199997, -6.477236349999942],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160101',
			nombdist: 'IQUITOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.59096423299997, -3.886453596999956],
						[-73.59096423299997, -3.685252596999931],
						[-73.23642773299997, -3.685252596999931],
						[-73.23642773299997, -3.886453596999956],
						[-73.59096423299997, -3.886453596999956],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			iddist: '240104',
			nombdist: 'PAMPAS DE HOSPITAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.49796498899997, -4.01731734699996],
						[-80.49796498899997, -3.658169721999968],
						[-80.18069323899994, -3.658169721999968],
						[-80.18069323899994, -4.01731734699996],
						[-80.49796498899997, -4.01731734699996],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2402',
			nombprov: 'CONTRALMIRANTE VILLAR',
			iddist: '240201',
			nombdist: 'ZORRITOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.84202148999998, -4.010931097999958],
						[-80.84202148999998, -3.637196346999929],
						[-80.55216598999993, -3.637196346999929],
						[-80.55216598999993, -4.010931097999958],
						[-80.84202148999998, -4.010931097999958],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140309',
			nombdist: 'PACORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.95130661399998, -6.474714973999937],
						[-79.95130661399998, -6.400519474999953],
						[-79.79360786399997, -6.400519474999953],
						[-79.79360786399997, -6.474714973999937],
						[-79.95130661399998, -6.474714973999937],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			iddist: '240105',
			nombdist: 'SAN JACINTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.66645111499997, -4.231900346999964],
						[-80.66645111499997, -3.622917971999925],
						[-80.39828748899998, -3.622917971999925],
						[-80.39828748899998, -4.231900346999964],
						[-80.66645111499997, -4.231900346999964],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			iddist: '010206',
			nombdist: 'LA PECA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.53007986299997, -5.678726598999958],
						[-78.53007986299997, -5.517408222999961],
						[-78.36297661299994, -5.517408222999961],
						[-78.36297661299994, -5.678726598999958],
						[-78.53007986299997, -5.678726598999958],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010109',
			nombdist: 'LA JALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.86087498699999, -6.556792974999951],
						[-77.86087498699999, -6.427267474999951],
						[-77.72534636199998, -6.427267474999951],
						[-77.72534636199998, -6.556792974999951],
						[-77.86087498699999, -6.556792974999951],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010605',
			nombdist: 'LIMABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.73913323699998, -6.726775349999968],
						[-77.73913323699998, -6.378691848999949],
						[-77.38166823699999, -6.378691848999949],
						[-77.38166823699999, -6.726775349999968],
						[-77.73913323699998, -6.726775349999968],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			iddist: '240103',
			nombdist: 'LA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.60511836499995, -3.733700847999955],
						[-80.60511836499995, -3.605693346999942],
						[-80.52698423899994, -3.605693346999942],
						[-80.52698423899994, -3.733700847999955],
						[-80.60511836499995, -3.733700847999955],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220510',
			nombdist: 'TABALOSOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.76287311099998, -6.571434349999947],
						[-76.76287311099998, -6.160399974999962],
						[-76.55818586099997, -6.160399974999962],
						[-76.55818586099997, -6.571434349999947],
						[-76.76287311099998, -6.571434349999947],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010116',
			nombdist: 'OLLEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74483398699994, -6.063019530999952],
						[-77.74483398699994, -5.942644473999962],
						[-77.59345636099994, -5.942644473999962],
						[-77.59345636099994, -6.063019530999952],
						[-77.74483398699994, -6.063019530999952],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220806',
			nombdist: 'POSIC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.21813998699997, -6.039284973999941],
						[-77.21813998699997, -5.936534973999926],
						[-77.13876998599994, -5.936534973999926],
						[-77.13876998599994, -6.039284973999941],
						[-77.21813998699997, -6.039284973999941],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010118',
			nombdist: 'SAN FRANCISCO DE DAGUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.78226173699994, -6.269140723999954],
						[-77.78226173699994, -6.203224723999938],
						[-77.67353123699996, -6.203224723999938],
						[-77.67353123699996, -6.269140723999954],
						[-77.78226173699994, -6.269140723999954],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010707',
			nombdist: 'YAMON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.61197486199995, -6.078734223999959],
						[-78.61197486199995, -5.936201723999943],
						[-78.41362886199994, -5.936201723999943],
						[-78.41362886199994, -6.078734223999959],
						[-78.61197486199995, -6.078734223999959],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0104',
			nombprov: 'CONDORCANQUI',
			iddist: '010401',
			nombdist: 'NIEVA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.19602536199994, -5.413853472999961],
						[-78.19602536199994, -4.383421847999955],
						[-77.58100198699998, -4.383421847999955],
						[-77.58100198699998, -5.413853472999961],
						[-78.19602536199994, -5.413853472999961],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060612',
			nombdist: 'SANTO DOMINGO DE LA CAPILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.89732611299996, -6.314470974999949],
						[-78.89732611299996, -6.189316349999956],
						[-78.77622398799997, -6.189316349999956],
						[-78.77622398799997, -6.314470974999949],
						[-78.89732611299996, -6.314470974999949],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010607',
			nombdist: 'MARISCAL BENAVIDES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56788286199998, -6.401863223999953],
						[-77.56788286199998, -6.186460348999958],
						[-77.40186598699995, -6.186460348999958],
						[-77.40186598699995, -6.401863223999953],
						[-77.56788286199998, -6.401863223999953],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010101',
			nombdist: 'CHACHAPOYAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.94205273699998, -6.299056348999954],
						[-77.94205273699998, -6.177302848999943],
						[-77.76166036199999, -6.177302848999943],
						[-77.76166036199999, -6.299056348999954],
						[-77.94205273699998, -6.299056348999954],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			iddist: '160703',
			nombdist: 'MANSERICHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.82595798699998, -5.151164347999952],
						[-77.82595798699998, -4.195158221999975],
						[-77.12312886099994, -4.195158221999975],
						[-77.12312886099994, -5.151164347999952],
						[-77.82595798699998, -5.151164347999952],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060605',
			nombdist: 'LA RAMADA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.58995898699999, -6.246105473999933],
						[-78.58995898699999, -6.17566009899997],
						[-78.51842973799995, -6.17566009899997],
						[-78.51842973799995, -6.246105473999933],
						[-78.58995898699999, -6.246105473999933],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120215',
			nombdist: 'SANTA ROSA DE OCOPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.34062848399998, -11.886219979999964],
						[-75.34062848399998, -11.853615229999946],
						[-75.26660348399997, -11.853615229999946],
						[-75.26660348399997, -11.886219979999964],
						[-75.34062848399998, -11.886219979999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150139',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.18824411099996, -11.82873297599997],
						[-77.18824411099996, -11.781259728999942],
						[-77.13927748699996, -11.781259728999942],
						[-77.13927748699996, -11.82873297599997],
						[-77.18824411099996, -11.82873297599997],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010508',
			nombdist: 'LONYA CHICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.10708598699995, -6.242098473999931],
						[-78.10708598699995, -6.171888723999928],
						[-77.91646686199994, -6.171888723999928],
						[-77.91646686199994, -6.242098473999931],
						[-78.10708598699995, -6.242098473999931],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120404',
			nombdist: 'ATAURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.46648535999998, -11.813307979999934],
						[-75.46648535999998, -11.78084347999993],
						[-75.43130473499997, -11.78084347999993],
						[-75.43130473499997, -11.813307979999934],
						[-75.46648535999998, -11.813307979999934],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150703',
			nombdist: 'CALLAHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.63364998599997, -11.851619978999963],
						[-76.63364998599997, -11.777179604999958],
						[-76.51421148599997, -11.777179604999958],
						[-76.51421148599997, -11.851619978999963],
						[-76.63364998599997, -11.851619978999963],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010112',
			nombdist: 'MAGDALENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.92424211199994, -6.479990223999948],
						[-77.92424211199994, -6.354185598999948],
						[-77.74347898699995, -6.354185598999948],
						[-77.74347898699995, -6.479990223999948],
						[-77.92424211199994, -6.479990223999948],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1604',
			nombprov: 'MARISCAL RAMON CASTILLA',
			iddist: '160403',
			nombdist: 'YAVARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.23624410799994, -5.145971722999946],
						[-73.23624410799994, -4.01967472299998],
						[-69.94903935499997, -4.01967472299998],
						[-69.94903935499997, -5.145971722999946],
						[-73.23624410799994, -5.145971722999946],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120434',
			nombdist: 'YAUYOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.54957998499998, -11.82468997899997],
						[-75.54957998499998, -11.773933603999978],
						[-75.48758985999996, -11.773933603999978],
						[-75.48758985999996, -11.82468997899997],
						[-75.54957998499998, -11.82468997899997],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120414',
			nombdist: 'LLOCLLAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.71118773499995, -11.89033397999998],
						[-75.71118773499995, -11.77033997999996],
						[-75.54586523499995, -11.77033997999996],
						[-75.54586523499995, -11.89033397999998],
						[-75.71118773499995, -11.89033397999998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			iddist: '020306',
			nombdist: 'SAN JUAN DE RONTOY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.09376761099998, -9.275691602999927],
						[-77.09376761099998, -9.159249101999933],
						[-76.98233598599995, -9.159249101999933],
						[-76.98233598599995, -9.275691602999927],
						[-77.09376761099998, -9.275691602999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021003',
			nombdist: 'CAJAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.20830636099998, -9.393861352999977],
						[-77.20830636099998, -9.154988977999949],
						[-77.01231523699994, -9.154988977999949],
						[-77.01231523699994, -9.393861352999977],
						[-77.20830636099998, -9.393861352999977],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			iddist: '020302',
			nombdist: 'ACZO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.07917773699995, -9.300919976999978],
						[-77.07917773699995, -9.142267101999948],
						[-76.95880861199998, -9.142267101999948],
						[-76.95880861199998, -9.300919976999978],
						[-77.07917773699995, -9.300919976999978],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100507',
			nombdist: 'MONZON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.66239260999998, -9.541968726999926],
						[-76.66239260999998, -9.14024222699993],
						[-76.05679298499996, -9.14024222699993],
						[-76.05679298499996, -9.541968726999926],
						[-76.66239260999998, -9.541968726999926],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010507',
			nombdist: 'LONGUITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.04241311199996, -6.455734474999929],
						[-78.04241311199996, -6.350574348999942],
						[-77.94638611199997, -6.350574348999942],
						[-77.94638611199997, -6.455734474999929],
						[-78.04241311199996, -6.455734474999929],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010506',
			nombdist: 'INGUILPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13996598699998, -6.305382099999974],
						[-78.13996598699998, -6.203786973999968],
						[-77.92088086199999, -6.203786973999968],
						[-77.92088086199999, -6.305382099999974],
						[-78.13996598699998, -6.305382099999974],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1603',
			nombprov: 'LORETO',
			iddist: '160302',
			nombdist: 'PARINARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.65407455699994, -5.728031899999962],
						[-75.65407455699994, -3.938792972999977],
						[-74.04403373399998, -3.938792972999977],
						[-74.04403373399998, -5.728031899999962],
						[-75.65407455699994, -5.728031899999962],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010517',
			nombdist: 'SAN FRANCISCO DEL YESO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.93596686199999, -6.734123974999932],
						[-77.93596686199999, -6.565580099999977],
						[-77.79739998699995, -6.565580099999977],
						[-77.79739998699995, -6.734123974999932],
						[-77.93596686199999, -6.734123974999932],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220912',
			nombdist: 'SAN ANTONIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.44361173499993, -6.454869973999962],
						[-76.44361173499993, -6.339348098999949],
						[-76.31705610999995, -6.339348098999949],
						[-76.31705610999995, -6.454869973999962],
						[-76.44361173499993, -6.454869973999962],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060405',
			nombdist: 'CHIMBAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.51468161199995, -6.37588672499993],
						[-78.51468161199995, -6.218728473999931],
						[-78.35973361299995, -6.218728473999931],
						[-78.35973361299995, -6.37588672499993],
						[-78.51468161199995, -6.37588672499993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060412',
			nombdist: 'MIRACOSTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.45845111399996, -6.604404974999966],
						[-79.45845111399996, -6.211596974999964],
						[-79.19718886299995, -6.211596974999964],
						[-79.19718886299995, -6.604404974999966],
						[-79.45845111399996, -6.604404974999966],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010612',
			nombdist: 'VISTA ALEGRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.53380886199994, -6.38152359999998],
						[-77.53380886199994, -5.999718223999935],
						[-77.13230273599999, -5.999718223999935],
						[-77.13230273599999, -6.38152359999998],
						[-77.53380886199994, -6.38152359999998],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220506',
			nombdist: 'PINTO RECODO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.88416998599996, -6.384816848999947],
						[-76.88416998599996, -5.999558927999942],
						[-76.55646998599997, -5.999558927999942],
						[-76.55646998599997, -6.384816848999947],
						[-76.88416998599996, -6.384816848999947],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140307',
			nombdist: 'MOTUPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.83039898899995, -6.328453099999933],
						[-79.83039898899995, -5.997263348999979],
						[-79.55214623899997, -5.997263348999979],
						[-79.55214623899997, -6.328453099999933],
						[-79.83039898899995, -6.328453099999933],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060610',
			nombdist: 'SAN LUIS DE LUCMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.65090036299995, -6.314869098999964],
						[-78.65090036299995, -6.206581223999933],
						[-78.50939848799999, -6.206581223999933],
						[-78.50939848799999, -6.314869098999964],
						[-78.65090036299995, -6.314869098999964],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060613',
			nombdist: 'SANTO TOMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.77012098799997, -6.223376348999977],
						[-78.77012098799997, -5.995449224999959],
						[-78.60300698799995, -5.995449224999959],
						[-78.60300698799995, -6.223376348999977],
						[-78.77012098799997, -6.223376348999977],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060614',
			nombdist: 'SOCOTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.79254923799994, -6.368893224999965],
						[-78.79254923799994, -6.205539098999964],
						[-78.61175111299997, -6.205539098999964],
						[-78.61175111299997, -6.368893224999965],
						[-78.79254923799994, -6.368893224999965],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010108',
			nombdist: 'HUANCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.90912698699998, -6.210671848999937],
						[-77.90912698699998, -6.102201223999941],
						[-77.83419723699996, -6.102201223999941],
						[-77.83419723699996, -6.210671848999937],
						[-77.90912698699998, -6.210671848999937],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220911',
			nombdist: 'PAPAPLAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.91130110999995, -6.525251974999946],
						[-75.91130110999995, -6.003987724999945],
						[-75.48676473499995, -6.003987724999945],
						[-75.48676473499995, -6.525251974999946],
						[-75.91130110999995, -6.525251974999946],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010105',
			nombdist: 'CHILIQUIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.80794136199995, -6.164404348999938],
						[-77.80794136199995, -5.99523172399995],
						[-77.70141436199998, -5.99523172399995],
						[-77.70141436199998, -6.164404348999938],
						[-77.80794136199995, -6.164404348999938],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220504',
			nombdist: 'CAYNARACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.54887582699996, -6.431804348999947],
						[-76.54887582699996, -5.953558718999943],
						[-76.12710326099995, -5.953558718999943],
						[-76.12710326099995, -6.431804348999947],
						[-76.54887582699996, -6.431804348999947],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010706',
			nombdist: 'LONYA GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.52227336199996, -6.188424599999962],
						[-78.52227336199996, -5.948185599999931],
						[-78.28438286199997, -5.948185599999931],
						[-78.28438286199997, -6.188424599999962],
						[-78.52227336199996, -6.188424599999962],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010303',
			nombdist: 'CHURUJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.97029886199994, -6.037767598999949],
						[-77.97029886199994, -5.982441348999942],
						[-77.89442373699995, -5.982441348999942],
						[-77.89442373699995, -6.037767598999949],
						[-77.97029886199994, -6.037767598999949],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220801',
			nombdist: 'RIOJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28792848599994, -6.188529598999935],
						[-77.28792848599994, -5.976489973999946],
						[-77.13674923699995, -5.976489973999946],
						[-77.13674923699995, -6.188529598999935],
						[-77.28792848599994, -6.188529598999935],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			iddist: '140202',
			nombdist: 'CAÑARIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.42101461299995, -6.15846047499997],
						[-79.42101461299995, -5.976387473999978],
						[-79.17544136299995, -5.976387473999978],
						[-79.17544136299995, -6.15846047499997],
						[-79.42101461299995, -6.15846047499997],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060606',
			nombdist: 'PIMPINGOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.87051036299994, -6.168767723999963],
						[-78.87051036299994, -5.962269473999925],
						[-78.69357223799994, -5.962269473999925],
						[-78.69357223799994, -6.168767723999963],
						[-78.87051036299994, -6.168767723999963],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			iddist: '220102',
			nombdist: 'CALZADA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.15733436099998, -6.064299973999937],
						[-77.15733436099998, -5.961279973999979],
						[-77.02418998599995, -5.961279973999979],
						[-77.02418998599995, -6.064299973999937],
						[-77.15733436099998, -6.064299973999937],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220803',
			nombdist: 'ELIAS SOPLIN VARGAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.35937223699995, -6.134371224999938],
						[-77.35937223699995, -5.951150348999931],
						[-77.22595998699995, -5.951150348999931],
						[-77.22595998699995, -6.134371224999938],
						[-77.35937223699995, -6.134371224999938],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010309',
			nombdist: 'SAN CARLOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.97982423699995, -6.06546872399997],
						[-77.97982423699995, -5.947314598999981],
						[-77.80121186199995, -5.947314598999981],
						[-77.80121186199995, -6.06546872399997],
						[-77.97982423699995, -6.06546872399997],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			iddist: '220101',
			nombdist: 'MOYOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74482773699998, -6.112769973999946],
						[-77.74482773699998, -5.40646684799998],
						[-76.74544707899997, -5.40646684799998],
						[-76.74544707899997, -6.112769973999946],
						[-77.74482773699998, -6.112769973999946],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			iddist: '160701',
			nombdist: 'BARRANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.73970786199999, -5.667608848999976],
						[-77.73970786199999, -4.262445346999925],
						[-75.91904316599994, -4.262445346999925],
						[-75.91904316599994, -5.667608848999976],
						[-77.73970786199999, -5.667608848999976],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			iddist: '200804',
			nombdist: 'CRISTO NOS VALGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.77670898999997, -5.601605451999944],
						[-80.77670898999997, -5.477152348999937],
						[-80.53462958799997, -5.477152348999937],
						[-80.53462958799997, -5.601605451999944],
						[-80.77670898999997, -5.601605451999944],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140105',
			nombdist: 'JOSE LEONARDO ORTIZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.88542973899996, -6.763505849999944],
						[-79.88542973899996, -6.717759724999951],
						[-79.78645298899994, -6.717759724999951],
						[-79.78645298899994, -6.763505849999944],
						[-79.88542973899996, -6.763505849999944],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010703',
			nombdist: 'CUMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.71217773799998, -6.023277348999954],
						[-78.71217773799998, -5.74306809899997],
						[-78.49699336299994, -5.74306809899997],
						[-78.49699336299994, -6.023277348999954],
						[-78.71217773799998, -6.023277348999954],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			iddist: '200806',
			nombdist: 'RINCONADA LLICUAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.79520311499994, -5.518806598999959],
						[-80.79520311499994, -5.444314473999952],
						[-80.75422461499994, -5.444314473999952],
						[-80.75422461499994, -5.518806598999959],
						[-80.79520311499994, -5.518806598999959],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200304',
			nombdist: 'HUARMACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.83943748899998, -5.97009959899998],
						[-79.83943748899998, -5.424871098999972],
						[-79.33357036299998, -5.424871098999972],
						[-79.33357036299998, -5.97009959899998],
						[-79.83943748899998, -5.97009959899998],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200406',
			nombdist: 'SALITRAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.95761723899994, -5.630027348999931],
						[-79.95761723899994, -5.262679723999952],
						[-79.64248236399999, -5.262679723999952],
						[-79.64248236399999, -5.630027348999931],
						[-79.95761723899994, -5.630027348999931],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200307',
			nombdist: 'SONDOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.43946098899994, -5.53508009899997],
						[-79.43946098899994, -5.25239847399996],
						[-79.27639237399995, -5.25239847399996],
						[-79.27639237399995, -5.53508009899997],
						[-79.43946098899994, -5.53508009899997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0208',
			nombprov: 'CASMA',
			iddist: '020803',
			nombdist: 'COMANDANTE NOEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.43372848699994, -9.682665976999942],
						[-78.43372848699994, -9.336062476999928],
						[-78.29145648699995, -9.336062476999928],
						[-78.29145648699995, -9.682665976999942],
						[-78.43372848699994, -9.682665976999942],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			iddist: '200803',
			nombdist: 'BERNAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.76371286499995, -5.493435598999952],
						[-80.76371286499995, -5.419794890999981],
						[-80.64222703299998, -5.419794890999981],
						[-80.64222703299998, -5.493435598999952],
						[-80.76371286499995, -5.493435598999952],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			iddist: '200802',
			nombdist: 'BELLAVISTA DE LA UNION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.76849611499995, -5.449410098999976],
						[-80.76849611499995, -5.405201346999945],
						[-80.71977303999995, -5.405201346999945],
						[-80.71977303999995, -5.449410098999976],
						[-80.76849611499995, -5.449410098999976],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200108',
			nombdist: 'EL TALLAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.70376518199998, -5.487112324999941],
						[-80.70376518199998, -5.396283537999977],
						[-80.52563515999998, -5.396283537999977],
						[-80.52563515999998, -5.487112324999941],
						[-80.70376518199998, -5.487112324999941],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200109',
			nombdist: 'LA ARENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.84965852699997, -5.408706993999942],
						[-80.84965852699997, -5.216782698999964],
						[-80.64932281099993, -5.216782698999964],
						[-80.64932281099993, -5.408706993999942],
						[-80.84965852699997, -5.408706993999942],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020112',
			nombdist: 'TARICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.58493748699993, -9.444236351999962],
						[-77.58493748699993, -9.346607476999964],
						[-77.38259473699998, -9.346607476999964],
						[-77.38259473699998, -9.444236351999962],
						[-77.58493748699993, -9.444236351999962],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0208',
			nombprov: 'CASMA',
			iddist: '020802',
			nombdist: 'BUENA VISTA ALTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.24369536199998, -9.500257727999951],
						[-78.24369536199998, -9.247027351999975],
						[-78.00326511199995, -9.247027351999975],
						[-78.00326511199995, -9.500257727999951],
						[-78.24369536199998, -9.500257727999951],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			iddist: '200805',
			nombdist: 'VICE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.99395111499996, -5.547917973999972],
						[-80.99395111499996, -5.350446675999933],
						[-80.74873436499996, -5.350446675999933],
						[-80.74873436499996, -5.547917973999972],
						[-80.99395111499996, -5.547917973999972],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200306',
			nombdist: 'SAN MIGUEL DE EL FAIQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.76858986399998, -5.487382848999971],
						[-79.76858986399998, -5.33800572399997],
						[-79.46758986399999, -5.33800572399997],
						[-79.46758986399999, -5.487382848999971],
						[-79.76858986399998, -5.487382848999971],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190301',
			nombdist: 'OXAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45697973499995, -10.86493685399995],
						[-75.45697973499995, -10.448407977999977],
						[-75.28588423499997, -10.448407977999977],
						[-75.28588423499997, -10.86493685399995],
						[-75.45697973499995, -10.86493685399995],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200107',
			nombdist: 'CURA MORI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.69958676799996, -5.428997749999951],
						[-80.69958676799996, -5.300333972999965],
						[-80.49369644299998, -5.300333972999965],
						[-80.49369644299998, -5.428997749999951],
						[-80.69958676799996, -5.428997749999951],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200308',
			nombdist: 'SONDORILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.54885936399995, -5.534449223999957],
						[-79.54885936399995, -5.288759723999931],
						[-79.39882036299997, -5.288759723999931],
						[-79.39882036299997, -5.534449223999957],
						[-79.54885936399995, -5.534449223999957],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200110',
			nombdist: 'LA UNION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.02250645399994, -5.424905167999952],
						[-81.02250645399994, -5.230868973999975],
						[-80.68961253699996, -5.230868973999975],
						[-80.68961253699996, -5.424905167999952],
						[-81.02250645399994, -5.424905167999952],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140112',
			nombdist: 'PIMENTEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.94246486399999, -6.873611349999976],
						[-79.94246486399999, -6.728046849999942],
						[-79.85478661399998, -6.728046849999942],
						[-79.85478661399998, -6.873611349999976],
						[-79.94246486399999, -6.873611349999976],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			iddist: '220205',
			nombdist: 'SAN PABLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73620698599996, -6.939239974999964],
						[-76.73620698599996, -6.72538284999996],
						[-76.46305711099996, -6.72538284999996],
						[-76.46305711099996, -6.939239974999964],
						[-76.73620698599996, -6.939239974999964],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			iddist: '160606',
			nombdist: 'VARGAS GUERRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.62624785999998, -7.234177725999928],
						[-75.62624785999998, -6.719641349999961],
						[-74.79849285899996, -6.719641349999961],
						[-74.79849285899996, -7.234177725999928],
						[-75.62624785999998, -7.234177725999928],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190307',
			nombdist: 'VILLA RICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.34275785999995, -10.842177603999971],
						[-75.34275785999995, -10.43840397799994],
						[-74.99323773499998, -10.43840397799994],
						[-74.99323773499998, -10.842177603999971],
						[-75.34275785999995, -10.842177603999971],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020607',
			nombdist: 'PARIAHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.59276361199994, -9.379221602999962],
						[-77.59276361199994, -9.335414101999959],
						[-77.55442698699994, -9.335414101999959],
						[-77.55442698699994, -9.379221602999962],
						[-77.59276361199994, -9.379221602999962],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021007',
			nombdist: 'HUACHIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.15819136099998, -9.510229601999981],
						[-77.15819136099998, -9.33134397699996],
						[-77.01711723599993, -9.33134397699996],
						[-77.01711723599993, -9.510229601999981],
						[-77.15819136099998, -9.510229601999981],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021012',
			nombdist: 'RAHUAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.09065423599998, -9.377526601999932],
						[-77.09065423599998, -9.32474160299995],
						[-77.03824973599995, -9.32474160299995],
						[-77.03824973599995, -9.377526601999932],
						[-77.09065423599998, -9.377526601999932],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190102',
			nombdist: 'HUACHON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.01925998499996, -10.724059977999957],
						[-76.01925998499996, -10.429257727999982],
						[-75.57314585999995, -10.429257727999982],
						[-75.57314585999995, -10.724059977999957],
						[-76.01925998499996, -10.724059977999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020604',
			nombdist: 'ANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.68392186199998, -9.405419226999982],
						[-77.68392186199998, -9.321889976999955],
						[-77.58911061199996, -9.321889976999955],
						[-77.58911061199996, -9.405419226999982],
						[-77.68392186199998, -9.405419226999982],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020608',
			nombdist: 'SAN MIGUEL DE ACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56671811199999, -9.388540851999949],
						[-77.56671811199999, -9.296871101999955],
						[-77.33009086099997, -9.296871101999955],
						[-77.33009086099997, -9.388540851999949],
						[-77.56671811199999, -9.388540851999949],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020602',
			nombdist: 'ACOPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63274998699995, -9.311333976999947],
						[-77.63274998699995, -9.269114351999974],
						[-77.58731573699998, -9.269114351999974],
						[-77.58731573699998, -9.311333976999947],
						[-77.63274998699995, -9.311333976999947],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021009',
			nombdist: 'MASIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.14084098599994, -9.393861352999977],
						[-77.14084098599994, -9.282534102999932],
						[-77.01455811099999, -9.282534102999932],
						[-77.01455811099999, -9.393861352999977],
						[-77.14084098599994, -9.393861352999977],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100510',
			nombdist: 'SINGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.90958598599997, -9.445582101999946],
						[-76.90958598599997, -9.261728477999952],
						[-76.76461911099994, -9.261728477999952],
						[-76.76461911099994, -9.445582101999946],
						[-76.90958598599997, -9.445582101999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021011',
			nombdist: 'PONTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03923823599996, -9.412715101999936],
						[-77.03923823599996, -9.270289226999978],
						[-76.92395698599995, -9.270289226999978],
						[-76.92395698599995, -9.412715101999936],
						[-77.03923823599996, -9.412715101999936],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100511',
			nombdist: 'TANTAMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.74931448599995, -9.47537697699994],
						[-76.74931448599995, -9.269544976999953],
						[-76.58873436099998, -9.269544976999953],
						[-76.58873436099998, -9.47537697699994],
						[-76.74931448599995, -9.47537697699994],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021005',
			nombdist: 'HUACACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.99323198599996, -9.382533227999943],
						[-76.99323198599996, -9.24534760299997],
						[-76.86602736099996, -9.24534760299997],
						[-76.86602736099996, -9.382533227999943],
						[-76.99323198599996, -9.382533227999943],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190110',
			nombdist: 'TICLACAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.18651998499996, -10.76145897899994],
						[-76.18651998499996, -10.30283835399996],
						[-75.85498998499997, -10.30283835399996],
						[-75.85498998499997, -10.76145897899994],
						[-76.18651998499996, -10.76145897899994],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100203',
			nombdist: 'COLPAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.52469536099994, -10.320869977999962],
						[-76.52469536099994, -10.14908597799996],
						[-76.38721998599993, -10.14908597799996],
						[-76.38721998599993, -10.320869977999962],
						[-76.52469536099994, -10.320869977999962],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020610',
			nombdist: 'TINCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.68526798699997, -9.276404602999946],
						[-77.68526798699997, -9.239072977999967],
						[-77.63155986199996, -9.239072977999967],
						[-77.63155986199996, -9.276404602999946],
						[-77.68526798699997, -9.276404602999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020606',
			nombdist: 'MARCARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.64873511199994, -9.35807622699997],
						[-77.64873511199994, -9.235902351999925],
						[-77.31813423599993, -9.235902351999925],
						[-77.31813423599993, -9.35807622699997],
						[-77.64873511199994, -9.35807622699997],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2502',
			nombprov: 'ATALAYA',
			iddist: '250201',
			nombdist: 'RAIMONDI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.57037160899995, -11.170081853999932],
						[-74.57037160899995, -10.122264102999964],
						[-72.37884285699994, -10.122264102999964],
						[-72.37884285699994, -11.170081853999932],
						[-74.57037160899995, -11.170081853999932],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100202',
			nombdist: 'CAYNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.43608198499999, -10.299469977999934],
						[-76.43608198499999, -10.121947227999954],
						[-76.30411523599997, -10.121947227999954],
						[-76.30411523599997, -10.299469977999934],
						[-76.43608198499999, -10.299469977999934],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100205',
			nombdist: 'HUACAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.34940623499995, -10.309638727999982],
						[-76.34940623499995, -10.099097602999962],
						[-76.20000786099996, -10.099097602999962],
						[-76.20000786099996, -10.309638727999982],
						[-76.34940623499995, -10.309638727999982],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100204',
			nombdist: 'CONCHAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.34395698599997, -10.120295102999933],
						[-76.34395698599997, -9.98131835299995],
						[-76.12347260999996, -9.98131835299995],
						[-76.12347260999996, -10.120295102999933],
						[-76.34395698599997, -10.120295102999933],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100105',
			nombdist: 'MARGOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.60646098599995, -10.188984477999952],
						[-76.60646098599995, -9.968161477999956],
						[-76.46598048499999, -9.968161477999956],
						[-76.46598048499999, -10.188984477999952],
						[-76.60646098599995, -10.188984477999952],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020605',
			nombdist: 'ATAQUERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77669623699995, -9.344276227999956],
						[-77.77669623699995, -9.224164727999948],
						[-77.67499123699997, -9.224164727999948],
						[-77.67499123699997, -9.344276227999956],
						[-77.77669623699995, -9.344276227999956],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1004',
			nombprov: 'HUACAYBAMBA',
			iddist: '100404',
			nombdist: 'PINRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.12370698699993, -9.011746101999961],
						[-77.12370698699993, -8.834443351999937],
						[-76.89029098599997, -8.834443351999937],
						[-76.89029098599997, -9.011746101999961],
						[-77.12370698699993, -9.011746101999961],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1004',
			nombprov: 'HUACAYBAMBA',
			iddist: '100401',
			nombdist: 'HUACAYBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03412298599994, -9.075496101999931],
						[-77.03412298599994, -8.832566351999958],
						[-76.65591484999999, -8.832566351999958],
						[-76.65591484999999, -9.075496101999931],
						[-77.03412298599994, -9.075496101999931],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021208',
			nombdist: 'SANTA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.84875786199996, -8.99247085199994],
						[-77.84875786199996, -8.824994225999944],
						[-77.57426573699996, -8.824994225999944],
						[-77.57426573699996, -8.99247085199994],
						[-77.84875786199996, -8.99247085199994],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021301',
			nombdist: 'PISCOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.40297461199998, -8.908556601999976],
						[-77.40297461199998, -8.821059601999934],
						[-77.30763148599993, -8.821059601999934],
						[-77.30763148599993, -8.908556601999976],
						[-77.40297461199998, -8.908556601999976],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			iddist: '220401',
			nombdist: 'SAPOSOA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03919986199998, -7.009720725999955],
						[-77.03919986199998, -6.713501974999929],
						[-76.68117573599994, -6.713501974999929],
						[-76.68117573599994, -7.009720725999955],
						[-77.03919986199998, -7.009720725999955],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			iddist: '190302',
			nombdist: 'CHONTABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.67992323499999, -10.78119997899995],
						[-75.67992323499999, -10.506799977999947],
						[-75.39883923499997, -10.506799977999947],
						[-75.39883923499997, -10.78119997899995],
						[-75.67992323499999, -10.78119997899995],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100108',
			nombdist: 'SAN PEDRO DE CHAULAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.49570998599995, -10.233531227999947],
						[-76.49570998599995, -9.953399477999938],
						[-76.33239998599998, -9.953399477999938],
						[-76.33239998599998, -10.233531227999947],
						[-76.49570998599995, -10.233531227999947],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100111',
			nombdist: 'PILLCO MARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.37602111099994, -10.150578477999943],
						[-76.37602111099994, -9.94237885299998],
						[-76.22646873499997, -9.94237885299998],
						[-76.22646873499997, -10.150578477999943],
						[-76.37602111099994, -10.150578477999943],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			iddist: '160706',
			nombdist: 'ANDOAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.22020311099999, -4.231156472999942],
						[-77.22020311099999, -2.512278470999945],
						[-76.20617973499998, -2.512278470999945],
						[-76.20617973499998, -4.231156472999942],
						[-77.22020311099999, -4.231156472999942],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160102',
			nombdist: 'ALTO NANAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.05913473499999, -4.175547472999938],
						[-75.05913473499999, -2.360177720999957],
						[-73.51514260799996, -2.360177720999957],
						[-73.51514260799996, -4.175547472999938],
						[-75.05913473499999, -4.175547472999938],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160106',
			nombdist: 'MAZAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.90147260899994, -3.573876346999953],
						[-74.90147260899994, -2.343621095999936],
						[-72.62084573299995, -2.343621095999936],
						[-72.62084573299995, -3.573876346999953],
						[-74.90147260899994, -3.573876346999953],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1603',
			nombprov: 'LORETO',
			iddist: '160304',
			nombdist: 'TROMPETEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.53432436099996, -3.863955097999963],
						[-76.53432436099996, -2.337572345999945],
						[-74.60786698399994, -2.337572345999945],
						[-74.60786698399994, -3.863955097999963],
						[-76.53432436099996, -3.863955097999963],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1603',
			nombprov: 'LORETO',
			iddist: '160303',
			nombdist: 'TIGRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.31240348599994, -4.316383972999972],
						[-76.31240348599994, -1.793951344999925],
						[-74.24655273399998, -1.793951344999925],
						[-74.24655273399998, -4.316383972999972],
						[-76.31240348599994, -4.316383972999972],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160107',
			nombdist: 'NAPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.78114648499997, -3.13847459699997],
						[-75.78114648499997, -0.960984345999975],
						[-72.95160169599995, -0.960984345999975],
						[-72.95160169599995, -3.13847459699997],
						[-75.78114648499997, -3.13847459699997],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1608',
			nombprov: 'PUTUMAYO',
			iddist: '160801',
			nombdist: 'PUTUMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.92279639899994, -2.917763900999944],
						[-73.92279639899994, -1.688806507999971],
						[-71.49336688399995, -1.688806507999971],
						[-71.49336688399995, -2.917763900999944],
						[-73.92279639899994, -2.917763900999944],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160110',
			nombdist: 'TORRES CAUSANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.41752798499994, -1.981984345999933],
						[-75.41752798499994, -0.639369968999972],
						[-74.41072073399994, -0.639369968999972],
						[-74.41072073399994, -1.981984345999933],
						[-75.41752798499994, -1.981984345999933],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1608',
			nombprov: 'PUTUMAYO',
			iddist: '160803',
			nombdist: 'TENIENTE MANUEL CLAVERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61061885999999, -1.450717622999946],
						[-75.61061885999999, -0.038605967999956],
						[-73.53860760799995, -0.038605967999956],
						[-73.53860760799995, -1.450717622999946],
						[-75.61061885999999, -1.450717622999946],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010104',
			nombdist: 'CHETO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.73541786199996, -6.339997474999962],
						[-77.73541786199996, -6.245949224999947],
						[-77.61757348699996, -6.245949224999947],
						[-77.61757348699996, -6.339997474999962],
						[-77.73541786199996, -6.339997474999962],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010510',
			nombdist: 'LUYA VIEJO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.18430911299998, -6.180562473999942],
						[-78.18430911299998, -6.040906098999926],
						[-78.05205136199999, -6.040906098999926],
						[-78.05205136199999, -6.180562473999942],
						[-78.18430911299998, -6.180562473999942],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010505',
			nombdist: 'CONILA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.30483236199996, -6.21695772399994],
						[-78.30483236199996, -6.017266723999967],
						[-78.08250973799994, -6.017266723999967],
						[-78.08250973799994, -6.21695772399994],
						[-78.30483236199996, -6.21695772399994],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090501',
			nombdist: 'CHURCAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.43769998399995, -12.800566355999933],
						[-74.43769998399995, -12.62467010599994],
						[-74.31196698399998, -12.62467010599994],
						[-74.31196698399998, -12.800566355999933],
						[-74.43769998399995, -12.800566355999933],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090506',
			nombdist: 'LOCROJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.50159760899999, -12.804996105999976],
						[-74.50159760899999, -12.618203104999964],
						[-74.42024710899994, -12.618203104999964],
						[-74.42024710899994, -12.804996105999976],
						[-74.50159760899999, -12.804996105999976],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090502',
			nombdist: 'ANCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.63647548399996, -12.730204729999969],
						[-74.63647548399996, -12.55423897999998],
						[-74.50244648399996, -12.55423897999998],
						[-74.50244648399996, -12.730204729999969],
						[-74.63647548399996, -12.730204729999969],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090509',
			nombdist: 'SAN PEDRO DE CORIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.49124998399998, -12.672849979999967],
						[-74.49124998399998, -12.523609979999947],
						[-74.32364998399999, -12.523609979999947],
						[-74.32364998399999, -12.672849979999967],
						[-74.49124998399998, -12.672849979999967],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150704',
			nombdist: 'CARAMPOMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.53126998499994, -11.71295310499994],
						[-76.53126998499994, -11.542297978999954],
						[-76.29676773599994, -11.542297978999954],
						[-76.29676773599994, -11.71295310499994],
						[-76.53126998499994, -11.71295310499994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150407',
			nombdist: 'SANTA ROSA DE QUIVES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.04433461599996, -11.756386662999944],
						[-77.04433461599996, -11.541540103999978],
						[-76.64176998599999, -11.541540103999978],
						[-76.64176998599999, -11.756386662999944],
						[-77.04433461599996, -11.756386662999944],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120205',
			nombdist: 'COCHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.20263410899997, -11.696839979999936],
						[-75.20263410899997, -11.52874410399994],
						[-75.07993998399996, -11.52874410399994],
						[-75.07993998399996, -11.696839979999936],
						[-75.20263410899997, -11.696839979999936],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120203',
			nombdist: 'ANDAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.99541360999996, -11.84756922899993],
						[-74.99541360999996, -11.528412354999944],
						[-74.71783785899999, -11.528412354999944],
						[-74.71783785899999, -11.84756922899993],
						[-74.99541360999996, -11.84756922899993],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120426',
			nombdist: 'POMACANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.80176360999997, -11.746849979999979],
						[-75.80176360999997, -11.522624479999934],
						[-75.60444998499997, -11.522624479999934],
						[-75.60444998499997, -11.746849979999979],
						[-75.80176360999997, -11.746849979999979],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150405',
			nombdist: 'LACHAQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.70996998599998, -11.60900997899995],
						[-76.70996998599998, -11.508272103999957],
						[-76.53611310999997, -11.508272103999957],
						[-76.53611310999997, -11.60900997899995],
						[-76.70996998599998, -11.60900997899995],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120209',
			nombdist: 'MARISCAL CASTILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.15168360899997, -11.655119853999963],
						[-75.15168360899997, -11.523669979999966],
						[-75.05481323399994, -11.523669979999966],
						[-75.05481323399994, -11.655119853999963],
						[-75.15168360899997, -11.655119853999963],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120808',
			nombdist: 'SANTA ROSA DE SACCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.06043448499997, -11.623330103999933],
						[-76.06043448499997, -11.503989978999925],
						[-75.90881998499998, -11.503989978999925],
						[-75.90881998499998, -11.623330103999933],
						[-76.06043448499997, -11.623330103999933],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150106',
			nombdist: 'CARABAYLLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.09308373599998, -11.910148229999947],
						[-77.09308373599998, -11.728776919999973],
						[-76.80486761099996, -11.728776919999973],
						[-76.80486761099996, -11.910148229999947],
						[-77.09308373599998, -11.910148229999947],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			iddist: '150904',
			nombdist: 'COCHAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.19595573699996, -11.016019978999964],
						[-77.19595573699996, -10.748205103999965],
						[-77.06299023599996, -10.748205103999965],
						[-77.06299023599996, -11.016019978999964],
						[-77.19595573699996, -11.016019978999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			iddist: '150906',
			nombdist: 'PACHANGARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.89212998599999, -10.93526997899994],
						[-76.89212998599999, -10.737429603999942],
						[-76.70695311099996, -10.737429603999942],
						[-76.70695311099996, -10.93526997899994],
						[-76.89212998599999, -10.93526997899994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			iddist: '150905',
			nombdist: 'NAVAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.11919998699994, -10.991210103999947],
						[-77.11919998699994, -10.732751978999943],
						[-76.97292973599997, -10.732751978999943],
						[-76.97292973599997, -10.991210103999947],
						[-77.11919998699994, -10.991210103999947],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190104',
			nombdist: 'HUAYLLAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.64748398599994, -11.155769978999956],
						[-76.64748398599994, -10.730939852999938],
						[-76.21462998499999, -10.730939852999938],
						[-76.21462998499999, -11.155769978999956],
						[-76.64748398599994, -11.155769978999956],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1701',
			nombprov: 'TAMBOPATA',
			iddist: '170104',
			nombdist: 'LABERINTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.73616010499995, -12.894086105999975],
						[-70.73616010499995, -11.897887853999976],
						[-69.43541797899996, -11.897887853999976],
						[-69.43541797899996, -12.894086105999975],
						[-70.73616010499995, -12.894086105999975],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1205',
			nombprov: 'JUNIN',
			iddist: '120504',
			nombdist: 'ULCUMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.96351223499994, -11.144853478999948],
						[-75.96351223499994, -10.727119978999951],
						[-75.38688998499998, -10.727119978999951],
						[-75.38688998499998, -11.144853478999948],
						[-75.96351223499994, -11.144853478999948],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021506',
			nombdist: 'LACABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.94595311199998, -8.322791601999938],
						[-77.94595311199998, -8.201389975999973],
						[-77.85168161199994, -8.201389975999973],
						[-77.85168161199994, -8.322791601999938],
						[-77.94595311199998, -8.322791601999938],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130812',
			nombdist: 'TAURIJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.50575586199994, -8.36814447599994],
						[-77.50575586199994, -8.200621100999967],
						[-77.37313673699998, -8.200621100999967],
						[-77.37313673699998, -8.36814447599994],
						[-77.50575586199994, -8.36814447599994],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190111',
			nombdist: 'TINYAHUARCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.31423998499997, -10.80620997799997],
						[-76.31423998499997, -10.717537102999927],
						[-76.17731435999997, -10.717537102999927],
						[-76.17731435999997, -10.80620997799997],
						[-76.31423998499997, -10.80620997799997],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2502',
			nombprov: 'ATALAYA',
			iddist: '250202',
			nombdist: 'SEPAHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.48563910799999, -11.448341979999952],
						[-73.48563910799999, -10.703454853999972],
						[-72.12016998199994, -10.703454853999972],
						[-72.12016998199994, -11.448341979999952],
						[-73.48563910799999, -11.448341979999952],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			iddist: '120304',
			nombdist: 'SAN LUIS DE SHUARO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.38572735999998, -10.923546852999948],
						[-75.38572735999998, -10.759429977999957],
						[-75.16114023499995, -10.759429977999957],
						[-75.16114023499995, -10.923546852999948],
						[-75.38572735999998, -10.923546852999948],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			iddist: '150903',
			nombdist: 'CAUJUL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03483611199994, -10.875849603999939],
						[-77.03483611199994, -10.68075947799997],
						[-76.94263473599995, -10.68075947799997],
						[-76.94263473599995, -10.875849603999939],
						[-77.03483611199994, -10.875849603999939],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150804',
			nombdist: 'CHECRAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.97292973599997, -11.022546853999927],
						[-76.97292973599997, -10.84351997899995],
						[-76.77566998599997, -10.84351997899995],
						[-76.77566998599997, -11.022546853999927],
						[-76.97292973599997, -11.022546853999927],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190101',
			nombdist: 'CHAUPIMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.26650186099994, -10.724755852999976],
						[-76.26650186099994, -10.67247260399995],
						[-76.22267185999993, -10.67247260399995],
						[-76.22267185999993, -10.724755852999976],
						[-76.26650186099994, -10.724755852999976],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			iddist: '150902',
			nombdist: 'ANDAJES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.98667386099999, -10.861689978999948],
						[-76.98667386099999, -10.667060102999926],
						[-76.87564998599998, -10.667060102999926],
						[-76.87564998599998, -10.861689978999948],
						[-76.98667386099999, -10.861689978999948],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			iddist: '120303',
			nombdist: 'PICHANAQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.08089648399994, -11.304131603999963],
						[-75.08089648399994, -10.700463228999979],
						[-74.62255723399994, -10.700463228999979],
						[-74.62255723399994, -11.304131603999963],
						[-75.08089648399994, -11.304131603999963],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190105',
			nombdist: 'NINACACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.19023998499995, -10.96263997899996],
						[-76.19023998499995, -10.626399978999927],
						[-75.86962998499996, -10.626399978999927],
						[-75.86962998499996, -10.96263997899996],
						[-76.19023998499995, -10.96263997899996],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			iddist: '120302',
			nombdist: 'PERENE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.27079998399995, -11.267576478999956],
						[-75.27079998399995, -10.65289447799995],
						[-74.86876010999998, -10.65289447799995],
						[-74.86876010999998, -11.267576478999956],
						[-75.27079998399995, -11.267576478999956],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1205',
			nombprov: 'JUNIN',
			iddist: '120502',
			nombdist: 'CARHUAMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.12292998499998, -11.004408228999978],
						[-76.12292998499998, -10.820830728999965],
						[-75.93592385999995, -10.820830728999965],
						[-75.93592385999995, -11.004408228999978],
						[-76.12292998499998, -11.004408228999978],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190112',
			nombdist: 'VICCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.30486998499998, -10.96031047899993],
						[-76.30486998499998, -10.776742852999973],
						[-76.17425998599998, -10.776742852999973],
						[-76.17425998599998, -10.96031047899993],
						[-76.30486998499998, -10.96031047899993],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			iddist: '120301',
			nombdist: 'CHANCHAMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.66895560999995, -11.265747353999927],
						[-75.66895560999995, -10.853229853999949],
						[-75.09474810999995, -10.853229853999949],
						[-75.09474810999995, -11.265747353999927],
						[-75.66895560999995, -11.265747353999927],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150812',
			nombdist: 'VEGUETA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70151561199998, -11.06110160399993],
						[-77.70151561199998, -10.860028352999961],
						[-77.52262686199998, -10.860028352999961],
						[-77.52262686199998, -11.06110160399993],
						[-77.70151561199998, -11.06110160399993],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150809',
			nombdist: 'SANTA LEONOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.78755273599995, -11.065819978999968],
						[-76.78755273599995, -10.84505072899998],
						[-76.56499411099998, -10.84505072899998],
						[-76.56499411099998, -11.065819978999968],
						[-76.78755273599995, -11.065819978999968],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130801',
			nombdist: 'TAYABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.38870311199997, -8.447948225999937],
						[-77.38870311199997, -8.183335976999956],
						[-77.10328936099995, -8.183335976999956],
						[-77.10328936099995, -8.447948225999937],
						[-77.38870311199997, -8.447948225999937],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130109',
			nombdist: 'SALAVERRY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.99936323799994, -8.37145310099993],
						[-78.99936323799994, -8.166667975999928],
						[-78.80245361299995, -8.166667975999928],
						[-78.80245361299995, -8.37145310099993],
						[-78.99936323799994, -8.37145310099993],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			iddist: '150901',
			nombdist: 'OYON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.90672023599996, -10.88854685399997],
						[-76.90672023599996, -10.419126978999941],
						[-76.58821161099996, -10.419126978999941],
						[-76.58821161099996, -10.88854685399997],
						[-76.90672023599996, -10.88854685399997],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190201',
			nombdist: 'YANAHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73024061099994, -10.746772852999982],
						[-76.73024061099994, -10.405152352999949],
						[-76.36770986099998, -10.405152352999949],
						[-76.36770986099998, -10.746772852999982],
						[-76.73024061099994, -10.746772852999982],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101007',
			nombdist: 'SAN MIGUEL DE CAURI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.80699998599994, -10.479066057999944],
						[-76.80699998599994, -10.095845727999972],
						[-76.47280436099999, -10.095845727999972],
						[-76.47280436099999, -10.479066057999944],
						[-76.80699998599994, -10.479066057999944],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1502',
			nombprov: 'BARRANCA',
			iddist: '150205',
			nombdist: 'SUPE PUERTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.75458398699999, -10.818700727999953],
						[-77.75458398699999, -10.757689478999964],
						[-77.68992186199995, -10.757689478999964],
						[-77.68992186199995, -10.818700727999953],
						[-77.75458398699999, -10.818700727999953],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1502',
			nombprov: 'BARRANCA',
			iddist: '150204',
			nombdist: 'SUPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.75086023699998, -10.931980477999957],
						[-77.75086023699998, -10.702527353999926],
						[-77.36546336199996, -10.702527353999926],
						[-77.36546336199996, -10.931980477999957],
						[-77.75086023699998, -10.931980477999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020507',
			nombdist: 'COLQUIOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.69960811199996, -10.390184727999952],
						[-77.69960811199996, -10.206711478999978],
						[-77.46252148699995, -10.206711478999978],
						[-77.46252148699995, -10.390184727999952],
						[-77.69960811199996, -10.390184727999952],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1502',
			nombprov: 'BARRANCA',
			iddist: '150201',
			nombdist: 'BARRANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.79386323699998, -10.782603478999931],
						[-77.79386323699998, -10.662689200999978],
						[-77.56314382999994, -10.662689200999978],
						[-77.56314382999994, -10.782603478999931],
						[-77.79386323699998, -10.782603478999931],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150802',
			nombdist: 'AMBAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.46222073699994, -10.968166853999946],
						[-77.46222073699994, -10.606449353999949],
						[-77.00795998599995, -10.606449353999949],
						[-77.00795998599995, -10.968166853999946],
						[-77.46222073699994, -10.968166853999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021409',
			nombdist: 'SAN PEDRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74669361699995, -10.614245597999968],
						[-77.74669361699995, -10.344276477999927],
						[-77.42788336199999, -10.344276477999927],
						[-77.42788336199999, -10.614245597999968],
						[-77.74669361699995, -10.614245597999968],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021405',
			nombdist: 'COCHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.59328021199997, -10.786449562999962],
						[-77.59328021199997, -10.52726372899997],
						[-77.34692011099997, -10.52726372899997],
						[-77.34692011099997, -10.786449562999962],
						[-77.59328021199997, -10.786449562999962],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1502',
			nombprov: 'BARRANCA',
			iddist: '150203',
			nombdist: 'PATIVILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.81647848699998, -10.735636728999964],
						[-77.81647848699998, -10.502034568999932],
						[-77.57325836199993, -10.502034568999932],
						[-77.57325836199993, -10.735636728999964],
						[-77.81647848699998, -10.735636728999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1502',
			nombprov: 'BARRANCA',
			iddist: '150202',
			nombdist: 'PARAMONGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88659211099997, -10.693716852999955],
						[-77.88659211099997, -10.320699977999936],
						[-77.59759311199997, -10.320699977999936],
						[-77.59759311199997, -10.693716852999955],
						[-77.88659211099997, -10.693716852999955],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0211',
			nombprov: 'HUARMEY',
			iddist: '021101',
			nombdist: 'HUARMEY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.19707036199998, -10.612055273999943],
						[-78.19707036199998, -9.81116160299996],
						[-77.65625761099994, -9.81116160299996],
						[-77.65625761099994, -10.612055273999943],
						[-78.19707036199998, -10.612055273999943],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			iddist: '160206',
			nombdist: 'LAGUNAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.42267654499994, -5.496970734999934],
						[-76.42267654499994, -3.68152917499998],
						[-75.38563929699995, -3.68152917499998],
						[-75.38563929699995, -5.496970734999934],
						[-76.42267654499994, -5.496970734999934],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1603',
			nombprov: 'LORETO',
			iddist: '160305',
			nombdist: 'URARINAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.32513738499995, -5.054922255999941],
						[-76.32513738499995, -3.528056596999932],
						[-74.72747435899998, -3.528056596999932],
						[-74.72747435899998, -5.054922255999941],
						[-76.32513738499995, -5.054922255999941],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			iddist: '160205',
			nombdist: 'JEBEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.64145157699994, -5.671580800999948],
						[-76.64145157699994, -4.986603472999946],
						[-75.66457108099996, -4.986603472999946],
						[-75.66457108099996, -5.671580800999948],
						[-76.64145157699994, -5.671580800999948],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			iddist: '160702',
			nombdist: 'CAHUAPANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.26827048699994, -5.746232473999953],
						[-77.26827048699994, -4.847347597999942],
						[-76.44576388499996, -4.847347597999942],
						[-76.44576388499996, -5.746232473999953],
						[-77.26827048699994, -5.746232473999953],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			iddist: '160202',
			nombdist: 'BALSAPUERTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.89453711099998, -6.017197973999942],
						[-76.89453711099998, -5.435969473999933],
						[-76.30037981499999, -5.435969473999933],
						[-76.30037981499999, -6.017197973999942],
						[-76.89453711099998, -6.017197973999942],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120608',
			nombdist: 'RIO TAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.70201998399995, -12.386985855999967],
						[-74.70201998399995, -10.734008228999926],
						[-73.35512948299998, -10.734008228999926],
						[-73.35512948299998, -12.386985855999967],
						[-74.70201998399995, -12.386985855999967],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080909',
			nombdist: 'VILCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.45515410799999, -13.42646081199996],
						[-73.45515410799999, -12.658887854999932],
						[-72.64644723199996, -12.658887854999932],
						[-72.64644723199996, -13.42646081199996],
						[-73.45515410799999, -13.42646081199996],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190109',
			nombdist: 'SIMON BOLIVAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.67096423599997, -10.861340477999931],
						[-76.67096423599997, -10.578009977999955],
						[-76.25441785999999, -10.578009977999955],
						[-76.25441785999999, -10.861340477999931],
						[-76.67096423599997, -10.861340477999931],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1503',
			nombprov: 'CAJATAMBO',
			iddist: '150303',
			nombdist: 'GORGOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.12615198599997, -10.69810935399994],
						[-77.12615198599997, -10.542605227999957],
						[-76.85941711099997, -10.542605227999957],
						[-76.85941711099997, -10.69810935399994],
						[-77.12615198599997, -10.69810935399994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1503',
			nombprov: 'CAJATAMBO',
			iddist: '150305',
			nombdist: 'MANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.34470323699998, -10.68682985299995],
						[-77.34470323699998, -10.541726602999972],
						[-77.10505861199994, -10.541726602999972],
						[-77.10505861199994, -10.68682985299995],
						[-77.34470323699998, -10.68682985299995],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190107',
			nombdist: 'PAUCARTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.99328898499994, -10.889722603999928],
						[-75.99328898499994, -10.620555227999944],
						[-75.51052210999995, -10.620555227999944],
						[-75.51052210999995, -10.889722603999928],
						[-75.99328898499994, -10.889722603999928],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130608',
			nombdist: 'MACHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.57399323699997, -8.085697600999936],
						[-78.57399323699997, -7.993355475999976],
						[-78.49135161299995, -7.993355475999976],
						[-78.49135161299995, -8.085697600999936],
						[-78.57399323699997, -8.085697600999936],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1305',
			nombprov: 'JULCAN',
			iddist: '130501',
			nombdist: 'JULCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.53589898799999, -8.208349600999952],
						[-78.53589898799999, -7.990096476999952],
						[-78.35162373699995, -7.990096476999952],
						[-78.35162373699995, -8.208349600999952],
						[-78.53589898799999, -8.208349600999952],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130106',
			nombdist: 'LAREDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.00091011299997, -8.209552350999957],
						[-79.00091011299997, -7.96745410099993],
						[-78.63763173799998, -7.96745410099993],
						[-78.63763173799998, -8.209552350999957],
						[-79.00091011299997, -8.209552350999957],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130611',
			nombdist: 'SALPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.72305448799995, -8.098738225999966],
						[-78.72305448799995, -7.960165975999928],
						[-78.54971873799997, -7.960165975999928],
						[-78.54971873799997, -8.098738225999966],
						[-78.72305448799995, -8.098738225999966],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131008',
			nombdist: 'SITABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.97063386199994, -8.08214260099993],
						[-77.97063386199994, -7.957606225999939],
						[-77.64036673699997, -7.957606225999939],
						[-77.64036673699997, -8.08214260099993],
						[-77.97063386199994, -8.08214260099993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130806',
			nombdist: 'HUAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.64934173699999, -8.092687850999937],
						[-77.64934173699999, -7.955047100999934],
						[-77.50710211199998, -7.955047100999934],
						[-77.50710211199998, -8.092687850999937],
						[-77.64934173699999, -8.092687850999937],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021902',
			nombdist: 'ACOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.65986961199997, -8.355939475999946],
						[-77.65986961199997, -8.236415975999932],
						[-77.47522448599995, -8.236415975999932],
						[-77.47522448599995, -8.355939475999946],
						[-77.65986961199997, -8.355939475999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021508',
			nombdist: 'PALLASCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.09486998699998, -8.32212335099996],
						[-78.09486998699998, -8.201389975999973],
						[-77.94012023699997, -8.201389975999973],
						[-77.94012023699997, -8.32212335099996],
						[-78.09486998699998, -8.32212335099996],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1312',
			nombprov: 'VIRU',
			iddist: '131202',
			nombdist: 'CHAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.75561861299997, -8.775022726999964],
						[-78.75561861299997, -8.321259725999937],
						[-78.23557823799996, -8.321259725999937],
						[-78.23557823799996, -8.775022726999964],
						[-78.75561861299997, -8.775022726999964],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021907',
			nombdist: 'QUICHES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.59638086099994, -8.46953935099998],
						[-77.59638086099994, -8.317927101999942],
						[-77.43657923699999, -8.317927101999942],
						[-77.43657923699999, -8.46953935099998],
						[-77.59638086099994, -8.46953935099998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021905',
			nombdist: 'CHINGALPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74285611199997, -8.430017600999975],
						[-77.74285611199997, -8.303943226999934],
						[-77.54168548699994, -8.303943226999934],
						[-77.54168548699994, -8.430017600999975],
						[-77.74285611199997, -8.430017600999975],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2210',
			nombprov: 'TOCACHE',
			iddist: '221002',
			nombdist: 'NUEVO PROGRESO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.35048361099996, -8.796294976999945],
						[-76.35048361099996, -8.298000975999969],
						[-76.10699998499996, -8.298000975999969],
						[-76.10699998499996, -8.796294976999945],
						[-76.35048361099996, -8.796294976999945],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020907',
			nombdist: 'YUPAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.03586723699993, -8.690087851999976],
						[-78.03586723699993, -8.58040035099998],
						[-77.90880661199998, -8.58040035099998],
						[-77.90880661199998, -8.690087851999976],
						[-78.03586723699993, -8.690087851999976],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130813',
			nombdist: 'URPAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.44836948599993, -8.387003850999974],
						[-77.44836948599993, -8.263838226999951],
						[-77.31268948699994, -8.263838226999951],
						[-77.31268948699994, -8.387003850999974],
						[-77.44836948599993, -8.387003850999974],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2210',
			nombprov: 'TOCACHE',
			iddist: '221004',
			nombdist: 'SHUNTE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.14256536099998, -8.570159726999975],
						[-77.14256536099998, -8.255531476999977],
						[-76.66878223599997, -8.255531476999977],
						[-76.66878223599997, -8.570159726999975],
						[-77.14256536099998, -8.570159726999975],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021910',
			nombdist: 'SICSIBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.58778911199994, -8.698140725999963],
						[-77.58778911199994, -8.57547060099995],
						[-77.47573436199997, -8.57547060099995],
						[-77.47573436199997, -8.698140725999963],
						[-77.58778911199994, -8.698140725999963],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131007',
			nombdist: 'SANTA CRUZ DE CHUCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.16111323799998, -8.310689975999935],
						[-78.16111323799998, -8.061502476999976],
						[-78.01351948799999, -8.061502476999976],
						[-78.01351948799999, -8.310689975999935],
						[-78.16111323799998, -8.310689975999935],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1009',
			nombprov: 'PUERTO INCA',
			iddist: '100903',
			nombdist: 'HONORIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.91131260899994, -8.88215435199993],
						[-74.91131260899994, -8.548381225999947],
						[-74.52535123399997, -8.548381225999947],
						[-74.52535123399997, -8.88215435199993],
						[-74.91131260899994, -8.88215435199993],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040809',
			nombdist: 'TAURIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.28364560799997, -15.517359732999978],
						[-73.28364560799997, -15.304685607999943],
						[-73.06797785699996, -15.304685607999943],
						[-73.06797785699996, -15.517359732999978],
						[-73.28364560799997, -15.517359732999978],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021904',
			nombdist: 'CASHAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.71032148699999, -8.631523725999955],
						[-77.71032148699999, -8.536695350999935],
						[-77.60299098699994, -8.536695350999935],
						[-77.60299098699994, -8.631523725999955],
						[-77.71032148699999, -8.631523725999955],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130804',
			nombdist: 'HUANCASPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.39210736099994, -8.53327272699994],
						[-77.39210736099994, -8.35334572599993],
						[-77.13384373599996, -8.35334572599993],
						[-77.13384373599996, -8.53327272699994],
						[-77.39210736099994, -8.53327272699994],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250104',
			nombdist: 'MASISEA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.53254998399996, -9.684205101999964],
						[-74.53254998399996, -8.336744101999955],
						[-72.93998635699995, -8.336744101999955],
						[-72.93998635699995, -9.684205101999964],
						[-74.53254998399996, -9.684205101999964],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021502',
			nombdist: 'BOLOGNESI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13550586299993, -8.386841850999929],
						[-78.13550586299993, -8.295177725999963],
						[-77.99128598699997, -8.295177725999963],
						[-77.99128598699997, -8.386841850999929],
						[-78.13550586299993, -8.386841850999929],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040310',
			nombdist: 'JAQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.51006523299998, -15.589230482999938],
						[-74.51006523299998, -15.301620482999965],
						[-74.24117573399997, -15.301620482999965],
						[-74.24117573399997, -15.589230482999938],
						[-74.51006523299998, -15.589230482999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021504',
			nombdist: 'HUACASCHUQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.01580261199996, -8.322576225999967],
						[-78.01580261199996, -8.283595726999977],
						[-77.96493548699993, -8.283595726999977],
						[-77.96493548699993, -8.322576225999967],
						[-78.01580261199996, -8.322576225999967],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120114',
			nombdist: 'EL TAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24739510899997, -12.07152997999998],
						[-75.24739510899997, -11.872558478999963],
						[-75.05347460899998, -11.872558478999963],
						[-75.05347460899998, -12.07152997999998],
						[-75.24739510899997, -12.07152997999998],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040515',
			nombdist: 'SIBAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.63324735699996, -15.52608960799995],
						[-71.63324735699996, -15.17426973299996],
						[-71.41374223099996, -15.17426973299996],
						[-71.41374223099996, -15.52608960799995],
						[-71.63324735699996, -15.52608960799995],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210701',
			nombdist: 'LAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.53394235499997, -15.505537107999942],
						[-70.53394235499997, -15.170451231999948],
						[-70.26586197999995, -15.170451231999948],
						[-70.26586197999995, -15.505537107999942],
						[-70.53394235499997, -15.505537107999942],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			iddist: '220106',
			nombdist: 'YANTALO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.14838998599998, -6.02173047399998],
						[-77.14838998599998, -5.923905723999951],
						[-77.00192636099996, -5.923905723999951],
						[-77.00192636099996, -6.02173047399998],
						[-77.14838998599998, -6.02173047399998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060808',
			nombdist: 'PUCARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.21320898899995, -6.134064473999956],
						[-79.21320898899995, -5.923389848999932],
						[-79.02571286299997, -5.923389848999932],
						[-79.02571286299997, -6.134064473999956],
						[-79.21320898899995, -6.134064473999956],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021505',
			nombdist: 'HUANDOVAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.03190236199998, -8.385280726999952],
						[-78.03190236199998, -8.272333600999957],
						[-77.87245673699994, -8.272333600999957],
						[-77.87245673699994, -8.385280726999952],
						[-78.03190236199998, -8.385280726999952],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040808',
			nombdist: 'SAYLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.29380035799994, -15.380392982999979],
						[-73.29380035799994, -15.286091856999974],
						[-73.17454523299995, -15.286091856999974],
						[-73.17454523299995, -15.380392982999979],
						[-73.29380035799994, -15.380392982999979],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210205',
			nombdist: 'CAMINACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.16280760499995, -15.383893261999958],
						[-70.16280760499995, -15.207656232999966],
						[-70.04226635499998, -15.207656232999966],
						[-70.04226635499998, -15.383893261999958],
						[-70.16280760499995, -15.383893261999958],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210103',
			nombdist: 'AMANTANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.72730660399998, -15.798122983999974],
						[-69.72730660399998, -15.648505857999965],
						[-69.67548635399999, -15.648505857999965],
						[-69.67548635399999, -15.798122983999974],
						[-69.72730660399998, -15.798122983999974],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120431',
			nombdist: 'SINCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.64177685999994, -12.027329979999934],
						[-75.64177685999994, -11.874244479999959],
						[-75.35786248499994, -11.874244479999959],
						[-75.35786248499994, -12.027329979999934],
						[-75.64177685999994, -12.027329979999934],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150717',
			nombdist: 'SAN BARTOLOME',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.53725961099997, -11.968655979999937],
						[-76.53725961099997, -11.863492228999974],
						[-76.45273636099995, -11.863492228999974],
						[-76.45273636099995, -11.968655979999937],
						[-76.53725961099997, -11.968655979999937],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			iddist: '040607',
			nombdist: 'SALAMANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.90509798199997, -15.626334233999955],
						[-72.90509798199997, -15.197658481999952],
						[-72.50758360699996, -15.197658481999952],
						[-72.50758360699996, -15.626334233999955],
						[-72.90509798199997, -15.626334233999955],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210706',
			nombdist: 'PALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.77378485599996, -15.420619107999926],
						[-70.77378485599996, -15.185511607999956],
						[-70.46661147999998, -15.185511607999956],
						[-70.46661147999998, -15.420619107999926],
						[-70.77378485599996, -15.420619107999926],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210210',
			nombdist: 'SAMAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.10508010499996, -15.402834982999934],
						[-70.10508010499996, -15.184114982999972],
						[-69.88774310399998, -15.184114982999972],
						[-69.88774310399998, -15.402834982999934],
						[-70.10508010499996, -15.402834982999934],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040801',
			nombdist: 'COTAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.94179535799998, -15.406326232999959],
						[-72.94179535799998, -15.180843357999947],
						[-72.78667448199997, -15.180843357999947],
						[-72.78667448199997, -15.406326232999959],
						[-72.94179535799998, -15.406326232999959],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120210',
			nombdist: 'MATAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.40099498499995, -11.909242478999943],
						[-75.40099498499995, -11.856812228999956],
						[-75.32663085999997, -11.856812228999956],
						[-75.32663085999997, -11.909242478999943],
						[-75.40099498499995, -11.909242478999943],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190108',
			nombdist: 'SAN FRANCISCO DE ASIS DE YARUSYACAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.27330998599996, -10.653097352999964],
						[-76.27330998599996, -10.443824228999972],
						[-76.17903998499997, -10.443824228999972],
						[-76.17903998499997, -10.653097352999964],
						[-76.27330998599996, -10.653097352999964],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100501',
			nombdist: 'LLATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.04865823599994, -9.760236352999925],
						[-77.04865823599994, -9.514757851999946],
						[-76.72760548599996, -9.514757851999946],
						[-76.72760548599996, -9.760236352999925],
						[-77.04865823599994, -9.760236352999925],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040807',
			nombdist: 'QUECHUALLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.17213435799994, -15.346482107999975],
						[-73.17213435799994, -15.229904232999957],
						[-72.95873260699994, -15.229904232999957],
						[-72.95873260699994, -15.346482107999975],
						[-73.17213435799994, -15.346482107999975],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040811',
			nombdist: 'TORO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.19602198299998, -15.572004357999958],
						[-73.19602198299998, -15.222972857999935],
						[-72.87763210699995, -15.222972857999935],
						[-72.87763210699995, -15.572004357999958],
						[-73.19602198299998, -15.572004357999958],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2109',
			nombprov: 'MOHO',
			iddist: '210901',
			nombdist: 'MOHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.66919885399994, -15.472966232999966],
						[-69.66919885399994, -15.212289107999936],
						[-69.23233460399996, -15.212289107999936],
						[-69.23233460399996, -15.472966232999966],
						[-69.66919885399994, -15.472966232999966],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210704',
			nombdist: 'NICASIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.35739847999997, -15.284097607999968],
						[-70.35739847999997, -15.165539857999931],
						[-70.22591997999996, -15.165539857999931],
						[-70.22591997999996, -15.284097607999968],
						[-70.35739847999997, -15.284097607999968],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210606',
			nombdist: 'ROSASPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.62269585399997, -15.308938982999962],
						[-69.62269585399997, -15.131771481999976],
						[-69.34325697899999, -15.131771481999976],
						[-69.34325697899999, -15.308938982999962],
						[-69.62269585399997, -15.308938982999962],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080802',
			nombdist: 'CONDOROMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.20207972999998, -15.458288232999962],
						[-71.20207972999998, -15.123972857999945],
						[-70.95003222999998, -15.123972857999945],
						[-70.95003222999998, -15.458288232999962],
						[-71.20207972999998, -15.458288232999962],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			iddist: '210710',
			nombdist: 'VILAVILA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.73238535499996, -15.24398223299994],
						[-70.73238535499996, -15.115212482999937],
						[-70.56251172999998, -15.115212482999937],
						[-70.56251172999998, -15.24398223299994],
						[-70.73238535499996, -15.24398223299994],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040802',
			nombdist: 'ALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.81849673199997, -15.24315835799996],
						[-72.81849673199997, -15.077779732999943],
						[-72.62933348199994, -15.077779732999943],
						[-72.62933348199994, -15.24315835799996],
						[-72.81849673199997, -15.24315835799996],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210601',
			nombdist: 'HUANCANE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.90322685499996, -15.320072982999932],
						[-69.90322685499996, -15.046996107999973],
						[-69.69916885499998, -15.046996107999973],
						[-69.69916885499998, -15.320072982999932],
						[-69.90322685499996, -15.320072982999932],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2109',
			nombprov: 'MOHO',
			iddist: '210903',
			nombdist: 'HUAYRAPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.42535347899997, -15.38987760799995],
						[-69.42535347899997, -15.162219481999955],
						[-69.17320860399997, -15.162219481999955],
						[-69.17320860399997, -15.38987760799995],
						[-69.42535347899997, -15.38987760799995],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210608',
			nombdist: 'VILQUE CHICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.77000960399994, -15.271365857999967],
						[-69.77000960399994, -15.042525357999978],
						[-69.39340235499998, -15.042525357999978],
						[-69.39340235499998, -15.271365857999967],
						[-69.77000960399994, -15.271365857999967],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210206',
			nombdist: 'CHUPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.01715797899993, -15.205824857999971],
						[-70.01715797899993, -15.017164857999944],
						[-69.87660935499997, -15.017164857999944],
						[-69.87660935499997, -15.205824857999971],
						[-70.01715797899993, -15.205824857999971],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210202',
			nombdist: 'ACHAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.25108622999994, -15.31399235799995],
						[-70.25108622999994, -15.159772482999927],
						[-70.11226560499995, -15.159772482999927],
						[-70.11226560499995, -15.31399235799995],
						[-70.25108622999994, -15.31399235799995],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040311',
			nombdist: 'LOMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.07332610999998, -15.57333185799996],
						[-75.07332610999998, -15.151152232999948],
						[-74.82711023399997, -15.151152232999948],
						[-74.82711023399997, -15.57333185799996],
						[-75.07332610999998, -15.57333185799996],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040810',
			nombdist: 'TOMEPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.85868835699995, -15.253165232999947],
						[-72.85868835699995, -15.151144982999938],
						[-72.69339748199997, -15.151144982999938],
						[-72.69339748199997, -15.253165232999947],
						[-72.85868835699995, -15.253165232999947],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			iddist: '040406',
			nombdist: 'CHOCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.23764798199994, -15.711843483999928],
						[-72.23764798199994, -15.135450232999972],
						[-71.90141298099996, -15.135450232999972],
						[-71.90141298099996, -15.711843483999928],
						[-72.23764798199994, -15.711843483999928],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			iddist: '040803',
			nombdist: 'CHARCANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.14695735699996, -15.274497982999947],
						[-73.14695735699996, -15.13234423299997],
						[-72.95022585799995, -15.13234423299997],
						[-72.95022585799995, -15.274497982999947],
						[-73.14695735699996, -15.274497982999947],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140310',
			nombdist: 'SALAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.70806448899998, -6.406457723999949],
						[-79.70806448899998, -5.912769473999958],
						[-79.40181348799996, -5.912769473999958],
						[-79.40181348799996, -6.406457723999949],
						[-79.70806448899998, -6.406457723999949],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160511',
			nombdist: 'YAQUERANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.88038123299998, -7.113060974999939],
						[-73.88038123299998, -4.970566347999977],
						[-72.85496835699996, -4.970566347999977],
						[-72.85496835699996, -7.113060974999939],
						[-73.88038123299998, -7.113060974999939],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160501',
			nombdist: 'REQUENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.17742185799995, -5.783781223999938],
						[-74.17742185799995, -4.946513723999942],
						[-73.60119198299998, -4.946513723999942],
						[-73.60119198299998, -5.783781223999938],
						[-74.17742185799995, -5.783781223999938],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150723',
			nombdist: 'SAN MATEO DE OTAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.63333998599995, -11.908029978999934],
						[-76.63333998599995, -11.765056603999938],
						[-76.44109960999998, -11.765056603999938],
						[-76.44109960999998, -11.908029978999934],
						[-76.63333998599995, -11.908029978999934],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160507',
			nombdist: 'SAQUENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.71298360799994, -5.097503847999974],
						[-73.71298360799994, -4.446356222999952],
						[-73.10196585799997, -4.446356222999952],
						[-73.10196585799997, -5.097503847999974],
						[-73.71298360799994, -5.097503847999974],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0216',
			nombprov: 'POMABAMBA',
			iddist: '021602',
			nombdist: 'HUAYLLAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.57778298699998, -8.92336372699998],
						[-77.57778298699998, -8.846982476999926],
						[-77.36779686099999, -8.846982476999926],
						[-77.36779686099999, -8.92336372699998],
						[-77.57778298699998, -8.92336372699998],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150728',
			nombdist: 'SANTA EULALIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.70401736099996, -11.925504604999958],
						[-76.70401736099996, -11.762904478999928],
						[-76.59384998599995, -11.762904478999928],
						[-76.59384998599995, -11.925504604999958],
						[-76.70401736099996, -11.925504604999958],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120401',
			nombdist: 'JAUJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.51722660999997, -11.792146479999928],
						[-75.51722660999997, -11.75754685499993],
						[-75.45796998499998, -11.75754685499993],
						[-75.45796998499998, -11.792146479999928],
						[-75.51722660999997, -11.792146479999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0207',
			nombprov: 'CARLOS FERMIN FITZCARRALD',
			iddist: '020702',
			nombdist: 'SAN NICOLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.25948236099998, -9.16586747699995],
						[-77.25948236099998, -8.895384726999964],
						[-77.10249023599994, -8.895384726999964],
						[-77.10249023599994, -9.16586747699995],
						[-77.25948236099998, -9.16586747699995],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021305',
			nombdist: 'LLAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.32428698599995, -8.94749410199995],
						[-77.32428698599995, -8.861357476999956],
						[-77.24626948599996, -8.861357476999956],
						[-77.24626948599996, -8.94749410199995],
						[-77.32428698599995, -8.94749410199995],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021303',
			nombdist: 'ELEAZAR GUZMAN BARRON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28567573699996, -8.93505272699997],
						[-77.28567573699996, -8.841126601999974],
						[-77.15953323599996, -8.841126601999974],
						[-77.15953323599996, -8.93505272699997],
						[-77.28567573699996, -8.93505272699997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021802',
			nombdist: 'CACERES DEL PERU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.19584573799995, -9.086881852999966],
						[-78.19584573799995, -8.840219976999947],
						[-77.94030598699999, -8.840219976999947],
						[-77.94030598699999, -9.086881852999966],
						[-78.19584573799995, -9.086881852999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021204',
			nombdist: 'HUAYLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.95099248699995, -8.927474601999961],
						[-77.95099248699995, -8.838564976999976],
						[-77.84488673699997, -8.838564976999976],
						[-77.84488673699997, -8.927474601999961],
						[-77.95099248699995, -8.927474601999961],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021308',
			nombdist: 'MUSGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.36779686099999, -8.94871872699997],
						[-77.36779686099999, -8.836655976999964],
						[-77.28329061099998, -8.836655976999964],
						[-77.28329061099998, -8.94871872699997],
						[-77.36779686099999, -8.94871872699997],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101101',
			nombdist: 'CHAVINILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.64957036099997, -9.88988472799997],
						[-76.64957036099997, -9.726869101999966],
						[-76.46319723499994, -9.726869101999966],
						[-76.46319723499994, -9.88988472799997],
						[-76.64957036099997, -9.88988472799997],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100109',
			nombdist: 'SANTA MARIA DEL VALLE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.48399411099996, -9.925390602999926],
						[-76.48399411099996, -9.650523476999979],
						[-76.10923235999996, -9.650523476999979],
						[-76.10923235999996, -9.925390602999926],
						[-76.48399411099996, -9.925390602999926],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2502',
			nombprov: 'ATALAYA',
			iddist: '250203',
			nombdist: 'TAHUANIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.42459123399993, -10.377361353999959],
						[-74.42459123399993, -9.52774822799995],
						[-73.15194923199994, -9.52774822799995],
						[-73.15194923199994, -10.377361353999959],
						[-74.42459123399993, -10.377361353999959],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100104',
			nombdist: 'CHURUBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.43154561099993, -9.888964852999948],
						[-76.43154561099993, -9.512421851999932],
						[-76.06087885999995, -9.512421851999932],
						[-76.06087885999995, -9.888964852999948],
						[-76.43154561099993, -9.888964852999948],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100311',
			nombdist: 'MARIAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.71900973599998, -9.707898477999947],
						[-76.71900973599998, -9.388478477999968],
						[-76.19904111099999, -9.388478477999968],
						[-76.19904111099999, -9.707898477999947],
						[-76.71900973599998, -9.707898477999947],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101003',
			nombdist: 'JIVIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.71900973599998, -10.081093727999928],
						[-76.71900973599998, -9.98793360299993],
						[-76.57823436099994, -9.98793360299993],
						[-76.57823436099994, -10.081093727999928],
						[-76.71900973599998, -10.081093727999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020509',
			nombdist: 'HUASTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.16208011199996, -10.20535347799995],
						[-77.16208011199996, -9.977339602999962],
						[-76.90853511099994, -9.977339602999962],
						[-76.90853511099994, -10.20535347799995],
						[-77.16208011199996, -10.20535347799995],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021706',
			nombdist: 'MARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.54604686199997, -10.175363352999966],
						[-77.54604686199997, -9.96800785299996],
						[-77.38520273699999, -9.96800785299996],
						[-77.38520273699999, -10.175363352999966],
						[-77.54604686199997, -10.175363352999966],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060809',
			nombdist: 'SALLIQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.39897073799995, -5.748107473999937],
						[-79.39897073799995, -5.501628097999969],
						[-79.21647923799998, -5.501628097999969],
						[-79.21647923799998, -5.748107473999937],
						[-79.39897073799995, -5.748107473999937],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			iddist: '010201',
			nombdist: 'BAGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.56688748799996, -5.686599598999976],
						[-78.56688748799996, -5.481767098999967],
						[-78.46435361199997, -5.481767098999967],
						[-78.46435361199997, -5.686599598999976],
						[-78.56688748799996, -5.686599598999976],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100112',
			nombdist: 'YACUS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.57767773599994, -9.991479977999973],
						[-76.57767773599994, -9.903287602999967],
						[-76.45761036099998, -9.903287602999967],
						[-76.45761036099998, -9.991479977999973],
						[-76.57767773599994, -9.991479977999973],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060611',
			nombdist: 'SANTA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.89828311299993, -6.182330098999955],
						[-78.89828311299993, -6.023896973999968],
						[-78.77260011299995, -6.023896973999968],
						[-78.77260011299995, -6.182330098999955],
						[-78.89828311299993, -6.182330098999955],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060602',
			nombdist: 'CALLAYUC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.05218186399998, -6.272228473999974],
						[-79.05218186399998, -6.012576723999928],
						[-78.80456023799997, -6.012576723999928],
						[-78.80456023799997, -6.272228473999974],
						[-79.05218186399998, -6.272228473999974],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061112',
			nombdist: 'TONGOD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.88844248799995, -6.886189474999981],
						[-78.88844248799995, -6.692246849999947],
						[-78.75752923799996, -6.692246849999947],
						[-78.75752923799996, -6.886189474999981],
						[-78.88844248799995, -6.886189474999981],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220508',
			nombdist: 'SAN ROQUE DE CUMBAZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.68729686099994, -6.404120473999967],
						[-76.68729686099994, -6.001566022999953],
						[-76.36592998599997, -6.001566022999953],
						[-76.36592998599997, -6.404120473999967],
						[-76.68729686099994, -6.404120473999967],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021707',
			nombdist: 'PAMPAS CHICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.44423048599998, -10.160530852999955],
						[-77.44423048599998, -10.01134435299997],
						[-77.31998323599998, -10.01134435299997],
						[-77.31998323599998, -10.160530852999955],
						[-77.44423048599998, -10.160530852999955],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021708',
			nombdist: 'PARARIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77527536199995, -10.249860227999932],
						[-77.77527536199995, -9.989904352999929],
						[-77.56686123699996, -9.989904352999929],
						[-77.56686123699996, -10.249860227999932],
						[-77.77527536199995, -10.249860227999932],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010516',
			nombdist: 'SAN CRISTOBAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.04144336199994, -6.117841849999934],
						[-78.04144336199994, -6.037767598999949],
						[-77.91984373699995, -6.037767598999949],
						[-77.91984373699995, -6.117841849999934],
						[-78.04144336199994, -6.117841849999934],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010704',
			nombdist: 'EL MILAGRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.68883311299999, -5.87086434899993],
						[-78.68883311299999, -5.53803972399993],
						[-78.53361861299999, -5.53803972399993],
						[-78.53361861299999, -5.87086434899993],
						[-78.68883311299999, -5.87086434899993],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010107',
			nombdist: 'GRANADA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.67160548699997, -6.166135723999958],
						[-77.67160548699997, -6.028006848999951],
						[-77.49549461199996, -6.028006848999951],
						[-77.49549461199996, -6.166135723999958],
						[-77.67160548699997, -6.166135723999958],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160505',
			nombdist: 'MAQUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.97550973499995, -7.322035100999926],
						[-74.97550973499995, -5.530859348999968],
						[-74.45724398399994, -5.530859348999968],
						[-74.45724398399994, -7.322035100999926],
						[-74.97550973499995, -7.322035100999926],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010117',
			nombdist: 'QUINJALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74851948699995, -6.172847348999937],
						[-77.74851948699995, -6.025533223999958],
						[-77.63428123599994, -6.025533223999958],
						[-77.63428123599994, -6.172847348999937],
						[-77.74851948699995, -6.172847348999937],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060803',
			nombdist: 'CHONTALI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.26124161399997, -5.733781223999927],
						[-79.26124161399997, -5.502084972999967],
						[-78.97051773799996, -5.502084972999967],
						[-78.97051773799996, -5.733781223999927],
						[-79.26124161399997, -5.733781223999927],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010311',
			nombdist: 'VALERA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.93778886199993, -6.130531223999981],
						[-77.93778886199993, -6.025282973999936],
						[-77.79054486199993, -6.025282973999936],
						[-77.79054486199993, -6.130531223999981],
						[-77.93778886199993, -6.130531223999981],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010304',
			nombdist: 'COROSHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.85773048699997, -5.869773848999955],
						[-77.85773048699997, -5.775321223999981],
						[-77.76077098699994, -5.775321223999981],
						[-77.76077098699994, -5.869773848999955],
						[-77.85773048699997, -5.869773848999955],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060407',
			nombdist: 'COCHABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.92440236299996, -6.563109349999934],
						[-78.92440236299996, -6.427148473999978],
						[-78.76663673799999, -6.427148473999978],
						[-78.76663673799999, -6.563109349999934],
						[-78.92440236299996, -6.563109349999934],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010511',
			nombdist: 'MARIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.00330073699996, -6.574881974999926],
						[-78.00330073699996, -6.420328099999949],
						[-77.91633011199997, -6.420328099999949],
						[-77.91633011199997, -6.574881974999926],
						[-78.00330073699996, -6.574881974999926],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220901',
			nombdist: 'TARAPOTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.40971711099996, -6.568785473999981],
						[-76.40971711099996, -6.412529349999943],
						[-76.33334111099998, -6.412529349999943],
						[-76.33334111099998, -6.568785473999981],
						[-76.40971711099996, -6.568785473999981],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2110',
			nombprov: 'SAN ANTONIO DE PUTINA',
			iddist: '211002',
			nombdist: 'ANANEA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.75802835399998, -14.855035107999981],
						[-69.75802835399998, -14.508089981999944],
						[-69.22487060399999, -14.508089981999944],
						[-69.22487060399999, -14.855035107999981],
						[-69.75802835399998, -14.855035107999981],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210208',
			nombdist: 'MUÑANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.15068710499997, -14.873097606999977],
						[-70.15068710499997, -14.493655356999966],
						[-69.83616447999998, -14.493655356999966],
						[-69.83616447999998, -14.873097606999977],
						[-70.15068710499997, -14.873097606999977],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010519',
			nombdist: 'SAN JUAN DE LOPECANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.95173336199997, -6.541002974999969],
						[-77.95173336199997, -6.418136724999954],
						[-77.83114061199996, -6.418136724999954],
						[-77.83114061199996, -6.541002974999969],
						[-77.95173336199997, -6.541002974999969],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220903',
			nombdist: 'CACATACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.49156261099995, -6.516126974999963],
						[-76.49156261099995, -6.404120473999967],
						[-76.39516423499998, -6.404120473999967],
						[-76.39516423499998, -6.516126974999963],
						[-76.49156261099995, -6.516126974999963],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1103',
			nombprov: 'NASCA',
			iddist: '110304',
			nombdist: 'MARCONA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.44148435999995, -15.443374982999956],
						[-75.44148435999995, -14.987539107999964],
						[-74.66426698399994, -14.987539107999964],
						[-74.66426698399994, -15.443374982999956],
						[-75.44148435999995, -15.443374982999956],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210214',
			nombdist: 'SANTIAGO DE PUPUJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.36122422999995, -15.182325606999939],
						[-70.36122422999995, -14.977866607999943],
						[-70.15797497999995, -14.977866607999943],
						[-70.15797497999995, -15.182325606999939],
						[-70.36122422999995, -15.182325606999939],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			iddist: '040517',
			nombdist: 'TISCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.58966823099996, -15.440710107999962],
						[-71.58966823099996, -14.975560231999964],
						[-71.14321898099996, -14.975560231999964],
						[-71.14321898099996, -15.440710107999962],
						[-71.58966823099996, -15.440710107999962],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210207',
			nombdist: 'JOSE DOMINGO CHOQUEHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.36398910499997, -15.09678510699996],
						[-70.36398910499997, -14.974275357999943],
						[-70.27404297999993, -14.974275357999943],
						[-70.27404297999993, -15.09678510699996],
						[-70.36398910499997, -15.09678510699996],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			iddist: '210603',
			nombdist: 'HUATASANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.86730860399996, -15.09474810699993],
						[-69.86730860399996, -14.954531731999964],
						[-69.72451097999993, -14.954531731999964],
						[-69.72451097999993, -15.09474810699993],
						[-69.86730860399996, -15.09474810699993],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210203',
			nombdist: 'ARAPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.20330310499997, -15.219593607999968],
						[-70.20330310499997, -14.939496106999968],
						[-69.95821522899996, -14.939496106999968],
						[-69.95821522899996, -15.219593607999968],
						[-70.20330310499997, -15.219593607999968],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2110',
			nombprov: 'SAN ANTONIO DE PUTINA',
			iddist: '211001',
			nombdist: 'PUTINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.01182622999994, -15.00792060799995],
						[-70.01182622999994, -14.434274357999982],
						[-69.70419535399998, -14.434274357999982],
						[-69.70419535399998, -15.00792060799995],
						[-70.01182622999994, -15.00792060799995],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080505',
			nombdist: 'LAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.24128823099994, -14.648917732999962],
						[-71.24128823099994, -14.416664106999974],
						[-70.96235298099998, -14.416664106999974],
						[-70.96235298099998, -14.648917732999962],
						[-71.24128823099994, -14.648917732999962],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2110',
			nombprov: 'SAN ANTONIO DE PUTINA',
			iddist: '211005',
			nombdist: 'SINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.34917747899993, -14.675400357999933],
						[-69.34917747899993, -14.306283231999942],
						[-69.11264735399993, -14.306283231999942],
						[-69.11264735399993, -14.675400357999933],
						[-69.34917747899993, -14.675400357999933],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080507',
			nombdist: 'QUEHUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.56864035599995, -14.426735856999926],
						[-71.56864035599995, -14.292945356999951],
						[-71.37347548099996, -14.292945356999951],
						[-71.37347548099996, -14.426735856999926],
						[-71.56864035599995, -14.426735856999926],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1104',
			nombprov: 'PALPA',
			iddist: '110404',
			nombdist: 'SANTA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.36368748499996, -14.615652606999959],
						[-75.36368748499996, -14.289610731999971],
						[-75.16815735999995, -14.289610731999971],
						[-75.16815735999995, -14.615652606999959],
						[-75.36368748499996, -14.615652606999959],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080604',
			nombdist: 'MARANGANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.25904685599994, -14.473024231999943],
						[-71.25904685599994, -14.277760356999977],
						[-70.92523435499999, -14.277760356999977],
						[-70.92523435499999, -14.473024231999943],
						[-71.25904685599994, -14.473024231999943],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211206',
			nombdist: 'QUIACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.44697035399997, -14.623523856999952],
						[-69.44697035399997, -14.275310606999938],
						[-69.26945585399994, -14.275310606999938],
						[-69.26945585399994, -14.623523856999952],
						[-69.44697035399997, -14.623523856999952],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110104',
			nombdist: 'OCUCAJE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.97478710999997, -14.71630473199997],
						[-75.97478710999997, -14.272294981999949],
						[-75.58234373399995, -14.272294981999949],
						[-75.58234373399995, -14.71630473199997],
						[-75.97478710999997, -14.71630473199997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210209',
			nombdist: 'POTONI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.32784947999994, -14.558917981999969],
						[-70.32784947999994, -14.268417856999974],
						[-69.88976947899994, -14.268417856999974],
						[-69.88976947899994, -14.558917981999969],
						[-70.32784947999994, -14.558917981999969],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030303',
			nombdist: 'HUAQUIRCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.95052148199994, -14.462245606999943],
						[-72.95052148199994, -14.25965010699997],
						[-72.63418735699997, -14.25965010699997],
						[-72.63418735699997, -14.462245606999943],
						[-72.95052148199994, -14.462245606999943],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080707',
			nombdist: 'QUIÑOTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.32167210699998, -14.494487231999926],
						[-72.32167210699998, -14.245557606999967],
						[-72.09019135699998, -14.245557606999967],
						[-72.09019135699998, -14.494487231999926],
						[-72.32167210699998, -14.494487231999926],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030307',
			nombdist: 'SABAINO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.08264098199999, -14.41809423199993],
						[-73.08264098199999, -14.233874856999932],
						[-72.86726073199998, -14.233874856999932],
						[-72.86726073199998, -14.41809423199993],
						[-73.08264098199999, -14.41809423199993],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030713',
			nombdist: 'VIRUNDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.74923935699996, -14.362172356999963],
						[-72.74923935699996, -14.224523480999949],
						[-72.62183510699998, -14.224523480999949],
						[-72.62183510699998, -14.362172356999963],
						[-72.74923935699996, -14.362172356999963],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210808',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.99934885599998, -14.75847260699993],
						[-70.99934885599998, -14.409080356999937],
						[-70.62613672999998, -14.409080356999937],
						[-70.62613672999998, -14.75847260699993],
						[-70.99934885599998, -14.75847260699993],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211202',
			nombdist: 'CUYOCUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.69096147999994, -14.66193360799997],
						[-69.69096147999994, -14.408611356999927],
						[-69.42837772899998, -14.408611356999927],
						[-69.42837772899998, -14.66193360799997],
						[-69.69096147999994, -14.66193360799997],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080503',
			nombdist: 'KUNTURKANKI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.41716998099997, -14.660164106999957],
						[-71.41716998099997, -14.393362856999943],
						[-71.17121848099998, -14.393362856999943],
						[-71.17121848099998, -14.660164106999957],
						[-71.41716998099997, -14.660164106999957],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080502',
			nombdist: 'CHECCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.65180610599998, -14.622169732999964],
						[-71.65180610599998, -14.380849481999974],
						[-71.35051323099998, -14.380849481999974],
						[-71.35051323099998, -14.622169732999964],
						[-71.65180610599998, -14.622169732999964],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080708',
			nombdist: 'VELILLE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.01848473199993, -14.71151273299995],
						[-72.01848473199993, -14.377822231999971],
						[-71.76391601599994, -14.377822231999971],
						[-71.76391601599994, -14.71151273299995],
						[-72.01848473199993, -14.71151273299995],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210211',
			nombdist: 'SAN ANTON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.36920472999998, -14.667386231999956],
						[-70.36920472999998, -14.372718106999969],
						[-70.12001572899999, -14.372718106999969],
						[-70.12001572899999, -14.667386231999956],
						[-70.36920472999998, -14.667386231999956],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030304',
			nombdist: 'JUAN ESPINOZA MEDRANO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.01740035699999, -14.759940106999977],
						[-73.01740035699999, -14.370519481999963],
						[-72.78700748199998, -14.370519481999963],
						[-72.78700748199998, -14.759940106999977],
						[-73.01740035699999, -14.759940106999977],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080701',
			nombdist: 'SANTO TOMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.50301010699997, -14.887876482999957],
						[-72.50301010699997, -14.357939981999948],
						[-71.87897985599994, -14.357939981999948],
						[-71.87897985599994, -14.887876482999957],
						[-72.50301010699997, -14.887876482999957],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030406',
			nombdist: 'COTARUSE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.57713673299997, -14.842730481999979],
						[-73.57713673299997, -14.348295481999969],
						[-72.97976748299999, -14.348295481999969],
						[-72.97976748299999, -14.842730481999979],
						[-73.57713673299997, -14.842730481999979],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030301',
			nombdist: 'ANTABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.90279398199993, -14.688655856999958],
						[-72.90279398199993, -14.347558481999954],
						[-72.62342398199996, -14.347558481999954],
						[-72.62342398199996, -14.688655856999958],
						[-72.90279398199993, -14.688655856999958],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030403',
			nombdist: 'CARAYBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.17941010799996, -14.526499731999934],
						[-73.17941010799996, -14.328776106999953],
						[-73.00822460699999, -14.328776106999953],
						[-73.00822460699999, -14.526499731999934],
						[-73.17941010799996, -14.526499731999934],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080504',
			nombdist: 'LANGUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.39329498099994, -14.487815482999963],
						[-71.39329498099994, -14.313208731999964],
						[-71.20974098099998, -14.313208731999964],
						[-71.20974098099998, -14.487815482999963],
						[-71.39329498099994, -14.487815482999963],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110106',
			nombdist: 'PARCONA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.72766410999998, -14.077427731999933],
						[-75.72766410999998, -14.03640235599994],
						[-75.67448435999995, -14.03640235599994],
						[-75.67448435999995, -14.077427731999933],
						[-75.72766410999998, -14.077427731999933],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110101',
			nombdist: 'ICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.07232810999994, -14.49005860699998],
						[-76.07232810999994, -14.035037105999947],
						[-75.71727148499997, -14.035037105999947],
						[-75.71727148499997, -14.49005860699998],
						[-76.07232810999994, -14.49005860699998],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080603',
			nombdist: 'COMBAPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.44428510599994, -14.151860105999958],
						[-71.44428510599994, -14.023609481999927],
						[-71.20996510499998, -14.023609481999927],
						[-71.20996510499998, -14.151860105999958],
						[-71.44428510599994, -14.151860105999958],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081006',
			nombdist: 'OMACHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.91725673099995, -14.278787106999971],
						[-71.91725673099995, -14.022187480999946],
						[-71.67339248099995, -14.022187480999946],
						[-71.67339248099995, -14.278787106999971],
						[-71.91725673099995, -14.278787106999971],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030407',
			nombdist: 'IHUAYLLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.29921285799998, -14.15865723099995],
						[-73.29921285799998, -14.01338898199998],
						[-73.18390635699996, -14.01338898199998],
						[-73.18390635699996, -14.15865723099995],
						[-73.29921285799998, -14.15865723099995],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110103',
			nombdist: 'LOS AQUIJES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.71908985999994, -14.117761731999963],
						[-75.71908985999994, -14.033514731999958],
						[-75.55642935999998, -14.033514731999958],
						[-75.55642935999998, -14.117761731999963],
						[-75.71908985999994, -14.117761731999963],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1104',
			nombprov: 'PALPA',
			iddist: '110405',
			nombdist: 'TIBILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24304298499999, -14.293731106999928],
						[-75.24304298499999, -14.032884731999957],
						[-75.05743335899996, -14.032884731999957],
						[-75.05743335899996, -14.293731106999928],
						[-75.24304298499999, -14.293731106999928],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030408',
			nombdist: 'JUSTO APU SAHUARAURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.24214735799995, -14.199358981999978],
						[-73.24214735799995, -14.01321485699998],
						[-73.15508873199997, -14.01321485699998],
						[-73.15508873199997, -14.199358981999978],
						[-73.24214735799995, -14.199358981999978],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030414',
			nombdist: 'TAPAIRIHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.18940998299996, -14.205445356999974],
						[-73.18940998299996, -14.01321485699998],
						[-73.01663523299999, -14.01321485699998],
						[-73.01663523299999, -14.205445356999974],
						[-73.18940998299996, -14.205445356999974],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090614',
			nombdist: 'SANTIAGO DE QUIRAHUARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.02912998399995, -14.103904231999934],
						[-75.02912998399995, -14.010744106999937],
						[-74.75871285899996, -14.010744106999937],
						[-74.75871285899996, -14.103904231999934],
						[-75.02912998399995, -14.103904231999934],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030714',
			nombdist: 'CURASCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.61329885699996, -14.201673856999946],
						[-72.61329885699996, -14.007312481999975],
						[-72.45762235699993, -14.007312481999975],
						[-72.45762235699993, -14.201673856999946],
						[-72.61329885699996, -14.201673856999946],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210310',
			nombdist: 'USICAYOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.14038385499998, -14.288651856999934],
						[-70.14038385499998, -14.007007856999962],
						[-69.77002735499997, -14.007007856999962],
						[-69.77002735499997, -14.288651856999934],
						[-70.14038385499998, -14.288651856999934],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110112',
			nombdist: 'SUBTANJALLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.02633598599994, -14.117906231999939],
						[-76.02633598599994, -14.00698098199996],
						[-75.73920898499995, -14.00698098199996],
						[-75.73920898499995, -14.117906231999939],
						[-76.02633598599994, -14.117906231999939],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030708',
			nombdist: 'PROGRESO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.57604673199995, -14.21233710699994],
						[-72.57604673199995, -13.99514410699993],
						[-72.34983598199995, -13.99514410699993],
						[-72.34983598199995, -14.21233710699994],
						[-72.57604673199995, -14.21233710699994],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080202',
			nombdist: 'ACOPIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.55846498099999, -14.099129731999938],
						[-71.55846498099999, -13.986480481999934],
						[-71.45215823099994, -13.986480481999934],
						[-71.45215823099994, -14.099129731999938],
						[-71.55846498099999, -14.099129731999938],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110102',
			nombdist: 'LA TINGUIÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.73116210999996, -14.05226023199998],
						[-75.73116210999996, -13.969123105999927],
						[-75.59660548499994, -13.969123105999927],
						[-75.59660548499994, -14.05226023199998],
						[-75.73116210999996, -14.05226023199998],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030701',
			nombdist: 'CHUQUIBAMBILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.90199698199996, -14.244634731999952],
						[-72.90199698199996, -13.963445355999966],
						[-72.63670898199996, -13.963445355999966],
						[-72.63670898199996, -14.244634731999952],
						[-72.90199698199996, -14.244634731999952],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090606',
			nombdist: 'OCOYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.11794385999997, -14.129919981999933],
						[-75.11794385999997, -13.958328106999943],
						[-74.90882060999996, -13.958328106999943],
						[-74.90882060999996, -14.129919981999933],
						[-75.11794385999997, -14.129919981999933],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210804',
			nombdist: 'LLALLI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.00458735599994, -15.084587357999965],
						[-71.00458735599994, -14.908558607999964],
						[-70.83440435599994, -14.908558607999964],
						[-70.83440435599994, -15.084587357999965],
						[-71.00458735599994, -15.084587357999965],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1103',
			nombprov: 'NASCA',
			iddist: '110303',
			nombdist: 'EL INGENIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.23966010999999, -14.80365835799995],
						[-75.23966010999999, -14.544886731999952],
						[-74.78816623399996, -14.544886731999952],
						[-74.78816623399996, -14.80365835799995],
						[-75.23966010999999, -14.80365835799995],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			iddist: '210212',
			nombdist: 'SAN JOSE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.30393222999999, -14.810348357999942],
						[-70.30393222999999, -14.53041585699998],
						[-70.07080922999995, -14.53041585699998],
						[-70.07080922999995, -14.810348357999942],
						[-70.30393222999999, -14.810348357999942],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			iddist: '080803',
			nombdist: 'COPORAQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.90241560699997, -15.004634857999974],
						[-71.90241560699997, -14.52939373199996],
						[-71.43315623099994, -14.52939373199996],
						[-71.43315623099994, -15.004634857999974],
						[-71.90241560699997, -15.004634857999974],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1104',
			nombprov: 'PALPA',
			iddist: '110402',
			nombdist: 'LLIPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.25178910899996, -14.678841856999952],
						[-75.25178910899996, -14.52693435699996],
						[-75.06678710899996, -14.52693435699996],
						[-75.06678710899996, -14.678841856999952],
						[-75.25178910899996, -14.678841856999952],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211208',
			nombdist: 'YANAHUAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.29696097899995, -14.487802731999977],
						[-69.29696097899995, -14.200708855999949],
						[-68.97892585399995, -14.200708855999949],
						[-68.97892585399995, -14.487802731999977],
						[-69.29696097899995, -14.487802731999977],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			iddist: '030305',
			nombdist: 'OROPESA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.66267298299994, -14.713675481999928],
						[-72.66267298299994, -14.200217106999958],
						[-72.33858535699994, -14.200217106999958],
						[-72.33858535699994, -14.713675481999928],
						[-72.66267298299994, -14.713675481999928],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1104',
			nombprov: 'PALPA',
			iddist: '110403',
			nombdist: 'RIO GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24629735999997, -14.56268948199994],
						[-75.24629735999997, -14.18801760699995],
						[-75.03208998399998, -14.18801760699995],
						[-75.03208998399998, -14.56268948199994],
						[-75.24629735999997, -14.56268948199994],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030401',
			nombdist: 'CHALHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.33208260799995, -14.397720981999953],
						[-73.33208260799995, -14.185827606999965],
						[-73.07259398299993, -14.185827606999965],
						[-73.07259398299993, -14.397720981999953],
						[-73.33208260799995, -14.397720981999953],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210306',
			nombdist: 'CRUCERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.18327735499997, -14.517818731999967],
						[-70.18327735499997, -14.182837606999954],
						[-69.65941722899998, -14.182837606999954],
						[-69.65941722899998, -14.517818731999967],
						[-70.18327735499997, -14.517818731999967],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080501',
			nombdist: 'YANAOCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.55459760599996, -14.363904356999967],
						[-71.55459760599996, -14.173554731999957],
						[-71.32632910599995, -14.173554731999957],
						[-71.32632910599995, -14.363904356999967],
						[-71.55459760599996, -14.363904356999967],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080601',
			nombdist: 'SICUANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.33764798099998, -14.344723606999935],
						[-71.33764798099998, -14.162828231999981],
						[-70.87991460499995, -14.162828231999981],
						[-70.87991460499995, -14.344723606999935],
						[-71.33764798099998, -14.344723606999935],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030709',
			nombdist: 'SAN ANTONIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.64382423199999, -14.20653323199997],
						[-72.64382423199999, -14.151714856999945],
						[-72.56789485699994, -14.151714856999945],
						[-72.56789485699994, -14.20653323199997],
						[-72.64382423199999, -14.20653323199997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211209',
			nombdist: 'ALTO INAMBARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.57132285499995, -14.25542698199996],
						[-69.57132285499995, -13.825069980999956],
						[-69.08122660399994, -13.825069980999956],
						[-69.08122660399994, -14.25542698199996],
						[-69.57132285499995, -14.25542698199996],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030705',
			nombdist: 'MAMARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.62740623199994, -14.254638731999933],
						[-72.62740623199994, -14.17317935699998],
						[-72.50771273199996, -14.17317935699998],
						[-72.50771273199996, -14.254638731999933],
						[-72.62740623199994, -14.254638731999933],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			iddist: '210802',
			nombdist: 'ANTAUTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.49134610499993, -14.597381981999945],
						[-70.49134610499993, -14.170332856999948],
						[-70.26650947999997, -14.170332856999948],
						[-70.26650947999997, -14.597381981999945],
						[-70.49134610499993, -14.597381981999945],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081004',
			nombdist: 'COLCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.93992573199995, -13.938685606999968],
						[-71.93992573199995, -13.81321285599995],
						[-71.79891610599998, -13.81321285599995],
						[-71.79891610599998, -13.938685606999968],
						[-71.93992573199995, -13.938685606999968],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030711',
			nombdist: 'TURPAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.67423810699995, -14.284300606999977],
						[-72.67423810699995, -14.15700785699994],
						[-72.60067973199995, -14.15700785699994],
						[-72.60067973199995, -14.284300606999977],
						[-72.67423810699995, -14.284300606999977],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080703',
			nombdist: 'CHAMACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.04674035599999, -14.525946981999937],
						[-72.04674035599999, -14.155000606999977],
						[-71.73984285599994, -14.155000606999977],
						[-71.73984285599994, -14.525946981999937],
						[-72.04674035599999, -14.525946981999937],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030404',
			nombdist: 'CHAPIMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.18358198299995, -14.086485980999953],
						[-73.18358198299995, -13.900480481999978],
						[-73.02175360699994, -13.900480481999978],
						[-73.02175360699994, -14.086485980999953],
						[-73.18358198299995, -14.086485980999953],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			iddist: '080506',
			nombdist: 'PAMPAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.47214023099997, -14.188415856999939],
						[-71.47214023099997, -14.101447231999941],
						[-71.41672260599995, -14.101447231999941],
						[-71.41672260599995, -14.188415856999939],
						[-71.47214023099997, -14.188415856999939],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080205',
			nombdist: 'POMACANCHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.72396685599995, -14.15430110699998],
						[-71.72396685599995, -13.949681606999945],
						[-71.52725123099998, -13.949681606999945],
						[-71.52725123099998, -14.15430110699998],
						[-71.72396685599995, -14.15430110699998],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110114',
			nombdist: 'YAUCA DEL ROSARIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.65003123499997, -14.282931356999939],
						[-75.65003123499997, -13.900210981999976],
						[-75.21055473399997, -13.900210981999976],
						[-75.21055473399997, -14.282931356999939],
						[-75.65003123499997, -14.282931356999939],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090608',
			nombdist: 'QUERCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.01170523399998, -14.035263356999963],
						[-75.01170523399998, -13.733695355999942],
						[-74.76036373399995, -13.733695355999942],
						[-74.76036373399995, -14.035263356999963],
						[-75.01170523399998, -14.035263356999963],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030703',
			nombdist: 'GAMARRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.67911548199999, -13.966013356999952],
						[-72.67911548199999, -13.729785856999968],
						[-72.46038323199997, -13.729785856999968],
						[-72.46038323199997, -13.966013356999952],
						[-72.67911548199999, -13.966013356999952],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030212',
			nombdist: 'SAN ANTONIO DE CACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.74788773399996, -13.861357355999928],
						[-73.74788773399996, -13.728085981999982],
						[-73.57308985799995, -13.728085981999982],
						[-73.57308985799995, -13.861357355999928],
						[-73.74788773399996, -13.861357355999928],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090603',
			nombdist: 'CORDOVA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.21919135899998, -14.072529981999935],
						[-75.21919135899998, -13.943578856999977],
						[-75.09292860899996, -13.943578856999977],
						[-75.09292860899996, -14.072529981999935],
						[-75.21919135899998, -14.072529981999935],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			iddist: '080702',
			nombdist: 'CAPACMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.06790235599993, -14.155000606999977],
						[-72.06790235599993, -13.934853480999948],
						[-71.90141810599994, -13.934853480999948],
						[-71.90141810599994, -14.155000606999977],
						[-72.06790235599993, -14.155000606999977],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030416',
			nombdist: 'TORAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.37875085699994, -14.128677731999971],
						[-73.37875085699994, -13.933640106999974],
						[-73.23732623299998, -13.933640106999974],
						[-73.23732623299998, -14.128677731999971],
						[-73.37875085699994, -14.128677731999971],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210305',
			nombdist: 'CORANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.88134310599997, -14.088769856999932],
						[-70.88134310599997, -13.72740235599997],
						[-70.50846685499994, -13.72740235599997],
						[-70.50846685499994, -14.088769856999932],
						[-70.88134310599997, -14.088769856999932],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080605',
			nombdist: 'PITUMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.44473435599997, -14.03709585699994],
						[-71.44473435599997, -13.725501981999969],
						[-70.86250235499995, -13.725501981999969],
						[-70.86250235499995, -14.03709585699994],
						[-71.44473435599997, -14.03709585699994],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110110',
			nombdist: 'SAN JUAN BAUTISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.75504673499995, -14.04298423199998],
						[-75.75504673499995, -13.929974605999973],
						[-75.70298435999996, -13.929974605999973],
						[-75.70298435999996, -14.04298423199998],
						[-75.75504673499995, -14.04298423199998],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211205',
			nombdist: 'PHARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.70765447899998, -14.238132231999941],
						[-69.70765447899998, -13.915519231999951],
						[-69.48586010399998, -13.915519231999951],
						[-69.48586010399998, -14.238132231999941],
						[-69.70765447899998, -14.238132231999941],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030206',
			nombdist: 'HUAYANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.62578123299994, -14.069425731999956],
						[-73.62578123299994, -13.911064480999926],
						[-73.48856473299998, -13.911064480999926],
						[-73.48856473299998, -14.069425731999956],
						[-73.62578123299994, -14.069425731999956],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090612',
			nombdist: 'SAN ISIDRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.35568360999997, -14.048929231999978],
						[-75.35568360999997, -13.909757855999942],
						[-75.14072360999995, -13.909757855999942],
						[-75.14072360999995, -14.048929231999978],
						[-75.35568360999997, -14.048929231999978],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081206',
			nombdist: 'CUSIPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.56735235599996, -13.967218731999935],
						[-71.56735235599996, -13.810002981999958],
						[-71.29768560599996, -13.810002981999958],
						[-71.29768560599996, -13.967218731999935],
						[-71.56735235599996, -13.967218731999935],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030415',
			nombdist: 'TINTAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.21841985699996, -13.977435230999959],
						[-73.21841985699996, -13.799884855999949],
						[-73.04535348299999, -13.799884855999949],
						[-73.04535348299999, -13.977435230999959],
						[-73.21841985699996, -13.977435230999959],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030214',
			nombdist: 'SAN MIGUEL DE CHACCRAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.65459573299995, -14.019230481999955],
						[-73.65459573299995, -13.908876981999981],
						[-73.55018560799994, -13.908876981999981],
						[-73.55018560799994, -14.019230481999955],
						[-73.65459573299995, -14.019230481999955],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030218',
			nombdist: 'TURPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.52300110799996, -13.856079481999927],
						[-73.52300110799996, -13.712655856999959],
						[-73.41117535799998, -13.712655856999959],
						[-73.41117535799998, -13.856079481999927],
						[-73.52300110799996, -13.856079481999927],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110508',
			nombdist: 'TUPAC AMARU INCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.15882211099995, -13.774802730999966],
						[-76.15882211099995, -13.687245480999934],
						[-76.04463286099997, -13.687245480999934],
						[-76.04463286099997, -13.774802730999966],
						[-76.15882211099995, -13.774802730999966],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030106',
			nombdist: 'LAMBRAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.93678498299994, -13.966531230999976],
						[-72.93678498299994, -13.683800730999963],
						[-72.63756873299997, -13.683800730999963],
						[-72.63756873299997, -13.966531230999976],
						[-72.93678498299994, -13.966531230999976],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110506',
			nombdist: 'SAN ANDRES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.23138285999994, -13.904755855999952],
						[-76.23138285999994, -13.711066355999947],
						[-76.00133398599996, -13.711066355999947],
						[-76.00133398599996, -13.904755855999952],
						[-76.23138285999994, -13.904755855999952],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			iddist: '030501',
			nombdist: 'TAMBOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.34210023199995, -14.089986856999928],
						[-72.34210023199995, -13.706072855999935],
						[-72.09099998099998, -13.706072855999935],
						[-72.09099998099998, -14.089986856999928],
						[-72.34210023199995, -14.089986856999928],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081212',
			nombdist: 'QUIQUIJANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.64451085599995, -13.906272856999976],
						[-71.64451085599995, -13.699262730999976],
						[-71.37032860599999, -13.699262730999976],
						[-71.37032860599999, -13.906272856999976],
						[-71.64451085599995, -13.906272856999976],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080206',
			nombdist: 'RONDOCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.83444223099997, -13.87026360599998],
						[-71.83444223099997, -13.696914105999952],
						[-71.69595898099993, -13.696914105999952],
						[-71.69595898099993, -13.87026360599998],
						[-71.83444223099997, -13.87026360599998],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210301',
			nombdist: 'MACUSANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.70222435499994, -14.223382231999949],
						[-70.70222435499994, -13.890909981999982],
						[-70.26067085499994, -13.890909981999982],
						[-70.26067085499994, -14.223382231999949],
						[-70.70222435499994, -14.223382231999949],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081002',
			nombdist: 'ACCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.94749810599995, -14.083039105999944],
						[-71.94749810599995, -13.888837856999942],
						[-71.77414585699995, -13.888837856999942],
						[-71.77414585699995, -14.083039105999944],
						[-71.94749810599995, -14.083039105999944],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030205',
			nombdist: 'HUANCARAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.60035160799998, -13.844163231999971],
						[-73.60035160799998, -13.693015481999964],
						[-73.49845898299998, -13.693015481999964],
						[-73.49845898299998, -13.844163231999971],
						[-73.60035160799998, -13.844163231999971],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081007',
			nombdist: 'PACCARITAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.99179098199994, -13.836675730999957],
						[-71.99179098199994, -13.68964848099995],
						[-71.84941210699998, -13.68964848099995],
						[-71.84941210699998, -13.836675730999957],
						[-71.99179098199994, -13.836675730999957],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			iddist: '030505',
			nombdist: 'MARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.20335348099997, -14.149026481999954],
						[-72.20335348099997, -13.885389105999934],
						[-72.05120310699994, -13.885389105999934],
						[-72.05120310699994, -14.149026481999954],
						[-72.20335348099997, -14.149026481999954],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030704',
			nombdist: 'HUAYLLATI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.56498685699995, -14.034296231999974],
						[-72.56498685699995, -13.87928510699993],
						[-72.44134373199995, -13.87928510699993],
						[-72.44134373199995, -14.034296231999974],
						[-72.56498685699995, -14.034296231999974],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110501',
			nombdist: 'PISCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.22189448599994, -13.728232480999964],
						[-76.22189448599994, -13.681199230999937],
						[-76.15114448499997, -13.681199230999937],
						[-76.15114448499997, -13.728232480999964],
						[-76.22189448599994, -13.728232480999964],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080207',
			nombdist: 'SANGARARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.63718910599994, -14.008886356999938],
						[-71.63718910599994, -13.89710510599997],
						[-71.49357035599996, -13.89710510599997],
						[-71.49357035599996, -14.008886356999938],
						[-71.63718910599994, -14.008886356999938],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030405',
			nombdist: 'COLCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.35454173299996, -14.054199231999974],
						[-73.35454173299996, -13.89577735599994],
						[-73.15676173299994, -13.89577735599994],
						[-73.15676173299994, -14.054199231999974],
						[-73.35454173299996, -14.054199231999974],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030102',
			nombdist: 'CHACOCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.04535348299999, -14.12052173199993],
						[-73.04535348299999, -13.872533231999967],
						[-72.91237885699996, -13.872533231999967],
						[-72.91237885699996, -14.12052173199993],
						[-73.04535348299999, -14.12052173199993],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			iddist: '030702',
			nombdist: 'CURPAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.74917573199997, -14.074703105999959],
						[-72.74917573199997, -13.857056605999958],
						[-72.55392285699998, -13.857056605999958],
						[-72.55392285699998, -14.074703105999959],
						[-72.74917573199997, -14.074703105999959],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080203',
			nombdist: 'ACOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.81089260699997, -14.032274730999973],
						[-71.81089260699997, -13.848232606999943],
						[-71.65331623099996, -13.848232606999943],
						[-71.65331623099996, -14.032274730999973],
						[-71.81089260699997, -14.032274730999973],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			iddist: '080602',
			nombdist: 'CHECACUPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.51804410599993, -14.125789856999972],
						[-71.51804410599993, -13.832837730999927],
						[-70.80967285599996, -13.832837730999927],
						[-70.80967285599996, -14.125789856999972],
						[-71.51804410599993, -14.125789856999972],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030217',
			nombdist: 'TUMAY HUARACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.59486723299995, -14.11167298199996],
						[-73.59486723299995, -13.826237981999952],
						[-73.34509398299997, -13.826237981999952],
						[-73.34509398299997, -14.11167298199996],
						[-73.59486723299995, -14.11167298199996],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081008',
			nombdist: 'PILLPINTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.81626373099994, -14.04519735699995],
						[-71.81626373099994, -13.894173856999942],
						[-71.72247073099999, -13.894173856999942],
						[-71.72247073099999, -14.04519735699995],
						[-71.81626373099994, -14.04519735699995],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030203',
			nombdist: 'CHIARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.69492523299994, -13.946331480999959],
						[-73.69492523299994, -13.820976605999931],
						[-73.54061998299994, -13.820976605999931],
						[-73.54061998299994, -13.946331480999959],
						[-73.69492523299994, -13.946331480999959],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030103',
			nombdist: 'CIRCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.02762498199996, -14.170393856999965],
						[-73.02762498199996, -13.778791855999941],
						[-72.75797560699993, -13.778791855999941],
						[-72.75797560699993, -14.170393856999965],
						[-73.02762498199996, -14.170393856999965],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			iddist: '030503',
			nombdist: 'COYLLURQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.48132423199996, -14.082295856999963],
						[-72.48132423199996, -13.763831980999953],
						[-72.30340623199999, -13.763831980999953],
						[-72.30340623199999, -14.082295856999963],
						[-72.48132423199996, -14.082295856999963],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			iddist: '080201',
			nombdist: 'ACOMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.73288673099995, -13.983248106999952],
						[-71.73288673099995, -13.81979060599997],
						[-71.61955860599994, -13.81979060599997],
						[-71.61955860599994, -13.983248106999952],
						[-71.73288673099995, -13.983248106999952],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030411',
			nombdist: 'SAN JUAN DE CHACÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.23721123299998, -13.950244105999957],
						[-73.23721123299998, -13.816735731999927],
						[-73.13654298299997, -13.816735731999927],
						[-73.13654298299997, -13.950244105999957],
						[-73.23721123299998, -13.950244105999957],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			iddist: '081003',
			nombdist: 'CCAPI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.13469723199995, -13.993183605999945],
						[-72.13469723199995, -13.755564481999954],
						[-71.92320123099995, -13.755564481999954],
						[-71.92320123099995, -13.993183605999945],
						[-72.13469723199995, -13.993183605999945],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110505',
			nombdist: 'PARACAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.39836323599997, -14.426054731999955],
						[-76.39836323599997, -13.754828105999934],
						[-75.98084960999995, -13.754828105999934],
						[-75.98084960999995, -14.426054731999955],
						[-76.39836323599997, -14.426054731999955],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			iddist: '030409',
			nombdist: 'LUCRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.29618760799997, -13.993406231999927],
						[-73.29618760799997, -13.815059356999939],
						[-73.17749610699997, -13.815059356999939],
						[-73.17749610699997, -13.993406231999927],
						[-73.29618760799997, -13.993406231999927],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090605',
			nombdist: 'LARAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.15792960999994, -13.997484355999973],
						[-75.15792960999994, -13.813933230999965],
						[-74.97669810899998, -13.813933230999965],
						[-74.97669810899998, -13.997484355999973],
						[-75.15792960999994, -13.997484355999973],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110108',
			nombdist: 'SALAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.06143748499994, -14.02776173199993],
						[-76.06143748499994, -13.813337606999937],
						[-75.66833823499996, -13.813337606999937],
						[-75.66833823499996, -14.02776173199993],
						[-76.06143748499994, -14.02776173199993],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090611',
			nombdist: 'SAN FRANCISCO DE SANGAYAICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.39316410999999, -13.81540035699993],
						[-75.39316410999999, -13.754111730999966],
						[-75.18304473399996, -13.754111730999966],
						[-75.18304473399996, -13.81540035699993],
						[-75.39316410999999, -13.81540035699993],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			iddist: '110109',
			nombdist: 'SAN JOSE DE LOS MOLINOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.72252335999997, -13.995783230999962],
						[-75.72252335999997, -13.742187480999974],
						[-75.49689060999998, -13.742187480999974],
						[-75.49689060999998, -13.995783230999962],
						[-75.72252335999997, -13.995783230999962],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081207',
			nombdist: 'HUARO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.72714298199998, -13.83523373199995],
						[-71.72714298199998, -13.66864060599994],
						[-71.63258873099994, -13.66864060599994],
						[-71.63258873099994, -13.83523373199995],
						[-71.72714298199998, -13.83523373199995],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030107',
			nombdist: 'PICHIRHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.17189510699995, -13.900480481999978],
						[-73.17189510699995, -13.65213423199998],
						[-72.91248673199993, -13.65213423199998],
						[-72.91248673199993, -13.900480481999978],
						[-73.17189510699995, -13.900480481999978],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			iddist: '030502',
			nombdist: 'COTABAMBAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.44929498199997, -13.878677731999971],
						[-72.44929498199997, -13.641849606999926],
						[-72.23067535699994, -13.641849606999926],
						[-72.23067535699994, -13.878677731999971],
						[-72.44929498199997, -13.878677731999971],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			iddist: '210112',
			nombdist: 'PLATERIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.97324022999999, -16.105531233999955],
						[-69.97324022999999, -15.817721982999956],
						[-69.71247072999995, -15.817721982999956],
						[-69.71247072999995, -16.105531233999955],
						[-69.97324022999999, -16.105531233999955],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081208',
			nombdist: 'LUCRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.84315885699993, -13.710753231999945],
						[-71.84315885699993, -13.552474605999976],
						[-71.70651948099999, -13.552474605999976],
						[-71.70651948099999, -13.710753231999945],
						[-71.84315885699993, -13.710753231999945],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030101',
			nombdist: 'ABANCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.01294998299994, -13.717598230999954],
						[-73.01294998299994, -13.548082730999965],
						[-72.73899798199994, -13.548082730999965],
						[-72.73899798199994, -13.717598230999954],
						[-73.01294998299994, -13.717598230999954],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080905',
			nombdist: 'OCOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.56738798199996, -13.14333010599995],
						[-72.56738798199996, -12.639261730999976],
						[-72.16915160699995, -12.639261730999976],
						[-72.16915160699995, -13.14333010599995],
						[-72.56738798199996, -13.14333010599995],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150513',
			nombdist: 'SAN ANTONIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.72625386099998, -12.676421855999934],
						[-76.72625386099998, -12.555681229999948],
						[-76.63860723599998, -12.555681229999948],
						[-76.63860723599998, -12.676421855999934],
						[-76.72625386099998, -12.676421855999934],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030603',
			nombdist: 'COCHARCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.80715198299998, -13.68449760599998],
						[-73.80715198299998, -13.552214855999978],
						[-73.68611323299996, -13.552214855999978],
						[-73.68611323299996, -13.68449760599998],
						[-73.80715198299998, -13.68449760599998],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030109',
			nombdist: 'TAMBURCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.93158010799993, -13.63040235699998],
						[-72.93158010799993, -13.544838230999972],
						[-72.82195023199995, -13.544838230999972],
						[-72.82195023199995, -13.63040235699998],
						[-72.93158010799993, -13.63040235699998],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151012',
			nombdist: 'HONGOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.78630998499995, -12.834299979999969],
						[-75.78630998499995, -12.688808729999948],
						[-75.57073460999999, -12.688808729999948],
						[-75.57073460999999, -12.834299979999969],
						[-75.78630998499995, -12.834299979999969],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150502',
			nombdist: 'ASIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.63847461099994, -12.923621105999928],
						[-76.63847461099994, -12.683792979999964],
						[-76.40080398599997, -12.683792979999964],
						[-76.40080398599997, -12.923621105999928],
						[-76.63847461099994, -12.923621105999928],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151008',
			nombdist: 'CATAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.96839998499996, -12.809869979999974],
						[-75.96839998499996, -12.670201979999945],
						[-75.73810948499994, -12.670201979999945],
						[-75.73810948499994, -12.809869979999974],
						[-75.96839998499996, -12.809869979999974],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151006',
			nombdist: 'CACRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94555998499999, -12.863351855999952],
						[-75.94555998499999, -12.662296479999952],
						[-75.55145498499996, -12.662296479999952],
						[-75.55145498499996, -12.863351855999952],
						[-75.94555998499999, -12.863351855999952],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030209',
			nombdist: 'PACUCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.42466460799994, -13.658562230999962],
						[-73.42466460799994, -13.541906605999941],
						[-73.20709998299998, -13.541906605999941],
						[-73.20709998299998, -13.658562230999962],
						[-73.42466460799994, -13.658562230999962],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080102',
			nombdist: 'CCORCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.16800248199996, -13.649185605999946],
						[-72.16800248199996, -13.527824605999967],
						[-71.98471523199999, -13.527824605999967],
						[-71.98471523199999, -13.649185605999946],
						[-72.16800248199996, -13.649185605999946],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090117',
			nombdist: 'YAULI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.94377373499998, -12.943060104999972],
						[-74.94377373499998, -12.696337854999967],
						[-74.69918360899999, -12.696337854999967],
						[-74.69918360899999, -12.943060104999972],
						[-74.94377373499998, -12.943060104999972],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090208',
			nombdist: 'ROSARIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.66287310899997, -12.787951230999965],
						[-74.66287310899997, -12.690994105999948],
						[-74.53907810899995, -12.690994105999948],
						[-74.53907810899995, -12.787951230999965],
						[-74.66287310899997, -12.787951230999965],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151023',
			nombdist: 'PUTINZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.97861998499997, -12.70588473099997],
						[-75.97861998499997, -12.619119979999937],
						[-75.84955473499997, -12.619119979999937],
						[-75.84955473499997, -12.70588473099997],
						[-75.97861998499997, -12.70588473099997],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090206',
			nombdist: 'PAUCARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.79569660899995, -12.837410105999936],
						[-74.79569660899995, -12.61575410599994],
						[-74.64925610899996, -12.61575410599994],
						[-74.64925610899996, -12.837410105999936],
						[-74.79569660899995, -12.837410105999936],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150509',
			nombdist: 'MALA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.66116211099995, -12.737070355999947],
						[-76.66116211099995, -12.572789980999971],
						[-76.54136986099996, -12.572789980999971],
						[-76.54136986099996, -12.737070355999947],
						[-76.66116211099995, -12.737070355999947],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151031',
			nombdist: 'TUPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.90169998499994, -12.794369979999942],
						[-75.90169998499994, -12.568099605999976],
						[-75.55816073499994, -12.568099605999976],
						[-75.55816073499994, -12.794369979999942],
						[-75.90169998499994, -12.794369979999942],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090114',
			nombdist: 'PALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.03029785999996, -12.735654354999951],
						[-75.03029785999996, -12.61550710499995],
						[-74.93304848399998, -12.61550710499995],
						[-74.93304848399998, -12.735654354999951],
						[-75.03029785999996, -12.735654354999951],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1701',
			nombprov: 'TAMBOPATA',
			iddist: '170102',
			nombdist: 'INAMBARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.40286810499998, -13.341716855999948],
						[-70.40286810499998, -12.606233604999943],
						[-69.44315385399995, -12.606233604999943],
						[-69.44315385399995, -13.341716855999948],
						[-70.40286810499998, -13.341716855999948],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090202',
			nombdist: 'ANDABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.71162960899994, -12.717388729999982],
						[-74.71162960899994, -12.589855479999926],
						[-74.58929098399994, -12.589855479999926],
						[-74.58929098399994, -12.717388729999982],
						[-74.71162960899994, -12.717388729999982],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090102',
			nombdist: 'ACOBAMBILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.57961323499995, -12.828501479999943],
						[-75.57961323499995, -12.580062479999981],
						[-75.20031048499999, -12.580062479999981],
						[-75.20031048499999, -12.828501479999943],
						[-75.57961323499995, -12.828501479999943],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150113',
			nombdist: 'JESUS MARIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.06314261199998, -12.093070354999952],
						[-77.06314261199998, -12.064208979999933],
						[-77.03629098599998, -12.064208979999933],
						[-77.03629098599998, -12.093070354999952],
						[-77.06314261199998, -12.093070354999952],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090304',
			nombdist: 'CCOCHACCASA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.89607573399996, -12.986089855999978],
						[-74.89607573399996, -12.867526729999952],
						[-74.71822398399996, -12.867526729999952],
						[-74.71822398399996, -12.986089855999978],
						[-74.89607573399996, -12.986089855999978],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151020',
			nombdist: 'MADEAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.79636998499996, -13.040111355999954],
						[-75.79636998499996, -12.866839980999941],
						[-75.61309160999997, -12.866839980999941],
						[-75.61309160999997, -13.040111355999954],
						[-75.79636998499996, -13.040111355999954],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080904',
			nombdist: 'MARANURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.72144998299996, -13.014737605999926],
						[-72.72144998299996, -12.854683604999934],
						[-72.55858623199998, -12.854683604999934],
						[-72.55858623199998, -13.014737605999926],
						[-72.72144998299996, -13.014737605999926],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090403',
			nombdist: 'AURAHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61719135999994, -13.066015104999963],
						[-75.61719135999994, -12.843897229999982],
						[-75.33462335999997, -12.843897229999982],
						[-75.33462335999997, -13.066015104999963],
						[-75.61719135999994, -13.066015104999963],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080408',
			nombdist: 'YANATILE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.36993360699995, -13.024309230999961],
						[-72.36993360699995, -12.506591104999927],
						[-71.82392560699998, -12.506591104999927],
						[-71.82392560699998, -13.024309230999961],
						[-72.36993360699995, -13.024309230999961],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090119',
			nombdist: 'HUANDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.11443998399994, -12.741873855999927],
						[-75.11443998399994, -12.505292979999979],
						[-74.92077335999994, -12.505292979999979],
						[-74.92077335999994, -12.741873855999927],
						[-75.11443998399994, -12.741873855999927],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120204',
			nombdist: 'CHAMBARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.49926998499996, -12.066810017999956],
						[-75.49926998499996, -11.93438260399995],
						[-75.35539415299996, -11.93438260399995],
						[-75.35539415299996, -12.066810017999956],
						[-75.49926998499996, -12.066810017999956],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120124',
			nombdist: 'PARIAHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.06248585999998, -12.070818479999957],
						[-75.06248585999998, -11.81643547899995],
						[-74.67085148399997, -11.81643547899995],
						[-74.67085148399997, -12.070818479999957],
						[-75.06248585999998, -12.070818479999957],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090303',
			nombdist: 'CALLANMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.64970510899997, -12.921275355999967],
						[-74.64970510899997, -12.842246105999948],
						[-74.59676560899999, -12.842246105999948],
						[-74.59676560899999, -12.921275355999967],
						[-74.64970510899997, -12.921275355999967],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151032',
			nombdist: 'VIÑAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94555998499999, -12.948219979999976],
						[-75.94555998499999, -12.841901479999933],
						[-75.61211160999994, -12.841901479999933],
						[-75.61211160999994, -12.948219979999976],
						[-75.94555998499999, -12.948219979999976],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151009',
			nombdist: 'CHOCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.00854711099998, -13.015994105999937],
						[-76.00854711099998, -12.838590979999935],
						[-75.83868248499994, -12.838590979999935],
						[-75.83868248499994, -13.015994105999937],
						[-76.00854711099998, -13.015994105999937],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150108',
			nombdist: 'CHORRILLOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03983598699995, -12.230748104999975],
						[-77.03983598699995, -12.15387110499995],
						[-76.97230286099995, -12.15387110499995],
						[-76.97230286099995, -12.230748104999975],
						[-77.03983598699995, -12.230748104999975],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1702',
			nombprov: 'MANU',
			iddist: '170201',
			nombdist: 'MANU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.07896160699994, -12.962878854999929],
						[-72.07896160699994, -11.811400478999929],
						[-70.92066973099998, -11.811400478999929],
						[-70.92066973099998, -12.962878854999929],
						[-72.07896160699994, -12.962878854999929],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150609',
			nombdist: 'SAN MIGUEL DE ACOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.83744998599997, -11.330410978999964],
						[-76.83744998599997, -11.257489978999956],
						[-76.70011136099998, -11.257489978999956],
						[-76.70011136099998, -11.330410978999964],
						[-76.83744998599997, -11.330410978999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150601',
			nombdist: 'HUARAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.33298773699994, -11.563549978999959],
						[-77.33298773699994, -11.245464853999977],
						[-76.95180998599994, -11.245464853999977],
						[-76.95180998599994, -11.563549978999959],
						[-77.33298773699994, -11.563549978999959],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120804',
			nombdist: 'MARCAPOMACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.45726760999997, -11.59623922999998],
						[-76.45726760999997, -11.238769978999926],
						[-76.08239998599998, -11.238769978999926],
						[-76.08239998599998, -11.59623922999998],
						[-76.45726760999997, -11.59623922999998],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080105',
			nombdist: 'SAN SEBASTIAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.96872848199996, -13.601948231999927],
						[-71.96872848199996, -13.467599105999966],
						[-71.88294885699997, -13.467599105999966],
						[-71.88294885699997, -13.601948231999927],
						[-71.96872848199996, -13.601948231999927],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1205',
			nombprov: 'JUNIN',
			iddist: '120503',
			nombdist: 'ONDORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.27885923499997, -11.21021597899994],
						[-76.27885923499997, -10.918859353999949],
						[-76.06201173599999, -10.918859353999949],
						[-76.06201173599999, -11.21021597899994],
						[-76.27885923499997, -11.21021597899994],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120704',
			nombdist: 'HUASAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.81359248499996, -11.318251853999982],
						[-75.81359248499996, -10.90029535399998],
						[-75.42234398499994, -10.90029535399998],
						[-75.42234398499994, -11.318251853999982],
						[-75.81359248499996, -11.318251853999982],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081211',
			nombdist: 'OROPESA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.83559010699997, -13.62921223099994],
						[-71.83559010699997, -13.508258105999971],
						[-71.73953598099996, -13.508258105999971],
						[-71.73953598099996, -13.62921223099994],
						[-71.83559010699997, -13.62921223099994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151029',
			nombdist: 'TAURIPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.29955423599995, -12.854369105999979],
						[-76.29955423599995, -12.52333985599995],
						[-76.07311286099997, -12.52333985599995],
						[-76.07311286099997, -12.854369105999979],
						[-76.29955423599995, -12.854369105999979],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090110',
			nombdist: 'MANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.21523048499995, -12.692246104999981],
						[-75.21523048499995, -12.520147729999962],
						[-75.09588123499998, -12.520147729999962],
						[-75.09588123499998, -12.692246104999981],
						[-75.21523048499995, -12.692246104999981],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090109',
			nombdist: 'LARIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.12456085999997, -12.600800980999963],
						[-75.12456085999997, -12.50851672999994],
						[-75.00749235999996, -12.50851672999994],
						[-75.00749235999996, -12.600800980999963],
						[-75.12456085999997, -12.600800980999963],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120132',
			nombdist: 'SAÑO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.28099135999997, -11.982413104999978],
						[-75.28099135999997, -11.93021847999995],
						[-75.21192385899997, -11.93021847999995],
						[-75.21192385899997, -11.982413104999978],
						[-75.28099135999997, -11.982413104999978],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120136',
			nombdist: 'VIQUES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24426210999997, -12.174939979999976],
						[-75.24426210999997, -12.14654497999993],
						[-75.20883598399996, -12.14654497999993],
						[-75.20883598399996, -12.174939979999976],
						[-75.24426210999997, -12.174939979999976],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150726',
			nombdist: 'SANGALLAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.30513673599995, -12.303703479999967],
						[-76.30513673599995, -12.133687604999977],
						[-76.21884998599995, -12.133687604999977],
						[-76.21884998599995, -12.303703479999967],
						[-76.30513673599995, -12.303703479999967],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150811',
			nombdist: 'SAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.44741823599998, -11.366226103999963],
						[-77.44741823599998, -10.900116103999949],
						[-77.03265436099997, -10.900116103999949],
						[-77.03265436099997, -11.366226103999963],
						[-77.44741823599998, -11.366226103999963],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150403',
			nombdist: 'HUAMANTANGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03525417599997, -11.686492854999926],
						[-77.03525417599997, -11.420320604999972],
						[-76.67819611099998, -11.420320604999972],
						[-76.67819611099998, -11.686492854999926],
						[-77.03525417599997, -11.686492854999926],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150730',
			nombdist: 'SANTIAGO DE TUNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.57521748599999, -12.031069979999927],
						[-76.57521748599999, -11.926903854999978],
						[-76.48330998599994, -11.926903854999978],
						[-76.48330998599994, -12.031069979999927],
						[-76.57521748599999, -12.031069979999927],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151021',
			nombdist: 'MIRAFLORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.96574498499996, -12.327479979999964],
						[-75.96574498499996, -12.103900479999936],
						[-75.80415998599995, -12.103900479999936],
						[-75.80415998599995, -12.327479979999964],
						[-75.96574498499996, -12.327479979999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150122',
			nombdist: 'MIRAFLORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.05596673699995, -12.140148479999937],
						[-77.05596673699995, -12.102841979999937],
						[-77.00093748599994, -12.102841979999937],
						[-77.00093748599994, -12.140148479999937],
						[-77.05596673699995, -12.140148479999937],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150706',
			nombdist: 'CUENCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51831836099996, -12.188610604999951],
						[-76.51831836099996, -12.102619979999929],
						[-76.38943998599996, -12.102619979999929],
						[-76.38943998599996, -12.188610604999951],
						[-76.51831836099996, -12.188610604999951],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150715',
			nombdist: 'SAN ANDRES DE TUPICOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51462886099995, -12.048039853999967],
						[-76.51462886099995, -11.926205104999951],
						[-76.39753998499998, -11.926205104999951],
						[-76.39753998499998, -12.048039853999967],
						[-76.51462886099995, -12.048039853999967],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090709',
			nombdist: 'HUARIBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.02767760999996, -12.342096604999938],
						[-75.02767760999996, -12.164911354999958],
						[-74.82502310999996, -12.164911354999958],
						[-74.82502310999996, -12.342096604999938],
						[-75.02767760999996, -12.342096604999938],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150401',
			nombdist: 'CANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.67267998599993, -11.539879978999977],
						[-76.67267998599993, -11.405559978999975],
						[-76.50269336099996, -11.405559978999975],
						[-76.50269336099996, -11.539879978999977],
						[-76.67267998599993, -11.539879978999977],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120202',
			nombdist: 'ACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45228710999999, -11.986236229999975],
						[-75.45228710999999, -11.922422479999966],
						[-75.34816010899993, -11.922422479999966],
						[-75.34816010899993, -11.986236229999975],
						[-75.45228710999999, -11.986236229999975],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150721',
			nombdist: 'SAN LORENZO DE QUINTI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.26077998599999, -12.29893223099998],
						[-76.26077998599999, -11.91606547999993],
						[-75.99317973499996, -11.91606547999993],
						[-75.99317973499996, -12.29893223099998],
						[-76.26077998599999, -12.29893223099998],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151003',
			nombdist: 'ALLAUCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.14336523499998, -12.849129980999976],
						[-76.14336523499998, -12.419827354999939],
						[-75.89204298499999, -12.419827354999939],
						[-75.89204298499999, -12.849129980999976],
						[-76.14336523499998, -12.849129980999976],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150124',
			nombdist: 'PUCUSANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.80564848599994, -12.519931604999954],
						[-76.80564848599994, -12.417058605999955],
						[-76.75168161099998, -12.417058605999955],
						[-76.75168161099998, -12.519931604999954],
						[-76.80564848599994, -12.519931604999954],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120805',
			nombdist: 'MOROCOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.22733986099996, -11.632339854999941],
						[-76.22733986099996, -11.387959978999959],
						[-76.03083010999995, -11.387959978999959],
						[-76.03083010999995, -11.632339854999941],
						[-76.22733986099996, -11.632339854999941],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150138',
			nombdist: 'SANTA MARIA DEL MAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.78182223599998, -12.42890035499994],
						[-76.78182223599998, -12.387238354999965],
						[-76.75330273599997, -12.387238354999965],
						[-76.75330273599997, -12.42890035499994],
						[-76.78182223599998, -12.42890035499994],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090116',
			nombdist: 'VILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.41538273499998, -12.637433605999945],
						[-75.41538273499998, -12.406564729999957],
						[-75.14167323399994, -12.406564729999957],
						[-75.14167323399994, -12.637433605999945],
						[-75.41538273499998, -12.637433605999945],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150605',
			nombdist: 'CHANCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.38269336199994, -11.614312979999966],
						[-77.38269336199994, -11.385479978999967],
						[-77.20402998699996, -11.385479978999967],
						[-77.20402998699996, -11.614312979999966],
						[-77.38269336199994, -11.614312979999966],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1701',
			nombprov: 'TAMBOPATA',
			iddist: '170103',
			nombdist: 'LAS PIEDRAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.74718947999997, -12.60574072999998],
						[-70.74718947999997, -11.351355103999936],
						[-68.65446485399997, -11.351355103999936],
						[-68.65446485399997, -12.60574072999998],
						[-70.74718947999997, -12.60574072999998],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090105',
			nombdist: 'CUENCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.10378323499998, -12.501279354999951],
						[-75.10378323499998, -12.401521479999928],
						[-75.00947848499999, -12.401521479999928],
						[-75.00947848499999, -12.501279354999951],
						[-75.10378323499998, -12.501279354999951],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120701',
			nombdist: 'TARMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.91705923499995, -11.567129603999945],
						[-75.91705923499995, -11.35127035399995],
						[-75.59395885999999, -11.35127035399995],
						[-75.59395885999999, -11.567129603999945],
						[-75.91705923499995, -11.567129603999945],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080107',
			nombdist: 'SAYLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.86173248099993, -13.590832355999964],
						[-71.86173248099993, -13.505364481999948],
						[-71.80462598099996, -13.505364481999948],
						[-71.80462598099996, -13.590832355999964],
						[-71.86173248099993, -13.590832355999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150141',
			nombdist: 'SURQUILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.02746673699994, -12.126561854999977],
						[-77.02746673699994, -12.101921854999944],
						[-76.99361723699997, -12.101921854999944],
						[-76.99361723699997, -12.126561854999977],
						[-77.02746673699994, -12.126561854999977],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080104',
			nombdist: 'SAN JERONIMO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.91793998199995, -13.63079473099998],
						[-71.91793998199995, -13.486532605999969],
						[-71.81469985699994, -13.486532605999969],
						[-71.81469985699994, -13.63079473099998],
						[-71.91793998199995, -13.63079473099998],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030608',
			nombdist: 'RANRACANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.64386760799994, -13.609931605999975],
						[-73.64386760799994, -13.489809105999939],
						[-73.53286998299996, -13.489809105999939],
						[-73.53286998299996, -13.609931605999975],
						[-73.64386760799994, -13.609931605999975],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030216',
			nombdist: 'TALAVERA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.50154260799997, -13.736546981999936],
						[-73.50154260799997, -13.489107480999962],
						[-73.40839060799993, -13.489107480999962],
						[-73.40839060799993, -13.736546981999936],
						[-73.50154260799997, -13.736546981999936],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081204',
			nombdist: 'CCARHUAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.46739260599998, -13.657432981999932],
						[-71.46739260599998, -13.446087730999977],
						[-71.21894460599998, -13.446087730999977],
						[-71.21894460599998, -13.657432981999932],
						[-71.46739260599998, -13.657432981999932],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150718',
			nombdist: 'SAN DAMIAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.44624998599994, -12.07933997999993],
						[-76.44624998599994, -11.840833604999943],
						[-76.21561823599995, -11.840833604999943],
						[-76.21561823599995, -12.07933997999993],
						[-76.44624998599994, -12.07933997999993],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120111',
			nombdist: 'CHUPURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.27592003899997, -12.269162104999964],
						[-75.27592003899997, -12.152046276999954],
						[-75.20303148399995, -12.152046276999954],
						[-75.20303148399995, -12.269162104999964],
						[-75.27592003899997, -12.269162104999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150104',
			nombdist: 'BARRANCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.02943748599995, -12.157306604999974],
						[-77.02943748599995, -12.130597354999963],
						[-77.01248636099996, -12.130597354999963],
						[-77.01248636099996, -12.157306604999974],
						[-77.02943748599995, -12.157306604999974],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150731',
			nombdist: 'SANTO DOMINGO DE LOS OLLEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.69155836099998, -12.410324730999946],
						[-76.69155836099998, -12.127919479999946],
						[-76.38579098499997, -12.127919479999946],
						[-76.38579098499997, -12.410324730999946],
						[-76.69155836099998, -12.410324730999946],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120420',
			nombdist: 'MUQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45499998499997, -11.861792979999962],
						[-75.45499998499997, -11.813307979999934],
						[-75.41682160899995, -11.813307979999934],
						[-75.41682160899995, -11.861792979999962],
						[-75.45499998499997, -11.861792979999962],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150143',
			nombdist: 'VILLA MARIA DEL TRIUNFO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.96172223599996, -12.234496104999948],
						[-76.96172223599996, -12.118931854999971],
						[-76.88107561099997, -12.118931854999971],
						[-76.88107561099997, -12.234496104999948],
						[-76.96172223599996, -12.234496104999948],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150133',
			nombdist: 'SAN JUAN DE MIRAFLORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.98639873799993, -12.194949729999962],
						[-76.98639873799993, -12.11549771999995],
						[-76.94079111099995, -12.11549771999995],
						[-76.94079111099995, -12.194949729999962],
						[-76.98639873799993, -12.194949729999962],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120121',
			nombdist: 'HUAYUCACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.24426210999997, -12.155570354999952],
						[-75.24426210999997, -12.114079979999929],
						[-75.19734998499996, -12.114079979999929],
						[-75.19734998499996, -12.155570354999952],
						[-75.24426210999997, -12.155570354999952],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120903',
			nombdist: 'CHONGOS BAJO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.32968748699994, -12.266619104999961],
						[-75.32968748699994, -12.095753383999977],
						[-75.24009485899995, -12.095753383999977],
						[-75.24009485899995, -12.266619104999961],
						[-75.32968748699994, -12.266619104999961],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120413',
			nombdist: 'LEONOR ORDOÑEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.47000998499993, -11.88938872999995],
						[-75.47000998499993, -11.837946229999943],
						[-75.40099498499995, -11.837946229999943],
						[-75.40099498499995, -11.88938872999995],
						[-75.47000998499993, -11.88938872999995],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150711',
			nombdist: 'LANGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.45075998599998, -12.20246672999997],
						[-76.45075998599998, -12.110175979999951],
						[-76.31080948599998, -12.110175979999951],
						[-76.31080948599998, -12.20246672999997],
						[-76.45075998599998, -12.20246672999997],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120423',
			nombdist: 'PACCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61475385999995, -11.92710335399994],
						[-75.61475385999995, -11.824219978999963],
						[-75.46525998499999, -11.824219978999963],
						[-75.46525998499999, -11.92710335399994],
						[-75.61475385999995, -11.92710335399994],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120128',
			nombdist: 'QUILCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.27920510999996, -11.950753728999928],
						[-75.27920510999996, -11.820662604999939],
						[-75.07349223499995, -11.820662604999939],
						[-75.07349223499995, -11.950753728999928],
						[-75.27920510999996, -11.950753728999928],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120207',
			nombdist: 'HEROINAS TOLEDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.31269373499998, -11.867274729999963],
						[-75.31269373499998, -11.809365854999953],
						[-75.25031048399995, -11.809365854999953],
						[-75.25031048399995, -11.867274729999963],
						[-75.31269373499998, -11.867274729999963],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120127',
			nombdist: 'QUICHUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.29488460899995, -11.898154354999974],
						[-75.29488460899995, -11.804499979999946],
						[-75.21877260899998, -11.804499979999946],
						[-75.21877260899998, -11.898154354999974],
						[-75.29488460899995, -11.898154354999974],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150604',
			nombdist: 'AUCALLAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.24824073599996, -11.702090604999967],
						[-77.24824073599996, -11.349769978999973],
						[-76.85909011099994, -11.349769978999973],
						[-76.85909011099994, -11.702090604999967],
						[-77.24824073599996, -11.702090604999967],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120421',
			nombdist: 'MUQUIYAUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.48192498499998, -11.874309978999975],
						[-75.48192498499998, -11.797450854999965],
						[-75.43540523499996, -11.797450854999965],
						[-75.43540523499996, -11.874309978999975],
						[-75.48192498499998, -11.874309978999975],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120409',
			nombdist: 'HUARIPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.49878998499997, -11.855937479999966],
						[-75.49878998499997, -11.796344229999931],
						[-75.45869735999997, -11.796344229999931],
						[-75.45869735999997, -11.855937479999966],
						[-75.49878998499997, -11.855937479999966],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120709',
			nombdist: 'TAPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61209148499995, -11.522992229999943],
						[-75.61209148499995, -11.344980353999972],
						[-75.45746648499994, -11.344980353999972],
						[-75.45746648499994, -11.522992229999943],
						[-75.61209148499995, -11.522992229999943],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120122',
			nombdist: 'INGENIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.28049223499994, -11.929109353999934],
						[-75.28049223499994, -11.79330310499995],
						[-75.16054498499994, -11.79330310499995],
						[-75.16054498499994, -11.929109353999934],
						[-75.28049223499994, -11.929109353999934],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120603',
			nombdist: 'LLAYLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.76600948399994, -11.611992228999952],
						[-74.76600948399994, -11.344635728999947],
						[-74.52805998399998, -11.344635728999947],
						[-74.52805998399998, -11.611992228999952],
						[-74.76600948399994, -11.611992228999952],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150406',
			nombdist: 'SAN BUENAVENTURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.71281998599994, -11.541540103999978],
						[-76.71281998599994, -11.344082603999937],
						[-76.61391998599998, -11.344082603999937],
						[-76.61391998599998, -11.541540103999978],
						[-76.71281998599994, -11.541540103999978],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120428',
			nombdist: 'SAN LORENZO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.41233323499995, -11.874244479999959],
						[-75.41233323499995, -11.791890604999935],
						[-75.33096998499997, -11.791890604999935],
						[-75.33096998499997, -11.874244479999959],
						[-75.41233323499995, -11.874244479999959],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120407',
			nombdist: 'EL MANTARO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.42308148499995, -11.840979104999974],
						[-75.42308148499995, -11.791829604999975],
						[-75.35407823499997, -11.791829604999975],
						[-75.35407823499997, -11.840979104999974],
						[-75.42308148499995, -11.840979104999974],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120806',
			nombdist: 'PACCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.09508598599996, -11.543702978999931],
						[-76.09508598599996, -11.333323978999942],
						[-75.88269398499995, -11.333323978999942],
						[-75.88269398499995, -11.543702978999931],
						[-76.09508598599996, -11.543702978999931],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150732',
			nombdist: 'SURCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.50021010999995, -11.944848104999949],
						[-76.50021010999995, -11.790103853999938],
						[-76.39288185999999, -11.790103853999938],
						[-76.39288185999999, -11.944848104999949],
						[-76.50021010999995, -11.944848104999949],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120430',
			nombdist: 'SAUSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.50240623399998, -11.80191997999998],
						[-75.50240623399998, -11.784101479999947],
						[-75.46341985899994, -11.784101479999947],
						[-75.46341985899994, -11.80191997999998],
						[-75.50240623399998, -11.80191997999998],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1703',
			nombprov: 'TAHUAMANU',
			iddist: '170303',
			nombdist: 'TAHUAMANU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.37267385499996, -11.931843729999969],
						[-70.37267385499996, -11.328091853999979],
						[-68.97029397899996, -11.328091853999979],
						[-68.97029397899996, -11.931843729999969],
						[-70.37267385499996, -11.931843729999969],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250101',
			nombdist: 'CALLERIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.69649060899997, -8.531767601999945],
						[-74.69649060899997, -7.262049474999969],
						[-73.52600210799994, -7.262049474999969],
						[-73.52600210799994, -8.531767601999945],
						[-74.69649060899997, -8.531767601999945],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120425',
			nombdist: 'PARCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.57621998499997, -11.865925729999958],
						[-75.57621998499997, -11.782229979999954],
						[-75.49940998499994, -11.782229979999954],
						[-75.49940998499994, -11.865925729999958],
						[-75.57621998499997, -11.865925729999958],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150807',
			nombdist: 'LEONCIO PRADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.09713848599995, -11.138389978999953],
						[-77.09713848599995, -10.977653103999955],
						[-76.78244723599994, -10.977653103999955],
						[-76.78244723599994, -11.138389978999953],
						[-77.09713848599995, -11.138389978999953],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120607',
			nombdist: 'RIO NEGRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.85588010899994, -11.23731335399998],
						[-74.85588010899994, -10.97004560399995],
						[-74.52321435899995, -10.97004560399995],
						[-74.52321435899995, -11.23731335399998],
						[-74.85588010899994, -11.23731335399998],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120708',
			nombdist: 'SAN PEDRO DE CAJAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.97208010999998, -11.333161478999955],
						[-75.97208010999998, -10.94923997899997],
						[-75.59977998499994, -10.94923997899997],
						[-75.59977998499994, -11.333161478999955],
						[-75.97208010999998, -11.333161478999955],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1205',
			nombprov: 'JUNIN',
			iddist: '120501',
			nombdist: 'JUNIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.19314398599994, -11.387959978999959],
						[-76.19314398599994, -10.947351978999961],
						[-75.88044923499996, -10.947351978999961],
						[-75.88044923499996, -11.387959978999959],
						[-76.19314398599994, -11.387959978999959],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090508',
			nombdist: 'SAN MIGUEL DE MAYOCC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.44729485899995, -12.815109354999947],
						[-74.44729485899995, -12.755379729999959],
						[-74.37518210899998, -12.755379729999959],
						[-74.37518210899998, -12.815109354999947],
						[-74.44729485899995, -12.815109354999947],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080103',
			nombdist: 'POROY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.06222023199996, -13.531476980999969],
						[-72.06222023199996, -13.476902105999955],
						[-72.02064060699996, -13.476902105999955],
						[-72.02064060699996, -13.531476980999969],
						[-72.06222023199996, -13.531476980999969],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090505',
			nombdist: 'LA MERCED',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.38125973399997, -12.836919980999937],
						[-74.38125973399997, -12.737099979999982],
						[-74.28496998299994, -12.737099979999982],
						[-74.28496998299994, -12.836919980999937],
						[-74.38125973399997, -12.836919980999937],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			iddist: '081102',
			nombdist: 'CAICAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.73804710599995, -13.640009730999964],
						[-71.73804710599995, -13.456801355999971],
						[-71.61931648199999, -13.456801355999971],
						[-71.61931648199999, -13.640009730999964],
						[-71.73804710599995, -13.640009730999964],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			iddist: '081105',
			nombdist: 'HUANCARANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.71779898099999, -13.569588980999981],
						[-71.71779898099999, -13.456541480999931],
						[-71.54747260599999, -13.456541480999931],
						[-71.54747260599999, -13.569588980999981],
						[-71.71779898099999, -13.569588980999981],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			iddist: '090504',
			nombdist: 'EL CARMEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.54293948399999, -12.770816354999965],
						[-74.54293948399999, -12.631966854999973],
						[-74.45850448399995, -12.631966854999973],
						[-74.45850448399995, -12.770816354999965],
						[-74.54293948399999, -12.770816354999965],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030104',
			nombdist: 'CURAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.83085548199995, -13.790212605999955],
						[-72.83085548199995, -13.478201355999943],
						[-72.39878935699994, -13.478201355999943],
						[-72.39878935699994, -13.790212605999955],
						[-72.83085548199995, -13.790212605999955],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030602',
			nombdist: 'ANCO_HUALLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.70866673299997, -13.625902356999973],
						[-73.70866673299997, -13.46825410599996],
						[-73.63055860799994, -13.46825410599996],
						[-73.63055860799994, -13.625902356999973],
						[-73.70866673299997, -13.625902356999973],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081205',
			nombdist: 'CCATCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.62676735599996, -13.721726481999951],
						[-71.62676735599996, -13.454896480999935],
						[-71.40065623099997, -13.454896480999935],
						[-71.40065623099997, -13.721726481999951],
						[-71.62676735599996, -13.721726481999951],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090609',
			nombdist: 'QUITO-ARMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.51095998499994, -13.613726606999933],
						[-75.51095998499994, -13.452052605999938],
						[-75.29649610999996, -13.452052605999938],
						[-75.29649610999996, -13.613726606999933],
						[-75.51095998499994, -13.613726606999933],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			iddist: '080101',
			nombdist: 'CUSCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.05386948199998, -13.565614481999944],
						[-72.05386948199998, -13.429496105999931],
						[-71.92445698099993, -13.429496105999931],
						[-71.92445698099993, -13.565614481999944],
						[-72.05386948199998, -13.565614481999944],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090616',
			nombdist: 'TAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.30458748499996, -13.730085980999945],
						[-75.30458748499996, -13.45743960599998],
						[-75.03524560899996, -13.45743960599998],
						[-75.03524560899996, -13.730085980999945],
						[-75.30458748499996, -13.730085980999945],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030601',
			nombdist: 'CHINCHEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.81717248299998, -13.591096605999951],
						[-73.81717248299998, -13.447503980999954],
						[-73.68993823299996, -13.447503980999954],
						[-73.68993823299996, -13.591096605999951],
						[-73.81717248299998, -13.591096605999951],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151002',
			nombdist: 'ALIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.81334998499995, -12.345498479999947],
						[-75.81334998499995, -12.232663979999927],
						[-75.58641185899995, -12.232663979999927],
						[-75.58641185899995, -12.345498479999947],
						[-75.81334998499995, -12.345498479999947],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030219',
			nombdist: 'KAQUIABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.33310748299994, -13.586494355999946],
						[-73.33310748299994, -13.446597105999956],
						[-73.22881010699996, -13.446597105999956],
						[-73.22881010699996, -13.586494355999946],
						[-73.33310748299994, -13.586494355999946],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150611',
			nombdist: 'SUMBILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.98936998599999, -11.468059979999964],
						[-76.98936998599999, -11.31951997899995],
						[-76.68835548599998, -11.31951997899995],
						[-76.68835548599998, -11.468059979999964],
						[-76.98936998599999, -11.468059979999964],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1702',
			nombprov: 'MANU',
			iddist: '170202',
			nombdist: 'FITZCARRALD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.42873873199994, -12.717998104999936],
						[-72.42873873199994, -11.315101978999962],
						[-70.53615622999996, -11.315101978999962],
						[-70.53615622999996, -12.717998104999936],
						[-72.42873873199994, -12.717998104999936],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090408',
			nombdist: 'HUAMATAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.71876823499997, -13.16803910599998],
						[-75.71876823499997, -13.040556354999978],
						[-75.65187298499995, -13.040556354999978],
						[-75.65187298499995, -13.16803910599998],
						[-75.71876823499997, -13.16803910599998],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090312',
			nombdist: 'SECCLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.63483785899996, -13.153453605999971],
						[-74.63483785899996, -13.011900354999966],
						[-74.45423823399994, -13.011900354999966],
						[-74.45423823399994, -13.153453605999971],
						[-74.63483785899996, -13.153453605999971],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150404',
			nombdist: 'HUAROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.64046161099998, -11.507224853999958],
						[-76.64046161099998, -11.312529853999933],
						[-76.37148498599998, -11.312529853999933],
						[-76.37148498599998, -11.507224853999958],
						[-76.64046161099998, -11.507224853999958],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061001',
			nombdist: 'PEDRO GALVEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.32557623699995, -7.402706724999973],
						[-78.32557623699995, -7.245428224999955],
						[-78.04788823699994, -7.245428224999955],
						[-78.04788823699994, -7.402706724999973],
						[-78.32557623699995, -7.402706724999973],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150514',
			nombdist: 'SAN LUIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.46796498599997, -13.086515605999978],
						[-76.46796498599997, -13.010865229999979],
						[-76.38872998599999, -13.010865229999979],
						[-76.38872998599999, -13.086515605999978],
						[-76.46796498599997, -13.086515605999978],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090402',
			nombdist: 'ARMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61347973499994, -13.231089855999926],
						[-75.61347973499994, -13.00795885599996],
						[-75.40048985999994, -13.00795885599996],
						[-75.40048985999994, -13.231089855999926],
						[-75.61347973499994, -13.231089855999926],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080908',
			nombdist: 'SANTA TERESA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.96462885699998, -13.458128856999963],
						[-72.96462885699998, -13.00449323099997],
						[-72.54431548199994, -13.00449323099997],
						[-72.54431548199994, -13.458128856999963],
						[-72.96462885699998, -13.458128856999963],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211210',
			nombdist: 'SAN PEDRO DE PUTINA PUNCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.64749222999995, -14.225373106999939],
						[-69.64749222999995, -13.003925855999967],
						[-68.82667572899999, -13.003925855999967],
						[-68.82667572899999, -14.225373106999939],
						[-69.64749222999995, -14.225373106999939],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110203',
			nombdist: 'CHAVIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.08335998499996, -13.278410105999967],
						[-76.08335998499996, -12.99098822999997],
						[-75.80164260999999, -12.99098822999997],
						[-75.80164260999999, -13.278410105999967],
						[-76.08335998499996, -13.278410105999967],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120605',
			nombdist: 'PAMPA HERMOSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.05100123399995, -11.60349535399996],
						[-75.05100123399995, -11.263586853999982],
						[-74.66212310899994, -11.263586853999982],
						[-74.66212310899994, -11.60349535399996],
						[-75.05100123399995, -11.60349535399996],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131002',
			nombdist: 'ANGASMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.09638386199998, -8.238298850999968],
						[-78.09638386199998, -8.052215600999943],
						[-77.95447261199996, -8.052215600999943],
						[-77.95447261199996, -8.238298850999968],
						[-78.09638386199998, -8.238298850999968],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150507',
			nombdist: 'IMPERIAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.43006836099994, -13.102224855999964],
						[-76.43006836099994, -12.98217185599998],
						[-76.32891985999998, -12.98217185599998],
						[-76.32891985999998, -13.102224855999964],
						[-76.43006836099994, -13.102224855999964],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110209',
			nombdist: 'SAN PEDRO DE HUACARPANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.81540235999995, -13.174384730999975],
						[-75.81540235999995, -12.96493335599996],
						[-75.60260848499996, -12.96493335599996],
						[-75.60260848499996, -13.174384730999975],
						[-75.81540235999995, -13.174384730999975],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070103',
			nombdist: 'CARMEN DE LA LEGUA REYNOSO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.09913086199998, -12.048519479999982],
						[-77.09913086199998, -12.036417853999978],
						[-77.08154686099994, -12.036417853999978],
						[-77.08154686099994, -12.048519479999982],
						[-77.09913086199998, -12.048519479999982],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151005',
			nombdist: 'AZANGARO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.88018335999999, -13.060429730999942],
						[-75.88018335999999, -12.962599980999926],
						[-75.76427885999993, -12.962599980999926],
						[-75.76427885999993, -13.060429730999942],
						[-75.88018335999999, -13.060429730999942],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080903',
			nombdist: 'HUAYOPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.62858985699995, -13.174201855999968],
						[-72.62858985699995, -12.931566354999973],
						[-72.30070985699996, -12.931566354999973],
						[-72.30070985699996, -13.174201855999968],
						[-72.62858985699995, -13.174201855999968],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090701',
			nombdist: 'PAMPAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.89047298399998, -12.523705104999976],
						[-74.89047298399998, -12.35181001799998],
						[-74.80288473399997, -12.35181001799998],
						[-74.80288473399997, -12.523705104999976],
						[-74.89047298399998, -12.523705104999976],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070104',
			nombdist: 'LA PERLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.13293948699999, -12.079492229999971],
						[-77.13293948699999, -12.063121104999937],
						[-77.10395511099995, -12.063121104999937],
						[-77.10395511099995, -12.079492229999971],
						[-77.13293948699999, -12.079492229999971],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151010',
			nombdist: 'COCHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.24844823499996, -12.310239979999949],
						[-76.24844823499996, -12.259267604999934],
						[-76.15261998599993, -12.259267604999934],
						[-76.15261998599993, -12.310239979999949],
						[-76.24844823499996, -12.310239979999949],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150134',
			nombdist: 'SAN LUIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.01036323599999, -12.084076228999947],
						[-77.01036323599999, -12.060504854999976],
						[-76.98696286099994, -12.060504854999976],
						[-76.98696286099994, -12.084076228999947],
						[-77.01036323599999, -12.084076228999947],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120106',
			nombdist: 'CHICCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.35819566199996, -12.327609979999977],
						[-75.35819566199996, -12.258265604999963],
						[-75.24655998399999, -12.258265604999963],
						[-75.24655998399999, -12.327609979999977],
						[-75.35819566199996, -12.327609979999977],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080307',
			nombdist: 'MOLLEPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.77286310699998, -13.562764731999948],
						[-72.77286310699998, -13.332609355999978],
						[-72.50541798199998, -13.332609355999978],
						[-72.50541798199998, -13.562764731999948],
						[-72.77286310699998, -13.562764731999948],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080306',
			nombdist: 'LIMATAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.57236135699998, -13.633499980999943],
						[-72.57236135699998, -13.332609355999978],
						[-72.33123573199998, -13.332609355999978],
						[-72.33123573199998, -13.633499980999943],
						[-72.57236135699998, -13.633499980999943],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151004',
			nombdist: 'AYAVIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.15092011099995, -12.467072104999943],
						[-76.15092011099995, -12.257520229999955],
						[-75.94194161099995, -12.257520229999955],
						[-75.94194161099995, -12.467072104999943],
						[-76.15092011099995, -12.467072104999943],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080405',
			nombdist: 'PISAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.89318160599998, -13.463177605999931],
						[-71.89318160599998, -13.31408948099994],
						[-71.72461523199996, -13.31408948099994],
						[-71.72461523199996, -13.463177605999931],
						[-71.89318160599998, -13.463177605999931],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151025',
			nombdist: 'QUINOCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.34659961099999, -12.422808604999943],
						[-76.34659961099999, -12.257250229999954],
						[-76.20115185999998, -12.257250229999954],
						[-76.20115185999998, -12.422808604999943],
						[-76.34659961099999, -12.422808604999943],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151024',
			nombdist: 'QUINCHES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.20280998599998, -12.365619979999963],
						[-76.20280998599998, -12.247569229999954],
						[-75.98402735999997, -12.247569229999954],
						[-75.98402735999997, -12.365619979999963],
						[-76.20280998599998, -12.365619979999963],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120112',
			nombdist: 'COLCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.27406513699998, -12.396249979999936],
						[-75.27406513699998, -12.241820354999959],
						[-75.12934985899994, -12.241820354999959],
						[-75.12934985899994, -12.396249979999936],
						[-75.27406513699998, -12.396249979999936],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151017',
			nombdist: 'HUAÑEC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.15261998599993, -12.308719979999978],
						[-76.15261998599993, -12.22834185499994],
						[-76.02601873499998, -12.22834185499994],
						[-76.02601873499998, -12.308719979999978],
						[-76.15261998599993, -12.308719979999978],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150127',
			nombdist: 'PUNTA NEGRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.81759573699998, -12.38399247999996],
						[-76.81759573699998, -12.211669979999954],
						[-76.62082436099996, -12.211669979999954],
						[-76.62082436099996, -12.38399247999996],
						[-76.81759573699998, -12.38399247999996],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090413',
			nombdist: 'TICRAPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.49492998499994, -13.52630598099995],
						[-75.49492998499994, -13.313970730999927],
						[-75.31761923499994, -13.313970730999927],
						[-75.31761923499994, -13.52630598099995],
						[-75.49492998499994, -13.52630598099995],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090713',
			nombdist: 'QUISHUAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.79166810899994, -12.288529604999951],
						[-74.79166810899994, -12.208173854999927],
						[-74.73870998399997, -12.208173854999927],
						[-74.73870998399997, -12.288529604999951],
						[-74.79166810899994, -12.288529604999951],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080305',
			nombdist: 'HUAROCONDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.38582323199995, -13.467865230999962],
						[-72.38582323199995, -13.28477473099997],
						[-72.14666548199995, -13.28477473099997],
						[-72.14666548199995, -13.467865230999962],
						[-72.38582323199995, -13.467865230999962],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070106',
			nombdist: 'VENTANILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.18795546699994, -11.949973410999974],
						[-77.18795546699994, -11.817821212999945],
						[-77.08927396799999, -11.817821212999945],
						[-77.08927396799999, -11.949973410999974],
						[-77.18795546699994, -11.949973410999974],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150125',
			nombdist: 'PUENTE PIEDRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.12596357799998, -11.949677774999941],
						[-77.12596357799998, -11.80357472999998],
						[-77.05405986099998, -11.80357472999998],
						[-77.05405986099998, -11.949677774999941],
						[-77.12596357799998, -11.949677774999941],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150808',
			nombdist: 'PACCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.08425011099996, -11.04574635399996],
						[-77.08425011099996, -10.874901603999945],
						[-76.86157436099995, -10.874901603999945],
						[-76.86157436099995, -11.04574635399996],
						[-77.08425011099996, -11.04574635399996],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150713',
			nombdist: 'MARIATANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.44055611099998, -12.339050604999954],
						[-76.44055611099998, -12.195695604999969],
						[-76.29294648499996, -12.195695604999969],
						[-76.29294648499996, -12.339050604999954],
						[-76.44055611099998, -12.339050604999954],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110202',
			nombdist: 'ALTO LARAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.13698810999995, -13.479429730999982],
						[-76.13698810999995, -13.257330105999927],
						[-75.78261060999995, -13.257330105999927],
						[-75.78261060999995, -13.479429730999982],
						[-76.13698810999995, -13.479429730999982],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			iddist: '081104',
			nombdist: 'COLQUEPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.85025185599994, -13.59929398199995],
						[-71.85025185599994, -13.250599855999951],
						[-71.50204885599999, -13.250599855999951],
						[-71.50204885599999, -13.59929398199995],
						[-71.85025185599994, -13.59929398199995],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			iddist: '090205',
			nombdist: 'MARCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.45845898399995, -12.965132855999968],
						[-74.45845898399995, -12.799322229999973],
						[-74.31919998399997, -12.799322229999973],
						[-74.31919998399997, -12.965132855999968],
						[-74.45845898399995, -12.965132855999968],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120135',
			nombdist: 'SANTO DOMINGO DE ACOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.88793623399994, -12.012229979999972],
						[-74.88793623399994, -11.660737104999953],
						[-74.48783435899998, -11.660737104999953],
						[-74.48783435899998, -12.012229979999972],
						[-74.88793623399994, -12.012229979999972],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151026',
			nombdist: 'SAN JOAQUIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.17123235999998, -12.298029979999967],
						[-76.17123235999998, -12.190730604999942],
						[-76.04250835999994, -12.190730604999942],
						[-76.04250835999994, -12.298029979999967],
						[-76.17123235999998, -12.298029979999967],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050908',
			nombdist: 'SAN PEDRO DE LARCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.68222085799994, -14.41636985699995],
						[-73.68222085799994, -14.14468035699997],
						[-73.51224998299995, -14.14468035699997],
						[-73.51224998299995, -14.41636985699995],
						[-73.68222085799994, -14.41636985699995],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120803',
			nombdist: 'HUAY-HUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.05206161099994, -11.795094353999957],
						[-76.05206161099994, -11.639879979999932],
						[-75.85611998599995, -11.639879979999932],
						[-75.85611998599995, -11.795094353999957],
						[-76.05206161099994, -11.795094353999957],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250105',
			nombdist: 'YARINACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.78053248499998, -8.41433785199996],
						[-74.78053248499998, -8.051970725999979],
						[-74.51275673399994, -8.051970725999979],
						[-74.51275673399994, -8.41433785199996],
						[-74.78053248499998, -8.41433785199996],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120113',
			nombdist: 'CULLHUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.22811998499998, -12.32856997999994],
						[-75.22811998499998, -12.190413479999961],
						[-75.09824923399998, -12.190413479999961],
						[-75.09824923399998, -12.32856997999994],
						[-75.22811998499998, -12.32856997999994],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1702',
			nombprov: 'MANU',
			iddist: '170203',
			nombdist: 'MADRE DE DIOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.28257698099998, -13.271045855999944],
						[-71.28257698099998, -12.064205104999928],
						[-70.03739847899993, -12.064205104999928],
						[-70.03739847899993, -13.271045855999944],
						[-71.28257698099998, -13.271045855999944],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150136',
			nombdist: 'SAN MIGUEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.11153323699995, -12.09557622999995],
						[-77.11153323699995, -12.060072229999946],
						[-77.07142186099998, -12.060072229999946],
						[-77.07142186099998, -12.09557622999995],
						[-77.11153323699995, -12.09557622999995],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080304',
			nombdist: 'CHINCHAYPUJIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.40444135699994, -13.71405535699995],
						[-72.40444135699994, -13.509113855999942],
						[-72.13220698199996, -13.509113855999942],
						[-72.13220698199996, -13.71405535699995],
						[-72.40444135699994, -13.71405535699995],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050901',
			nombdist: 'QUEROBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.89070098299999, -14.116710981999972],
						[-73.89070098299999, -13.863691356999936],
						[-73.71450198299993, -13.863691356999936],
						[-73.71450198299993, -14.116710981999972],
						[-73.89070098299999, -14.116710981999972],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120810',
			nombdist: 'YAULI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.20751186099994, -11.899567229999946],
						[-76.20751186099994, -11.580925728999944],
						[-75.98156998499996, -11.580925728999944],
						[-75.98156998499996, -11.899567229999946],
						[-76.20751186099994, -11.899567229999946],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080308',
			nombdist: 'PUCYURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.12696173199998, -13.529877606999946],
						[-72.12696173199998, -13.435052730999928],
						[-72.05736348199997, -13.435052730999928],
						[-72.05736348199997, -13.529877606999946],
						[-72.12696173199998, -13.529877606999946],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030208',
			nombdist: 'PACOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.23961435799998, -13.642095605999941],
						[-73.23961435799998, -13.411719855999934],
						[-73.02262185799998, -13.411719855999934],
						[-73.02262185799998, -13.642095605999941],
						[-73.23961435799998, -13.642095605999941],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110210',
			nombdist: 'SUNAMPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.18828911099996, -13.450785105999955],
						[-76.18828911099996, -13.409240230999956],
						[-76.13490623499996, -13.409240230999956],
						[-76.13490623499996, -13.450785105999955],
						[-76.18828911099996, -13.450785105999955],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110205',
			nombdist: 'EL CARMEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.19170110999994, -13.631447230999981],
						[-76.19170110999994, -13.397511730999952],
						[-75.68928098499998, -13.397511730999952],
						[-75.68928098499998, -13.631447230999981],
						[-76.19170110999994, -13.631447230999981],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030202',
			nombdist: 'ANDARAPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.47679298299994, -13.567013105999933],
						[-73.47679298299994, -13.429960730999937],
						[-73.30815823299997, -13.429960730999937],
						[-73.30815823299997, -13.567013105999933],
						[-73.47679298299994, -13.567013105999933],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080303',
			nombdist: 'CACHIMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.10795510699995, -13.505320480999956],
						[-72.10795510699995, -13.426774105999982],
						[-72.00000573099999, -13.426774105999982],
						[-72.00000573099999, -13.505320480999956],
						[-72.10795510699995, -13.505320480999956],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080406',
			nombdist: 'SAN SALVADOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.85191148099995, -13.575317980999955],
						[-71.85191148099995, -13.421977480999942],
						[-71.71952348099995, -13.421977480999942],
						[-71.71952348099995, -13.575317980999955],
						[-71.85191148099995, -13.575317980999955],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			iddist: '211203',
			nombdist: 'LIMBANI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.85356197999994, -14.33583585699995],
						[-69.85356197999994, -13.341306605999932],
						[-69.32808597899998, -13.341306605999932],
						[-69.32808597899998, -14.33583585699995],
						[-69.85356197999994, -14.33583585699995],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080301',
			nombdist: 'ANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.25564373199995, -13.580021230999932],
						[-72.25564373199995, -13.389180980999981],
						[-72.07823823199993, -13.389180980999981],
						[-72.07823823199993, -13.580021230999932],
						[-72.25564373199995, -13.580021230999932],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1305',
			nombprov: 'JULCAN',
			iddist: '130504',
			nombdist: 'HUASO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.59054773799994, -8.38759835199994],
						[-78.59054773799994, -8.14957685099995],
						[-78.29908573799997, -8.14957685099995],
						[-78.29908573799997, -8.38759835199994],
						[-78.59054773799994, -8.38759835199994],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030606',
			nombdist: 'ONGOY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.71997210799998, -13.490727980999964],
						[-73.71997210799998, -13.33802173099997],
						[-73.57212713699994, -13.33802173099997],
						[-73.57212713699994, -13.490727980999964],
						[-73.71997210799998, -13.490727980999964],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081305',
			nombdist: 'MARAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.23530473099999, -13.397010480999938],
						[-72.23530473099999, -13.272562480999966],
						[-72.08902610699994, -13.272562480999966],
						[-72.08902610699994, -13.397010480999938],
						[-72.23530473099999, -13.397010480999938],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			iddist: '110502',
			nombdist: 'HUANCANO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.81446098499998, -13.749571230999948],
						[-75.81446098499998, -13.352765105999936],
						[-75.46565998399996, -13.352765105999936],
						[-75.46565998399996, -13.749571230999948],
						[-75.81446098499998, -13.749571230999948],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080403',
			nombdist: 'LAMAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.93493948099996, -13.385486980999929],
						[-71.93493948099996, -13.265959105999968],
						[-71.82479998099996, -13.265959105999968],
						[-71.82479998099996, -13.385486980999929],
						[-71.93493948099996, -13.385486980999929],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090407',
			nombdist: 'HUACHOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61037298499997, -13.267927605999944],
						[-75.61037298499997, -13.12570673099998],
						[-75.40565373499999, -13.12570673099998],
						[-75.40565373499999, -13.267927605999944],
						[-75.61037298499997, -13.267927605999944],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081303',
			nombdist: 'HUAYLLABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.10931835699995, -13.385480480999945],
						[-72.10931835699995, -13.264232480999965],
						[-71.98505448099996, -13.264232480999965],
						[-71.98505448099996, -13.385480480999945],
						[-72.10931835699995, -13.385480480999945],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081307',
			nombdist: 'YUCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.10139848099993, -13.336755980999953],
						[-72.10139848099993, -13.246642105999967],
						[-72.04702935699999, -13.246642105999967],
						[-72.04702935699999, -13.336755980999953],
						[-72.10139848099993, -13.336755980999953],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210303',
			nombdist: 'AYAPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.44035172999997, -13.953488731999926],
						[-70.44035172999997, -13.114412855999944],
						[-70.02575335399996, -13.114412855999944],
						[-70.02575335399996, -13.953488731999926],
						[-70.44035172999997, -13.953488731999926],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			iddist: '081101',
			nombdist: 'PAUCARTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.70700148099996, -13.520487980999974],
						[-71.70700148099996, -13.09621673099997],
						[-71.29452548099994, -13.09621673099997],
						[-71.29452548099994, -13.520487980999974],
						[-71.70700148099996, -13.520487980999974],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081306',
			nombdist: 'OLLANTAYTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.54410535699998, -13.37401098099997],
						[-72.54410535699998, -13.096150355999953],
						[-72.14839848199995, -13.096150355999953],
						[-72.14839848199995, -13.37401098099997],
						[-72.54410535699998, -13.37401098099997],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081304',
			nombdist: 'MACHUPICCHU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.60076198199994, -13.335401480999963],
						[-72.60076198199994, -13.082345979999957],
						[-72.38302735699995, -13.082345979999957],
						[-72.38302735699995, -13.335401480999963],
						[-72.60076198199994, -13.335401480999963],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150142',
			nombdist: 'VILLA EL SALVADOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.97715823699997, -12.252555104999942],
						[-76.97715823699997, -12.182467104999944],
						[-76.90961136099997, -12.182467104999944],
						[-76.90961136099997, -12.252555104999942],
						[-76.97715823699997, -12.252555104999942],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150126',
			nombdist: 'PUNTA HERMOSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.84348236099999, -12.345376979999969],
						[-76.84348236099999, -12.177962854999976],
						[-76.64557998599997, -12.177962854999976],
						[-76.64557998599997, -12.345376979999969],
						[-76.84348236099999, -12.345376979999969],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081209',
			nombdist: 'MARCAPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.18435048099997, -13.843148480999957],
						[-71.18435048099997, -13.421882480999955],
						[-70.69885822999998, -13.421882480999955],
						[-70.69885822999998, -13.843148480999957],
						[-71.18435048099997, -13.843148480999957],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050618',
			nombdist: 'SAN PEDRO DE PALCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.66890435899995, -14.442233356999964],
						[-74.66890435899995, -14.148299480999981],
						[-74.31791635899998, -14.148299480999981],
						[-74.31791635899998, -14.442233356999964],
						[-74.66890435899995, -14.442233356999964],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050905',
			nombdist: 'HUACAÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.95003398399996, -14.296434231999967],
						[-73.95003398399996, -14.136035106999941],
						[-73.79830585799994, -14.136035106999941],
						[-73.79830585799994, -14.296434231999967],
						[-73.95003398399996, -14.296434231999967],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110208',
			nombdist: 'SAN JUAN DE YANAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.96262698599998, -13.33942385599994],
						[-75.96262698599998, -13.07794135599994],
						[-75.68894935999998, -13.07794135599994],
						[-75.68894935999998, -13.33942385599994],
						[-75.96262698599998, -13.33942385599994],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			iddist: '081203',
			nombdist: 'CAMANTI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.16173623099996, -13.662652605999938],
						[-71.16173623099996, -13.06700123099995],
						[-70.34507197999994, -13.06700123099995],
						[-70.34507197999994, -13.662652605999938],
						[-71.16173623099996, -13.662652605999938],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050907',
			nombdist: 'PAICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.70309535799998, -14.080015731999936],
						[-73.70309535799998, -13.951109981999934],
						[-73.61800198299994, -13.951109981999934],
						[-73.61800198299994, -14.080015731999936],
						[-73.70309535799998, -14.080015731999936],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0503',
			nombprov: 'HUANCA SANCOS',
			iddist: '050302',
			nombdist: 'CARAPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.42586723399995, -13.895044981999945],
						[-74.42586723399995, -13.733639731999972],
						[-74.22090235899998, -13.733639731999972],
						[-74.22090235899998, -13.895044981999945],
						[-74.42586723399995, -13.895044981999945],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150501',
			nombdist: 'SAN VICENTE DE CAÑETE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.43814648599994, -13.323513730999935],
						[-76.43814648599994, -13.05688560599998],
						[-76.08335998499996, -13.05688560599998],
						[-76.08335998499996, -13.323513730999935],
						[-76.43814648599994, -13.323513730999935],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051103',
			nombdist: 'CARHUANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.82600435799998, -13.770493356999964],
						[-73.82600435799998, -13.701460855999926],
						[-73.72565673299994, -13.701460855999926],
						[-73.72565673299994, -13.770493356999964],
						[-73.82600435799998, -13.770493356999964],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0503',
			nombprov: 'HUANCA SANCOS',
			iddist: '050304',
			nombdist: 'SANTIAGO DE LUCANAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.76679298399995, -13.962142356999948],
						[-74.76679298399995, -13.69534373099998],
						[-74.33598248399994, -13.69534373099998],
						[-74.33598248399994, -13.962142356999948],
						[-74.76679298399995, -13.962142356999948],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051105',
			nombdist: 'HUAMBALPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.00027335899995, -13.801485856999932],
						[-74.00027335899995, -13.679217105999953],
						[-73.75720685799996, -13.679217105999953],
						[-73.75720685799996, -13.801485856999932],
						[-74.00027335899995, -13.801485856999932],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051005',
			nombdist: 'CANARIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.11893710799995, -14.03348610699993],
						[-74.11893710799995, -13.887193731999957],
						[-73.86305360799997, -13.887193731999957],
						[-73.86305360799997, -14.03348610699993],
						[-74.11893710799995, -14.03348610699993],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050909',
			nombdist: 'SAN SALVADOR DE QUIJE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.77325173299994, -14.096685606999927],
						[-73.77325173299994, -13.885987106999949],
						[-73.64807360799995, -13.885987106999949],
						[-73.64807360799995, -14.096685606999927],
						[-73.77325173299994, -14.096685606999927],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050904',
			nombdist: 'CHILCAYOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.75334760799996, -13.929572231999941],
						[-73.75334760799996, -13.849801106999962],
						[-73.69257698299998, -13.849801106999962],
						[-73.69257698299998, -13.929572231999941],
						[-73.75334760799996, -13.929572231999941],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			iddist: '081103',
			nombdist: 'CHALLABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.91068748099997, -13.31232948099995],
						[-71.91068748099997, -12.929805355999974],
						[-71.57501498199997, -12.929805355999974],
						[-71.57501498199997, -13.31232948099995],
						[-71.91068748099997, -13.31232948099995],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2210',
			nombprov: 'TOCACHE',
			iddist: '221005',
			nombdist: 'UCHIZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73284386099994, -8.57583272599993],
						[-76.73284386099994, -8.142537975999971],
						[-76.19468336099999, -8.142537975999971],
						[-76.19468336099999, -8.57583272599993],
						[-76.73284386099994, -8.57583272599993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1312',
			nombprov: 'VIRU',
			iddist: '131201',
			nombdist: 'VIRU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.93552148799995, -8.621466851999969],
						[-78.93552148799995, -8.140700350999964],
						[-78.55037786199995, -8.140700350999964],
						[-78.55037786199995, -8.621466851999969],
						[-78.93552148799995, -8.621466851999969],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130803',
			nombdist: 'CHILLIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63685911199997, -8.273914100999946],
						[-77.63685911199997, -8.050873101999969],
						[-77.41773636099998, -8.050873101999969],
						[-77.41773636099998, -8.273914100999946],
						[-77.63685911199997, -8.273914100999946],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051106',
			nombdist: 'INDEPENDENCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.91190623299997, -13.938444481999966],
						[-73.91190623299997, -13.830748106999977],
						[-73.80344798299996, -13.830748106999977],
						[-73.80344798299996, -13.938444481999966],
						[-73.91190623299997, -13.938444481999966],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150506',
			nombdist: 'COAYLLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.57245036099994, -12.776006105999954],
						[-76.57245036099994, -12.52829548099993],
						[-76.25160873499993, -12.52829548099993],
						[-76.25160873499993, -12.776006105999954],
						[-76.57245036099994, -12.776006105999954],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050903',
			nombdist: 'CHALCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.80638235799995, -13.891601605999938],
						[-73.80638235799995, -13.819765606999965],
						[-73.69691773299996, -13.819765606999965],
						[-73.69691773299996, -13.891601605999938],
						[-73.80638235799995, -13.891601605999938],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0503',
			nombprov: 'HUANCA SANCOS',
			iddist: '050303',
			nombdist: 'SACSAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.33968373399995, -14.13487698199998],
						[-74.33968373399995, -13.80440723099997],
						[-74.09918185899994, -13.80440723099997],
						[-74.09918185899994, -14.13487698199998],
						[-74.33968373399995, -14.13487698199998],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051010',
			nombdist: 'HUALLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.07526835799996, -13.936705105999977],
						[-74.07526835799996, -13.80049635599994],
						[-73.89040848299999, -13.80049635599994],
						[-73.89040848299999, -13.936705105999977],
						[-74.07526835799996, -13.936705105999977],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0503',
			nombprov: 'HUANCA SANCOS',
			iddist: '050301',
			nombdist: 'SANCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.78641673499999, -14.167058606999944],
						[-74.78641673499999, -13.780247981999935],
						[-74.30529885899995, -13.780247981999935],
						[-74.30529885899995, -14.167058606999944],
						[-74.78641673499999, -14.167058606999944],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030108',
			nombdist: 'SAN PEDRO DE CACHORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.87732035799996, -13.555999480999958],
						[-72.87732035799996, -13.418637855999975],
						[-72.75032460699998, -13.418637855999975],
						[-72.75032460699998, -13.555999480999958],
						[-72.87732035799996, -13.555999480999958],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120105',
			nombdist: 'CHACAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.32650585999994, -12.485953980999966],
						[-75.32650585999994, -12.309489979999967],
						[-75.21096998399997, -12.309489979999967],
						[-75.21096998399997, -12.485953980999966],
						[-75.32650585999994, -12.485953980999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022008',
			nombdist: 'YANAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.62071836199993, -9.107612976999974],
						[-77.62071836199993, -8.900442976999955],
						[-77.35750586099994, -8.900442976999955],
						[-77.35750586099994, -9.107612976999974],
						[-77.62071836199993, -9.107612976999974],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080407',
			nombdist: 'TARAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.93167323199998, -13.49936835699998],
						[-71.93167323199998, -13.416578105999974],
						[-71.84134935699996, -13.416578105999974],
						[-71.84134935699996, -13.49936835699998],
						[-71.93167323199998, -13.49936835699998],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151018',
			nombdist: 'LARAOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.84933560999997, -12.520484479999936],
						[-75.84933560999997, -12.292091854999967],
						[-75.54870110999997, -12.292091854999967],
						[-75.54870110999997, -12.520484479999936],
						[-75.84933560999997, -12.520484479999936],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151007',
			nombdist: 'CARANIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94982223499994, -12.451219979999962],
						[-75.94982223499994, -12.285516479999956],
						[-75.82436010999999, -12.285516479999956],
						[-75.82436010999999, -12.451219979999962],
						[-75.94982223499994, -12.451219979999962],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090706',
			nombdist: 'DANIEL HERNANDEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.88681510899994, -12.426986979999981],
						[-74.88681510899994, -12.283519854999952],
						[-74.76828998399998, -12.283519854999952],
						[-74.76828998399998, -12.426986979999981],
						[-74.88681510899994, -12.426986979999981],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080309',
			nombdist: 'ZURITE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.27948023199997, -13.52329085599996],
						[-72.27948023199997, -13.41395548099996],
						[-72.20017385699998, -13.41395548099996],
						[-72.20017385699998, -13.52329085599996],
						[-72.27948023199997, -13.52329085599996],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110211',
			nombdist: 'TAMBO DE MORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.19426361099994, -13.500820355999963],
						[-76.19426361099994, -13.413072230999944],
						[-76.16705073499998, -13.413072230999944],
						[-76.16705073499998, -13.500820355999963],
						[-76.19426361099994, -13.500820355999963],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			iddist: '080302',
			nombdist: 'ANCAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.37789923199995, -13.522061105999967],
						[-72.37789923199995, -13.387115480999967],
						[-72.26846773099999, -13.387115480999967],
						[-72.26846773099999, -13.522061105999967],
						[-72.37789923199995, -13.522061105999967],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			iddist: '030105',
			nombdist: 'HUANIPACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.16016435799997, -13.574409980999974],
						[-73.16016435799997, -13.383032980999928],
						[-72.83888848199996, -13.383032980999928],
						[-72.83888848199996, -13.574409980999974],
						[-73.16016435799997, -13.574409980999974],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030605',
			nombdist: 'OCOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.60062235799995, -13.61684635599994],
						[-73.60062235799995, -13.382974605999948],
						[-73.44538985799994, -13.382974605999948],
						[-73.44538985799994, -13.61684635599994],
						[-73.60062235799995, -13.61684635599994],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090610',
			nombdist: 'SAN ANTONIO DE CUSICANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.34719310999998, -13.543367230999934],
						[-75.34719310999998, -13.37477860599995],
						[-75.14969523499997, -13.37477860599995],
						[-75.14969523499997, -13.543367230999934],
						[-75.34719310999998, -13.543367230999934],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120902',
			nombdist: 'AHUAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.41822073499998, -12.139978979999967],
						[-75.41822073499998, -12.040019979999954],
						[-75.29829968899998, -12.040019979999954],
						[-75.29829968899998, -12.139978979999967],
						[-75.41822073499998, -12.139978979999967],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			iddist: '081302',
			nombdist: 'CHINCHERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.11737110599995, -13.453669981999951],
						[-72.11737110599995, -13.36595773099998],
						[-71.96867898199997, -13.36595773099998],
						[-71.96867898199997, -13.453669981999951],
						[-72.11737110599995, -13.453669981999951],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			iddist: '210309',
			nombdist: 'SAN GABAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.57367460499995, -13.721451981999962],
						[-70.57367460499995, -13.357626855999968],
						[-70.20071135499995, -13.357626855999968],
						[-70.20071135499995, -13.721451981999962],
						[-70.57367460499995, -13.721451981999962],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151030',
			nombdist: 'TOMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.77900360999996, -12.293166729999939],
						[-75.77900360999996, -12.036547104999954],
						[-75.62701498499996, -12.036547104999954],
						[-75.62701498499996, -12.293166729999939],
						[-75.77900360999996, -12.293166729999939],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			iddist: '080402',
			nombdist: 'COYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.98021685699996, -13.44258948099997],
						[-71.98021685699996, -13.354359105999947],
						[-71.84981923099997, -13.354359105999947],
						[-71.84981923099997, -13.44258948099997],
						[-71.98021685699996, -13.44258948099997],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120126',
			nombdist: 'PUCARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.16570148399995, -12.251100604999976],
						[-75.16570148399995, -12.099942729999952],
						[-75.04832723499999, -12.099942729999952],
						[-75.04832723499999, -12.251100604999976],
						[-75.16570148399995, -12.251100604999976],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090302',
			nombdist: 'ANCHONGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.76940035899997, -12.945847605999973],
						[-74.76940035899997, -12.82330660599996],
						[-74.65358273399994, -12.82330660599996],
						[-74.65358273399994, -12.945847605999973],
						[-74.76940035899997, -12.945847605999973],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1702',
			nombprov: 'MANU',
			iddist: '170204',
			nombdist: 'HUEPETUHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.99373448099993, -13.192388730999937],
						[-70.99373448099993, -12.804878354999971],
						[-70.35273822999994, -12.804878354999971],
						[-70.35273822999994, -13.192388730999937],
						[-70.99373448099993, -13.192388730999937],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			iddist: '110207',
			nombdist: 'PUEBLO NUEVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.15481048599997, -13.412113230999978],
						[-76.15481048599997, -13.13814010599998],
						[-75.99533785999995, -13.13814010599998],
						[-75.99533785999995, -13.412113230999978],
						[-76.15481048599997, -13.412113230999978],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			iddist: '090412',
			nombdist: 'TANTARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.66899610999997, -13.23044773099997],
						[-75.66899610999997, -13.04898247999995],
						[-75.56789448499995, -13.04898247999995],
						[-75.56789448499995, -13.23044773099997],
						[-75.66899610999997, -13.23044773099997],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150714',
			nombdist: 'RICARDO PALMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.67171598599998, -11.968533104999949],
						[-76.67171598599998, -11.907969979999962],
						[-76.58174586099994, -11.907969979999962],
						[-76.58174586099994, -11.968533104999949],
						[-76.67171598599998, -11.968533104999949],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120101',
			nombdist: 'HUANCAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.23615748399999, -12.087654604999955],
						[-75.23615748399999, -11.90126760499993],
						[-74.94656173399994, -11.90126760499993],
						[-74.94656173399994, -12.087654604999955],
						[-75.23615748399999, -12.087654604999955],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090717',
			nombdist: 'SURCUBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.75907199699998, -12.288728730999935],
						[-74.75907199699998, -12.029489979999937],
						[-74.52233135899996, -12.029489979999937],
						[-74.52233135899996, -12.288728730999935],
						[-74.75907199699998, -12.288728730999935],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150137',
			nombdist: 'SANTA ANITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.98984736099999, -12.058476728999949],
						[-76.98984736099999, -12.027499604999946],
						[-76.93796461099998, -12.027499604999946],
						[-76.93796461099998, -12.058476728999949],
						[-76.98984736099999, -12.058476728999949],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021704',
			nombdist: 'HUAYLLAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56467373699996, -10.180547352999952],
						[-77.56467373699996, -9.953071102999957],
						[-77.43414261099997, -9.953071102999957],
						[-77.43414261099997, -10.180547352999952],
						[-77.56467373699996, -10.180547352999952],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120211',
			nombdist: 'MITO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.39308198499998, -11.954794353999944],
						[-75.39308198499998, -11.900304354999946],
						[-75.31277535999999, -11.900304354999946],
						[-75.31277535999999, -11.954794353999944],
						[-75.39308198499998, -11.954794353999944],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090101',
			nombdist: 'HUANCAVELICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.21381835999995, -12.979604105999954],
						[-75.21381835999995, -12.703535854999927],
						[-74.87557210899996, -12.703535854999927],
						[-74.87557210899996, -12.979604105999954],
						[-75.21381835999995, -12.979604105999954],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			iddist: '081106',
			nombdist: 'KOSÑIPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.92120310599995, -13.526708105999944],
						[-71.92120310599995, -12.700058104999925],
						[-71.06417873099997, -12.700058104999925],
						[-71.06417873099997, -13.526708105999944],
						[-71.92120310599995, -13.526708105999944],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090111',
			nombdist: 'MARISCAL CACERES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.94429685999995, -12.565656105999949],
						[-74.94429685999995, -12.532669854999938],
						[-74.92477148499995, -12.532669854999938],
						[-74.92477148499995, -12.565656105999949],
						[-74.94429685999995, -12.565656105999949],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090112',
			nombdist: 'MOYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.17813085899996, -12.534683230999974],
						[-75.17813085899996, -12.378499854999973],
						[-75.08353960899996, -12.378499854999973],
						[-75.08353960899996, -12.534683230999974],
						[-75.17813085899996, -12.534683230999974],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150109',
			nombdist: 'CIENEGUILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.88913323599996, -12.147419979999938],
						[-76.88913323599996, -11.999433604999979],
						[-76.67339461099994, -11.999433604999979],
						[-76.67339461099994, -12.147419979999938],
						[-76.88913323599996, -12.147419979999938],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090115',
			nombdist: 'PILCHACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.13100998499993, -12.45448622999993],
						[-75.13100998499993, -12.377210979999973],
						[-75.04867398499994, -12.377210979999973],
						[-75.04867398499994, -12.45448622999993],
						[-75.13100998499993, -12.45448622999993],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151022',
			nombdist: 'OMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.36748561099995, -12.595498980999935],
						[-76.36748561099995, -12.376766354999972],
						[-76.10603323599997, -12.376766354999972],
						[-76.10603323599997, -12.595498980999935],
						[-76.36748561099995, -12.595498980999935],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151016',
			nombdist: 'HUANTAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.85824998499999, -12.653570979999927],
						[-75.85824998499999, -12.373727354999971],
						[-75.53597398499994, -12.373727354999971],
						[-75.53597398499994, -12.653570979999927],
						[-75.85824998499999, -12.653570979999927],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090716',
			nombdist: 'SAN MARCOS DE ROCCHAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.08640085899998, -12.16788497999994],
						[-75.08640085899998, -11.998374229999968],
						[-74.79427998399996, -11.998374229999968],
						[-74.79427998399996, -12.16788497999994],
						[-75.08640085899998, -12.16788497999994],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120214',
			nombdist: 'SAN JOSE DE QUERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.69430473499995, -12.187350634999973],
						[-75.69430473499995, -11.996039979999978],
						[-75.45810998499996, -11.996039979999978],
						[-75.45810998499996, -12.187350634999973],
						[-75.69430473499995, -12.187350634999973],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090707',
			nombdist: 'HUACHOCOLPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.68159998399994, -12.137537104999979],
						[-74.68159998399994, -11.984679854999968],
						[-74.41199460899998, -11.984679854999968],
						[-74.41199460899998, -12.137537104999979],
						[-74.68159998399994, -12.137537104999979],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			iddist: '090107',
			nombdist: 'HUAYLLAHUARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.22038435999997, -12.437022354999954],
						[-75.22038435999997, -12.360279979999973],
						[-75.14686998399998, -12.360279979999973],
						[-75.14686998399998, -12.437022354999954],
						[-75.22038435999997, -12.437022354999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150129',
			nombdist: 'SAN BARTOLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.78974223599994, -12.401468729999976],
						[-76.78974223599994, -12.333489979999968],
						[-76.66799223599998, -12.333489979999968],
						[-76.66799223599998, -12.401468729999976],
						[-76.78974223599994, -12.401468729999976],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151001',
			nombdist: 'YAUYOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.04579448499999, -12.631869979999976],
						[-76.04579448499999, -12.332824229999972],
						[-75.83277923499998, -12.332824229999972],
						[-75.83277923499998, -12.631869979999976],
						[-76.04579448499999, -12.631869979999976],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090702',
			nombdist: 'ACOSTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.10404098399994, -12.515501979999954],
						[-75.10404098399994, -12.330539105999947],
						[-74.93567660999997, -12.330539105999947],
						[-74.93567660999997, -12.515501979999954],
						[-75.10404098399994, -12.515501979999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151014',
			nombdist: 'HUANCAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94769685999995, -12.218507479999971],
						[-75.94769685999995, -11.984252104999939],
						[-75.74911523499998, -11.984252104999939],
						[-75.74911523499998, -12.218507479999971],
						[-75.94769685999995, -12.218507479999971],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151028',
			nombdist: 'TANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.08622323499998, -12.264522854999939],
						[-76.08622323499998, -11.98394060499993],
						[-75.91288148499996, -11.98394060499993],
						[-75.91288148499996, -12.264522854999939],
						[-76.08622323499998, -12.264522854999939],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090703',
			nombdist: 'ACRAQUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.99173248499994, -12.462925104999954],
						[-74.99173248499994, -12.328485604999969],
						[-74.88779485899994, -12.328485604999969],
						[-74.88779485899994, -12.462925104999954],
						[-74.99173248499994, -12.462925104999954],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120416',
			nombdist: 'MASMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45131185999998, -11.79779885399995],
						[-75.45131185999998, -11.749732479999977],
						[-75.39881410999999, -11.749732479999977],
						[-75.39881410999999, -11.79779885399995],
						[-75.45131185999998, -11.79779885399995],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120104',
			nombdist: 'CARHUACALLANGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.21763998499995, -12.385309980999978],
						[-75.21763998499995, -12.328399979999972],
						[-75.18236998499998, -12.328399979999972],
						[-75.18236998499998, -12.385309980999978],
						[-75.21763998499995, -12.385309980999978],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080906',
			nombdist: 'QUELLOUNO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.76991673199996, -12.689839854999946],
						[-72.76991673199996, -12.324995479999927],
						[-72.07066798199997, -12.324995479999927],
						[-72.07066798199997, -12.689839854999946],
						[-72.76991673199996, -12.689839854999946],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150503',
			nombdist: 'CALANGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.62599523599994, -12.614468729999942],
						[-76.62599523599994, -12.317468729999973],
						[-76.31341561099998, -12.317468729999973],
						[-76.31341561099998, -12.614468729999942],
						[-76.62599523599994, -12.614468729999942],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021509',
			nombdist: 'PAMPAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.94262998699998, -8.269169975999944],
						[-77.94262998699998, -8.049708975999977],
						[-77.61875198699994, -8.049708975999977],
						[-77.61875198699994, -8.269169975999944],
						[-77.94262998699998, -8.269169975999944],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131006',
			nombdist: 'QUIRUVILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.40614773799996, -8.20784647599993],
						[-78.40614773799996, -7.881220850999966],
						[-78.11728123699999, -7.881220850999966],
						[-78.11728123699999, -8.20784647599993],
						[-78.40614773799996, -8.20784647599993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130808',
			nombdist: 'PARCOY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63578361199995, -8.088352350999969],
						[-77.63578361199995, -7.880674600999953],
						[-77.37493636199997, -7.880674600999953],
						[-77.37493636199997, -8.088352350999969],
						[-77.63578361199995, -8.088352350999969],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120120',
			nombdist: 'HUASICANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.32380998499997, -12.417468604999954],
						[-75.32380998499997, -12.314439979999975],
						[-75.24834998499995, -12.314439979999975],
						[-75.24834998499995, -12.417468604999954],
						[-75.32380998499997, -12.417468604999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			iddist: '151013',
			nombdist: 'HUAMPARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.24691998499998, -12.416248979999978],
						[-76.24691998499998, -12.29907997999993],
						[-76.14691473599999, -12.29907997999993],
						[-76.14691473599999, -12.416248979999978],
						[-76.24691998499998, -12.416248979999978],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120108',
			nombdist: 'CHONGOS ALTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.58283985999998, -12.68371572999996],
						[-75.58283985999998, -12.298129979999942],
						[-75.26854998399995, -12.298129979999942],
						[-75.26854998399995, -12.68371572999996],
						[-75.58283985999998, -12.68371572999996],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090704',
			nombdist: 'AHUAYCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.94877048499995, -12.534148479999942],
						[-74.94877048499995, -12.295271854999953],
						[-74.86581835899995, -12.295271854999953],
						[-74.86581835899995, -12.534148479999942],
						[-74.94877048499995, -12.534148479999942],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090710',
			nombdist: 'ÑAHUIMPUQUIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.14022998399997, -12.38234572999994],
						[-75.14022998399997, -12.282563229999937],
						[-75.03028123399997, -12.282563229999937],
						[-75.03028123399997, -12.38234572999994],
						[-75.14022998399997, -12.38234572999994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			iddist: '150505',
			nombdist: 'CHILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.79125323599999, -12.561482479999938],
						[-76.79125323599999, -12.275728479999941],
						[-76.45200998599995, -12.275728479999941],
						[-76.45200998599995, -12.561482479999938],
						[-76.79125323599999, -12.561482479999938],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130810',
			nombdist: 'PIAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.62986761099995, -8.005035100999976],
						[-77.62986761099995, -7.785202475999938],
						[-77.37524548599998, -7.785202475999938],
						[-77.37524548599998, -8.005035100999976],
						[-77.62986761099995, -8.005035100999976],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140115',
			nombdist: 'SAÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.77250123899995, -6.99692347499996],
						[-79.77250123899995, -6.776456974999974],
						[-79.49937811399997, -6.776456974999974],
						[-79.49937811399997, -6.99692347499996],
						[-79.77250123899995, -6.99692347499996],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150710',
			nombdist: 'LAHUAYTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.46774998599994, -12.13624447999996],
						[-76.46774998599994, -12.05986022999997],
						[-76.32480261099994, -12.05986022999997],
						[-76.32480261099994, -12.13624447999996],
						[-76.46774998599994, -12.13624447999996],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150123',
			nombdist: 'PACHACAMAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.91258461099994, -12.239516729999934],
						[-76.91258461099994, -12.059356354999977],
						[-76.66033986099995, -12.059356354999977],
						[-76.66033986099995, -12.239516729999934],
						[-76.91258461099994, -12.239516729999934],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2210',
			nombprov: 'TOCACHE',
			iddist: '221003',
			nombdist: 'POLVORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.10284973599994, -8.276834976999965],
						[-77.10284973599994, -7.685967724999955],
						[-76.50376823599998, -7.685967724999955],
						[-76.50376823599998, -8.276834976999965],
						[-77.10284973599994, -8.276834976999965],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120905',
			nombdist: 'HUAMANCACA CHICO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.26787558999996, -12.096255742999972],
						[-75.26787558999996, -12.058279979999952],
						[-75.23177723499998, -12.058279979999952],
						[-75.23177723499998, -12.096255742999972],
						[-75.26787558999996, -12.096255742999972],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150115',
			nombdist: 'LA VICTORIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03540823599997, -12.090810604999945],
						[-77.03540823599997, -12.057461104999959],
						[-76.99629486099997, -12.057461104999959],
						[-76.99629486099997, -12.090810604999945],
						[-77.03540823599997, -12.090810604999945],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130614',
			nombdist: 'USQUIL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.49454436199994, -7.930074225999931],
						[-78.49454436199994, -7.672802725999929],
						[-78.24887823799997, -7.672802725999929],
						[-78.24887823799997, -7.930074225999931],
						[-78.49454436199994, -7.930074225999931],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130906',
			nombdist: 'SANAGORAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.27334536199999, -7.941374350999979],
						[-78.27334536199999, -7.65315822499997],
						[-78.07616998699996, -7.65315822499997],
						[-78.07616998699996, -7.941374350999979],
						[-78.27334536199999, -7.941374350999979],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150114',
			nombdist: 'LA MOLINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.97625586199996, -12.123755854999956],
						[-76.97625586199996, -12.056699229999936],
						[-76.88403711099994, -12.056699229999936],
						[-76.88403711099994, -12.123755854999956],
						[-76.97625586199996, -12.123755854999956],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070102',
			nombdist: 'BELLAVISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.13423636199997, -12.067902354999944],
						[-77.13423636199997, -12.051865729999975],
						[-77.08725736099996, -12.051865729999975],
						[-77.08725736099996, -12.067902354999944],
						[-77.13423636199997, -12.067902354999944],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150105',
			nombdist: 'BREÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.06116998599998, -12.070252979999964],
						[-77.06116998599998, -12.049103478999939],
						[-77.04146661099998, -12.049103478999939],
						[-77.04146661099998, -12.070252979999964],
						[-77.06116998599998, -12.070252979999964],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120107',
			nombdist: 'CHILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.23333910999997, -12.108123354999975],
						[-75.23333910999997, -12.047249979999947],
						[-75.12465823499997, -12.047249979999947],
						[-75.12465823499997, -12.108123354999975],
						[-75.23333910999997, -12.108123354999975],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130902',
			nombdist: 'CHUGAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.90815236199995, -7.984841850999942],
						[-77.90815236199995, -7.636998100999961],
						[-77.62386761199997, -7.636998100999961],
						[-77.62386761199997, -7.984841850999942],
						[-77.90815236199995, -7.984841850999942],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130605',
			nombdist: 'HUARANCHAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.55194923699997, -7.756599600999948],
						[-78.55194923699997, -7.622415100999945],
						[-78.35643973799995, -7.622415100999945],
						[-78.35643973799995, -7.756599600999948],
						[-78.55194923699997, -7.756599600999948],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120133',
			nombdist: 'SAPALLANGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.21030323499997, -12.190899854999941],
						[-75.21030323499997, -12.045818854999936],
						[-75.06516410899997, -12.045818854999936],
						[-75.06516410899997, -12.190899854999941],
						[-75.21030323499997, -12.190899854999941],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120901',
			nombdist: 'CHUPACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.34118215899997, -12.09894195499993],
						[-75.34118215899997, -12.048299979999967],
						[-75.25771553199996, -12.048299979999967],
						[-75.25771553199996, -12.09894195499993],
						[-75.34118215899997, -12.09894195499993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130809',
			nombdist: 'PATAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70093161099999, -7.859640600999967],
						[-77.70093161099999, -7.593226475999927],
						[-77.45923748599995, -7.593226475999927],
						[-77.45923748599995, -7.859640600999967],
						[-77.70093161099999, -7.859640600999967],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220709',
			nombdist: 'TINGO DE PONASA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.31748998599994, -7.102745724999977],
						[-76.31748998599994, -6.862656224999966],
						[-76.10777348499994, -6.862656224999966],
						[-76.10777348499994, -7.102745724999977],
						[-76.31748998599994, -7.102745724999977],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150725',
			nombdist: 'SAN PEDRO DE HUANCAYRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.22921998599998, -12.14488997999996],
						[-76.22921998599998, -12.042142604999981],
						[-76.14884960999996, -12.042142604999981],
						[-76.14884960999996, -12.14488997999996],
						[-76.22921998599998, -12.14488997999996],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061111',
			nombdist: 'SAN SILVESTRE DE COCHAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.81094536299997, -7.023675724999976],
						[-78.81094536299997, -6.861695599999962],
						[-78.62657173799994, -6.861695599999962],
						[-78.62657173799994, -7.023675724999976],
						[-78.81094536299997, -7.023675724999976],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090715',
			nombdist: 'SALCAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.81718360899998, -12.183539479999979],
						[-74.81718360899998, -12.04089997899996],
						[-74.69630073399998, -12.04089997899996],
						[-74.69630073399998, -12.183539479999979],
						[-74.81718360899998, -12.183539479999979],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120907',
			nombdist: 'SAN JUAN DE JARPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.53620693199997, -12.19583789799998],
						[-75.53620693199997, -12.057304728999952],
						[-75.37617134799996, -12.057304728999952],
						[-75.37617134799996, -12.19583789799998],
						[-75.53620693199997, -12.19583789799998],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120125',
			nombdist: 'PILCOMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.27383212499996, -12.06355997999998],
						[-75.27383212499996, -12.022725604999948],
						[-75.23814885999997, -12.022725604999948],
						[-75.23814885999997, -12.06355997999998],
						[-75.27383212499996, -12.06355997999998],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120408',
			nombdist: 'HUAMALI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.43540523499996, -11.830226979999964],
						[-75.43540523499996, -11.749203354999963],
						[-75.37279585999994, -11.749203354999963],
						[-75.37279585999994, -11.830226979999964],
						[-75.43540523499996, -11.830226979999964],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			iddist: '120904',
			nombdist: 'HUACHAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.39140998499994, -12.054369979999933],
						[-75.39140998499994, -12.006929108999941],
						[-75.30154368199999, -12.006929108999941],
						[-75.30154368199999, -12.054369979999933],
						[-75.39140998499994, -12.054369979999933],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			iddist: '120134',
			nombdist: 'SICAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.32506545199993, -12.058090017999973],
						[-75.32506545199993, -11.977381604999948],
						[-75.25567598399994, -11.977381604999948],
						[-75.25567598399994, -12.058090017999973],
						[-75.32506545199993, -12.058090017999973],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160510',
			nombdist: 'JENARO HERRERA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.90243998299997, -5.24303372299994],
						[-73.90243998299997, -4.737191472999939],
						[-73.52986135799995, -4.737191472999939],
						[-73.52986135799995, -5.24303372299994],
						[-73.90243998299997, -5.24303372299994],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120809',
			nombdist: 'SUITUCANCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.05824998499997, -11.939103729999943],
						[-76.05824998499997, -11.75533960499996],
						[-75.89184823499994, -11.75533960499996],
						[-75.89184823499994, -11.939103729999943],
						[-76.05824998499997, -11.939103729999943],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120405',
			nombdist: 'CANCHAYLLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.05325585999998, -12.059627354999975],
						[-76.05325585999998, -11.746779979999928],
						[-75.57974998499998, -11.746779979999928],
						[-75.57974998499998, -12.059627354999975],
						[-76.05325585999998, -12.059627354999975],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120410',
			nombdist: 'HUERTAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.48546998499995, -11.787614854999958],
						[-75.48546998499995, -11.743879978999928],
						[-75.44781510999996, -11.743879978999928],
						[-75.44781510999996, -11.787614854999958],
						[-75.48546998499995, -11.787614854999958],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120411',
			nombdist: 'JANJAILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.66809460999997, -11.795609978999948],
						[-75.66809460999997, -11.734949978999964],
						[-75.57621998499997, -11.734949978999964],
						[-75.57621998499997, -11.795609978999948],
						[-75.66809460999997, -11.795609978999948],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120417',
			nombdist: 'MASMA CHICCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.40289848499998, -11.81411997999993],
						[-75.40289848499998, -11.734876978999978],
						[-75.32845698499995, -11.734876978999978],
						[-75.32845698499995, -11.81411997999993],
						[-75.40289848499998, -11.81411997999993],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120412',
			nombdist: 'JULCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45959473499994, -11.775845729999958],
						[-75.45959473499994, -11.732076228999972],
						[-75.40218548399997, -11.732076228999972],
						[-75.40218548399997, -11.775845729999958],
						[-75.45959473499994, -11.775845729999958],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150724',
			nombdist: 'SAN PEDRO DE CASTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.62732986099996, -11.816677854999966],
						[-76.62732986099996, -11.73156460399997],
						[-76.47287910999995, -11.73156460399997],
						[-76.47287910999995, -11.816677854999966],
						[-76.62732986099996, -11.816677854999966],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150708',
			nombdist: 'HUANZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51521998599998, -11.66380997899995],
						[-76.51521998599998, -11.460650353999938],
						[-76.34857410999996, -11.460650353999938],
						[-76.34857410999996, -11.66380997899995],
						[-76.51521998599998, -11.66380997899995],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120801',
			nombdist: 'LA OROYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.98641998599999, -11.746779979999928],
						[-75.98641998599999, -11.457562104999965],
						[-75.70027798499996, -11.457562104999965],
						[-75.70027798499996, -11.746779979999928],
						[-75.98641998599999, -11.746779979999928],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150712',
			nombdist: 'SAN PEDRO DE LARAOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.58838998599998, -11.702369978999968],
						[-76.58838998599998, -11.457506103999947],
						[-76.46608811099998, -11.457506103999947],
						[-76.46608811099998, -11.702369978999968],
						[-76.58838998599998, -11.702369978999968],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120427',
			nombdist: 'RICRAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.57300998499994, -11.658666603999961],
						[-75.57300998499994, -11.456968729999971],
						[-75.36521098399999, -11.456968729999971],
						[-75.36521098399999, -11.658666603999961],
						[-75.57300998499994, -11.658666603999961],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120415',
			nombdist: 'MARCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.60634998499995, -11.791219853999962],
						[-75.60634998499995, -11.730852854999966],
						[-75.53695698499996, -11.730852854999966],
						[-75.53695698499996, -11.791219853999962],
						[-75.60634998499995, -11.791219853999962],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120424',
			nombdist: 'PANCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.52260798499998, -11.76737997899994],
						[-75.52260798499998, -11.728755479999961],
						[-75.47988998499994, -11.728755479999961],
						[-75.47988998499994, -11.76737997899994],
						[-75.52260798499998, -11.76737997899994],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120703',
			nombdist: 'HUARICOLCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.69535773499996, -11.601140104999956],
						[-75.69535773499996, -11.442717853999966],
						[-75.54692998499996, -11.442717853999966],
						[-75.54692998499996, -11.601140104999956],
						[-75.69535773499996, -11.601140104999956],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120418',
			nombdist: 'MOLINOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.47036035999997, -11.747819978999928],
						[-75.47036035999997, -11.442009978999977],
						[-75.25067010999999, -11.442009978999977],
						[-75.25067010999999, -11.747819978999928],
						[-75.47036035999997, -11.747819978999928],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120406',
			nombdist: 'CURICACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.73449998499996, -11.818259979999937],
						[-75.73449998499996, -11.713004479999938],
						[-75.58956998499997, -11.713004479999938],
						[-75.58956998499997, -11.818259979999937],
						[-75.73449998499996, -11.818259979999937],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120403',
			nombdist: 'APATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.38637685999998, -11.868777479999949],
						[-75.38637685999998, -11.431959979999931],
						[-75.18692998399996, -11.431959979999931],
						[-75.18692998399996, -11.868777479999949],
						[-75.38637685999998, -11.868777479999949],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			iddist: '120206',
			nombdist: 'COMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.26975598499996, -11.888961103999975],
						[-75.26975598499996, -11.426740603999974],
						[-74.87647260899996, -11.426740603999974],
						[-74.87647260899996, -11.888961103999975],
						[-75.26975598499996, -11.888961103999975],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150701',
			nombdist: 'MATUCANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.44838523499999, -11.921515603999978],
						[-76.44838523499999, -11.698049479999952],
						[-76.30908073499995, -11.698049479999952],
						[-76.30908073499995, -11.921515603999978],
						[-76.44838523499999, -11.921515603999978],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120705',
			nombdist: 'LA UNION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.96018998599999, -11.403179978999958],
						[-75.96018998599999, -11.321485854999935],
						[-75.70734023499995, -11.321485854999935],
						[-75.70734023499995, -11.403179978999958],
						[-75.96018998599999, -11.403179978999958],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			iddist: '120702',
			nombdist: 'ACOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.73754485999996, -11.407136729999934],
						[-75.73754485999996, -11.289899728999956],
						[-75.59517973499999, -11.289899728999956],
						[-75.59517973499999, -11.407136729999934],
						[-75.73754485999996, -11.407136729999934],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220505',
			nombdist: 'CUÑUMBUQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.55846711099997, -6.69461522499995],
						[-76.55846711099997, -6.482347974999925],
						[-76.37372973499998, -6.482347974999925],
						[-76.37372973499998, -6.69461522499995],
						[-76.55846711099997, -6.69461522499995],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140102',
			nombdist: 'CHONGOYAPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.64503648899995, -6.783154099999933],
						[-79.64503648899995, -6.481265849999943],
						[-79.29641586399998, -6.481265849999943],
						[-79.29641586399998, -6.783154099999933],
						[-79.64503648899995, -6.783154099999933],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150603',
			nombdist: 'ATAVILLOS BAJO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.87656998599994, -11.417820229999961],
						[-76.87656998599994, -11.277782853999952],
						[-76.66713323599998, -11.277782853999952],
						[-76.66713323599998, -11.417820229999961],
						[-76.87656998599994, -11.417820229999961],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120602',
			nombdist: 'COVIRIALI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.71594498399998, -11.375247978999937],
						[-74.71594498399998, -11.263419978999934],
						[-74.59412323399994, -11.263419978999934],
						[-74.59412323399994, -11.375247978999937],
						[-74.71594498399998, -11.375247978999937],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120419',
			nombdist: 'MONOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.47717185999994, -11.626815603999944],
						[-75.47717185999994, -11.258207853999977],
						[-74.97283510999995, -11.258207853999977],
						[-74.97283510999995, -11.626815603999944],
						[-75.47717185999994, -11.626815603999944],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			iddist: '150608',
			nombdist: 'PACARAOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.77760348599998, -11.265839978999963],
						[-76.77760348599998, -11.013484478999942],
						[-76.52669723499997, -11.013484478999942],
						[-76.52669723499997, -11.265839978999963],
						[-76.77760348599998, -11.265839978999963],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220906',
			nombdist: 'EL PORVENIR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.97895535999999, -6.416177349999941],
						[-75.97895535999999, -6.098580012999946],
						[-75.72466998499993, -6.098580012999946],
						[-75.72466998499993, -6.416177349999941],
						[-75.97895535999999, -6.416177349999941],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150101',
			nombdist: 'LIMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.08837111099996, -12.079849604999936],
						[-77.08837111099996, -12.030653728999937],
						[-77.00177736199998, -12.030653728999937],
						[-77.00177736199998, -12.079849604999936],
						[-77.08837111099996, -12.079849604999936],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220808',
			nombdist: 'YORONGOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.21919073599997, -6.234117348999973],
						[-77.21919073599997, -6.098169973999973],
						[-77.11982098699997, -6.098169973999973],
						[-77.11982098699997, -6.234117348999973],
						[-77.21919073599997, -6.234117348999973],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150111',
			nombdist: 'EL AGUSTINO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.01226361099998, -12.063081979999936],
						[-77.01226361099998, -12.020485104999977],
						[-76.93673411199995, -12.020485104999977],
						[-76.93673411199995, -12.063081979999936],
						[-77.01226361099998, -12.063081979999936],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220503',
			nombdist: 'BARRANQUITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.19764923499997, -6.506403473999967],
						[-76.19764923499997, -6.08358001299996],
						[-75.89996260999999, -6.08358001299996],
						[-75.89996260999999, -6.506403473999967],
						[-76.19764923499997, -6.506403473999967],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060414',
			nombdist: 'PION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.53407036299996, -6.257131723999976],
						[-78.53407036299996, -6.085308348999945],
						[-78.40281611199998, -6.085308348999945],
						[-78.40281611199998, -6.257131723999976],
						[-78.53407036299996, -6.257131723999976],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150128',
			nombdist: 'RIMAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.05296911099998, -12.044258354999954],
						[-77.05296911099998, -11.996388729999978],
						[-77.01285573599995, -11.996388729999978],
						[-77.01285573599995, -12.044258354999954],
						[-77.05296911099998, -12.044258354999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150103',
			nombdist: 'ATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.99809573599998, -12.084977979999962],
						[-76.99809573599998, -11.992594103999977],
						[-76.78285873599998, -11.992594103999977],
						[-76.78285873599998, -12.084977979999962],
						[-76.99809573599998, -12.084977979999962],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061002',
			nombdist: 'CHANCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.20734236199996, -7.449489850999953],
						[-78.20734236199996, -7.378511350999929],
						[-78.04694786199997, -7.378511350999929],
						[-78.04694786199997, -7.449489850999953],
						[-78.20734236199996, -7.449489850999953],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150107',
			nombdist: 'CHACLACAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.83720748599995, -12.023247104999939],
						[-76.83720748599995, -11.961554103999958],
						[-76.71479298599996, -11.961554103999958],
						[-76.71479298599996, -12.023247104999939],
						[-76.83720748599995, -12.023247104999939],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0602',
			nombprov: 'CAJABAMBA',
			iddist: '060202',
			nombdist: 'CACHACHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.38281923799997, -7.76346097499993],
						[-78.38281923799997, -7.373447350999982],
						[-78.11669236199998, -7.373447350999982],
						[-78.11669236199998, -7.76346097499993],
						[-78.38281923799997, -7.76346097499993],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150112',
			nombdist: 'INDEPENDENCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.06623823699994, -12.017843729999981],
						[-77.06623823699994, -11.96067772999993],
						[-77.02764186099995, -11.96067772999993],
						[-77.02764186099995, -12.017843729999981],
						[-77.06623823699994, -12.017843729999981],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070101',
			nombdist: 'CALLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.15837698699994, -12.070492229999957],
						[-77.15837698699994, -11.936794104999933],
						[-77.07686723599994, -11.936794104999933],
						[-77.07686723599994, -12.070492229999957],
						[-77.15837698699994, -12.070492229999957],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150135',
			nombdist: 'SAN MARTIN DE PORRES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.12866136199995, -12.038879604999977],
						[-77.12866136199995, -11.936722604999943],
						[-77.04347048699998, -11.936722604999943],
						[-77.04347048699998, -12.038879604999977],
						[-77.12866136199995, -12.038879604999977],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150117',
			nombdist: 'LOS OLIVOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.08779686099996, -12.012826229999973],
						[-77.08779686099996, -11.917624229999944],
						[-77.05982036099994, -11.917624229999944],
						[-77.05982036099994, -12.012826229999973],
						[-77.08779686099996, -12.012826229999973],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150110',
			nombdist: 'COMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.07352948599998, -11.977134729999932],
						[-77.07352948599998, -11.88760997999998],
						[-76.98795461099996, -11.88760997999998],
						[-76.98795461099996, -11.977134729999932],
						[-77.07352948599998, -11.977134729999932],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150118',
			nombdist: 'LURIGANCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.96976036099994, -12.022004854999977],
						[-76.96976036099994, -11.874539979999952],
						[-76.64667835999995, -11.874539979999952],
						[-76.64667835999995, -12.022004854999977],
						[-76.96976036099994, -12.022004854999977],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0202',
			nombprov: 'AIJA',
			iddist: '020201',
			nombdist: 'AIJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.69554886199995, -9.874763727999948],
						[-77.69554886199995, -9.717073977999974],
						[-77.47865498599998, -9.717073977999974],
						[-77.47865498599998, -9.874763727999948],
						[-77.69554886199995, -9.874763727999948],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010502',
			nombdist: 'CAMPORREDONDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.41972811299996, -6.277187473999959],
						[-78.41972811299996, -6.079488848999972],
						[-78.26430073799997, -6.079488848999972],
						[-78.26430073799997, -6.277187473999959],
						[-78.41972811299996, -6.277187473999959],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			iddist: '150132',
			nombdist: 'SAN JUAN DE LURIGANCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.03065423599998, -12.03728247999993],
						[-77.03065423599998, -11.86086722899995],
						[-76.89492923599994, -11.86086722899995],
						[-76.89492923599994, -12.03728247999993],
						[-77.03065423599998, -12.03728247999993],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120429',
			nombdist: 'SAN PEDRO DE CHUNAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.50687298499997, -11.738689478999959],
						[-75.50687298499997, -11.695962853999958],
						[-75.47541998499997, -11.695962853999958],
						[-75.47541998499997, -11.738689478999959],
						[-75.50687298499997, -11.738689478999959],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150722',
			nombdist: 'SAN MATEO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.35974998499995, -11.93089660499993],
						[-76.35974998499995, -11.673206979999975],
						[-76.04976835999997, -11.673206979999975],
						[-76.04976835999997, -11.93089660499993],
						[-76.35974998499995, -11.93089660499993],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			iddist: '220406',
			nombdist: 'TINGO DE SAPOSOA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.68991798599995, -7.127247099999977],
						[-76.68991798599995, -7.008971100999929],
						[-76.63002998499996, -7.008971100999929],
						[-76.63002998499996, -7.127247099999977],
						[-76.68991798599995, -7.127247099999977],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150719',
			nombdist: 'SAN JUAN DE IRIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.55636998499995, -11.779090229999952],
						[-76.55636998499995, -11.67104097899994],
						[-76.38270111099996, -11.67104097899994],
						[-76.38270111099996, -11.779090229999952],
						[-76.55636998499995, -11.779090229999952],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150716',
			nombdist: 'SAN ANTONIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.94227536099999, -11.960040979999974],
						[-76.94227536099999, -11.652753729999972],
						[-76.60132998599994, -11.652753729999972],
						[-76.60132998599994, -11.960040979999974],
						[-76.94227536099999, -11.960040979999974],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061110',
			nombdist: 'SAN GREGORIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.30627198799993, -7.198348599999974],
						[-79.30627198799993, -7.005238224999971],
						[-79.05989111299994, -7.005238224999971],
						[-79.05989111299994, -7.198348599999974],
						[-79.30627198799993, -7.198348599999974],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120432',
			nombdist: 'TUNAN MARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.62219998499995, -11.745439978999968],
						[-75.62219998499995, -11.64785547899993],
						[-75.55579998499996, -11.64785547899993],
						[-75.55579998499996, -11.745439978999968],
						[-75.62219998499995, -11.745439978999968],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			iddist: '220203',
			nombdist: 'BAJO BIAVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.59792261099994, -7.433285349999949],
						[-76.59792261099994, -7.00141922499995],
						[-76.14326410999996, -7.00141922499995],
						[-76.14326410999996, -7.433285349999949],
						[-76.59792261099994, -7.433285349999949],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060108',
			nombdist: 'LOS BAÑOS DEL INCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.54776748799998, -7.18593547599994],
						[-78.54776748799998, -6.978818349999926],
						[-78.32150973699999, -6.978818349999926],
						[-78.32150973699999, -7.18593547599994],
						[-78.54776748799998, -7.18593547599994],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061113',
			nombdist: 'UNION AGUA BLANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.10521523799997, -7.252757849999966],
						[-79.10521523799997, -6.97559122499996],
						[-79.01135336299996, -6.97559122499996],
						[-79.01135336299996, -7.252757849999966],
						[-79.10521523799997, -7.252757849999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0211',
			nombprov: 'HUARMEY',
			iddist: '021103',
			nombdist: 'CULEBRAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.24378511199996, -9.994880852999927],
						[-78.24378511199996, -9.689109351999946],
						[-77.91549611199997, -9.689109351999946],
						[-77.91549611199997, -9.994880852999927],
						[-78.24378511199996, -9.994880852999927],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			iddist: '120802',
			nombdist: 'CHACAPALPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.90837998499995, -11.790244104999942],
						[-75.90837998499995, -11.643389978999949],
						[-75.73449998499996, -11.643389978999949],
						[-75.73449998499996, -11.790244104999942],
						[-75.90837998499995, -11.790244104999942],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120422',
			nombdist: 'PACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.56816998499994, -11.743509729999971],
						[-75.56816998499994, -11.634619978999979],
						[-75.49710173499994, -11.634619978999979],
						[-75.49710173499994, -11.743509729999971],
						[-75.56816998499994, -11.743509729999971],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1304',
			nombprov: 'CHEPEN',
			iddist: '130402',
			nombdist: 'PACANGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.59323048799996, -7.215996099999927],
						[-79.59323048799996, -6.946238224999945],
						[-79.29619136399998, -6.946238224999945],
						[-79.29619136399998, -7.215996099999927],
						[-79.59323048799996, -7.215996099999927],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			iddist: '150707',
			nombdist: 'HUACHUPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.64674386099995, -11.744470728999943],
						[-76.64674386099995, -11.632384728999966],
						[-76.54295298499994, -11.632384728999966],
						[-76.54295298499994, -11.744470728999943],
						[-76.64674386099995, -11.744470728999943],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			iddist: '120433',
			nombdist: 'YAULI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.52766410999999, -11.752249978999942],
						[-75.52766410999999, -11.618658229999937],
						[-75.41455723499996, -11.618658229999937],
						[-75.41455723499996, -11.752249978999942],
						[-75.52766410999999, -11.752249978999942],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			iddist: '220206',
			nombdist: 'SAN RAFAEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.54661511099994, -7.095790974999943],
						[-76.54661511099994, -6.944489974999954],
						[-76.42433511099995, -6.944489974999954],
						[-76.42433511099995, -7.095790974999943],
						[-76.54661511099994, -7.095790974999943],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060308',
			nombdist: 'OXAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.19795311199994, -7.152848849999941],
						[-78.19795311199994, -6.942099599999949],
						[-77.95114973699998, -6.942099599999949],
						[-77.95114973699998, -7.152848849999941],
						[-78.19795311199994, -7.152848849999941],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130905',
			nombdist: 'MARCABAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.08122111199998, -7.759395099999949],
						[-78.08122111199998, -7.584853475999978],
						[-77.83974411199995, -7.584853475999978],
						[-77.83974411199995, -7.759395099999949],
						[-78.08122111199998, -7.759395099999949],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			iddist: '150402',
			nombdist: 'ARAHUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.76305911099996, -11.71205447999995],
						[-76.76305911099996, -11.58998097899996],
						[-76.55796061099994, -11.58998097899996],
						[-76.55796061099994, -11.71205447999995],
						[-76.76305911099996, -11.71205447999995],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130107',
			nombdist: 'MOCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.03826173799996, -8.198353476999955],
						[-79.03826173799996, -8.126863225999955],
						[-78.96175348799994, -8.126863225999955],
						[-78.96175348799994, -8.198353476999955],
						[-79.03826173799996, -8.198353476999955],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220708',
			nombdist: 'SHAMBOYACU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.18970198499994, -7.203962474999969],
						[-76.18970198499994, -6.907696099999953],
						[-76.00578123499997, -6.907696099999953],
						[-76.00578123499997, -7.203962474999969],
						[-76.18970198499994, -7.203962474999969],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140107',
			nombdist: 'LAGUNAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.79686523899994, -7.177126974999965],
						[-79.79686523899994, -6.899945349999939],
						[-79.52090036399994, -6.899945349999939],
						[-79.52090036399994, -7.177126974999965],
						[-79.79686523899994, -7.177126974999965],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022005',
			nombdist: 'QUILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.06228898799998, -9.446605602999966],
						[-78.06228898799998, -9.21679372799997],
						[-77.80474023699998, -9.21679372799997],
						[-77.80474023699998, -9.446605602999966],
						[-78.06228898799998, -9.446605602999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021702',
			nombdist: 'CATAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.49428136199998, -10.160314477999975],
						[-77.49428136199998, -9.688626727999974],
						[-77.17327723599999, -9.688626727999974],
						[-77.17327723599999, -10.160314477999975],
						[-77.49428136199998, -10.160314477999975],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021002',
			nombdist: 'ANRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.98376748599998, -9.302435601999946],
						[-76.98376748599998, -9.212078101999964],
						[-76.84283986199995, -9.212078101999964],
						[-76.84283986199995, -9.302435601999946],
						[-76.98376748599998, -9.302435601999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022002',
			nombdist: 'CASCAPARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.93269336199995, -9.442234352999947],
						[-77.93269336199995, -9.206397101999926],
						[-77.71252461199998, -9.206397101999926],
						[-77.71252461199998, -9.442234352999947],
						[-77.93269336199995, -9.442234352999947],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0208',
			nombprov: 'CASMA',
			iddist: '020801',
			nombdist: 'CASMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.39836136299994, -9.795281227999965],
						[-78.39836136299994, -9.200922726999977],
						[-77.96481536199997, -9.200922726999977],
						[-77.96481536199997, -9.795281227999965],
						[-78.39836136299994, -9.795281227999965],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010106',
			nombdist: 'CHUQUIBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.01414336199997, -6.986759349999943],
						[-78.01414336199997, -6.868374849999952],
						[-77.77929986199996, -6.868374849999952],
						[-77.77929986199996, -6.986759349999943],
						[-78.01414336199997, -6.986759349999943],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022004',
			nombdist: 'MATACOTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.78411136199998, -9.220780477999938],
						[-77.78411136199998, -9.10171272699995],
						[-77.71823823699998, -9.10171272699995],
						[-77.71823823699998, -9.220780477999938],
						[-77.78411136199998, -9.220780477999938],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130105',
			nombdist: 'LA ESPERANZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.08614448799995, -8.087605476999954],
						[-79.08614448799995, -8.039562475999958],
						[-79.03007223799995, -8.039562475999958],
						[-79.03007223799995, -8.087605476999954],
						[-79.08614448799995, -8.087605476999954],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020609',
			nombdist: 'SHILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.65240623599993, -9.252260476999936],
						[-77.65240623599993, -9.08191235199996],
						[-77.49046036199996, -9.08191235199996],
						[-77.49046036199996, -9.252260476999936],
						[-77.65240623599993, -9.252260476999936],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021207',
			nombdist: 'PUEBLO LIBRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88303336199994, -9.229190726999946],
						[-77.88303336199994, -9.074128851999944],
						[-77.77304061199999, -9.074128851999944],
						[-77.77304061199999, -9.229190726999946],
						[-77.88303336199994, -9.229190726999946],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2210',
			nombprov: 'TOCACHE',
			iddist: '221001',
			nombdist: 'TOCACHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.75245698599997, -8.495142600999941],
						[-76.75245698599997, -8.03136322599994],
						[-76.34438161099996, -8.03136322599994],
						[-76.34438161099996, -8.495142600999941],
						[-76.75245698599997, -8.495142600999941],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1305',
			nombprov: 'JULCAN',
			iddist: '130502',
			nombdist: 'CALAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.49005473799997, -8.203521475999935],
						[-78.49005473799997, -8.029960975999927],
						[-78.28828336199996, -8.029960975999927],
						[-78.28828336199996, -8.203521475999935],
						[-78.49005473799997, -8.203521475999935],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0207',
			nombprov: 'CARLOS FERMIN FITZCARRALD',
			iddist: '020703',
			nombdist: 'YAUYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.35949611199999, -9.114835977999974],
						[-77.35949611199999, -8.94024997699995],
						[-77.19359773699995, -8.94024997699995],
						[-77.19359773699995, -9.114835977999974],
						[-77.35949611199999, -9.114835977999974],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021306',
			nombdist: 'LLUMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56191598699996, -9.008224601999927],
						[-77.56191598699996, -8.932898851999937],
						[-77.32351361099995, -8.932898851999937],
						[-77.32351361099995, -9.008224601999927],
						[-77.56191598699996, -9.008224601999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021205',
			nombdist: 'MATO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.95571586199998, -9.010906226999964],
						[-77.95571586199998, -8.906259726999963],
						[-77.82942186199995, -8.906259726999963],
						[-77.82942186199995, -9.010906226999964],
						[-77.95571586199998, -9.010906226999964],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021307',
			nombdist: 'LUCMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56345311199993, -8.948243601999934],
						[-77.56345311199993, -8.90078785199995],
						[-77.32351361099995, -8.90078785199995],
						[-77.32351361099995, -8.948243601999934],
						[-77.56345311199993, -8.948243601999934],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0612',
			nombprov: 'SAN PABLO',
			iddist: '061201',
			nombdist: 'SAN PABLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.88318748799998, -7.144157849999942],
						[-78.88318748799998, -7.018646474999969],
						[-78.64820111299997, -7.018646474999969],
						[-78.64820111299997, -7.144157849999942],
						[-78.88318748799998, -7.144157849999942],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020601',
			nombdist: 'CARHUAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.75741023699999, -9.383638726999948],
						[-77.75741023699999, -9.19894560299997],
						[-77.51570111199999, -9.19894560299997],
						[-77.51570111199999, -9.383638726999948],
						[-77.75741023699999, -9.383638726999948],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061105',
			nombdist: 'EL PRADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.05433173799997, -7.120546849999926],
						[-79.05433173799997, -6.969398474999934],
						[-78.96026561299999, -6.969398474999934],
						[-78.96026561299999, -7.120546849999926],
						[-79.05433173799997, -7.120546849999926],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			iddist: '130304',
			nombdist: 'LONGOTEA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.00120011299998, -7.162065849999976],
						[-78.00120011299998, -6.962969974999964],
						[-77.81270761199994, -6.962969974999964],
						[-77.81270761199994, -7.162065849999976],
						[-78.00120011299998, -7.162065849999976],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060502',
			nombdist: 'CHILETE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.90647848799995, -7.299740475999954],
						[-78.90647848799995, -7.214173850999941],
						[-78.74211136299994, -7.214173850999941],
						[-78.74211136299994, -7.299740475999954],
						[-78.90647848799995, -7.299740475999954],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			iddist: '220202',
			nombdist: 'ALTO BIAVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.63675536099998, -8.37726885099994],
						[-76.63675536099998, -7.197699224999951],
						[-75.82949285999996, -7.197699224999951],
						[-75.82949285999996, -8.37726885099994],
						[-76.63675536099998, -8.37726885099994],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060106',
			nombdist: 'JESUS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.46549023799997, -7.40271897599996],
						[-78.46549023799997, -7.19604709999993],
						[-78.27175198699996, -7.19604709999993],
						[-78.27175198699996, -7.40271897599996],
						[-78.46549023799997, -7.40271897599996],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060507',
			nombdist: 'TANTARICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.03012373799999, -7.349779974999933],
						[-79.03012373799999, -7.189580100999933],
						[-78.88448636299995, -7.189580100999933],
						[-78.88448636299995, -7.349779974999933],
						[-79.03012373799999, -7.349779974999933],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060508',
			nombdist: 'YONAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.36927536299999, -7.39095310099998],
						[-79.36927536299999, -7.178701224999941],
						[-78.95483398799996, -7.178701224999941],
						[-78.95483398799996, -7.39095310099998],
						[-79.36927536299999, -7.39095310099998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060109',
			nombdist: 'MAGDALENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.74599411299994, -7.292206849999957],
						[-78.74599411299994, -7.156533224999976],
						[-78.52336623799994, -7.156533224999976],
						[-78.52336623799994, -7.292206849999957],
						[-78.74599411299994, -7.292206849999957],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060107',
			nombdist: 'LLACANORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.47235911299998, -7.226056349999965],
						[-78.47235911299998, -7.152308599999969],
						[-78.36203911199993, -7.152308599999969],
						[-78.36203911199993, -7.226056349999965],
						[-78.47235911299998, -7.226056349999965],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0612',
			nombprov: 'SAN PABLO',
			iddist: '061203',
			nombdist: 'SAN LUIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.91639848799997, -7.213547224999957],
						[-78.91639848799997, -7.095646474999967],
						[-78.84209673799995, -7.095646474999967],
						[-78.84209673799995, -7.213547224999957],
						[-78.91639848799997, -7.213547224999957],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061004',
			nombdist: 'GREGORIO PITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.25146873799997, -7.298320349999926],
						[-78.25146873799997, -7.144268474999933],
						[-78.06948111299994, -7.144268474999933],
						[-78.06948111299994, -7.298320349999926],
						[-78.25146873799997, -7.298320349999926],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1304',
			nombprov: 'CHEPEN',
			iddist: '130401',
			nombdist: 'CHEPEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.46850198899995, -7.325240225999948],
						[-79.46850198899995, -7.139007849999928],
						[-79.25180373799998, -7.139007849999928],
						[-79.25180373799998, -7.325240225999948],
						[-79.46850198899995, -7.325240225999948],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2206',
			nombprov: 'MARISCAL CACERES',
			iddist: '220605',
			nombdist: 'PAJARILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.74394011099997, -7.557710725999925],
						[-76.74394011099997, -7.127247099999977],
						[-76.55134998599993, -7.127247099999977],
						[-76.55134998599993, -7.557710725999925],
						[-76.74394011099997, -7.557710725999925],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			iddist: '220204',
			nombdist: 'HUALLAGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.67040373599997, -7.548824475999936],
						[-76.67040373599997, -7.089857099999961],
						[-76.49987086099998, -7.089857099999961],
						[-76.49987086099998, -7.548824475999936],
						[-76.67040373599997, -7.548824475999936],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060111',
			nombdist: 'NAMORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.37605173799994, -7.239447225999982],
						[-78.37605173799994, -7.124519974999942],
						[-78.18925298799996, -7.124519974999942],
						[-78.18925298799996, -7.239447225999982],
						[-78.37605173799994, -7.239447225999982],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021014',
			nombdist: 'SAN MARCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.20230748599994, -9.841380852999976],
						[-77.20230748599994, -9.428509726999948],
						[-76.97497661099999, -9.428509726999948],
						[-76.97497661099999, -9.841380852999976],
						[-77.20230748599994, -9.841380852999976],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			iddist: '020101',
			nombdist: 'HUARAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.64720111199995, -9.737866351999969],
						[-77.64720111199995, -9.42711135199994],
						[-77.30057461199993, -9.42711135199994],
						[-77.30057461199993, -9.737866351999969],
						[-77.64720111199995, -9.737866351999969],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0612',
			nombprov: 'SAN PABLO',
			iddist: '061202',
			nombdist: 'SAN BERNARDINO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.91954298799999, -7.22878897499993],
						[-78.91954298799999, -7.101422974999934],
						[-78.68399823699997, -7.101422974999934],
						[-78.68399823699997, -7.22878897499993],
						[-78.91954298799999, -7.22878897499993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			iddist: '130306',
			nombdist: 'UCUNCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.91048536199997, -7.208988099999942],
						[-77.91048536199997, -7.097002349999968],
						[-77.78737298699997, -7.097002349999968],
						[-77.78737298699997, -7.208988099999942],
						[-77.91048536199997, -7.208988099999942],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1307',
			nombprov: 'PACASMAYO',
			iddist: '130704',
			nombdist: 'PACASMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.58871286399994, -7.442330100999925],
						[-79.58871286399994, -7.35264884999998],
						[-79.49622923899994, -7.35264884999998],
						[-79.49622923899994, -7.442330100999925],
						[-79.58871286399994, -7.442330100999925],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060104',
			nombdist: 'COSPAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.69622661299996, -7.556683599999928],
						[-78.69622661299996, -7.350033349999933],
						[-78.33583098799994, -7.350033349999933],
						[-78.33583098799994, -7.556683599999928],
						[-78.69622661299996, -7.556683599999928],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100509',
			nombdist: 'PUÑOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.95511723599998, -9.557343726999932],
						[-76.95511723599998, -9.426134726999976],
						[-76.78273236099994, -9.426134726999976],
						[-76.78273236099994, -9.557343726999932],
						[-76.95511723599998, -9.557343726999932],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2504',
			nombprov: 'PURUS',
			iddist: '250401',
			nombdist: 'PURUS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.48438935699994, -11.01366947899993],
						[-72.48438935699994, -9.423690601999965],
						[-70.49441697999998, -9.423690601999965],
						[-70.49441697999998, -11.01366947899993],
						[-72.48438935699994, -11.01366947899993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061005',
			nombdist: 'ICHOCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.14738086299997, -7.463845725999931],
						[-78.14738086299997, -7.343894474999956],
						[-77.99544136199995, -7.343894474999956],
						[-77.99544136199995, -7.463845725999931],
						[-78.14738086299997, -7.463845725999931],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0602',
			nombprov: 'CAJABAMBA',
			iddist: '060204',
			nombdist: 'SITACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.05133986199996, -7.640627349999932],
						[-78.05133986199996, -7.343551724999941],
						[-77.74130161199997, -7.343551724999941],
						[-77.74130161199997, -7.640627349999932],
						[-78.05133986199996, -7.640627349999932],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1307',
			nombprov: 'PACASMAYO',
			iddist: '130703',
			nombdist: 'JEQUETEPEQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.58959173899996, -7.394863225999927],
						[-79.58959173899996, -7.322934474999954],
						[-79.48078998799997, -7.322934474999954],
						[-79.48078998799997, -7.394863225999927],
						[-79.58959173899996, -7.394863225999927],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1307',
			nombprov: 'PACASMAYO',
			iddist: '130705',
			nombdist: 'SAN JOSE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.51439086399995, -7.442774474999965],
						[-79.51439086399995, -7.321169349999934],
						[-79.26087461399999, -7.321169349999934],
						[-79.26087461399999, -7.442774474999965],
						[-79.51439086399995, -7.442774474999965],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			iddist: '130302',
			nombdist: 'BAMBAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.76820648699999, -7.556612599999937],
						[-77.76820648699999, -7.399308599999927],
						[-77.59839286199997, -7.399308599999927],
						[-77.59839286199997, -7.556612599999937],
						[-77.76820648699999, -7.556612599999937],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			iddist: '140203',
			nombdist: 'INCAHUASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.54336423799998, -6.401978723999946],
						[-79.54336423799998, -6.07403147399998],
						[-79.24908586299995, -6.07403147399998],
						[-79.24908586299995, -6.401978723999946],
						[-79.54336423799998, -6.401978723999946],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200404',
			nombdist: 'LA MATANZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.25967620799997, -5.58535934899993],
						[-80.25967620799997, -5.159171847999971],
						[-79.93715823899998, -5.159171847999971],
						[-79.93715823899998, -5.58535934899993],
						[-80.25967620799997, -5.58535934899993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060504',
			nombdist: 'GUZMANGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.96432948799998, -7.398162099999979],
						[-78.96432948799998, -7.320716850999929],
						[-78.86405648799996, -7.320716850999929],
						[-78.86405648799996, -7.398162099999979],
						[-78.96432948799998, -7.398162099999979],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060506',
			nombdist: 'SANTA CRUZ DE TOLED',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.91719136299997, -7.374711599999955],
						[-78.91719136299997, -7.281542849999937],
						[-78.81598836299997, -7.281542849999937],
						[-78.81598836299997, -7.374711599999955],
						[-78.91719136299997, -7.374711599999955],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060102',
			nombdist: 'ASUNCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.64221736299999, -7.391547225999943],
						[-78.64221736299999, -7.279398475999926],
						[-78.38186398699997, -7.279398475999926],
						[-78.38186398699997, -7.391547225999943],
						[-78.64221736299999, -7.391547225999943],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061006',
			nombdist: 'JOSE MANUEL QUIROZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.08320986199999, -7.418380850999938],
						[-78.08320986199999, -7.288675349999949],
						[-77.94868536199994, -7.288675349999949],
						[-77.94868536199994, -7.418380850999938],
						[-78.08320986199999, -7.418380850999938],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060110',
			nombdist: 'MATARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.30294136199996, -7.318268100999944],
						[-78.30294136199996, -7.232355474999963],
						[-78.21620898699996, -7.232355474999963],
						[-78.21620898699996, -7.318268100999944],
						[-78.30294136199996, -7.318268100999944],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130111',
			nombdist: 'VICTOR LARCO HERRERA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.07028911299994, -8.160990225999967],
						[-79.07028911299994, -8.118654351999965],
						[-79.02672836299996, -8.118654351999965],
						[-79.02672836299996, -8.160990225999967],
						[-79.07028911299994, -8.160990225999967],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021503',
			nombdist: 'CONCHUCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.89796636199998, -8.403314100999978],
						[-77.89796636199998, -8.117496100999972],
						[-77.55684173699996, -8.117496100999972],
						[-77.55684173699996, -8.403314100999978],
						[-77.89796636199998, -8.403314100999978],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060112',
			nombdist: 'SAN JUAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.53666861199997, -7.314753850999978],
						[-78.53666861199997, -7.22294947599994],
						[-78.41837273799996, -7.22294947599994],
						[-78.41837273799996, -7.314753850999978],
						[-78.53666861199997, -7.314753850999978],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1307',
			nombprov: 'PACASMAYO',
			iddist: '130702',
			nombdist: 'GUADALUPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.59972261299998, -7.338300724999954],
						[-79.59972261299998, -7.221285224999974],
						[-79.36927536299999, -7.221285224999974],
						[-79.36927536299999, -7.338300724999954],
						[-79.59972261299998, -7.338300724999954],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			iddist: '060501',
			nombdist: 'CONTUMAZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.86847961299998, -7.427958975999957],
						[-78.86847961299998, -7.220947225999964],
						[-78.60868548699995, -7.220947225999964],
						[-78.60868548699995, -7.427958975999957],
						[-78.86847961299998, -7.427958975999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0204',
			nombprov: 'ASUNCION',
			iddist: '020401',
			nombdist: 'CHACAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.53354723599995, -9.324105601999975],
						[-77.53354723599995, -9.10602935199995],
						[-77.26205161199994, -9.10602935199995],
						[-77.26205161199994, -9.324105601999975],
						[-77.53354723599995, -9.324105601999975],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130802',
			nombdist: 'BULDIBUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.47688411199994, -8.227580100999944],
						[-77.47688411199994, -8.054091975999938],
						[-77.28653723599996, -8.054091975999938],
						[-77.28653723599996, -8.227580100999944],
						[-77.47688411199994, -8.227580100999944],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131004',
			nombdist: 'MOLLEBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.03448236199995, -8.18768022599994],
						[-78.03448236199995, -8.048202851999974],
						[-77.93041211199994, -8.048202851999974],
						[-77.93041211199994, -8.18768022599994],
						[-78.03448236199995, -8.18768022599994],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130102',
			nombdist: 'EL PORVENIR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.03624023799995, -8.089783225999952],
						[-79.03624023799995, -8.014183725999942],
						[-78.95323048799997, -8.014183725999942],
						[-78.95323048799997, -8.089783225999952],
						[-79.03624023799995, -8.089783225999952],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130807',
			nombdist: 'ONGON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.30922461199998, -8.438035101999958],
						[-77.30922461199998, -8.011748100999966],
						[-76.90124323599997, -8.011748100999966],
						[-76.90124323599997, -8.438035101999958],
						[-77.30922461199998, -8.438035101999958],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130805',
			nombdist: 'HUAYLILLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.36256998699997, -8.242648351999946],
						[-77.36256998699997, -8.126684975999979],
						[-77.23137698599999, -8.126684975999979],
						[-77.23137698599999, -8.242648351999946],
						[-77.36256998699997, -8.242648351999946],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131001',
			nombdist: 'SANTIAGO DE CHUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.42992386299994, -8.652919976999954],
						[-78.42992386299994, -8.107107476999943],
						[-78.10824798699997, -8.107107476999943],
						[-78.10824798699997, -8.652919976999954],
						[-78.42992386299994, -8.652919976999954],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130101',
			nombdist: 'TRUJILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.06499411299995, -8.15125622599993],
						[-79.06499411299995, -8.083160225999961],
						[-78.98277411299995, -8.083160225999961],
						[-78.98277411299995, -8.15125622599993],
						[-79.06499411299995, -8.15125622599993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130103',
			nombdist: 'FLORENCIA DE MORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.03300511299994, -8.089189475999945],
						[-79.03300511299994, -8.072341850999976],
						[-79.00915036299995, -8.072341850999976],
						[-79.00915036299995, -8.089189475999945],
						[-79.03300511299994, -8.089189475999945],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101002',
			nombdist: 'BAÑOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.90392573599996, -10.196994102999952],
						[-76.90392573599996, -10.023433602999944],
						[-76.71230661099997, -10.023433602999944],
						[-76.71230661099997, -10.196994102999952],
						[-76.90392573599996, -10.196994102999952],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			iddist: '130305',
			nombdist: 'UCHUMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.93123636199994, -7.120121974999961],
						[-77.93123636199994, -6.941452724999976],
						[-77.70674273699996, -6.941452724999976],
						[-77.70674273699996, -7.120121974999961],
						[-77.93123636199994, -7.120121974999961],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131005',
			nombdist: 'MOLLEPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.99017773699995, -8.211195350999958],
						[-77.99017773699995, -8.072685600999932],
						[-77.89784573699995, -8.072685600999932],
						[-77.89784573699995, -8.211195350999958],
						[-77.99017773699995, -8.211195350999958],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100317',
			nombdist: 'RIPAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.88914448599996, -9.860394352999947],
						[-76.88914448599996, -9.740527352999948],
						[-76.79815036099995, -9.740527352999948],
						[-76.79815036099995, -9.860394352999947],
						[-76.88914448599996, -9.860394352999947],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100322',
			nombdist: 'SILLAPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.80537698599994, -9.867896477999977],
						[-76.80537698599994, -9.731107476999966],
						[-76.73327536099998, -9.731107476999966],
						[-76.73327536099998, -9.867896477999977],
						[-76.80537698599994, -9.867896477999977],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			iddist: '100321',
			nombdist: 'SHUNQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.84519923599998, -9.787339851999945],
						[-76.84519923599998, -9.713589852999974],
						[-76.77408998599998, -9.713589852999974],
						[-76.77408998599998, -9.787339851999945],
						[-76.84519923599998, -9.787339851999945],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020508',
			nombdist: 'HUALLANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.10108998699997, -10.119914102999928],
						[-77.10108998699997, -9.702568352999947],
						[-76.80717186099997, -9.702568352999947],
						[-76.80717186099997, -10.119914102999928],
						[-77.10108998699997, -10.119914102999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0202',
			nombprov: 'AIJA',
			iddist: '020202',
			nombdist: 'CORIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.96140236199994, -9.914283227999931],
						[-77.96140236199994, -9.690016851999928],
						[-77.68825586199995, -9.690016851999928],
						[-77.68825586199995, -9.914283227999931],
						[-77.96140236199994, -9.914283227999931],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101107',
			nombdist: 'PAMPAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.75801948599997, -9.847261727999978],
						[-76.75801948599997, -9.689806602999965],
						[-76.65552348599994, -9.689806602999965],
						[-76.65552348599994, -9.847261727999978],
						[-76.75801948599997, -9.847261727999978],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060306',
			nombdist: 'JOSE GALVEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.20263636199996, -6.966364974999976],
						[-78.20263636199996, -6.886732599999959],
						[-78.10464923699999, -6.886732599999959],
						[-78.10464923699999, -6.966364974999976],
						[-78.20263636199996, -6.966364974999976],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060101',
			nombdist: 'CAJAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.66275786299997, -7.246286849999933],
						[-78.66275786299997, -6.886509724999939],
						[-78.45732348799999, -6.886509724999939],
						[-78.45732348799999, -7.246286849999933],
						[-78.66275786299997, -7.246286849999933],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			iddist: '220404',
			nombdist: 'PISCOYACU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.90768086199995, -7.094753599999933],
						[-76.90768086199995, -6.938593349999962],
						[-76.74779948599996, -6.938593349999962],
						[-76.74779948599996, -7.094753599999933],
						[-76.90768086199995, -7.094753599999933],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010306',
			nombdist: 'FLORIDA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.10229486199995, -5.890394474999937],
						[-78.10229486199995, -5.740255973999979],
						[-77.84234373699996, -5.740255973999979],
						[-77.84234373699996, -5.890394474999937],
						[-78.10229486199995, -5.890394474999937],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			iddist: '160211',
			nombdist: 'TENIENTE CESAR LOPEZ ROJAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.06278748499994, -6.147729973999958],
						[-76.06278748499994, -5.791041809999967],
						[-75.53414648499995, -5.791041809999967],
						[-75.53414648499995, -6.147729973999958],
						[-76.06278748499994, -6.147729973999958],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140103',
			nombdist: 'ETEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.88086136399994, -7.003835974999959],
						[-79.88086136399994, -6.879195349999975],
						[-79.76960348899996, -6.879195349999975],
						[-79.76960348899996, -7.003835974999959],
						[-79.88086136399994, -7.003835974999959],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020513',
			nombdist: 'PACLLON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.13869536099998, -10.305378602999951],
						[-77.13869536099998, -10.177086602999964],
						[-76.90280073599996, -10.177086602999964],
						[-76.90280073599996, -10.305378602999951],
						[-77.13869536099998, -10.305378602999951],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060807',
			nombdist: 'POMAHUACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.42050998799994, -6.05500697399998],
						[-79.42050998799994, -5.719158223999955],
						[-79.01363636299999, -5.719158223999955],
						[-79.01363636299999, -6.05500697399998],
						[-79.42050998799994, -6.05500697399998],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220701',
			nombdist: 'PICOTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.41006061099995, -7.066204349999964],
						[-76.41006061099995, -6.874855974999946],
						[-76.25628773499994, -6.874855974999946],
						[-76.25628773499994, -7.066204349999964],
						[-76.41006061099995, -7.066204349999964],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061108',
			nombdist: 'NANCHOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.33161861299999, -7.129617225999937],
						[-79.33161861299999, -6.87362109999998],
						[-79.12239423799997, -6.87362109999998],
						[-79.12239423799997, -7.129617225999937],
						[-79.33161861299999, -7.129617225999937],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			iddist: '220201',
			nombdist: 'BELLAVISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.70916986099996, -7.095790974999943],
						[-76.70916986099996, -6.869440099999963],
						[-76.52255473599996, -6.869440099999963],
						[-76.52255473599996, -7.095790974999943],
						[-76.70916986099996, -7.095790974999943],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1007',
			nombprov: 'MARAÑON',
			iddist: '100702',
			nombdist: 'CHOLON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.08225198599996, -8.882753850999961],
						[-77.08225198599996, -8.410923975999935],
						[-76.31143685999996, -8.410923975999935],
						[-76.31143685999996, -8.882753850999961],
						[-77.08225198599996, -8.882753850999961],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060309',
			nombdist: 'SOROCHUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.38333036199998, -7.020923849999974],
						[-78.38333036199998, -6.86914647499998],
						[-78.22647848699995, -6.86914647499998],
						[-78.22647848699995, -7.020923849999974],
						[-78.38333036199998, -7.020923849999974],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			iddist: '020603',
			nombdist: 'AMASHCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.66489448699997, -9.249958976999949],
						[-77.66489448699997, -9.197216727999944],
						[-77.62559011199994, -9.197216727999944],
						[-77.62559011199994, -9.249958976999949],
						[-77.66489448699997, -9.249958976999949],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			iddist: '022007',
			nombdist: 'SHUPLUY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.89236323699998, -9.429423851999957],
						[-77.89236323699998, -9.19050785199994],
						[-77.68900286199994, -9.19050785199994],
						[-77.68900286199994, -9.429423851999957],
						[-77.89236323699998, -9.429423851999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021807',
			nombdist: 'SAMANCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.52557611299994, -9.355240726999966],
						[-78.52557611299994, -9.19000297699995],
						[-78.36383186199998, -9.19000297699995],
						[-78.36383186199998, -9.355240726999966],
						[-78.52557611299994, -9.355240726999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021013',
			nombdist: 'RAPAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.83680973599996, -9.367195351999953],
						[-76.83680973599996, -9.181531226999937],
						[-76.72574411099998, -9.181531226999937],
						[-76.72574411099998, -9.367195351999953],
						[-76.83680973599996, -9.367195351999953],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021001',
			nombdist: 'HUARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.33455623699996, -9.43305860199996],
						[-77.33455623699996, -9.165212226999927],
						[-77.14080861099995, -9.165212226999927],
						[-77.14080861099995, -9.43305860199996],
						[-77.33455623699996, -9.43305860199996],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			iddist: '021004',
			nombdist: 'CHAVIN DE HUANTAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.31123848699997, -9.83693847799998],
						[-77.31123848699997, -9.493941351999979],
						[-77.13274798599997, -9.493941351999979],
						[-77.13274798599997, -9.83693847799998],
						[-77.31123848699997, -9.83693847799998],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100504',
			nombdist: 'JACAS GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.78659961099999, -9.579099602999975],
						[-76.78659961099999, -9.451630852999926],
						[-76.55053323599998, -9.451630852999926],
						[-76.55053323599998, -9.579099602999975],
						[-76.78659961099999, -9.579099602999975],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			iddist: '061003',
			nombdist: 'EDUARDO VILLANUEVA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.21942873699999, -7.48053110099994],
						[-78.21942873699999, -7.393497975999935],
						[-78.05133986199996, -7.393497975999935],
						[-78.05133986199996, -7.48053110099994],
						[-78.21942873699999, -7.48053110099994],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021705',
			nombdist: 'LLACLLIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.64610523699997, -10.236150352999971],
						[-77.64610523699997, -10.036906102999978],
						[-77.54604573699999, -10.036906102999978],
						[-77.54604573699999, -10.236150352999971],
						[-77.64610523699997, -10.236150352999971],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101001',
			nombdist: 'JESUS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.90624610899994, -10.393123100999958],
						[-76.90624610899994, -10.032820350999941],
						[-76.59645310899998, -10.032820350999941],
						[-76.59645310899998, -10.393123100999958],
						[-76.90624610899994, -10.393123100999958],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021906',
			nombdist: 'HUAYLLABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.65785936199995, -8.59858397599993],
						[-77.65785936199995, -8.404855475999966],
						[-77.41007611099997, -8.404855475999966],
						[-77.41007611099997, -8.59858397599993],
						[-77.65785936199995, -8.59858397599993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060804',
			nombdist: 'COLASAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.10926173799999, -6.046445598999981],
						[-79.10926173799999, -5.689697223999929],
						[-78.84548048799996, -5.689697223999929],
						[-78.84548048799996, -6.046445598999981],
						[-79.10926173799999, -6.046445598999981],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100208',
			nombdist: 'TOMAY KICHWA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.22380660999994, -10.098761727999943],
						[-76.22380660999994, -10.028058602999977],
						[-76.11708786099996, -10.028058602999977],
						[-76.11708786099996, -10.098761727999943],
						[-76.22380660999994, -10.098761727999943],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061102',
			nombdist: 'BOLIVAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.22963286399994, -7.018413599999974],
						[-79.22963286399994, -6.93726372499998],
						[-79.09943823799995, -6.93726372499998],
						[-79.09943823799995, -7.018413599999974],
						[-79.22963286399994, -7.018413599999974],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			iddist: '160602',
			nombdist: 'INAHUAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.48186323499993, -7.166396349999957],
						[-75.48186323499993, -6.935161724999944],
						[-75.10941823499996, -6.935161724999944],
						[-75.10941823499996, -7.166396349999957],
						[-75.48186323499993, -7.166396349999957],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020904',
			nombdist: 'CUSCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88250898699994, -8.673932976999936],
						[-77.88250898699994, -8.379027476999966],
						[-77.68866061199998, -8.379027476999966],
						[-77.68866061199998, -8.673932976999936],
						[-77.88250898699994, -8.673932976999936],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021511',
			nombdist: 'TAUCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.17245361199997, -8.516148851999958],
						[-78.17245361199997, -8.367167976999951],
						[-77.93371673699994, -8.367167976999951],
						[-77.93371673699994, -8.516148851999958],
						[-78.17245361199997, -8.516148851999958],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220706',
			nombdist: 'SAN CRISTOBAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.47593073599995, -7.020949974999951],
						[-76.47593073599995, -6.929293099999938],
						[-76.37539273499993, -6.929293099999938],
						[-76.37539273499993, -7.020949974999951],
						[-76.47593073599995, -7.020949974999951],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061101',
			nombdist: 'SAN MIGUEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.02406636299997, -7.211287100999925],
						[-79.02406636299997, -6.928675724999948],
						[-78.80273236299996, -6.928675724999948],
						[-78.80273236299996, -7.211287100999925],
						[-79.02406636299997, -7.211287100999925],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060310',
			nombdist: 'SUCRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.29459986199998, -7.114852349999978],
						[-78.29459986199998, -6.928154349999943],
						[-78.06698436199997, -6.928154349999943],
						[-78.06698436199997, -7.114852349999978],
						[-78.29459986199998, -7.114852349999978],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1503',
			nombprov: 'CAJATAMBO',
			iddist: '150301',
			nombdist: 'CAJATAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.10286723699994, -10.585015602999931],
						[-77.10286723699994, -10.304328103999978],
						[-76.79989648599997, -10.304328103999978],
						[-76.79989648599997, -10.585015602999931],
						[-77.10286723699994, -10.585015602999931],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			iddist: '130811',
			nombdist: 'SANTIAGO DE CHALLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.45001286199994, -8.499261101999934],
						[-77.45001286199994, -8.366917975999968],
						[-77.29872936099997, -8.366917975999968],
						[-77.29872936099997, -8.499261101999934],
						[-77.45001286199994, -8.499261101999934],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020502',
			nombdist: 'ABELARDO PARDO LEZAMETA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17949536199995, -10.336060602999964],
						[-77.17949536199995, -10.290290977999973],
						[-77.14036911099998, -10.290290977999973],
						[-77.14036911099998, -10.336060602999964],
						[-77.17949536199995, -10.336060602999964],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190204',
			nombdist: 'PAUCAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.49397611099994, -10.417279978999943],
						[-76.49397611099994, -10.285839977999956],
						[-76.32575998499993, -10.285839977999956],
						[-76.32575998499993, -10.417279978999943],
						[-76.49397611099994, -10.417279978999943],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1503',
			nombprov: 'CAJATAMBO',
			iddist: '150302',
			nombdist: 'COPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17683186099998, -10.483099977999927],
						[-77.17683186099998, -10.274185602999978],
						[-76.89102348599994, -10.274185602999978],
						[-76.89102348599994, -10.483099977999927],
						[-77.17683186099998, -10.483099977999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021908',
			nombdist: 'RAGASH',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.79885936199997, -8.569511600999931],
						[-77.79885936199997, -8.359580101999939],
						[-77.60311911199994, -8.359580101999939],
						[-77.60311911199994, -8.569511600999931],
						[-77.79885936199997, -8.569511600999931],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021402',
			nombdist: 'ACAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.42547848599997, -10.613357477999955],
						[-77.42547848599997, -10.390779478999946],
						[-77.25754673699998, -10.390779478999946],
						[-77.25754673699998, -10.613357477999955],
						[-77.42547848599997, -10.613357477999955],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060810',
			nombdist: 'SAN FELIPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.40083986299999, -5.896837848999951],
						[-79.40083986299999, -5.680963098999939],
						[-79.20005423799995, -5.680963098999939],
						[-79.20005423799995, -5.896837848999951],
						[-79.40083986299999, -5.896837848999951],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220802',
			nombdist: 'AWAJUN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56805098699994, -6.063788974999966],
						[-77.56805098699994, -5.67640384799995],
						[-77.27241673699996, -5.67640384799995],
						[-77.27241673699996, -6.063788974999966],
						[-77.56805098699994, -6.063788974999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021406',
			nombdist: 'CONGAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.48167373699994, -10.370242727999937],
						[-77.48167373699994, -10.27163410299994],
						[-77.35903761199995, -10.27163410299994],
						[-77.35903761199995, -10.370242727999937],
						[-77.48167373699994, -10.370242727999937],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020512',
			nombdist: 'MANGAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.18995698699996, -10.483099977999927],
						[-77.18995698699996, -10.26397510299995],
						[-77.00685623599998, -10.26397510299995],
						[-77.00685623599998, -10.483099977999927],
						[-77.18995698699996, -10.483099977999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021401',
			nombdist: 'OCROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.47017311199994, -10.53787497899998],
						[-77.47017311199994, -10.256219352999949],
						[-77.25691211199995, -10.256219352999949],
						[-77.25691211199995, -10.53787497899998],
						[-77.47017311199994, -10.53787497899998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020511',
			nombdist: 'LA PRIMAVERA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.15670698599996, -10.353513852999981],
						[-77.15670698599996, -10.254369103999977],
						[-77.05321286199995, -10.254369103999977],
						[-77.05321286199995, -10.353513852999981],
						[-77.15670698599996, -10.353513852999981],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021410',
			nombdist: 'SANTIAGO DE CHILCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.42811723699998, -10.542894478999926],
						[-77.42811723699998, -10.383359103999965],
						[-77.26998911199996, -10.383359103999965],
						[-77.26998911199996, -10.542894478999926],
						[-77.42811723699998, -10.542894478999926],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010701',
			nombdist: 'BAGUA GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.59714498799997, -6.005386223999949],
						[-78.59714498799997, -5.644046223999965],
						[-78.27783598699995, -5.644046223999965],
						[-78.27783598699995, -6.005386223999949],
						[-78.59714498799997, -6.005386223999949],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021403',
			nombdist: 'CAJAMARQUILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.30862111199997, -10.390951227999949],
						[-77.30862111199997, -10.252638977999936],
						[-77.15820898599998, -10.252638977999936],
						[-77.15820898599998, -10.390951227999949],
						[-77.30862111199997, -10.390951227999949],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020514',
			nombdist: 'SAN MIGUEL DE CORPANQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.25552511099994, -10.333429727999942],
						[-77.25552511099994, -10.252535102999957],
						[-77.16387298699993, -10.252535102999957],
						[-77.16387298699993, -10.333429727999942],
						[-77.25552511099994, -10.333429727999942],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100206',
			nombdist: 'SAN FRANCISCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.33721286099995, -10.416884727999957],
						[-76.33721286099995, -10.252337852999972],
						[-76.22524360999995, -10.252337852999972],
						[-76.22524360999995, -10.416884727999957],
						[-76.33721286099995, -10.416884727999957],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			iddist: '100207',
			nombdist: 'SAN RAFAEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.25453123499994, -10.465640727999926],
						[-76.25453123499994, -10.20954685299995],
						[-76.02577148499995, -10.20954685299995],
						[-76.02577148499995, -10.465640727999926],
						[-76.25453123499994, -10.465640727999926],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1007',
			nombprov: 'MARAÑON',
			iddist: '100703',
			nombdist: 'SAN BUENAVENTURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.22291798699996, -8.833617226999934],
						[-77.22291798699996, -8.71836322699994],
						[-77.06558398599998, -8.71836322699994],
						[-77.06558398599998, -8.833617226999934],
						[-77.22291798699996, -8.833617226999934],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020510',
			nombdist: 'HUAYLLACAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.52828673699997, -10.29203322899997],
						[-77.52828673699997, -10.204405977999954],
						[-77.32712261099994, -10.204405977999954],
						[-77.32712261099994, -10.29203322899997],
						[-77.52828673699997, -10.29203322899997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020515',
			nombdist: 'TICLLOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.27649211199997, -10.297839977999956],
						[-77.27649211199997, -10.172808852999935],
						[-77.14740423699999, -10.172808852999935],
						[-77.14740423699999, -10.297839977999956],
						[-77.27649211199997, -10.297839977999956],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021903',
			nombdist: 'ALFONSO UGARTE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.53241798699997, -8.535404350999954],
						[-77.53241798699997, -8.411361350999925],
						[-77.36592673699994, -8.411361350999925],
						[-77.36592673699994, -8.535404350999954],
						[-77.53241798699997, -8.535404350999954],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			iddist: '250107',
			nombdist: 'MANANTAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.66245185899999, -8.749316225999962],
						[-74.66245185899999, -8.386289100999932],
						[-74.32245698399998, -8.386289100999932],
						[-74.32245698399998, -8.749316225999962],
						[-74.66245185899999, -8.749316225999962],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			iddist: '021501',
			nombdist: 'CABANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.07569336199998, -8.457982476999973],
						[-78.07569336199998, -8.361449350999976],
						[-77.86046573699997, -8.361449350999976],
						[-77.86046573699997, -8.457982476999973],
						[-78.07569336199998, -8.457982476999973],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190103',
			nombdist: 'HUARIACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.22043198599994, -10.523238227999968],
						[-76.22043198599994, -10.388482477999958],
						[-76.07430598599996, -10.388482477999958],
						[-76.07430598599996, -10.523238227999968],
						[-76.22043198599994, -10.523238227999968],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190205',
			nombdist: 'SAN PEDRO DE PILLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.60737273599995, -10.463058602999979],
						[-76.60737273599995, -10.375503852999941],
						[-76.47693023599999, -10.375503852999941],
						[-76.47693023599999, -10.463058602999979],
						[-76.60737273599995, -10.463058602999979],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021304',
			nombdist: 'FIDEL OLIVAS ESCUDERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.39500386199995, -8.861941976999958],
						[-77.39500386199995, -8.702824225999962],
						[-77.17406836099997, -8.702824225999962],
						[-77.17406836099997, -8.861941976999958],
						[-77.39500386199995, -8.861941976999958],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			iddist: '190106',
			nombdist: 'PALLANCHACRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.30587998499993, -10.48097310299994],
						[-76.30587998499993, -10.368736352999974],
						[-76.20231348599998, -10.368736352999974],
						[-76.20231348599998, -10.48097310299994],
						[-76.30587998499993, -10.48097310299994],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021202',
			nombdist: 'HUALLANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.01528986199997, -8.898824226999977],
						[-78.01528986199997, -8.691783476999944],
						[-77.82219536199995, -8.691783476999944],
						[-77.82219536199995, -8.898824226999977],
						[-78.01528986199997, -8.898824226999977],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190207',
			nombdist: 'TAPUC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.50090961099994, -10.471147728999938],
						[-76.50090961099994, -10.366661477999969],
						[-76.43647998599994, -10.366661477999969],
						[-76.43647998599994, -10.471147728999938],
						[-76.50090961099994, -10.471147728999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0216',
			nombprov: 'POMABAMBA',
			iddist: '021601',
			nombdist: 'POMABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.60829161199996, -8.893766851999942],
						[-77.60829161199996, -8.683431600999938],
						[-77.38956023599997, -8.683431600999938],
						[-77.38956023599997, -8.893766851999942],
						[-77.60829161199996, -8.893766851999942],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1312',
			nombprov: 'VIRU',
			iddist: '131203',
			nombdist: 'GUADALUPITO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.76133986299999, -8.97088985199997],
						[-78.76133986299999, -8.670527351999965],
						[-78.54821873699996, -8.670527351999965],
						[-78.54821873699996, -8.97088985199997],
						[-78.76133986299999, -8.97088985199997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021210',
			nombdist: 'YURACMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.91854298699997, -8.87930535199996],
						[-77.91854298699997, -8.65527210199997],
						[-77.58033111199995, -8.65527210199997],
						[-77.58033111199995, -8.87930535199996],
						[-77.91854298699997, -8.87930535199996],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021801',
			nombdist: 'CHIMBOTE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.63774023799994, -9.147033226999952],
						[-78.63774023799994, -8.652919976999954],
						[-78.18215236199995, -8.652919976999954],
						[-78.18215236199995, -9.147033226999952],
						[-78.63774023799994, -9.147033226999952],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021408',
			nombdist: 'SAN CRISTOBAL DE RAJAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28103548599995, -10.46052347799997],
						[-77.28103548599995, -10.357808727999952],
						[-77.17300623599994, -10.357808727999952],
						[-77.17300623599994, -10.46052347799997],
						[-77.28103548599995, -10.46052347799997],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			iddist: '021804',
			nombdist: 'MACATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.25369011199996, -8.939835976999973],
						[-78.25369011199996, -8.652919976999954],
						[-77.97202736199995, -8.652919976999954],
						[-77.97202736199995, -8.939835976999973],
						[-78.25369011199996, -8.939835976999973],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0216',
			nombprov: 'POMABAMBA',
			iddist: '021604',
			nombdist: 'QUINUABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.43891823599995, -8.770097601999964],
						[-77.43891823599995, -8.642687476999981],
						[-77.24618948599993, -8.642687476999981],
						[-77.24618948599993, -8.770097601999964],
						[-77.43891823599995, -8.770097601999964],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020905',
			nombdist: 'LA PAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.97292773699996, -8.74761910199993],
						[-77.97292773699996, -8.626232475999927],
						[-77.77643948699995, -8.626232475999927],
						[-77.77643948699995, -8.74761910199993],
						[-77.97292773699996, -8.74761910199993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060801',
			nombdist: 'JAEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.97269523799997, -5.944476598999927],
						[-78.97269523799997, -5.614142598999933],
						[-78.71980398799997, -5.614142598999933],
						[-78.71980398799997, -5.944476598999927],
						[-78.97269523799997, -5.944476598999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			iddist: '021407',
			nombdist: 'LLIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.27003773699994, -10.445335977999946],
						[-77.27003773699994, -10.324280602999977],
						[-77.16637886199999, -10.324280602999977],
						[-77.16637886199999, -10.445335977999946],
						[-77.27003773699994, -10.445335977999946],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190206',
			nombdist: 'SANTA ANA DE TUSI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.39318948599998, -10.602849978999927],
						[-76.39318948599998, -10.316349977999948],
						[-76.23599010999999, -10.316349977999948],
						[-76.23599010999999, -10.602849978999927],
						[-76.39318948599998, -10.602849978999927],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			iddist: '190202',
			nombdist: 'CHACAYAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.44780998499994, -10.627289978999954],
						[-76.44780998499994, -10.31626997799998],
						[-76.32783135999995, -10.31626997799998],
						[-76.32783135999995, -10.627289978999954],
						[-76.44780998499994, -10.627289978999954],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			iddist: '020506',
			nombdist: 'CANIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.24100586099996, -10.361919977999946],
						[-77.24100586099996, -10.305807852999976],
						[-77.15413086099994, -10.305807852999976],
						[-77.15413086099994, -10.361919977999946],
						[-77.24100586099996, -10.361919977999946],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021709',
			nombdist: 'TAPACOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.62694811199998, -10.048066352999967],
						[-77.62694811199998, -9.939771477999955],
						[-77.44358786199996, -9.939771477999955],
						[-77.44358786199996, -10.048066352999967],
						[-77.62694811199998, -10.048066352999967],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0211',
			nombprov: 'HUARMEY',
			iddist: '021102',
			nombdist: 'COCHAPETI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.78004298699994, -10.023773477999953],
						[-77.78004298699994, -9.93735535299993],
						[-77.59782086199994, -9.93735535299993],
						[-77.59782086199994, -10.023773477999953],
						[-77.78004298699994, -10.023773477999953],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1703',
			nombprov: 'TAHUAMANU',
			iddist: '170301',
			nombdist: 'IÑAPARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.18525403299998, -11.504679729999964],
						[-72.18525403299998, -9.873393332999967],
						[-69.33657622899995, -9.873393332999967],
						[-69.33657622899995, -11.504679729999964],
						[-72.18525403299998, -11.504679729999964],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1008',
			nombprov: 'PACHITEA',
			iddist: '100803',
			nombdist: 'MOLINO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.13620898599999, -10.096382852999966],
						[-76.13620898599999, -9.90200785299993],
						[-75.96899986099999, -9.90200785299993],
						[-75.96899986099999, -10.096382852999966],
						[-76.13620898599999, -10.096382852999966],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			iddist: '131003',
			nombdist: 'CACHICADAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.16422661199994, -8.117125600999941],
						[-78.16422661199994, -7.906919350999942],
						[-77.95530598699997, -7.906919350999942],
						[-77.95530598699997, -8.117125600999941],
						[-78.16422661199994, -8.117125600999941],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			iddist: '101103',
			nombdist: 'CHACABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.65941211099994, -9.920023477999962],
						[-76.65941211099994, -9.881695351999952],
						[-76.60533398599995, -9.881695351999952],
						[-76.60533398599995, -9.920023477999962],
						[-76.65941211099994, -9.920023477999962],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101005',
			nombdist: 'RONDOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.82404686099994, -10.050941352999928],
						[-76.82404686099994, -9.86807622799995],
						[-76.62649798499996, -9.86807622799995],
						[-76.62649798499996, -10.050941352999928],
						[-76.82404686099994, -10.050941352999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			iddist: '021703',
			nombdist: 'COTAPARACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63161723699994, -10.026142602999926],
						[-77.63161723699994, -9.86126760299993],
						[-77.45468161199994, -9.86126760299993],
						[-77.45468161199994, -10.026142602999926],
						[-77.63161723699994, -10.026142602999926],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0211',
			nombprov: 'HUARMEY',
			iddist: '021105',
			nombdist: 'MALVAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.80602348699995, -9.972824227999979],
						[-77.80602348699995, -9.860383601999956],
						[-77.55025386199998, -9.860383601999956],
						[-77.55025386199998, -9.972824227999979],
						[-77.80602348699995, -9.972824227999979],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			iddist: '100503',
			nombdist: 'CHAVIN DE PARIARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.79049986099994, -9.507501976999947],
						[-76.79049986099994, -9.344421851999925],
						[-76.70404673599995, -9.344421851999925],
						[-76.70404673599995, -9.507501976999947],
						[-76.79049986099994, -9.507501976999947],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			iddist: '021209',
			nombdist: 'SANTO TORIBIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.00077148699995, -8.908875601999966],
						[-78.00077148699995, -8.78444110099997],
						[-77.89509961199997, -8.78444110099997],
						[-77.89509961199997, -8.908875601999966],
						[-78.00077148699995, -8.908875601999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			iddist: '021302',
			nombdist: 'CASCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.44713286099994, -8.872507851999956],
						[-77.44713286099994, -8.776172226999961],
						[-77.32565523699998, -8.776172226999961],
						[-77.32565523699998, -8.872507851999956],
						[-77.44713286099994, -8.872507851999956],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1004',
			nombprov: 'HUACAYBAMBA',
			iddist: '100402',
			nombdist: 'CANCHABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17749611099998, -8.942640601999926],
						[-77.17749611099998, -8.767003725999928],
						[-77.03307036099994, -8.767003725999928],
						[-77.03307036099994, -8.942640601999926],
						[-77.17749611099998, -8.942640601999926],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			iddist: '020906',
			nombdist: 'YANAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.90212498699998, -8.656564850999928],
						[-77.90212498699998, -8.587113225999929],
						[-77.80026736199994, -8.587113225999929],
						[-77.80026736199994, -8.656564850999928],
						[-77.90212498699998, -8.656564850999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			iddist: '021909',
			nombdist: 'SAN JUAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.72190123699994, -8.757665226999961],
						[-77.72190123699994, -8.580585975999952],
						[-77.52289136199994, -8.580585975999952],
						[-77.52289136199994, -8.757665226999961],
						[-77.72190123699994, -8.757665226999961],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1305',
			nombprov: 'JULCAN',
			iddist: '130503',
			nombdist: 'CARABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.68243436299997, -8.251027351999937],
						[-78.68243436299997, -8.061024850999956],
						[-78.50002736199997, -8.061024850999956],
						[-78.50002736199997, -8.251027351999937],
						[-78.68243436299997, -8.251027351999937],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			iddist: '130108',
			nombdist: 'POROTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.82641011299995, -8.111755100999972],
						[-78.82641011299995, -7.943784475999962],
						[-78.68230986299994, -7.943784475999962],
						[-78.68230986299994, -8.111755100999972],
						[-78.82641011299995, -8.111755100999972],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130610',
			nombdist: 'PARANDAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.73276561299997, -7.909864975999938],
						[-78.73276561299997, -7.858832100999962],
						[-78.67072648799996, -7.858832100999962],
						[-78.67072648799996, -7.909864975999938],
						[-78.73276561299997, -7.909864975999938],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130602',
			nombdist: 'AGALLPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.61698636199998, -8.015412100999981],
						[-78.61698636199998, -7.858708350999962],
						[-78.32445511299994, -7.858708350999962],
						[-78.32445511299994, -8.015412100999981],
						[-78.61698636199998, -8.015412100999981],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220703',
			nombdist: 'CASPISAPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.47112435999998, -6.976496349999934],
						[-76.47112435999998, -6.856175974999928],
						[-76.37454748599998, -6.856175974999928],
						[-76.37454748599998, -6.976496349999934],
						[-76.47112435999998, -6.976496349999934],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130606',
			nombdist: 'LA CUESTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.73679736199995, -7.946104600999945],
						[-78.73679736199995, -7.857829100999936],
						[-78.64747123799998, -7.857829100999936],
						[-78.64747123799998, -7.946104600999945],
						[-78.73679736199995, -7.946104600999945],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130907',
			nombdist: 'SARIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.02911211199995, -8.012773225999979],
						[-78.02911211199995, -7.824857475999977],
						[-77.71825373699994, -7.824857475999977],
						[-77.71825373699994, -8.012773225999979],
						[-78.02911211199995, -8.012773225999979],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140109',
			nombdist: 'NUEVA ARICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.50309173799997, -7.026529099999948],
						[-79.50309173799997, -6.855982474999962],
						[-79.29663436299995, -6.855982474999962],
						[-79.29663436299995, -7.026529099999948],
						[-79.50309173799997, -7.026529099999948],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220707',
			nombdist: 'SAN HILARION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.54941985999994, -7.013913099999968],
						[-76.54941985999994, -6.855978474999972],
						[-76.41907060999995, -6.855978474999972],
						[-76.41907060999995, -7.013913099999968],
						[-76.54941985999994, -7.013913099999968],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130904',
			nombdist: 'CURGOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.00782673799995, -7.905798850999929],
						[-78.00782673799995, -7.788966850999941],
						[-77.89893011199996, -7.788966850999941],
						[-77.89893011199996, -7.905798850999929],
						[-78.00782673799995, -7.905798850999929],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130604',
			nombdist: 'CHARAT',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.51132386299997, -7.857768475999933],
						[-78.51132386299997, -7.753523475999941],
						[-78.42908536199997, -7.753523475999941],
						[-78.42908536199997, -7.857768475999933],
						[-78.51132386299997, -7.857768475999933],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			iddist: '130601',
			nombdist: 'OTUZCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.69439236299996, -7.996699225999976],
						[-78.69439236299996, -7.701699349999956],
						[-78.47736911199996, -7.701699349999956],
						[-78.47736911199996, -7.996699225999976],
						[-78.69439236299996, -7.996699225999976],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130901',
			nombdist: 'HUAMACHUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.18765223699995, -7.957348850999949],
						[-78.18765223699995, -7.694266850999952],
						[-77.88110948699995, -7.694266850999952],
						[-77.88110948699995, -7.957348850999949],
						[-78.18765223699995, -7.957348850999949],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			iddist: '130903',
			nombdist: 'COCHORCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.80174248699996, -7.945537100999957],
						[-77.80174248699996, -7.69027485099997],
						[-77.62269048599995, -7.69027485099997],
						[-77.62269048599995, -7.945537100999957],
						[-77.80174248699996, -7.945537100999957],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061109',
			nombdist: 'NIEPOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.27225686299994, -7.018413599999974],
						[-79.27225686299994, -6.851686849999965],
						[-79.01956448799996, -6.851686849999965],
						[-79.01956448799996, -7.018413599999974],
						[-79.27225686299994, -7.018413599999974],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0612',
			nombprov: 'SAN PABLO',
			iddist: '061204',
			nombdist: 'TUMBADEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.78644923799999, -7.083771224999964],
						[-78.78644923799999, -6.851611599999956],
						[-78.59860661299996, -6.851611599999956],
						[-78.59860661299996, -7.083771224999964],
						[-78.78644923799999, -7.083771224999964],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140114',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.93156836399999, -6.917162099999928],
						[-79.93156836399999, -6.848728474999973],
						[-79.87751761399994, -6.848728474999973],
						[-79.87751761399994, -6.917162099999928],
						[-79.93156836399999, -6.917162099999928],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061103',
			nombdist: 'CALQUIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.08287886299996, -6.999652349999963],
						[-79.08287886299996, -6.836218474999953],
						[-78.82420511299995, -6.836218474999953],
						[-78.82420511299995, -6.999652349999963],
						[-79.08287886299996, -6.999652349999963],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140116',
			nombdist: 'CAYALTI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.59214448899996, -6.97195897499995],
						[-79.59214448899996, -6.822582849999947],
						[-79.42791211399998, -6.822582849999947],
						[-79.42791211399998, -6.97195897499995],
						[-79.59214448899996, -6.97195897499995],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061107',
			nombdist: 'LLAPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.85505661299999, -7.007955099999947],
						[-78.85505661299999, -6.805986099999927],
						[-78.61152148799994, -6.805986099999927],
						[-78.61152148799994, -7.007955099999947],
						[-78.85505661299999, -7.007955099999947],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			iddist: '060105',
			nombdist: 'ENCAÑADA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.60175386299994, -7.165320349999945],
						[-78.60175386299994, -6.798939474999941],
						[-78.18369448799996, -6.798939474999941],
						[-78.18369448799996, -7.165320349999945],
						[-78.60175386299994, -7.165320349999945],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			iddist: '160604',
			nombdist: 'PAMPA HERMOSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.21540810999994, -7.973495850999939],
						[-76.21540810999994, -6.78838984999993],
						[-75.00109123499993, -6.78838984999993],
						[-75.00109123499993, -7.973495850999939],
						[-76.21540810999994, -7.973495850999939],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			iddist: '160201',
			nombdist: 'YURIMAGUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.40015805399997, -6.14667340099993],
						[-76.40015805399997, -5.53177323899996],
						[-75.90069414599998, -5.53177323899996],
						[-75.90069414599998, -6.14667340099993],
						[-76.40015805399997, -6.14667340099993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060311',
			nombdist: 'UTCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.12096411299996, -6.937066349999952],
						[-78.12096411299996, -6.82184097499993],
						[-78.00067311199996, -6.82184097499993],
						[-78.00067311199996, -6.937066349999952],
						[-78.12096411299996, -6.937066349999952],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200105',
			nombdist: 'CATACAOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.80508302799996, -5.795114934999958],
						[-80.80508302799996, -5.151495319999981],
						[-80.05251518399996, -5.151495319999981],
						[-80.05251518399996, -5.795114934999958],
						[-80.80508302799996, -5.795114934999958],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061106',
			nombdist: 'LA FLORIDA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.21908686399996, -6.900980475999972],
						[-79.21908686399996, -6.821439474999977],
						[-79.06807036299995, -6.821439474999977],
						[-79.06807036299995, -6.900980475999972],
						[-79.21908686399996, -6.900980475999972],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140106',
			nombdist: 'LA VICTORIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.91137698899996, -6.854267599999957],
						[-79.91137698899996, -6.784188474999951],
						[-79.82458198899997, -6.784188474999951],
						[-79.82458198899997, -6.854267599999957],
						[-79.91137698899996, -6.854267599999957],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140108',
			nombdist: 'MONSEFU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.90774648899998, -6.908427724999967],
						[-79.90774648899998, -6.820017474999929],
						[-79.77042548899999, -6.820017474999929],
						[-79.77042548899999, -6.908427724999967],
						[-79.90774648899998, -6.908427724999967],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140113',
			nombdist: 'REQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.84476173899998, -6.910029099999974],
						[-79.84476173899998, -6.815385099999958],
						[-79.75098436399998, -6.815385099999958],
						[-79.75098436399998, -6.910029099999974],
						[-79.84476173899998, -6.910029099999974],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			iddist: '220705',
			nombdist: 'PUCACACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.50289873599996, -6.887474474999976],
						[-76.50289873599996, -6.762164724999934],
						[-76.19604098499997, -6.762164724999934],
						[-76.19604098499997, -6.887474474999976],
						[-76.50289873599996, -6.887474474999976],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140119',
			nombdist: 'PUCALA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.66390461399999, -6.845973474999937],
						[-79.66390461399999, -6.741833974999963],
						[-79.38186086299999, -6.741833974999963],
						[-79.38186086299999, -6.845973474999937],
						[-79.66390461399999, -6.845973474999937],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140101',
			nombdist: 'CHICLAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.87229486399997, -6.832597599999929],
						[-79.87229486399997, -6.739846974999978],
						[-79.78011823799994, -6.739846974999978],
						[-79.78011823799994, -6.832597599999929],
						[-79.87229486399997, -6.832597599999929],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140311',
			nombdist: 'SAN JOSE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.97797123899994, -6.820499974999962],
						[-79.97797123899994, -6.730736349999972],
						[-79.89519536399996, -6.730736349999972],
						[-79.89519536399996, -6.820499974999962],
						[-79.97797123899994, -6.820499974999962],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200104',
			nombdist: 'CASTILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.64916011399998, -5.258150889999968],
						[-80.64916011399998, -4.965533697999945],
						[-80.34970616199996, -4.965533697999945],
						[-80.34970616199996, -5.258150889999968],
						[-80.64916011399998, -5.258150889999968],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			iddist: '061104',
			nombdist: 'CATILLUC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.82184861299999, -6.88345309999994],
						[-78.82184861299999, -6.737820349999936],
						[-78.62611598799998, -6.737820349999936],
						[-78.62611598799998, -6.88345309999994],
						[-78.82184861299999, -6.88345309999994],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			iddist: '101006',
			nombdist: 'SAN FRANCISCO DE ASIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.68410936099997, -10.028148477999935],
						[-76.68410936099997, -9.926880852999943],
						[-76.56982611099994, -9.926880852999943],
						[-76.56982611099994, -10.028148477999935],
						[-76.68410936099997, -10.028148477999935],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100107',
			nombdist: 'SAN FRANCISCO DE CAYRAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.39399998499994, -10.073204852999936],
						[-76.39399998499994, -9.923058227999945],
						[-76.25260035999997, -9.923058227999945],
						[-76.25260035999997, -10.073204852999936],
						[-76.39399998499994, -10.073204852999936],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140118',
			nombdist: 'POMALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.80428911399997, -6.829046849999941],
						[-79.80428911399997, -6.730878848999964],
						[-79.70354298799998, -6.730878848999964],
						[-79.70354298799998, -6.829046849999941],
						[-79.80428911399997, -6.829046849999941],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010111',
			nombdist: 'LEVANTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.93780661199997, -6.357773473999941],
						[-77.93780661199997, -6.275751849999949],
						[-77.76079811199997, -6.275751849999949],
						[-77.76079811199997, -6.357773473999941],
						[-77.93780661199997, -6.357773473999941],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			iddist: '010204',
			nombdist: 'EL PARCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.49426136299996, -5.64531459899996],
						[-78.49426136299996, -5.595406723999929],
						[-78.44436911199995, -5.595406723999929],
						[-78.44436911199995, -5.64531459899996],
						[-78.49426136299996, -5.64531459899996],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010601',
			nombdist: 'SAN NICOLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.50240148699999, -6.445822223999926],
						[-77.50240148699999, -6.29800634999998],
						[-77.37350986199993, -6.29800634999998],
						[-77.37350986199993, -6.445822223999926],
						[-77.50240148699999, -6.445822223999926],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060402',
			nombdist: 'ANGUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.67253511199993, -6.383882848999974],
						[-78.67253511199993, -6.287953098999935],
						[-78.48288086299993, -6.287953098999935],
						[-78.48288086299993, -6.383882848999974],
						[-78.67253511199993, -6.383882848999974],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010606',
			nombdist: 'LONGAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.61871698699997, -6.40645697399998],
						[-77.61871698699997, -6.280755973999931],
						[-77.49183611099994, -6.280755973999931],
						[-77.49183611099994, -6.40645697399998],
						[-77.61871698699997, -6.40645697399998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060406',
			nombdist: 'CHOROPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.45211523799998, -6.472150473999932],
						[-78.45211523799998, -6.271730348999938],
						[-78.27793186299994, -6.271730348999938],
						[-78.27793186299994, -6.472150473999932],
						[-78.45211523799998, -6.472150473999932],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060413',
			nombdist: 'PACCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.44008198699999, -6.595857474999946],
						[-78.44008198699999, -6.475784974999954],
						[-78.33902273699994, -6.475784974999954],
						[-78.33902273699994, -6.595857474999946],
						[-78.44008198699999, -6.595857474999946],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060608',
			nombdist: 'SAN ANDRES DE CUTERVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.82267686299997, -6.271191724999937],
						[-78.82267686299997, -6.154978223999933],
						[-78.63265823699999, -6.154978223999933],
						[-78.63265823699999, -6.271191724999937],
						[-78.82267686299997, -6.271191724999937],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200409',
			nombdist: 'SANTO DOMINGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.00306048899995, -5.150050722999936],
						[-80.00306048899995, -4.953499847999979],
						[-79.79431461399997, -4.953499847999979],
						[-79.79431461399997, -5.150050722999936],
						[-80.00306048899995, -5.150050722999936],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060302',
			nombdist: 'CHUMUCH',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.26695298799996, -6.660242224999934],
						[-78.26695298799996, -6.475740223999935],
						[-78.11605223699996, -6.475740223999935],
						[-78.11605223699996, -6.660242224999934],
						[-78.26695298799996, -6.660242224999934],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010602',
			nombdist: 'CHIRIMOTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.51150161199996, -6.60445572499998],
						[-77.51150161199996, -6.472302724999963],
						[-77.33048348699998, -6.472302724999963],
						[-77.33048348699998, -6.60445572499998],
						[-77.51150161199996, -6.60445572499998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060410',
			nombdist: 'LAJAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.78666598799998, -6.661414099999945],
						[-78.78666598799998, -6.472275348999972],
						[-78.67120548799994, -6.472275348999972],
						[-78.67120548799994, -6.661414099999945],
						[-78.78666598799998, -6.661414099999945],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			iddist: '010202',
			nombdist: 'ARAMANGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.62615423799997, -5.576753848999942],
						[-78.62615423799997, -5.173719223999967],
						[-78.30315748699996, -5.173719223999967],
						[-78.30315748699996, -5.576753848999942],
						[-78.62615423799997, -5.576753848999942],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140312',
			nombdist: 'TUCUME',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.94586136399994, -6.534819724999977],
						[-79.94586136399994, -6.472083974999976],
						[-79.79323048899994, -6.472083974999976],
						[-79.79323048899994, -6.534819724999977],
						[-79.94586136399994, -6.534819724999977],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060409',
			nombdist: 'HUAMBOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.06748823799995, -6.53197847499996],
						[-79.06748823799995, -6.330468724999946],
						[-78.88961911299998, -6.330468724999946],
						[-78.88961911299998, -6.53197847499996],
						[-79.06748823799995, -6.53197847499996],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220907',
			nombdist: 'HUIMBAYOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.01059573499998, -6.869113974999948],
						[-76.01059573499998, -6.329091224999956],
						[-75.50009960999995, -6.329091224999956],
						[-75.50009960999995, -6.869113974999948],
						[-76.01059573499998, -6.869113974999948],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			iddist: '220402',
			nombdist: 'ALTO SAPOSOA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28707036199995, -6.856734224999968],
						[-77.28707036199995, -6.327144848999978],
						[-76.73396223599997, -6.327144848999978],
						[-76.73396223599997, -6.856734224999968],
						[-77.28707036199995, -6.856734224999968],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010611',
			nombdist: 'TOTORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.49738423699995, -6.518666224999947],
						[-77.49738423699995, -6.468388724999954],
						[-77.43959573699993, -6.468388724999954],
						[-77.43959573699993, -6.518666224999947],
						[-77.49738423699995, -6.518666224999947],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0607',
			nombprov: 'HUALGAYOC',
			iddist: '060702',
			nombdist: 'CHUGUR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.76946186299995, -6.751195724999946],
						[-78.76946186299995, -6.626453099999935],
						[-78.65039773699993, -6.626453099999935],
						[-78.65039773699993, -6.751195724999946],
						[-78.76946186299995, -6.751195724999946],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010522',
			nombdist: 'TINGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.02092686199995, -6.460089849999974],
						[-78.02092686199995, -6.32059959999998],
						[-77.87213473699995, -6.32059959999998],
						[-77.87213473699995, -6.460089849999974],
						[-78.02092686199995, -6.460089849999974],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2203',
			nombprov: 'EL DORADO',
			iddist: '220305',
			nombdist: 'SHATOJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.76629936099994, -6.563631098999963],
						[-76.76629936099994, -6.466908224999941],
						[-76.63983261099997, -6.466908224999941],
						[-76.63983261099997, -6.563631098999963],
						[-76.76629936099994, -6.563631098999963],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2203',
			nombprov: 'EL DORADO',
			iddist: '220302',
			nombdist: 'AGUA BLANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.78689298599994, -6.790645599999948],
						[-76.78689298599994, -6.632931599999949],
						[-76.63187448499997, -6.632931599999949],
						[-76.63187448499997, -6.790645599999948],
						[-76.78689298599994, -6.790645599999948],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			iddist: '140117',
			nombdist: 'PATAPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.67859323899995, -6.769624974999942],
						[-79.67859323899995, -6.627730849999978],
						[-79.49780661299997, -6.627730849999978],
						[-79.49780661299997, -6.769624974999942],
						[-79.67859323899995, -6.769624974999942],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060312',
			nombdist: 'LA LIBERTAD DE PALLAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.38297898699994, -6.799862099999928],
						[-78.38297898699994, -6.616082099999971],
						[-78.20691661199999, -6.616082099999971],
						[-78.20691661199999, -6.799862099999928],
						[-78.38297898699994, -6.799862099999928],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061303',
			nombdist: 'CATACHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.25294723899998, -6.873761724999952],
						[-79.25294723899998, -6.608562473999939],
						[-78.91287298799995, -6.608562473999939],
						[-78.91287298799995, -6.873761724999952],
						[-79.25294723899998, -6.873761724999952],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010509',
			nombdist: 'LUYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.06326361199996, -6.231306598999936],
						[-78.06326361199996, -6.10124022399998],
						[-77.90150198699996, -6.10124022399998],
						[-77.90150198699996, -6.231306598999936],
						[-78.06326361199996, -6.231306598999936],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060604',
			nombdist: 'CUJILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.61910936299995, -6.184988224999927],
						[-78.61910936299995, -6.062342973999932],
						[-78.50895698799997, -6.062342973999932],
						[-78.50895698799997, -6.184988224999927],
						[-78.61910936299995, -6.184988224999927],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010119',
			nombdist: 'SAN ISIDRO DE MAINO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.89774611199994, -6.392411098999958],
						[-77.89774611199994, -6.306330098999979],
						[-77.72985548699995, -6.306330098999979],
						[-77.72985548699995, -6.392411098999958],
						[-77.89774611199994, -6.392411098999958],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200401',
			nombdist: 'CHULUCANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.36426490699995, -5.329977652999958],
						[-80.36426490699995, -4.91235811599995],
						[-79.97797848899995, -4.91235811599995],
						[-79.97797848899995, -5.329977652999958],
						[-80.36426490699995, -5.329977652999958],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010608',
			nombdist: 'MILPUC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.45072848699994, -6.537053724999964],
						[-77.45072848699994, -6.465277349999951],
						[-77.37708198599995, -6.465277349999951],
						[-77.37708198599995, -6.537053724999964],
						[-77.45072848699994, -6.537053724999964],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220904',
			nombdist: 'CHAZUTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.16599310999999, -6.810860224999942],
						[-76.16599310999999, -6.46311822399997],
						[-75.78940661099995, -6.46311822399997],
						[-75.78940661099995, -6.810860224999942],
						[-76.16599310999999, -6.810860224999942],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			iddist: '160605',
			nombdist: 'SARAYACU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.63860698499997, -6.927989474999947],
						[-75.63860698499997, -5.866033223999978],
						[-74.68901223399996, -5.866033223999978],
						[-74.68901223399996, -6.927989474999947],
						[-75.63860698499997, -6.927989474999947],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200505',
			nombdist: 'LA HUACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.01887298999998, -5.280638759999931],
						[-81.01887298999998, -4.881162097999948],
						[-80.82424023999994, -4.881162097999948],
						[-80.82424023999994, -5.280638759999931],
						[-81.01887298999998, -5.280638759999931],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060401',
			nombdist: 'CHOTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.73948736299997, -6.680755848999979],
						[-78.73948736299997, -6.459886724999933],
						[-78.53179123799998, -6.459886724999933],
						[-78.53179123799998, -6.680755848999979],
						[-78.73948736299997, -6.680755848999979],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060806',
			nombdist: 'LAS PIRIAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.89313473799996, -5.677146473999926],
						[-78.89313473799996, -5.585841848999962],
						[-78.80361086299996, -5.585841848999962],
						[-78.80361086299996, -5.677146473999926],
						[-78.89313473799996, -5.677146473999926],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160509',
			nombdist: 'TAPICHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.19258998399994, -6.484716849999927],
						[-74.19258998399994, -5.574155472999962],
						[-73.83009185899994, -5.574155472999962],
						[-73.83009185899994, -6.484716849999927],
						[-74.19258998399994, -6.484716849999927],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160508',
			nombdist: 'SOPLIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.03986298299998, -6.962362474999964],
						[-74.03986298299998, -5.570852473999935],
						[-73.44457273299997, -5.570852473999935],
						[-73.44457273299997, -6.962362474999964],
						[-74.03986298299998, -6.962362474999964],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			iddist: '010203',
			nombdist: 'COPALLIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.50483486299999, -5.733679973999926],
						[-78.50483486299999, -5.559211223999966],
						[-78.31350848799997, -5.559211223999966],
						[-78.31350848799997, -5.733679973999926],
						[-78.50483486299999, -5.733679973999926],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010302',
			nombdist: 'CHISQUILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.81057223699997, -5.979459973999951],
						[-77.81057223699997, -5.82491934899997],
						[-77.65189061199999, -5.82491934899997],
						[-77.65189061199999, -5.979459973999951],
						[-77.81057223699997, -5.979459973999951],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010301',
			nombdist: 'JUMBILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.87876948699994, -6.123910098999943],
						[-77.87876948699994, -5.823566348999975],
						[-77.77209598699994, -5.823566348999975],
						[-77.77209598699994, -6.123910098999943],
						[-77.87876948699994, -6.123910098999943],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			iddist: '060805',
			nombdist: 'HUABAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.95382736299996, -5.665550973999928],
						[-78.95382736299996, -5.555687473999967],
						[-78.82246686299999, -5.555687473999967],
						[-78.82246686299999, -5.665550973999928],
						[-78.95382736299996, -5.665550973999928],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			iddist: '220103',
			nombdist: 'HABANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.15203423699995, -6.12483784899996],
						[-77.15203423699995, -6.053619848999972],
						[-77.04786998599997, -6.053619848999972],
						[-77.04786998599997, -6.12483784899996],
						[-77.15203423699995, -6.12483784899996],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220502',
			nombdist: 'ALONSO DE ALVARADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.84394336099996, -6.427456099999972],
						[-76.84394336099996, -6.159359974999973],
						[-76.69749636099993, -6.159359974999973],
						[-76.69749636099993, -6.427456099999972],
						[-76.84394336099996, -6.427456099999972],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010523',
			nombdist: 'TRITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.00437886299994, -6.171210473999963],
						[-78.00437886299994, -6.14006059899998],
						[-77.95110548699995, -6.14006059899998],
						[-77.95110548699995, -6.171210473999963],
						[-78.00437886299994, -6.171210473999963],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140304',
			nombdist: 'JAYANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.96522261399997, -6.455400348999944],
						[-79.96522261399997, -6.139962848999971],
						[-79.52831423899994, -6.139962848999971],
						[-79.52831423899994, -6.455400348999944],
						[-79.96522261399997, -6.455400348999944],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010512',
			nombdist: 'OCALLI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.30875786299998, -6.272054723999929],
						[-78.30875786299998, -6.13650972399995],
						[-78.09853561199998, -6.13650972399995],
						[-78.09853561199998, -6.272054723999929],
						[-78.30875786299998, -6.272054723999929],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010114',
			nombdist: 'MOLINOPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.73074023699996, -6.309462598999971],
						[-77.73074023699996, -6.12711322399997],
						[-77.46898336099997, -6.12711322399997],
						[-77.46898336099997, -6.309462598999971],
						[-77.73074023699996, -6.309462598999971],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220804',
			nombdist: 'NUEVA CAJAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.47690486199997, -6.080094723999935],
						[-77.47690486199997, -5.798148473999959],
						[-77.26734961099999, -5.798148473999959],
						[-77.26734961099999, -6.080094723999935],
						[-77.47690486199997, -6.080094723999935],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060603',
			nombdist: 'CHOROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.86124786299996, -6.05218409899993],
						[-78.86124786299996, -5.781032348999929],
						[-78.68600223799996, -5.781032348999929],
						[-78.68600223799996, -6.05218409899993],
						[-78.86124786299996, -6.05218409899993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060301',
			nombdist: 'CELENDIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.21495111299998, -6.916693349999946],
						[-78.21495111299998, -6.602723098999945],
						[-78.01406386199994, -6.602723098999945],
						[-78.01406386199994, -6.916693349999946],
						[-78.21495111299998, -6.916693349999946],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200506',
			nombdist: 'TAMARINDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.99697848999995, -4.903384722999931],
						[-80.99697848999995, -4.771792972999947],
						[-80.92429886499997, -4.771792972999947],
						[-80.92429886499997, -4.903384722999931],
						[-80.99697848999995, -4.903384722999931],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140302',
			nombdist: 'CHOCHOPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.68874473899996, -6.196999724999955],
						[-79.68874473899996, -6.122318349999944],
						[-79.54466211399995, -6.122318349999944],
						[-79.54466211399995, -6.196999724999955],
						[-79.68874473899996, -6.196999724999955],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010121',
			nombdist: 'SONCHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.86776173699997, -6.228777348999927],
						[-77.86776173699997, -6.11921684899994],
						[-77.72683598699996, -6.11921684899994],
						[-77.72683598699996, -6.228777348999927],
						[-77.86776173699997, -6.228777348999927],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			iddist: '220105',
			nombdist: 'SORITOR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.19727536099998, -6.41330284999998],
						[-77.19727536099998, -6.11419447399993],
						[-76.93448986099997, -6.11419447399993],
						[-76.93448986099997, -6.41330284999998],
						[-77.19727536099998, -6.41330284999998],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060609',
			nombdist: 'SAN JUAN DE CUTERVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.63802148799994, -6.232033348999948],
						[-78.63802148799994, -6.111937474999934],
						[-78.54797073799995, -6.111937474999934],
						[-78.54797073799995, -6.232033348999948],
						[-78.63802148799994, -6.232033348999948],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160504',
			nombdist: 'EMILIO SAN MARTIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.74686610899994, -7.083270224999978],
						[-74.74686610899994, -5.465640223999969],
						[-74.09667848299995, -5.465640223999969],
						[-74.09667848299995, -7.083270224999978],
						[-74.74686610899994, -7.083270224999978],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			iddist: '160210',
			nombdist: 'SANTA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.07688860999997, -5.948443527999928],
						[-76.07688860999997, -5.371331225999938],
						[-75.45424871599994, -5.371331225999938],
						[-75.45424871599994, -5.948443527999928],
						[-76.07688860999997, -5.948443527999928],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220805',
			nombdist: 'PARDO MIGUEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77567748699994, -6.036962098999936],
						[-77.77567748699994, -5.40689909799994],
						[-77.42923048699998, -5.40689909799994],
						[-77.42923048699998, -6.036962098999936],
						[-77.77567748699994, -6.036962098999936],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160503',
			nombdist: 'CAPELO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.30690035899994, -5.605884723999964],
						[-74.30690035899994, -5.149732597999957],
						[-73.96135985899997, -5.149732597999957],
						[-73.96135985899997, -5.605884723999964],
						[-74.30690035899994, -5.605884723999964],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010312',
			nombdist: 'YAMBRASBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.10509823699994, -5.807884348999948],
						[-78.10509823699994, -5.133017597999981],
						[-77.68206648699999, -5.133017597999981],
						[-77.68206648699999, -5.807884348999948],
						[-78.10509823699994, -5.807884348999948],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			iddist: '160506',
			nombdist: 'PUINAHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.57110510999996, -6.122162598999978],
						[-75.57110510999996, -5.083306597999979],
						[-74.08959973399999, -5.083306597999979],
						[-74.08959973399999, -6.122162598999978],
						[-75.57110510999996, -6.122162598999978],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060417',
			nombdist: 'TACABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.71417186299999, -6.454089849999946],
						[-78.71417186299999, -6.332675724999945],
						[-78.43873636299998, -6.332675724999945],
						[-78.43873636299998, -6.454089849999946],
						[-78.71417186299999, -6.454089849999946],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010609',
			nombdist: 'OMIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.44117611099995, -6.488617599999941],
						[-77.44117611099995, -6.318075724999972],
						[-77.27315861199997, -6.318075724999972],
						[-77.27315861199997, -6.488617599999941],
						[-77.44117611099995, -6.488617599999941],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220905',
			nombdist: 'CHIPURANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.92338073499997, -6.582978474999948],
						[-75.92338073499997, -6.31556059899998],
						[-75.50298348499996, -6.31556059899998],
						[-75.50298348499996, -6.582978474999948],
						[-75.92338073499997, -6.582978474999948],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220501',
			nombdist: 'LAMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.58392011099994, -6.481532723999976],
						[-76.58392011099994, -6.311033848999955],
						[-76.47097073499998, -6.311033848999955],
						[-76.47097073499998, -6.481532723999976],
						[-76.58392011099994, -6.481532723999976],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010307',
			nombdist: 'JAZAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.08263861199998, -5.977928848999966],
						[-78.08263861199998, -5.903507848999936],
						[-77.95570023699997, -5.903507848999936],
						[-77.95570023699997, -5.977928848999966],
						[-78.08263861199998, -5.977928848999966],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			iddist: '060615',
			nombdist: 'TORIBIO CASANOVA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.74163286299995, -6.074419973999966],
						[-78.74163286299995, -5.900878598999952],
						[-78.62770311299994, -5.900878598999952],
						[-78.62770311299994, -6.074419973999966],
						[-78.74163286299995, -6.074419973999966],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010308',
			nombdist: 'RECTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.80061248699997, -5.974316848999933],
						[-77.80061248699997, -5.898859348999963],
						[-77.74475586199998, -5.898859348999963],
						[-77.74475586199998, -5.974316848999933],
						[-77.80061248699997, -5.974316848999933],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220809',
			nombdist: 'YURACYACU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28706448699995, -5.979929973999958],
						[-77.28706448699995, -5.886599598999965],
						[-77.14726848599997, -5.886599598999965],
						[-77.14726848599997, -5.979929973999958],
						[-77.28706448699995, -5.979929973999958],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010305',
			nombdist: 'CUISPES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.97664448799998, -5.958089848999975],
						[-77.97664448799998, -5.860635098999978],
						[-77.85973686199998, -5.860635098999978],
						[-77.85973686199998, -5.958089848999975],
						[-77.97664448799998, -5.958089848999975],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			iddist: '010310',
			nombdist: 'SHIPASBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13522461299993, -5.93864847499998],
						[-78.13522461299993, -5.828532348999943],
						[-77.96101173699998, -5.828532348999943],
						[-77.96101173699998, -5.93864847499998],
						[-78.13522461299993, -5.93864847499998],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			iddist: '140206',
			nombdist: 'PUEBLO NUEVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.85105473899995, -6.661568348999936],
						[-79.85105473899995, -6.595797473999937],
						[-79.79245573899993, -6.595797473999937],
						[-79.79245573899993, -6.661568348999936],
						[-79.85105473899995, -6.661568348999936],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010513',
			nombdist: 'OCUMAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.32745548699995, -6.45922534999994],
						[-78.32745548699995, -6.249864724999952],
						[-78.04208736199996, -6.249864724999952],
						[-78.04208736199996, -6.45922534999994],
						[-78.32745548699995, -6.45922534999994],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061310',
			nombdist: 'UTICYACU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.82850723799999, -6.646311849999961],
						[-78.82850723799999, -6.577878849999934],
						[-78.75743948799999, -6.577878849999934],
						[-78.75743948799999, -6.646311849999961],
						[-78.82850723799999, -6.646311849999961],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200206',
			nombdist: 'PACAIPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.87658986399998, -5.110968722999928],
						[-79.87658986399998, -4.751373097999931],
						[-79.45057036399999, -4.751373097999931],
						[-79.45057036399999, -5.110968722999928],
						[-79.87658986399998, -5.110968722999928],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010120',
			nombdist: 'SOLOCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.80857198699994, -6.371617474999937],
						[-77.80857198699994, -6.245584099999974],
						[-77.68227198699998, -6.245584099999974],
						[-77.68227198699998, -6.371617474999937],
						[-77.80857198699994, -6.371617474999937],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061301',
			nombdist: 'SANTA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.01434961299998, -6.678013724999971],
						[-79.01434961299998, -6.579521474999979],
						[-78.87425198799997, -6.579521474999979],
						[-78.87425198799997, -6.678013724999971],
						[-79.01434961299998, -6.678013724999971],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010115',
			nombdist: 'MONTEVIDEO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.81411311199997, -6.678525349999973],
						[-77.81411311199997, -6.578109974999961],
						[-77.62666411199996, -6.578109974999961],
						[-77.62666411199996, -6.678525349999973],
						[-77.81411311199997, -6.678525349999973],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			iddist: '160705',
			nombdist: 'PASTAZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.23325386199997, -5.058456972999977],
						[-77.23325386199997, -3.059222596999973],
						[-75.74680073499997, -3.059222596999973],
						[-75.74680073499997, -5.058456972999977],
						[-77.23325386199997, -5.058456972999977],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061305',
			nombdist: 'LA ESPERANZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.90957811299995, -6.66784572499995],
						[-78.90957811299995, -6.574498099999971],
						[-78.79846973799994, -6.574498099999971],
						[-78.79846973799994, -6.66784572499995],
						[-78.90957811299995, -6.66784572499995],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160105',
			nombdist: 'LAS AMAZONAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.92932810699995, -4.319417222999959],
						[-72.92932810699995, -2.888508227999978],
						[-72.11719298199995, -2.888508227999978],
						[-72.11719298199995, -4.319417222999959],
						[-72.92932810699995, -4.319417222999959],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			iddist: '140201',
			nombdist: 'FERREÑAFE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.84153561399995, -6.681437474999939],
						[-79.84153561399995, -6.569602474999954],
						[-79.75561086399995, -6.569602474999954],
						[-79.75561086399995, -6.681437474999939],
						[-79.84153561399995, -6.681437474999939],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			iddist: '060307',
			nombdist: 'MIGUEL IGLESIAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.41297261299997, -6.785374974999968],
						[-78.41297261299997, -6.569083974999955],
						[-78.14883236199995, -6.569083974999955],
						[-78.14883236199995, -6.785374974999968],
						[-78.41297261299997, -6.785374974999968],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0607',
			nombprov: 'HUALGAYOC',
			iddist: '060701',
			nombdist: 'BAMBAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.62330673799994, -6.835587349999969],
						[-78.62330673799994, -6.559978473999934],
						[-78.38416598699996, -6.559978473999934],
						[-78.38416598699996, -6.835587349999969],
						[-78.62330673799994, -6.835587349999969],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1604',
			nombprov: 'MARISCAL RAMON CASTILLA',
			iddist: '160402',
			nombdist: 'PEBAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.57383698299998, -4.16392897299994],
						[-72.57383698299998, -2.799546914999951],
						[-71.31074223099995, -2.799546914999951],
						[-71.31074223099995, -4.16392897299994],
						[-72.57383698299998, -4.16392897299994],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			iddist: '160704',
			nombdist: 'MORONA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.81725098699997, -4.854271597999968],
						[-77.81725098699997, -2.773297720999949],
						[-76.92897661199999, -2.773297720999949],
						[-76.92897661199999, -4.854271597999968],
						[-77.81725098699997, -4.854271597999968],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060902',
			nombdist: 'CHIRINOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.01656723799994, -5.444066598999939],
						[-79.01656723799994, -5.190941347999967],
						[-78.76078123799994, -5.190941347999967],
						[-78.76078123799994, -5.444066598999939],
						[-79.01656723799994, -5.444066598999939],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			iddist: '140204',
			nombdist: 'MANUEL ANTONIO MESONES MURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.77015961399997, -6.715187474999936],
						[-79.77015961399997, -6.550185849999934],
						[-79.58977073799997, -6.550185849999934],
						[-79.58977073799997, -6.715187474999936],
						[-79.77015961399997, -6.715187474999936],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220908',
			nombdist: 'JUAN GUERRA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.45631798599999, -6.692069099999969],
						[-76.45631798599999, -6.546294599999953],
						[-76.27501961099995, -6.546294599999953],
						[-76.27501961099995, -6.692069099999969],
						[-76.45631798599999, -6.692069099999969],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			iddist: '010113',
			nombdist: 'MARISCAL CASTILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.83042186199998, -6.619277099999977],
						[-77.83042186199998, -6.545298099999968],
						[-77.70412036199997, -6.545298099999968],
						[-77.70412036199997, -6.619277099999977],
						[-77.83042186199998, -6.619277099999977],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2206',
			nombprov: 'MARISCAL CACERES',
			iddist: '220604',
			nombdist: 'PACHIZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.24735473699997, -7.362875724999981],
						[-77.24735473699997, -6.537989599999946],
						[-76.73023436099999, -6.537989599999946],
						[-76.73023436099999, -7.362875724999981],
						[-77.24735473699997, -7.362875724999981],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2203',
			nombprov: 'EL DORADO',
			iddist: '220301',
			nombdist: 'SAN JOSE DE SISA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.84128648599994, -6.707565724999938],
						[-76.84128648599994, -6.523279973999934],
						[-76.59720698599995, -6.523279973999934],
						[-76.59720698599995, -6.707565724999938],
						[-76.84128648599994, -6.707565724999938],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060907',
			nombdist: 'TABACONAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.37836615199996, -5.524710898999956],
						[-79.37836615199996, -5.162891956999942],
						[-79.01109898799996, -5.162891956999942],
						[-79.01109898799996, -5.524710898999956],
						[-79.37836615199996, -5.524710898999956],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140305',
			nombdist: 'MOCHUMI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.96484898899996, -6.614386224999976],
						[-79.96484898899996, -6.519990223999969],
						[-79.81408986299994, -6.519990223999969],
						[-79.81408986299994, -6.614386224999976],
						[-79.96484898899996, -6.614386224999976],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010503',
			nombdist: 'COCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13765873799997, -6.745910099999946],
						[-78.13765873799997, -6.519060598999943],
						[-77.91871511199997, -6.519060598999943],
						[-77.91871511199997, -6.745910099999946],
						[-78.13765873799997, -6.745910099999946],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060901',
			nombdist: 'SAN IGNACIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.09412386299994, -5.265510098999926],
						[-79.09412386299994, -5.003170972999953],
						[-78.89849786299999, -5.003170972999953],
						[-78.89849786299999, -5.265510098999926],
						[-79.09412386299994, -5.265510098999926],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060905',
			nombdist: 'NAMBALLE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.34294513699996, -5.244133347999934],
						[-79.34294513699996, -4.96117172299995],
						[-79.04408561399998, -4.96117172299995],
						[-79.04408561399998, -5.244133347999934],
						[-79.34294513699996, -5.244133347999934],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060906',
			nombdist: 'SAN JOSE DE LOURDES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.01497023799999, -5.256363722999936],
						[-79.01497023799999, -4.637468597999941],
						[-78.66463186299995, -4.637468597999941],
						[-78.66463186299995, -5.256363722999936],
						[-79.01497023799999, -5.256363722999936],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			iddist: '010521',
			nombdist: 'SANTO TOMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.94510336199994, -6.631650349999973],
						[-77.94510336199994, -6.518310098999962],
						[-77.82726761199996, -6.518310098999962],
						[-77.82726761199996, -6.631650349999973],
						[-77.94510336199994, -6.631650349999973],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061309',
			nombdist: 'SEXI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.12684373799993, -6.664982474999931],
						[-79.12684373799993, -6.511677723999981],
						[-78.95371486299996, -6.511677723999981],
						[-78.95371486299996, -6.664982474999931],
						[-79.12684373799993, -6.664982474999931],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			iddist: '061304',
			nombdist: 'CHANCAYBAÑOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.96568361299995, -6.604486724999958],
						[-78.96568361299995, -6.503457598999944],
						[-78.77665036299999, -6.503457598999944],
						[-78.77665036299999, -6.604486724999958],
						[-78.96568361299995, -6.604486724999958],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			iddist: '060903',
			nombdist: 'HUARANGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.82348323799994, -5.409236347999979],
						[-78.82348323799994, -4.623873097999933],
						[-78.58981148699996, -4.623873097999933],
						[-78.58981148699996, -5.409236347999979],
						[-78.82348323799994, -5.409236347999979],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			iddist: '010205',
			nombdist: 'IMAZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.71089498799995, -5.485992598999928],
						[-78.71089498799995, -4.499451346999933],
						[-78.05674911199998, -4.499451346999933],
						[-78.05674911199998, -5.485992598999928],
						[-78.71089498799995, -5.485992598999928],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060408',
			nombdist: 'CONCHAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.70970111299994, -6.57069034999995],
						[-78.70970111299994, -6.399769473999925],
						[-78.53392861299994, -6.399769473999925],
						[-78.53392861299994, -6.57069034999995],
						[-78.70970111299994, -6.57069034999995],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0104',
			nombprov: 'CONDORCANQUI',
			iddist: '010402',
			nombdist: 'EL CENEPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.65261586299994, -4.721044972999948],
						[-78.65261586299994, -3.381749471999967],
						[-78.02728061199997, -3.381749471999967],
						[-78.02728061199997, -4.721044972999948],
						[-78.65261586299994, -4.721044972999948],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200601',
			nombdist: 'SULLANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.73712886499999, -5.023554296999976],
						[-80.73712886499999, -4.665550722999967],
						[-80.34727057699996, -4.665550722999967],
						[-80.34727057699996, -5.023554296999976],
						[-80.73712886499999, -5.023554296999976],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140303',
			nombdist: 'ILLIMO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.90110536399999, -6.491674349999926],
						[-79.90110536399999, -6.449884723999958],
						[-79.78666411399996, -6.449884723999958],
						[-79.78666411399996, -6.491674349999926],
						[-79.90110536399999, -6.491674349999926],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			iddist: '220511',
			nombdist: 'ZAPATERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.61404448599995, -6.627399974999946],
						[-76.61404448599995, -6.439601599999946],
						[-76.45421611099994, -6.439601599999946],
						[-76.45421611099994, -6.627399974999946],
						[-76.61404448599995, -6.627399974999946],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			iddist: '060419',
			nombdist: 'CHALAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.54963298699994, -6.609122849999949],
						[-78.54963298699994, -6.437269473999947],
						[-78.43246873799995, -6.437269473999947],
						[-78.43246873799995, -6.609122849999949],
						[-78.54963298699994, -6.609122849999949],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			iddist: '220910',
			nombdist: 'MORALES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.46273048599994, -6.561830224999937],
						[-76.46273048599994, -6.436972598999944],
						[-76.37301998599997, -6.436972598999944],
						[-76.37301998599997, -6.561830224999937],
						[-76.46273048599994, -6.561830224999937],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			iddist: '010610',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.48388473699998, -6.483323349999978],
						[-77.48388473699998, -6.427730598999972],
						[-77.43123236199995, -6.427730598999972],
						[-77.43123236199995, -6.483323349999978],
						[-77.48388473699998, -6.483323349999978],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160112',
			nombdist: 'BELEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.39086523299994, -4.10575197299994],
						[-73.39086523299994, -3.599445346999971],
						[-73.05501385799994, -3.599445346999971],
						[-73.05501385799994, -4.10575197299994],
						[-73.39086523299994, -4.10575197299994],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			iddist: '240106',
			nombdist: 'SAN JUAN DE LA VIRGEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.45394736499998, -3.772566471999937],
						[-80.45394736499998, -3.598641721999968],
						[-80.29583398899996, -3.598641721999968],
						[-80.29583398899996, -3.772566471999937],
						[-80.45394736499998, -3.772566471999937],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			iddist: '240102',
			nombdist: 'CORRALES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.55548236399994, -3.677675721999947],
						[-80.55548236399994, -3.499123095999948],
						[-80.43817548899995, -3.499123095999948],
						[-80.43817548899995, -3.677675721999947],
						[-80.55548236399994, -3.677675721999947],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0104',
			nombprov: 'CONDORCANQUI',
			iddist: '010403',
			nombdist: 'RIO SANTIAGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.24684398799997, -4.524803847999976],
						[-78.24684398799997, -2.986125095999967],
						[-77.53787736199996, -2.986125095999967],
						[-77.53787736199996, -4.524803847999976],
						[-78.24684398799997, -4.524803847999976],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2403',
			nombprov: 'ZARUMILLA',
			iddist: '240304',
			nombdist: 'PAPAYAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.37883011499997, -3.636900346999937],
						[-80.37883011499997, -3.494611346999932],
						[-80.18818361399997, -3.494611346999932],
						[-80.18818361399997, -3.636900346999937],
						[-80.37883011499997, -3.636900346999937],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			iddist: '240101',
			nombdist: 'TUMBES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.49717773899994, -3.626619096999946],
						[-80.49717773899994, -3.485218846999942],
						[-80.34223361399995, -3.485218846999942],
						[-80.34223361399995, -3.626619096999946],
						[-80.49717773899994, -3.626619096999946],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2403',
			nombprov: 'ZARUMILLA',
			iddist: '240302',
			nombdist: 'AGUAS VERDES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.28244336399996, -3.558728471999928],
						[-80.28244336399996, -3.432938471999932],
						[-80.20498823899999, -3.432938471999932],
						[-80.20498823899999, -3.558728471999928],
						[-80.28244336399996, -3.558728471999928],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160104',
			nombdist: 'INDIANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.16058785799999, -4.39913084799997],
						[-73.16058785799999, -3.385017470999969],
						[-72.60293910699994, -3.385017470999969],
						[-72.60293910699994, -4.39913084799997],
						[-73.16058785799999, -4.39913084799997],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200407',
			nombdist: 'SAN JUAN DE BIGOTE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.82994136399998, -5.385656223999945],
						[-79.82994136399998, -5.204785097999945],
						[-79.64730673899999, -5.204785097999945],
						[-79.64730673899999, -5.385656223999945],
						[-79.82994136399998, -5.385656223999945],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200402',
			nombdist: 'BUENOS AIRES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.02102536399997, -5.379308598999955],
						[-80.02102536399997, -5.182800722999957],
						[-79.80799798899994, -5.182800722999957],
						[-79.80799798899994, -5.379308598999955],
						[-80.02102536399997, -5.379308598999955],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200302',
			nombdist: 'CANCHAQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.76858986399998, -5.425759723999931],
						[-79.76858986399998, -5.174958972999946],
						[-79.53801948899996, -5.174958972999946],
						[-79.53801948899996, -5.425759723999931],
						[-79.76858986399998, -5.425759723999931],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2403',
			nombprov: 'ZARUMILLA',
			iddist: '240301',
			nombdist: 'ZARUMILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.39497661399997, -3.529609346999962],
						[-80.39497661399997, -3.381773346999978],
						[-80.22546273899997, -3.381773346999978],
						[-80.22546273899997, -3.529609346999962],
						[-80.39497661399997, -3.529609346999962],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160108',
			nombdist: 'PUNCHANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.66116410799998, -3.741658221999956],
						[-73.66116410799998, -3.283976596999935],
						[-73.14011323199998, -3.283976596999935],
						[-73.14011323199998, -3.741658221999956],
						[-73.66116410799998, -3.741658221999956],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			iddist: '220807',
			nombdist: 'SAN FERNANDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.32171998699994, -5.917080098999975],
						[-77.32171998699994, -5.768768848999969],
						[-77.23179061199994, -5.768768848999969],
						[-77.23179061199994, -5.917080098999975],
						[-77.32171998699994, -5.917080098999975],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			iddist: '010702',
			nombdist: 'CAJARURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.45591148799997, -5.895298848999971],
						[-78.45591148799997, -5.328921848999926],
						[-77.93035161199998, -5.328921848999926],
						[-77.93035161199998, -5.895298848999971],
						[-78.45591148799997, -5.895298848999971],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2402',
			nombprov: 'CONTRALMIRANTE VILLAR',
			iddist: '240203',
			nombdist: 'CANOAS DE PUNTA SAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.04141798999996, -4.192800722999948],
						[-81.04141798999996, -3.881783222999957],
						[-80.72605073999995, -3.881783222999957],
						[-80.72605073999995, -4.192800722999948],
						[-81.04141798999996, -4.192800722999948],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1603',
			nombprov: 'LORETO',
			iddist: '160301',
			nombdist: 'NAUTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.94307223399994, -5.010754972999962],
						[-74.94307223399994, -3.836665972999981],
						[-73.37823198299998, -3.836665972999981],
						[-73.37823198299998, -5.010754972999962],
						[-74.94307223399994, -5.010754972999962],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2402',
			nombprov: 'CONTRALMIRANTE VILLAR',
			iddist: '240202',
			nombdist: 'CASITAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.86155036499997, -4.21519372299997],
						[-80.86155036499997, -3.822886971999935],
						[-80.51518161499996, -3.822886971999935],
						[-80.51518161499996, -4.21519372299997],
						[-80.86155036499997, -4.21519372299997],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			iddist: '160103',
			nombdist: 'FERNANDO LORES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.44992473299999, -4.709708972999977],
						[-73.44992473299999, -3.809473096999966],
						[-72.74683985799999, -3.809473096999966],
						[-72.74683985799999, -4.709708972999977],
						[-73.44992473299999, -4.709708972999977],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1604',
			nombprov: 'MARISCAL RAMON CASTILLA',
			iddist: '160404',
			nombdist: 'SAN PABLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.72345910599995, -4.248172347999969],
						[-71.72345910599995, -3.181568345999949],
						[-70.82316998099998, -3.181568345999949],
						[-70.82316998099998, -4.248172347999969],
						[-71.72345910599995, -4.248172347999969],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1604',
			nombprov: 'MARISCAL RAMON CASTILLA',
			iddist: '160401',
			nombdist: 'RAMON CASTILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.41961723099996, -4.155206971999974],
						[-71.41961723099996, -3.181568345999949],
						[-70.05665485499998, -3.181568345999949],
						[-70.05665485499998, -4.155206971999974],
						[-71.41961723099996, -4.155206971999974],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200305',
			nombdist: 'LALAQUIZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.72033198899999, -5.258310598999969],
						[-79.72033198899999, -5.097884722999936],
						[-79.59760936399994, -5.097884722999936],
						[-79.59760936399994, -5.258310598999969],
						[-79.72033198899999, -5.258310598999969],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200408',
			nombdist: 'SANTA CATALINA DE MOSSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.93019923899999, -5.195748097999967],
						[-79.93019923899999, -5.066585972999974],
						[-79.81978911399995, -5.066585972999974],
						[-79.81978911399995, -5.195748097999967],
						[-79.93019923899999, -5.195748097999967],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200410',
			nombdist: 'YAMANGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.89094936399994, -5.229615223999929],
						[-79.89094936399994, -5.066556597999977],
						[-79.64220898899998, -5.066556597999977],
						[-79.64220898899998, -5.229615223999929],
						[-79.89094936399994, -5.229615223999929],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200405',
			nombdist: 'MORROPON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.09252348899997, -5.219570347999934],
						[-80.09252348899997, -5.059226597999952],
						[-79.91473823899997, -5.059226597999952],
						[-79.91473823899997, -5.219570347999934],
						[-80.09252348899997, -5.219570347999934],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200301',
			nombdist: 'HUANCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.61878511399993, -5.31196097399993],
						[-79.61878511399993, -5.056650347999948],
						[-79.34722356699996, -5.056650347999948],
						[-79.34722356699996, -5.31196097399993],
						[-79.61878511399993, -5.31196097399993],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			iddist: '200403',
			nombdist: 'CHALACO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.88315036399996, -5.15596084799995],
						[-79.88315036399996, -4.990822222999952],
						[-79.70596498899994, -4.990822222999952],
						[-79.70596498899994, -5.15596084799995],
						[-79.88315036399996, -5.15596084799995],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200607',
			nombdist: 'QUERECOTILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.68082611499995, -4.865294972999948],
						[-80.68082611499995, -4.621740222999961],
						[-80.50925786499994, -4.621740222999961],
						[-80.50925786499994, -4.865294972999948],
						[-80.68082611499995, -4.865294972999948],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200101',
			nombdist: 'PIURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.74160379999995, -5.225937018999957],
						[-80.74160379999995, -4.974927225999977],
						[-80.59416011499997, -4.974927225999977],
						[-80.59416011499997, -5.225937018999957],
						[-80.74160379999995, -5.225937018999957],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200606',
			nombdist: 'MIGUEL CHECA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.85954782099998, -5.293223913999952],
						[-80.85954782099998, -4.885039097999936],
						[-80.69769336499996, -4.885039097999936],
						[-80.69769336499996, -5.293223913999952],
						[-80.85954782099998, -5.293223913999952],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200503',
			nombdist: 'ARENAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.04596098999997, -4.917880847999925],
						[-81.04596098999997, -4.881615222999926],
						[-81.01185548999996, -4.881615222999926],
						[-81.01185548999996, -4.917880847999925],
						[-81.04596098999997, -4.917880847999925],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200602',
			nombdist: 'BELLAVISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.68300786499998, -4.898277347999965],
						[-80.68300786499998, -4.881040972999926],
						[-80.66807611499996, -4.881040972999926],
						[-80.66807611499996, -4.898277347999965],
						[-80.68300786499998, -4.898277347999965],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200608',
			nombdist: 'SALITRAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.70092986499998, -4.89318359799995],
						[-80.70092986499998, -4.789322222999942],
						[-80.65639848999996, -4.789322222999942],
						[-80.65639848999996, -4.89318359799995],
						[-80.70092986499998, -4.89318359799995],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			iddist: '200703',
			nombdist: 'LA BREA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.32823048999995, -4.81640234799994],
						[-81.32823048999995, -4.595359347999931],
						[-80.84821286499994, -4.595359347999931],
						[-80.84821286499994, -4.81640234799994],
						[-81.32823048999995, -4.81640234799994],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200504',
			nombdist: 'COLAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.15049023999995, -5.056507847999967],
						[-81.15049023999995, -4.850339847999976],
						[-81.01689048999998, -4.850339847999976],
						[-81.01689048999998, -5.056507847999967],
						[-81.15049023999995, -5.056507847999967],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			iddist: '200303',
			nombdist: 'EL CARMEN DE LA FRONTERA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.50114648899995, -5.183888641999943],
						[-79.50114648899995, -4.832523472999981],
						[-79.20987386299998, -4.832523472999981],
						[-79.20987386299998, -5.183888641999943],
						[-79.50114648899995, -5.183888641999943],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200507',
			nombdist: 'VICHAYAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.21055273999997, -4.905498097999953],
						[-81.21055273999997, -4.785425722999946],
						[-81.01612498999998, -4.785425722999946],
						[-81.01612498999998, -4.905498097999953],
						[-81.21055273999997, -4.905498097999953],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200202',
			nombdist: 'FRIAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.12198636499994, -5.036699222999971],
						[-80.12198636499994, -4.776933597999971],
						[-79.78848436399994, -4.776933597999971],
						[-79.78848436399994, -5.036699222999971],
						[-80.12198636499994, -5.036699222999971],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200502',
			nombdist: 'AMOTAPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.04310348999996, -4.90958397299994],
						[-81.04310348999996, -4.773197222999954],
						[-80.97393948999996, -4.773197222999954],
						[-80.97393948999996, -4.90958397299994],
						[-81.04310348999996, -4.90958397299994],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200603',
			nombdist: 'IGNACIO ESCUDERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.96825786499994, -4.909433597999964],
						[-80.96825786499994, -4.74837109799995],
						[-80.81952348999994, -4.74837109799995],
						[-80.81952348999994, -4.909433597999964],
						[-80.96825786499994, -4.909433597999964],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200208',
			nombdist: 'SAPILLICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.09639858099996, -4.869195347999948],
						[-80.09639858099996, -4.690564835999964],
						[-79.87759373899996, -4.690564835999964],
						[-79.87759373899996, -4.869195347999948],
						[-80.09639858099996, -4.869195347999948],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200204',
			nombdist: 'LAGUNAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.92019336399994, -4.87942972299993],
						[-79.92019336399994, -4.686939472999938],
						[-79.76958786399996, -4.686939472999938],
						[-79.76958786399996, -4.87942972299993],
						[-79.92019336399994, -4.87942972299993],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200114',
			nombdist: 'TAMBO GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.62995506699997, -5.147314792999964],
						[-80.62995506699997, -4.683228472999929],
						[-80.07680473899995, -4.683228472999929],
						[-80.07680473899995, -5.147314792999964],
						[-80.62995506699997, -5.147314792999964],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			iddist: '200111',
			nombdist: 'LAS LOMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.40689004399997, -4.830587847999936],
						[-80.40689004399997, -4.585041217999958],
						[-80.00830984399994, -4.585041217999958],
						[-80.00830984399994, -4.830587847999936],
						[-80.40689004399997, -4.830587847999936],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200207',
			nombdist: 'PAIMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.15341759499995, -4.742646347999937],
						[-80.15341759499995, -4.564556722999953],
						[-79.87707036399996, -4.564556722999953],
						[-79.87707036399996, -4.742646347999937],
						[-80.15341759499995, -4.742646347999937],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200209',
			nombdist: 'SICCHEZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.80592973899996, -4.617544972999951],
						[-79.80592973899996, -4.521580097999958],
						[-79.74432036399998, -4.521580097999958],
						[-79.74432036399998, -4.617544972999951],
						[-79.80592973899996, -4.617544972999951],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200201',
			nombdist: 'AYABACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.84947073899997, -4.937242222999942],
						[-79.84947073899997, -4.433420097999942],
						[-79.38914261299999, -4.433420097999942],
						[-79.38914261299999, -4.937242222999942],
						[-79.84947073899997, -4.937242222999942],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200205',
			nombdist: 'MONTERO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.90875586399994, -4.710912097999938],
						[-79.90875586399994, -4.583042972999976],
						[-79.76280848899995, -4.583042972999976],
						[-79.76280848899995, -4.710912097999938],
						[-79.90875586399994, -4.710912097999938],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200203',
			nombdist: 'JILILI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.87864848899994, -4.610037097999964],
						[-79.87864848899994, -4.451312472999973],
						[-79.78141011399998, -4.451312472999973],
						[-79.78141011399998, -4.610037097999964],
						[-79.87864848899994, -4.610037097999964],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			iddist: '200701',
			nombdist: 'PARIÑAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.29780073999996, -4.668607472999952],
						[-81.29780073999996, -4.307802722999952],
						[-80.82851561499996, -4.307802722999952],
						[-80.82851561499996, -4.668607472999952],
						[-81.29780073999996, -4.668607472999952],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			iddist: '200210',
			nombdist: 'SUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.29564648899998, -4.610414480999964],
						[-80.29564648899998, -4.285164097999939],
						[-79.83789648899995, -4.285164097999939],
						[-79.83789648899995, -4.610414480999964],
						[-80.29564648899998, -4.610414480999964],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			iddist: '200702',
			nombdist: 'EL ALTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.26028323999998, -4.386412097999937],
						[-81.26028323999998, -4.224374972999954],
						[-80.90892773999997, -4.224374972999954],
						[-80.90892773999997, -4.386412097999937],
						[-81.26028323999998, -4.386412097999937],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			iddist: '200704',
			nombdist: 'LOBITOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.30502736499994, -4.505234347999931],
						[-81.30502736499994, -4.307796847999953],
						[-81.04073823999994, -4.307796847999953],
						[-81.04073823999994, -4.505234347999931],
						[-81.30502736499994, -4.505234347999931],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200605',
			nombdist: 'MARCAVELICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.93770511499997, -4.904187472999979],
						[-80.93770511499997, -4.168796847999943],
						[-80.62903123999996, -4.168796847999943],
						[-80.62903123999996, -4.904187472999979],
						[-80.93770511499997, -4.904187472999979],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			iddist: '200705',
			nombdist: 'LOS ORGANOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.20184961499996, -4.227206972999966],
						[-81.20184961499996, -4.128050721999955],
						[-80.90892773999997, -4.128050721999955],
						[-80.90892773999997, -4.227206972999966],
						[-81.20184961499996, -4.227206972999966],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			iddist: '200501',
			nombdist: 'PAITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.19477923999995, -5.38846097399994],
						[-81.19477923999995, -4.924503972999958],
						[-80.96044606399994, -4.924503972999958],
						[-80.96044606399994, -5.38846097399994],
						[-81.19477923999995, -5.38846097399994],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			iddist: '200801',
			nombdist: 'SECHURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.14955661499994, -6.372080099999948],
						[-81.14955661499994, -5.470353473999978],
						[-80.05298436399994, -5.470353473999978],
						[-80.05298436399994, -6.372080099999948],
						[-81.14955661499994, -6.372080099999948],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			iddist: '090607',
			nombdist: 'PILPICHACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.21851235899999, -13.785130856999956],
						[-75.21851235899999, -13.141519105999976],
						[-74.63282997099998, -13.141519105999976],
						[-74.63282997099998, -13.785130856999956],
						[-75.21851235899999, -13.785130856999956],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090311',
			nombdist: 'SANTO TOMAS DE PATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.55868735899998, -13.200501979999956],
						[-74.55868735899998, -13.076414105999959],
						[-74.38801003899994, -13.076414105999959],
						[-74.38801003899994, -13.200501979999956],
						[-74.55868735899998, -13.200501979999956],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050703',
			nombdist: 'CORONEL CASTAÑEDA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.41961323299995, -14.923488106999969],
						[-73.41961323299995, -14.623083857999973],
						[-72.84682460699997, -14.623083857999973],
						[-72.84682460699997, -14.923488106999969],
						[-73.41961323299995, -14.923488106999969],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			iddist: '200706',
			nombdist: 'MANCORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.09988673999999, -4.224523472999976],
						[-81.09988673999999, -4.087546846999942],
						[-80.90892773999997, -4.087546846999942],
						[-80.90892773999997, -4.224523472999976],
						[-81.09988673999999, -4.224523472999976],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			iddist: '200604',
			nombdist: 'LANCONES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.76975973999998, -4.725203097999952],
						[-80.76975973999998, -4.083128846999955],
						[-80.20148048899995, -4.083128846999955],
						[-80.20148048899995, -4.725203097999952],
						[-80.76975973999998, -4.725203097999952],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			iddist: '140308',
			nombdist: 'OLMOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.62705861499995, -6.45894922399998],
						[-80.62705861499995, -5.48038672399997],
						[-79.59296248899994, -5.48038672399997],
						[-79.59296248899994, -6.45894922399998],
						[-80.62705861499995, -6.45894922399998],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090310',
			nombdist: 'SAN ANTONIO DE ANTAPARCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.46366335899995, -13.097714355999926],
						[-74.46366335899995, -13.038404980999928],
						[-74.38947048399996, -13.038404980999928],
						[-74.38947048399996, -13.097714355999926],
						[-74.46366335899995, -13.097714355999926],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050617',
			nombdist: 'SAN PEDRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.50182985899994, -15.199660857999959],
						[-74.50182985899994, -14.733529356999952],
						[-73.93395723299994, -14.733529356999952],
						[-73.93395723299994, -15.199660857999959],
						[-74.50182985899994, -15.199660857999959],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050708',
			nombdist: 'UPAHUACHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.73126123299994, -15.061562482999932],
						[-73.73126123299994, -14.729087231999927],
						[-73.37377348299998, -14.729087231999927],
						[-73.37377348299998, -15.061562482999932],
						[-73.73126123299994, -15.061562482999932],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050621',
			nombdist: 'SANTA LUCIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.76229860899997, -15.160636981999971],
						[-74.76229860899997, -14.679132856999956],
						[-74.36129085799996, -14.679132856999956],
						[-74.36129085799996, -15.160636981999971],
						[-74.76229860899997, -15.160636981999971],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050615',
			nombdist: 'SAN CRISTOBAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.39354848399995, -14.960857481999938],
						[-74.39354848399995, -14.655218856999966],
						[-74.14865823399998, -14.655218856999966],
						[-74.14865823399998, -14.960857481999938],
						[-74.39354848399995, -14.960857481999938],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090309',
			nombdist: 'JULCAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.47055260899998, -13.050011730999927],
						[-74.47055260899998, -12.957249604999959],
						[-74.37990998399994, -12.957249604999959],
						[-74.37990998399994, -13.050011730999927],
						[-74.47055260899998, -13.050011730999927],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090301',
			nombdist: 'LIRCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.92017923399999, -13.292049855999949],
						[-74.92017923399999, -12.936964854999928],
						[-74.55080598399996, -12.936964854999928],
						[-74.55080598399996, -13.292049855999949],
						[-74.92017923399999, -13.292049855999949],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			iddist: '090305',
			nombdist: 'CHINCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.43897948299997, -13.074185480999972],
						[-74.43897948299997, -12.88727998099995],
						[-74.26986003899998, -12.88727998099995],
						[-74.26986003899998, -13.074185480999972],
						[-74.43897948299997, -13.074185480999972],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051011',
			nombdist: 'SARHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.54036735899996, -13.797560605999934],
						[-74.54036735899996, -13.587818480999942],
						[-74.28908823399996, -13.587818480999942],
						[-74.28908823399996, -13.797560605999934],
						[-74.54036735899996, -13.797560605999934],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051101',
			nombdist: 'VILCAS HUAMAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.01155860899996, -13.721336355999938],
						[-74.01155860899996, -13.574703605999957],
						[-73.75665223299995, -13.574703605999957],
						[-73.75665223299995, -13.721336355999938],
						[-74.01155860899996, -13.721336355999938],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051012',
			nombdist: 'VILCANCHOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.78241998399994, -13.772234355999956],
						[-74.78241998399994, -13.555408230999944],
						[-74.43506635899996, -13.555408230999944],
						[-74.43506635899996, -13.772234355999956],
						[-74.78241998399994, -13.772234355999956],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050619',
			nombdist: 'SANCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.41539760799998, -15.481039107999948],
						[-74.41539760799998, -14.84088985699998],
						[-73.90029298399998, -14.84088985699998],
						[-73.90029298399998, -15.481039107999948],
						[-74.41539760799998, -15.481039107999948],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050806',
			nombdist: 'OYOLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.27259185799994, -15.240902357999971],
						[-73.27259185799994, -14.825359231999926],
						[-72.98274235799994, -14.825359231999926],
						[-72.98274235799994, -15.240902357999971],
						[-73.27259185799994, -15.240902357999971],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050614',
			nombdist: 'SAISA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.53289448399994, -15.113453856999968],
						[-74.53289448399994, -14.770319606999976],
						[-74.23509185899997, -14.770319606999976],
						[-74.23509185899997, -15.113453856999968],
						[-74.53289448399994, -15.113453856999968],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050605',
			nombdist: 'CHAVIÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.99686135899998, -15.134960982999928],
						[-73.99686135899998, -14.76714710799996],
						[-73.79543948299994, -14.76714710799996],
						[-73.79543948299994, -15.134960982999928],
						[-73.99686135899998, -15.134960982999928],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050803',
			nombdist: 'CORCULLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.28682423299995, -15.306607232999966],
						[-73.28682423299995, -15.21787698299994],
						[-73.14672310699996, -15.21787698299994],
						[-73.14672310699996, -15.306607232999966],
						[-73.28682423299995, -15.306607232999966],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050702',
			nombdist: 'CHUMPI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.86247460899995, -15.211385107999945],
						[-73.86247460899995, -14.99371573299993],
						[-73.54351173299995, -14.99371573299993],
						[-73.54351173299995, -15.211385107999945],
						[-73.86247460899995, -15.211385107999945],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050612',
			nombdist: 'OCAÑA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.09647460899998, -14.62729160799995],
						[-75.09647460899998, -14.235479981999958],
						[-74.56946460899997, -14.235479981999958],
						[-74.56946460899997, -14.62729160799995],
						[-75.09647460899998, -14.62729160799995],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050616',
			nombdist: 'SAN JUAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.21970510899996, -14.715289107999979],
						[-74.21970510899996, -14.595626357999947],
						[-74.15862348299999, -14.595626357999947],
						[-74.15862348299999, -14.715289107999979],
						[-74.21970510899996, -14.715289107999979],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050801',
			nombdist: 'PAUSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.44853710799998, -15.405148482999948],
						[-73.44853710799998, -15.212759732999928],
						[-73.27479548299993, -15.212759732999928],
						[-73.27479548299993, -15.405148482999948],
						[-73.44853710799998, -15.405148482999948],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050609',
			nombdist: 'LEONCIO PRADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.84869723399999, -14.878694982999946],
						[-74.84869723399999, -14.499199231999967],
						[-74.37486535899995, -14.499199231999967],
						[-74.37486535899995, -14.878694982999946],
						[-74.84869723399999, -14.878694982999946],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050606',
			nombdist: 'CHIPAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.93930298299995, -14.684755356999972],
						[-73.93930298299995, -14.276379606999967],
						[-73.53246223299993, -14.276379606999967],
						[-73.53246223299993, -14.684755356999972],
						[-73.93930298299995, -14.684755356999972],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050611',
			nombdist: 'LUCANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.47583010899996, -14.73455860799993],
						[-74.47583010899996, -14.267470481999965],
						[-74.14460410899994, -14.267470481999965],
						[-74.14460410899994, -14.73455860799993],
						[-74.47583010899996, -14.73455860799993],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051008',
			nombdist: 'HUAMANQUIQUIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.31555960899993, -13.761398480999958],
						[-74.31555960899993, -13.633918231999928],
						[-74.22300760899998, -13.633918231999928],
						[-74.22300760899998, -13.761398480999958],
						[-74.31555960899993, -13.761398480999958],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050706',
			nombdist: 'PUYUSCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.74194923299996, -15.43765635799997],
						[-73.74194923299996, -15.118263482999964],
						[-73.44021398299998, -15.118263482999964],
						[-73.44021398299998, -15.43765635799997],
						[-73.74194923299996, -15.43765635799997],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051002',
			nombdist: 'ALCAMENCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.28908823399996, -13.71537985699996],
						[-74.28908823399996, -13.628342480999947],
						[-74.11732298399994, -13.628342480999947],
						[-74.11732298399994, -13.71537985699996],
						[-74.28908823399996, -13.71537985699996],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050810',
			nombdist: 'SARA SARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.53229098299994, -15.318898607999927],
						[-73.53229098299994, -15.215447231999974],
						[-73.39779510799997, -15.215447231999974],
						[-73.39779510799997, -15.318898607999927],
						[-73.53229098299994, -15.318898607999927],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050809',
			nombdist: 'SAN JOSE DE USHUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.25777935799994, -15.257775357999947],
						[-73.25777935799994, -15.197828106999964],
						[-73.13168310699996, -15.197828106999964],
						[-73.13168310699996, -15.257775357999947],
						[-73.25777935799994, -15.257775357999947],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050804',
			nombdist: 'LAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.55497073299995, -15.25071485799998],
						[-73.55497073299995, -15.038214357999948],
						[-73.30938285799994, -15.038214357999948],
						[-73.30938285799994, -15.25071485799998],
						[-73.55497073299995, -15.25071485799998],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050603',
			nombdist: 'CABANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.21242548399994, -14.485542606999957],
						[-74.21242548399994, -14.262831981999966],
						[-73.88399523299995, -14.262831981999966],
						[-73.88399523299995, -14.485542606999957],
						[-74.21242548399994, -14.485542606999957],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050807',
			nombdist: 'PARARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.51189648299999, -15.251955232999933],
						[-73.51189648299999, -15.169009482999968],
						[-73.39946685799998, -15.169009482999968],
						[-73.39946685799998, -15.251955232999933],
						[-73.51189648299999, -15.251955232999933],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050705',
			nombdist: 'PULLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.25717823299993, -15.630064982999954],
						[-74.25717823299993, -15.127712857999938],
						[-73.68806460799993, -15.127712857999938],
						[-73.68806460799993, -15.630064982999954],
						[-74.25717823299993, -15.630064982999954],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050805',
			nombdist: 'MARCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.45088448299998, -15.155601607999927],
						[-73.45088448299998, -15.029617231999964],
						[-73.32244335799999, -15.029617231999964],
						[-73.32244335799999, -15.155601607999927],
						[-73.45088448299998, -15.155601607999927],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050802',
			nombdist: 'COLTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.33871098299994, -15.27216598299998],
						[-73.33871098299994, -15.007205107999937],
						[-73.14862698199994, -15.007205107999937],
						[-73.14862698199994, -15.27216598299998],
						[-73.33871098299994, -15.27216598299998],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			iddist: '050808',
			nombdist: 'SAN JAVIER DE ALPABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.34245310799997, -15.12792935799996],
						[-73.34245310799997, -14.974164232999954],
						[-73.24973398299994, -14.974164232999954],
						[-73.24973398299994, -15.12792935799996],
						[-73.34245310799997, -15.12792935799996],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050701',
			nombdist: 'CORACORA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.90030273299999, -15.09742773299996],
						[-73.90030273299999, -14.50721860699997],
						[-73.50701173299996, -14.50721860699997],
						[-73.50701173299996, -15.09742773299996],
						[-73.90030273299999, -15.09742773299996],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050613',
			nombdist: 'OTOCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.88424873399998, -14.615816981999956],
						[-74.88424873399998, -14.373919231999935],
						[-74.40462848399994, -14.373919231999935],
						[-74.40462848399994, -14.615816981999956],
						[-74.88424873399998, -14.615816981999956],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050604',
			nombdist: 'CARMEN SALCEDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.15849285899998, -14.583910481999965],
						[-74.15849285899998, -14.32138673199995],
						[-73.85653423299993, -14.32138673199995],
						[-73.85653423299993, -14.583910481999965],
						[-74.15849285899998, -14.583910481999965],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050607',
			nombdist: 'HUAC-HUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.09079485899997, -14.27499810699993],
						[-75.09079485899997, -14.06915235699995],
						[-74.88893748399994, -14.06915235699995],
						[-74.88893748399994, -14.27499810699993],
						[-75.09079485899997, -14.27499810699993],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050608',
			nombdist: 'LARAMATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.09813773499997, -14.487876981999932],
						[-75.09813773499997, -14.06806648199995],
						[-74.47131373299999, -14.06806648199995],
						[-74.47131373299999, -14.487876981999932],
						[-75.09813773499997, -14.487876981999932],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050610',
			nombdist: 'LLAUTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.13982610899996, -14.434073356999932],
						[-75.13982610899996, -14.067193356999951],
						[-74.75355773399997, -14.067193356999951],
						[-74.75355773399997, -14.434073356999932],
						[-75.13982610899996, -14.434073356999932],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050601',
			nombdist: 'PUQUIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.17775873399995, -14.85786135799998],
						[-74.17775873399995, -14.512858731999927],
						[-73.82561073399995, -14.512858731999927],
						[-73.82561073399995, -14.85786135799998],
						[-74.17775873399995, -14.85786135799998],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			iddist: '050205',
			nombdist: 'PARAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.90457985899997, -13.597275356999944],
						[-74.90457985899997, -13.325071105999939],
						[-74.53770510899994, -13.325071105999939],
						[-74.53770510899994, -13.597275356999944],
						[-74.90457985899997, -13.597275356999944],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050106',
			nombdist: 'OCROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.99441905299994, -13.501269795999974],
						[-73.99441905299994, -13.258618231999947],
						[-73.80704552799995, -13.258618231999947],
						[-73.80704552799995, -13.501269795999974],
						[-73.99441905299994, -13.501269795999974],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050105',
			nombdist: 'CHIARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.27411995999995, -13.538480480999965],
						[-74.27411995999995, -13.201546151999935],
						[-74.05027003799995, -13.201546151999935],
						[-74.05027003799995, -13.538480480999965],
						[-74.27411995999995, -13.538480480999965],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050506',
			nombdist: 'LUIS CARRANZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.96379998399993, -13.314831546999926],
						[-73.96379998399993, -13.171125855999946],
						[-73.80584249099996, -13.171125855999946],
						[-73.80584249099996, -13.314831546999926],
						[-73.96379998399993, -13.314831546999926],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050707',
			nombdist: 'SAN FRANCISCO DE RAVACAYCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.45845235799999, -15.064880607999953],
						[-73.45845235799999, -14.92008360799997],
						[-73.25586510699998, -14.92008360799997],
						[-73.25586510699998, -15.064880607999953],
						[-73.45845235799999, -15.064880607999953],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050911',
			nombdist: 'SORAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.82312310799995, -14.350734356999965],
						[-73.82312310799995, -14.076521481999976],
						[-73.57773048299998, -14.076521481999976],
						[-73.57773048299998, -14.350734356999965],
						[-73.82312310799995, -14.350734356999965],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050910',
			nombdist: 'SANTIAGO DE PAUCARAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.70374998299997, -14.137177731999941],
						[-73.70374998299997, -14.032669981999959],
						[-73.61303510799996, -14.032669981999959],
						[-73.61303510799996, -14.137177731999941],
						[-73.70374998299997, -14.137177731999941],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051003',
			nombdist: 'APONGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.08757373399999, -14.186701230999972],
						[-74.08757373399999, -13.982515106999927],
						[-73.88262885799998, -13.982515106999927],
						[-73.88262885799998, -14.186701230999972],
						[-74.08757373399999, -14.186701230999972],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			iddist: '050704',
			nombdist: 'PACAPAUSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.48119548299996, -15.039397107999946],
						[-73.48119548299996, -14.88607335699993],
						[-73.25420373199995, -14.88607335699993],
						[-73.25420373199995, -15.039397107999946],
						[-73.48119548299996, -15.039397107999946],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051004',
			nombdist: 'ASQUIPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.99863223399996, -14.119656106999969],
						[-73.99863223399996, -14.027992230999928],
						[-73.88894810799997, -14.027992230999928],
						[-73.88894810799997, -14.119656106999969],
						[-73.99863223399996, -14.119656106999969],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050602',
			nombdist: 'AUCARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.42323823399994, -14.302892981999946],
						[-74.42323823399994, -14.019199105999974],
						[-73.89658398299997, -14.019199105999974],
						[-73.89658398299997, -14.302892981999946],
						[-74.42323823399994, -14.302892981999946],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050906',
			nombdist: 'MORCOLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.98985423399995, -14.323250606999977],
						[-73.98985423399995, -14.011888731999932],
						[-73.71290435799995, -14.011888731999932],
						[-73.71290435799995, -14.323250606999977],
						[-73.98985423399995, -14.323250606999977],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			iddist: '050620',
			nombdist: 'SANTA ANA DE HUAYCAHUACHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.97567560899995, -14.262831981999966],
						[-73.97567560899995, -14.185727106999934],
						[-73.87925460899999, -14.185727106999934],
						[-73.87925460899999, -14.262831981999966],
						[-73.97567560899995, -14.262831981999966],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051001',
			nombdist: 'HUANCAPI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.18901623399995, -13.908193231999974],
						[-74.18901623399995, -13.648296105999975],
						[-73.99332235799994, -13.648296105999975],
						[-73.99332235799994, -13.908193231999974],
						[-74.18901623399995, -13.908193231999974],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			iddist: '050206',
			nombdist: 'TOTOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.56233848399995, -13.615503856999965],
						[-74.56233848399995, -13.503510355999936],
						[-74.43263673399997, -13.503510355999936],
						[-74.43263673399997, -13.615503856999965],
						[-74.56233848399995, -13.615503856999965],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050104',
			nombdist: 'CARMEN ALTO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.26012003799997, -13.241340213999933],
						[-74.26012003799997, -13.168677319999972],
						[-74.20980548299997, -13.168677319999972],
						[-74.20980548299997, -13.241340213999933],
						[-74.26012003799997, -13.241340213999933],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050110',
			nombdist: 'SAN JUAN BAUTISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.24150761599998, -13.241723652999951],
						[-74.24150761599998, -13.163883974999976],
						[-74.19050962099993, -13.163883974999976],
						[-74.19050962099993, -13.241723652999951],
						[-74.24150761599998, -13.241723652999951],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050102',
			nombdist: 'ACOCRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.12335744599994, -13.44416412499993],
						[-74.12335744599994, -13.160479180999971],
						[-73.91944798399999, -13.160479180999971],
						[-73.91944798399999, -13.44416412499993],
						[-74.12335744599994, -13.44416412499993],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051102',
			nombdist: 'ACCOMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.93709235799997, -13.850664105999954],
						[-73.93709235799997, -13.763740730999928],
						[-73.79769935799999, -13.763740730999928],
						[-73.79769935799999, -13.850664105999954],
						[-73.93709235799997, -13.850664105999954],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050405',
			nombdist: 'LURICOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.33325348399995, -12.937693354999965],
						[-74.33325348399995, -12.77272460499995],
						[-74.21137698399997, -12.77272460499995],
						[-74.21137698399997, -12.937693354999965],
						[-74.33325348399995, -12.937693354999965],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			iddist: '050902',
			nombdist: 'BELEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.80471148299995, -13.835550356999931],
						[-73.80471148299995, -13.763366105999978],
						[-73.72425985799998, -13.763366105999978],
						[-73.72425985799998, -13.835550356999931],
						[-73.80471148299995, -13.835550356999931],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050410',
			nombdist: 'UCHURACCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.20388125199997, -12.875192105999929],
						[-74.20388125199997, -12.658557642999938],
						[-73.98764523399996, -12.658557642999938],
						[-73.98764523399996, -12.875192105999929],
						[-74.20388125199997, -12.875192105999929],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050507',
			nombdist: 'SANTA ROSA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.90603848299997, -12.885568604999946],
						[-73.90603848299997, -12.636647480999954],
						[-73.65583898299997, -12.636647480999954],
						[-73.65583898299997, -12.885568604999946],
						[-73.90603848299997, -12.885568604999946],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050503',
			nombdist: 'AYNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.99874360799998, -12.867322229999957],
						[-73.99874360799998, -12.530754854999941],
						[-73.76003660799995, -12.530754854999941],
						[-73.76003660799995, -12.867322229999957],
						[-73.99874360799998, -12.867322229999957],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			iddist: '050201',
			nombdist: 'CANGALLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.20694723299994, -13.684861355999942],
						[-74.20694723299994, -13.509027355999933],
						[-74.03584460899998, -13.509027355999933],
						[-74.03584460899998, -13.684861355999942],
						[-74.20694723299994, -13.684861355999942],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051006',
			nombdist: 'CAYARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.03857198399999, -13.840062480999961],
						[-74.03857198399999, -13.747543105999966],
						[-73.93709235799997, -13.747543105999966],
						[-73.93709235799997, -13.840062480999961],
						[-74.03857198399999, -13.840062480999961],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051104',
			nombdist: 'CONCEPCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.98925648399995, -13.624868105999951],
						[-73.98925648399995, -13.465229644999965],
						[-73.80360723299998, -13.465229644999965],
						[-73.80360723299998, -13.624868105999951],
						[-73.98925648399995, -13.624868105999951],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051108',
			nombdist: 'VISCHONGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.08047003899998, -13.693160106999926],
						[-74.08047003899998, -13.408886859999939],
						[-73.92792448299997, -13.408886859999939],
						[-73.92792448299997, -13.693160106999926],
						[-74.08047003899998, -13.693160106999926],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051009',
			nombdist: 'HUANCARAYLLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.25405660899997, -13.817552856999953],
						[-74.25405660899997, -13.678722230999938],
						[-74.09669810799994, -13.678722230999938],
						[-74.09669810799994, -13.817552856999953],
						[-74.25405660899997, -13.817552856999953],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			iddist: '050203',
			nombdist: 'LOS MOROCHUCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.33600851699998, -13.599945605999949],
						[-74.33600851699998, -13.391796598999974],
						[-74.14891460799998, -13.391796598999974],
						[-74.14891460799998, -13.599945605999949],
						[-74.33600851699998, -13.599945605999949],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			iddist: '051007',
			nombdist: 'COLCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.10549198299998, -13.764835605999963],
						[-74.10549198299998, -13.666445855999939],
						[-73.98020973399997, -13.666445855999939],
						[-73.98020973399997, -13.764835605999963],
						[-74.10549198299998, -13.764835605999963],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			iddist: '050202',
			nombdist: 'CHUSCHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.62860148399994, -13.633918231999928],
						[-74.62860148399994, -13.345411832999957],
						[-74.27812310799999, -13.345411832999957],
						[-74.27812310799999, -13.633918231999928],
						[-74.62860148399994, -13.633918231999928],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			iddist: '051107',
			nombdist: 'SAURAMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.82882973299996, -13.755558230999952],
						[-73.82882973299996, -13.65073685599998],
						[-73.66946898299994, -13.65073685599998],
						[-73.66946898299994, -13.755558230999952],
						[-73.82882973299996, -13.755558230999952],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			iddist: '050204',
			nombdist: 'MARIA PARADO DE BELLIDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.34384910899996, -13.634700230999954],
						[-74.34384910899996, -13.483025730999941],
						[-74.19081898299999, -13.483025730999941],
						[-74.19081898299999, -13.634700230999954],
						[-74.34384910899996, -13.634700230999954],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050114',
			nombdist: 'VINCHOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.68940908699994, -13.453140019999978],
						[-74.68940908699994, -13.150360018999947],
						[-74.27363470699999, -13.150360018999947],
						[-74.27363470699999, -13.453140019999978],
						[-74.68940908699994, -13.453140019999978],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050112',
			nombdist: 'SOCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.35038595799995, -13.391796598999974],
						[-74.35038595799995, -13.130060018999927],
						[-74.23659323399994, -13.130060018999927],
						[-74.23659323399994, -13.391796598999974],
						[-74.35038595799995, -13.391796598999974],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050113',
			nombdist: 'TAMBILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.20015003899994, -13.285008120999976],
						[-74.20015003899994, -13.107812167999953],
						[-74.08559003799996, -13.107812167999953],
						[-74.08559003799996, -13.285008120999976],
						[-74.20015003899994, -13.285008120999976],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050115',
			nombdist: 'JESUS NAZARENO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.23179418099994, -13.161807307999936],
						[-74.23179418099994, -13.084449887999938],
						[-74.18437003799994, -13.084449887999938],
						[-74.18437003799994, -13.161807307999936],
						[-74.23179418099994, -13.161807307999936],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050101',
			nombdist: 'AYACUCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.28939179699995, -13.205960018999974],
						[-74.28939179699995, -13.067462945999978],
						[-74.21119698299998, -13.067462945999978],
						[-74.21119698299998, -13.205960018999974],
						[-74.28939179699995, -13.205960018999974],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090720',
			nombdist: 'ANDAYMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.76931003899995, -12.373169979999943],
						[-74.76931003899995, -12.241768604999947],
						[-74.55067885899996, -12.241768604999947],
						[-74.55067885899996, -12.373169979999943],
						[-74.76931003899995, -12.373169979999943],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090719',
			nombdist: 'QUICHUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.82708785899996, -12.527159979999965],
						[-74.82708785899996, -12.416221729999961],
						[-74.62936098399996, -12.416221729999961],
						[-74.62936098399996, -12.527159979999965],
						[-74.82708785899996, -12.527159979999965],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080912',
			nombdist: 'VILLA VIRGEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.52195235799996, -13.139780018999943],
						[-73.52195235799996, -12.956995980999977],
						[-73.17242139199993, -12.956995980999977],
						[-73.17242139199993, -13.139780018999943],
						[-73.52195235799996, -13.139780018999943],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			iddist: '030220',
			nombdist: 'JOSE MARIA ARGUEDAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.38668425299994, -13.901307060999955],
						[-73.38668425299994, -13.707975934999979],
						[-73.24501035799994, -13.707975934999979],
						[-73.24501035799994, -13.901307060999955],
						[-73.38668425299994, -13.901307060999955],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050411',
			nombdist: 'PUCACOLPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.58117698399997, -12.453995845999941],
						[-74.58117698399997, -12.167879979999952],
						[-74.18663823299994, -12.167879979999952],
						[-74.18663823299994, -12.453995845999941],
						[-74.58117698399997, -12.453995845999941],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050116',
			nombdist: 'ANDRES AVELINO CACERES DORREGARAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.21962613599999, -13.174885227999937],
						[-74.21962613599999, -13.133800018999978],
						[-74.18661517199996, -13.133800018999978],
						[-74.18661517199996, -13.174885227999937],
						[-74.21962613599999, -13.174885227999937],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050109',
			nombdist: 'SAN JOSE DE TICLLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.39026998399999, -13.174389321999968],
						[-74.39026998399999, -13.063815764999958],
						[-74.27347003899996, -13.063815764999958],
						[-74.27347003899996, -13.174389321999968],
						[-74.39026998399999, -13.174389321999968],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050103',
			nombdist: 'ACOS VINCHOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.12728493299994, -13.207541409999976],
						[-74.12728493299994, -13.032039099999963],
						[-73.96880260799998, -13.032039099999963],
						[-73.96880260799998, -13.207541409999976],
						[-74.12728493299994, -13.207541409999976],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050111',
			nombdist: 'SANTIAGO DE PISCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.41218948399995, -13.12930001899997],
						[-74.41218948399995, -13.021172355999965],
						[-74.29892288299999, -13.021172355999965],
						[-74.29892288299999, -13.12930001899997],
						[-74.41218948399995, -13.12930001899997],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050412',
			nombdist: 'CHACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.28790991699998, -12.864882854999962],
						[-74.28790991699998, -12.705290168999966],
						[-74.13853135899996, -12.705290168999966],
						[-74.13853135899996, -12.864882854999962],
						[-74.28790991699998, -12.864882854999962],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050107',
			nombdist: 'PACAYCASA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.27904827499998, -13.087041417999956],
						[-74.27904827499998, -13.002727296999979],
						[-74.17374086999996, -13.002727296999979],
						[-74.17374086999996, -13.087041417999956],
						[-74.27904827499998, -13.087041417999956],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			iddist: '050108',
			nombdist: 'QUINUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.22919563499994, -13.131850128999929],
						[-74.22919563499994, -12.984946105999938],
						[-74.06590114699998, -12.984946105999938],
						[-74.06590114699998, -13.131850128999929],
						[-74.22919563499994, -13.131850128999929],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040302',
			nombdist: 'ACARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.72184067999996, -15.656371232999959],
						[-74.72184067999996, -15.124123607999934],
						[-74.38773773299994, -15.124123607999934],
						[-74.38773773299994, -15.656371232999959],
						[-74.72184067999996, -15.656371232999959],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			iddist: '040305',
			nombdist: 'BELLA UNION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.90834810899997, -15.656371232999959],
						[-74.90834810899997, -15.098054857999955],
						[-74.62684110899994, -15.098054857999955],
						[-74.62684110899994, -15.656371232999959],
						[-74.90834810899997, -15.656371232999959],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			iddist: '070107',
			nombdist: 'MI PERU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.13041373699997, -11.865374633999977],
						[-77.13041373699997, -11.841718253999943],
						[-77.11069920999995, -11.841718253999943],
						[-77.11069920999995, -11.865374633999977],
						[-77.13041373699997, -11.865374633999977],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1608',
			nombprov: 'PUTUMAYO',
			iddist: '160804',
			nombdist: 'YAGUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.12476490599994, -3.424217816999942],
						[-72.12476490599994, -2.207853470999964],
						[-70.06005960499994, -2.207853470999964],
						[-70.06005960499994, -3.424217816999942],
						[-72.12476490599994, -3.424217816999942],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1608',
			nombprov: 'PUTUMAYO',
			iddist: '160802',
			nombdist: 'ROSA PANDURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.88734576599995, -2.306069841999943],
						[-74.88734576599995, -0.914722187999928],
						[-73.06978510799996, -0.914722187999928],
						[-73.06978510799996, -2.306069841999943],
						[-74.88734576599995, -2.306069841999943],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050401',
			nombdist: 'HUANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.29941998399994, -12.984511729999952],
						[-74.29941998399994, -12.818003354999973],
						[-74.12871623399997, -12.818003354999973],
						[-74.12871623399997, -12.984511729999952],
						[-74.29941998399994, -12.984511729999952],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080911',
			nombdist: 'INKAWASI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.45502515699997, -13.45243835599996],
						[-73.45502515699997, -13.121003282999936],
						[-73.01475712099995, -13.121003282999936],
						[-73.01475712099995, -13.45243835599996],
						[-73.45502515699997, -13.45243835599996],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090718',
			nombdist: 'TINTAY PUNCU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.61529560899999, -12.266834479999943],
						[-74.61529560899999, -12.101882229999944],
						[-74.34314860899997, -12.101882229999944],
						[-74.34314860899997, -12.266834479999943],
						[-74.61529560899999, -12.266834479999943],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			iddist: '050402',
			nombdist: 'AYAHUANCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.41518998399994, -12.646353855999962],
						[-74.41518998399994, -12.410320018999926],
						[-74.19250760899996, -12.410320018999926],
						[-74.19250760899996, -12.646353855999962],
						[-74.41518998399994, -12.646353855999962],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120609',
			nombdist: 'VIZCATAN DEL ENE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.36566593999999, -12.333916854999927],
						[-74.36566593999999, -12.062830952999946],
						[-73.98045160899994, -12.062830952999946],
						[-73.98045160899994, -12.333916854999927],
						[-74.36566593999999, -12.333916854999927],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080913',
			nombdist: 'VILLA KINTIARINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.57655400799996, -13.000884730999928],
						[-73.57655400799996, -12.819300018999968],
						[-73.37128323299999, -12.819300018999968],
						[-73.37128323299999, -13.000884730999928],
						[-73.57655400799996, -13.000884730999928],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090722',
			nombdist: 'PICHOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.99443140599993, -12.255466148999972],
						[-74.99443140599993, -12.106065354999942],
						[-74.86479110899995, -12.106065354999942],
						[-74.86479110899995, -12.255466148999972],
						[-74.99443140599993, -12.255466148999972],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100607',
			nombdist: 'PUCAYACU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.17084273999996, -8.843227963999936],
						[-76.17084273999996, -8.30472442599995],
						[-75.94229885999994, -8.30472442599995],
						[-75.94229885999994, -8.843227963999936],
						[-76.17084273999996, -8.843227963999936],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100609',
			nombdist: 'PUEBLO NUEVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.21546873599993, -9.158456976999958],
						[-76.21546873599993, -9.004869473999975],
						[-75.83787649599998, -9.004869473999975],
						[-75.83787649599998, -9.158456976999958],
						[-76.21546873599993, -9.158456976999958],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100610',
			nombdist: 'SANTO DOMINGO DE ANDA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.10124636199998, -9.08123188999997],
						[-76.10124636199998, -8.85689457999996],
						[-75.88376730599998, -8.85689457999996],
						[-75.88376730599998, -9.08123188999997],
						[-76.10124636199998, -9.08123188999997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2111',
			nombprov: 'SAN ROMAN',
			iddist: '211105',
			nombdist: 'SAN MIGUEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.19092482799994, -15.484876980999957],
						[-70.19092482799994, -15.333819999999946],
						[-70.07064714799998, -15.333819999999946],
						[-70.07064714799998, -15.484876980999957],
						[-70.19092482799994, -15.484876980999957],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			iddist: '150806',
			nombdist: 'HUAURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.63767186199993, -11.11007010399993],
						[-77.63767186199993, -10.878088477999938],
						[-77.32431511199997, -10.878088477999938],
						[-77.32431511199997, -11.11007010399993],
						[-77.63767186199993, -11.11007010399993],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			iddist: '230111',
			nombdist: 'LA YARADA LOS PALOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.58529506199994, -18.35092773599996],
						[-70.58529506199994, -18.07758114799998],
						[-70.31610965299996, -18.07758114799998],
						[-70.31610965299996, -18.35092773599996],
						[-70.58529506199994, -18.35092773599996],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1007',
			nombprov: 'MARAÑON',
			iddist: '100704',
			nombdist: 'LA MORADA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.65263689999995, -9.054501976999973],
						[-76.65263689999995, -8.629645108999966],
						[-76.18985161099994, -8.629645108999966],
						[-76.18985161099994, -9.054501976999973],
						[-76.65263689999995, -9.054501976999973],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1007',
			nombprov: 'MARAÑON',
			iddist: '100705',
			nombdist: 'SANTA ROSA DE ALTO YANAJANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.72282729399996, -9.017801505999955],
						[-76.72282729399996, -8.534831076999978],
						[-76.26153510999995, -8.534831076999978],
						[-76.26153510999995, -9.017801505999955],
						[-76.72282729399996, -9.017801505999955],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			iddist: '100113',
			nombdist: 'SAN PABLO DE PILLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.08256767099994, -9.83152522699993],
						[-76.08256767099994, -9.560359977999951],
						[-75.79533473499998, -9.560359977999951],
						[-75.79533473499998, -9.83152522699993],
						[-76.08256767099994, -9.83152522699993],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090721',
			nombdist: 'ROBLE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.56205748399998, -12.31246447999996],
						[-74.56205748399998, -12.159773714999972],
						[-74.37606998299998, -12.159773714999972],
						[-74.37606998299998, -12.31246447999996],
						[-74.56205748399998, -12.31246447999996],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030609',
			nombdist: 'ROCCHACC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.65807311299994, -13.49902360699997],
						[-73.65807311299994, -13.415801316999932],
						[-73.56466895099999, -13.415801316999932],
						[-73.56466895099999, -13.49902360699997],
						[-73.65807311299994, -13.49902360699997],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100604',
			nombdist: 'JOSE CRESPO Y CASTILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.48022260999994, -9.213951227999928],
						[-76.48022260999994, -8.488164394999956],
						[-75.92164396199996, -8.488164394999956],
						[-75.92164396199996, -9.213951227999928],
						[-76.48022260999994, -9.213951227999928],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100603',
			nombdist: 'HERMILIO VALDIZAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.00034960999994, -9.201549874999955],
						[-76.00034960999994, -9.07629297699998],
						[-75.79522198199999, -9.07629297699998],
						[-75.79522198199999, -9.201549874999955],
						[-76.00034960999994, -9.201549874999955],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100602',
			nombdist: 'DANIEL ALOMIA ROBLES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.96254298499997, -9.61750785299995],
						[-75.96254298499997, -9.16238872699995],
						[-75.62771673499998, -9.16238872699995],
						[-75.62771673499998, -9.61750785299995],
						[-75.96254298499997, -9.61750785299995],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030610',
			nombdist: 'EL PORVENIR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.60388823599999, -13.44138123099998],
						[-73.60388823599999, -13.338021924999964],
						[-73.51013573299997, -13.338021924999964],
						[-73.51013573299997, -13.44138123099998],
						[-73.60388823599999, -13.44138123099998],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100601',
			nombdist: 'RUPA-RUPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.23486323499998, -9.327658227999962],
						[-76.23486323499998, -9.07062697799995],
						[-75.93432610999997, -9.07062697799995],
						[-75.93432610999997, -9.327658227999962],
						[-76.23486323499998, -9.327658227999962],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100606',
			nombdist: 'MARIANO DAMASO BERAUN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.23534573499995, -9.508109226999977],
						[-76.23534573499995, -9.281417976999933],
						[-75.81574998499997, -9.281417976999933],
						[-75.81574998499997, -9.508109226999977],
						[-76.23534573499995, -9.508109226999977],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100605',
			nombdist: 'LUYANDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.02440623499996, -9.330244101999938],
						[-76.02440623499996, -9.151904351999974],
						[-75.85361523499995, -9.151904351999974],
						[-75.85361523499995, -9.330244101999938],
						[-76.02440623499996, -9.330244101999938],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			iddist: '090723',
			nombdist: 'SANTIAGO DE TUCUMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.91528548399998, -12.355283287999953],
						[-74.91528548399998, -12.27223822999997],
						[-74.85483448399998, -12.27223822999997],
						[-74.85483448399998, -12.355283287999953],
						[-74.91528548399998, -12.355283287999953],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			iddist: '050505',
			nombdist: 'CHUNGUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.74009185799997, -13.387720730999945],
						[-73.74009185799997, -13.097739105999949],
						[-73.40223335799993, -13.097739105999949],
						[-73.40223335799993, -13.387720730999945],
						[-73.74009185799997, -13.387720730999945],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			iddist: '030611',
			nombdist: 'LOS CHANKAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.84744613899994, -13.47017582899997],
						[-73.84744613899994, -13.310698337999952],
						[-73.72084709699999, -13.310698337999952],
						[-73.72084709699999, -13.47017582899997],
						[-73.84744613899994, -13.47017582899997],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			iddist: '080902',
			nombdist: 'ECHARATE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.65149185799999, -13.015585105999946],
						[-73.65149185799999, -11.534713978999946],
						[-71.94567123199994, -11.534713978999946],
						[-71.94567123199994, -13.015585105999946],
						[-73.65149185799999, -13.015585105999946],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			iddist: '100608',
			nombdist: 'CASTILLO GRANDE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.09693049599997, -9.307768067999973],
						[-76.09693049599997, -9.125975104999952],
						[-75.99420510999994, -9.125975104999952],
						[-75.99420510999994, -9.307768067999973],
						[-76.09693049599997, -9.307768067999973],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120606',
			nombdist: 'PANGOA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.72957112499995, -12.193306182999947],
						[-74.72957112499995, -11.317509391999977],
						[-73.97946506799997, -11.317509391999977],
						[-73.97946506799997, -12.193306182999947],
						[-74.72957112499995, -12.193306182999947],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			iddist: '120604',
			nombdist: 'MAZAMARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.61221042799997, -11.934681152999929],
						[-74.61221042799997, -11.147892978999948],
						[-73.92462839899997, -11.147892978999948],
						[-73.92462839899997, -11.934681152999929],
						[-74.61221042799997, -11.934681152999929],
					],
				],
			},
		},
	],
	Provincias: [
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0101',
			nombprov: 'CHACHAPOYAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.03815423699996, -6.986759349999943],
						[-78.03815423699996, -5.942644473999962],
						[-77.46898336099997, -5.942644473999962],
						[-77.46898336099997, -6.986759349999943],
						[-78.03815423699996, -6.986759349999943],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0102',
			nombprov: 'BAGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.71089498799995, -5.733679973999926],
						[-78.71089498799995, -4.499451346999933],
						[-78.05674911199998, -4.499451346999933],
						[-78.05674911199998, -5.733679973999926],
						[-78.71089498799995, -5.733679973999926],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0103',
			nombprov: 'BONGARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13522461299993, -6.130531223999981],
						[-78.13522461299993, -5.133017597999981],
						[-77.65189061199999, -5.133017597999981],
						[-77.65189061199999, -6.130531223999981],
						[-78.13522461299993, -6.130531223999981],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0104',
			nombprov: 'CONDORCANQUI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.65261586299994, -5.413853472999961],
						[-78.65261586299994, -2.986125095999967],
						[-77.53787736199996, -2.986125095999967],
						[-77.53787736199996, -5.413853472999961],
						[-78.65261586299994, -5.413853472999961],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0105',
			nombprov: 'LUYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.41972811299996, -6.745910099999946],
						[-78.41972811299996, -5.902560598999969],
						[-77.79739998699995, -5.902560598999969],
						[-77.79739998699995, -6.745910099999946],
						[-78.41972811299996, -6.745910099999946],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0106',
			nombprov: 'RODRIGUEZ DE MENDOZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.75226323699997, -6.726775349999968],
						[-77.75226323699997, -5.999718223999935],
						[-77.13230273599999, -5.999718223999935],
						[-77.13230273599999, -6.726775349999968],
						[-77.75226323699997, -6.726775349999968],
					],
				],
			},
		},
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			idprov: '0107',
			nombprov: 'UTCUBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.71217773799998, -6.188424599999962],
						[-78.71217773799998, -5.328921848999926],
						[-77.93035161199998, -5.328921848999926],
						[-77.93035161199998, -6.188424599999962],
						[-78.71217773799998, -6.188424599999962],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0201',
			nombprov: 'HUARAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.04189061299996, -9.800761352999928],
						[-78.04189061299996, -9.346607476999964],
						[-77.26562361099997, -9.346607476999964],
						[-77.26562361099997, -9.800761352999928],
						[-78.04189061299996, -9.800761352999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0202',
			nombprov: 'AIJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.96140236199994, -9.914283227999931],
						[-77.96140236199994, -9.620830102999946],
						[-77.47865498599998, -9.620830102999946],
						[-77.47865498599998, -9.914283227999931],
						[-77.96140236199994, -9.914283227999931],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0203',
			nombprov: 'ANTONIO RAYMONDI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17387123699996, -9.300919976999978],
						[-77.17387123699996, -8.971515601999954],
						[-76.94181048599995, -8.971515601999954],
						[-76.94181048599995, -9.300919976999978],
						[-77.17387123699996, -9.300919976999978],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0204',
			nombprov: 'ASUNCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.53354723599995, -9.324105601999975],
						[-77.53354723599995, -9.056789101999925],
						[-77.26205161199994, -9.056789101999925],
						[-77.26205161199994, -9.324105601999975],
						[-77.53354723599995, -9.324105601999975],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0205',
			nombprov: 'BOLOGNESI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.69960811199996, -10.483099977999927],
						[-77.69960811199996, -9.702568352999947],
						[-76.80717186099997, -9.702568352999947],
						[-76.80717186099997, -10.483099977999927],
						[-77.69960811199996, -10.483099977999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0206',
			nombprov: 'CARHUAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77669623699995, -9.452799476999928],
						[-77.77669623699995, -9.08191235199996],
						[-77.31813423599993, -9.08191235199996],
						[-77.31813423599993, -9.452799476999928],
						[-77.77669623699995, -9.452799476999928],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0207',
			nombprov: 'CARLOS FERMIN FITZCARRALD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.36602348699995, -9.208715476999942],
						[-77.36602348699995, -8.895384726999964],
						[-77.10249023599994, -8.895384726999964],
						[-77.10249023599994, -9.208715476999942],
						[-77.36602348699995, -9.208715476999942],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0208',
			nombprov: 'CASMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.43372848699994, -9.795281227999965],
						[-78.43372848699994, -9.200922726999977],
						[-77.90099611199997, -9.200922726999977],
						[-77.90099611199997, -9.795281227999965],
						[-78.43372848699994, -9.795281227999965],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0209',
			nombprov: 'CORONGO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.13048998699998, -8.74761910199993],
						[-78.13048998699998, -8.379027476999966],
						[-77.68866061199998, -8.379027476999966],
						[-77.68866061199998, -8.74761910199993],
						[-78.13048998699998, -8.74761910199993],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0210',
			nombprov: 'HUARI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.33455623699996, -9.841380852999976],
						[-77.33455623699996, -9.070605476999958],
						[-76.72574411099998, -9.070605476999958],
						[-76.72574411099998, -9.841380852999976],
						[-77.33455623699996, -9.841380852999976],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0211',
			nombprov: 'HUARMEY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.24378511199996, -10.612055273999943],
						[-78.24378511199996, -9.689109351999946],
						[-77.55025386199998, -9.689109351999946],
						[-77.55025386199998, -10.612055273999943],
						[-78.24378511199996, -10.612055273999943],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0212',
			nombprov: 'HUAYLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.07383011199994, -9.261451351999938],
						[-78.07383011199994, -8.65527210199997],
						[-77.57426573699996, -8.65527210199997],
						[-77.57426573699996, -9.261451351999938],
						[-78.07383011199994, -9.261451351999938],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0213',
			nombprov: 'MARISCAL LUZURIAGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.56345311199993, -9.008224601999927],
						[-77.56345311199993, -8.702824225999962],
						[-77.15953323599996, -8.702824225999962],
						[-77.15953323599996, -9.008224601999927],
						[-77.56345311199993, -9.008224601999927],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0214',
			nombprov: 'OCROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74669361699995, -10.786449562999962],
						[-77.74669361699995, -10.252638977999936],
						[-77.15820898599998, -10.252638977999936],
						[-77.15820898599998, -10.786449562999962],
						[-77.74669361699995, -10.786449562999962],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0215',
			nombprov: 'PALLASCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.23558198699999, -8.695007726999961],
						[-78.23558198699999, -8.049708975999977],
						[-77.55684173699996, -8.049708975999977],
						[-77.55684173699996, -8.695007726999961],
						[-78.23558198699999, -8.695007726999961],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0216',
			nombprov: 'POMABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.60829161199996, -8.92336372699998],
						[-77.60829161199996, -8.507086976999972],
						[-77.24618948599993, -8.507086976999972],
						[-77.24618948599993, -8.92336372699998],
						[-77.60829161199996, -8.92336372699998],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0217',
			nombprov: 'RECUAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77527536199995, -10.249860227999932],
						[-77.77527536199995, -9.64873885299994],
						[-77.17327723599999, -9.64873885299994],
						[-77.17327723599999, -10.249860227999932],
						[-77.77527536199995, -10.249860227999932],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0218',
			nombprov: 'SANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.65848048799995, -9.355240726999966],
						[-78.65848048799995, -8.652919976999954],
						[-77.94030598699999, -8.652919976999954],
						[-77.94030598699999, -9.355240726999966],
						[-78.65848048799995, -9.355240726999966],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0219',
			nombprov: 'SIHUAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.79885936199997, -8.757665226999961],
						[-77.79885936199997, -8.236415975999932],
						[-77.36592673699994, -8.236415975999932],
						[-77.36592673699994, -8.757665226999961],
						[-77.79885936199997, -8.757665226999961],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			idprov: '0220',
			nombprov: 'YUNGAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.06228898799998, -9.446605602999966],
						[-78.06228898799998, -8.900442976999955],
						[-77.35750586099994, -8.900442976999955],
						[-77.35750586099994, -9.446605602999966],
						[-78.06228898799998, -9.446605602999966],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0301',
			nombprov: 'ABANCAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.17189510699995, -14.170393856999965],
						[-73.17189510699995, -13.383032980999928],
						[-72.39878935699994, -13.383032980999928],
						[-72.39878935699994, -14.170393856999965],
						[-73.17189510699995, -14.170393856999965],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0302',
			nombprov: 'ANDAHUAYLAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.74788773399996, -14.544308606999948],
						[-73.74788773399996, -13.411719855999934],
						[-72.94462598299998, -13.411719855999934],
						[-72.94462598299998, -14.544308606999948],
						[-73.74788773399996, -14.544308606999948],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0303',
			nombprov: 'ANTABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.08264098199999, -14.759940106999977],
						[-73.08264098199999, -14.10729185699995],
						[-72.33858535699994, -14.10729185699995],
						[-72.33858535699994, -14.759940106999977],
						[-73.08264098199999, -14.759940106999977],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0304',
			nombprov: 'AYMARAES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.57713673299997, -14.842730481999979],
						[-73.57713673299997, -13.799884855999949],
						[-72.97976748299999, -13.799884855999949],
						[-72.97976748299999, -14.842730481999979],
						[-73.57713673299997, -14.842730481999979],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0305',
			nombprov: 'COTABAMBAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.48132423199996, -14.440689481999982],
						[-72.48132423199996, -13.641849606999926],
						[-72.05120310699994, -13.641849606999926],
						[-72.05120310699994, -14.440689481999982],
						[-72.48132423199996, -14.440689481999982],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0306',
			nombprov: 'CHINCHEROS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.84744613899994, -13.736613230999978],
						[-73.84744613899994, -13.170714854999972],
						[-73.44538985799994, -13.170714854999972],
						[-73.44538985799994, -13.736613230999978],
						[-73.84744613899994, -13.736613230999978],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			idprov: '0307',
			nombprov: 'GRAU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.90199698199996, -14.362172356999963],
						[-72.90199698199996, -13.729785856999968],
						[-72.34983598199995, -13.729785856999968],
						[-72.34983598199995, -14.362172356999963],
						[-72.90199698199996, -14.362172356999963],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0401',
			nombprov: 'AREQUIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.28353135699996, -16.799554859999944],
						[-72.28353135699996, -15.921892108999941],
						[-70.80408473099999, -15.921892108999941],
						[-70.80408473099999, -16.799554859999944],
						[-72.28353135699996, -16.799554859999944],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0402',
			nombprov: 'CAMANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.29160310799995, -16.927019108999957],
						[-73.29160310799995, -15.874050108999938],
						[-72.12759398099996, -15.874050108999938],
						[-72.12759398099996, -16.927019108999957],
						[-73.29160310799995, -16.927019108999957],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0403',
			nombprov: 'CARAVELI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.07332610999998, -16.405406983999967],
						[-75.07332610999998, -15.098054857999955],
						[-73.19506835799996, -15.098054857999955],
						[-73.19506835799996, -16.405406983999967],
						[-75.07332610999998, -16.405406983999967],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0404',
			nombprov: 'CASTILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.72351835699999, -16.430480983999928],
						[-72.72351835699999, -14.837326106999967],
						[-71.90141298099996, -14.837326106999967],
						[-71.90141298099996, -16.430480983999928],
						[-72.72351835699999, -16.430480983999928],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0405',
			nombprov: 'CAYLLOMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.60469060699995, -16.61182598399995],
						[-72.60469060699995, -14.789601232999928],
						[-70.84533835499997, -14.789601232999928],
						[-70.84533835499997, -16.61182598399995],
						[-72.60469060699995, -16.61182598399995],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0406',
			nombprov: 'CONDESUYOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.26244348299997, -16.461814858999958],
						[-73.26244348299997, -14.632744731999935],
						[-71.89389860699998, -14.632744731999935],
						[-71.89389860699998, -16.461814858999958],
						[-73.26244348299997, -16.461814858999958],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0407',
			nombprov: 'ISLAY',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.22383885699998, -17.285005609999928],
						[-72.22383885699998, -16.675044983999953],
						[-71.30224610599998, -16.675044983999953],
						[-71.30224610599998, -17.285005609999928],
						[-72.22383885699998, -17.285005609999928],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			idprov: '0408',
			nombprov: 'LA UNION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.29380035799994, -15.572004357999958],
						[-73.29380035799994, -14.643874106999931],
						[-72.30193323199995, -14.643874106999931],
						[-72.30193323199995, -15.572004357999958],
						[-73.29380035799994, -15.572004357999958],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0501',
			nombprov: 'HUAMANGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.68940908699994, -13.538480480999965],
						[-74.68940908699994, -12.984946105999938],
						[-73.80704552799995, -12.984946105999938],
						[-73.80704552799995, -13.538480480999965],
						[-74.68940908699994, -13.538480480999965],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0502',
			nombprov: 'CANGALLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.90457985899997, -13.684861355999942],
						[-74.90457985899997, -13.325071105999939],
						[-74.03584460899998, -13.325071105999939],
						[-74.03584460899998, -13.684861355999942],
						[-74.90457985899997, -13.684861355999942],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0503',
			nombprov: 'HUANCA SANCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.78641673499999, -14.167058606999944],
						[-74.78641673499999, -13.69534373099998],
						[-74.09918185899994, -13.69534373099998],
						[-74.09918185899994, -14.167058606999944],
						[-74.78641673499999, -14.167058606999944],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0504',
			nombprov: 'HUANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.58117698399997, -13.051245695999967],
						[-74.58117698399997, -12.167879979999952],
						[-73.82991510799997, -12.167879979999952],
						[-73.82991510799997, -13.051245695999967],
						[-74.58117698399997, -13.051245695999967],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0505',
			nombprov: 'LA MAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.14873235899995, -13.476693730999955],
						[-74.14873235899995, -12.530754854999941],
						[-73.20934798199994, -12.530754854999941],
						[-73.20934798199994, -13.476693730999955],
						[-74.14873235899995, -13.476693730999955],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0506',
			nombprov: 'LUCANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.13982610899996, -15.481039107999948],
						[-75.13982610899996, -14.019199105999974],
						[-73.53246223299993, -14.019199105999974],
						[-73.53246223299993, -15.481039107999948],
						[-75.13982610899996, -15.481039107999948],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0507',
			nombprov: 'PARINACOCHAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.25717823299993, -15.630064982999954],
						[-74.25717823299993, -14.50721860699997],
						[-72.84682460699997, -14.50721860699997],
						[-72.84682460699997, -15.630064982999954],
						[-74.25717823299993, -15.630064982999954],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0508',
			nombprov: 'PAUCAR DEL SARA SARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.55497073299995, -15.405148482999948],
						[-73.55497073299995, -14.825359231999926],
						[-72.98274235799994, -14.825359231999926],
						[-72.98274235799994, -15.405148482999948],
						[-73.55497073299995, -15.405148482999948],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0509',
			nombprov: 'SUCRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.98985423399995, -14.41636985699995],
						[-73.98985423399995, -13.763366105999978],
						[-73.51224998299995, -13.763366105999978],
						[-73.51224998299995, -14.41636985699995],
						[-73.98985423399995, -14.41636985699995],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0510',
			nombprov: 'VICTOR FAJARDO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.78241998399994, -14.186701230999972],
						[-74.78241998399994, -13.555408230999944],
						[-73.86305360799997, -13.555408230999944],
						[-73.86305360799997, -14.186701230999972],
						[-74.78241998399994, -14.186701230999972],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			idprov: '0511',
			nombprov: 'VILCAS HUAMAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.08047003899998, -13.938444481999966],
						[-74.08047003899998, -13.408886859999939],
						[-73.66946898299994, -13.408886859999939],
						[-73.66946898299994, -13.938444481999966],
						[-74.08047003899998, -13.938444481999966],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0601',
			nombprov: 'CAJAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.74599411299994, -7.556683599999928],
						[-78.74599411299994, -6.798939474999941],
						[-78.18369448799996, -6.798939474999941],
						[-78.18369448799996, -7.556683599999928],
						[-78.74599411299994, -7.556683599999928],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0602',
			nombprov: 'CAJABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.38281923799997, -7.76346097499993],
						[-78.38281923799997, -7.343551724999941],
						[-77.74130161199997, -7.343551724999941],
						[-77.74130161199997, -7.76346097499993],
						[-78.38281923799997, -7.76346097499993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0603',
			nombprov: 'CELENDIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.45463261299994, -7.152848849999941],
						[-78.45463261299994, -6.388961474999974],
						[-77.95114973699998, -6.388961474999974],
						[-77.95114973699998, -7.152848849999941],
						[-78.45463261299994, -7.152848849999941],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0604',
			nombprov: 'CHOTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.45845111399996, -6.680755848999979],
						[-79.45845111399996, -6.085308348999945],
						[-78.27793186299994, -6.085308348999945],
						[-78.27793186299994, -6.680755848999979],
						[-79.45845111399996, -6.680755848999979],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0605',
			nombprov: 'CONTUMAZA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.36927536299999, -7.660949350999942],
						[-79.36927536299999, -7.178701224999941],
						[-78.60868548699995, -7.178701224999941],
						[-78.60868548699995, -7.660949350999942],
						[-79.36927536299999, -7.660949350999942],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0606',
			nombprov: 'CUTERVO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.27466461299997, -6.550066348999962],
						[-79.27466461299997, -5.781032348999929],
						[-78.50895698799997, -5.781032348999929],
						[-78.50895698799997, -6.550066348999962],
						[-79.27466461299997, -6.550066348999962],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0607',
			nombprov: 'HUALGAYOC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.76946186299995, -6.86762884999996],
						[-78.76946186299995, -6.559978473999934],
						[-78.38416598699996, -6.559978473999934],
						[-78.38416598699996, -6.86762884999996],
						[-78.76946186299995, -6.86762884999996],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0608',
			nombprov: 'JAEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.42050998799994, -6.134064473999956],
						[-79.42050998799994, -5.324943598999937],
						[-78.51128036299997, -5.324943598999937],
						[-78.51128036299997, -6.134064473999956],
						[-79.42050998799994, -6.134064473999956],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0609',
			nombprov: 'SAN IGNACIO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.37836615199996, -5.524710898999956],
						[-79.37836615199996, -4.623873097999933],
						[-78.58981148699996, -4.623873097999933],
						[-78.58981148699996, -5.524710898999956],
						[-79.37836615199996, -5.524710898999956],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0610',
			nombprov: 'SAN MARCOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.32557623699995, -7.48053110099994],
						[-78.32557623699995, -7.06461347499993],
						[-77.82890748699998, -7.06461347499993],
						[-77.82890748699998, -7.48053110099994],
						[-78.32557623699995, -7.48053110099994],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0611',
			nombprov: 'SAN MIGUEL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.33161861299999, -7.252757849999966],
						[-79.33161861299999, -6.692246849999947],
						[-78.61152148799994, -6.692246849999947],
						[-78.61152148799994, -7.252757849999966],
						[-79.33161861299999, -7.252757849999966],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0612',
			nombprov: 'SAN PABLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.91954298799999, -7.22878897499993],
						[-78.91954298799999, -6.851611599999956],
						[-78.59860661299996, -6.851611599999956],
						[-78.59860661299996, -7.22878897499993],
						[-78.91954298799999, -7.22878897499993],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			idprov: '0613',
			nombprov: 'SANTA CRUZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.25294723899998, -6.873761724999952],
						[-79.25294723899998, -6.503457598999944],
						[-78.71841411199995, -6.503457598999944],
						[-78.71841411199995, -6.873761724999952],
						[-79.25294723899998, -6.873761724999952],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			idprov: '0701',
			nombprov: 'CALLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.18795546699994, -12.079492229999971],
						[-77.18795546699994, -11.817821212999945],
						[-77.07686723599994, -11.817821212999945],
						[-77.07686723599994, -12.079492229999971],
						[-77.18795546699994, -12.079492229999971],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0801',
			nombprov: 'CUSCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.16800248199996, -13.649185605999946],
						[-72.16800248199996, -13.429496105999931],
						[-71.80462598099996, -13.429496105999931],
						[-71.80462598099996, -13.649185605999946],
						[-72.16800248199996, -13.649185605999946],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0802',
			nombprov: 'ACOMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.83444223099997, -14.15430110699998],
						[-71.83444223099997, -13.696914105999952],
						[-71.43924810599998, -13.696914105999952],
						[-71.43924810599998, -14.15430110699998],
						[-71.83444223099997, -14.15430110699998],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0803',
			nombprov: 'ANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.77286310699998, -13.71405535699995],
						[-72.77286310699998, -13.28477473099997],
						[-72.00000573099999, -13.28477473099997],
						[-72.00000573099999, -13.71405535699995],
						[-72.77286310699998, -13.71405535699995],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0804',
			nombprov: 'CALCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.36993360699995, -13.575317980999955],
						[-72.36993360699995, -12.506591104999927],
						[-71.71952348099995, -12.506591104999927],
						[-71.71952348099995, -13.575317980999955],
						[-72.36993360699995, -13.575317980999955],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0805',
			nombprov: 'CANAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.65180610599998, -14.660164106999957],
						[-71.65180610599998, -14.083456731999945],
						[-70.96235298099998, -14.083456731999945],
						[-70.96235298099998, -14.660164106999957],
						[-71.65180610599998, -14.660164106999957],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0806',
			nombprov: 'CANCHIS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.51804410599993, -14.473024231999943],
						[-71.51804410599993, -13.725501981999969],
						[-70.78981835599996, -13.725501981999969],
						[-70.78981835599996, -14.473024231999943],
						[-71.51804410599993, -14.473024231999943],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0807',
			nombprov: 'CHUMBIVILCAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.50301010699997, -14.887876482999957],
						[-72.50301010699997, -13.934853480999948],
						[-71.51497223099994, -13.934853480999948],
						[-71.51497223099994, -14.887876482999957],
						[-72.50301010699997, -14.887876482999957],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0808',
			nombprov: 'ESPINAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.90241560699997, -15.458288232999962],
						[-71.90241560699997, -14.52939373199996],
						[-70.95003222999998, -14.52939373199996],
						[-70.95003222999998, -15.458288232999962],
						[-71.90241560699997, -15.458288232999962],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0809',
			nombprov: 'LA CONVENCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.98110210799996, -13.458128856999963],
						[-73.98110210799996, -11.212293478999982],
						[-71.94567123199994, -11.212293478999982],
						[-71.94567123199994, -13.458128856999963],
						[-73.98110210799996, -13.458128856999963],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0810',
			nombprov: 'PARURO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.23285623199996, -14.278787106999971],
						[-72.23285623199996, -13.593626480999944],
						[-71.67339248099995, -13.593626480999944],
						[-71.67339248099995, -14.278787106999971],
						[-72.23285623199996, -14.278787106999971],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0811',
			nombprov: 'PAUCARTAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.92120310599995, -13.640009730999964],
						[-71.92120310599995, -12.700058104999925],
						[-71.06417873099997, -12.700058104999925],
						[-71.06417873099997, -13.640009730999964],
						[-71.92120310599995, -13.640009730999964],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0812',
			nombprov: 'QUISPICANCHI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.84315885699993, -13.967218731999935],
						[-71.84315885699993, -13.06700123099995],
						[-70.34507197999994, -13.06700123099995],
						[-70.34507197999994, -13.967218731999935],
						[-71.84315885699993, -13.967218731999935],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			idprov: '0813',
			nombprov: 'URUBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.60076198199994, -13.453669981999951],
						[-72.60076198199994, -13.082345979999957],
						[-71.96867898199997, -13.082345979999957],
						[-71.96867898199997, -13.453669981999951],
						[-72.60076198199994, -13.453669981999951],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0901',
			nombprov: 'HUANCAVELICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.57961323499995, -13.185635480999963],
						[-75.57961323499995, -12.360279979999973],
						[-74.68380348399995, -12.360279979999973],
						[-74.68380348399995, -13.185635480999963],
						[-75.57961323499995, -13.185635480999963],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0902',
			nombprov: 'ACOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.79569660899995, -12.966863230999934],
						[-74.79569660899995, -12.589855479999926],
						[-74.31919998399997, -12.589855479999926],
						[-74.31919998399997, -12.966863230999934],
						[-74.79569660899995, -12.966863230999934],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0903',
			nombprov: 'ANGARAES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.92017923399999, -13.292049855999949],
						[-74.92017923399999, -12.82330660599996],
						[-74.26986003899998, -12.82330660599996],
						[-74.26986003899998, -13.292049855999949],
						[-74.92017923399999, -13.292049855999949],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0904',
			nombprov: 'CASTROVIRREYNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.80965798499994, -13.52630598099995],
						[-75.80965798499994, -12.774177480999981],
						[-74.98895498399997, -12.774177480999981],
						[-74.98895498399997, -13.52630598099995],
						[-75.80965798499994, -13.52630598099995],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0905',
			nombprov: 'CHURCAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.70950973399994, -12.836919980999937],
						[-74.70950973399994, -12.359906229999979],
						[-74.28496998299994, -12.359906229999979],
						[-74.28496998299994, -12.836919980999937],
						[-74.70950973399994, -12.836919980999937],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0906',
			nombprov: 'HUAYTARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.56618548499995, -14.129919981999933],
						[-75.56618548499995, -13.141519105999976],
						[-74.63282997099998, -13.141519105999976],
						[-74.63282997099998, -14.129919981999933],
						[-75.56618548499995, -14.129919981999933],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			idprov: '0907',
			nombprov: 'TAYACAJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.14022998399997, -12.534148479999942],
						[-75.14022998399997, -11.984679854999968],
						[-74.34314860899997, -11.984679854999968],
						[-74.34314860899997, -12.534148479999942],
						[-75.14022998399997, -12.534148479999942],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1001',
			nombprov: 'HUANUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.60646098599995, -10.233531227999947],
						[-76.60646098599995, -9.469232726999962],
						[-75.79533473499998, -9.469232726999962],
						[-75.79533473499998, -10.233531227999947],
						[-76.60646098599995, -10.233531227999947],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1002',
			nombprov: 'AMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.52469536099994, -10.465640727999926],
						[-76.52469536099994, -9.98131835299995],
						[-76.02577148499995, -9.98131835299995],
						[-76.02577148499995, -10.465640727999926],
						[-76.52469536099994, -10.465640727999926],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1003',
			nombprov: 'DOS DE MAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.94782811099998, -10.011109352999938],
						[-76.94782811099998, -9.388478477999968],
						[-76.19904111099999, -9.388478477999968],
						[-76.19904111099999, -10.011109352999938],
						[-76.94782811099998, -10.011109352999938],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1004',
			nombprov: 'HUACAYBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.17749611099998, -9.238437476999934],
						[-77.17749611099998, -8.767003725999928],
						[-76.27210548599999, -8.767003725999928],
						[-76.27210548599999, -9.238437476999934],
						[-77.17749611099998, -9.238437476999934],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1005',
			nombprov: 'HUAMALIES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.04865823599994, -9.760236352999925],
						[-77.04865823599994, -9.053033351999943],
						[-76.05679298499996, -9.053033351999943],
						[-76.05679298499996, -9.760236352999925],
						[-77.04865823599994, -9.760236352999925],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1006',
			nombprov: 'LEONCIO PRADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.48022260999994, -9.61750785299995],
						[-76.48022260999994, -8.30472442599995],
						[-75.62771673499998, -8.30472442599995],
						[-75.62771673499998, -9.61750785299995],
						[-76.48022260999994, -9.61750785299995],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1007',
			nombprov: 'MARAÑON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.31748636199995, -9.054501976999973],
						[-77.31748636199995, -8.410923975999935],
						[-76.18985161099994, -8.410923975999935],
						[-76.18985161099994, -9.054501976999973],
						[-77.31748636199995, -9.054501976999973],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1008',
			nombprov: 'PACHITEA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.13620898599999, -10.488890728999934],
						[-76.13620898599999, -9.39098822799997],
						[-75.59227335999998, -9.39098822799997],
						[-75.59227335999998, -10.488890728999934],
						[-76.13620898599999, -10.488890728999934],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1009',
			nombprov: 'PUERTO INCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.76142973499998, -9.992174602999967],
						[-75.76142973499998, -8.548381225999947],
						[-74.52535123399997, -8.548381225999947],
						[-74.52535123399997, -9.992174602999967],
						[-75.76142973499998, -9.992174602999967],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1010',
			nombprov: 'LAURICOCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.91624023599996, -10.479066057999944],
						[-76.91624023599996, -9.86807622799995],
						[-76.47280436099999, -9.86807622799995],
						[-76.47280436099999, -10.479066057999944],
						[-76.91624023599996, -10.479066057999944],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			idprov: '1011',
			nombprov: 'YAROWILCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.75801948599997, -9.959232477999933],
						[-76.75801948599997, -9.665648476999934],
						[-76.46292386099998, -9.665648476999934],
						[-76.46292386099998, -9.959232477999933],
						[-76.75801948599997, -9.959232477999933],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1101',
			nombprov: 'ICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.07232810999994, -14.929660106999961],
						[-76.07232810999994, -13.742187480999974],
						[-75.21055473399997, -13.742187480999974],
						[-75.21055473399997, -14.929660106999961],
						[-76.07232810999994, -14.929660106999961],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1102',
			nombprov: 'CHINCHA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.24479285999996, -13.631447230999981],
						[-76.24479285999996, -12.96493335599996],
						[-75.60260848499996, -12.96493335599996],
						[-75.60260848499996, -13.631447230999981],
						[-76.24479285999996, -13.631447230999981],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1103',
			nombprov: 'NASCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.50449998399995, -15.443374982999956],
						[-75.50449998399995, -14.544886731999952],
						[-74.64624123399994, -14.544886731999952],
						[-74.64624123399994, -15.443374982999956],
						[-75.50449998399995, -15.443374982999956],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1104',
			nombprov: 'PALPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.36368748499996, -14.678841856999952],
						[-75.36368748499996, -14.032884731999957],
						[-75.03208998399998, -14.032884731999957],
						[-75.03208998399998, -14.678841856999952],
						[-75.36368748499996, -14.678841856999952],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			idprov: '1105',
			nombprov: 'PISCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.39836323599997, -14.426054731999955],
						[-76.39836323599997, -13.352765105999936],
						[-75.46565998399996, -13.352765105999936],
						[-75.46565998399996, -14.426054731999955],
						[-76.39836323599997, -14.426054731999955],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1201',
			nombprov: 'HUANCAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.58283985999998, -12.68371572999996],
						[-75.58283985999998, -11.660737104999953],
						[-74.48783435899998, -11.660737104999953],
						[-74.48783435899998, -12.68371572999996],
						[-75.58283985999998, -12.68371572999996],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1202',
			nombprov: 'CONCEPCION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.69430473499995, -12.187350634999973],
						[-75.69430473499995, -11.426740603999974],
						[-74.71783785899999, -11.426740603999974],
						[-74.71783785899999, -12.187350634999973],
						[-75.69430473499995, -12.187350634999973],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1203',
			nombprov: 'CHANCHAMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.67090660999997, -11.350232478999942],
						[-75.67090660999997, -10.65289447799995],
						[-74.62255723399994, -10.65289447799995],
						[-74.62255723399994, -11.350232478999942],
						[-75.67090660999997, -11.350232478999942],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1204',
			nombprov: 'JAUJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.05325585999998, -12.059627354999975],
						[-76.05325585999998, -11.258207853999977],
						[-74.97283510999995, -11.258207853999977],
						[-74.97283510999995, -12.059627354999975],
						[-76.05325585999998, -12.059627354999975],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1205',
			nombprov: 'JUNIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.27885923499997, -11.387959978999959],
						[-76.27885923499997, -10.727119978999951],
						[-75.38688998499998, -10.727119978999951],
						[-75.38688998499998, -11.387959978999959],
						[-76.27885923499997, -11.387959978999959],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1206',
			nombprov: 'SATIPO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.05100123399995, -12.386985855999967],
						[-75.05100123399995, -10.734008228999926],
						[-73.35512948299998, -10.734008228999926],
						[-73.35512948299998, -12.386985855999967],
						[-75.05100123399995, -12.386985855999967],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1207',
			nombprov: 'TARMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.97208010999998, -11.601140104999956],
						[-75.97208010999998, -10.90029535399998],
						[-75.40194935999995, -10.90029535399998],
						[-75.40194935999995, -11.601140104999956],
						[-75.97208010999998, -11.601140104999956],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1208',
			nombprov: 'YAULI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51922661099997, -11.939103729999943],
						[-76.51922661099997, -11.07042185399996],
						[-75.70027798499996, -11.07042185399996],
						[-75.70027798499996, -11.939103729999943],
						[-76.51922661099997, -11.939103729999943],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			idprov: '1209',
			nombprov: 'CHUPACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.67126214699994, -12.413370018999956],
						[-75.67126214699994, -12.006929108999941],
						[-75.23177723499998, -12.006929108999941],
						[-75.23177723499998, -12.413370018999956],
						[-75.67126214699994, -12.413370018999956],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1301',
			nombprov: 'TRUJILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.21079722399998, -8.37145310099993],
						[-79.21079722399998, -7.796724077999954],
						[-78.63763173799998, -7.796724077999954],
						[-78.63763173799998, -8.37145310099993],
						[-79.21079722399998, -8.37145310099993],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1302',
			nombprov: 'ASCOPE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.46570698899995, -7.998824273999958],
						[-79.46570698899995, -7.388720331999934],
						[-78.79354873799997, -7.388720331999934],
						[-78.79354873799997, -7.998824273999958],
						[-79.46570698899995, -7.998824273999958],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1303',
			nombprov: 'BOLIVAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.00120011299998, -7.674077225999952],
						[-78.00120011299998, -6.941452724999976],
						[-77.48576361199997, -6.941452724999976],
						[-77.48576361199997, -7.674077225999952],
						[-78.00120011299998, -7.674077225999952],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1304',
			nombprov: 'CHEPEN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.69062111399995, -7.325240225999948],
						[-79.69062111399995, -6.946238224999945],
						[-79.25180373799998, -6.946238224999945],
						[-79.25180373799998, -7.325240225999948],
						[-79.69062111399995, -7.325240225999948],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1305',
			nombprov: 'JULCAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.68243436299997, -8.38759835199994],
						[-78.68243436299997, -7.990096476999952],
						[-78.28828336199996, -7.990096476999952],
						[-78.28828336199996, -8.38759835199994],
						[-78.68243436299997, -8.38759835199994],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1306',
			nombprov: 'OTUZCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.91437311299995, -8.098738225999966],
						[-78.91437311299995, -7.622415100999945],
						[-78.24887823799997, -7.622415100999945],
						[-78.24887823799997, -8.098738225999966],
						[-78.91437311299995, -8.098738225999966],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1307',
			nombprov: 'PACASMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.59972261299998, -7.636639353999954],
						[-79.59972261299998, -7.221285224999974],
						[-79.18645086299995, -7.221285224999974],
						[-79.18645086299995, -7.636639353999954],
						[-79.59972261299998, -7.636639353999954],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1308',
			nombprov: 'PATAZ',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70093161099999, -8.53327272699994],
						[-77.70093161099999, -7.593226475999927],
						[-76.90124323599997, -7.593226475999927],
						[-76.90124323599997, -8.53327272699994],
						[-77.70093161099999, -8.53327272699994],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1309',
			nombprov: 'SANCHEZ CARRION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.27334536199999, -8.012773225999979],
						[-78.27334536199999, -7.478212724999935],
						[-77.62269048599995, -7.478212724999935],
						[-77.62269048599995, -8.012773225999979],
						[-78.27334536199999, -8.012773225999979],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1310',
			nombprov: 'SANTIAGO DE CHUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.42992386299994, -8.652919976999954],
						[-78.42992386299994, -7.881220850999966],
						[-77.64036673699997, -7.881220850999966],
						[-77.64036673699997, -8.652919976999954],
						[-78.42992386299994, -8.652919976999954],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1311',
			nombprov: 'GRAN CHIMU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.94449223799995, -7.796993850999968],
						[-78.94449223799995, -7.395154350999974],
						[-78.32207836199996, -7.395154350999974],
						[-78.32207836199996, -7.796993850999968],
						[-78.94449223799995, -7.796993850999968],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			idprov: '1312',
			nombprov: 'VIRU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.93552148799995, -8.97088985199997],
						[-78.93552148799995, -8.140700350999964],
						[-78.23557823799996, -8.140700350999964],
						[-78.23557823799996, -8.97088985199997],
						[-78.93552148799995, -8.97088985199997],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1401',
			nombprov: 'CHICLAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.94246486399999, -7.177126974999965],
						[-79.94246486399999, -6.481265849999943],
						[-79.12084773799995, -6.481265849999943],
						[-79.12084773799995, -7.177126974999965],
						[-79.94246486399999, -7.177126974999965],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1402',
			nombprov: 'FERREÑAFE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.85105473899995, -6.715187474999936],
						[-79.85105473899995, -5.976387473999978],
						[-79.17544136299995, -5.976387473999978],
						[-79.17544136299995, -6.715187474999936],
						[-79.85105473899995, -6.715187474999936],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			idprov: '1403',
			nombprov: 'LAMBAYEQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.62713286499996, -6.820499974999962],
						[-80.62713286499996, -5.48038672399997],
						[-79.40181348799996, -5.48038672399997],
						[-79.40181348799996, -6.820499974999962],
						[-80.62713286499996, -6.820499974999962],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1501',
			nombprov: 'LIMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.19880273599995, -12.519931604999954],
						[-77.19880273599995, -11.57240696499997],
						[-76.62082436099996, -11.57240696499997],
						[-76.62082436099996, -12.519931604999954],
						[-77.19880273599995, -12.519931604999954],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1502',
			nombprov: 'BARRANCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88659211099997, -10.931980477999957],
						[-77.88659211099997, -10.320699977999936],
						[-77.36546336199996, -10.320699977999936],
						[-77.36546336199996, -10.931980477999957],
						[-77.88659211099997, -10.931980477999957],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1503',
			nombprov: 'CAJATAMBO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.34470323699998, -10.69810935399994],
						[-77.34470323699998, -10.274185602999978],
						[-76.79989648599997, -10.274185602999978],
						[-76.79989648599997, -10.69810935399994],
						[-77.34470323699998, -10.69810935399994],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1504',
			nombprov: 'CANTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.04433461599996, -11.756386662999944],
						[-77.04433461599996, -11.312529853999933],
						[-76.37148498599998, -11.312529853999933],
						[-76.37148498599998, -11.756386662999944],
						[-77.04433461599996, -11.756386662999944],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1505',
			nombprov: 'CAÑETE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.79125323599999, -13.323513730999935],
						[-76.79125323599999, -12.275728479999941],
						[-75.94078123499997, -12.275728479999941],
						[-75.94078123499997, -13.323513730999935],
						[-76.79125323599999, -13.323513730999935],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1506',
			nombprov: 'HUARAL',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.38269336199994, -11.702090604999967],
						[-77.38269336199994, -11.013484478999942],
						[-76.45693248499998, -11.013484478999942],
						[-76.45693248499998, -11.702090604999967],
						[-77.38269336199994, -11.702090604999967],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1507',
			nombprov: 'HUAROCHIRI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.94227536099999, -12.410324730999946],
						[-76.94227536099999, -11.457506103999947],
						[-75.99317973499996, -11.457506103999947],
						[-75.99317973499996, -12.410324730999946],
						[-76.94227536099999, -12.410324730999946],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1508',
			nombprov: 'HUAURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.70151561199998, -11.44717972999996],
						[-77.70151561199998, -10.606449353999949],
						[-76.56499411099998, -10.606449353999949],
						[-76.56499411099998, -11.44717972999996],
						[-77.70151561199998, -11.44717972999996],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1509',
			nombprov: 'OYON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.19595573699996, -11.016019978999964],
						[-77.19595573699996, -10.419126978999941],
						[-76.58821161099996, -10.419126978999941],
						[-76.58821161099996, -11.016019978999964],
						[-77.19595573699996, -11.016019978999964],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			idprov: '1510',
			nombprov: 'YAUYOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.36748561099995, -13.060429730999942],
						[-76.36748561099995, -11.98394060499993],
						[-75.50749998499998, -11.98394060499993],
						[-75.50749998499998, -13.060429730999942],
						[-76.36748561099995, -13.060429730999942],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1601',
			nombprov: 'MAYNAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.78114648499997, -4.709708972999977],
						[-75.78114648499997, -0.639369968999972],
						[-72.11719298199995, -0.639369968999972],
						[-72.11719298199995, -4.709708972999977],
						[-75.78114648499997, -4.709708972999977],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1602',
			nombprov: 'ALTO AMAZONAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.89453711099998, -6.147729973999958],
						[-76.89453711099998, -3.68152917499998],
						[-75.38563929699995, -3.68152917499998],
						[-75.38563929699995, -6.147729973999958],
						[-76.89453711099998, -6.147729973999958],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1603',
			nombprov: 'LORETO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.53432436099996, -5.728031899999962],
						[-76.53432436099996, -1.793951344999925],
						[-73.37823198299998, -1.793951344999925],
						[-73.37823198299998, -5.728031899999962],
						[-76.53432436099996, -5.728031899999962],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1604',
			nombprov: 'MARISCAL RAMON CASTILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.23624410799994, -5.145971722999946],
						[-73.23624410799994, -2.799546914999951],
						[-69.94903935499997, -2.799546914999951],
						[-69.94903935499997, -5.145971722999946],
						[-73.23624410799994, -5.145971722999946],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1605',
			nombprov: 'REQUENA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.57110510999996, -7.534361350999973],
						[-75.57110510999996, -4.446356222999952],
						[-72.85496835699996, -4.446356222999952],
						[-72.85496835699996, -7.534361350999973],
						[-75.57110510999996, -7.534361350999973],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1606',
			nombprov: 'UCAYALI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.21540810999994, -8.71519138399998],
						[-76.21540810999994, -5.866033223999978],
						[-74.49950160899994, -5.866033223999978],
						[-74.49950160899994, -8.71519138399998],
						[-76.21540810999994, -8.71519138399998],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1607',
			nombprov: 'DATEM DEL MARAÑON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.82595798699998, -5.746232473999953],
						[-77.82595798699998, -2.512278470999945],
						[-75.74680073499997, -2.512278470999945],
						[-75.74680073499997, -5.746232473999953],
						[-77.82595798699998, -5.746232473999953],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			idprov: '1608',
			nombprov: 'PUTUMAYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.61061885999999, -3.424217816999942],
						[-75.61061885999999, -0.038605967999956],
						[-70.06005960499994, -0.038605967999956],
						[-70.06005960499994, -3.424217816999942],
						[-75.61061885999999, -3.424217816999942],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1701',
			nombprov: 'TAMBOPATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.21888468299994, -13.341716855999948],
						[-72.21888468299994, -11.033527728999957],
						[-68.65227910299996, -11.033527728999957],
						[-68.65227910299996, -13.341716855999948],
						[-72.21888468299994, -13.341716855999948],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1702',
			nombprov: 'MANU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.42873873199994, -13.271045855999944],
						[-72.42873873199994, -11.315101978999962],
						[-70.03739847899993, -11.315101978999962],
						[-70.03739847899993, -13.271045855999944],
						[-72.42873873199994, -13.271045855999944],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			idprov: '1703',
			nombprov: 'TAHUAMANU',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.18525403299998, -11.931843729999969],
						[-72.18525403299998, -9.873393332999967],
						[-68.97029397899996, -9.873393332999967],
						[-68.97029397899996, -11.931843729999969],
						[-72.18525403299998, -11.931843729999969],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1801',
			nombprov: 'MARISCAL NIETO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.44095610599999, -17.649454984999977],
						[-71.44095610599999, -16.46145110899994],
						[-69.99505210499996, -16.46145110899994],
						[-69.99505210499996, -17.649454984999977],
						[-71.44095610599999, -17.649454984999977],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1802',
			nombprov: 'GENERAL SANCHEZ CERRO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.46594235599997, -16.980491608999955],
						[-71.46594235599997, -15.975963608999962],
						[-70.30610335499995, -15.975963608999962],
						[-70.30610335499995, -16.980491608999955],
						[-71.46594235599997, -16.980491608999955],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			idprov: '1803',
			nombprov: 'ILO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.49079898099995, -17.821482360999937],
						[-71.49079898099995, -17.25171660999996],
						[-70.90716998099998, -17.25171660999996],
						[-70.90716998099998, -17.821482360999937],
						[-71.49079898099995, -17.821482360999937],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1901',
			nombprov: 'PASCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.67096423599997, -11.155769978999956],
						[-76.67096423599997, -10.30283835399996],
						[-75.51052210999995, -10.30283835399996],
						[-75.51052210999995, -11.155769978999956],
						[-76.67096423599997, -11.155769978999956],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1902',
			nombprov: 'DANIEL ALCIDES CARRION',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73024061099994, -10.746772852999982],
						[-76.73024061099994, -10.285839977999956],
						[-76.23599010999999, -10.285839977999956],
						[-76.23599010999999, -10.746772852999982],
						[-76.73024061099994, -10.746772852999982],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			idprov: '1903',
			nombprov: 'OXAPAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.87026348499995, -10.915840728999967],
						[-75.87026348499995, -9.445704476999936],
						[-74.13098148399996, -9.445704476999936],
						[-74.13098148399996, -10.915840728999967],
						[-75.87026348499995, -10.915840728999967],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2001',
			nombprov: 'PIURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.02250645399994, -5.795114934999958],
						[-81.02250645399994, -4.585041217999958],
						[-80.00830984399994, -4.585041217999958],
						[-80.00830984399994, -5.795114934999958],
						[-81.02250645399994, -5.795114934999958],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2002',
			nombprov: 'AYABACA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.29564648899998, -5.110968722999928],
						[-80.29564648899998, -4.285164097999939],
						[-79.38914261299999, -4.285164097999939],
						[-79.38914261299999, -5.110968722999928],
						[-80.29564648899998, -5.110968722999928],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2003',
			nombprov: 'HUANCABAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.83943748899998, -5.97009959899998],
						[-79.83943748899998, -4.832523472999981],
						[-79.20987386299998, -4.832523472999981],
						[-79.20987386299998, -5.97009959899998],
						[-79.83943748899998, -5.97009959899998],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2004',
			nombprov: 'MORROPON',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.36426490699995, -5.630027348999931],
						[-80.36426490699995, -4.91235811599995],
						[-79.64220898899998, -4.91235811599995],
						[-79.64220898899998, -5.630027348999931],
						[-80.36426490699995, -5.630027348999931],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2005',
			nombprov: 'PAITA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.21055273999997, -5.38846097399994],
						[-81.21055273999997, -4.771792972999947],
						[-80.82424023999994, -4.771792972999947],
						[-80.82424023999994, -5.38846097399994],
						[-81.21055273999997, -5.38846097399994],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2006',
			nombprov: 'SULLANA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.96825786499994, -5.293223913999952],
						[-80.96825786499994, -4.083128846999955],
						[-80.20148048899995, -4.083128846999955],
						[-80.20148048899995, -5.293223913999952],
						[-80.96825786499994, -5.293223913999952],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2007',
			nombprov: 'TALARA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.32823048999995, -4.81640234799994],
						[-81.32823048999995, -4.087546846999942],
						[-80.82851561499996, -4.087546846999942],
						[-80.82851561499996, -4.81640234799994],
						[-81.32823048999995, -4.81640234799994],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			idprov: '2008',
			nombprov: 'SECHURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.14955661499994, -6.372080099999948],
						[-81.14955661499994, -5.350446675999933],
						[-80.05298436399994, -5.350446675999933],
						[-80.05298436399994, -6.372080099999948],
						[-81.14955661499994, -6.372080099999948],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2101',
			nombprov: 'PUNO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.56288997999997, -16.655232233999982],
						[-70.56288997999997, -15.478590982999947],
						[-69.60874997899998, -15.478590982999947],
						[-69.60874997899998, -16.655232233999982],
						[-70.56288997999997, -16.655232233999982],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2102',
			nombprov: 'AZANGARO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.46816597999998, -15.402834982999934],
						[-70.46816597999998, -14.268417856999974],
						[-69.83616447999998, -14.268417856999974],
						[-69.83616447999998, -15.402834982999934],
						[-70.46816597999998, -15.402834982999934],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2103',
			nombprov: 'CARABAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.88134310599997, -14.517818731999967],
						[-70.88134310599997, -13.114412855999944],
						[-69.63228510499994, -13.114412855999944],
						[-69.63228510499994, -14.517818731999967],
						[-70.88134310599997, -14.517818731999967],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2104',
			nombprov: 'CHUCUITO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.68675197899995, -17.174983234999956],
						[-69.68675197899995, -16.17421485899996],
						[-68.99610160399993, -16.17421485899996],
						[-68.99610160399993, -17.174983234999956],
						[-69.68675197899995, -17.174983234999956],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2105',
			nombprov: 'EL COLLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.14662497999996, -17.295466733999945],
						[-70.14662497999996, -15.956399357999942],
						[-69.42222235499997, -15.956399357999942],
						[-69.42222235499997, -17.295466733999945],
						[-70.14662497999996, -17.295466733999945],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2106',
			nombprov: 'HUANCANE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.09470555199994, -15.53636523299997],
						[-70.09470555199994, -14.762841856999955],
						[-69.11962310399997, -14.762841856999955],
						[-69.11962310399997, -15.53636523299997],
						[-70.09470555199994, -15.53636523299997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2107',
			nombprov: 'LAMPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.03897098099998, -15.851253483999926],
						[-71.03897098099998, -14.912378606999937],
						[-70.14808597999996, -14.912378606999937],
						[-70.14808597999996, -15.851253483999926],
						[-71.03897098099998, -15.851253483999926],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2108',
			nombprov: 'MELGAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.11809173099994, -15.19489135799995],
						[-71.11809173099994, -14.074739355999952],
						[-70.26650947999997, -14.074739355999952],
						[-70.26650947999997, -15.19489135799995],
						[-71.11809173099994, -15.19489135799995],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2109',
			nombprov: 'MOHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.66919885399994, -15.53797923299993],
						[-69.66919885399994, -15.162219481999955],
						[-69.17320860399997, -15.162219481999955],
						[-69.17320860399997, -15.53797923299993],
						[-69.66919885399994, -15.53797923299993],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2110',
			nombprov: 'SAN ANTONIO DE PUTINA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.01182622999994, -15.110800982999933],
						[-70.01182622999994, -14.306283231999942],
						[-69.11264735399993, -14.306283231999942],
						[-69.11264735399993, -15.110800982999933],
						[-70.01182622999994, -15.110800982999933],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2111',
			nombprov: 'SAN ROMAN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.89629360599997, -16.034189857999934],
						[-70.89629360599997, -15.313784232999978],
						[-69.96175435499998, -15.313784232999978],
						[-69.96175435499998, -16.034189857999934],
						[-70.89629360599997, -16.034189857999934],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2112',
			nombprov: 'SANDIA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.85356197999994, -14.66193360799997],
						[-69.85356197999994, -13.003925855999967],
						[-68.82667572899999, -13.003925855999967],
						[-68.82667572899999, -14.66193360799997],
						[-69.85356197999994, -14.66193360799997],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			idprov: '2113',
			nombprov: 'YUNGUYO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-69.20457422899995, -16.420401733999938],
						[-69.20457422899995, -16.189081983999927],
						[-68.81421685299995, -16.189081983999927],
						[-68.81421685299995, -16.420401733999938],
						[-69.20457422899995, -16.420401733999938],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2201',
			nombprov: 'MOYOBAMBA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.74482773699998, -6.41330284999998],
						[-77.74482773699998, -5.40646684799998],
						[-76.74544707899997, -5.40646684799998],
						[-76.74544707899997, -6.41330284999998],
						[-77.74482773699998, -6.41330284999998],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2202',
			nombprov: 'BELLAVISTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73620698599996, -8.37726885099994],
						[-76.73620698599996, -6.72538284999996],
						[-75.82949285999996, -6.72538284999996],
						[-75.82949285999996, -8.37726885099994],
						[-76.73620698599996, -8.37726885099994],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2203',
			nombprov: 'EL DORADO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.97181261099996, -6.810219849999953],
						[-76.97181261099996, -6.264608598999928],
						[-76.52253148599993, -6.264608598999928],
						[-76.52253148599993, -6.810219849999953],
						[-76.97181261099996, -6.810219849999953],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2204',
			nombprov: 'HUALLAGA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.28707036199995, -7.175039224999978],
						[-77.28707036199995, -6.327144848999978],
						[-76.63002998499996, -6.327144848999978],
						[-76.63002998499996, -7.175039224999978],
						[-77.28707036199995, -7.175039224999978],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2205',
			nombprov: 'LAMAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.88416998599996, -6.69461522499995],
						[-76.88416998599996, -5.953558718999943],
						[-75.89996260999999, -5.953558718999943],
						[-75.89996260999999, -6.69461522499995],
						[-76.88416998599996, -6.69461522499995],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2206',
			nombprov: 'MARISCAL CACERES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.76474898699996, -8.064925725999956],
						[-77.76474898699996, -6.382130974999939],
						[-76.55134998599993, -6.382130974999939],
						[-76.55134998599993, -8.064925725999956],
						[-77.76474898699996, -8.064925725999956],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2207',
			nombprov: 'PICOTA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.54941985999994, -7.203962474999969],
						[-76.54941985999994, -6.677917473999969],
						[-76.00578123499997, -6.677917473999969],
						[-76.00578123499997, -7.203962474999969],
						[-76.54941985999994, -7.203962474999969],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2208',
			nombprov: 'RIOJA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77567748699994, -6.234117348999973],
						[-77.77567748699994, -5.40689909799994],
						[-77.11982098699997, -5.40689909799994],
						[-77.11982098699997, -6.234117348999973],
						[-77.77567748699994, -6.234117348999973],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2209',
			nombprov: 'SAN MARTIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.49156261099995, -6.869113974999948],
						[-76.49156261099995, -6.003987724999945],
						[-75.48676473499995, -6.003987724999945],
						[-75.48676473499995, -6.869113974999948],
						[-76.49156261099995, -6.869113974999948],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			idprov: '2210',
			nombprov: 'TOCACHE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.14256536099998, -8.796294976999945],
						[-77.14256536099998, -7.685967724999955],
						[-76.10699998499996, -7.685967724999955],
						[-76.10699998499996, -8.796294976999945],
						[-77.14256536099998, -8.796294976999945],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2301',
			nombprov: 'TACNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.89009185599997, -18.35092773599996],
						[-70.89009185599997, -17.393039984999973],
						[-69.46829297899995, -17.393039984999973],
						[-69.46829297899995, -18.35092773599996],
						[-70.89009185599997, -18.35092773599996],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2302',
			nombprov: 'CANDARAVE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.57250785499997, -17.460740234999946],
						[-70.57250785499997, -16.770431609999946],
						[-70.06988697999998, -16.770431609999946],
						[-70.06988697999998, -17.460740234999946],
						[-70.57250785499997, -17.460740234999946],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2303',
			nombprov: 'JORGE BASADRE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.13944335599996, -17.976559984999938],
						[-71.13944335599996, -17.19410935999997],
						[-70.34392585499995, -17.19410935999997],
						[-70.34392585499995, -17.976559984999938],
						[-71.13944335599996, -17.976559984999938],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			idprov: '2304',
			nombprov: 'TARATA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-70.34578710499994, -17.778212984999982],
						[-70.34578710499994, -17.034914233999928],
						[-69.46731635399993, -17.034914233999928],
						[-69.46731635399993, -17.778212984999982],
						[-70.34578710499994, -17.778212984999982],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2401',
			nombprov: 'TUMBES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.66645111499997, -4.231900346999964],
						[-80.66645111499997, -3.485218846999942],
						[-80.18069323899994, -3.485218846999942],
						[-80.18069323899994, -4.231900346999964],
						[-80.66645111499997, -4.231900346999964],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2402',
			nombprov: 'CONTRALMIRANTE VILLAR',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.04141798999996, -4.21519372299997],
						[-81.04141798999996, -3.637196346999929],
						[-80.51518161499996, -3.637196346999929],
						[-80.51518161499996, -4.21519372299997],
						[-81.04141798999996, -4.21519372299997],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			idprov: '2403',
			nombprov: 'ZARUMILLA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.39497661399997, -3.925990222999928],
						[-80.39497661399997, -3.381773346999978],
						[-80.12679198899997, -3.381773346999978],
						[-80.12679198899997, -3.925990222999928],
						[-80.39497661399997, -3.925990222999928],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2501',
			nombprov: 'CORONEL PORTILLO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.45303885999994, -10.093853477999971],
						[-75.45303885999994, -7.262049474999969],
						[-72.93998635699995, -7.262049474999969],
						[-72.93998635699995, -10.093853477999971],
						[-75.45303885999994, -10.093853477999971],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2502',
			nombprov: 'ATALAYA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-74.57037160899995, -11.448341979999952],
						[-74.57037160899995, -9.411396477999972],
						[-72.12016998199994, -9.411396477999972],
						[-72.12016998199994, -11.448341979999952],
						[-74.57037160899995, -11.448341979999952],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2503',
			nombprov: 'PADRE ABAD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94788601799996, -9.418436897999982],
						[-75.94788601799996, -8.210028617999967],
						[-74.93916998399999, -8.210028617999967],
						[-74.93916998399999, -9.418436897999982],
						[-75.94788601799996, -9.418436897999982],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			idprov: '2504',
			nombprov: 'PURUS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.48438935699994, -11.01366947899993],
						[-72.48438935699994, -9.423690601999965],
						[-70.49441697999998, -9.423690601999965],
						[-70.49441697999998, -11.01366947899993],
						[-72.48438935699994, -11.01366947899993],
					],
				],
			},
		},
	],
	Departamentos: [
		{
			iddpto: '01',
			nombdep: 'AMAZONAS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.71217773799998, -6.986759349999943],
						[-78.71217773799998, -2.986125095999967],
						[-77.13230273599999, -2.986125095999967],
						[-77.13230273599999, -6.986759349999943],
						[-78.71217773799998, -6.986759349999943],
					],
				],
			},
		},
		{
			iddpto: '02',
			nombdep: 'ANCASH',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-78.65848048799995, -10.786449562999962],
						[-78.65848048799995, -8.049708975999977],
						[-76.72574411099998, -8.049708975999977],
						[-76.72574411099998, -10.786449562999962],
						[-78.65848048799995, -10.786449562999962],
					],
				],
			},
		},
		{
			iddpto: '03',
			nombdep: 'APURIMAC',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.84744613899994, -14.842730481999979],
						[-73.84744613899994, -13.170714854999972],
						[-72.05120310699994, -13.170714854999972],
						[-72.05120310699994, -14.842730481999979],
						[-73.84744613899994, -14.842730481999979],
					],
				],
			},
		},
		{
			iddpto: '04',
			nombdep: 'AREQUIPA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.07332610999998, -17.285005609999928],
						[-75.07332610999998, -14.632744731999935],
						[-70.80408473099999, -14.632744731999935],
						[-70.80408473099999, -17.285005609999928],
						[-75.07332610999998, -17.285005609999928],
					],
				],
			},
		},
		{
			iddpto: '05',
			nombdep: 'AYACUCHO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.13982610899996, -15.630064982999954],
						[-75.13982610899996, -12.167879979999952],
						[-72.84682460699997, -12.167879979999952],
						[-72.84682460699997, -15.630064982999954],
						[-75.13982610899996, -15.630064982999954],
					],
				],
			},
		},
		{
			iddpto: '06',
			nombdep: 'CAJAMARCA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.45845111399996, -7.76346097499993],
						[-79.45845111399996, -4.623873097999933],
						[-77.74130161199997, -4.623873097999933],
						[-77.74130161199997, -7.76346097499993],
						[-79.45845111399996, -7.76346097499993],
					],
				],
			},
		},
		{
			iddpto: '07',
			nombdep: 'CALLAO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.18795546699994, -12.079492229999971],
						[-77.18795546699994, -11.817821212999945],
						[-77.07686723599994, -11.817821212999945],
						[-77.07686723599994, -12.079492229999971],
						[-77.18795546699994, -12.079492229999971],
					],
				],
			},
		},
		{
			iddpto: '08',
			nombdep: 'CUSCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-73.98110210799996, -15.458288232999962],
						[-73.98110210799996, -11.212293478999982],
						[-70.34507197999994, -11.212293478999982],
						[-70.34507197999994, -15.458288232999962],
						[-73.98110210799996, -15.458288232999962],
					],
				],
			},
		},
		{
			iddpto: '09',
			nombdep: 'HUANCAVELICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.80965798499994, -14.129919981999933],
						[-75.80965798499994, -11.984679854999968],
						[-74.26986003899998, -11.984679854999968],
						[-74.26986003899998, -14.129919981999933],
						[-75.80965798499994, -14.129919981999933],
					],
				],
			},
		},
		{
			iddpto: '10',
			nombdep: 'HUANUCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.31748636199995, -10.488890728999934],
						[-77.31748636199995, -8.30472442599995],
						[-74.52535123399997, -8.30472442599995],
						[-74.52535123399997, -10.488890728999934],
						[-77.31748636199995, -10.488890728999934],
					],
				],
			},
		},
		{
			iddpto: '11',
			nombdep: 'ICA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.39836323599997, -15.443374982999956],
						[-76.39836323599997, -12.96493335599996],
						[-74.64624123399994, -12.96493335599996],
						[-74.64624123399994, -15.443374982999956],
						[-76.39836323599997, -15.443374982999956],
					],
				],
			},
		},
		{
			iddpto: '12',
			nombdep: 'JUNIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.51922661099997, -12.68371572999996],
						[-76.51922661099997, -10.65289447799995],
						[-73.35512948299998, -10.65289447799995],
						[-73.35512948299998, -12.68371572999996],
						[-76.51922661099997, -12.68371572999996],
					],
				],
			},
		},
		{
			iddpto: '13',
			nombdep: 'LA LIBERTAD',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-79.69062111399995, -8.97088985199997],
						[-79.69062111399995, -6.941452724999976],
						[-76.90124323599997, -6.941452724999976],
						[-76.90124323599997, -8.97088985199997],
						[-79.69062111399995, -8.97088985199997],
					],
				],
			},
		},
		{
			iddpto: '14',
			nombdep: 'LAMBAYEQUE',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-80.62713286499996, -7.177126974999965],
						[-80.62713286499996, -5.48038672399997],
						[-79.12084773799995, -5.48038672399997],
						[-79.12084773799995, -7.177126974999965],
						[-80.62713286499996, -7.177126974999965],
					],
				],
			},
		},
		{
			iddpto: '15',
			nombdep: 'LIMA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.88659211099997, -13.323513730999935],
						[-77.88659211099997, -10.274185602999978],
						[-75.50749998499998, -10.274185602999978],
						[-75.50749998499998, -13.323513730999935],
						[-77.88659211099997, -13.323513730999935],
					],
				],
			},
		},
		{
			iddpto: '16',
			nombdep: 'LORETO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.82595798699998, -8.71519138399998],
						[-77.82595798699998, -0.038605967999956],
						[-69.94903935499997, -0.038605967999956],
						[-69.94903935499997, -8.71519138399998],
						[-77.82595798699998, -8.71519138399998],
					],
				],
			},
		},
		{
			iddpto: '17',
			nombdep: 'MADRE DE DIOS',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-72.42873873199994, -13.341716855999948],
						[-72.42873873199994, -9.873393332999967],
						[-68.65227910299996, -9.873393332999967],
						[-68.65227910299996, -13.341716855999948],
						[-72.42873873199994, -13.341716855999948],
					],
				],
			},
		},
		{
			iddpto: '18',
			nombdep: 'MOQUEGUA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.49079898099995, -17.821482360999937],
						[-71.49079898099995, -15.975963608999962],
						[-69.99505210499996, -15.975963608999962],
						[-69.99505210499996, -17.821482360999937],
						[-71.49079898099995, -17.821482360999937],
					],
				],
			},
		},
		{
			iddpto: '19',
			nombdep: 'PASCO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-76.73024061099994, -11.155769978999956],
						[-76.73024061099994, -9.445704476999936],
						[-74.13098148399996, -9.445704476999936],
						[-74.13098148399996, -11.155769978999956],
						[-76.73024061099994, -11.155769978999956],
					],
				],
			},
		},
		{
			iddpto: '20',
			nombdep: 'PIURA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.32823048999995, -6.372080099999948],
						[-81.32823048999995, -4.083128846999955],
						[-79.20987386299998, -4.083128846999955],
						[-79.20987386299998, -6.372080099999948],
						[-81.32823048999995, -6.372080099999948],
					],
				],
			},
		},
		{
			iddpto: '21',
			nombdep: 'PUNO',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.11809173099994, -17.295466733999945],
						[-71.11809173099994, -13.003925855999967],
						[-68.81421685299995, -13.003925855999967],
						[-68.81421685299995, -17.295466733999945],
						[-71.11809173099994, -17.295466733999945],
					],
				],
			},
		},
		{
			iddpto: '22',
			nombdep: 'SAN MARTIN',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-77.77567748699994, -8.796294976999945],
						[-77.77567748699994, -5.40646684799998],
						[-75.48676473499995, -5.40646684799998],
						[-75.48676473499995, -8.796294976999945],
						[-77.77567748699994, -8.796294976999945],
					],
				],
			},
		},
		{
			iddpto: '23',
			nombdep: 'TACNA',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-71.13944335599996, -18.35092773599996],
						[-71.13944335599996, -16.770431609999946],
						[-69.46731635399993, -16.770431609999946],
						[-69.46731635399993, -18.35092773599996],
						[-71.13944335599996, -18.35092773599996],
					],
				],
			},
		},
		{
			iddpto: '24',
			nombdep: 'TUMBES',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-81.04141798999996, -4.231900346999964],
						[-81.04141798999996, -3.381773346999978],
						[-80.12679198899997, -3.381773346999978],
						[-80.12679198899997, -4.231900346999964],
						[-81.04141798999996, -4.231900346999964],
					],
				],
			},
		},
		{
			iddpto: '25',
			nombdep: 'UCAYALI',
			envelope: {
				type: 'Polygon',
				coordinates: [
					[
						[-75.94788601799996, -11.448341979999952],
						[-75.94788601799996, -7.262049474999969],
						[-70.49441697999998, -7.262049474999969],
						[-70.49441697999998, -11.448341979999952],
						[-75.94788601799996, -11.448341979999952],
					],
				],
			},
		},
	],
};
