import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {User} from '../../class/user';
import { SearchService } from 'src/app/gitsearch-service/search.service';
import { Repository } from 'src/app/repository-class/repository';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  user!: User;
  repository!:Repository
  //  user:User | undefined;
    //  user:User | undefined;
 public username!:String;

 public githubProfile:any;
 public githubRepo!: any[];
 public errorMessage:any;
 
  users!:String[];
  // showDescription!: false;

  constructor(private searchService:SearchService) {
    this.searchService=this.searchService;
    this.user = new User("","","","","",0);
    this.repository = new Repository("","","","","","")
   }
   searchUser(){}
  //  method 2

   getUsers(){
    // to get the github profile
    // this.searchService.showDescription = !this.searchService.showDescription;
    this.searchService.getData(this.username).subscribe( (data: { name: any; full_name: any; description: any; html_url: any; clone_url: any; language: any; })=>{
    }, (error: any) =>{
         this.errorMessage=(error);
    });
    
              

    // to get github repos
    this.searchService.getRepo(this.username).subscribe( (data)=>{
      this.githubRepo=data;
    }, (error) =>{
      this.errorMessage=error;
    });
  }
  //  method 1

  //  getUsers(){
  //        this.searchService.getData(this.username).subscribe((data)=>{
  //          console.log(data);
  //          this.users=data;
  //          data.avatar_url, 
  //          data.login,
  //          data.use,
  //          data.bio,
  //          data.html_url,
  //          data.repos

  //        })

  //       }
  //  newUser = new User(0,"","","",0);
  //  @Output() addGoal = new EventEmitter<User>();

  //  submit btn**function**
  
  ngOnInit(): void {
  }

}


