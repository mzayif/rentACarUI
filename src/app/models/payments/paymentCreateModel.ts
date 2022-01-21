import { CreditCardCreateModel } from "../creditCards/creditCardCreateModel";

export interface PaymnetCreateModel {
    rentalId: number,
    tottalPrice: number,
    saveCreditCard: boolean,
    bankDto: CreditCardCreateModel
}