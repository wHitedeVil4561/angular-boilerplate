import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient,private localStorage:LocalStorageService){}
  title = 'angular-boilerplate';
  ngOnInit(): void {
    this.localStorage.setItem("userDetails",{userName:'Deepak Kumar Gupta',age:12})
    console.log("app component")
    // this.http.get('https://fitearnmediastoredev.s3.ap-south-1.amazonaws.com/00f02e7b-6e59-48ee-8f3a-178450ca3a63bulb-emoji.json').subscribe((res)=>{
    //   console.log(res)
    // })
  }
}
