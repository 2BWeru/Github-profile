import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from '../service/profile-details.service';
import {User} from '../class/user';
import { Repository } from '../repository-class/repository';
import { SearchService } from '../gitsearch-service/search.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  user!: User; 
  repository!:Repository
  profiledetailsservice!: ProfileDetailsService;
  searchservice!:SearchService;
  repoInformation!: any[] ;
  profile!:User ;

  constructor(_profiledetails:ProfileDetailsService,_searchservice:SearchService) {
    this.profiledetailsservice;ProfileDetailsService;
    this.searchservice.getProfileData().subscribe(profile =>{
      console.log(profile);
    })
   }

  ngOnInit() {
     this.user = this.searchservice.user; // / Get the Response from SearchGithubService from user then assign it to user which we'll use to render the instances of User on the HTML
    // this.repoInformation = this.searchservice.repoInfo; // Get the Response from SearchGithubService from repoData array then assign it to repoDetails which we'll use to render the instances of Repository on the HTML
  }

}
