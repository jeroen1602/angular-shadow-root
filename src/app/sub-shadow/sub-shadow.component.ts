import { Component, ViewEncapsulation } from '@angular/core';
import { NormalComponent } from '../normal/normal.component';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  selector: 'app-sub-shadow',
  standalone: true,
  imports: [
    NormalComponent,
    NoEncapsulationComponent,
  ],
  templateUrl: './sub-shadow.component.html',
  styleUrls: [
    './sub-shadow.component.scss',
    '../../styles.scss',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SubShadowComponent {

}
