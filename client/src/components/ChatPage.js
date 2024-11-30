import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import {useEffect,useState} from 'react';



const ChatPage = ({ socket}) => {
    const [messages,setMessage] = useState([]);
    useEffect(()=>{
        socket.on('messageResponse',(data)=>{
          setMessage([...messages,data]);
          console.log(data);
        });
    },[socket,messages]);
  return (
    <div className="chat">
      <ChatBar socket = {socket}/>
      <div className="chat__main">
        <ChatBody messages = {messages} />
        <ChatFooter socket = {socket} />
      </div>
    </div>
  );
};

export default ChatPage;