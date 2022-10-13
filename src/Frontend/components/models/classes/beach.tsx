import { DataModel } from '../dataModel';

export class Beach extends DataModel {

    static iconUrl = "beach.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Beach.iconUrl, coordinates: [arg.location.value.coordinates]})
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