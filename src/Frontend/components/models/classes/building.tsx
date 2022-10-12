import { DataModel } from '../dataModel';

export class Building extends DataModel {
    
    static iconUrl = "beach.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Building.iconUrl, coordinates: [arg.location.value.coordinates]})
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