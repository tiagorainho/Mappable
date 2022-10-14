import { DataModel  , BASE_ICONS} from "../dataModel";

export class Vehicle extends DataModel {
    cargoWeight: number
    category: string[]
    fuelEfficiency: number
    fuelFilled: number
    fuelType: string
    licensePlate: string
    type: string
    serviceStatus : string
    serviceProvided : string
    speed : number
    areaServed : string


    static iconUrl = "bus.svg"

    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Vehicle.iconUrl, coordinates: [arg.location.value.coordinates]})

        this.cargoWeight = arg.cargoWeight.value
        this.category = arg.category.value
        this.fuelEfficiency = arg.fuelEfficiency.value
        this.fuelFilled = arg.fuelFilled.value
        this.fuelType = arg.fuelType.value
        this.licensePlate = arg.license_plate.value
        this.type = arg.vehicleType.value
        this.serviceStatus= arg.serviceStatus.value
        this.serviceProvided = arg.serviceProvided.value
        this.speed = arg.speed.value
        this.areaServed = arg.areaServed.value

    }

    popup(coordinate: number[]): JSX.Element {
        return VehiclePopup(this, coordinate)
    }
}

const VehiclePopup = (vehicle: Vehicle, coordinate: number[]) => {
    return (
        <>
            {(vehicle.type=="bus")?(<img title="Autocarro" style={{display: "inline", width: "10%", marginRight: "5px"}} src={`${BASE_ICONS}/bus_mini.svg`}></img>
            ):<img title="Veículo" style={{display: "inline", width: "10%", marginRight: "5px"}} src={`${BASE_ICONS}/car.svg`}></img>}
            <span style={{color:"#457685",fontSize: "initial"}}>{vehicle.name}</span> 
            
            <h1><b>Categoria:</b> {vehicle.category}</h1>
            <h1><b>Serviço:</b> {vehicle.serviceProvided}</h1>
            <h1><b>Estado: </b>
            {(vehicle.serviceStatus=="onRoute")?(<b><span style={{color: "#82b555"}}>Em rota</span></b>):(<span>Fora de Serviço</span>)}
            </h1>
            <div>
                <div>
                    <img title="Placa de identificação de veículos" style={{display: "inline", width: "22%", marginRight: "5px"}} src={`${BASE_ICONS}/licenseplate2.svg`}></img>
                    <span> : {vehicle.licensePlate}</span>
                </div>
                <div style={{marginTop: "1px"}}>
                    <img title="Velocidade" style={{display: "inline", width: "15%", marginRight: "5px"}} src={`${BASE_ICONS}/speed.svg`}></img>
                    <span> : {vehicle.speed} Km/h</span>
                </div>
                <div style={{marginTop: "7px"}}>
                    <img title="Tipo de Combustível" style={{display: "inline", width: "10%", marginRight: "5px"}} src={`${BASE_ICONS}/fuel.svg`}></img>
                    <span> : {vehicle.fuelType}</span>
                </div>
                <div style={{marginTop: "14px"}}>
                    <img title="Área coberta" style={{display: "inline", width: "10%", marginRight: "5px"}} src={`${BASE_ICONS}/area.svg`}></img>
                    <span> : {vehicle.areaServed}</span>
                </div>
                <div style={{marginTop: "14px"}}>
                    <img title="Peso de carga" style={{display: "inline", width: "10%", marginRight: "5px"}} src={`${BASE_ICONS}/weight.svg`}></img>
                    <span> : {vehicle.cargoWeight} Kg</span>
                </div>
            </div>
        </>
    )
}