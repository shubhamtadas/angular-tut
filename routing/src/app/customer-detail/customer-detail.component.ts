import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { ApiService } from 'src/app/HTTPservice/api.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  Customers:any = [];

  constructor(private apiService: ApiService) {}

   ngOnInit() {
      this.apiService.getCustomers().subscribe((data:any)=>{
      this.Customers = data;
     });

   }

}
