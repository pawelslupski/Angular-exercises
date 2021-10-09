import { Component, OnInit } from '@angular/core';
import {House} from "../../interfaces/house";
import {HouseService} from "../../services/house.service";

@Component({
  selector: 'app-houses-dashboard',
  templateUrl: './houses-dashboard.component.html',
  styleUrls: ['./houses-dashboard.component.scss']
})
export class HousesDashboardComponent implements OnInit {
  public houses: House[] = [];
  public housesToDisplay: House[] = [];
  public lastHouse: House | undefined;

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    // this.houses = this.houseService.fetchHouses().filter(house => house.price >= 900000);
    this.houses = this.houseService.fetchHouses();
  }

  public onHouseReserved(houseId: number): void {
    this.lastHouse = this.houseService.fetchHouses().find(house => house.id === houseId);
  }

  public showAll(): void {
    this.housesToDisplay = [...this.houses];
  }

  public showAbove900(): void {
    this.housesToDisplay = [...this.houses];
    this.housesToDisplay = this.housesToDisplay.filter(house => house.price > 900000);
  }

  public showUnder700(): void {
    this.housesToDisplay = [...this.houses];
    this.housesToDisplay = this.housesToDisplay.filter(house => house.price < 700000);
  }
}
