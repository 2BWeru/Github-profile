import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/gitsearch-service/search.service';
import {User} from '../../class/user';
import { Repository } from '../../repository-class/repository';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user!:User;
  repository!:Repository;
  // profiledetailsservice!: ProfileDetailsService;
  searchservice!:SearchService;
  
   users!:string;

  constructor(private searchService:SearchService) {
    this.searchservice=this.searchservice;
   }
   getUsers(){
         this.searchService.getData().subscribe((data)=>{
           console.log(data)
         })
  }

  ngOnInit(): void {
  }

}
