import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SideNav from '../SideNav/sideNav'
import SearchBar from '../SearchBar/searchbar'
import Messages from '../Messages/Messages'
import './profile.css'



const Profile = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/messages");
            setMessages(response.data)
            
        }
        fetchData();
    },[])


    return (
        <div className="flex-container content">
            <SideNav className="sidenav"/>
            <div className="content2">
                <SearchBar/>
                <Messages 
                messages={messages}
                />
                
            </div>
            
        </div>
    )
}

export default Profile;