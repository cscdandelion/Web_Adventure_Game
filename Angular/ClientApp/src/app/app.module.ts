import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CastleComponent } from './castle/castle.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { UserService } from './user.service';
import { GameService } from './game.service';
import { DataService } from './data.service';
import { StartComponent } from './start/start.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { RiddleComponent } from './riddle/riddle.component';
import { QuestionComponent } from './question/question.component';
import { RankComponent } from './rank/rank.component';
import { WinningComponent } from './winning/winning.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CastleComponent,
    DungeonComponent,
    StartComponent,
    PuzzleComponent,
    RiddleComponent,
    QuestionComponent,
    RankComponent,
    WinningComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'dungeon', component: DungeonComponent },
      { path: 'login', component: LoginComponent },
      { path: 'start', component: StartComponent },
      { path: 'castle', component: CastleComponent },
      { path: 'puzzle', component: PuzzleComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'riddle', component: RiddleComponent },
      { path: 'rank', component: RankComponent },
      { path: 'winning', component: WinningComponent },
    ])
  ],
  providers: [GameService, UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
