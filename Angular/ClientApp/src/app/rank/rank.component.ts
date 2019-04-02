import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  users: User[];
  constructor(private userservice: UserService, private router: Router, private dataservice: DataService) { }

  ngOnInit() {

    this.userservice.getrank().subscribe((data: any) => this.users = data);

  }

}
