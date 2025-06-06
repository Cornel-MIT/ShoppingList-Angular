import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectivesComponent } from "./directives/directives.component";
import { StructuralDirectivesNgifVsIfComponent } from "./structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component";
import { StructuralDirectivesNgforVsForComponent } from "./structural-directives-ngfor-vs-for/structural-directives-ngfor-vs-for.component";
import { StructuralDirectivesNgswitchVsSwitchComponent } from "./structural-directives-ngswitch-vs-switch/structural-directives-ngswitch-vs-switch.component";
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
import { SignalsComponent } from "./signals/signals.component";
import { LinkedSignalComponent } from "./linked-signal/linked-signal.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // UserComponent,
    // DataBindingComponent,
    // DirectivesComponent,
    // StructuralDirectivesNgifVsIfComponent,
    // StructuralDirectivesNgforVsForComponent,
    // StructuralDirectivesNgswitchVsSwitchComponent,
    // AttributeDirectivesComponent,
    // SignalsComponent,
    // LinkedSignalComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Shopping list';
}
