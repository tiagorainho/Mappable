import { Marker, Popup } from "react-leaflet";
import { DataModel } from "./dataModel";

export class Cluster {
    dataModels: DataModel[]
    dataModel: DataModel
    center: number[]

    constructor(dataModels: DataModel[], center: number[]) {
        this.dataModels = dataModels
        this.dataModel = dataModels[0]
        this.center = center
    }

    cluster(): JSX.Element {
        return GenericCluster(this)
    }
    
}

export const GenericCluster = (cluster: Cluster) => {
    const center = cluster.center
    return (
      <>
        <Marker
            position={[center[0], center[1]]}
            draggable={false}
            icon={cluster.dataModel.cluster_icon}
        >
            <Popup>
                {cluster.dataModel.cluster_popup(cluster)}
            </Popup>
            
        </Marker>
      </>
    )
}

const cluster_svg = (color: string) => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill-opacity="0.2" fill="{{color}}"/>
        </svg>
    )
}
