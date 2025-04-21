import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directives-ngfor-vs-for.component.html',
  styleUrl: './structural-directives-ngfor-vs-for.component.scss'
})
export class StructuralDirectivesNgforVsForComponent {
   employees : any[] = [
      {empName: "Luffy", empNumber: 101, empEmail: "SunGodNika@gmail.com", emDept:"Captain"},
      {empName: "Zoro", empNumber: 102, empEmail: "KOFZoro@gmail.com", emDept:"Swordsman"},
      {empName: "Sanji", empNumber: 103, empEmail: "BlackLeg@gmail.com", emDept:"Cook"},
      {empName: "Nami", empNumber: 104, empEmail: "PrettyNavi@gmail.com", emDept:"Navigator"},
      {empName: "Robin", empNumber: 105, empEmail: "DemonChild@gmail.com", emDept:"Explorer"}
   ]

   companyList : string[] = ["Amazon", "Google", "Apple", "Microsoft", "Netflix", "Tesla"]
}
