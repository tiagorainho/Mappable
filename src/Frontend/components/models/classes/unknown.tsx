import { DataModel  , BASE_ICONS} from "../dataModel";

export class Unknown extends DataModel {

    static iconUrl = "busstop.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Unknown.iconUrl, coordinates: [arg.location.value.coordinates]})
    }

    popup(coordinate: number[]): JSX.Element {
        return UnknownPopup(this, coordinate)
    }
}

const UnknownPopup = (model: Unknown, coordinate: number[]) => {
    return (
        <>
            Unknown Object
        </>
    )
}