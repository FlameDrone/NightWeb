import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-message',
  template: `
    <form class="text-form">
      <textarea data-gramm="false" style="padding-top: 10px; overflow-y: hidden; outline: none; white-space: pre-w" autocorrect="off" spellcheck="true" aria-label="Message #chat" resizable="both" aria-multiline="true" aria-haspopup="true" role="textbox" placeholder="Message" id="input"></textarea>
    </form>
  `,
  styles: [
  ]
})
export class MessageComponent{
  static text:string = "";

  static get_Input(){
    this.text = (<HTMLInputElement>document.getElementById("input")).value;
    return this.text;
  }

  static set_Input(pValue:string){
    (<HTMLInputElement>document.getElementById("input")).value = pValue;
    this.text = (<HTMLInputElement>document.getElementById("input")).value;
  }
}
