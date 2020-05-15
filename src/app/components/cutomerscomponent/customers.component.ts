import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/app.models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomersComponent {
    public customers: Array<Customer>;
    public searchText:string;
    public searchBy: string = 'city';
    public org_Customers: Array<Customer>;
    constructor(private customerService: CustomerService) {
        this.customerService.customers.subscribe(res=> {
            this.customers = res;
            this.org_Customers = res.map(x => x);
        });
    }    

    public searchOrder(id: string) {
        if(this.searchText === '') {
            this.searchBy = '';
        }
        if(id === undefined){
            switch(this.searchBy) {
                case 'city':
                    this.customers = this.org_Customers.filter(x=> x.city.toLowerCase() === this.searchText.toLowerCase());
                    this.customerService.emitOrderEvent(this.customers.filter(x=> x.city.toLowerCase() === this.searchText.toLowerCase()).map(x => x.id));
                    
                    break;
                case 'name':
                    this.customers = this.org_Customers.filter(x=> x.name.toLowerCase() === this.searchText.toLowerCase());
                    this.customerService.emitOrderEvent(this.customers.filter(x=> x.name.toLowerCase() === this.searchText.toLowerCase()).map(x => x.id));
                    break;
                default:
                    this.customers = this.org_Customers;
                    this.customerService.emitOrderEvent(this.customers.map(x => x.id));
            }
        }
        else
        { 
            this.customerService.emitOrderEvent(this.org_Customers.filter(x=> x.id.toLowerCase() === id).map(x => x.id));
        }
        
    }

    public reset() {
        this.customers = this.org_Customers;
        this.customerService.emitOrderEvent([]);
    }

  
}