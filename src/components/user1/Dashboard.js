// import React from 'react'
import "./dashboard.css"
import Graph from './Graph'
import React,{useEffect, useRef,useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';

const Dashboard = (props) => {
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
    var desiredWidth2 = !flag2 ? "87vw" : '80vw';
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
return(
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

    {window.innerWidth>1200 && <div className="bg" style={{width:desiredWidth2,transition:"0.3s"}}>
    <div className="text-left pt-3 pl-5  pe-5" style={{paddingLeft:54+"px",paddingBottom:-10+"px",display:"flex",justifyContent:"space-between"}}><div>{location.pathname}<br></br><h5>Dashboard</h5></div><div><i style={{marginRight:20+"px"}} class="fa-solid fa-bell fa-sm "></i><i style={{marginRight:20+"px"}} class="fa-solid fa-bullhorn fa-sm "></i><i
    style={{marginRight:8+"px"}} class="fa-solid fa-gear fa-sm "></i><i  style={{marginRight:11+"px",color:"red"}}class="fa-solid fa-user fa-sm "></i><span 
    style={{cursor:"pointer",color:"red"}}
    onClick={()=>{
      
      navigate("/");
      localStorage.removeItem("token")
      localStorage.removeItem("token2")
      props.showAlert("logged out successfully","danger")
     
      
    
    }}
    >Logout</span></div></div>
     
        <div className="top" style={{backgroundColor:"#F0F2F5",height:250+"px",marginTop:-10+"px"}} >
        
        <div className="a shadow" style={{height:90+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>
            <div className="top_icon" style={{height:64+"px",width:64+"px",backgroundColor:"#3B3B42",marginTop:-20+"px",borderRadius:8+"%",marginLeft:30+"px",boxShadow:"2px 2px 3px #3B3B42"}}><i class="fa-solid fa-money-bill fa-xl"></i></div>
           <div style={{marginLeft:65+"%",marginTop:-8+"%"}}><h6>No of Students</h6>
            <h4 style={{marginLeft:39.8+"%"}}><b>605</b></h4></div> 
        </div>
        <div className="b shadow" style={{height:90+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>   <div className="top_icon"style={{height:64+"px",width:64+"px",backgroundColor:"#E73774",marginTop:-20+"px",borderRadius:8+"%",marginLeft:30+"px",boxShadow:"2px 2px 3px #E73774"}}><i class="fa-solid fa-user fa-xl"></i></div>
        <div style={{marginLeft:65+"%",marginTop:-8+"%",border:"0px solid black"}}><h6>No of Lectures</h6>
        <div style={{display:"flex",justifyContent:"end",alignItems:"center",width:75+"%"}}>
            <h4  className="text-left" style={{marginRight:0+"%",width:"fit-content"}}><b>2700</b></h4></div></div>
        </div>
        <div className="c shadow" style={{height:90+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>   <div class="top_icon"style={{height:64+"px",width:64+"px",backgroundColor:"#2982EB",marginTop:-20+"px",borderRadius:8+"%",marginLeft:30+"px",boxShadow:"2px 2px 3px #2982EB"}}><i class="fa-solid fa-money-bill fa-xl"></i></div>
        <div style={{marginLeft:65+"%",marginTop:-8+"%"}}><h6>Active users</h6>
            <h4 style={{marginLeft:39.8+"%"}}><b>113</b></h4></div> 
        </div>

        </div>
        <div className="mid" style={{backgroundColor:"#F0F2F5",height:400+"px",marginTop:-40+"px"}} >
        <div className="a shadow" style={{height:345+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}> 
   <Graph backgroundColor="#59B15D" type="line"></Graph>

   <div style={{marginLeft:2+"vw",marginTop:1+"vw"}}><h6><b>Semester wise CGPA</b></h6>
   <b>(+15%)</b> increase from last semester</div>
   <hr />
   <div style={{marginLeft:2+"vw"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
    updated 4 min ago


   </div>


        </div>
        <div className="b shadow" style={{height:345+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>
        <Graph backgroundColor="#E73673" type="bar"></Graph>
        <div style={{marginLeft:2+"vw",marginTop:1+"vw"}}><h6><b>Subject wise attendence</b></h6>
   <b>lowest </b>attendence in X subject</div>
   <hr />
   <div style={{marginLeft:2+"vw"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
    updated 4 min ago


   </div>
        </div>
        <div className="a shadow" style={{height:345+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}> 
   <Graph backgroundColor="#59B15D" type="line"></Graph>

   <div style={{marginLeft:2+"vw",marginTop:1+"vw"}}><h6><b>Avg. Task Completion </b></h6>
   <b>(+15%)</b> increase</div>
   <hr />
   <div style={{marginLeft:2+"vw"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
    updated 4 min ago


   </div>


        </div>

        </div>
      
        <div className="end" style={{backgroundColor:"#F0F2F5",height:500+"px",marginTop:-10+"px"}} >
        <div className="a shadow " style={{height:450+"px",width:47+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px"}}>
            <h4>Campaigns</h4>
        
            <div>
            <hr />
            <div style={{display:"flex",width:100+"%",justifyContent:"space-between"}}>
            <span ><i class="fa-brands fa-microsoft fa-lg me-3"></i>Project name</span>  <span >  <i class="fa-solid fa-user fa-lg"></i>
            <i class="fa-solid fa-user fa-lg" style={{marginLeft:-5+"px"}}></i>  <i class="fa-solid fa-user fa-lg" style={{marginLeft:-10+"px"}}></i></span>  <span > <b>$4500</b></span>  <div style={{width:15+"%",height:10+"px",marginTop:5+"px"}} class="progress">
  <div class="progress-bar" role="progressbar" style={{width: 25+"%"}}aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <hr />
            <div style={{display:"flex",width:100+"%",justifyContent:"space-between"}}>
            <span ><i class="fa-brands fa-microsoft fa-lg me-3"></i>Project name</span>  <span >  <i class="fa-solid fa-user fa-lg"></i>
            <i class="fa-solid fa-user fa-lg" style={{marginLeft:-5+"px"}}></i>  <i class="fa-solid fa-user fa-lg" style={{marginLeft:-10+"px"}}></i></span>  <span > <b>$4500</b></span>  <div style={{width:15+"%",height:10+"px",marginTop:5+"px"}} class="progress">
  <div class="progress-bar" role="progressbar" style={{width: 65+"%",backgroundColor:"green"}}aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <hr />
            <div style={{display:"flex",width:100+"%",justifyContent:"space-between"}}>
            <span ><i class="fa-brands fa-microsoft fa-lg me-3"></i>Project name</span>  <span >  <i class="fa-solid fa-user fa-lg"></i>
            <i class="fa-solid fa-user fa-lg" style={{marginLeft:-5+"px"}}></i>  <i class="fa-solid fa-user fa-lg" style={{marginLeft:-10+"px"}}></i></span>  <span > <b>$4500</b></span>  <div style={{width:15+"%",height:10+"px",marginTop:5+"px"}} class="progress">
  <div class="progress-bar" role="progressbar" style={{width: 25+"%"}}aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
           
        </div>    
        </div>
        <div className="b shadow" style={{height:450+"px",width:27+"vw",backgroundColor:"white",borderRadius:13+"px",padding:25+"px"}}>
            <h4> Tasks</h4>
            {/* <i class="fa-solid fa-arrow-up me-3 fa-lg" style={{color: "#39aa31"}}></i><b>24%</b> this month */}
            <hr />
            <div>
               <div className="1" style={{height:80+"px",width:80+"%",borderLeft:"2px solid black",marginLeft:10+"Px"}}>
               <div style={{backgroundColor:"white",height:30+"px",width:20+"px",marginLeft:-2.9+"%",marginRight:10+"px",display:"inline-block"}}><i class="fa-solid fa-list-check me-3 fa-lg" ></i>
             
               


               </div>
               <b>Task 1</b> <br />
               <span style={{marginLeft:10+"px",fontSize:"small"}}>22 DEC 7:20 PM</span>
               </div>



            </div>
            <hr />
            <div>
            <div className="1" style={{height:80+"px",width:80+"%",borderLeft:"2px solid black",marginLeft:10+"Px"}}>
               <div style={{backgroundColor:"white",height:30+"px",width:20+"px",marginLeft:-2.9+"%",marginRight:10+"px",display:"inline-block"}}><i class="fa-solid fa-list-check me-3 fa-lg" ></i>
             
               


               </div>
               <b>Task 2</b> <br />
               <span style={{marginLeft:10+"px",fontSize:"small"}}>22 DEC 7:20 PM</span>
               </div>



            </div>
            <hr />
            <div>
            <div className="1" style={{height:80+"px",width:80+"%",borderLeft:"2px solid none",marginLeft:10+"Px"}}>
               <div style={{backgroundColor:"white",height:30+"px",width:20+"px",marginLeft:-2.9+"%",marginRight:10+"px",display:"inline-block"}}><i class="fa-solid fa-list-check me-3 fa-lg" ></i>
             
               


               </div>
               <b>Task 3</b> <br />
               <span style={{marginLeft:10+"px",fontSize:"small"}}>22 DEC 7:20 PM</span>
               </div>
               <div style={{marginLeft:12+"px",marginTop:12+"px"}}> <Link style={{color:"black",textDecoration:"none"}}to="/user1/tasks"><h6><b>Show more..</b></h6></Link></div>

              



            </div>
          
        </div>
      

        </div>
      
        


      
    </div>}
    { window.innerWidth<1200 && <>
    <div style={{zIndex:"+5",height:"100vh",backgroundColor:"white",width:"calc(100vw - 80px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <h1 className="mx-3 ml-5" style={{marginLeft:"30px"}}>
        THIS PAGE IS NOT MADE REPONSIVE YET FOR SMALLER DEVICE USE IN DESKTOP MODE
      </h1>

    </div>
    
    </>}
    </div>
  )
}

export default Dashboard
