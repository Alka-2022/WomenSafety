import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { socket } from "./socket-client";

function Map() {
  const [data, setData] = useState({});

  useEffect(() => {
    socket.on("save-her", (data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: data.lan,
    longitude: data.lon,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/kunaljha/ckmhfkzqz2my717nrjr5n3rcl"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {/* <Marker
        latitude={data.lan}
        longitude={data.lon}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>You are here</div>
      </Marker> */}
    </ReactMapGL>
  );
}

export default Map;
