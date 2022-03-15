import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { ApiService } from 'src/app/HTTPservice/api.service';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  Customers:any = [];

  constructor(private apiService: ApiService) {}

   ngOnInit() {
      this.apiService.getCustomers().subscribe((data:any)=>{
      this.Customers = data;
     });

   }

}
