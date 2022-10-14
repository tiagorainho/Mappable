import { Icon } from 'leaflet';
import { DataModel , BASE_ICONS} from '../dataModel';

export class PublicTransportStop extends DataModel {
    wheelchairAccessible: number
    peopleCount: number
    openingHoursSpecification: {
        'dayOfWeek': {
            "type": string,
            "value": string
        },
        "closes": {
            "type": string,
            "value": string
        },
        "opens": {
            "type": string,
            "value": string
        }
    }[]

    static iconUrl = "busstop.svg"
    static iconUrlCluster = "cluster_bus_stop.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, cluster_icon:PublicTransportStop.iconUrlCluster, type:arg.type, name: arg.name.value, icon: PublicTransportStop.iconUrl, coordinates: [arg.location.value.coordinates]})
        
        this.wheelchairAccessible = arg.wheelchairAccessible.value
        this.peopleCount = arg.peopleCount.value
        this.openingHoursSpecification = arg.openingHoursSpecification.value
    }

    popup(coordinate: number[]): JSX.Element {
        return PublicTransportStopPopup(this, coordinate)
    }
    
}

const PublicTransportStopPopup = (busStop: PublicTransportStop, coordinate: number[]) => {
    return (
      <>
        <img title="Paragem de Autocarro" style={{display: "inline", width: "15px", marginRight: "5px", marginBottom: "5px"}} src={`${BASE_ICONS}/busstop_mini.svg`}></img>
        <span style={{color:"#457685"}}>{busStop.name}</span>

        <br></br>
        <div className='grid grid-cols-2 gap-1' style={{marginTop: "5px"}}>
            <div>
                <img title="Número de Pessoas" style={{display: "inline", width: "20px", marginRight: "5px"}} src={`${BASE_ICONS}/person.svg`}></img>
                <span># : {busStop.peopleCount}</span>
            </div>
            <div>
                {(() => {
                    switch(busStop.wheelchairAccessible) {
                        case 1:   return <div><img title="Acessível a cadeiras de rodas" style={{display: "inline", width: "20px", marginRight: "5px", marginTop: "5px"}} src={`${BASE_ICONS}/wheelchair.svg`}></img>
                        <span>: </span><img title="Suportado" style={{display: "inline", width: "15px", marginLeft: "5px"}} src={`${BASE_ICONS}/yes.svg`}></img></div>;
                        case 2:   return <div><img title="Acessível a cadeiras de rodas" style={{display: "inline", width: "20px", marginRight: "5px", marginBottom: "5px"}} src={`${BASE_ICONS}/wheelchair.svg`}></img>
                        <span>: </span><img title="Não suportado" style={{display: "inline", width: "15px", marginLeft: "5px"}} src={`${BASE_ICONS}/no.svg`}></img></div>;
                        case 0:   return ;
                    }
                })()}
            </div>
        </div>
        <h1 style={{marginTop:"10px"}}><b>Horário:</b></h1>
        <div className='grid grid-cols-2 gap-1'>
            {
                busStop.openingHoursSpecification.map((day) => (
                    <h1><b>{day.dayOfWeek["value"]}</b>:<br></br>{day.opens["value"]} - {day.closes["value"]}</h1>
                ))
            }
        </div> 
      </>
    )
  }