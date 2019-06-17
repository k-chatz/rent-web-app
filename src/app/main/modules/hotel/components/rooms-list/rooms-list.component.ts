import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  @Input() rooms;

  // Angular is fucking stupid, why is this necessary...
  counter(i: number) {
    return new Array(i);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
