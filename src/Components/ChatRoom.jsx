import React, { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../Context/ChatContext";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import Navbar from "../Components/pages/Navbar"
export default function ChatRoom() {
  const {rooms, currentRoom, messages, currentRoomId, currentRoomDescription} = useContext(ChatContext);
  const messagesEndRef = useRef();

  // Scroll to bottom when messages update
  useEffect(() => {
    
    
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);



  if (!currentRoom) return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center p-8 rounded-xl bg-white shadow-lg border border-gray-100">
        <div className="text-gray-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className="text-gray-600 font-medium text-lg">Select a room to join the chat</p>
        <p className="text-gray-400 text-sm mt-2">Choose from the available rooms in the sidebar</p>
      </div>
    </div>
  );

  return (
 
    <div className="flex flex-col flex-grow bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-blue-500 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 font-sans">{currentRoom}</h2>
      </div>
      
      <div className="bg-blue-100 rounded-lg p-4 mb-2">
        <h2 className="font-medium text-blue-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Description: <span className="font-normal">{currentRoomDescription}</span>
        </h2>
      </div>

      <div className="flex-grow overflow-auto mb-2 border border-gray-200 rounded-xl p-6 bg-white shadow-inner">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      
      <MessageInput />
    </div>
   
  );
}
