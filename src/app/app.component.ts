import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatApp';

  constructor(private http :HttpClient){}
  isOld :boolean = false;

  sendreq(){
    this.http.get('/signup').subscribe(response=>{
      console.log('working');
    },(err)=>{
      console.log('not working');
    })

  }
}
