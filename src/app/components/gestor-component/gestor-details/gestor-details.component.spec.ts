import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorDetailsComponent } from './gestor-details.component';

describe('GestorDetailsComponent', () => {
  let component: GestorDetailsComponent;
  let fixture: ComponentFixture<GestorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
