import { Icon } from 'leaflet';
import { DataModel , BASE_ICONS} from '../dataModel';

export class ParkingSpot extends DataModel {
    status: string
    parkingPermit: string
    typeOfPermit: string

    static iconUrl = "spot.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, type:arg.type, cluster_icon:"cluster_parking_spot.svg", name: arg.name.value, icon: ParkingSpot.iconUrl, coordinates: [arg.location.value.coordinates]})
        
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
        <img title="Estacionamento" style={{display: "inline", width: "8%", marginRight: "5px", marginBottom: "5px"}} src={`${BASE_ICONS}/spot_mini.svg`}></img>
        <span style={{color:"#457685",fontSize: "initial"}}>Lugar : {parkingSpot.name}</span>
        <div>
          <span><b>Status</b> :</span>
          {(parkingSpot.status=="free")?(<img style={{display: "inline", width: "10%", marginLeft: "5px"}} src={`${BASE_ICONS}/free.svg`}></img>):(<img style={{display: "inline", width: "10%", marginLeft: "5px"}} src={`${BASE_ICONS}/ocup.svg`}></img>)}
        </div>
        <div style={{marginTop: "6px"}}>
          <div>
            <span><b>Licença:</b> </span>
            {(parkingSpot.parkingPermit=="yes")?(<img style={{display: "inline", width: "10%", marginLeft: "5px"}} src={`${BASE_ICONS}/yes.svg`}></img>):(<img style={{display: "inline", width: "10%", marginLeft: "5px"}} src={`${BASE_ICONS}/no.svg`}></img>)}
          </div>
          <span style={{padding: "6px 12px"}}>Tipo de Licença: {parkingSpot.typeOfPermit}</span>
        </div>
      </>
    )
  }