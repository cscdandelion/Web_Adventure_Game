import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { SavingData } from '../savingData';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  constructor(private gameservice: GameService, private userservice: UserService,private router: Router) { }
  hint: string;
  question: string;
  options: string[];
  progress: string;
  type: string;
  savingdata: SavingData;
 
  ngOnInit() {
    this.gameservice.choose("DungeonDoor/3").subscribe((data: any) => {
      this.options = data;
      this.hint = this.options[0];
      this.question = this.options[1];
      this.options.splice(0, 1);
      this.options.splice(0, 1);
    });
  }
  save() {
    this.savingdata = {
      Progress: "new",
      Type: "empty"
    };
    this.userservice.save(this.savingdata).subscribe(
      (data: any) => {
        alert("data saved successfully! Sign in again to start a new one.");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });

  }

  choose(p: string) {
    if (p == "Option 1: Jinping Xi") {
      this.save();
      alert("win!");
      this.userservice.updatepoints(4).subscribe((data: any) => {
        alert("You earned 4 points in this turn!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
      this.router.navigate(['winning']);
    }
    else {
      this.save();
      alert("lose!");
      this.router.navigate(['']);
    }
  }

  }


