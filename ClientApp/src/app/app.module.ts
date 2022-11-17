import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamouspeopleComponent } from './famouspeople/famouspeople.component';
import { DonutdetailComponent } from './donutdetail/donutdetail.component';
import { FamouspersondetailComponent } from './famouspersondetail/famouspersondetail.component';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DonutdetailComponent,
    DonutsComponent,
    FamouspeopleComponent,
    FamouspersondetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'donuts', component: DonutsComponent },
      { path: 'donutdetail/:id', component: DonutdetailComponent },
      { path: 'famouspeople', component: FamouspeopleComponent },
      { path: 'famouspersondetail/:id', component: FamouspersondetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
