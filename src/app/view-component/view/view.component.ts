import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from 'src/app/gitsearch-service/search.service';
import {User} from '../../class/user';
import { Repository } from '../../repository-class/repository';
import { FormComponent } from 'src/app/form-component/form/form.component';

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
  
  @Input() githubProfile:any;

  public getData:any;
 

  constructor(private searchService:SearchService) {
    this.searchservice=this.searchservice;
   }
   
 


  ngOnInit(): void {
  }

}
