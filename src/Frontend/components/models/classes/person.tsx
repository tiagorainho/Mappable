
import { Marker, Popup } from 'react-leaflet';
import { DataModel } from '../dataModel';

export class Person extends DataModel {
    coordinates: number[]

    view: (model: Person) => JSX.Element = PersonView;
    
    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "person.svg",
    ) {
        super(id, name, icon)

        this.coordinates = coordinates
    }
}

const PersonView = (person: Person) => {
    return (
        <>
            <Marker 
            position={[person.coordinates[0], person.coordinates[1]]}
            draggable={false}
            icon={person.icon}
          >
            <Popup>Hey ! I live here</Popup>
          </Marker>
        </>
    )
}