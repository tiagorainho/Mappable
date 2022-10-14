
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { Cluster } from './cluster';

export const BASE_ICONS = "../../../static/assets/icons"

type DataModelType = {
  id: string,
  type: string
  name: string,
  icon: string,
  coordinates: number[][],
}

export abstract class DataModel {
  id: string
  name: string
  type: string
  icon: Icon
  cluster_icon: Icon
  coordinates: number[][]

  constructor(
    arg: DataModelType
  ) {
    this.id = arg.id;
    this.name = arg.name;
    this.type = arg.type
    this.icon = new Icon({
      iconUrl: `${BASE_ICONS}/${arg.icon}`,
      iconSize: [25, 25]
    });
    this.cluster_icon = new Icon({
      iconUrl: `${BASE_ICONS}/cluster.svg`,
      iconSize: [35, 35]
    })
    this.coordinates = arg.coordinates
  }

  cluster(cluster: Cluster): JSX.Element {
    return <></>
  }

  cluster_popup(cluster: Cluster): JSX.Element {
    return GenericClusterPopup(cluster)
  }

  marker(): JSX.Element {
    return GenericMarker(this)
  }

  popup(coordinate: number[]): JSX.Element {
    return GenericPopup({model: this, coordinate: coordinate})
  }

}

export const GenericMarker = (model: DataModel) => {
  return (
    <>
      {model.coordinates.map(coordinate => (
        <Marker 
          position={[coordinate[0], coordinate[1]]}
          draggable={false}
          icon={model.icon}
        >
          <GenericPopup model={model} coordinate={coordinate}></GenericPopup>
        </Marker>
      ))}
    </>
  )
}

type DataModelPopupType = {
  model: DataModel
  coordinate: number[]
}

export const GenericPopup = (data: DataModelPopupType) => {
  return (
    <>
      <Popup>
        <div className="text-gray-700">
          <span>
            <span className="font-semibold">ID: </span><span className="">{data.model.id}</span>
          </span>
        </div>
        
        <hr className="my-2"></hr>
        {data.model.popup(data.coordinate)}  
      </Popup>
    </>
  )
}

export const GenericClusterPopup = (cluster: Cluster) => {
  return (
    <>
      <span>Group of </span><span>{cluster.dataModel.type}</span>
      <hr className='my-2'></hr>

      <span>Number: </span>
      <span>{cluster.dataModels.length}</span>
    </>
  )
}