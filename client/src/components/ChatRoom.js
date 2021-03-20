import React,{ useState } from "react";
import {useParams} from "react-router-dom";
import {Button} from 'react-bootstrap'
// import {useSocket} from "../contexts/SocketProvider"
import {socket} from './socket-client'
import Map from "./Map";


function ChatRoom() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [click, setCLick] = useState(0);
  const {id}=useParams();

  const [count,setCount] = useState(0);
  const outerCord = {};
  React.useEffect(() => {
    socket.emit('join-room',id);
  }, [])
  
  const userlocation = () => {
    setCLick(click+1);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    var data = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      acc: position.coords.accuracy,
      roomName: id,
    };
    console.log(data)
    socket.emit("location",data)
  };


  
  // if (data === {}){

    return (  
      <div>
      <ul></ul>
      <h1>Chat Room</h1>
      <h2>My room: {id}</h2>
      <h2>Click: {click}</h2>
      <h2>Longitude: {lon}</h2>
      <h2>Latitude: {lat}</h2>
      <Button variant="secondary"onClick={userlocation} width="50" className="mx-3">SOS</Button>
      <Map/>
    </div>
    );
  
}

export default ChatRoom;
