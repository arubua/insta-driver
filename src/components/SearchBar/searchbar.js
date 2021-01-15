import React from 'react'
import {Link} from 'react-router-dom'
import './searchbar.css'


const SearchBar = () =>  {

    const search = () => (
            <input id="search" placeholder="Search users, messages or chat id's" />
    )
    const burger = () => (
        <Link>
            <img alt="burger_icon" src='/images/icons/burger-round.svg'/>
        </Link>
        
    )
    /*const newChat = () => (
        <button className="newChat">+ Start a new chat</button>
    )*/

    
    return (
        <div className="searchBar">
            {search()} 
            {burger()}
             
        </div>
    )
    
}

export default SearchBar;
