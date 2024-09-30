import { Component } from '@angular/core';
import { NormalComponent } from './normal/normal.component';
import { ShadowComponent } from './shadow/shadow.component';
import { SubShadowComponent } from './sub-shadow/sub-shadow.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicComponentShadowComponent } from './dynamic-component-shadow/dynamic-component-shadow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NormalComponent, ShadowComponent, SubShadowComponent, NoEncapsulationComponent, DynamicComponentComponent, DynamicComponentShadowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
