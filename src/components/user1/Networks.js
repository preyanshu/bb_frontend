
import React, {useEffect, useState,useRef} from 'react'
import { useNavigate ,Link,useLocation} from "react-router-dom";
import Drawer from '../drawer';
import { Userlist } from '../uselist';
import { Chatloading } from '../chatloading';
import axios from "axios"
import { useChatContext } from "../context/chatcontext"
import {getSender }from "../chatlogics"
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import Notitoggle from '../Notitoggle';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';

const Networks = (props) => {
  const location=useLocation();
  const navigate=useNavigate();
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  useEffect(()=>{
    if(window.innerWidth<1200){
      console.log("innerwidth",window.innerWidth);
      setflag2(false);
      
  
    }

  },[])

    var desiredWidth = !flag2 ? 80+"px" : '260px';
    // const desiredWidth2 = !flag2 ? '87vw' : '80vw';
    var desiredWidth2 = !flag2 ? "calc(100vw - 75px)" : 'calc(100vw - 250px)';
    // if(window.innerWidth<600){
    //   desiredWidth2="100vw";
    //   desiredWidth="5vw";
    // }
    var desiredWidth3 = !flag2 ? "calc(100vw - 75px)" : "calc(100vw - 250px)";
useEffect(()=>{
    const parts = location.pathname.split('/');
const library = parts[parts.length - 1];
console.log("lib",library);
  if(library==="user1"||library==="user2"||library==="user3"){
    const elements = document.querySelectorAll(".dashboard");

    elements.forEach(function(element) {
        element.style.backgroundColor = "#8F4FBE";
    });
  }
  else{
    const elements = document.querySelectorAll("."+library);

elements.forEach(function(element) {
    element.style.backgroundColor = "#8F4FBE";
});

  }

  },[])
    // console.log("token",);
    // console.log(JSON.parse(localStorage.getItem("token")).authtoken);

    // const navigate=useNavigate();
    // const ref=useRef();
    let [count,setcount]=useState(0);

    const ref=useRef();
    const { user, setSelectedChat, notification, setNotification,chat,setChats,selectedChat} = useChatContext();
    console.log("user",user);
    const fetchAllChats = async () => {
    
      try {
        // setLoading(true)
        const config = {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).authtoken}`,
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
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).authtoken}`,
                },
              };
  
              const response = await axios.get(`https://chatapp-backend-tm8i.onrender.com/api/user/allusers?search=${search}`, config);
                
              setLoading(false);
              setSearchResult(response.data);
  
          } catch (error) {
              setLoading(false);
              // alert(error);
              console.log(error);
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
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).authtoken}`,
            },
          };
    
          const {data} = await axios.post("https://chatapp-backend-tm8i.onrender.com/api/chat", { userId }, config);
           setSelectedChat(data[0]);
          //  console.log("chat ghhh jjjjjjjjj bbbbbbbbbn555data");
          //  console.log(data);
        
    
        } catch (error) {
          
          toast.error(error.message);

        }
      }
      
  
     

      const {isDarkTheme}=useTheme();
  return (<>
    <div className='mainbg'>
       {1 &&  <div className="sidebar" style={{position:"relative",width:desiredWidth,transition:"0.3s"}}>
      {
        !flag2 &&<i class=" arrow fa-solid fa-arrow-right fa-xl ml-5 mx-3 " style={{position:"absolute",right:"10px",marginLeft:"200px",top:"37px"}} onClick={()=>{
          if(flag2==false){
            setflag2(true);
          }
          else{
            setflag2(false);
          }
           
          //  setstu(false);
       
     
   }}></i>
      }
      {
        flag2 &&<i class="arrow fa-solid fa-arrow-left fa-xl ml-5 mx-3 " style={{position:"absolute",right:"10px",marginLeft:"200px",top:"37px"}} onClick={()=>{
          if(flag2==false){
            setflag2(true);
          }
          else{
            setflag2(false);
          }
           
          //  setstu(false);
       
     
   }}></i>
      }
      {
        flag &&<i class="fa-solid fa-arrow-left fa-xl ml-5 mx-3 " style={{position:"absolute",right:"10px",marginLeft:"200px",top:"37px"}} onClick={()=>{
          if(flag2==false){
            setflag2(true);
          }
          else{
            setflag2(false);
          }
           
           
          //  setstu(false);
       
     
   }}></i>
      }
      
    
      <Sidebar_2 flag={flag2}></Sidebar_2>

   
   
    </div>}
    <div className="notificationbg" style={{width:desiredWidth2,transition:"0.3s",backgroundColor:isDarkTheme?"#181822":"#E6EDFA",color:isDarkTheme?"white":"black"}}>     
      

    

    <div className="notifications" style={{width:desiredWidth3,transition:"0.3s",position:"relative"}}>
    <img src="../BBCrm (2) (1).png" alt="" style={{width:"30%",height:"auto",top:"12px",zIndex:"+100",position:"absolute",left:"26%"}} />
  <Notitoggle></Notitoggle>

<div className="a shadow " style={{height:60+"vh",width:77+"vw",backgroundColor:isDarkTheme?"#22222E":"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",overflowY:"scroll",position:"relative"}}
>

<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> <h4 style={{marginTop:15+"px",marginBottom:27+"px",display:"inline-block",width:"fit-content"}}><b><i class="fa-solid fa-list-check fa-lg ml-5 me-3 "></i><span class="netxt">Networks</span></b></h4>
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}

 <div className='d-flex searchbar' style={{height:37+"px"}}>
                <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        name="name"
                        placeholder="Search here"
                        onChange={ (e) =>handleClick(e.target.value)}
                        required
                    />
                    <button onClick={handleClick} className='ms-3 btn btn-success' >Go</button>
                    </div>
                    {/* <hr /> */}</div>
       
                    { loading?

(
  //  <Chatloading/>
  <div style={{height:83+"%",width:100+"%",display:"flex",alignItems:"center",justifyContent:"center"}}>
     <dotlottie-player src="https://lottie.host/934e5906-d3cc-4a76-9ca4-0cec6b479378/OknYMrgCvP.json" background="transparent" speed="1" style={{width: 300+"px", height: 300+"px"}} loop autoplay></dotlottie-player>
  </div>
 
  // <div>hi</div>
) 
:

  
    searchResult.map((u) =>{
        return (<> <br /><div className=""style={{display:"flex",width:100+"%",justifyContent:"space-between",alignItems:"center"}}>
        <span > <img  className="me-3" src={u.pic} style={{width: "30px", borderRadius: "50%"}} alt="" />{u.name}</span>  
        {/* <span >  <i class="fa-brands fa-linkedin fa-lg me-3"></i>
        Linkedin  </span> */}
         <div className="btn btn-primary" onClick={()=>{
        
          toast.error("functionality not added yet")
    // ref.current.click();
}} style={{backgroundColor:"#10ADAC",border:"0px",color:"black"}}>Connect</div>

        </div>

        </> )
        
        

          })
          
          // console.log("selc",selectedChat);
        
        }

    </div>


</div>

    </div>
    
  
   
 



      
    </div>
 
<button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:50+"vh"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Attachments...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  </>)
}

export default Networks
