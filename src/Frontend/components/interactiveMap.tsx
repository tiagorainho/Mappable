import dynamic from "next/dynamic";
import { ComponentType } from "react";

const customStyle = {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    top: '0',
    left: '0',
    zIndex: '0',
    marginTop: '-3px'
    
}

const InteractiveMap = (props : any) => {
    const MapWithNoSSR: ComponentType<any> = dynamic(() => import("../components/" + props.map), {
        ssr: false
    });

    return (
        <div className="map-container" style={customStyle} >
            <MapWithNoSSR typeOfObjects={props.typeOfObjects}/>
        </div>
    )
}

export default InteractiveMap