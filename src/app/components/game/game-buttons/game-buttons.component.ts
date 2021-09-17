import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.css']
})
export class GameButtonsComponent implements OnInit {

  @Input()
  color: any;


  @Output() 
  guess: EventEmitter<string> = new EventEmitter<string>();
  active: boolean = true;
  constructor() {}

  ngOnInit() {}

  onClick(){
    this.guess.emit(this.color);

  }

}
