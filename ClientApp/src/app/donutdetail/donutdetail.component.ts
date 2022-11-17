import { Component, OnInit } from '@angular/core';

import { DonutService } from '../donut.service';
import { DonutSpec } from '../donutspec';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donutdetail',
  templateUrl: './donutdetail.component.html',
  styleUrls: ['./donutdetail.component.css']
})
export class DonutdetailComponent implements OnInit {
  
  donutID:number = -1;

  private routeSub: Subscription;
  constructor(private donutAPI: DonutService, private route: ActivatedRoute) { 
    this.routeSub = route.params.subscribe(params => {
      this.donutID = params['id']
    });
  }
  thisDonut:DonutSpec ={} as DonutSpec;
  

  ngOnInit(): void {
    this.donutAPI.GetDonutDetail(this.donutID).subscribe(
      (results: DonutSpec) => (this.thisDonut = results)
    );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
