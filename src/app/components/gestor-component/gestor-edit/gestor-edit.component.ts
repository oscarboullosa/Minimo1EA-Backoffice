import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor-edit',
  templateUrl: './gestor-edit.component.html',
  styleUrls: ['./gestor-edit.component.css']
})
export class GestorEditComponent {
  gesData:any;
  gestorId!:string;
  isModalOpen:boolean=false;
  isDeleteUp:boolean=false;
  isEditUp:boolean=false;

  constructor(private route: ActivatedRoute, private gestorService: GestorService,private router:Router) {}

  ngOnInit(): void {
    this.loadGestorData();
  }
  loadGestorData():void{
    const url = this.route.snapshot.url.join('/');
    const parts = url.split('/');
    this.gestorId = parts[parts.length - 1];
    console.log(this.gestorId);
    this.gestorService.getGestor(this.gestorId).subscribe(gesData=>{
      this.gesData=gesData;
    });
  }
  onSubmit():void{
    this.openModal();
  }
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
    this.isDeleteUp = false;
    this.isEditUp = false;
  }

  confirmChanges(): void {
    this.gestorService.updateGestor(this.gesData, this.gestorId).subscribe(() => {
      this.closeModal();
      this.router.navigate(['/gestor']);
    });
    
    if(this.isDeleteUp){
      this.gestorService.deleteGestor(this.gestorId).subscribe(()=>{
        this.closeModal();
        this.router.navigate(['/gestor']);
      })
    } 
}
onAcceptChanges(): void {
  this.confirmChanges();
}

onCancelChanges(): void {
  this.isModalOpen = false;
  this.loadGestorData();
}
eliminar(){
  this.isDeleteUp=true;
  this.openModal();
}
editar(){
  this.isEditUp=true;
  this.openModal();
}
}
