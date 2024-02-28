import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengerlist',
  templateUrl: './passengerlist.component.html',
  styleUrls: ['./passengerlist.component.scss']
})
export class PassengerlistComponent implements OnInit {

  constructor() { }

  @Input() totalpassenger !: number;
  @Input() totalchkdin !: number;

  ngOnInit(): void {
  }

}
