import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { GameComponent } from './components/game/game.component';
import { GameButtonsComponent } from './components/game/game-buttons/game-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    GameComponent,
    GameButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
