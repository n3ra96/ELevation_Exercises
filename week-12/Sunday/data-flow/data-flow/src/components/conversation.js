import React from 'react'

const Conversation = (sender) => {
    
    const senderName = (send) => {
        if(send === "self"){
            return ("me")
        }
        if(send === "other"){
            return (sender.sender.with)
        }
    }

    const back = () => {
        
    }

  return (
    <div>
        <button onClick={() => sender.switch()}>Back!</button>
        {sender.sender.convo.map((msg,index) => <div key={index}><span>{senderName(msg.sender)}:{msg.text}</span><br></br></div>)}
    </div>

  )
}


export default Conversation