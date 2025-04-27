import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

   dummyData : any
   constructor(private _sharedData : SharedDataService) {
       this.dummyData = this._sharedData.userData;
   }

// onChange() {
//    alert("Country has Changed")
// }
// onSave() {
//    alert("Data has been saved somewhere Successfully... I think 🤔")
// }
//     name : string = "Academy";
//     topic : string = "Data Binding";
//     image : string = "https://en.wikipedia.org/wiki/Federated_learning#/media/File:Centralized_federated_learning_protocol.png";
//     random = "";
}
