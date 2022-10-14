import type { NextPage } from 'next'
import { useState } from "react";
import Layout from '../components/Layout'
import InteractiveMap from '../components/interactiveMap'
import MapHandler from '../components/mapHandler'

const Home: NextPage = () => {

    const [typeMap, setTypeMap] = useState("map")

    // const changeMap = (mapType : any) => {
        
    //     setTypeMap(mapType)
    // }

    const changeMap = () => {
        if(typeMap == "heatMap") {
            setTypeMap("map")
        } else {
            setTypeMap("heatMap")
        }
    }

    return (
        <Layout>
            <main className="container mx-auto py-12 px-16 space-y-8">
                <MapHandler setMap={changeMap}/>
                <InteractiveMap map={typeMap}/>
            </main>
        </Layout>
    )
}

export default Home
