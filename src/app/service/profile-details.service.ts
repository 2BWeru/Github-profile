import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from 'src/app/class/user';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
title= 'hope';
  // user:User | undefined;
  private username:string; 

  constructor(private http:HttpClient) { 
     console.log('Wellowww');
     this.username="Kenya";
  }
  // getUser(){
  //   return User
  // }
  // get prifile function
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" )
  	 
  }

  }


