import { DataModel } from "./dataModel";

import { Beach } from "./classes/beach";
import { Building } from "./classes/building";
import { House } from "./classes/house";
import { Person } from "./classes/person";
import { Unknown } from "./classes/unknown";

type modelWithType = {
    id: string
    name: string
    type: string
    location: {
        type: string
        coordinates: number[]
    }
}

export class ModelFactory {
    static createObject(obj: modelWithType): DataModel {

        switch(obj.type) {
            case 'house': return new House(obj.id, obj.name, obj.location.coordinates)
            case 'beach': return new Beach(obj.id, obj.name, obj.location.coordinates)
            case 'house': return new House(obj.id, obj.name, obj.location.coordinates)
            case 'person': return new Person(obj.id, obj.name, obj.location.coordinates)
            case 'building': return new Building(obj.id, obj.name, obj.location.coordinates)

        }
        return new Unknown(obj.id, obj.name, obj.location.coordinates)
    }
}
