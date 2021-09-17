import { Component, Input, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {
  @Input()
  color: string;

  onClick() {
  console.log(`${this.color} clicked`)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
