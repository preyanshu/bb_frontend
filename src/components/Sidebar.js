import React,{useEffect, useRef} from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Sidebar = (props) => {
    let location = useLocation();
    const navigate=useNavigate()
    const ref=useRef()
    const pathname = location.pathname;
const pattern = /^\/user1\/.*/;
const pattern2 = /^\/user2\/.*/;
const pattern3 = /^\/user3\/.*/;
useEffect(()=>{
  console.log(!(location.pathname==="/user1" || location.pathname==="/user2" || location.pathname==="/user3"||pattern3.test(pathname)||pattern2.test(pathname)||pattern.test(pathname)));
  console.log(pathname)
},[pathname])
  return (
    <div>
      {!(location.pathname==="/user1" || location.pathname==="/user2" || location.pathname==="/user3"||pattern3.test(pathname)||pattern2.test(pathname)||pattern.test(pathname))&&  <button class="btn btn-success" id='nav_button' style={{width:50+"px",height:50+"px",position:"absolute",top:20+"px",left:30+"px",backgroundColor:"black",borderRadius:100+"%",zIndex:+1001}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <div className="bar" style={{width:70+"%",backgroundColor:"white",height:2+"px"}}></div>
            <div className="bar" style={{width:70+"%",backgroundColor:"white",height:2+"px",marginTop:3+"px",marginBottom:3+"px"}}></div>
            <div className="bar" style={{width:70+"%",backgroundColor:"white",height:2+"px"}}></div>
            
      
</button>}
      


<div class="offcanvas offcanvas-start" style={{zIndex:+10000}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header"style={{backgroundColor:"black",color:"white"}}>
  <lottie-player src="https://lottie.host/e1099103-9082-458f-9820-90f8929e924c/Ujk9LgevjJ.json" background="" speed="1" style={{height:50+"px",width:50+"px"}} loop autoplay direction="1" mode="normal"></lottie-player>

    <h5 class="offcanvas-title" id="offcanvasExampleLabel" style={{marginLeft:-36+"px"}}>Side Navigation Bar</h5>
    <button type="button" ref={ref} class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:"white"}}></button>
  </div>
  <div class="offcanvas-body" id="sidebarbody" style={{backgroundColor:"black",color:"white"}}>
 
 
   
    {(pattern.test(pathname)||pathname==="/user1")&&  <>
    
    <h5 style={{marginTop:73+"vh"}}><i class="fa-solid fa-table-columns fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user1" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Dashboard</Link></h5>
   <h5><i class="fa-solid fa-envelope fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user1" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Notifications</Link></h5>
   <h5><i class="fa-solid fa-comment fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Chats</Link></h5>
   <h5><i class="fa-solid fa-map fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Campaigns</Link></h5>
   <h5><i class="fa-solid fa-calendar-days fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Calender</Link></h5>
   <h5><i class="fa-solid fa-network-wired fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Network</Link></h5>
   <h5><i class="fa-solid fa-chart-line fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Activites</Link></h5>
   <h5><i class="fa-solid fa-list-check fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Tasks</Link></h5>
   <h5><i class="fa-solid fa-square-poll-vertical fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Results</Link></h5>
   <h5><i class="fa-solid fa-file-lines fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Reports</Link></h5>
   <h5><i class="fa-solid fa-book-open fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Library</Link></h5>
   <h5><i class="fa-solid fa-file fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>AI resume</Link></h5>
   <h5><i class="fa-solid fa-code fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Codeian</Link></h5>
   <h5><i class="fa-solid fa-message fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Feedback</Link></h5>
   <h5><i class="fa-solid fa-circle-question fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user1"  className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
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


    </>}

    {/* User type 2 */}

    {(pattern2.test(pathname)||pathname==="/user2")&&  <>
    
    <h5 style={{marginTop:53+"vh"}}><i class="fa-solid fa-table-columns fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user2"className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Dashboard</Link></h5>
   <h5><i class="fa-solid fa-envelope fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Notifications</Link></h5>
   <h5><i class="fa-solid fa-comment fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Chats</Link></h5>
   <h5><i class="fa-solid fa-map fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Campaigns</Link></h5>
   <h5><i class="fa-solid fa-calendar-days fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Calender</Link></h5>
   <h5><i class="fa-solid fa-network-wired fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Network</Link></h5>
   <h5><i class="fa-solid fa-chart-line fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Activites</Link></h5>
   <h5><i class="fa-solid fa-list-check fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Tasks</Link></h5>
   <h5><i class="fa-solid fa-chart-pie fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Student Attendence</Link></h5>
   <h5><i class="fa-solid fa-bars-progress fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Student Academic Progress</Link></h5>
  
   <h5><i class="fa-solid fa-book-open fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Library</Link></h5>

  
   <h5><i class="fa-solid fa-circle-question fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Support</Link></h5>
     <h5><i class="fa-solid fa-message fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user2" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Feedback</Link></h5>
 

 <div style={{width:80+"%",display:"flex",alignItems:"center",justifyContent:"left",marginLeft:10+"%"}}>
 <button className="btn btn-danger my-5" style={{width:60+"%"}} onClick={()=>{
        ref.current.click()
        navigate("/");
        localStorage.removeItem("token")
        props.showAlert("logged out successfully","danger")
       
        
      
    }}> Logout </button>
 </div>


    </>}

    {/* user type 3 */}


    {(pattern3.test(pathname)||pathname==="/user3")&&  <>
    
    <h5 style={{marginTop:73+"vh"}}><i class="fa-solid fa-table-columns fa-lg \ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user37]" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Home</Link></h5>
   <h5><i class="fa-solid fa-envelope fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Notifications</Link></h5>
   <h5><i class="fa-solid fa-comment fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Chats</Link></h5>
   <h5><i class="fa-solid fa-map fa-lg ml-5 me-3 mt-5"style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none"}} onClick={()=>{
        ref.current.click()
    }}>Campaigns</Link></h5>
   <h5><i class="fa-solid fa-calendar-days fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Calender</Link></h5>
   <h5><i class="fa-solid fa-network-wired fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Network</Link></h5>
   <h5><i class="fa-solid fa-chart-line fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Activites</Link></h5>
   <h5><i class="fa-solid fa-list-check fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Tasks</Link></h5>
   <h5><i class="fa-solid fa-square-poll-vertical fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Results</Link></h5>
   <h5><i class="fa-solid fa-file-lines fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Reports</Link></h5>
   <h5><i class="fa-solid fa-book-open fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Library</Link></h5>
   <h5><i class="fa-solid fa-file fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>AI resume</Link></h5>
   <h5><i class="fa-solid fa-code fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Codeian</Link></h5>
   <h5><i class="fa-solid fa-message fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Feedback</Link></h5>
   <h5><i class="fa-solid fa-circle-question fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/user3" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
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


    </>}
    

    {!(location.pathname==="/user1" || location.pathname==="/user2" || location.pathname==="/user3"||pattern3.test(pathname)||pattern2.test(pathname)||pattern.test(pathname))&&  
    <div>
    <div style={{width:80+"%",display:"flex",alignItems:"center",justifyContent:"left",marginLeft:10+"%"}}>
    <lottie-player src="https://lottie.host/571d2a53-a3ca-4718-9b97-17cdd4c098ea/IOxNdknnBc.json" background="transparent" speed="1" style={{width:80+"%",height:"auto"}} loop autoplay></lottie-player> </div>
    <h5><i class="fa-solid fa-home fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Home</Link></h5> 
     
     <h5><i class="fa-solid fa-circle-question fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>About Us</Link></h5>
     <h5><i class="fa-solid fa-file fa-lg mr-5 me-3 mt-5" style={{marginLeft:10+"%"}}></i><Link to="/" className="my-3" style={{color:"white",textDecoration:"none",}} onClick={()=>{
        ref.current.click()
    }}>Terms and Conditions</Link></h5></div>
    
    
    
    
    
    }

   
    
    
   
  </div>
</div>
      
    </div>
  )
}

export default Sidebar
