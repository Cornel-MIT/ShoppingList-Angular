import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-ngswitch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directives-ngswitch-vs-switch.component.html',
  styleUrl: './structural-directives-ngswitch-vs-switch.component.scss'
})
export class StructuralDirectivesNgswitchVsSwitchComponent {
  grade: number = 0;

  set(x: number) {
     this.grade = x;
  }
}
