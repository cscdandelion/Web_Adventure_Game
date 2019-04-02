import { Component, OnInit } from '@angular/core';
import { LogInfo } from '../LogInfo';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  data: User;
  isLoginError: boolean = false;
  loginfo: LogInfo;
  constructor(private userservice: UserService, private router: Router, private dataservice: DataService) {
  }

  ngOnInit() {
    
  }

  checkIfUserValid() {
    this.loginfo = {
      UserName: this.userName,
      PassWord: this.password
    };
    this.userservice.login(this.loginfo).subscribe((data: User) => {
      this.dataservice.curUser = data;
      console.log(data);
      console.log(this.dataservice.curUser);

      if (this.dataservice.curUser['progress'] == "new")
        this.router.navigate(['start']);
      else if (this.dataservice.curUser['progress'] == "question") {

        this.router.navigate(['question']);
      }
      else if (this.dataservice.curUser['progress'] == "puzzle") {

        this.router.navigate(['puzzle']);
      }
      else if (this.dataservice.curUser['progress'] == "riddle") {

        this.router.navigate(['riddle']);
      }
      else {
        if (this.dataservice.curUser['type'] == "dungeon") 
          this.router.navigate(['dungeon']);
          else {
          this.router.navigate(['castle']);
        }
      }
    }, (err: HttpErrorResponse) => {
      alert("Failed @_@");
    });
  }

  register() {
    this.loginfo = {
      UserName: this.userName,
      PassWord: this.password
    };
    this.userservice.register(this.loginfo).subscribe((data: any) => {
      this.dataservice.curUser = data;
      console.log(this.dataservice.curUser.Progress);
      this.router.navigate(['start']);
    }, (err: HttpErrorResponse) => {
      alert("Failed");
    });
  }

}
