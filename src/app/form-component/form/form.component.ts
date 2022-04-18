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
 
  
  users!:string;

  constructor(private searchService:SearchService) {
    this.searchService=this.searchService;
   }
   getUsers(){
         this.searchService.getData().subscribe((data)=>{
           console.log(data)
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

