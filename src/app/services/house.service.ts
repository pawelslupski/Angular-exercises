import {Injectable} from '@angular/core';
import {House} from "../interfaces/house";
import {Status} from "../enums/status.enum";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() {}

  public fetchHouses(): House[] {
    return [
      {
        id: 1,
        price: 250000,
        area: '50m2',
        status: Status.FOR_SALE,
        address: {
          street: 'Piłsudzkiego',
          number: 6,
          city: 'Lublin'
        }
      },
      {
        id: 2,
        price: 275000,
        area: '75m2',
        status: Status.FOR_SALE,
        address: {
          street: 'Wyszyńskiego',
          number: 2,
          city: 'Zamość'
        }
      },
      {
        id: 3,
        price: 902000,
        area: '102m2',
        status: Status.FOR_SALE,
        address: {
          street: 'Łukasińskiego',
          number: 12,
          city: 'Warszawa'
        }
      },
      {
        id: 4,
        price: 945000,
        area: '145m2',
        status: Status.FOR_SALE,
        address: {
          street: 'Stoczniowa',
          number: 32,
          city: 'Gdańsk'
        }
      },
      {
        id: 5,
        price: 975000,
        area: '179m2',
        status: Status.FOR_SALE,
        address: {
          street: 'Marynarska',
          number: 75,
          city: 'Warszawa'
        }
      }];
  }

}
