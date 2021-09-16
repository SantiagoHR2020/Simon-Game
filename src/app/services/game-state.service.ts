import { Injectable } from '@angular/core';

import { COLORS, START_COUNT } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  simon: string[] = [];
  player:string[] = [];
  counter: number;


  constructor() {
    this.counter = START_COUNT;
   }

   private get randomSimonColor(){
      return COLORS[Math.floor(Math.random() * 4)];
   }

   simonAppend(){
     this.counter++;
     this.simon.push(this.randomSimonColor);
   }

   simonSeqGenerate() {
     for (let i = 0; i< this.counter; i++){
        this.simonAppend();
     }

     return this.simon;
   }
}
