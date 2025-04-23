import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  userObject : User = {
    firsName: '',
    lastName: '',
    emailAddress: '',
    password: undefined
  };

  onSubmit(userForm:NgForm) {
    console.log(userForm.value);
    
  } 
}
