import { Component } from '@angular/core';
import { MyserviceService } from "./myservice.service";

import { ApiService } from './HTTPservice/api.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  todaydate:any;

  Customers:any = [];

  constructor(private myservice: MyserviceService, private apiService: ApiService) {}

   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();

      this.apiService.getCustomers().subscribe((data:any)=>{
      this.Customers = data;
     });

   }
}
