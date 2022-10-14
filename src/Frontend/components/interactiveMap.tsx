import dynamic from "next/dynamic";

const InteractiveMap = (props : any) => {
    const MapWithNoSSR = dynamic(() => import("../components/" + props.map), {
        ssr: false
    });

    return (
        <div className="h-96">
            <MapWithNoSSR />
        </div>
    )
}

export default InteractiveMap