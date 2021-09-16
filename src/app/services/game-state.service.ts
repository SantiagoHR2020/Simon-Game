import { Injectable } from '@angular/core';

import { START_COUNT } from '../models/constant';

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
     
   }
}
