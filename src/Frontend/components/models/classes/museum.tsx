import { DataModel } from '../dataModel';

export class Museum extends DataModel {
    address: string
    description: string
    type: string[]
    openingHours: {
        'dayOfWeek': string,
        "closes": string,
        "opens": string
    }[]

    static iconUrl = "beach.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Museum.iconUrl, coordinates: [arg.location.value.coordinates]})

        this.address = arg.address.value.streetAddress
        this.description = arg.description.value
        this.type = arg.museumType.value
        this.openingHours = arg.openingHoursSpecification.value
    }

    popup(coordinate: number[]): JSX.Element {
        return MuseumPopup(this, coordinate)
    }

}

const MuseumPopup = (museum: Museum, coordinate: number[]) => {
    return (
        <>
           <h1>
                Museum
           </h1>
        </>
    )
}