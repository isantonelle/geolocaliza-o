import {Component, OnInit} from '@angular/core';

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

    const Balneario = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-balneario.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const Miramar = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-miramar.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const Praiamar = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-praimar.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const SaoFracisco = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-sâo-francisco.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const Iporanga = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-iporanga.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const Embare = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-embaré.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const IL63  = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-il63.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const Bulevar = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-bulevar.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    const ondeEstou = Leaflet.icon({
      iconUrl: "../../assets/pin-de-localizacao-ia.png",
      iconSize:[40,38],
      popupAnchor: [0,-35] 
    })

    Leaflet.marker({lat: lat, lng: lng}, {icon: ondeEstou}).addTo(this.mapa).bindPopup("Estou aqui!")

    Leaflet.marker({lat: -23.9689497, lng: -46.3349688}, {icon: Balneario}).addTo(this.mapa).bindPopup("Shopping Parque Balneário - Av. Ana Costa, 549 - Gonzaga, Santos")

    Leaflet.marker({lat: -23.966546, lng:  -46.3371458}, {icon: Miramar}).addTo(this.mapa).bindPopup("Miramar Shopping - R. Euclides da Cunha, 21 - Gonzaga, Santos ")

    Leaflet.marker({lat: -23.9764959, lng: -46.3101753}, {icon: Praiamar}).addTo(this.mapa).bindPopup("Praiamar Shopping -  R. Alexandre Martins, 80 - Aparecida, Santos")

    Leaflet.marker({lat: -23.9719443, lng: -46.3099852}, {icon: SaoFracisco}).addTo(this.mapa).bindPopup("Shopping Center São Francisco - Av. Dr. Pedro Lessa, 1640 - Ponta da Praia, Santos")

    Leaflet.marker({lat: -23.9650603, lng: -46.3344247}, {icon: Iporanga}).addTo(this.mapa).bindPopup("Shopping Pátio Iporanga - Av. Ana Costa, 465 - Gonzaga, Santos")

    Leaflet.marker({lat: -23.9738434, lng: -46.3213136}, {icon: Embare}).addTo(this.mapa).bindPopup("Shopping Embaré - Av. Dr. Epitácio Pessoa, 172 - Embaré, Santos")

    Leaflet.marker({lat: -23.9660578, lng: -46.33834}, {icon: IL63}).addTo(this.mapa).bindPopup("IL63 Center Shop - R. Euclides da Cunha, 63 - Gonzaga, Santos")

    Leaflet.marker({lat: -23.9681559, lng: -46.333947}, {icon: Bulevar}).addTo(this.mapa).bindPopup("Bulevar Shopping - R. Marcílio Dias, 27 - Gonzaga, Santos")

  }
}
