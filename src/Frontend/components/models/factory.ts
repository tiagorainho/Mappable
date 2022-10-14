import { DataModel } from "./dataModel";

import { Unknown } from "./classes/unknown";
import { Museum } from "./classes/museum";
import { PointOfInterest } from "./classes/pointOfInterest";
import { ParkingSpot } from "./classes/parkingSpot";
import { Vehicle } from "./classes/vehicle";
import { PublicTransportStop } from "./classes/busStop";

export type DataModelType = {
    id: string
    name: string
    type: string
    location: {
        type: string
        value: {
            coordinates: number[]
        }
    }
    cargoWeight: number
    category: string[]
    fuelEfficiency: number
    fuelFilled: number
    fuelType: string
    licensePlate: string
}

export type typeClusterType = {
    objects: DataModelType[]
    center: number[]
}

export class ModelFactory {

    static switch_coordinates(coordinates: number[]): number[] {
        return [coordinates[1], coordinates[0]]
    }

    static createObject(obj: DataModelType): DataModel {

        obj.location.value.coordinates = ModelFactory.switch_coordinates(obj.location.value.coordinates)

        switch(obj.type) {
            case 'Museum': return new Museum(obj)
            case 'PointOfInterest': return new PointOfInterest(obj)
            case 'Vehicle': return new Vehicle(obj)
            case 'ParkingSpot': return new ParkingSpot(obj)
            case 'PublicTransportStop': return new PublicTransportStop(obj)
        }
        return new Unknown(obj)
    }
}
