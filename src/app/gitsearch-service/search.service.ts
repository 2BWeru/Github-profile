import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from 'src/app/class/user';
import { Repository } from '../repository-class/repository';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  repository!:Repository;
  // username: typeof User;
  username!:any;
  repoInfo = []; 
  newUserData: any ;
  profile : any ;
  static getUserInfo: any;
  newUserData2!: never;
  
  // for example


  constructor(private http:HttpClient) {
    console.log("Yeeeeyyyy");
    this.user = new User(0,"","","","","",0);
    this.repository = new Repository("","","","","","")
   }
  //  function to get github data
  getProfileData(){
    return this.http.get("https://api.github.com/users/" + this.username)
    // .map((res: { json: () => any; }) => res.json());

    interface ApiResponse{
      bio:string,
      public_repos:number,
      login:string,
      avatar_url:string,
      name:string,
      full_name:string, 
      html_url:string ,
        
  }
//   let promise =new Promise<void>((resolve,reject)=>{
//     // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
//       return this.http.get<ApiResponse>("https://api.github.com/users/" + this.username).toPromise().then(profile=>{
//           // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
//           this.user.bio = profile!.bio;
//           this.user.avatar_url = profile!.avatar_url;
//           this.user.login = profile!.login;
//           this.user.public_repos = profile!.public_repos;
//           this.user.html_url = profile!.html_url;

//           resolve()
//       },
//       error=>{
//               reject(error)
//           }
//       )
//         }
        
// //       // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
// //       this.http.get<any>("https://api.github.com/users/" + this.username + "/repos").toPromise().then(profile=>{
// //         // We then pass the interface with the get method. 
// //         for(var i=0; i<profile.length; i++)
// //         {
// //           // If the response is successful we create a new Repository instance and passing in the response properties. We then assign this new Repository instance to the newUserData property.
// //           this.newUserData = new Repository(profile[i].name,
// //             profile[i].full_name,
// //             profile[i].description,
// //             profile[i].html_url,
// //             profile[i].clone_url,
// //             profile[i].language);
// //           this.repoInfo.push(this.newUserData2);
// //         }

// //           resolve()

// //       },
// //       error=>{

// //               reject(error)
// //           }
// //       )
// //   })

// //   return promise
// // }




  
  
  
      
}}
