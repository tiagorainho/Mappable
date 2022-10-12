import { Marker, Popup } from 'react-leaflet';
import { DataModel } from "../dataModel";

export class Unknown extends DataModel {
    coordinates: number[]

    view: (model: Unknown) => JSX.Element = UnknownView;

    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "unknown.svg",
    ) {
        super(id, name, icon)

        this.coordinates = coordinates
    }
}

const UnknownView = (model: Unknown) => {
    return (
        <>
            <Marker 
                position={[model.coordinates[0], model.coordinates[1]]}
                draggable={false}
                icon={model.icon}
            >
                <Popup>Unknown Object</Popup>
            </Marker>
        </>
    )
}