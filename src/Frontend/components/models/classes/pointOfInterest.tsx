import { DataModel , BASE_ICONS} from '../dataModel';

export class PointOfInterest extends DataModel {
    description: string
    seeAlso: string[]

    static iconUrl = "marker.svg"

    constructor(
        arg: any
    ) {
        super({id: arg.id, type:arg.type, name: arg.name.value, icon: PointOfInterest.iconUrl, coordinates: [arg.location.value.coordinates]})

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
        <img title="Ponto de Interesse" style={{display: "inline", width: "8%", marginRight: "5px", marginBottom: "5px"}} src={`${BASE_ICONS}/point.svg`}></img>
        <span style={{color:"#457685",fontSize: "initial"}}>{poi.name}</span>
        <h1>Ponto de Interesse</h1>
        
      </>
    )
  }