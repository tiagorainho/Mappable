import { DataModel } from "../dataModel";

export class Unknown extends DataModel {

    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "unknown.svg",
    ) {
        super(id, name, icon, [coordinates])

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