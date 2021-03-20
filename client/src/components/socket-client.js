import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

var min = 10000000;
var max = 99999999;
var id = Math.floor(Math.random() * (max - min + 1)) + min;
export const socket = io(ENDPOINT, { query: { id } });
