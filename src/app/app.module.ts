import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GameComponent } from './components/game/game.component';
import { GameButtonComponent } from './components/game/game-button/game-button.component';


=======
import { GameStateService } from './services/game-state.service';
import { GameComponent } from './components/game/game.component';
>>>>>>> service

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GameComponent,
    GameButtonComponent
=======
    GameComponent
>>>>>>> service

  ],
  imports: [
    BrowserModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
