import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private webReqService: WebRequestService) { }

  createCustomer(firstName: string, lastName: string, street: string, 
    town: string, county: string, dateOfBirth: string, email: string, 
    regNo: number, passcode: number, balance: number){
    // send web request to create a customer
    return this.webReqService.post('dashboard', {firstName, lastName,
      street, town, county, dateOfBirth, email, regNo, passcode, balance
     })
  }

  
  //GET CUSTOMER FIRST NAME ONTO THE MAIN DASHBOARD
  getCustomers() {
    return this.webReqService.get('dashboard')
  }





  createNewCard(cardNo: number, customerId: string, expiry: string, status: string, cvv: number, pincode: number){
    // send web request to create a customer
    return this.webReqService.post('cards', {
      cardNo, customerId, expiry, status, cvv, pincode
     })
  }


  getCards() {
    return this.webReqService.get('cards')
  }

}
