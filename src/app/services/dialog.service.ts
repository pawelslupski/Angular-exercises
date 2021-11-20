import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef, EmbeddedViewRef,
  Inject,
  Injectable,
  Injector, Type
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {DialogComponent} from "../shared/components/dialog/dialog.component";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private componentRef: ComponentRef<DialogComponent> | undefined;
  private childComponentType: Type<any> | undefined;

  constructor(private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              @Inject(DOCUMENT) private document: Document) {}

  public openDialog(childComponentType: Type<any>): ComponentRef<Type<any>> | undefined {
    this.childComponentType = childComponentType;
    this.componentRef = this.prepareComponentRef();
    this.componentRef.changeDetectorRef.detectChanges();
    this.addDialogToComponentTree();
    this.appendDialogToDOM();
    this.addOnCloseDialogListener();
    return this.prepareChildComponent();
  }

  public closeDialog(): void {
    if (this.componentRef) {
      this.applicationRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }

  private prepareComponentRef(): ComponentRef<DialogComponent> {
    const factory: ComponentFactory<DialogComponent> = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    return factory.create(this.injector);
  }

  private addDialogToComponentTree(): void {
    if (this.componentRef) {
      this.applicationRef.attachView(this.componentRef.hostView);
    }
  }

  private appendDialogToDOM(): void {
    if (this.componentRef) {
      const domElement: HTMLElement = (this.componentRef.hostView as EmbeddedViewRef<DialogComponent>).rootNodes[0] as HTMLElement;
      this.document.body.appendChild(domElement);
    }
  }

  private addOnCloseDialogListener(): void {
    if (this.componentRef) {
      this.componentRef.instance.onClose$
        .pipe(take(1))
        .subscribe(() => this.closeDialog());
    }
  }

  private prepareChildComponent(): ComponentRef<Type<any>> | undefined {
    if (this.childComponentType) {
        const componentFactory: ComponentFactory<Type<any>> = this.componentFactoryResolver.resolveComponentFactory(this.childComponentType);
        this.componentRef?.instance.childComponentPlacement?.clear();
        return this.componentRef?.instance.childComponentPlacement?.createComponent(componentFactory);
      }
    return undefined;
  }
}
