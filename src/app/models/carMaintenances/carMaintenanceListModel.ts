export interface CarMaintenanceListModel {
    id: number,
    sendMaintenanceDate?: Date,
    returnMaintenanceDate?: Date,
    carId?: number,
    carPlate?: string,
    description?: string,
    brandName?: string,
    colorName?: string,
    segmentName?: string
}