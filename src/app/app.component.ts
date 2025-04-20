import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectivesComponent } from "./directives/directives.component";
import { StructuralDirectivesNgifVsIfComponent } from "./structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component";
import { StructuralDirectivesNgforVsForComponent } from "./structural-directives-ngfor-vs-for/structural-directives-ngfor-vs-for.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UserComponent,
    DataBindingComponent,
    DirectivesComponent,
    StructuralDirectivesNgifVsIfComponent,
    StructuralDirectivesNgforVsForComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Shopping list';
}
