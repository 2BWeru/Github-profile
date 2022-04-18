import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from 'src/app/class/user';
import { Repository } from '../repository-class/repository';
import * as process from 'process';


@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
title= 'hope';
  user:User;
  repository:Repository;
  // repository: Repository;
  // username:string; 
  username: string | undefined;
  repoData = []; 
  newUserData :any = [];
  


  constructor(private http:HttpClient) { 
    this.user = new User(0,"","","",0);
    this.repository = new Repository("","","","","","")
  }
  // getUserData Function Takes in the Username Input and Passes it as an Arguement which is called from the git-form.component.ts by the submitUsername function 
	getUserData(username: string){
    this.repoData.length = 0; // Empties the Array From Previous Request After a New Request
   
    interface ApiResponse{
      bio:string,
      public_repos:number,
      login:string,
      avatar_url:string,
      created_at:Date, 
      updated_at:Date,
      name:string,
      full_name:string, 
      html_url:string   
  }


  let promise =new Promise<void>((resolve,reject)=>{
    // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
          // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
          this.user.bio=response.bio;
          this.user.avatar_url=response.avatar_url;
          this.user.login=response.login;
          this.user.public_repos=response.public_repos;
          this.user.created_at=response.created_at;
          this.user.updated_at=response.updated_at;
          this.user.html_url=response.html_url;

          resolve()
      },
      error=>{
              reject(error)
          }
      )
        
      // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
        // We then pass the interface with the get method. 
        for(var i=0; i<response.length; i++)
        {
          // If the response is successful we create a new Repository instance and passing in the response properties. We then assign this new Repository instance to the newUserData property.
          this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
          this.repoData.push(this.newUserData);
        }

          resolve()

      },
      error=>{

              reject(error)
          }
      )
  })

  return promise
}




  
  
  }

  // getUser(){
  //   return User
  // }
  // get prifile function
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" )
  	 
  }
}