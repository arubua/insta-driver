import React, {useEffect} from 'react'
import { Widget,
    handleNewUserMessage, 
    addResponseMessage, 
    addUserMessage, 
    renderCustomComponent } from 'react-chat-widget';
 import 'react-chat-widget/lib/styles.css';
 import './chat.css'


const Chat = () => {
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
      }, []);
    
      const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };

      const getCustomLauncher = (handleToggle ) => 
        <button class="launcher" onClick={handleToggle}>+Start a New Chat</button>
  

      const avatar = () => (
        <img alt="avatar" src='/images/jdepp.jpg' />
        )

        /*const contact = () => (
          <button className="contactInfo">Contact Info</button>
          )*/
    return (
        <div className="widget">
          <Widget
              handleNewUserMessage={handleNewUserMessage}
              profileAvatar={avatar()}
              title="Inquiry about relocation from Nairobi"
              
              launcher={handleToggle => getCustomLauncher(handleToggle)}
          />
        </div>
    )
}

export default Chat;
