import { Marker, Popup } from 'react-leaflet';
import { DataModel } from '../dataModel';

export class Building extends DataModel {
    coordinates: number[]

    view: (model: Building) => JSX.Element = BuildingView;
    
    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "building.svg"
    ) {
        super(id, name, icon)
        
        this.coordinates = coordinates
    }
}

const BuildingView = (building: Building) => {
    
    return (
        <>
            <Marker 
            position={[building.coordinates[0], building.coordinates[1]]}
            draggable={false}
            icon={building.icon}
          >
            <Popup>Best Building</Popup>
          </Marker>
        </>
    )
}