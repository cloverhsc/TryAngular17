import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmulatedEncapsulationComponent } from '../emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from '../shadow-dom-encapsulation/shadow-dom-encapsulation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    EmulatedEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

}
