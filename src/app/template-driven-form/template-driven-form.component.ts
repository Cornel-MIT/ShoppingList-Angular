import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit{
  
  userObject : User = {
    firsName: '',
    lastName: '',
    emailAddress: '',
    password: undefined
  };
  
  onSubmit(userForm:NgForm) {
    console.log(userForm.value);
    
  } 
  
  ngOnInit(): void {
    // this.userObject = {
      //   firstName: 'Joe',
      //   lastName: 'Goldburg',
      //   emailAddress: 'joe@gmail.com',
      //   password: 12345, 
      //   isCheck: true
      // }
    }
    
    
    setValues(userForm: NgForm) {
      let obj = {
        firstName: 'Joe',
        lastName: 'Goldburg',
        emailAddress: 'joe@gmail.com',
        password: 12345, 
        isCheck: true
      }
      
      userForm.setValue(obj)
    }

    patchValues(userForm: NgForm) {
         let obj = {
           firstName: 'Joe',
           lastName: 'Goldburg',
          emailAddress: 'joe@gmail.com',
        }
        
        userForm.control.patchValue(obj)
    }

     resetValues(userForm: NgForm) {
      //  userForm.reset();
       userForm.resetForm();
     }

}
