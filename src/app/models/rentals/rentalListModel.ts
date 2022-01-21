
export interface RentalListModel {
    id: number,
    rentDate: Date,
    returnDate: Date,
    rentedKilometer: number,
    returnedKilometer: number,
    customerId: number,
    carId: number,
    returnCityId: number,
    picUpCityId: number
}