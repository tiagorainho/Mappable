import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from 'react'
import { DataModelType, ModelFactory, typeClusterType } from './models/factory';
import { DataModel } from './models/dataModel';
import { Spinner } from './spinner';
import { CENTER_DEFAULT, ENDPOINT, REFRESH_MS, ZOOM_DEFAULT } from '../env';
import { Cluster } from './models/cluster';

interface Props {
  save: (new_value:number) => void;
}

const UpdateZoom = (prop: Props) => {
  const map = useMapEvents ({
    zoomend: () => {
      const aux = map.getZoom()
      prop.save(aux)
    }
  })
  return <></>
}

const Map = () => {

  const [markers, setMarkers]  = useState<DataModel[]>([])
  const [clusters, setClusters]  = useState<Cluster[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [center, setCenter] = useState(CENTER_DEFAULT)
  const [zoom, setZoom] = useState<number>(ZOOM_DEFAULT)
  const [updateMap, setUpdateMap] = useState<boolean>(false)

  const saveZoom = (new_value:number) => {
    setZoom(new_value)
    setUpdateMap(true)
  }

  useEffect(() => {
    console.log(zoom)
    fetch(`${ENDPOINT}/objects?zoom=${zoom}`, {method: 'GET'})
      .then((res) => res.json())
      .then((data) => {
        const objects = data.objects.map((obj: DataModelType) => ModelFactory.createObject(obj))

        const clusters_data = data.clusters.map((cluster: typeClusterType) => {
          const data_models = cluster.objects.map((obj: DataModelType) => ModelFactory.createObject(obj))
          return new Cluster(data_models, [cluster.center[1], cluster.center[0]])
        })

        setMarkers(objects)
        setClusters(clusters_data)

        setLoading(false)
      })
      .catch((data) => (<>Error Loading map information</>))
      setUpdateMap(false)
  }, [updateMap])


  if(isLoading) return <Spinner/>

  return (
    <>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {markers.map(m => m.marker())}
        {clusters.map(c => c.cluster())}

        <UpdateZoom save={saveZoom} />

      </MapContainer>
    </>
  )
}

export default Map