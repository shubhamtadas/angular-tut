import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child1Component } from "src/app/child1/child1.component";
@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit, AfterViewInit {
  parentMessage: string = "";
  @ViewChild(Child1Component) child !: Child1Component;
  constructor() { }
  ngAfterViewInit(): void {
        this.parentMessage = this.child.childData;
  }
  ngOnInit(): void {
  }

}
