import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isOld:any;
  @Output() isOldChange = new EventEmitter();

  toggle(){
    this.isOld = !this.isOld;
    console.log(this.isOld);
    this.isOldChange.emit(this.isOld);
  }
}
