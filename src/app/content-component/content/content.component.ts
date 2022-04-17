import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  // http
  // **class user
  user: User | undefined;

  constructor(private http:HttpClient) { }

  

  ngOnInit(): void {
    interface ApiResponse{
      id:number;
      username:string;
      
    }
    this.http.get<ApiResponse>("https://api.github.com/users").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.id, data.username)
    })
  }

}
