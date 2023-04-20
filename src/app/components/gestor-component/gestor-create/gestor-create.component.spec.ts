import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCreateComponent } from './gestor-create.component';

describe('GestorCreateComponent', () => {
  let component: GestorCreateComponent;
  let fixture: ComponentFixture<GestorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
