import {
  Component,
  Input,
  NgZone,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css'],
})
export class MapDisplayComponent implements OnInit {
  @Input() searchPosition: google.maps.LatLng;
  @ViewChild(GoogleMap) map: GoogleMap;

  markers: any[] = [];
  zoom = 5;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private ng: NgZone) {}

  CurrentLat;
  CurrentLon;

  ngOnChanges(changes: SimpleChange) {
    if (changes['searchPosition'] && this.searchPosition != undefined) {
      this.getSearchPosition();
    }
  }
  getSearchPosition() {
    this.center = {
      lat: this.searchPosition.lat(),
      lng: this.searchPosition.lng(),
    };
    this.markers.push({
      position: {
        lat: this.searchPosition.lat() + ((Math.random() - 0.5) * 2) / 10,
        lng: this.searchPosition.lng() + ((Math.random() - 0.5) * 2) / 10,
      },

      title: 'Marker' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }

  currentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.CurrentLat = position.coords.latitude;
      this.CurrentLon = position.coords.longitude;

      // this.markers.push({
      //   position: {
      //     lat: this.CurrentLat + ((Math.random() - 0.5) * 2) / 10,
      //     lng: this.CurrentLon + ((Math.random() - 0.5) * 2) / 10,
      //   },

      //   title: 'Marker title ' + (this.markers.length + 1),
      //   options: { animation: google.maps.Animation.BOUNCE },
      // });
    });
  }
  ngOnInit(): void {
    this.currentPosition();
  }
}
