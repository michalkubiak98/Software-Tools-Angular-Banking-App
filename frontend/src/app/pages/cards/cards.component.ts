import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private customerService: CustomerService) { }


  cards: any[];

  ngOnInit() {
     

    //on page load show cards
    this.customerService.getCards().subscribe((cards: any[]) => {
      this.cards = cards;
    })

      

      

  }


  

  createCard(cardNo: number) {
    this.customerService.createNewCard(
      // PASS IN HARDCODED DATA TO MAKE NEW CUSTOMER
      cardNo, 'custID', '11/25', 'active', 123, 1234).subscribe((response: any) => {

      console.log(response)
      //RELOAD AFTER ADDING SO THE CUSTOMER THEN SHOWS UP
      window.location.reload();

    })
  }

}
