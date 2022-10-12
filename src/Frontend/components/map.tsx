import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useState } from 'react'
import { ModelFactory } from './models/factory';

const Map = () => {
  const [center, setCenter] = useState({ lat: 40.6338, lng: 8.6492 })
  const ZOOM_LEVEL = 9

  const markers_url = [
    {
      'id': 'house-id',
      'name': 'casa',
      'type': 'house',
      'location': {
        'type': 'Point',
        'coordinates': [40.6338, 8.6492]
      }
    },
    {
      'id': 'person-id',
      'name': 'person',
      'type': 'person',
      'location': {
        'type': 'Point',
        'coordinates': [40.6398, 8.6432]
      }
    }
  ]

  const modelMarkers = markers_url.map(marker => {
    return ModelFactory.createObject(marker)
  })

  console.log(modelMarkers)
  
  const [markers, setMarkers] = useState(modelMarkers)
  

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