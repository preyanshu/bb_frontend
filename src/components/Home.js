import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate();
    useEffect(()=>{
      console.log("in use effect")
        if(localStorage.getItem("token")){

            // navigate("/hi")
            console.log(localStorage.getItem("token"));
        }

    },[])

    

  return (<>
  <div style={{width:100+"vw",height:100+"vh"}} id='home_page'>
    <div className='text-center'><b><h1>Landing Page. </h1><br /><h5>(Home page)</h5></b></div>
  {/* <lottie-player src="https://lottie.host/56939fa1-853c-4721-b68b-6a1fd50e0797/aSHIS22mJg.json" background="" speed="1" style={{width:400+"px",height:500+"px"}} loop autoplay direction="1" mode="normal"></lottie-player>
  <div><h5>Please Signup/Login using side nav bar to continue..</h5></div> */}

<div style={{width:100+"%",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:0+"%",marginTop:50+"px"}}>
    <Link to="/login" className="btn btn-success my-3 mx-3" style={{backgroundColor:"white",color:"black",width:200+"px",border:"2px solid black"}} >Login</Link>
 
    <Link to="/signUp" className="btn btn-success my-3 mx-3" style={{width:200+"px",border:"2px solid black"}} >SignUp</Link></div>

  </div>
 
    
    </> )
}

export default Home
