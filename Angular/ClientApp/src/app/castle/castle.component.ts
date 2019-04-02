import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { SavingData } from '../savingData';
import { Type } from '@angular/compiler/src/core';

@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.css']
})
export class CastleComponent implements OnInit {



  options: string[];
  hint: string;
  url: string;
  question: string;
  src: string;
  progress: string = "new";
  type: string;
  savingdata: SavingData;
  constructor(private gameservice: GameService, private router: Router, private userservice: UserService, private dataservice: DataService) { }

  ngOnInit() {
    this.url = "CastleDoor";
    if (this.dataservice.curUser['type'] != "empty")
      this.url = this.dataservice.curUser['progress'];
    
    this.gameservice.choose(this.url).subscribe((data: any) => {
      this.progress = this.dataservice.curUser['progress'];
      this.type = "castle";
      this.options = data;
      this.hint = this.options[0];
      this.options.splice(0, 1);
        

    });
  }

  save() {
    this.savingdata = {
      Progress: this.progress,
      Type: this.type
    };
    this.userservice.save(this.savingdata).subscribe(
      (data: any) => {
        alert("data saved successfully!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
   
  }
  logout() {
    alert("You will log out, all the progress not saved wiil be lose.");
    this.dataservice.curUser = {
      UserId: -1,
      UserName: '',
      PassWord: '',
      Progress: '',
      Points: 0,
      Type: ''
    };
    this.router.navigate(['']);
  }

  rank() {
    this.router.navigate(['rank']);
  }

  choose(o: string, idx: number) {
    if (o == "Wizard: Run out of the Game" || o == "All your wishes come true but you have to stay here!" || o == "Option 1: Shahrukh Khan") {
      alert("Die!");
      this.progress = "new";
      this.type = "empty";
      this.save();
      this.router.navigate(['']);
    }

    else if (o == "Option 2: Narendra Modi") {

      alert("Won!");
      this.progress = "new";
      this.type = "empty";
      this.save();
      this.userservice.updatepoints(3).subscribe((data: number) => {
        console.log(data);

        alert("You earned 3 points in this turn!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
      this.router.navigate(['winning']);

   }
    else if (o == "Woho! A flying broom") {
      alert("Won!");
      this.progress = "new";
      this.type = "empty";
      this.save();
      this.userservice.updatepoints(1).subscribe((data: any) => {
        alert("You earned 1 points in this turn!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
      this.router.navigate(['']);
    }
    else if (o == "You can see the future") {
      this.progress = "riddle";
      this.router.navigate(['riddle']);
    }



    else if (o == "You can see the Past") {
      this.gameservice.choose("CastleMirrorPast").subscribe((data: any) => {
        this.progress = "CastleMirrorPast";
        this.options = data;
        this.hint = this.options[0];
        this.options.splice(0, 1);

      });

    }
    else if (o == "Clear Memories") {

      this.gameservice.choose("CastleMirrorPast/1").subscribe((data: any) => {
        this.progress = "CastleMirrorPast/1";
        this.options = data;
        this.hint = this.options[0];
        this.question = this.options[1];
        this.options.splice(0, 1);
        this.options.splice(0, 1);

      });

    }
    else if (o == "Keep Memories") {

      this.router.navigate(['question']);
      this.progress = "question";
    }
  
    else {
      idx = idx + 1;
      this.url = this.url + "/" + idx;
      this.gameservice.choose(this.url).subscribe((data: any) => {
        this.progress = this.url;
        this.options = data;
        this.hint = this.options[0];
        this.options.splice(0, 1);
      });
    }
  }
}
