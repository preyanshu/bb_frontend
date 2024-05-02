import React from 'react'
import { useRef ,useEffect,useState} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import Notitoggle from '../Notitoggle';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';

const Campaigns = (props) => {
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  // const desiredWidth = !flag2 ? '5vw' : '16vw';
  // const desiredWidth2 = !flag2 ? '87vw' : '80vw';
  // const desiredWidth3 = !flag2 ? "94vw" : '82vw';
  const ref= useRef();

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
    const location=useLocation();
  const navigate=useNavigate();
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
    <div style={{paddingLeft:"5%",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <div style={{width:"100%"}}>
      <Notitoggle></Notitoggle>  

      </div>
   
    </div>
    
      

    

    <div className="notifications" style={{width:desiredWidth3,transition:"0.3s"}}>


<div className="a shadow " style={{height:60+"vh",width:77+"vw",backgroundColor:isDarkTheme?"#302341":"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px"}}>

        <h4 style={{marginTop:15+"px",marginBottom:27+"px"}}><b><i class="fa-solid fa-map fa-lg ml-5 me-3 "></i>Campaigns</b></h4>
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
        <div>
        <hr />
        <div style={{display:"flex",width:100+"%",justifyContent:"space-between",alignItems:"center"}}>
        <span ><i class="fa-solid fa-bell fa-lg me-3"></i>Campaigns Title</span>  <span className='classsec'>  <i class="fa-solid fa-user fa-lg me-3"></i>
         Sender's Name</span>  <span className='createdsec'> <b>10:00 AM</b></span>  
<div className="btn btn-success cambtn" onClick={()=>{
 toast.success("Campaign Sent Successfully")
}}><i class="fa-solid fa-paper-plane"></i></div>

        </div>
        <hr />
        <div style={{display:"flex",width:100+"%",justifyContent:"space-between",alignItems:"center"}}>
        <span ><i class="fa-solid fa-bell fa-lg me-3"></i>Campaigns Title</span>  <span className='classsec' >  <i class="fa-solid fa-user fa-lg me-3"></i>
         Sender's Name</span>  <span className='createdsec' > <b>09:00 AM</b></span>  
         <div className="btn btn-success cambtn" onClick={()=>{
 toast.success("Campaign Sent Successfully")
}}><i class="fa-solid fa-paper-plane"></i></div>

        </div>
        <hr />
        <div style={{display:"flex",width:100+"%",justifyContent:"space-between",alignItems:"center"}}>
        <span ><i class="fa-solid fa-bell fa-lg me-3"></i>Campaigns Title</span>  <span  className='classsec'>  <i class="fa-solid fa-user fa-lg me-3"></i>
         Sender's Name</span>  <span className='createdsec' > <b>12:00 AM</b></span>  
         <div className="btn btn-success cambtn" onClick={()=>{
           toast.success("Campaign Sent Successfully")
  
}}><i class="fa-solid fa-paper-plane"></i></div>

        </div>
        
      
        
       
    </div>    
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

export default Campaigns
