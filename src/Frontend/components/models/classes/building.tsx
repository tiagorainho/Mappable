import { DataModel } from '../dataModel';

export class Building extends DataModel {
    
    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "building.svg"
    ) {
        super(id, name, icon, [coordinates])
    }

    popup(coordinate: number[]): JSX.Element {
        return BuildingePopup(this, coordinate)
    }

}

const BuildingePopup = (building: Building, coordinate: number[]) => {
    return (
        <>
           <h1>
                Building
           </h1>
        </>
    )
}