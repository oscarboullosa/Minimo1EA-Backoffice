import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorEditComponent } from './gestor-edit.component';

describe('GestorEditComponent', () => {
  let component: GestorEditComponent;
  let fixture: ComponentFixture<GestorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
