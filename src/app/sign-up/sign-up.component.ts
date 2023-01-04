import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
 
  constructor(private http: HttpClient) {}

  

  
  createUser(userdata: any) {
    console.log(userdata);
    this.http.post('user/signUp', userdata).subscribe((res:any) => {
      console.log(res.token);
      localStorage.setItem('token',res.token);

    });
  }
}
