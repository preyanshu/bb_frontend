import React, { useEffect, useState } from 'react';
import { useChatContext } from './context/chatcontext';
import axios from 'axios';
import { Chatloading } from './chatloading';
import { Groupmodel } from './groupmodel';

export const Mychats = () => {


  const { chats,  setChats, selectedChat, setSelectedChat,loading,setLoading } = useChatContext();
  const user = JSON.parse(localStorage.getItem('token'));
  

  
  const [show, setShow] = useState(false)

  // const setStyle = (chat) => {
  //   return {backgroundColor: selectedChat._id === chat._id ? "#0d6efd" : "",
  //    color: selectedChat._id === chat._id  ? "white" : ""}
  // }

  let modal = document.getElementById("myModal");

  const closeModel = () => {
    setShow(false)
  }
  
  window.onclick = (event) => {
    if (event.target === modal) {
        setShow(false)
    }
  }

  const fetchAllChats = async () => {
    try {
      setLoading(true)
      const config = {
        headers: {
          Authorization: `Bearer ${user.authtoken}`,
        },
      };

      const response = await axios.get('https://chatapp-backend-tm8i.onrender.com/api/chat/allchats', config);
      const { data } = response;

      setChats(data);
      console.log("allChats",data);
    } catch (error) {
      console.log(error)
    }
  };

 useEffect(() => {
   
   fetchAllChats();
   console.log("chats",chats);
}, []);

  const getSender = (chat) => {
   if (!chat.isGroupChat && user) {
    const otherUsers = chat.users.filter(u => u._id.toString() !== user._id.toString());
    const otherUser = otherUsers[0]; // Assuming there's only one other user in a one-on-one chat
    console.log("otherUser",otherUser);
    return otherUser ? otherUser : '';
     }
    return 'Group Chat';
  };

  let width = window.screen.width;


  return (width >= "750" || !selectedChat) && (

     <div  className="d-flex mychat1 flex-column box bg-light"  style={{boxShadow:"2px 2px 2px black",backgroundColor:"black"}}>
      <div className="chathead my-4">
        <span className="mychat mx-3">My Chats</span>
        <button className="chatbtn mx-3 px-3" onClick={() => setShow(true)}>
             New Group <i className="fa mx-2 fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div style={{overflowY: "auto"}}>
        {chats ? (
          <div className="container">
            <div className="row ">
              {chats.map((chat) => {
                return <div className="container py-3 userch d-flex align-items-center px-4 col-12 my-1"
                onClick={() =>{
                  setSelectedChat(chat)
                }} 
                key={chat._id}
                  >
                                 
                {!chat.isGroupChat ?
                 <img className='me-3' src={getSender(chat).pic} style={{width: "30px", borderRadius: "50%"}} alt="" /> :
                <img className='me-3' src={chat.GroupImage} style={{width: "30px", borderRadius: "50%"}} alt="hi" />}
                  {!chat.isGroupChat ?
                   (
                    <div>{chat &&
                      getSender(chat).name}
                      <br />
                      {/* <span style={{fontSize:"12px"}}>"{chat.latestMessage.content}"</span> */}
                      </div> 
                   )
                  :
                  (   
                    <div>{chat &&
                      chat.chatName}
                      <br />
                      {/* <span style={{fontSize:"12px"}}>"{chat.latestMessage.content}"</span> */}
                      </div> 
                      
                  )
                  }
                </div>}
                
              )}
            </div>
          </div>
        )
         :
        
        ( loading &&
            <Chatloading/> 
        )}
      </div>


          {/*============ model ============ */}

      <div id="myModal" style={{display: show ? "block" : "none"}} className="modal">

        <div className="modal-content container d-flex ">

          <span className="close" onClick={closeModel}>&times;</span>

           <Groupmodel/>
          
       </div>

      </div>


      </div>

  )
};
