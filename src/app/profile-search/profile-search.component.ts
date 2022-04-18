import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from '../service/profile-details.service';
import {User} from '../class/user';
import { Repository } from '../repository-class/repository';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  user!: User; 
  repository!:Repository
  profiledetailsservice!: ProfileDetailsService;
  repoInformation!: any[] ;

  constructor(profiledetails:ProfileDetailsService,) {
    this.profiledetailsservice;ProfileDetailsService;
   }

  ngOnInit() {
    this.user = this.profiledetailsservice.user; // / Get the Response from SearchGithubService from user then assign it to user which we'll use to render the instances of User on the HTML
    this.repoInformation = this.profiledetailsservice.repoInfo; // Get the Response from SearchGithubService from repoData array then assign it to repoDetails which we'll use to render the instances of Repository on the HTML
  }

}
