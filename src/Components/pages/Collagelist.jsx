import React, { useContext, useEffect } from "react";
import { ChatContext } from "../../Context/ChatContext";
import VerticalNavbar from "./VerticalNavbar";
import ChatRoom from "../ChatRoom";
import axios from "axios";
import Navbar from "./Navbar";

const Collagelist = () => {

    const {  rooms, joinRoom, currentRoom, mycollege, setmycollege } = useContext(ChatContext);
    // console.log(mycollege);
    // console.log(rooms);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
 
    if (!userInfo) {
        console.error("No user info found in localStorage");
        return <div>Please log in to see your college rooms.</div>;
      }


    const id = userInfo.id;
    
    
    useEffect(() => {
        const fetchRooms = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/users/${id}/rooms`);
            console.log(response.data, "pppppppp");
            setmycollege(response.data);
          } catch (error) {
            console.error("Error fetching rooms:", error);
          }
        };
      
        fetchRooms();
      }, [id]);
      


    
  return (
  
   <div className="bg-blue-100 w-full h-screen  flex justify-between">

  <ChatRoom />

  
   <aside className="w-74 bg-gradient-to-b from-white to-black p-6 border-r border-gray-900 h-screen overflow-y-auto shadow-lg">
      <h2 className="font-sans font-bold mb-8 text-2xl text-black-900 border-b-2 border-gray-700 pb-2 tracking-wide">Chat Rooms</h2>
      <ul className="space-y-4">
        {mycollege.map((room) => (
          <li
            key={room.id || room.roomName}
            onClick={() => joinRoom(room)}
            className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
              currentRoom === room.roomName
                ? "bg-purple-600 text-white shadow-md"
                : "bg-white bg-opacity-50 hover:bg-opacity-70 shadow-sm"
            }`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                joinRoom(room);
              }
            }}
            aria-pressed={currentRoom === room.roomName}
          >
            <div className="font-bold  text-lg mb-1 ">{room.roomName}</div>
            {room.college && (
              <div className="text-sm text-black  font-semibold ont-semibold ">{room.name}</div>
            )}
          </li>
        ))}
        {mycollege.length === 0 && (
          <li className="font-bold text-blue-800 italic text-center py-4 bg-white bg-opacity-50 rounded-lg">No rooms available.</li>
        )}  
      </ul>
    </aside>

    </div>
  
  )
}

export default Collagelist