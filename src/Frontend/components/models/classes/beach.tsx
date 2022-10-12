import { Marker, Popup } from 'react-leaflet';
import { DataModel } from '../dataModel';

export class Beach extends DataModel {
    coordinates: number[]

    view: (model: Beach) => JSX.Element = BeachView;
    
    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "beach.svg"
    ) {
        super(id, name, icon)
        
        this.coordinates = coordinates
    }
}

const BeachView = (house: Beach) => {
    
    return (
        <>
            <Marker 
            position={[house.coordinates[0], house.coordinates[1]]}
            draggable={false}
            icon={house.icon}
          >
            <Popup>Best beach</Popup>
          </Marker>
        </>
    )
}