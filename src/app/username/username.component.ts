import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-username',
  template: ``,
  styles: [
  ]
})
export class UsernameComponent implements OnInit {
   name;
  constructor() {
    this.name = prompt('Whats your name?')
   }

  ngOnInit(): void {
  }

}
