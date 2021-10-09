import {Component, OnInit} from '@angular/core';
import {House} from "./interfaces/house";
import {HouseService} from "./services/house.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public houses: House[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houses = this.houseService.fetchHouses().filter(house => house.price >= 900000);
  }
}
