import { InvoiceDetails } from './invoiceDetails';
import { Customer } from './customer';
export class Invoice {
    id: number;
    customerid: number;
    orderdate: Date;
    deliverdate:Date;
    total: number;
    customer: Customer;

    items: InvoiceDetails[];
}