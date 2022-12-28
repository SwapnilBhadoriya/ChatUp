import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
@Input() isOld:any;
@Output() isOldChange = new EventEmitter();

toggle(){
  this.isOld = !this.isOld;
  console.log(this.isOld);
  this.isOldChange.emit(this.isOld);
}

}
