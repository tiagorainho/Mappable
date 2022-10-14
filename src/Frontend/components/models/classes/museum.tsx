import { DataModel , BASE_ICONS } from '../dataModel';

export class Museum extends DataModel {
    address: string
    description: string
    museumType: string[]
    openingHours: {
        'dayOfWeek': string,
        "closes": string,
        "opens": string
    }[]
    facilities: string[]
    artperiod: string

    static iconUrl = "museum2.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, type:arg.type, cluster_icon:"cluster_museum.svg", name: arg.name.value, icon: Museum.iconUrl, coordinates: [arg.location.value.coordinates]})

        this.address = arg.address.value.streetAddress
        this.description = arg.description.value
        this.museumType = arg.museumType.value
        this.openingHours = arg.openingHoursSpecification.value
        this.facilities = arg.facilities.value
        this.artperiod = arg.artPeriod.value
    }

    popup(coordinate: number[]): JSX.Element {
        return MuseumPopup(this, coordinate)
    }

}


const MuseumPopup = (museum: Museum, coordinate: number[]) => {
    return (
        <>
            <img title="Museu" style={{display: "inline", width: "10%", marginRight: "5px"}} src={`${BASE_ICONS}/museum_mini.svg`}></img>
            <span style={{color:"#457685",fontSize: "initial"}}>{museum.name}</span>
            <h1><b>Tipo:</b> {museum.museumType}</h1>
            
            <h1><b>Período de Arte:</b> {museum.artperiod}</h1>
           
           <h1 style={{marginTop:"10px"}}><b>Horário:</b></h1>
           <div className='grid grid-cols-3 gap-1'>
            {
                museum.openingHours.map((day) => (
                    <h1><b>{day.dayOfWeek}</b>:<br></br>{day.opens} - {day.closes}</h1>
                ))
            }
            </div> 
           <h1 style={{marginTop:"10px"}}><b>Instalações:</b></h1>
           <div>
            {
                museum.facilities.map((facility) => (
                    (() => {
                        switch(facility) {
                            case "shop":   return <img title="Loja" style={{display: "inline", width: "15%", marginLeft: "5px"}} src={`${BASE_ICONS}/shopstore.svg`}></img>;
                            case "cloakRoom":   return <img title="Bengaleiro" style={{display: "inline", width: "15%", marginLeft: "5px"}} src={`${BASE_ICONS}/coat-stand.svg`}></img>;
                            case "guidedTour":   return <img title="Guia Turístico" style={{display: "inline", width: "15%", marginLeft: "5px"}} src={`${BASE_ICONS}/tourguide.svg`}></img>;
                        }
                    })()
                ))

            }
            </div>  
        </>
    )
}