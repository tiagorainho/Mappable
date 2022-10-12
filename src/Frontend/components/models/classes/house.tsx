
import { Marker, Popup } from 'react-leaflet';
import { DataModel } from '../dataModel';

export class House extends DataModel {
    coordinates: number[]

    view: (model: House) => JSX.Element = HouseView;

    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "house.svg",
    ) {
        super(id, name, icon)

        this.coordinates = coordinates
    }
}

const HouseView = (house: House) => {
    return (
        <>
            <Marker 
            position={[house.coordinates[0], house.coordinates[1]]}
            draggable={false}
            icon={house.icon}
          >
            <Popup>Hey ! I live here</Popup>
          </Marker>
        </>
    )
}