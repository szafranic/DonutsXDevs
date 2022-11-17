import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FameService } from '../fame.service';
import { Complete, Famous } from '../famous';

@Component({
  selector: 'app-famouspersondetail',
  templateUrl: './famouspersondetail.component.html',
  styleUrls: ['./famouspersondetail.component.css']
})
export class FamouspersondetailComponent implements OnInit {

  personLast:string = "";

  private routeSub: Subscription;
  constructor(private fameAPI: FameService, private route: ActivatedRoute) { 
    this.routeSub = route.params.subscribe(params => {
      this.personLast = params['id']
    })
  }
  completeArray:Complete[] ={} as Complete[];
  ourPerson:Complete ={} as Complete;
  
  ngOnInit(): void {
    this.fameAPI.GetFamousPeople().subscribe(
      (results: Famous) => (this.completeArray = results.complete
        )
    );
    this.ourPerson = this.completeArray[0];
  }


    ngOnDestroy() {
      this.routeSub.unsubscribe();
    }
  

}
