import React, { useContext } from 'react'
import { ChatContext } from '../../Context/ChatContext';
import axios from 'axios';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

const Channels = () => {

    const {rooms} = useContext(ChatContext);
    // console.log(rooms,"ppppppcccc");
    // console.log(rooms.id,"ppppppcccc");

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo.id;

    const subscribehandler =  async (idx)=>{
        try {
            const res = await axios.post(`http://localhost:8080/api/users/${id}/follow/${idx}`);
            toast.success("Subscribed successfully");
        } catch (error) {
            console.log(error);
        }
    }



  return (
    
 
    <div className="bg-gray-100 w-full min-h-screen p-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Available Channels</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h2>
            <p className="text-gray-600 mb-4">{room.description}</p>
            <div className="flex justify-between mt-4">
            <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">{room.college}</span>
              <button
              onClick={() => subscribehandler(room.id)}
              className="px-4 py-1.5 text-sm bg-purple-200 text-purple-800 rounded-full hover:bg-purple-300 transition duration-200 font-medium">
                Subscribe
              </button>
            </div>
              </div>
        ))}
      </div>
    </div>

 
  )
}

export default Channels