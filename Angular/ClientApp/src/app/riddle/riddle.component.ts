import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SavingData } from '../savingData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.css']
})
export class RiddleComponent implements OnInit {
  options: string[];
  hint: string;
  url: string;
  question: string;
  ans: string;
  progress: string;
  type: string;
  savingdata: SavingData;
  constructor(private gameservice: GameService, private router: Router, private userservice: UserService) { }

  ngOnInit() {

    this.gameservice.choose("CastleMirrorFuture").subscribe((data: any) => {
      this.options = data;
      this.hint = this.options[0];
      this.question = this.options[1];
     
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
  confirm() {

    if (this.ans == "thanks") {
      alert("Won!");
      this.save();
      this.userservice.updatepoints(6).subscribe((data: any) => {
        alert("You earned 6 points in this turn!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
      this.router.navigate(['wining']);
    }
    else {
      alert("Die!");
      this.save();
      this.router.navigate(['']);

    }
  }

}
