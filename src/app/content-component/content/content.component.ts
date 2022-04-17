// import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {User}  from '../../class/user'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  // user: any;
  
  //  user = any[];
  constructor(){}
  // @Output() addUser = new EventEmitter<User>();

  // // formnew goal inputs
  // addNewProfile(user: { id: any;  }){
  //   let userLength = this.user.length;
  //   user.id = userLength+1;
  //   // user.completeDate = new Date(user.completeDate)
  //   this.user.push(user)
  // }

  // constructor(private profiledetailservice:ProfileDetailsService, private http:HttpClientModule){
  //   this.profiledetailservice.getProfileInfo().subscribe(user => {
  //     console.log(user);
    
  //   });
  


  ngOnInit(): void {}
    
  }

 
  