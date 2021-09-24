import { Component} from '@angular/core';
import { MessageComponent } from 'src/app/message/message.component'

@Component({
  selector: 'app-confirm-button',
  template: `
    <button (click)="confirm()" id = "confirm"> Confirm </button>
  `,
  styles: [
  ],
})
export class ConfirmButtonComponent{

  constructor() { }

  confirm(){
      var message:string = MessageComponent.get_Input();
      var reg = /^[0-9a-zA-Z]+/;
      if(reg.test(message)){
        console.log(message);
      }
  }
}