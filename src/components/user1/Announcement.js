import React from 'react'
import { useRef ,useEffect,useState} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';

const Announcement = (props) => {
  let teacher=false;
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  const [data,setData]=useState([]);
  const [modal,setModal]=useState({title:"",content:""});
  
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

 
 

  

  const ref=useRef();

  const location=useLocation();
  const navigate=useNavigate();

  if(location.pathname==="/user2/announcement"){
    teacher=true;
  }
  else if(location.pathname==="/user1/announcement"){
    teacher=false;
  }
useEffect(()=>{
  fetchannouncement({ _id: "65ad86007e68b80505716a7e" });
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

function getTimeDifference(messageTime) {
  const messageDate = new Date(messageTime);
  const currentDate = new Date();

  const timeDifference = currentDate - messageDate;
  const secondsDifference = Math.floor(timeDifference / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  let result;

  if (secondsDifference < 60) {
    result = 'just now';
  } else {
    for (const interval in intervals) {
      const value = Math.floor(secondsDifference / intervals[interval]);
      if (value >= 1) {
        result = `${value} ${interval}${value !== 1 ? 's' : ''} ago`;
        break;
      }
    }
  }

  return result;
}
const fetchannouncement = async (e) => {
  try {
    const token = (teacher) ? `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ` : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4N2Q3N2U2OGI4MDUwNTcxNmFlMCIsImlhdCI6MTcwNTg3MTMyMH0.Q-du9LIV4-URvFpj1OO6D8Lm4XWLOewiwpBonSFkB6g`;  
    

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Content_Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      
      }
      // You can include a 'body' field here for POST requests if sending data
    };
    const url = (teacher) ? `https://classroom-backend-uow6.onrender.com/teacher/viewAnnouncements/${e._id}` : `https://classroom-backend-uow6.onrender.com/student/viewAnnouncements/${e._id}`;  

    const response = await fetch(url, requestOptions);
    const announce = await response.json();

    if (announce.error) {
        alert("internal server error");
    }
    else{
      
  
    
    console.log("datannounce",);
    // Further logic with the data
    setData(announce);

    }

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Handle error as needed
  }
};

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
      
    
      <Sidebar_2 flag={flag2} ></Sidebar_2>

   
   
    </div>}
    <div className="notificationbg" style={{width:desiredWidth2,transition:"0.3s"}}>     
      

    

    <div className="notifications" style={{width:desiredWidth3,transition:"0.3s"}}>
    <div className="text-left pt-3 pl-5  pe-5" style={{paddingLeft:54+"px",paddingBottom:-10+"px",display:"flex",justifyContent:"space-between",border:"0px solid black",width:78+"vw",position:"absolute",top:10+"px",zIndex:1000000}}><div>{location.pathname}<br></br><h5>Dashboard</h5></div><div><i style={{marginRight:20+"px"}} class="fa-solid fa-bell fa-sm "></i><i style={{marginRight:20+"px"}} class="fa-solid fa-bullhorn fa-sm "></i><i
style={{marginRight:8+"px"}} class="fa-solid fa-gear fa-sm "></i><i  style={{marginRight:11+"px",color:"red"}}class="fa-solid fa-user fa-sm "></i><span 
style={{cursor:"pointer",color:"red"}}
onClick={()=>{
  
  navigate("/");
  localStorage.removeItem("token")
  localStorage.removeItem("token2")
  props.showAlert("logged out successfully","danger")
 
  

}}
>Logout</span></div></div>

<div className="a shadow " style={{height:76+"vh",width:77+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:45+"px",marginTop:30+"px"}}>

        <h4  className="anotitle" style={{marginTop:15+"px",marginBottom:27+"px"}}><b><i class="fa-solid fa-bullhorn fa-lg ml-5 me-3 "></i>Announcements</b></h4>
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
         
        <div  className="anobox" style={{height:56+"vh",width:100+"%",overflowY:"scroll",display:"flex",marginLeft:10+"px",marginLeft:"5px"}}>
            <hr />
            <div className="a anotitlesmall" style={{border:"0px solid black",height:100+"%",}}>
                <hr />
            <div className='my-3 p-1 textano' style={{}}><b>Title</b></div><hr />
            {data.map((i)=>{
                    return(<>
                        <div className='my-3 p-1 textano'style={{height:41+"px"}} onClick={()=>{
                            ref.current.click();
                            setModal({title:i.title,content:i.content})
                        }} >{i.title}</div><hr />
                        </>)

                })}
            </div>
            <div className="a classsec" style={{border:"0px solid black",height:100+"%",width:27+"%"}}>
                <hr />
            <div className='my-3 p-1 textano' style={{}}><b>Class Section</b></div><hr />
            {data.map((i)=>{
                    return(<>
                        <div className='my-3 p-1 textano' style={{height:41+"px"}}>D</div><hr />
                        </> )

                })}
            </div>
            <div className="a createdsec " style={{border:"0px solid black",height:100+"%",width:27+"%"}}>
                <hr />
            <div className='my-3 p-1 textano' style={{}}>{teacher && <b>Created</b>}{!teacher && <b>Recieved</b>}</div><hr />
            {data.map((i)=>{
              // console.log("i",i);
              const date = new Date(i.createdAt);

              const timeAgo = getTimeDifference(date);
                    return(<>
                        <div className='my-3 p-1 textano' style={{height:"41px"}} >{timeAgo}</div><hr />
                        </>)

                })}
            </div>
            <div className="a anobtn" style={{border:"0px solid black",height:100+"%",width:19+"%"}}>
                <hr />
            <>
            <div className='my-3 p-1 textano' style={{}}><b>...</b></div><hr />
                        </>
                {data.map((i)=>{
                    return(<>
                        <div className='my-3'><div style={{height:41+"px"}} onClick={()=>{
                            ref.current.click();
                            setModal({title:i.title,content:i.content})
                        }} className="btn btn-primary">Open</div> </div><hr />
                        </>)

                })}


            </div>

            

        </div>
    </div>


</div>

    </div>
 



      
    </div>
 
<button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{position:"",zIndex:"+100000"}} >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:50+"vh"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-scroll fa-lg me-3"></i><b>Announcement</b></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{overflowY:"auto"}}>
        
        <h4>Title : {modal.title}</h4>
        <p style={{fontSize:"1.2rem",color:"#6e6b6b",fontFamily:"sans-serif"}}>{modal.content}<br></br></p>
        
        {/* <i class="fa-solid fa-clock fa-lg  me-3 "></i><b>DueDate : </b>{modal.dueDate} */}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" style={{width:"100%"}} data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  </>)
}

export default Announcement
