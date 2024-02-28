import { Component, DoCheck, OnInit } from '@angular/core';
import { PassengerService } from '../../service/passenger.service';
import { Ipassenger } from '../../model/passengerinterface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  
  chkdincount !: number

  constructor(private _passenger : PassengerService) { }
  passArr !: Ipassenger[]

  ngOnInit(): void {
    this.passArr = this._passenger.fetchdata()
    this.chkdin()
  }
  // ngDoCheck(): void {
  //   this.passArr = this._passenger.fetchdata()
  //   this.chkdin()
  // }

  onchange(){
    this.chkdin()
  }

  chkdin(){
    this.chkdincount = this.passArr.filter(ele => ele.checkedIn).length;
  }

}
