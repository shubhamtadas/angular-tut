import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { ApiService } from 'src/app/HTTPservice/api.service';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  
  Customers:any = [];

  constructor(private apiService: ApiService) {}

   ngOnInit() {
      this.apiService.getCustomers().subscribe((data:any)=>{
      this.Customers = data;
     });

   }
}
