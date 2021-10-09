import {Component, Input, OnInit} from '@angular/core';
import {House} from "../../interfaces/house";

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {
  @Input() public house: House | undefined;
  public addressAsOneLine: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.addressAsOneLine = this.house?.address?.street + ' ' + this.house?.address?.number;
  }
}
