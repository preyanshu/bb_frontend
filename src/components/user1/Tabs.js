import React from 'react'
import './tabs.css'
import { useTheme } from '../context/ThemeContext';
import {useNavigate,useLocation} from "react-router-dom"


const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {gNotifications,gAnnouncements}=useTheme(); 
  function getTimeDifference(date) {
    const currentDate = new Date();
    const givenDate = new Date(date);
    const difference = currentDate.getTime() - givenDate.getTime();
    const minutes = Math.floor(difference / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (years > 0) {
      return `${years} years ago`;
    }
    if (months > 0) {
      return `${months} months ago`;
    }
    if (days > 0) {
      return `${days} days ago`;
    }
    if (hours > 0) {
      return `${hours} hours ago`;
    }
    if (minutes > 0) {
      return `${minutes} minutes ago`;
    }
    return 'Just Now';
  }
  return (
   <div style={{color:"black"}}>
  



<div class="tabs" style={{position:"relative"}}>
   
  <div class="tab-2">
    <label for="tab2-1" style={{color:"white",fontSize:"14px"}}><i class="fa-solid fa-envelope me-2"></i>Notifications</label>
    <input id="tab2-1" name="tabs-two" type="radio" checked="checked"/>
    <div style={{overflowY:"auto"}}>
      {

        gNotifications.slice(-3).reverse().map((item)=>{
          // {console.log("item",item)}
          const date = new Date(item.createdAt);

              const timeAgo = getTimeDifference(date);
          return(<>
           <div className="p-3" style={{width:"100%",backgroundColor:"#C8ECFB",minHeight:"100px",marginBottom:"10px"}}>

<div style={{width:"100%",display:"flex"}}>
<i class="fa-solid fa-user me-3 fa-lg mt-3"></i> 

<span style={{fontSize:"15px"}}>
New Notification <b>{item.title}</b> from Auther
</span>

</div>

<i class="fa-solid fa-clock me-3" style={{color:"GrayText"}}></i> <span style={{fontSize:"12px",color:"GrayText"}}>{timeAgo}</span>



</div></>

          )
         
        })
      }

      <div className="btn btn-primary w-100"
      onClick={()=>{

        if(location.pathname.includes("user1")){
          navigate("/user1/notification")
        }
        else if (location.pathname.includes("user2")){
          navigate("/user2/notification")
        }
        else{
          navigate("/user3/notification")
        
        }


      }}
      
      
      > <div>More...</div></div>
      
      
    </div>
  </div>
  <div class="tab-2">
    <label for="tab2-2" style={{color:"white",fontSize:"14px"}}> <i class="fa-solid fa-bullhorn me-1"></i> Announcements</label>
    <input id="tab2-2" name="tabs-two" type="radio"/>
    <div style={{overflowY:"auto"}}>
    {

gAnnouncements.slice(-3).reverse().map((item)=>{
  // {console.log("item",item)}
  const date = new Date(item.createdAt);

      const timeAgo = getTimeDifference(date);
  return(<>
   <div className="p-3" style={{width:"100%",backgroundColor:"#C8ECFB",minHeight:"100px",marginBottom:"10px"}}>

<div style={{width:"100%",display:"flex"}}>
<i class="fa-solid fa-user me-3 fa-lg mt-3"></i> 

<span style={{fontSize:"15px"}}>
New Notification <b>{item.title}</b> from Auther
</span>

</div>

<i class="fa-solid fa-clock me-3" style={{color:"GrayText"}}></i> <span style={{fontSize:"12px",color:"GrayText"}}>{timeAgo}</span>



</div></>

  )
 
})
}
<div className="btn btn-primary w-100"
      onClick={()=>{

        if(location.pathname.includes("user1")){
          navigate("/user1/announcement")
        }
        else if (location.pathname.includes("user2")){
          navigate("/user2/announcement")
        }
        else{
          navigate("/user3/announcement")
        
        }


      }}
      
      
      > More...</div>
      
      
    </div>
  </div>
</div></div>
  )
}

export default Tabs
