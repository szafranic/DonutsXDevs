import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Famous } from './famous';

@Injectable({
  providedIn: 'root'
})
export class FameService {

  constructor(private http: HttpClient) { }

  GetFamousPeople():Observable<Famous>{
    let url:string = `https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`;
    console.log(url);
    return this.http.get<Famous>(url);
  }

}
