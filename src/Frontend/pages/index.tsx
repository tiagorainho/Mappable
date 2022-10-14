import type { NextPage } from 'next'
import { useState } from "react";
import Layout from '../components/Layout'
import InteractiveMap from '../components/interactiveMap'
import MapHandler from '../components/mapHandler'

const Home: NextPage = () => {

    const [typeMap, setTypeMap] = useState("map")

    const [typeOfObjects, setTypeOfObjects] = useState("")

    function updateTypes(types: string[]) {
        let objs = ""
        console.log(types)
        for(let i=0; i<types.length;i++) {
            objs += types[i]
            if(i < types.length-1) {
                objs += ","
            }
        }
        setTypeOfObjects(objs)
    }
    

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
                <MapHandler setMap={changeMap} setTypeOfObjects={updateTypes}/>
                <InteractiveMap map={typeMap} typeOfObjects={typeOfObjects}/>
            </main>
        </Layout>
    )
}

export default Home
