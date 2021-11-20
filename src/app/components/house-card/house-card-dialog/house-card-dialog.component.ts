import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-house-card-dialog',
  templateUrl: './house-card-dialog.component.html',
  styleUrls: ['./house-card-dialog.component.scss']
})
export class HouseCardDialogComponent {
  @Input() houseImageUrl: string | undefined;
}
