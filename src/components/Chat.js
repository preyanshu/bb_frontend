import { useChatContext } from "./context/chatcontext"
import { Mychats } from "./mychats";
import { Sidedrawer } from "./sidedrawer";
import { Chatbox } from "./chatbox";
import {useNavigate} from "react-router-dom"
// import { useState } from "react";
import React  from 'react';
// import { useTheme } from "styled-components";
import { useTheme } from "./context/ThemeContext";


export const Chat = () => {
  const {isDarkTheme}=useTheme();
  

let navigate = useNavigate()

   const { user } = useChatContext();
  //  console.log("user",user);

  //  const [fetchAgain, setFetchAgain] = useState(false);

  //  const info =  localStorage.getItem("token") 



  return (
    <div
      className=" d-flex flex-column align-items-center "
      style={{ height: "76vh", width: "77vw"}}

    >
      
      
      {/* <h4>Loading</h4> */}
      {!user && <h5 style={{marginTop:"30vh",color:isDarkTheme?"white":"black"}}>No Token Found,Please Refresh The Page Or Login Again</h5>}
      {user && <Sidedrawer user={user}/>}

      <div className="d-flex justify-content-center mychatbox" style={{width: "100%", height: "100%"}}>
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
