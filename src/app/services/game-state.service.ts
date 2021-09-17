import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { COLORS, START_COUNT } from "../models/constants";
>>>>>>> 97d3e5b6148b94870960381071510867febb2458

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

<<<<<<< HEAD
  constructor() { }
=======
  // TODO
  simon: string[] = [];
  player: string[] = [];
  count: number;

  constructor() { 
    this.count = START_COUNT;
  }

  private get randomColor() {
    return COLORS[Math.floor(Math.random() * 4)];
  }

  appendSimon(increment :boolean): void {
    
    if(increment) {
      this.count++;
    }

    this.simon.push(this.randomColor);
  }

  generateSimon(): string[] {

    for(let i = 0; i < this.count; i++) {
      this.appendSimon;
    }

    return this.simon;

  }

  restartSimon(): string[] {
    this.count = START_COUNT;
    return this.generateSimon();
  }

  playerGuess(val: string) {
    this.player.push(val);
    // TODO compare arrays
  }

  compareSimon(): boolean {
    for(let i = 0; i < this.player.length; i++) {

      if(this.player[i] !== this.simon[i]) {
        return false;
      }

    }

    return true;

  }

>>>>>>> 97d3e5b6148b94870960381071510867febb2458
}
