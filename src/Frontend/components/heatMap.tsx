import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from 'react'
import { DataModelType, ModelFactory } from './models/factory';
import { DataModel } from './models/dataModel';
import { Spinner } from './spinner';
import { CENTER_DEFAULT, ENDPOINT, REFRESH_MS, ZOOM_DEFAULT } from '../env';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer-v3';

const gradient = { 0.4: "red", 0.8: "red", 1.0: "red" };


const Map = () => {
  let ZOOM_LEVEL = ZOOM_DEFAULT

  let [markers, setMarkers]  = useState([])
  let [isLoading, setLoading] = useState(false)
  let [center, setCenter] = useState(CENTER_DEFAULT)

  useEffect(() => {
    setLoading(true)
    const interval = setInterval(() => {
      
      fetch(`${ENDPOINT}/objects?type=Vehicle`, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
          data = data.map((obj : any) => obj.location.value.coordinates)
          data.forEach((element : any) => {
              element.push(1)
          });
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
        <HeatmapLayer
            // fitBoundsOnLoad
            points={markers}
            longitudeExtractor={(m: any[]) => m[0]}
            latitudeExtractor={(m: any[]) => m[1]}
            gradient={gradient}
            intensityExtractor={(m: any[])=> parseFloat(m[2])*3}
            radius={5}
            blur={11}
            max={10}
        />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />          
      </MapContainer>
    </>
  )
}

export default Map