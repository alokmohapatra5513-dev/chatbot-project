import { useState } from 'react'
import { chatbot } from 'supersimpledev';


export function Chatinput({ Chatmessage, setChatMessage }) {


  const [inputtext, setinput] = useState('');



  function saveinput(event) {
    setinput(event.target.value);


  }

  function sendmessage() {
    console.log(inputtext);

    const newchatmessage = [
      ...Chatmessage,
      {

        message: inputtext,
        sender: 'user',
        id: crypto.randomUUID()//crypto.randomUUID() generate unique id

      }
    ];
    setChatMessage(newchatmessage);

    const response = chatbot.getResponse(inputtext);
    setChatMessage([
      ...newchatmessage,
      {

        message: response,
        sender: 'robot',
        id: crypto.randomUUID()//crypto.randomUUID() generate unique id

      }
    ]);

    setinput('');




  }
  return (
    <div className="chat-input-container">
      <input className="chat-input" type="text" placeholder="Send a message to Chatbot" size="30" onChange={saveinput} value={inputtext} />

      <button onClick={sendmessage} className="send-button">Send</button>
    </div>
  );

}