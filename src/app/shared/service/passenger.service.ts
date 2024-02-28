import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passengerinterface';
import { passengerArray } from '../const/passenger';
import { SnackbarrService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passArr : Array<Ipassenger> = passengerArray;

  constructor(private _snacksvc : SnackbarrService) { }

  fetchdata(){
   return this.passArr;
  }

  onUpdatepass(name : string, id: number){
    for(let i = 0; i < this.passArr.length; i++){
      if(this.passArr[i].id === id){
        let oldname = this.passArr[i].fullname; 
        this.passArr[i].fullname = name;
        this._snacksvc.openSnackbar(`Passenger Name Updated from ${oldname} to ${this.passArr[i].fullname}`);
        break;
      }
    }
  }

  onRemovePassenger(id: number){
    let getindex = this.passArr.findIndex(eve => eve.id === id);
    let fullname = this.passArr[getindex].fullname;
    this.passArr.splice(getindex,1);
    this._snacksvc.openSnackbar(`passenger ${fullname} has been removed.`)
  }

  
}
