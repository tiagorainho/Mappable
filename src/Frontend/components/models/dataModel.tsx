
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

export const BASE_ICONS = "../../../static/assets/icons"

export interface IDataModel {
  id: string
  name: string
  icon: Icon
  coordinates: number[][]
}

export abstract class DataModel implements IDataModel {
  id: string
  name: string
  icon: Icon
  coordinates: number[][]

  constructor(
    id: string,
    name: string,
    icon: string,
    coordinates: number[][],
  ) {
    this.id = id;
    this.name = name;
    this.icon = new Icon({
      iconUrl: `${BASE_ICONS}/${icon}`,
      iconSize: [25, 25]
    });
    this.coordinates = coordinates
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

type DataModelType = {
  model: DataModel
  coordinate: number[]
}

export const GenericPopup = (data: DataModelType) => {
  return (
    <>
      <Popup>
        <div className="text-gray-700">
          <span><span className="font-semibold">ID: </span><span className="">{data.model.id}</span></span>
        </div>
        
        <hr className="my-2"></hr>
        {data.model.popup(data.coordinate)}  
      </Popup>
    </>
  )
}