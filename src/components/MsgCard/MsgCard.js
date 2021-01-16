import React from 'react'
import './MsgCard.css'

export default function MsgCard({id,firstName,lastName,subject,msg}) {
    
    const truncate = (str, num) => {
        return str.length > num ? str.substring(0, num) + "..." : str;
    }

    return (
        <div className="msg-container">
            <div className='id-fix'><div className="chat-id">ChatID: {id}</div></div>
            <div className="float-container">
            <div className="avi">
                <div className="avatar" style={{
                    width:60,
                    height:60, 
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/avatar.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    marginBottom:5
                }}></div>
                <p className="username">{firstName}</p>
                <p className="handle">@{lastName}</p>
            </div>
            <div className="msg">
                <div className="msg-subject">{truncate(subject,20)}</div>
                <div className="msg-content">{truncate(msg, 50)}</div>
            </div>
            </div>
            <span className="time"/>
        </div>
    )
}
