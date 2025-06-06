import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule, CustomPipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
   mobileNumber : any = null
 
   angularPipes : string = "use pipes to format data in angular templates";

   personData = {
     name : "Joe",
     age : 25,
     City : "Cape Town"
   }

   currentDate : Date = new Date();

   items = of(['Apple', 'Banana', 'Mango']);
}
