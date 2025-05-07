import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'app-crud',
  imports: [CommonModule, ReusableComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit{

  parentProperty : string = "CRUD Operation : View all users below or Create one"
  
  apiData : Iuser[] = []
  
  constructor(private crud : CrudService, private router : Router) {}
  
  ngOnInit(): void {
    this.getAllData();
  }
  
  getAllData() {
    this.crud.getData().subscribe(res => {
      this.apiData = res;
    })
  }
  
  addNewUser() {
    this.router.navigateByUrl('addUser');
  }
  
  onView(id : number) {
    this.router.navigate(['viewUser', id])
  }

  onUpdate(id : number) {
    this.router.navigate(['updateUser', id]);
  }

  onDelete(id : number) {
     this.crud.deleteData(id).subscribe(res => {
       alert("Record deleted successfully...😉👍🏿")
       this.getAllData();
     })
  }
}
