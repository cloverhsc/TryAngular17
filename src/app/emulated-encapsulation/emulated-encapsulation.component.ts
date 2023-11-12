import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  selector: 'app-emulated-encapsulation',
  standalone: true,
  imports: [CommonModule, NoEncapsulationComponent],
  templateUrl: './emulated-encapsulation.component.html',
  styleUrl: './emulated-encapsulation.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedEncapsulationComponent {

}
