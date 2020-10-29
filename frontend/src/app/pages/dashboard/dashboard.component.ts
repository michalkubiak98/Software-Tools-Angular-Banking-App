import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  customers: any[];

  constructor(private customerService: CustomerService) { }

  ngOnInit()  {
  }


  
  createNewCustomer() {
    this.customerService.createCustomer('d','d').subscribe((response: any) => {
      console.log(response)

    })
  }
  



}
