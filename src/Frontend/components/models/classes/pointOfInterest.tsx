import { DataModel } from '../dataModel';

export class PointOfInterest extends DataModel {
    description: string
    seeAlso: string[]

    static iconUrl = "person.svg"

    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: PointOfInterest.iconUrl, coordinates: [arg.location.value.coordinates]})

        this.description = arg.description.value
        this.seeAlso = arg.refSeeAlso.value
    }

    popup(coordinate: number[]): JSX.Element {
        return PointOfInterestPopup(this, coordinate)
    }
    
}

const PointOfInterestPopup = (poi: PointOfInterest, coordinate: number[]) => {
    return (
      <>
        <h1>PointOfInterestPopup!</h1>
      </>
    )
  }