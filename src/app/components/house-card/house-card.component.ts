import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
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
  public expandView: boolean = false;
  public buttonText: string = 'Więcej zdjęć';
  public houseImagesToBeDisplayed: string[] | undefined;

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
    this.houseImagesToBeDisplayed = this.house?.imageUrls.slice(0,4);
  }

  public book() {
    this.houseReserved.emit(this.house?.id);
  }

  public toggleAdditionalView() {
    this.expandView = !this.expandView;
    if (this.expandView) {
      this.buttonText = 'Ukryj zdjęcia';
    } else {
      this.buttonText = 'Więcej zdjęć';
    }
  }
}
