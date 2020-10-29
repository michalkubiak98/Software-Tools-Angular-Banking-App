import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private webReqService: WebRequestService) { }

  createCustomer(firstName: String, secondName: String){
    // send web request to create a customer
    return this.webReqService.post('dashboard', { firstName, secondName })
  }


  //GET CUSTOMER FIRST NAME ONTO THE MAIN DASHBOARD
  getCustomers() {
    return this.webReqService.get('')
  }
}
