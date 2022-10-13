import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from 'react'
import { DataModelType, ModelFactory } from './models/factory';
import { DataModel } from './models/dataModel';
import { Spinner } from './spinner';
import { CENTER_DEFAULT, ENDPOINT, REFRESH_MS, ZOOM_DEFAULT } from '../env';

const Map = () => {
  let ZOOM_LEVEL = ZOOM_DEFAULT

  let [markers, setMarkers]  = useState<DataModel[]>([])
  let [isLoading, setLoading] = useState(false)
  let [center, setCenter] = useState(CENTER_DEFAULT)

  useEffect(() => {
    setLoading(true)
    const interval = setInterval(() => {
      
      fetch(`${ENDPOINT}/objects`, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
          data = data.map((obj: DataModelType) => ModelFactory.createObject(obj))
          console.log(data)
          setMarkers(data)
          setLoading(false)
        })
    }, REFRESH_MS)
    
    return () => {
        clearInterval(interval);
    };
  }, [])


  if(isLoading) return <Spinner/>

  return (
    <>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        
        {markers.map(e => e.marker())}
          
      </MapContainer>
    </>
  )
}

export default Map