import { useState, useRef, useEffect } from 'react'
import { Chatinput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import { Chatmessagerender } from './components/Chatmessages';
import './App.css'










function App() {
  const [Chatmessage, setChatMessage] = useState([
    {
      message: 'hello bro hi',
      sender: 'user',
      id: 'id1'

    },
    {
      message: 'whats up bro',
      sender: 'robot',
      id: 'id2'
    },
    {
      message: 'what happened',
      sender: 'user',
      id: 'id3'
    },
    {
      message: 'gonna pay for that',
      sender: 'robot',
      id: 'id4'
    }
  ]);

  return (
    <div className="app-container">
      <Chatinput
        Chatmessage={Chatmessage}
        setChatMessage={setChatMessage}
      />

      <ChatMessage
        Chatmessage={Chatmessage}


      />



    </div>
  );
}

export default App
//4.59.35