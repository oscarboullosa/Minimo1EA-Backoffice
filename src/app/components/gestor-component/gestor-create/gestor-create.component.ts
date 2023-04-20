import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestorService } from 'src/app/services/gestor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestor-create',
  templateUrl: './gestor-create.component.html',
  styleUrls: ['./gestor-create.component.css']
})
export class GestorCreateComponent {
  gesForm: FormGroup | any;
  isModalOpen:boolean=false;
  constructor(private formBuilder: FormBuilder, private gestorService: GestorService, private router: Router) { }
  ngOnInit():void{
    this.gesForm = this.formBuilder.group({
      estado: ['', Validators.required],
      disponible: ['', Validators.required],
    });
    
  }
  get f() {
    return this.gesForm.controls;
  }
  onSubmit():void{
    if (this.gesForm.invalid) {
      
      alert('Por favor, completa todos los campos requeridos');
      this.router.navigate(['gestor']);
    }
    this.openModal();
  }
  confirmChanges(): void {
    const gesData = this.gesForm.value;
    this.gestorService.addGestor(gesData).subscribe(
      (response) => {
        console.log('Gestor guardado correctamente:', response);
        this.router.navigate(['gestor']);
      },
      (error) => {
        console.error('Error al guardar gestor:', error);
      }
    );
    this.closeModal();
  }
  onAcceptChanges(): void {
    this.confirmChanges();
    this.ngOnInit();
  }
  onCancelChanges(): void {
    this.isModalOpen = false;
  }
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
  }
