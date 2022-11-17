import { Component, OnInit } from '@angular/core';
import { FameService } from '../fame.service';
import { Famous, Complete } from '../famous';

@Component({
  selector: 'app-famouspeople',
  templateUrl: './famouspeople.component.html',
  styleUrls: ['./famouspeople.component.css']
})
export class FamouspeopleComponent implements OnInit {
  peopleList:Complete[] ={} as Complete[];
  constructor(private famousAPI:FameService) {
    this.famousAPI.GetFamousPeople().subscribe(
      (result:Famous) => (
        
        this.peopleList = result.complete
        
        )
    );
   }

  ngOnInit(): void {
  }

}
