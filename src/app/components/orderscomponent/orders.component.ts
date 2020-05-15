import { Component } from '@angular/core';
import { Order } from 'src/app/models/app.models';
import { CustomerService } from 'src/app/services/customers.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {

    private org_orders: Array<Order>;
    public customers: Array<string>;
    public orders: Array<Order>;

    /**
     *
     */
    constructor(private customerService: CustomerService) {
        this.customerService.onEmitOrderEvent.subscribe(res => {
            this.customers = res;
            this.orders = this.org_orders.filter(x => this.customers.includes(x.customerId));
        });

        this.customerService.orders.subscribe(res => {
            this.org_orders = res;
        });
    }


}