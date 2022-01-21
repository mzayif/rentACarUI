import { InvoiceCreateModel } from './invoiceDetail';

export interface InvoiceUpdateModel {
    id: number,
    rentalId: number,
    invoiceDate: Date,
    totalPrice: number,
    paymentList: any, //PaymentListModel,
    invoiceDetails: InvoiceCreateModel[] //RentalInvoiceDetailModel
}