import { DataModel } from '../dataModel';

export class House extends DataModel {

    popup(coordinate: number[]): JSX.Element {
        return HousePopup(this, coordinate)
    }

    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "house.svg",
    ) {
        super(id, name, icon, [coordinates])
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