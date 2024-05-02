import React from 'react'
import { useRef ,useState,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
// import {useNavigate} from 'react-router-dom';
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';

import "./notifications.css"
import Notitoggle from '../Notitoggle';
// import { useTheme } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';

const Feedback= (props) => {
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  const {isDarkTheme}=useTheme();
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
    const [loading, setLoading] = useState(false);
    
  const onSubmit = async event => {
    setLoading(true);
    event.preventDefault();
  
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
           
            toast.success("Your message has been sent successfully");
            console.log('SUCCESS!');
            
          } else {
          
         
            toast.error("failed"+ response.statusText);
            console.log('FAILED...', response.statusText)
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
      

    

    <div className="notifications" style={{width:desiredWidth3,transition:"0.3s"}}>
   <Notitoggle></Notitoggle>

<div className="a" style={{height:80+"vh",width:76+"vw",backgroundColor:isDarkTheme?"#181822":"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",display:"flex",justifyContent:"space-evenly",position:"relative",alignItems:"center"}}>

        {/* <h2 style={{marginTop:15+"px",marginBottom:12+"px",fontFamily:"sans-serif"}}><b>Get in Touch</b></h2>
        <span className='subtxt mb-5' style={{marginLeft:"5px",color:"darkgray",fontSize:"20px",marginBottom:"20px"}}>WE are here for You! How can we Help?</span> */}
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
        <div  className="feedform"style={{backgroundColor:"",marginTop:0+"px"}}>
            <h2  className="mt-5 anotext" style={{marginTop:15+"px",marginBottom:12+"px",fontFamily:"sans-serif",marginLeft:"30px",fontWeight:"bold",color:""}}><b>Feedback Form</b></h2>
        {/* <span className='subtxt mb-5 my-3' style={{marginLeft:"35px",color:"darkgrey",fontSize:"20px",marginBottom:"40px",fontWeight:"bold"}}>WE are here for You! How can we Help?</span> */}

        <form style={{width:80+"%",minWidth:300+"px",marginTop:20+"px"}} onSubmit={onSubmit}>
        




<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Password" style={{ height:60+"px",backgroundColor:""}} name='email' onChange={onChange} required/>
  <label for="floatingPassword" className='feedtext2'>Enter your email address</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" style={{height:60+"px",backgroundColor:""}} name='name' onChange={onChange} required/>
  <label for="floatingInput" className='feedtext2'> Give Us a Score (1-10)</label>
</div>
  <div class="mb-3">
  <div class="form-floating">
  <input class="form-control" placeholder="Go ahead, We are listening" id="floatingTextarea2" style={{height: "150px",backgroundColor:"",overflowX:"scroll"}} name='message' onChange={onChange} required min={5}></input>
  <label  for="floatingTextarea2"> <span  class='feedtext2' style={{backgroundColor:"",margin:"0px",padding:"0px"}}>Please tell us your reasons for giving this score ...</span></label>
</div>
  </div>

  {!loading && window.innerWidth>1100 && <button type="submit "  style={{height:60+"px",width:"64vw",fontWeight:"bolder",fontSize:25+"px",backgroundColor:"#8F4FBE",border:"0px",zIndex:+200000,position:"relative"}} class="btn btn-success " id=''> Submit</button> }
  {loading && window.innerWidth>1100 && <button type="submit "  style={{height:60+"px",width:"64vw",fontWeight:"bolder",fontSize:25+"px",backgroundColor:"#8F4FBE",border:"0px",zIndex:+20000,position:"relative"}} class="btn btn-success " id='' disabled>Sending...</button> }
  

  {!loading&& window.innerWidth<=1100 && <button type="submit "  style={{height:60+"px",width:"100%",fontWeight:"bolder",fontSize:25+"px",backgroundColor:"#8F4FBE",border:"0px",zIndex:+1000,position:"relative",pointer:"cursor"}} class="btn btn-success " id=''> Submit</button> }
  {loading&& window.innerWidth<=1100 && <button type="submit "  style={{height:60+"px",width:"100%",fontWeight:"bolder",fontSize:25+"px",backgroundColor:"#8F4FBE",border:"0px",zIndex:+1000,position:"relative"}} class="btn btn-success " id='' disabled> Sending ...</button> }


</form>
        
        
   
          </div>   
        <div  className="feedleft"style={{backgroundColor:"",height:75+"vh",marginTop:0+"px",width:"50%",alignItems:"center"}}>
          
        
          <img src="../BBCrm (8) (2).png" style={{height:"auto",width:"160%",marginLeft:"-150px",marginTop:"50px",zIndex:"",maxWidth:"900px"}} alt="" />
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
