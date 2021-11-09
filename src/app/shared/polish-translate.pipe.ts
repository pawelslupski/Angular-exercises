import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTranslate'
})
export class StatusTranslatePipe implements PipeTransform {

  transform(status: string | undefined): string {
      switch (status) {
        case 'FOR_RENT':
          return 'DO WYNAJĘCIA';
        case 'FOR_SALE':
          return 'NA SPRZEDAŻ';
        case 'RESERVED':
          return 'ZAREZERWOWANY';
        case 'RENTED':
          return 'WYNAJĘTY';
        case 'SOLD':
          return 'SPRZEDANY';
        default:
          return '';
      }
  }
}
