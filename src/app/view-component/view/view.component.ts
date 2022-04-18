import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/gitsearch-service/search.service';
import { ProfileDetailsService } from 'src/app/service/profile-details.service';
import {User} from '../../class/user';
import { Repository } from '../../repository-class/repository';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user!: User; 
  repository!:Repository
  // profiledetailsservice!: ProfileDetailsService;
  searchservice!:SearchService;
  repoInformation!: any[] ;
  profile!: Object;
  profiledetailsservice!: ProfileDetailsService;

  constructor(_profiledetails:ProfileDetailsService,_searchservice:SearchService) {
    this.profiledetailsservice;ProfileDetailsService;
    this.searchservice=this.searchservice;
   }
   getUserProfile(){
    return this.user;
  }

  ngOnInit(): void {
  }

}
