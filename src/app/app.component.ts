import { Component } from '@angular/core';
import { PlaceSearchResult } from './components/place-autocomplete/place-autocomplete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'an-google-map';
  fromValue: PlaceSearchResult | undefined;
}
