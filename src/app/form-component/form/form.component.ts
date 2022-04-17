import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {User} from '../../class/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //  user:User | undefined;
  //  username :string;

  constructor() { }
   
  //  newUser = new User(0,"","","",0);
  //  @Output() addGoal = new EventEmitter<User>();

  //  submit btn**function**
  getUsername(){
    
      }

  ngOnInit(): void {
  }

}
