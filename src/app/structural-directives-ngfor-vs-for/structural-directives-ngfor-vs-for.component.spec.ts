import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgforVsForComponent } from './structural-directives-ngfor-vs-for.component';

describe('StructuralDirectivesNgforVsForComponent', () => {
  let component: StructuralDirectivesNgforVsForComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgforVsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgforVsForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgforVsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
