import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote-class/quote';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
   quote:Quote | undefined
  

  ngOnInit(): void {
    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    })
  }
  }


