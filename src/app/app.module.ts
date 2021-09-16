import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameStateService } from './services/game-state.service';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
