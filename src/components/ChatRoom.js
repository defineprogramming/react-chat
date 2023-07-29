import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const socket = io('http://localhost:3000');

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;