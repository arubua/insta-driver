import React from 'react';
import MsgCard from '../MsgCard/MsgCard';

export default function Messages(props) {
    const divStyle={
        width:'400px',
        height:'70vh',
        overflow:'auto',
        background:'#fff',
       
    }
    return (
        <div style={
            divStyle
        }>
            {props.messages.map((message) => {
                return(
                    <MsgCard key={message.id} {...message}/>
                )  
            })}
            
        </div>
    )
}
