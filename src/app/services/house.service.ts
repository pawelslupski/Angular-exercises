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
        imageUrls: ['https://www.szkolaangulara.pl/wp-content/uploads/2021/10/manor-house-g8e5afa906_1280.jpg',
                    'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-259962.jpg',
                    'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-275484.jpg',
                    'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-271624.jpg'],
        status: Status.FOR_RENT,
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
        imageUrls: ['https://www.szkolaangulara.pl/wp-content/uploads/2021/10/casting-horn-g100df2f90_1280.jpg'],
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
        imageUrls: ['https://www.szkolaangulara.pl/wp-content/uploads/2021/10/sweden-g1cdf6280b_1280.jpg',
                    'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-terry-magallanes-2635038.jpg',
                    'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-276724.jpg'],
        status: Status.SOLD,
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
        imageUrls: ['https://www.szkolaangulara.pl/wp-content/uploads/2021/10/casting-horn-gc96bbd46c_1280.jpg'],
        status: Status.RESERVED,
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
        imageUrls: ['https://www.szkolaangulara.pl/wp-content/uploads/2021/10/mill-gc68dfce5c_1280.jpg'],
        status: Status.RENTED,
        address: {
          street: 'Marynarska',
          number: 75,
          city: 'Warszawa'
        }
      }];
  }
}
