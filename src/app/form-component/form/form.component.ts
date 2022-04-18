import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {User} from '../../class/user';
import { SearchService } from 'src/app/gitsearch-service/search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  user!: User;
  //  user:User | undefined;
    //  user:User | undefined;
 username:any;
 
  
  users!:String[];

  constructor(private searchService:SearchService) {
    this.searchService=this.searchService;
   }
   getUsers(){
         this.searchService.getData().subscribe((data)=>{
           console.log(data);
           this.users=data;
           data.avatar_url, 
           data.login,
           data.use,
           data.bio,
           data.html_url,
           data.repos

         })
  }
  
  //  newUser = new User(0,"","","",0);
  //  @Output() addGoal = new EventEmitter<User>();

  //  submit btn**function**
  
  ngOnInit(): void {
  }

}
function res(res: any, any: any) {
  throw new Error('Function not implemented.');
}

