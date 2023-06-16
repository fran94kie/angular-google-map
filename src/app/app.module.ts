import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceAutocompleteComponent } from './components/place-autocomplete/place-autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapDisplayComponent } from './components/map-display/map-display.component';
import { MapRecordsComponent } from './components/map-records/map-records.component';
@NgModule({
  declarations: [AppComponent, PlaceAutocompleteComponent, MapDisplayComponent, MapRecordsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
