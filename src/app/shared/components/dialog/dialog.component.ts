import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {DialogService} from "../../../services/dialog.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @ViewChild('childComponentPlacement', {read: ViewContainerRef})
  public childComponentPlacement: ViewContainerRef | undefined;
  public onClose$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  public onOverlayClick(mouseEvent: MouseEvent): void {
    this.onClose$.next(true);
  }

  public onDialogClick(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
  }
}
