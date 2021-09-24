import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  template: `
    <h1 id = "welcome-message" class = "text">
      Welcome to the Night-Messaging-Site! 😎
    </h1>
  `,
  styles: [
  ]
})
export class WelcomeMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
