import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGroupeCompetenceComponent } from './details-groupe-competence.component';

describe('DetailsGroupeCompetenceComponent', () => {
  let component: DetailsGroupeCompetenceComponent;
  let fixture: ComponentFixture<DetailsGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
