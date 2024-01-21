import React, { useEffect, useState } from "react";
import { useChatContext } from "./context/chatcontext";
import axios from "axios";
import { Scrollchat } from "./scrollchat";
import io from "socket.io-client"
import {getSender }from "./chatlogics"



const ENDPOINT = "https://chatapp-backend-tm8i.onrender.com"
 let socket, selectedChatCompare;

export const Chatbox = () => {

  const [newmessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false)
  const [typing , setTyping] = useState(false)
  const [istyping, setIsTyping] = useState(false)

  const { selectedChat, setSelectedChat, notification, setNotification,chat ,setChats,setLoading,loading} = useChatContext();

  const user = JSON.parse(localStorage.getItem('token'));
  console.log("user",user)

  const fetchAllmessages = async () => {

    if (!selectedChat) {
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.authtoken}`,
        },
      };

      const { data } = await axios.get(
        `https://chatapp-backend-tm8i.onrender.com/api/message/${selectedChat._id}`,
        config
      );

      setMessage(data);
      socket.emit("join chat", selectedChat._id);

    } catch (error) {
      console.log(error);
    }
  };
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
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() =>{

    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true))
    socket.on("stop typing", () => setIsTyping(false))

  }, []);


  useEffect(() => {

    fetchAllmessages();
    selectedChatCompare = selectedChat

  }, [selectedChat]);

  useEffect(() => {

    socket.on("message received", (newMessageReceived) => {
      fetchAllmessages();
      fetchAllChats();
 
    
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
          if(!notification.includes(newMessageReceived)){
            setNotification([newMessageReceived, ...notification]);
          
            
          }
      } 
      else {
        setMessage([...message, newMessageReceived]);
      }
    });
   
    
    
  })
  

 
  // const sendMessage = async (e) => {
  

  //   if (e.key === "Enter" && newmessage) {
  //     // e.preventDefault();
  //     socket.emit("stop typing", selectedChat._id)
  //     try {
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${user.authtoken}`,
  //         },
  //       };
        
  //       setNewMessage("");
  //       const { data } = await axios.post(
  //         "https://chatapp-backend-tm8i.onrender.com/api/message",
  //         {
  //           content: newmessage,
  //           chatId: selectedChat._id,
  //         },
  //         config
  //       );
  //       socket.emit("new message", data)
  //       console.log("new",newmessage);
  //       fetchAllChats();
  //       // setMessage([...message, data]);
  //       if(data){
  //         fetchAllmessages();
  //         fetchAllChats()
        

  //       }
        
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }
  // };
  // setInterval(() => {
  //   fetchAllmessages();
    
  // }, 2000);


  const sendMessage2 = async (e) => {
    // e.preventDefault();


    if (newmessage) {
      socket.emit("stop typing", selectedChat._id)
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.authtoken}`,
          },
        };
        
        setNewMessage("");
        const { data } = await axios.post(
          "https://chatapp-backend-tm8i.onrender.com/api/message",
          {
            content: newmessage,
            chatId: selectedChat._id,
          },
          config
        );
        socket.emit("new message", data);
        // console.log("working2");
        
        console.log("new",newmessage);
        // setMessage([...message, data]);
        
        if(data){
          fetchAllmessages();
          fetchAllChats();
          

        }
       
        
      }
       catch (error) {
        alert(error);
      }
    }
  };

  

  const typinghandler = (e) =>{
    setNewMessage(e.target.value)

    if(!socketConnected) return;

    if(!typing){
      setTyping(true);
      socket.emit("typing", selectedChat._id)
    }

    let lastTypingtime = new Date().getTime();
    let timelength = 3000;
    setTimeout(() =>{
      let timenow = new Date().getTime();
      let timediff = timenow - lastTypingtime;

      if(timediff >= timelength && typing){
        socket.emit("stop typing", selectedChat._id)
        setTyping(false);
      }
    }, timelength)
  }


  let width = window.screen.width;

  return (width >= "750" || selectedChat) && (
    <div
      className="d-flex chatbox flex-column align-items-center justify-content-center"
    >
      <div className="d-flex align-items-center justify-content-between" style={{width: "100%"}}>
              {selectedChat && selectedChat.isGroupChat ? (
          <div className="mt-3" style={{ fontSize: "20px" }}>
            {selectedChat && <img src="https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg" className="mx-3" style={{ width: "30px", borderRadius: "50%"}} alt="user img" />}

            {selectedChat.chatName}
            <div class="dropdown mx-3" style={{display:"inline-block"}}>
  <span class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Group Members
  </span>

  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
    {/* <li><a class="dropdown-item" href="#">Action</a></li> */}
    {selectedChat.users.map((user)=>{
              return(
               <li><span className="mx-2"style={{fontSize:"15px"}}>{user.name.split(" ")[0]}</span></li> 
              )

            })}
  </ul>
</div>
            
          </div>
        ) : ( 
          <div className="mt-3" style={{ fontSize: "20px" }}>
            {selectedChat && <img src={getSender(selectedChat, user,"nam2e")} className="mx-3" style={{ width: "30px", borderRadius: "50%"}} alt="user img" />}

            {getSender(selectedChat, user,"name")}
          </div>
        )}
         { (width <= "750" && selectedChat) && (<button className="btn btn-primary seacrchbtn me-3 mt-2" onClick={() => setSelectedChat()}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
           <span className="ms-2">Back</span>
         </button>
         )}
      </div>
      {selectedChat ?  <div
        className="mt-3 p-2 scchat"
        style={{
          backgroundColor: "#e9e9e9",
          width: "100%",
          height: "80%",
          overflowY: "auto",
          scrollbarWidth: "none",
          wordWrap: "break-word",
        }}
      >    

           {console.log("sc",message)}
           
          <Scrollchat message={message} pic={getSender(selectedChat, user,"nam2e")} />
         </div>
       : 
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "90%"}}>
          <span className="px-2" style={{fontSize: "2rem", opacity: ".7"}}>
            Select Someone to Chat
          </span>
          <lottie-player
           src="https://lottie.host/309ea5b0-9f79-49e6-9719-d93219860807/BjL6kG4oJk.json"
            background="#fff" speed="1" style={{width: "200px", height: "200px", marginTop: "3%"}}
             direction="1" mode="normal" loop autoplay>
             </lottie-player>
        </div>
       }

        

      <div
        className="mb-3 px-3"
        style={{ width: "100%", marginTop: "2%", position: "relative" }}
      >
        {
          istyping ?  <div className="mb-3" style={{borderRadius: "7px", backgroundColor: "white", textAlign: "center", width: "80px"}}>
            typing....
          </div>
           : <> </>
        }
          {selectedChat && <div className="d-flex">
              <input
                type="text"
                className="form-control mesinp"
                required
                placeholder="Enter Message"
                
                value={newmessage}
                onChange={typinghandler}
                style={{ width: "100%", paddingRight: "50px"}}
              />
              <button className="sendButton" 
              style={{border: "none", marginLeft: "-40px", marginTop: "10px", background: "none", fontSize: "20px", opacity: ".7"}}
               onClick={sendMessage2}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>}
          </div>
    </div>
  ) 

};
