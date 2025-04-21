import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgswitchVsSwitchComponent } from './structural-directives-ngswitch-vs-switch.component';

describe('StructuralDirectivesNgswitchVsSwitchComponent', () => {
  let component: StructuralDirectivesNgswitchVsSwitchComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgswitchVsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgswitchVsSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgswitchVsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
