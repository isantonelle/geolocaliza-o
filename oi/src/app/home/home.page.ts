import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  mapa: any = Leaflet.Map;

  constructor() {}

  ngOnInit(): void {
    const printCurrentPosition = async () => {
      const coor = await Geolocation.getCurrentPosition();
      this.carregarMapa(coor.coords.latitude, coor.coords.longitude)
    
      // console.log('Current position:', cords);
  };
    printCurrentPosition();
  }

  carregarMapa(lat: any, lng: any){
    // console.log("teste", lat, "-", lng);

    this.mapa = Leaflet.map('mapaID',{
      center: [lat,lng],
      zoom: 10
    })

    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapa)

    Leaflet.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.4,
        radius: 500
    }).addTo(this.mapa).bindPopup("Local com muito roubo. Cuidado!");

    Leaflet.circle([-23.93228, -46.33307], {
      color: 'blue',
      fillColor: '#00f',
      fillOpacity: 0.4,
      radius: 100
    }).addTo(this.mapa).bindPopup("Circo por perto. Aproveite!");

    Leaflet.circle([-23.94887, -46.28032], {
    color: 'yellow',
    fillColor: '#f5e642',
    fillOpacity: 0.4,
    radius: 100
    }).addTo(this.mapa).bindPopup("Isabelly mora por perto");

    const ondeEstou = Leaflet.icon({
      iconUrl: "../../assets/marcador.png",
      iconSize:[32,50],
      popupAnchor: [0,-35] 
    })

    Leaflet.marker({lat: lat, lng: lng}, {icon: ondeEstou}).addTo(this.mapa).bindPopup("Estou aqui!")
  }
}
