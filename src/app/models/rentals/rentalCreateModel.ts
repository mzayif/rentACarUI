
export interface RentalCreateModel {
    rentDate: Date,
    returnDate: Date,
    rentedKilometer: number,
    customerId: number,
    carId: number,
    picUpCityId: number,
    returnCityId: number
}