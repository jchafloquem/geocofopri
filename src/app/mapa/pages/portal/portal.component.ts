import { AfterViewInit, Component } from '@angular/core';
import { Map, control, tileLayer } from 'leaflet';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new Map('map', {
      zoomControl: false,
      minZoom: 6
    }
    ).setView([-9.1963858, -75.3050354], 6);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //Capas Base

    //Capas Cartograficas
    //Instituo Geofisico del Peru
    const igndepartamentos = tileLayer.wms("https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer", {
      layers: '0',
      format: 'image/png',
      transparent: true,
    }).addTo(map);
    const ignprovincia = tileLayer.wms("https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer", {
      layers: '2',
      format: 'image/png',
      transparent: true,
    });
    const igndistrito = tileLayer.wms("https://www.idep.gob.pe/geoportal/services/DATOS_GEOESPACIALES/L%C3%8DMITES/MapServer/WMSServer", {
      layers: '3',
      format: 'image/png',
      transparent: true,
    });
    //Autoridad Nacional del Agua
    const anarios = tileLayer.wms("https://geosnirh.ana.gob.pe/server/services/Público/Rios/MapServer/WMSServer", {
      layers: '0',
      format: 'image/png',
      transparent: true,
    });
    const analagunas = tileLayer.wms("https://geosnirh.ana.gob.pe/server/services/Público/Lagunas/MapServer/WMSServer", {
      layers: '0',
      format: 'image/png',
      transparent: true,
    }).addTo(map);
    const cofopri = tileLayer.wms('http://172.16.16.33:8081/geoserver/GeoCatastro/wms?', {
      layers: 'tg_cartografia',
      format: 'image/png',
      maxZoom: 22,
      transparent: true
    });
  }
}
