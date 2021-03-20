import React, { useState } from "react";

const One1 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [click, setCLick] = useState(0);

  const userlocation = () => {
    setCLick(click+1);
    // alert("click")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    console.log(position.coords)
  };
  return (
    <>
      <h2>Click: {click}</h2>
      <h2>Longitude: {lon}</h2>
      <h2>Latitude: {lat}</h2>
      <button onClick={userlocation}>try it</button>
    </>
  );
};

export default One1;
