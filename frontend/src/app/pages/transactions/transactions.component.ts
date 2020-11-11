

import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {


  customers: any[];

  constructor(private customerService: CustomerService) { }

  ngOnInit()  {
    

    //on page load call this
    this.customerService.getCustomers().subscribe((customers: any[]) => {
      this.customers = customers;
    })

  }


  // Create a new customer method from CustomerService - this would be done at the start of the application in real world and filled in from inputs
  // We are however working with a hardcoded customer for now to give him cards and transactions

  createNewCustomer() {
    this.customerService.createCustomer(
      // PASS IN HARDCODED DATA TO MAKE NEW CUSTOMER
    'Michal', 'Kubiak', 'Street', 'town', 'county', '4th April 1998',
    'email', 0, 0, 0).subscribe((response: any) => {

      console.log(response)
      //RELOAD AFTER ADDING SO THE CUSTOMER THEN SHOWS UP
      window.location.reload();

    })
  }
  



}
