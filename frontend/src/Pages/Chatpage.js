import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chat');
      setChats(response.data); // Assurez-vous de définir les données correctement
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <div key={index}>
            {chat.content} {/* Affichez les propriétés de vos objets de chat */}
          </div>
        ))
      ) : (
        <p>No chats available</p>
      )}
    </div>
  );
};

export default Chatpage;

