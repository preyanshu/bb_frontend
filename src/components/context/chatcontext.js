import {createContext, useContext, useEffect, useState} from "react"
import React  from 'react';

const ChatContext = createContext()


const ChatProvider = ({children}) =>{
    

    const [user, setUser] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([])
    const [notification, setNotification] = useState([])
    

    useEffect(() =>{
        let userinfo = JSON.parse(localStorage.getItem("token"));
       
        setUser(userinfo);        

    }, [])
    const [loading, setLoading] = useState(false);

     
    

    return( <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats, notification, setNotification ,setLoading,loading}}>
        
        {children}
    </ChatContext.Provider>)
}

export const useChatContext = () =>{

    return useContext(ChatContext);
}


export default ChatProvider;