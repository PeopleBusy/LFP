import { Injectable } from '@angular/core';
import { ILiasse } from '../models/ILiasse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LiasseService {

  private liasseURL = 'api/liasses';
  constructor(private http: HttpClient) {
   }

  getLiasses(): Observable<ILiasse[]>{
    return this.http.get<ILiasse[]>(this.liasseURL);
  }
  
  updateLiasse(liasse: ILiasse){
    return this.http.put(this.liasseURL, liasse, httpOptions)
  }
}
