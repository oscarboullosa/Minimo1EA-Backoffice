import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor-details',
  templateUrl: './gestor-details.component.html',
  styleUrls: ['./gestor-details.component.css']
})
export class GestorDetailsComponent {
  gesData:any;
  gesId!:string;

  constructor(private route: ActivatedRoute, private gestorService: GestorService,private router:Router) {}

  ngOnInit(): void {
    this.loadGestorData();
  }

  loadGestorData(): void {
    const url = this.route.snapshot.url.join('/');
    const parts = url.split('/');
    this.gesId = parts[parts.length - 1];
    console.log(this.gesId);
    this.gestorService.getGestor(this.gesId).subscribe(gesData=>{
      this.gesData=gesData;
    });
  }
}
