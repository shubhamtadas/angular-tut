import { Component } from '@angular/core';
import { UserdataService} from "./services/userdata.service";
// import { ApiService } from './apiservice/api.service';
// import { Customer } from './customerClass/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May",
           "June", "July", "August", "September",
           "October", "November", "December"];
  isavailable = true;
  myClickFunction() {
  //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    // console.log(event);
  }
  changemonths() {
     alert("Changed month from the Dropdown");
     console.log(event);
  }
  todaydate1 = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   months_1 = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  users;
  todaydate;
   constructor(private userdata:UserdataService)
   {
    // console.warn("userdata",userdata.users())
    this.users = userdata.users();

    this.todaydate = this.userdata.showTodayDate(); //
  }

}
