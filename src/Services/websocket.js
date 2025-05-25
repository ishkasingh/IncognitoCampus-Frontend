import Stomp from "stompjs";
import SockJS from "sockjs-client";

let stompClient = null;

export function connectWebSocket() {
  const socket = new SockJS('http://localhost:8080/ws'); // your WS endpoint
  stompClient = Stomp.over(socket);
  stompClient.debug = null; // disable debug logs

  stompClient.connect({}, () => {
    console.log("WebSocket connected");
  }, (error) => {
    console.error("WebSocket error", error);
  });

  return stompClient;
}

export function subscribeToRoom(client, roomName, onMessageReceived) {
   
   console.log(roomName);
    
  if(!client) return;

  client.subscribe(`/topic/rooms/${roomName}`, (msg) => {
    const message = JSON.parse(msg.body);
    onMessageReceived(message);
  });
}

export function sendMessageWS(client, roomName, message) {
  if(!client) return;

  client.send(`/app/sendMessage/${roomName}`, {}, JSON.stringify(message));
}
