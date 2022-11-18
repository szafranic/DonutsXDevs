import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Donuts } from './donut';
import { DonutSpec } from './donutspec';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http: HttpClient) { }

  GetDonutList():Observable<Donuts>{
    let url:string = `https://grandcircusco.github.io/demo-apis/donuts.json`;
    console.log(url);
    return this.http.get<Donuts>(url);
  }
  GetDonutDetail(id:number):Observable<DonutSpec>{
    let url:string = `https://grandcircusco.github.io/demo-apis/donuts/${id}.json`;
    console.log(url);
    return this.http.get<DonutSpec>(url);
  }
  
}
