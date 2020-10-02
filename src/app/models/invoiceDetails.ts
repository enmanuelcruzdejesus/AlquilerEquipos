import { Product } from './product';
export class InvoiceDetails{
    id: number;
    invoiceid: number;
    productid: number;
    quantity: number;
    unitprice: number;
    value: number;
    
    product: Product;
    
}