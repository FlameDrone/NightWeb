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
      if(message.replace(" ", "").replace("\n","").replace("\r","").replace(/\r\n|\r|\n/g, "") != ""){
        var bool: boolean = confirm("Are you sure you want to send this message?");
        if(bool){
          console.log(message);
          MessageComponent.set_Input("");
        }
      }
  }
}