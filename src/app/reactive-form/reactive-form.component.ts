import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm : FormGroup;
  
  constructor() {
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(""),
        lastName : new FormControl(""),
        email : new FormControl(""),
        password : new FormControl(),
        isChecked : new FormControl(),
        
        address : new FormGroup({
           city: new FormControl(""),
           street: new FormControl(""),
           pincode: new FormControl()
        })
        
      }) 
      }

      onSubmit() {
        console.log(this.reactiveForm.value);
        
      }
      
      setAllValues() {
        this.reactiveForm.setValue({
          firstName : "Winnie",
          lastName : "Pooe",
          email : "wiinie@gmail.com",
          password : "P1p1p2",
          isChecked : true,
          address : {
            city : "Pretoria",
            street : "Hoe-Hoe Town",
            pincode : 2345
          }
        })
      }

      setParialValues() {
         this.reactiveForm.patchValue({
          address : {
            city : "Pretoria",
            street : "Hoe-Hoe Town",
            pincode : 2345
          }
         })

        //  this.reactiveForm.controls['lastName'].patchValue('Goldburg');
      }

      resetForm() {
        // this.reactiveForm.reset();
        this.reactiveForm.controls['lastName'].reset();
      }
    }
    