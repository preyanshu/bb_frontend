import React from 'react'
import { useRef ,useState,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
// import {useNavigate} from 'react-router-dom';
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';

import "./notifications.css"

const Feedback= (props) => {
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
    const ref=useRef();
    const [credentials, setCredentials] = useState({name: "", email: "",message:""}) ;
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      // setLoading(true);
      // const { email, password } = credentials;
  
      try {
        const response = await fetch("http://localhost:5000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:credentials.email,
            password:credentials.password,
          }),
        });
        // setLoading(false);
        const json = await response.json();
  
        if (json.success) {
          // setLoading(false);
  
          localStorage.setItem("token", JSON.stringify(json));
          console.log("json",json);
          
          // navigate("/user1");
        }
        
        else {
          // setLoading(false);
          alert("Invalid Credentials");
        }
      } catch (error) {
          alert(error);
      }
  }
   



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
    <div className="notificationbg" style={{width:desiredWidth2,transition:"0.3s"}}>     
      

    

    <div className="notifications" style={{width:desiredWidth3,transition:"0.3s"}}>
   <div className="text-left pt-3 pl-5  pe-5" style={{paddingLeft:54+"px",paddingBottom:-10+"px",display:"flex",justifyContent:"space-between",border:"0px solid black",width:78+"vw",position:"absolute",top:10+"px",zIndex:1000000}}><div>{location.pathname}<br></br><h5>Dashboard</h5></div><div className='sidetextbar'><i style={{marginRight:20+"px"}} class="fa-solid fa-bell fa-sm "></i><i style={{marginRight:20+"px"}} class="fa-solid fa-bullhorn fa-sm "></i><i
style={{marginRight:8+"px"}} class="fa-solid fa-gear fa-sm "></i><i  style={{marginRight:11+"px",color:"red"}}class="fa-solid fa-user fa-sm "></i><span 
style={{cursor:"pointer",color:"red"}}
onClick={()=>{
  
  navigate("/");
  localStorage.removeItem("token")
  localStorage.removeItem("token2")
  props.showAlert("logged out successfully","danger")
 
  

}}
>Logout</span></div></div>

<div className="a shadow " style={{height:80+"vh",width:76+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",display:"flex",justifyContent:"space-evenly"}}>

        {/* <h2 style={{marginTop:15+"px",marginBottom:12+"px",fontFamily:"sans-serif"}}><b>Get in Touch</b></h2>
        <span className='subtxt mb-5' style={{marginLeft:"5px",color:"darkgray",fontSize:"20px",marginBottom:"20px"}}>WE are here for You! How can we Help?</span> */}
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
        <div  className="feedform"style={{backgroundColor:"",height:75+"vh",marginTop:0+"px"}}>
            <h2  className="mt-5 anotext" style={{marginTop:15+"px",marginBottom:12+"px",fontFamily:"sans-serif",marginLeft:"30px",fontWeight:"bold",color:""}}><b>Feedback Form</b></h2>
        {/* <span className='subtxt mb-5 my-3' style={{marginLeft:"35px",color:"darkgrey",fontSize:"20px",marginBottom:"40px",fontWeight:"bold"}}>WE are here for You! How can we Help?</span> */}

        <form style={{width:80+"%",minWidth:300+"px",marginTop:20+"px"}} onSubmit={handleSubmit}>
        




<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Password" style={{ height:60+"px",backgroundColor:""}} name='email' onChange={onChange} required/>
  <label for="floatingPassword" className='feedtext2'>Enter your email address</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" style={{height:60+"px",backgroundColor:""}} name='name' onChange={onChange} required/>
  <label for="floatingInput" className='feedtext2'> Give Us a Score (1-10)</label>
</div>
  <div class="mb-5">
  <div class="form-floating">
  <input class="form-control" placeholder="Go ahead, We are listening" id="floatingTextarea2" style={{height: "150px",backgroundColor:"",overflowX:"scroll"}} name='message' onChange={onChange} required min={5}></input>
  <label  for="floatingTextarea2"> <span  class='feedtext2' style={{backgroundColor:"",margin:"0px",padding:"0px"}}>Please tell us your reasons for giving this score ...</span></label>
</div>
  </div>

  <button type="submit"  style={{height:60+"px",width:"100%",fontWeight:"bolder",fontSize:25+"px"}} class="btn btn-success " id=''> Submit</button>
</form>
        
        
   
          </div>   
        <div  className="feedleft"style={{backgroundColor:"",height:75+"vh",marginTop:0+"px"}}>
          
          <div style={{border:"0px solid black",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"0px"}}>

            <div style={{marginLeft:-30+"px",marginTop:20+"px"}}>
                <h4 style={{marginTop:20+"px",marginBottom:12+"px",fontFamily:"sans-serif",marginLeft:"30px",fontWeight:"bold",color:""}} className='feedtext'>How Satisfied You are with us ?</h4>
            <div style={{color:"",marginLeft:30+"px"}}>
            <h5 className='mb-5 mt-5 feedtext'>0 - not at all satisfied</h5>
            <h5 className='mb-5 feedtext'>1 - not very satisfied</h5>
            <h5 className='mb-5 feedtext'>10 - very satisfied</h5>
            </div>
            </div>
           
            
          </div>
          <img src="../undraw_reviews_lp8w.png" style={{height:200+"px",width:"auto"}} alt="" />
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

export default Feedback
