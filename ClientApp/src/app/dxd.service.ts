import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Donuts, Donut } from './donut';
import { DonutSpec } from './donutspec';
import { Famous,Complete } from './famous';

@Injectable({
  providedIn: 'root'
})
export class DxdService {

  baseUrl:string;
  constructor(private http:HttpClient, @Inject("BASE_URL") private url:string) { 
    this.baseUrl = url;
  }

  GetDonutList():Observable<Donut[]>{
    return this.http.get<Donut[]>(this.baseUrl+"api/Donuts");
  }

  GetDonutDetail(id:number):Observable<DonutSpec>{
    return this.http.get<DonutSpec>(this.baseUrl+`api/Donut/${id}`);
  }

  GetFamousPeople():Observable<Complete[]>{
    return this.http.get<Complete[]>(this.baseUrl+`api/Hall/`);
  }


}
