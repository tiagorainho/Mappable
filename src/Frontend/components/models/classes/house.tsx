import { DataModel } from '../dataModel';

export class House extends DataModel {

    popup(coordinate: number[]): JSX.Element {
        return HousePopup(this, coordinate)
    }

    static iconUrl = "beach.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: House.iconUrl, coordinates: [arg.location.value.coordinates]})
    }
}

const HousePopup = (house: House, coordinate: number[]) => {
    return (
        <>
           <h1>
                Hey ! I live here
           </h1>
        </>
    )
}