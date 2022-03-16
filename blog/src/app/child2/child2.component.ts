import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message: string = "Hola Mundo!";
  constructor() { }
  @Output() recieveMessageEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
