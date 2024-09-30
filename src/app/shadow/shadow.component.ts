import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow',
  standalone: true,
  imports: [],
  templateUrl: './shadow.component.html',
  styleUrl: './shadow.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowComponent {

}
