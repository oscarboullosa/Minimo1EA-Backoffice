import { Component, OnInit } from '@angular/core';
import { GestorService } from 'src/app/services/gestor.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {
  gestores:any[]=[];
  filteredGestores: any[] = [];
  searchTerm: string = '';
  constructor(private gestorService:GestorService,private router:Router){}
  ngOnInit(): void {
    this.gestorService.getAllGestores().subscribe((gestores) => {
      this.gestores = gestores;
    });
  }
  showDetails(gestor:any):void{
    this.router.navigate(['/gestor-details',gestor.id]);
  }
  showEdit(gestor:any):void{
    this.router.navigate(['/gestor-edit',gestor.id]);
  }
  search() {
    if (this.searchTerm.trim() !== '') {
      this.filteredGestores = this.gestores.filter((gestor) =>
        gestor.estado.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredGestores = this.gestores;
    }
  }
}
