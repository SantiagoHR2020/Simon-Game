import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GameComponent } from './simonGame/game/game.component';
=======
import { GameComponentsComponent } from './components/game/game-components/game-components.component';
import { ComponentsComponent } from './components/components.component';
import { GameComponent } from './components/game/game.component';
import { GameButtonsComponent } from './components/game/game-buttons/game-buttons.component';
>>>>>>> 53ce2d7d8ef2003bdc47063dc991d557c4200df2

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GameComponent
=======
    GameComponentsComponent,
    ComponentsComponent,
    GameComponent,
    GameButtonsComponent
>>>>>>> 53ce2d7d8ef2003bdc47063dc991d557c4200df2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
