import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SavingData } from '../savingData';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  options: string[];
  hint: string;
  url: string;
  question: string;
  src: string;
  ans: string;
  progress: string;
  type: string;
  savingdata: SavingData;
  constructor(private gameservice:GameService, private router: Router, private userservice: UserService) { }


  ngOnInit() {
    this.gameservice.choose("CastleMirrorPast/2").subscribe((data: any) => {
      this.options = data;
      this.hint = this.options[0];
      this.question = this.options[1];
      this.src = this.options[2];
      this.options.splice(0, 1);
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
  confirm() {

    if (this.ans == "15") {
      alert("Won!");
      this.save();
      this.userservice.updatepoints(5).subscribe((data: any) => {
        alert("You earned 5 points in this turn!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
      this.router.navigate(['winning']);
    }
    else {
      alert("Die!");
      this.save();
      this.router.navigate(['']);

    }
  }

}
