import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  standalone: true,
  imports: [],
  templateUrl: './no-encapsulation.component.html',
  styleUrl: './no-encapsulation.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {

}
