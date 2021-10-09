import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {House} from "../../interfaces/house";

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit, OnChanges {
  @Input() house: House | undefined;
  @Input() highlight: boolean | undefined;
  @Output() houseReserved: EventEmitter<number> = new EventEmitter<number>();
  public borderClass: string = '';
  public addressAsOneLine: string | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.highlight) {
      if (this.highlight === true) {
        this.borderClass = 'card-green';
      } else {
        this.borderClass = '';
      }
    }
  }

  ngOnInit(): void {
    this.addressAsOneLine = this.house?.address?.street + ' ' + this.house?.address?.number;
  }

  public book() {
    this.houseReserved.emit(this.house?.id);
  }
}
