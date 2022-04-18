import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { ProfileDetailsService } from 'src/app/service/profile-details.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user!: User;
  profiledetailsservice: typeof ProfileDetailsService;
  //  user:User | undefined;
    //  user:User | undefined;
  username!: string;

  constructor(profiledetail:ProfileDetailsService) { 
    this.profiledetailsservice= ProfileDetailsService
  }
   
  //  newUser = new User(0,"","","",0);
  //  @Output() addGoal = new EventEmitter<User>();

  //  submit btn**function**
  getUserprofile(){
    this.profiledetailsservice.getUserInfo(this.username);
      }

  ngOnInit(): void {
  }

}
