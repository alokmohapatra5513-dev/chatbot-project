import RobotProfileImage from '../assets/robot.png';
import userProfileImage from '../assets/user.png';
import { useState, useRef, useEffect } from 'react' 
import { Chatmessagerender } from './Chatmessages';
export function ChatMessage({ Chatmessage }) {


  //const [ChatMessage,setChatMessage]=array;// de-structurin of array 
  // const ChatMessage = array[0];
  // const setChatMessage = array[1];

  //3.39
  let chatmsg = useRef(null);

  useEffect(() => {
    let chatele = chatmsg.current;
    chatele.scrollTop = chatele.scrollHeight;

  }
    ,
    [Chatmessage]
  );
  //3.47


  return (
    <div className="chat-messages-container"
      ref={chatmsg}
    >





      {
        Chatmessage.map((chat) => {
          return (
            <Chatmessagerender
              msg={chat.message}
              sender={chat.sender}
              key={chat.id}
            />
          );
        })
      }

    </div>);
}