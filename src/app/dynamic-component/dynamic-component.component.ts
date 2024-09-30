import { ApplicationRef, Component, ComponentRef, createComponent, ElementRef, inject, OnDestroy, Type, viewChild, ViewContainerRef } from '@angular/core';
import { NormalComponent } from '../normal/normal.component';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-component.component.html',
})
export class DynamicComponentComponent implements OnDestroy {

  private useViewContainerRef = false;

  private viewContainerRef = inject(ViewContainerRef);
  private applicationRef = inject(ApplicationRef);

  private components: ComponentRef<NormalComponent | NoEncapsulationComponent>[] = [];
  private divElement = viewChild<ElementRef<HTMLDivElement>>('divElement');

  public ngOnDestroy(): void {
    this.clear();
  }

  protected checkboxChange($event: Event): void {
    this.useViewContainerRef = ($event.target as HTMLInputElement).checked;
  }

  protected addNormalComponent(): void {
    const divElement = this.divElement();
    if (!divElement) {
      console.log('Div element doesn\'t exist');
      return;
    }
    const componentRef = this.createComponent(NormalComponent);
    divElement.nativeElement.append(componentRef.location.nativeElement);
    this.components.push(componentRef);
  }

  protected addNonEncapsulatedComponent(): void {
    const divElement = this.divElement();
    if (!divElement) {
      console.log('Div element doesn\'t exist');
      return;
    }
    const componentRef = this.createComponent(NoEncapsulationComponent);
    divElement.nativeElement.append(componentRef.location.nativeElement);
    this.components.push(componentRef);
  }

  private createComponent<T>(type: Type<T>) {
    if (this.useViewContainerRef) {
      return this.viewContainerRef.createComponent(type);
    } else {
      return createComponent(type, { environmentInjector: this.applicationRef.injector });
    }
  }

  public clear(): void {
    for (const component of this.components) {
      component.destroy();
    }
    const divElement = this.divElement();
    if (divElement) {
      divElement.nativeElement.innerHTML = '';
    }
  }
}
