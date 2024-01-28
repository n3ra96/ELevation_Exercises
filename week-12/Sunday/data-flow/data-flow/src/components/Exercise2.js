import React , {useState} from 'react'
import List from './list'
import Conversation from './conversation'

const  Exercise2 = () => {

    let [Contact , setContact] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    })
    
    

    const displayConvo = (name) => {
        let newContact = {...Contact}
        if (newContact.displayConversation == null){
            newContact.displayConversation = name
            setContact(newContact)
        }else{
            newContact.displayConversation = null
            setContact(newContact) 
        }
    }

    const filterConvo = (name) => {
        let findConvo = Contact.conversations.find(f => f.with === name)
        return (findConvo)
    }
    
    
    const render = () => {
        
        let myContact = {...Contact}
        if (myContact.displayConversation == null){
            return (<List Contactname={Contact} switch={displayConvo} />)
        }else{
            let oneConvo = filterConvo(Contact.displayConversation)
            return (<Conversation sender={oneConvo} switch={displayConvo} />)  
        }
    }

  return (
    <div>
        Exercise2
        {render()}
        
        
    </div>
  )
}



export default  Exercise2