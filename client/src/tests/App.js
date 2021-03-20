import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 26.8467088,
    longitude: 80.9461592,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/kunaljha/ckmhfkzqz2my717nrjr5n3rcl"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default App;
