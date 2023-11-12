import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-no-encapsulation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-encapsulation.component.html',
  styleUrl: './no-encapsulation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent {

}
