import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmulatedEncapsulationComponent } from '../emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  standalone: true,
  imports: [CommonModule, EmulatedEncapsulationComponent, NoEncapsulationComponent],
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrl: './shadow-dom-encapsulation.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomEncapsulationComponent {

}
