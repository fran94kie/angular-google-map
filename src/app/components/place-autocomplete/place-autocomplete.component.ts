import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  imageURL?: string;
  iconURL?: string;
  name?: string;
}
@Component({
  selector: 'app-place-autocomplete',
  templateUrl: './place-autocomplete.component.html',
  styleUrls: ['./place-autocomplete.component.css'],
})
// export class DataService {
//   location?: google.maps.LatLng;
// }
export class PlaceAutocompleteComponent {
  //Google Map Config
  zoom = 5;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
  };
  @ViewChild(GoogleMap) map: GoogleMap;
  //Search Function
  @ViewChild('inputField') inputField: ElementRef | undefined;
  autocomplete: google.maps.places.Autocomplete | undefined;
  @Input() placeholder = 'Enter the location';
  @Output() placeChanged = new EventEmitter<PlaceSearchResult>();
  searchPosition;
  constructor(private ngZone: NgZone) {}
  ngOnInit(): void {}

  searchOld() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.inputField?.nativeElement
    );

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      const result: PlaceSearchResult = {
        address: this.inputField?.nativeElement.value,
        name: place?.name,
        location: place?.geometry?.location,
        iconURL: place?.icon,
        imageURL: this.getPhotoURL(place),
      };
      this.searchPosition = result.location;
      this.ngZone.run(() => {
        this.placeChanged.emit(result);
        this.addSearchRecord(result);
      });
    });
  }
  ngAfterViewInit() {
    this.searchOld();
  }

  getPhotoURL(
    place: google.maps.places.PlaceResult | undefined
  ): string | undefined {
    return place?.photos && place.photos.length > 0
      ? place.photos[0].getUrl({ maxWidth: 500 })
      : undefined;
  }

  records: any[] = [];
  addSearchRecord(record) {
    this.records.push(record);
    console.log(this.records);
  }
}
