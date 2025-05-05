import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  
  addUserForm : FormGroup;
  
  constructor(private route : Router, private fb : FormBuilder, private crud : CrudService) {
    
    this.addUserForm = this.fb.group({
       name : [""],
       username : [""],
       email: [""],
      })
    }
    
    
    onCancel() {
      this.route.navigateByUrl('crud');
    }

    onSubmit() {
       console.log(this.addUserForm.value);
       this.crud.postData(this.addUserForm.value).subscribe(res => {
          this.route.navigateByUrl('crud');
       })
    }
}
