import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { Donut, Donuts } from '../donut';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DxdService } from '../dxd.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
 //** private donutAPI: DonutService */

// workingList:Donuts ={} as Donuts;
workingList:Donut[] =[];

  constructor(private donutDB:DxdService) {
    this.donutDB.GetDonutList().subscribe((results:Donut[])=> {
      this.workingList = results;
      console.log(this.workingList);
    });
   }
 

  ngOnInit(): void {

  }

}
