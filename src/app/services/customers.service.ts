import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, Order } from '../models/app.models';

@Injectable({
    providedIn: "any"
})
export class CustomerService {
    
    public onEmitOrderEvent: EventEmitter<string[]> = new EventEmitter<string[]>();

    private customerObservable: Observable<Array<Customer>> = new Observable(observer => {
        observer.next(Customers);
    });
    private orderObservable: Observable<Array<Order>> = new Observable(observer => {
        observer.next(Orders);
    });
    get customers(): Observable<Array<Customer>> {
        return this.customerObservable;
    }

    get orders(): Observable<Array<Order>> {
        return this.orderObservable;
    }

    public emitOrderEvent(customers: Array<string>): void {
        this.onEmitOrderEvent.emit(customers);
    }

}

const Customers: Array<Customer> = [
    {
        "id":"12345",
        "name": "Ramesh",
        "email": "ramesh@tavisca.com",
        "city": "Pune",
        "contactNumber": "9876543210"
    },
    {
        "id":"12346",
        "name": "Suresh",
        "email": "suresh@tavisca.com",
        "city": "Pune",
        "contactNumber": "9876543211"
    },
    {
        "id":"12347",
        "name": "Jignesh",
        "email": "jignesh@tavisca.com",
        "city": "Ahmedabad",
        "contactNumber": "9876543212"
    },
    {
        "id":"12348",
        "name": "Animesh",
        "email": "animesh@tavisca.com",
        "city": "Raipur",
        "contactNumber": "9876543213"
    }
]

const Orders: Array<Order> = [{
    "id": "A123",
    "name": "Desktop",
    "customerId": "12345",
    "quantity": 1,
    "amount": 23500
},
{
    "id": "B123",
    "name": "Chairs",
    "customerId": "12346",
    "quantity": 3,
    "amount": 900
},
{
    "id": "C123",
    "name": "Table",
    "customerId": "12346",
    "quantity": 2,
    "amount": 300
},
{
    "id": "D123",
    "name": "Mobile",
    "customerId": "12347",
    "quantity": 1,
    "amount": 13500
}
]