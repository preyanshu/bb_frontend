import React from 'react'
import { useRef ,useEffect,useState} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
// import {useNavigate} from 'react-router-dom';

import "./notifications.css"
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';

import Tabs from './Tabs';
import { useTheme } from '../context/ThemeContext';
import Notitoggle from '../Notitoggle';

const Notifications = (props) => {
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  const[assignments,setAssignments]=useState([]);
  const[modal,setModal]=useState({title:"",content:"",dueDate:""});
  const[togglenoti,setTogglenoti]=useState(false);
  const { isDarkTheme ,SetGNotifications,update,setUpdate,gNotifications} = useTheme();
  
  let teacher=false;
  useEffect(()=>{
    setUpdate(false);
    if(window.innerWidth<1200){
      console.log("innerwidth",window.innerWidth);
      setflag2(false);
      
      
  
    }

  },[])

  // useEffect(()=>{

  //   SetGNotifications(assignments);
    
  // },[assignments])
 

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

  if(location.pathname==="/user2/announcement"){
    teacher=true;
  }
  else if(location.pathname==="/user1/announcement"){
    teacher=false;
  }
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

    const ref=useRef();
  
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
    const fetchassignment = async (e) => {
      console.log("e",e);
      console.log("fetchingassignment")
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ';
    
        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Content_Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          
          }
          // You can include a 'body' field here for POST requests if sending data
        };
    
        const response = await fetch(`https://classroom-backend-uow6.onrender.com/teacher/viewAssignments/${e._id}`, requestOptions);
        const data = await response.json();
    
        if (data.error) {
            alert("internal server error");
        }
        else{
          
      
        
       
        
        // const filteredArray = data.filter(obj => (e.assignments).includes(obj._id));
       
        setAssignments(data);

        }
    
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error as needed
      }
    };

    // useEffect(()=>{
    //   fetchassignment({_id:"65ad86007e68b80505716a7e"});
    // },[])
  
    
    // alert(dark);

  
  return (<>
    <div className='mainbg' style={{backgroundColor: isDarkTheme ? "#181822" : "#E6EDFA"}}>
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
   


    
    <div className="notificationbg bg" style={{width:desiredWidth2,transition:"0.3s",color:"white",backgroundColor: isDarkTheme ? "#181822" : "#E6EDFA",color:isDarkTheme?"white":"black"}}>     
      

    

    <div className="notifications" style={{width:desiredWidth3}}>
   <Notitoggle></Notitoggle>

<div className="a shadow notibigbox " style={{height:75+"vh",width:77+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",backgroundColor: isDarkTheme ? "#302341" : "white"

}}>
 


 
<h4 style={{marginTop:15+"px",marginBottom:27+"px"}}><b><i class="fa-solid fa-envelope fa-lg ml-5 me-3 "></i>Notifications</b></h4>
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
         
        {
          gNotifications.length===0 && <h5 style={{marginLeft:"45%",marginTop:"10%"}}><b>No Notifications</b></h5>  
        }
        {
          gNotifications.length!==0 && <>

<div style={{height:56+"vh",width:100+"%",overflowY:"scroll",display:"flex",marginLeft:10+"px",marginLeft:"5px"}} className='anobox'>
            <hr />
            <div className="a anotitlesmall" style={{border:"0px solid black",height:100+"%"}} >
                <hr />
            <div className='my-3 p-1 anotext ' style={{}}><b>Title</b></div><hr />
            {gNotifications.map((i)=>{
                    return(<>
                        <div className='my-3 p-1 anotext'style={{height:41+"px"}}onClick={()=>{
                            ref.current.click();
                            setModal({title:i.title,content:i.description,dueDate:i.dueDate})
                        }} >{i.title}</div><hr />
                        </>)

                })}
            </div>
            <div className="a classsec" style={{border:"0px solid black",height:100+"%",width:27+"%"}}>
                <hr />
            <div className='my-3 p-1 anotext ' style={{}}><b>Class</b></div><hr />
            
            {gNotifications.map((i)=>{
                    return(<>
                        <div className='my-3 p-1' style={{fontSize:18+"px",height:41+"px"}}>{i.class.subjectCode}</div><hr />
                        </> )

                })}
            </div>
            <div className="a createdsec" style={{border:"0px solid black",height:100+"%",width:27+"%"}}>
                <hr />
            <div className='my-3 p-1 anotext ' style={{}}>{teacher && <b>Created</b>}{!teacher && <b>Recieved</b>}</div><hr />
            {gNotifications.map((i)=>{
              // console.log("i",i);
              const date = new Date(i.createdAt);

              const timeAgo = getTimeDifference(date);
                    return(<>
                        <div className='my-3 p-1 anotext' style={{height:41+"px"}}>{timeAgo}</div><hr />
                        </>)

                })}
            </div>
            <div className="a anobtn " style={{border:"0px solid black",height:100+"%",width:19+"%"}}>
                <hr />
            <>
            <div className='my-3 p-1 anotext' style={{}}><b>...</b></div><hr />
                        </>
                {gNotifications.map((i)=>{
                    return(<>
                        <div className='my-3'><div style={{height:41+"px"}} onClick={()=>{
                            ref.current.click();
                            setModal({title:i.title,content:i.description,dueDate:i.dueDate})
                        }} className="btn btn-success">Open</div> </div><hr />
                        </>)

                })}


            </div>

            

        </div> </>
          
          
          
          
          
          
           
        }

    </div>


</div>

    </div>
 



      
    </div>
 
<button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  style={{position:"",zIndex:"+10000"}}>
  <div class="modal-dialog modal-dialog-centered" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Assignment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{overflowY:"auto"}}>
        
        <h3>Title : {modal.title}</h3>
        <p style={{fontSize:"1.3rem",color:"#6e6b6b",fontFamily:"sans-serif"}}>{modal.content}<br></br></p>
        
        <i class="fa-solid fa-clock fa-lg  me-3 "></i><b>DueDate : </b>{modal.dueDate}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Okay</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  </>)
}

export default Notifications
