import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { Donut, Donuts } from '../donut';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  constructor(private donutAPI: DonutService) { }
  workingList:Donuts ={} as Donuts;
  ngOnInit(): void {
    this.donutAPI.GetDonutList().subscribe(
      (results: Donuts) => (this.workingList = results)
    );
  }

}
