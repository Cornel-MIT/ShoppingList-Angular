import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives-ngif-vs-if.component.html',
  styleUrl: './structural-directives-ngif-vs-if.component.scss'
})
export class StructuralDirectivesNgifVsIfComponent {

  isChecked: boolean = false;

  isInputBox: boolean = true;

  input1 : string = "";
  input2 : string = "";

   showField() {
     this.isInputBox = true;
}
   hideField() {
      this.isInputBox = false;
}

   onClick() {
      this.isChecked = !this.isChecked;
   }

}
