import RobotProfileImage from '../assets/robot.png';
import userProfileImage from '../assets/user.png';
import { useState, useRef, useEffect } from 'react' 


export function Chatmessagerender({ msg, sender }) {

  //   if(sender === 'roboat')
  // {
  //     return (
  //       <div>
  //         <img src="/Reactlesson-and-projects/images/robot.png" width="50px" height="50px" overflow="hidden" />
  //           {msg}

  //       </div>
  //     );
  // }

  return (
    <div
      className={
        sender === 'user'
          ? 'chat-message-user'
          : 'chat-message-robot'
      }>
      {sender === 'robot' && (<img src={RobotProfileImage} className="chat-message-profile" />)}
      <div className="chat-message-text">

        {msg}

      </div>

      {sender === 'user' && (<img src={userProfileImage} className="chat-message-profile" />)}

    </div>
  );



}