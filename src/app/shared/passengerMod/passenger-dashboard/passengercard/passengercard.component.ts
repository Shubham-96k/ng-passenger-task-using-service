import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passengerinterface';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {

  constructor(
    private _passsvc : PassengerService
  ){

  }

  isEnabled : boolean = false;

  @Input() passcard !: Ipassenger

  @Output() passobj : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onEdit(){
    this.isEnabled = !this.isEnabled;
  }
  onUpdate(name : HTMLInputElement){
    if(name.value){
      this.isEnabled = !this.isEnabled;
      this._passsvc.onUpdatepass(name.value, this.passcard.id)
    } 
  }

  onRemove(){
    this._passsvc.onRemovePassenger(this.passcard.id);
    this.passobj.emit()
  }
}
