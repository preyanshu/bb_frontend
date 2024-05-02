import React from 'react'
import { useState} from 'react';
import { useRef ,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
// import {useNavigate} from 'react-router-dom';

import "./notifications.css"
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import Notitoggle from '../Notitoggle';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';

const Support = (props) => {
  const {isDarkTheme}=useTheme();
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  const [loading, setLoading] = useState(false);
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
    const [credentials, setCredentials] = useState({name: "", email: "",message:""}) ;
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      // setLoading(true);
      // const { email, password } = credentials;
  
      try {
        const response = await fetch("https://classroombackend-0a5q.onrender.com/api/user/login", {
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
          
         toast.error("Invalid Credentials");

        }
      } catch (error) {
          // alert(error);
          toast.error("Invalid Credentials");
      }
  }
   
  const onSubmit = async event => {
    setLoading(true);
    event.preventDefault();
    console.log("credentials",credentials); 
  
    const { email, message } = credentials;
    setCredentials({name: "", email: "",message:""});
    
     
      // alert("Your message has been sent successfully")
      // console.log(form.current);
  
      // emailjs
      //   .sendForm('service_vlsqj1c', 'template_xd0uirn', form.current, {
      //     publicKey: 'v5jg44syuVOknYpby',
      //   })
      //   .then(
      //     () => {
      //       console.log('SUCCESS!');
      //       setComplete(true);
      //     },
      //     (error) => {
      //       setSending(false);
      //       setStatusError(error.text);
      //       setComplete(true);
      //       console.log('FAILED...', error.text);
      //     },
      //   );

      

        var data = {
          service_id: 'service_vlsqj1c',
          template_id: 'template_xd0uirn',
          user_id: 'v5jg44syuVOknYpby',
          template_params: {
              'user_email':email,
              'message':message
          }
      };

      console.log("data",data);
      
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(function(response) {
        setLoading(false);
          if (response.ok) {
            // alert("Your message has been sent successfully");
            toast.success("Your message has been sent successfully");
            console.log('SUCCESS!');
            
          } else {
          
  
            toast.error("failed"+ response.statusText);
          
          }
      })
      .catch(function(error) {
        setLoading(false);

        toast.error("failed"+ error.message);
        console.log('FAILED...', error.message);
      });
    

  
    
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
      
    
      <Sidebar_2 flag={flag2}></Sidebar_2>

   
   
    </div>}
    <div className="notificationbg" style={{width:desiredWidth2,transition:"0.3s",backgroundColor:isDarkTheme?"#181822":"#E6EDFA",color:isDarkTheme?"white":"black"}}>     
      

    

    <div className="notifications"style={{width:desiredWidth3,transition:"0.3s"}}>
  <Notitoggle
  >
    
  </Notitoggle>

<div className="a" style={{height:80+"vh",width:76+"vw",backgroundColor:isDarkTheme?"#181822":"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>

        {/* <h2 style={{marginTop:15+"px",marginBottom:12+"px",fontFamily:"sans-serif"}}><b>Get in Touch</b></h2>
        <span className='subtxt mb-5' style={{marginLeft:"5px",color:"darkgray",fontSize:"20px",marginBottom:"20px"}}>WE are here for You! How can we Help?</span> */}
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
        <div  className="feedform"style={{backgroundColor:"",marginTop:0+"px",zIndex:"+10"}}>
            <h2  className="mt-5" style={{marginTop:15+"px",marginBottom:12+"px",fontFamily:"sans-serif",marginLeft:"30px",fontWeight:"bold",color:""}}><b>Get in Touch</b></h2>
        <span className='subtxt mb-5 my-3' style={{marginLeft:"35px",color:"darkgrey",fontSize:"20px",marginBottom:"40px",fontWeight:"bold"}}>WE are here for You! How can we Help?</span>

        <form style={{width:80+"%",minWidth:300+"px",marginTop:20+"px"}} onSubmit={onSubmit}>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" style={{backgroundColor:""}} name='name' onChange={onChange}  value={credentials.name} required/>
  <label for="floatingInput feedtext">Enter your Name</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Password" style={{backgroundColor:""}} name='email' onChange={onChange} value={credentials.email} required/>
  <label for="floatingPassword feedtext">Enter your email address</label>
</div>
  <div class="mb-5">
  <div class="form-floating">
  <input class="form-control" placeholder="Go ahead, We are listening" id="floatingTextarea2" style={{height: "100px",backgroundColor:""}} name='message' onChange={onChange} required min={5} value={credentials.message}></input>
  <label  for="floatingTextarea2"> <span  className="feedtext" style={{backgroundColor:"",margin:"0px",padding:"0px"}}>Go ahead, We are listening</span></label>
</div>
  </div>
 {!loading&& <>
  <button type="submit"  style={{height:60+"px",width:"100%",fontWeight:"bolder",fontSize:25+"px"}} class="btn btn-success " id='btnform'> Submit</button>

 
 </>}
 {loading&& <>
  <button type="submit"  style={{height:60+"px",width:"100%",fontWeight:"bolder",fontSize:25+"px"}} class="btn btn-success " id='btnform' disabled> Sending ..</button>

 
 </>}
  
</form>
        
        
   
          </div>   
        <div  className="feedleft" style={{backgroundColor:"",marginTop:0+"px",width:50+"%"}}>
          {window.innerWidth<1100 && <img src="../BBCrm (7) (1).png" style={{width:"100%",height:"auto"}} alt="" />}
          {window.innerWidth>=1100 && <img src="../BBCrm (7) (1).png" style={{width:"160%",height:"auto",marginLeft:"-120px"}} alt="" />}
          {/* <img src="../BBCrm (7) (1).png" style={{width:"100%",height:"auto"}} alt="" /> */}
          
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

export default Support
