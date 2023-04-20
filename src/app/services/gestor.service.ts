import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gestor } from '../interfaces/gestor.interface';

@Injectable({
    providedIn: 'root',
  })
  export class GestorService{
    gestor!: Gestor ;
    message!: String;
    private apiURL = 'http://localhost:8001/gestor/';
    constructor(private http: HttpClient) { }

    getAllGestores():Observable<Gestor[]>{
        return this.http.get<Gestor[]>(this.apiURL + 'all');
    }

    addGestor(gestor:Gestor):Observable<Gestor>{
        return this.http.post<Gestor>(this.apiURL,gestor);
    }

    editGestor(gestor:Gestor,idGestor:string):Observable<Gestor>{
        return this.http.put<Gestor>(this.apiURL + idGestor, gestor);
    }

    deleteGestor(idGestor:string):Observable<Gestor>{
        return this.http.delete<Gestor>(this.apiURL + idGestor);
    }

    getGestor(idGestor:string):Observable<Gestor>{
        return this.http.get<Gestor>(this.apiURL+ idGestor);
    }

    updateGestor(gestor: Gestor, id: string): Observable<Gestor> {
        return this.http.put<Gestor>(this.apiURL + id, gestor);
      }
}