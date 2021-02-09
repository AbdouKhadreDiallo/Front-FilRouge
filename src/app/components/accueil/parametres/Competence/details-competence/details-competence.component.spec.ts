import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompetenceComponent } from './details-competence.component';

describe('DetailsCompetenceComponent', () => {
  let component: DetailsCompetenceComponent;
  let fixture: ComponentFixture<DetailsCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
