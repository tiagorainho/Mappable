import { DataModel } from '../dataModel';

export class Beach extends DataModel {
    
    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "beach.svg"
    ) {
        super(id, name, icon, [coordinates])
    }

    popup(coordinate: number[]): JSX.Element {
        return BeachPopup(this, coordinate)
    }

}
    
const BeachPopup = (beach: Beach, coordinate: number[]) => {
    return (
        <>
            <h1>
                Beach
            </h1>
        </>
    )
}