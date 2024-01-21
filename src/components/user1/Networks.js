
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
        element.style.backgroundColor = "#E73673";
    });
  }
  else{
    const elements = document.querySelectorAll("."+library);

elements.forEach(function(element) {
    element.style.backgroundColor = "#E73673";
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
              alert(error);
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
          alert(error);
        }
      }
      
  
      const shownoti = () =>{
        setShownot(!shownot);
      }
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
    <div className="notificationbg" style={{width:desiredWidth2,transition:"0.3s"}}>     
      

    

    <div className="notifications" style={{width:desiredWidth3,transition:"0.3s"}}>
   <div className="text-left pt-3 pl-5  pe-5" style={{paddingLeft:54+"px",paddingBottom:-10+"px",display:"flex",justifyContent:"space-between",border:"0px solid black",width:78+"vw",position:"absolute",top:10+"px",zIndex:1000000}}><div>{location.pathname}<br></br><h5>Dashboard</h5></div><div className='sidetextbar'><i style={{marginRight:20+"px"}} class="fa-solid fa-bell fa-sm "></i><i style={{marginRight:20+"px"}} class="fa-solid fa-bullhorn fa-sm "></i><i
style={{marginRight:8+"px"}} class="fa-solid fa-gear fa-sm "></i><i  style={{marginRight:11+"px",color:"red"}}class="fa-solid fa-user fa-sm "></i><span 
style={{cursor:"pointer",color:"red"}}
onClick={()=>{
  
  navigate("/");
  localStorage.removeItem("token")
  localStorage.removeItem("token2")
  props.showAlert("logged out successfully","danger")
 
  

}}
>Logout</span></div></div>

<div className="a shadow " style={{height:80+"vh",width:77+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px"}}>
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
        return (<> <hr /><div className=""style={{display:"flex",width:100+"%",justifyContent:"space-between",alignItems:"center"}}>
        <span > <img  className="me-3" src={u.pic} style={{width: "30px", borderRadius: "50%"}} alt="" />{u.name}</span>  
        {/* <span >  <i class="fa-brands fa-linkedin fa-lg me-3"></i>
        Linkedin  </span> */}
         <div className="btn btn-primary" onClick={()=>{
          alert("functionality not added yet")
    // ref.current.click();
}}>Connect</div>

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
