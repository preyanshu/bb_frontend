import React,{useState} from 'react'

import Tabs from './user1/Tabs';
import { useTheme } from './context/ThemeContext';
import { useLocation,useNavigate } from 'react-router-dom';
const Notitoggle = () => {
    const[togglenoti,setTogglenoti]=useState(false);
    const { isDarkTheme,gNotifications,gAnnouncements ,update,setUpdate} = useTheme();
    const location=useLocation();
    const navigate=useNavigate();
  return (
    <div>
           <div className="text-left pt-3 pl-5  pe-5 " style={{paddingLeft:54+"px",paddingBottom:-10+"px",display:"flex",justifyContent:"space-between",border:"0px solid black",width:78+"vw",position:"absolute",top:10+"px",zIndex:100}}><div><br></br><h5></h5></div><div className='sidetextbar' style={{position:"relative",display:"flex"}}>
    

    {togglenoti &&  <div style={{backgroundColor:"white",color:"black",borderRadius:"100%",width:"25px",height:"25px",marginRight:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
     
    {update&& <div style={{backgroundColor:"red",height:"8px",width:"8px",borderRadius:"100%",position:"absolute",right:"0px",top:"0px"}}></div>}
     <i  class="fa-solid fa-bell fa-sm " onClick={()=>{
       setTogglenoti(!togglenoti);
       setUpdate(false);
     }}></i>
 
 </div>}
    {!togglenoti &&  <div style={{borderRadius:"100%",width:"25px",height:"25px",marginRight:"20px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
     
         
    {update&& <div style={{backgroundColor:"red",height:"8px",width:"8px",borderRadius:"100%",position:"absolute",right:"0px",top:"0px"}}></div>}
     <i  class="fa-solid fa-bell fa-sm " onClick={()=>{
       setTogglenoti(!togglenoti);
       setUpdate(false);
     }}></i>
 
 </div>}
     
     
     <i  style={{marginRight:11+"px",color:"red",marginTop:"12px"}}class="fa-solid fa-user fa-sm "></i><span 
 style={{cursor:"pointer",color:"red"}}
 onClick={()=>{
   
   
   localStorage.removeItem("token")
   localStorage.removeItem("token2")

   setTimeout(() => {
    alert("logged out successfully");
    navigate("/login")
   }, 500);
//    props.showAlert("logged out successfully","danger")

  
   
 
 }}
 >Logout</span>
 
 {togglenoti && <div className="noti px-3"  data-aos="zoom-in" style={{position:"absolute",right:0+"px",top:45+"px",width:300+"px",height:450+"px",backgroundColor:isDarkTheme?"white":"#302341",zIndex:1000000,borderRadius:"25px",overflowX:"hidden"}}>
 
 <div style={{position:"absolute",top:"0px",left:"0px",backgroundColor:"#A15BD4",height:"100px",width:"100%"}}>
 
 </div>
   <Tabs ></Tabs>
 
 
   
   
   
   </div>}
 
 
 
 
 </div></div>
      
    </div>
  )
}

export default Notitoggle
