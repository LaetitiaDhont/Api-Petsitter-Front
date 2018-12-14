import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnoncesComponent } from './create-annonces.component';

describe('CreateAnnoncesComponent', () => {
  let component: CreateAnnoncesComponent;
  let fixture: ComponentFixture<CreateAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
