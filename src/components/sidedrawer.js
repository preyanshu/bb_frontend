


import React, {useEffect, useState,useRef} from 'react'
import { useNavigate } from "react-router-dom";
import Drawer from './drawer';
import { Userlist } from './uselist';
import { Chatloading } from './chatloading';
import axios from "axios"
import { useChatContext } from "./context/chatcontext"
import {getSender }from "./chatlogics"



export const Sidedrawer = () => {
  let [count,setcount]=useState(0);

  const ref=useRef();
  const { user, setSelectedChat, notification, setNotification,chat,setChats,selectedChat} = useChatContext()
  const fetchAllChats = async () => {
  
    try {
      // setLoading(true)
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

 let modal = document.getElementById("myModal");


  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [shownot, setShownot] = useState(false);


  const closeModel = () => {
    setShow(false)
  }
  
  window.onclick = (event) => {
    if (event.target === modal) {
        setShow(false)
    }
  }

    let navigate = useNavigate();

    const logout= () => {
         localStorage.removeItem("token");
         setSelectedChat();
         navigate("/")
    }

      const myprofile = () =>{
         setShow(true);
    }

    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)


    const handleClick = async (val) =>{
       setSearch(val)
       if(val===""){
        setSearch("")

       }
       console.log(search);
      try {
          setLoading(true)
          
            const config = {
              headers: {
                Authorization: `Bearer ${user.authtoken}`,
              },
            };

            const response = await axios.get(`https://chatapp-backend-tm8i.onrender.com/api/user/allusers?search=${search}`, config);
              
            setLoading(false);
            setSearchResult(response.data);

        } catch (error) {
            setLoading(false);
            // alert(error);
        }
    }


    useEffect(()=>{
       handleClick("");
    },[])

    const accessChat = async (userId) =>{
      fetchAllChats();
        
      try {
  
  
         const config = {
          headers: {
            "Content-type" : "application/json",
            Authorization: `Bearer ${user.authtoken}`,
          },
        };
  
        const {data} = await axios.post("https://chatapp-backend-tm8i.onrender.com/api/chat", { userId }, config);
         setSelectedChat(data[0]);

         console.log(data);
      
  
      } catch (error) {
        // alert(error);
      }
    }
    

    const shownoti = () =>{
      setShownot(!shownot);
    }


  return (

    <div  className=" d-flex justify-content-center px-4" style={{width: "77vw", backgroundColor: "#302341" }} >

    <div className="d-flex my-2 justify-content-between" style={{width: "95vw" }}>

       <div className="app">
           <button  className="mx-3"style={{marginTop:3+"px",paddingLeft:0+"px"}}onClick={() => setIsOpen(!isOpen)} className="form-control seacrchbtn ms-0" type="search">
              <i className="fa-solid fa-magnifying-glass mx-3"></i>
                Search
            </button>

            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>

                <p style={{fontSize: "1.3rem",visibility:"hidden",display:"none"}}>Search Users
                <button  ref={ref}onClick={() => {
                  setIsOpen(!isOpen);
                  
                  }} className="btn btn-danger m-3 ">
                       close
                      </button>
                </p>

              
              <div className='d-flex'>
                <input
                        type="text"
                        className="form-control mb-4"
                        id="floatingInput"
                        name="name"
                        placeholder="Search here"
                        onChange={ (e) =>handleClick(e.target.value)}
                        required
                    />
                    <button onClick={handleClick} className='ms-3 btn btn-secondary mb-4' style={{backgroundColor: "#8F4FBE"}}>Go</button>
                    </div>

                    

                { loading  ?

                    (
                       <Chatloading/>
                    ) 
                   :

                     
                        searchResult.map((u) =>{
                            return <Userlist
                             key={u._id} u={u}
                             handleClick={() => {accessChat(u._id)
                             
                              setcount(c=>c+1);
                              console.log("count  :  ",count  )
                              if(count==1){
                                ref.current.click()
                                setcount(0);

                              }
                              
                              // console.log("selc",selectedChat);
                            
                            }}
                             />
                        }) 
                       
                     
                 }

            </Drawer>
       </div>


    <div className="display-6 slideheading" style={{opacity: ".8", color: "white"}}>
        
        </div>


       <div className='d-flex align-items-center' style={{position: "relative"}}>
        
        <div className="d-flex align-items-center flex-column">
         <i className="fa fa-bell p-2 mx-3  notif" aria-hidden="true"
          style={{backgroundColor: "white", borderRadius: "50%"}}
          onClick={() => shownoti()}>
             {notification.length >0  &&
             <span style={{color: "white", position: "absolute", top: "0px", backgroundColor: "red", padding: "3px", borderRadius: "50%"}}>{notification.length}</span> 
              }
          </i>
          
         {!notification.length && <div className='hide px-3 my-4' style={{position: "absolute", zIndex: "3", display: shownot ? "flex": "none"}}>No new messages</div>}
          
          { notification.map((n) =>{
             return <div className='hide mx-5' style={{position: "absolute", zIndex: "3", display: shownot ? "flex": "none"}}
              key={n._id} onClick={() =>{setSelectedChat(n.chat)
              setNotification(notification.filter((x) => x !== n))}}
               >
                 {
                  n.chat.isGroupChat ? 
                  `New Message in ${n.chat.chatName}` :
                  `New Message from ${getSender(n.chat, user,"name")}`
                 }
              </div>
            })
          }
          
         </div>

        <div className="dropdown">
        <button className="btn btn-light sldrp dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img style={{width: "30px", borderRadius: "50%"}} className='mx-1' src={user.pic} alt="" />
        </button>
        <ul className="dropdown-menu">
            <li><button className="dropdown-item" id="myBtn" onClick={myprofile}>My Profile</button></li>
            <li><button className="dropdown-item"  onClick={logout}>Logout</button></li>
        </ul>
        </div>
        </div>
    </div>


    <div id="myModal" style={{display: show ? "block" : "none"}} className="modal">

        <div className="modal-content d-flex justify-content-center">

          <span className="close" onClick={closeModel}>&times;</span>

          <div className='mcontent'>
          <p className='display-5 d-flex justify-content-center '>{user.name}</p>
            <img style={{width: "70%", marginLeft: "15%", borderRadius: "50%", border: "2px solid #b4b4b4"}} src={user.pic} alt="" />
            <div className='d-flex my-3 flex-column align-items-center justify-content-center'  style={{fontSize: "30px", backgroundColor: "rgb(235 235 235)", borderRadius: "8px"}}>
               Email : {user.email}
            </div>
          </div>
       </div>

      </div>

    
        
    </div>
  )
} 
