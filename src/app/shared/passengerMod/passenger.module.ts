import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengercardComponent } from './passenger-dashboard/passengercard/passengercard.component';
import { PassengerlistComponent } from './passenger-dashboard/passengerlist/passengerlist.component'
import { MaterialModule } from "../material/material/material.module";



@NgModule({
    declarations: [
    PassengerDashboardComponent,
    PassengercardComponent,
    PassengerlistComponent
  ],
    imports: [CommonModule,
      MaterialModule],
    exports: [PassengerDashboardComponent]
})
export class PassengerModule {
    constructor(){
        
    }

}