export interface RentalUpdateModel {
    id: number,
    rentDate: Date,
    returnDate: Date,
    rentedKilometer: number,
    returnedKilometer: number,
    customerId: number,
    carId: number,
    returnCityId: number
}