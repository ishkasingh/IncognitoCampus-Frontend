import React, { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

export default function RoomList() {
  // const { rooms, joinRoom, currentRoom } = useContext(ChatContext);

  return (
    <>
    </>
    // <aside className="w-64 bg-red-300 p-4 border-r border-gray-300 h-screen overflow-y-auto">
    //   <h2 className="font-bold mb-6 text-xl text-gray-800">Available Rooms</h2>
    //   <ul className="space-y-2">
    //     {rooms.map((room) => (
    //       <li
    //         key={room.id || room.roomName}
    //         onClick={() => joinRoom(room)}
            
            
    //         className={`cursor-pointer p-3 rounded-md transition-colors duration-200 ${
    //           currentRoom === room.roomName
    //             ? "bg-blue-600 text-white shadow"
    //             : "hover:bg-blue-200 text-gray-700"
    //         }`}
    //         role="button"
    //         tabIndex={0}
    //         onKeyDown={(e) => {
    //           if (e.key === "Enter" || e.key === " ") {
    //             joinRoom(room);
    //           }
    //         }}
    //         aria-pressed={currentRoom === room.roomName}
    //       >
    //         <div className="font-semibold text-lg">{room.roomName}</div>
    //         {room.college && (
    //           <div className="text-sm text-gray-500">{room.college}</div>
    //         )}
    //       </li>
    //     ))}
    //     {rooms.length === 0 && (
    //       <li className="text-gray-500 italic">No rooms available.</li>
    //     )}
    //   </ul>
    // </aside>
  );
}
