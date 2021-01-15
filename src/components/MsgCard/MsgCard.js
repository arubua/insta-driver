import React from 'react'
import './MsgCard.css'

export default function MsgCard({id,firstName,lastName,subject,msg}) {
    return (
        <div className="msg-container">
            <div className="chat-id">ChatID: {id}</div>
            <div className="avatar">
                <p className="username">{firstName}<br/>
                <span className="handle">@{lastName}</span></p>
            </div>
            <div className="msg">
                <div className="msg-subject">{subject}</div>
                <div className="msg-content">{msg}</div>
            </div>
            <span className="time"/>
        </div>
    )
}
