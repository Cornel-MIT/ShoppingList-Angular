import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm : FormGroup;
  
  constructor(private fb : FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
        password : [''],
        isChecked : [''],
        
        address : this.fb.group({
          city: [''],
          street: [''],
          pincode: new FormControl()
        }),
        
        skills : this.fb.array([])
        
      }) 
    }
    
    get skills() : FormArray {
        return this.reactiveForm.get("skills") as FormArray
      }
      
      newSkill(): FormGroup{
        return this.fb.group({
           skill : ''
          })
        }

        addSkill() {
          this.skills.push(this.newSkill());
        }

        deleteSkill(i: number) {
          this.skills.removeAt(i)
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
    