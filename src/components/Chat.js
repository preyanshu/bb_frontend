import { useChatContext } from "./context/chatcontext"
import { Mychats } from "./mychats";
import { Sidedrawer } from "./sidedrawer";
import { Chatbox } from "./chatbox";
import {useNavigate} from "react-router-dom"
// import { useState } from "react";
import React  from 'react';


export const Chat = () => {
  

let navigate = useNavigate()

   const { user } = useChatContext();
   console.log("user",user);

  //  const [fetchAgain, setFetchAgain] = useState(false);

   const info =  localStorage.getItem("token") 

   if(!info){
    navigate("/")
   }


  return (
    <div
      className=" bg-dark d-flex flex-column align-items-center "
      style={{ height: "76vh", width: "77vw" }}
    >
      {user && <Sidedrawer user={user}/>}

      <div className="d-flex justify-content-center" style={{width: "100%", height: "100%",backgroundColor:"none"}}>
        { user &&
        <Mychats  style={{height:70+"vh"}}/>
        }

      {   user &&    
      <Chatbox className="shadow"/>
     }     
      </div>

      

    </div>
  )
} 
