import { DataModel } from "../dataModel";

export class Vehicle extends DataModel {
    cargoWeight: number
    category: string[]
    fuelEfficiency: number
    fuelFilled: number
    fuelType: string
    licensePlate: string

    static iconUrl = "house.svg"

    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Vehicle.iconUrl, coordinates: [arg.location.value.coordinates]})

        this.cargoWeight = arg.cargoWeight.value
        this.category = arg.category.value
        this.fuelEfficiency = arg.fuelEfficiency.value
        this.fuelFilled = arg.fuelFilled.value
        this.fuelType = arg.fuelType.value
        this.licensePlate = arg.license_plate.value
    }

    popup(coordinate: number[]): JSX.Element {
        return VehiclePopup(this, coordinate)
    }
}

const VehiclePopup = (vehicle: Vehicle, coordinate: number[]) => {
    return (
        <>
            Vehicle Object
        </>
    )
}