import { DataModel  , BASE_ICONS} from "../dataModel";

export class Unknown extends DataModel {

    static iconUrl = "busstop.svg"
    static iconUrlCluster = "cluster_unknown.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, cluster_icon:Unknown.iconUrlCluster, type:arg.type, name: arg.name.value, icon: Unknown.iconUrl, coordinates: [arg.location.value.coordinates]})
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