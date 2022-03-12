import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login form';
  myClickFunction() {
     alert("Welcome " + ((<HTMLInputElement>document.getElementById("username")). value));
  }
}
