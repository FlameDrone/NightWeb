import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-username',
  template: ``,
  styles: [
  ]
})
export class UsernameComponent implements OnInit {
   name:any = "";
  constructor() {
    while(this.name == "" || this.name == null){
    this.name = prompt('Whats your name?')
    }
   }

  ngOnInit(): void {
  }

}
