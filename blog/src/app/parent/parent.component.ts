import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName:any[] = []
  usersList:any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdded()
  {
    this.usersList.push(this.userName);
  }
}
