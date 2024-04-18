import React from 'react'
import { useRef ,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
import { useState } from 'react';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Calender} from "../Calender";
import Sidebar_2 from './Sidebar_2';
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import { MOCKAPPS } from '../conts';
import { useTheme } from '../context/ThemeContext';
import { getDarkColor } from '../utils';
import Notitoggle from '../Notitoggle';



const Calenderpg = (props) => {


  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  const {Event,date,setevents,current}=useTheme();
  const [formvalue,setformvalue]=useState("");
  const [result,setresult]=useState(false);
  useEffect(()=>{
    if(window.innerWidth<1200){
      console.log("innerwidth",window.innerWidth);
      setflag2(false);
      
  
    }
    console.log("mockapps",MOCKAPPS);

  },[])
  function isValidDateFormat(dateStr) {
   
    var regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;

   
    setresult(regex.test(dateStr.trim()));
    
    

   
}

useEffect(()=>{
  console.log("working");
  isValidDateFormat(date.toString());
},[date])

    var desiredWidth = !flag2 ? 80+"px" : '260px';
    // const desiredWidth2 = !flag2 ? '87vw' : '80vw';
    var desiredWidth2 = !flag2 ? "calc(100vw - 75px)" : 'calc(100vw - 250px)';
    // if(window.innerWidth<600){
    //   desiredWidth2="100vw";
    //   desiredWidth="5vw";
    // }
    var desiredWidth3 = !flag2 ? "calc(100vw - 75px)" : "calc(100vw - 250px)";

    
    const ref=useRef();
    const [value, onChange] = useState(new Date());
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
    <div className='mainbg' style={window.innerWidth<1200?{backgroundColor:isDarkTheme?"#181822":"#E6EDFA"}:{height:"100vh"}}>
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
      

    

    <div className="notifications" style={window.innerWidth>1200?{width:desiredWidth3,transition:"0.3s"}:{
      width:desiredWidth3,transition:"0.3s",overflowY:"scroll",height:"100vh"

    }}>
   <Notitoggle></Notitoggle>

<div className="a " style={{height:"fit-content",width:73+"vw",backgroundColor:"",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:+"px",minHeight:85+"vh",padding:15+"px"}}>

        {/* <h4 style={{marginTop:15+"px",marginBottom:27+"px"}}><b><i class="fa-solid fa-calendar-days fa-lg ml-5 me-3 "></i>Calender</b></h4> */}
        <div style={window.innerWidth>1200?{width:"73vw",marginTop:"0px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}:{
          flexDirection:"column",height:"100vh",marginTop:"100px",width:"100%"
        }}>

          <div style={window.innerWidth>1200?{width:"55%"}:{
            width:"100%"
          }}><Calender></Calender></div>
        
     
        <div style={window.innerWidth>1200?{width:"30%",height:"58vh",backgroundColor:isDarkTheme?"#22222E":"white",marginTop:"105px",borderRadius:"30px",position:"relative"}:{
          width:"100%",height:"58vh",backgroundColor:isDarkTheme?"#22222E":"white",marginTop:"105px",borderRadius:"30px",
          paddingTop:"30px",position:"relative"


        }}>
          <h6 className='mx-5 mt-5 mb-2'>
            {console.log("events: ", date , result)}
          <span  className="me-3" style={{color:"#8F4FBE",fontWeight:"700",fontSize:"25px"}}>Events </span>{result && <>
             {date}
          
          </>}
          {
            !result && <>
            
            No Date Selected
            
            </>
          }



          </h6>
          <div className='py-3' style={{display: "flex", flexDirection: "column", justifyContent: "", alignItems: "center", overflowY: "scroll", border: "0px solid black", height: "230px", backgroundColor: ""}}>
    {Event.filter(item => (`${new Date(item.date).getFullYear()}/${new Date(item.date).getMonth()}/${new Date(item.date).getDate()} ` === date)).length === 0 ?
        <div style={{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}}>No event scheduled</div> :
        Event.filter(item => (`${new Date(item.date).getFullYear()}/${new Date(item.date).getMonth()}/${new Date(item.date).getDate()} ` === date)).map((item, index) => (
            <div key={index} className='mb-3 p-3' style={{border: "0px solid black", width: "80%", minHeight: "50px", backgroundColor: item.color, borderRadius: "8px"}}>
                {item.title}
            </div>
        ))
    }
</div>


          <form className="mt-3" style={{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",bottom:"24px",left:"30px"}} onSubmit={(e)=>{
            e.preventDefault();

            const newDateStr = date.replace(/\//g, '-'); // Replace slashes with dashes
            const date2 = new Date(newDateStr); // Create a Date object
            
            // Increase the month value by 1
            date2.setMonth(date2.getMonth() + 1);
            
            // Check if the month became January (index 0)
            if (date2.getMonth() === 0) {
                // If so, increment the year by 1 and set the month to January
                date2.setFullYear(date2.getFullYear() + 1);
            }
           


            if (formvalue && date2 && current.getDate) {
              date2.setHours(0);
              date2.setSeconds(0);
              date2.setMilliseconds(0);
              
              // Create the event object
              const newEvent = { date: date2, title: formvalue, color: getDarkColor() };
              
              // Save the event object to local storage
              const eventsFromLocalStorage = JSON.parse(localStorage.getItem('events')) || [];
              const updatedEvents = [...eventsFromLocalStorage, newEvent];
              localStorage.setItem('events', JSON.stringify(updatedEvents));
              
              // Update state and clear form value
              setevents(prev => [...prev, newEvent]);
              setformvalue("");
          }
          }}>
  <div class=" me-3" style={{height:"fit-content"}}>
    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"style={{height:"40px"}} value={formvalue} onChange={(event)=>{
      setformvalue(event.target.value);
    }}/>
    
  </div>
  
  <button type="submit" class="btn btn-primary" style={{backgroundColor:"#8F4FBE",border:"0px"}}>Submit</button>
</form>
         
        



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

export default Calenderpg
