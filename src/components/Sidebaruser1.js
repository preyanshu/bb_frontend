import React from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Sidebaruser1 = (props) => {
    const {ref}=ref;
    let location = useLocation();
    const navigate=useNavigate();

  return (
    <>
    
    <h5 style={{marginTop:73+"vh"}}><i class="fa-solid fa-table-columns fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Home</Link></h5>
   <h5><i class="fa-solid fa-envelope fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Notifications</Link></h5>
   <h5><i class="fa-solid fa-comment fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Chats</Link></h5>
   <h5><i class="fa-solid fa-map fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Campaigns</Link></h5>
   <h5><i class="fa-solid fa-calendar-days fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Calender</Link></h5>
   <h5><i class="fa-solid fa-network-wired fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Network</Link></h5>
   <h5><i class="fa-solid fa-chart-line fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Activites</Link></h5>
   <h5><i class="fa-solid fa-list-check fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Tasks</Link></h5>
   <h5><i class="fa-solid fa-square-poll-vertical fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Results</Link></h5>
   <h5><i class="fa-solid fa-file-lines fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Reports</Link></h5>
   <h5><i class="fa-solid fa-book-open fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Library</Link></h5>
   <h5><i class="fa-solid fa-file fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>AI resume</Link></h5>
   <h5><i class="fa-solid fa-code fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Codeian</Link></h5>
   <h5><i class="fa-solid fa-message fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Feedback</Link></h5>
   <h5><i class="fa-solid fa-circle-question fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Support</Link></h5>
 

 <div style={{width:80+"%",display:"flex",alignItems:"center",justifyContent:"left",marginLeft:10+"%"}}>
 <button className="btn btn-danger my-5" style={{width:60+"%"}} onClick={()=>{
        ref.current.click()
        navigate("/");
        localStorage.removeItem("token")
        props.showAlert("logged out successfully","danger")
       
        
      
    }}> Logout </button>
 </div>


    </>

      
    
  )
}

export default Sidebaruser1
