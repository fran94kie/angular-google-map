import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  IterableDiffers,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-map-records',
  templateUrl: './map-records.component.html',
  styleUrls: ['./map-records.component.css'],
})
export class MapRecordsComponent implements DoCheck {
  @Input() records: any;
  @ViewChild('recordsList', { static: true }) foo: ElementRef;

  recordToAdd: string = '';
  differ: any;
  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create();
  }

  ngDoCheck() {
    const change = this.differ.diff(this.records);
    if (change != null) {
      this.cleanRecord();
      this.records.forEach((element) => {
        this.recordToAdd =
          '<div><input type="checkbox" />' + element.address + '</div>';
        this.foo.nativeElement.insertAdjacentHTML(
          'beforeend',
          this.recordToAdd
        );
      });
    }
  }
  cleanRecord() {
    console.log('clean');
    this.foo.nativeElement.innerHTML = '';
  }

  deleteSelectedRecord() {}
  ngAfterViewInit() {}
}
