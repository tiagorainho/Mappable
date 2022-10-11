import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useState, useRef } from 'react'




const Map = () => {
  const [center, setCenter] = useState({ lat: 40.6338, lng: 8.6492 })
  const ZOOM_LEVEL = 9
  //const mapRef = useRef()

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
        <Marker 
          position={[center.lat, center.lng]}
          draggable={false}
          // animate={true}
        >
          <Popup>Hey ! I live here</Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map