import { Component, OnInit } from '@angular/core';
import { FameService } from '../fame.service';
import { Famous, Complete } from '../famous';

import { DxdService } from '../dxd.service';
@Component({
  selector: 'app-famouspeople',
  templateUrl: './famouspeople.component.html',
  styleUrls: ['./famouspeople.component.css']
})
export class FamouspeopleComponent implements OnInit {
  peopleList:Complete[] ={} as Complete[];
// private famousAPI:FameService

  constructor(private fameDB:DxdService) {
    this.fameDB.GetFamousPeople().subscribe(
      (result:Complete[]) => (
        
        this.peopleList = result
        
        )
    );
   }

  ngOnInit(): void {
  }

}
