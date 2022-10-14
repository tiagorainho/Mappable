import { DataModel } from "./dataModel";

import { Beach } from "./classes/beach";
import { Building } from "./classes/building";
import { House } from "./classes/house";
import { Person } from "./classes/person";
import { Unknown } from "./classes/unknown";
import { Museum } from "./classes/museum";
import { PointOfInterest } from "./classes/pointOfInterest";
import { ParkingSpot } from "./classes/parkingSpot";
import { Vehicle } from "./classes/vehicle";

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
            case 'beach': return new Beach(obj)
            case 'building': return new Building(obj)
            case 'house': return new House(obj)
            case 'person': return new Person(obj)
            case 'person': return new Person(obj)
            case 'Museum': return new Museum(obj)
            case 'PointOfInterest': return new PointOfInterest(obj)
            case 'Vehicle': return new Vehicle(obj)
            case 'ParkingSpot': return new ParkingSpot(obj)
        }
        return new Unknown(obj)
    }
}
