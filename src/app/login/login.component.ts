import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient , private router:Router) {}
  UserLogIn(credentials: any) {
    console.log('hello');
    this.http.post('/user/login', credentials).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('user',res.id);
      this.router.navigate(['/users']);
    });
  }
}
