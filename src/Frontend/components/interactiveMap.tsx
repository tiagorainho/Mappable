



import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false
});

const InteractiveMap = () => (
  <div className="h-96">
    <MapWithNoSSR/>
  </div>
)

export default InteractiveMap