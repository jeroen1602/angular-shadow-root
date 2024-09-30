import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-dynamic-component-shadow',
  standalone: true,
  imports: [],
  templateUrl: '../dynamic-component/dynamic-component.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DynamicComponentShadowComponent extends DynamicComponentComponent {

}
