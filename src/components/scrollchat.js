import React from 'react'
import ScrollableFeed from "react-scrollable-feed"
import { useChatContext } from './context/chatcontext'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from './chatlogics'
import {getSender }from "./chatlogics"

export const Scrollchat = ({message, pic}) => {
  console.log("message",message);

  const {user} = useChatContext()
 
  return (
       <div style={{width: "100%", height: "99.5%"}}>
    <ScrollableFeed >
        {
            message &&  message.map((m, i) =>{
              // console.log("m",m._id);
              return <>
              {console.log("v",m.newmessage)}
              { (m._id) &&
                <div className='d-flex'>
                {(isSameSender(message, m, i, user._id) || isLastMessage(message, i, user._id)) && (
                    <div className='me-3 ml-3 mr-3 mt-3' style={{marginLeft:6+"px"}}>
                        <img src={m.sender.pic} style={{ width: "30px", borderRadius: "50%" }} alt="img" />
                    </div>
                )}
  
                   <span  className="mt-3 " style={{
                      backgroundColor: `${m.sender._id === user._id ?  "#8F4FBE" : "white"}`,
                      color: `${m.sender._id === user._id ? "white" :"black"}`,
                      borderRadius: `${m.sender._id === user._id ? "10px 10px 0 10px": "10px 10px 10px 0"}`, padding : "5px 10px", maxWidth: "75%",
                      marginLeft: isSameSenderMargin(message, m, i, user._id),
                      marginTop: isSameUser(message, m, i, user._id) ? 3: 10,
                      overflow: "auto",
                      position:"relative",
                      minWidth:100+"px",
  
  
  
                      
                   }}>
                 <div style={{display:"flex",width:100+"%",justifyContent:"start"}}> 
                 {user.name!==m.sender.name&&<h6 style={{fontSize:"10px",left:"0px"}}>{  m.sender.name }</h6> }</div>
                      <span style={{marginTop:"30px"}}>{m.content
                  }</span>
                   </span>
  
            </div>
              }
              { (m.newmessage) &&
                <div className='d-flex'>
                
  
              <span  className="mt-3 " style={{
                      backgroundColor: "#0d6efd",
                      color: "white",
                      borderRadius: "10px 10px 0 10px", padding : "5px 10px", maxWidth: "75%",
                      marginLeft: 52,
                      marginTop: 3,
                      overflow: "auto",
                      position:"relative",
                      minWidth:100+"px",
  
  
  
                      
                   }}>
                 <div style={{display:"flex",width:100+"%",justifyContent:"start"}}> 
                 {1 &&<h6 style={{fontSize:"10px",left:"0px"}}></h6> }</div>
                      <span style={{marginTop:"30px"}}>{m.newmessage
                  }</span>
                   </span>
  
            </div>
              }
              </>
            })
        }
    </ScrollableFeed>
    </div>
    
  ) 
}
