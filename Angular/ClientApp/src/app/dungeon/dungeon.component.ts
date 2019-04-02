import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { SavingData } from '../savingData';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {


  options: string[];
  hint: string;
  url: string;
  progress: string = "new";
  type: string;
  savingdata: SavingData;

  constructor(private gameservice: GameService, private router: Router, private dataservice: DataService, private userservice: UserService) { }

  ngOnInit() {
    this.url = "DungeonDoor";
    if (this.dataservice.curUser['type'] != "empty")
      this.url = this.dataservice.curUser['progress'];

    this.gameservice.choose(this.url).subscribe((data: any) => {
      this.progress = this.dataservice.curUser['progress'];
      this.type = "dungeon";
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

  rank() {
    this.router.navigate(['rank']);
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




  
  choose(o: string,idx:number) {
    if (o == "Attack") {

      this.progress = "new";
      this.type = "empty";
      this.save();
      alert("Won");
      this.userservice.updatepoints(2).subscribe((data: any) => {
        alert("You earned 2 points in this turn!");
      }, (err: HttpErrorResponse) => {
        alert("Failed @_@");
      });
      this.router.navigate(['winning']);
    1}
    else if (o == "Run" || o == "Jump from the top of the Mountain") {
      this.progress = "new";
      this.type = "empty";
      this.save();
      alert("Die");
      this.router.navigate(['']);
    }
    else if (o == "Door 3") {
      this.progress = "puzzle";

      alert("Challenge!");
      
      this.router.navigate(['puzzle']);
    }
    else {
      idx = idx+1;
      this.url = this.url + "/" + idx;
      this.gameservice.choose(this.url).subscribe((data: any) => {
        this.options = data;
        this.progress = this.url;
        
        this.hint = this.options[0];
        this.options.splice(0, 1); });
    }
  }

}
