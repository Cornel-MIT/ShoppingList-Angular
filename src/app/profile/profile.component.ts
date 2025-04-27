import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  dummyData : any;
  isEligible : boolean;
  constructor(private _sharedData : SharedDataService) {
      this.dummyData = this._sharedData.userData;

      this.isEligible = this._sharedData.isEligibleForSubscription()
  }
    
  //  userData = {
  //    id : 1,
  //    name : 'Joe',
  //    username : 'Joie',
  //    email : 'joeg@gmail.com'
  //  }

}
