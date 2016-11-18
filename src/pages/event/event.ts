import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';


Geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = Geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class Event {
        user:string;
        startDate:string;
        endDate:string;
  map: GoogleMap;
 
    constructor(public navCtrl: NavController) {
        
    }
 
    loadMap(){
 
        let location = new GoogleMapsLatLng(-34.9290,138.6010);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });
 
    }
//}

  //constructor(public, navCtrl; NavController) {

  //}

}
