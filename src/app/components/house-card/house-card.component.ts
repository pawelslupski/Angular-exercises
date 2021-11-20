import {
  Component, ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, Type,
  ViewChild
} from '@angular/core';
import {House} from "../../interfaces/house";
import {DialogService} from "../../services/dialog.service";
import {HouseCardDialogComponent} from "./house-card-dialog/house-card-dialog.component";

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

  constructor(private dialogService: DialogService) {

  }

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

  public displayDialog(houseImageUrl: string | undefined) {
      const childComponent: ComponentRef<HouseCardDialogComponent>= <ComponentRef<HouseCardDialogComponent>><unknown>this.dialogService.openDialog(HouseCardDialogComponent);
      // @ts-ignore
      childComponent?.instance.houseImageUrl = houseImageUrl;
  }
}
