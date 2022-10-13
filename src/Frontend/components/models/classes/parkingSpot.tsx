import { DataModel } from '../dataModel';

export class ParkingSpot extends DataModel {
    status: string
    parkingPermit: string
    typeOfPermit: string

    static iconUrl = "person.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: ParkingSpot.iconUrl, coordinates: [arg.location.value.coordinates]})
        
        this.status = arg.status.value
        this.parkingPermit = arg.status.metadata.parkingPermit.value
        this.typeOfPermit = arg.status.metadata.parkingPermit.type
    }

    popup(coordinate: number[]): JSX.Element {
        return ParkingSpotPopup(this, coordinate)
    }
    
}

const ParkingSpotPopup = (parkingSpot: ParkingSpot, coordinate: number[]) => {
    return (
      <>
        <h1>ParkingSpot</h1>
        <span>{parkingSpot.status}</span>
        <br></br>
        <span>{parkingSpot.parkingPermit}</span>
      </>
    )
  }