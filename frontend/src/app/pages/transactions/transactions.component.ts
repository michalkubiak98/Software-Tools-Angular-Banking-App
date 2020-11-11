import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {


  transactions: any[];
  
  constructor(private customerService: CustomerService) { }



  ngOnInit() {

    this.customerService.getTransactions().subscribe((transactions: any[]) => {
      this.transactions = transactions;
    })

  }


  createNewTransaction(inOut: string, amount: number) {
    this.customerService.createNewTransaction(
      // PASS IN HARDCODED DATA TO MAKE NEW CUSTOMER
    'custID', 'title', 'date', 'type', amount, inOut
    ).subscribe((response: any) => {

      console.log(response)
      //RELOAD AFTER ADDING SO THE CUSTOMER THEN SHOWS UP
      window.location.reload();

    })
  }

}
