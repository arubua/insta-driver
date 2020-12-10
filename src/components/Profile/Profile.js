import React from 'react';
import SideNav from './SideNav/sideNav'
import SearchBar from './SearchBar/searchbar'
import Chat from './Chat/chat'
import './profile.css'


const Profile = () => {


    return (
        <div className="flex-container content">
            <SideNav className="sidenav"/>
            <div className="content2">
                <SearchBar/>
                <Chat/>
            </div>
            
        </div>
    )
}

export default Profile;