// import React from 'react'
import "../user1/dashboard.css"
import "./dashboard2.css"
import Graph from '../user1/Graph.js'
import React,{useEffect, useRef,useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Sidebar_2 from "../user1/Sidebar_2";
import styles from "./dashb.module.css"

const Dashboard = (props) => {
    const data=[
        { name:"preyanshu",
         semester:"4",
         section :"c",
         type:"teacher"
    
        },
        { name:"rohan",
         semester:"8",
         section :"c",
         type:"teacher"
    
        },
        { name:"xyz",
         semester:"2",
         section :"a",
         type:"teacher"
    
        }
    ]
        const[details,setdetails]=useState(data);
        const[flag,setflag]=useState(false);
        const[flag2,setflag2]=useState(true);
    
  useEffect(()=>{
    if(window.innerWidth<1200){
      console.log("innerwidth",window.innerWidth);
      setflag2(false);
      
  
    }

  },[])

  var desiredWidth = !flag2 ? 80+"px" : '260px';
  // const desiredWidth2 = !flag2 ? '87vw' : '80vw';
  var desiredWidth2 = !flag2 ? "87vw" : '80vw';
  var desiredml = !flag2 ? "160px" : '60px';
    // if(window.innerWidth<600){
    //   desiredWidth2="100vw";
    //   desiredWidth="5vw";
    // }
    var desiredWidth3 = !flag2 ? "calc(100vw - 75px)" : "calc(100vw - 250px)";
  const location=useLocation();
  const navigate=useNavigate();
  const ref=useRef();
  const ref2=useRef();
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
return(<>
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
   
   
   {
    window.innerWidth>1200 && <div className="bg bg2" style={{width:desiredWidth2,transition:"0.3s",position:"relative",marginLeft:desiredml}}>

    
    <div className="text-left pt-3 pl-5  pe-5" style={{paddingLeft:54+"px",paddingBottom:-10+"px",display:"flex",justifyContent:"space-between"}}><div>{location.pathname}<br></br><h5>Dashboard</h5></div><div><span className="mx-3"></span><span className="mx-3"></span><span className="mx-3 me-5"></span><i style={{marginRight:20+"px"}} class="fa-solid fa-bell fa-sm "></i><i style={{marginRight:20+"px"}} class="fa-solid fa-bullhorn fa-sm "></i><i
    style={{marginRight:8+"px"}} class="fa-solid fa-gear fa-sm "></i><i  style={{marginRight:11+"px",color:"red"}}class="fa-solid fa-user fa-sm "></i><span 
    style={{cursor:"pointer",color:"red"}}
    onClick={()=>{
      
      navigate("/");
      localStorage.removeItem("token")
      localStorage.removeItem("token2")
      props.showAlert("logged out successfully","danger")
     
      
    
    }}
    >Logout</span></div>
   </div>
     
        <div className="top" style={{backgroundColor:"#F0F2F5",height:250+"px",marginTop:-10+"px",position:"relative"}} >
       
        
        <div className="a shadow" style={{height:90+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>
            <div className="top_icon" style={{height:64+"px",width:64+"px",backgroundColor:"#3B3B42",marginTop:-20+"px",borderRadius:8+"%",marginLeft:30+"px",boxShadow:"2px 2px 3px #3B3B42"}}><i class="fa-solid fa-money-bill fa-xl"></i></div>
           <div style={{marginLeft:65+"%",marginTop:-8+"%"}}><h6>No. of Students</h6>
            <h4 style={{marginLeft:33.8+"%"}}><b>5300</b></h4></div> 
        </div>
        <div className="b shadow" style={{height:90+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>   <div className="top_icon"style={{height:64+"px",width:64+"px",backgroundColor:"#E73774",marginTop:-20+"px",borderRadius:8+"%",marginLeft:30+"px",boxShadow:"2px 2px 3px #E73774"}}><i class="fa-solid fa-user fa-xl"></i></div>
        <div style={{marginLeft:70+"%",marginTop:-8+"%",border:"0px solid black"}}><h6>No of Lectures</h6>
        <div style={{display:"flex",justifyContent:"end",alignItems:"center",width:75+"%"}}>
            <h4  className="text-left" style={{marginRight:13+"%",width:"fit-content"}}><b>270</b></h4></div></div>
        </div>
        <div className="c shadow" style={{height:90+"px",width:24+"vw",backgroundColor:"white",borderRadius:13+"px"}}>   <div class="top_icon"style={{height:64+"px",width:64+"px",backgroundColor:"#2982EB",marginTop:-20+"px",borderRadius:8+"%",marginLeft:30+"px",boxShadow:"2px 2px 3px #2982EB"}}><i class="fa-solid fa-money-bill fa-xl"></i></div>
        <div style={{marginLeft:65+"%",marginTop:-8+"%"}}><h6>No of active Users</h6>
            <h4 style={{marginLeft:39.8+"%"}}><b>3000</b></h4></div> 
        </div>

        </div>
        <div className="mid" style={{backgroundColor:"#F0F2F5",height:400+"px",marginTop:-15+"px",justifyContent:"space-between",marginBottom:"25px"}} >
        <div className="a shadow" style={{height:400+"px",width:37.25+"vw",backgroundColor:"white",borderRadius:13+"px",marginLeft:"1.5%"}}> 
   <Graph backgroundColor="#59B15D" type="bar"></Graph>

   <div style={{marginLeft:2+"vw",marginTop:1+"vw"}}><h6><b>No. of Students</b></h6>
   <b>(+15%)</b> increase from last Year</div>
   <hr />
   <div style={{marginLeft:2+"vw"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
    updated 4 min ago


   </div>


        </div>
        <div className="b shadow" style={{height:400+"px",width:37.25+"vw",backgroundColor:"white",borderRadius:13+"px",marginRight:"1.5%"}}>
        <Graph backgroundColor="#E73673" type="line"></Graph>
        <div style={{marginLeft:2+"vw",marginTop:1+"vw"}}><h6><b>Subject wise attendence</b></h6>
   <b>lowest </b>attendence in X subject</div>
   <hr />
   <div style={{marginLeft:2+"vw"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
    updated 4 min ago


   </div>
        </div>
  

        </div>
      
        <div className="end" style={{backgroundColor:"#F0F2F5",height:500+"px",marginTop:-10+"px"}} >
        <div className="a shadow " style={{height:450+"px",width:47+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px"}}>
            <div style={{border:"0px solid black",display:"flex",justifyContent:"space-between"}}>
                <div><h4>Campaigns</h4></div>
                <div className="btn btn-success" onClick={()=>{
                    ref.current.click();
                }}><i class="fa-solid fa-plus fa-xl me-2"></i><b>Create </b> </div>
            

            </div>
            
        
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
        <div style={{border:"0px solid black",display:"flex",justifyContent:"space-between"}}>
                <div><h4>Tasks</h4></div>
                <div className="btn btn-success" onClick={()=>{
                    setflag(false);
                    ref2.current.click();
                }}><i class="fa-solid fa-plus fa-xl me-2"></i><b>Create </b> </div>
            

            </div>
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
      
        


      
    </div>
   }
    {
      window.innerWidth<1200 &&<div className="d-flex" style={{position:"absolute",right:"0px",width:{desiredWidth2},justifyContent:"center",alignItems:"center",marginLeft:"100px",height:"100vh"}}>
      <h1>THIS PAGE IS RESPONSIVE YET FOR SMALLER DEVICES TRY OTHER PAGES OR USE A DEVICE WITH BIGGER SCREEN</h1>
    </div>
    }
    </div>
    <button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:+1000000}} >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:80+"vh",overflowY:"auto"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Campaign</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form>
      <div class="modal-body">
      
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Budget</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <textarea type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
 

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
        <button type="submit" class="btn btn-success">Add Campaign</button>
      </div>
      </form>

    </div>
  </div>
</div>
    <button type="button" ref={ref2} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{display:"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:+1000000}} >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:"fit-content"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Assign Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      { flag &&       <form>
      <div class="modal-body">
      
  <div class="mb-3">
   
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <textarea type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
 

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
        <button type="submit" class="btn btn-success">Assign Task</button>
      </div>
      </form> }
      {
        !flag && <div>
        <div class="modal-body" style={{height:40+"vh",overflowY:"auto"}}>

        {
  details
    .filter((e) => e.type === "teacher" )
    .map((e, index) => (
      <div className="teachercard"
        key={index}
        style={{
          width: "96%",
          height: "50px",
          border: "0px solid black",
          margin: "2%",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          borderRadius:"10px",
        
          padding:"10px"
          
         


        }} onClick={()=>{
            setflag(true);
        }}
      >
        <h6 style={{marginBottom:"0px"}}><i class="fa-solid fa-user fa-lg me-3"></i><b>{e.name}</b></h6>
        
      </div>
    ))
}
        
  
   
   
  
        </div>
      
        </div>
  
      }
      
    </div>
  </div>
</div>
    </>)
}

export default Dashboard
