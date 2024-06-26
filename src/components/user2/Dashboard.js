// import React from 'react'
import "../user1/dashboard.css"
import Graph from '../user1//Graph'
import React,{useEffect, useRef,useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Sidebar_2 from "../user1/Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import { useTheme } from "../context/ThemeContext";
import Notitoggle from "../Notitoggle";


const Dashboard = (props) => {
  const[flag,setflag]=useState(false);
  const {flag2,setflag2}=useContext(Flagcontext);
  const [teacherEmail, setEmail] = useState("");
  const {isDarkTheme,assignmentsLength,gAnnouncements,gNotifications,checkForUpdates}=useTheme();
 

    
  useEffect(()=>{

    if(window.innerWidth<1200){
      console.log("innerwidth",window.innerWidth);
      setflag2(false);
      
  
    }
    console.log("S",localStorage.getItem("token"));
    if(localStorage.getItem("token")){
      console.log("setting")
      console.log("token",JSON.parse(localStorage.getItem("token")).email);
      setEmail(JSON.parse(localStorage.getItem("token")).email);
    }

  },[])
  
  useEffect(() => {
    
    if(1){
      const interval = setInterval(() => {
        
        var a = gAnnouncements;
    var b= gNotifications;
    if((localStorage.getItem('token') && localStorage.getItem('token2'))){
      checkForUpdates(a,b,1);

    }
        
      }, 3000); // Check every 60 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
   
  }, []);

  const [barData, setBarChartData] = useState([]);
  const [lineData, setLineChartData] = useState([]);
  const [classData, setDoughnutChartData] = useState([]);

   let students = parseInt(classData.totalStudents)
   let classes = parseInt(classData.totalClassesByTeacher)
   let summation = students + classes+ assignmentsLength;
    let studentPercentage = Math.round((students / summation) * 100);
    let classPercentage = Math.round((classes / summation) * 100);
    let assignmentPercentage = Math.round((assignmentsLength / summation) * 100);

   let doughnutData = {
    labels:[["Students"],["Classes"],["Assignments"]],
    datasets:[[studentPercentage,100-studentPercentage],[classPercentage,100-classPercentage],[assignmentPercentage,100-assignmentPercentage]]

   }


//data fetching functions
async function fetchDataForBarChart() {
  const url = 'https://classroombackend-0a5q.onrender.com/chart/user2/bar';
  const requestBody = {
      teacherEmail: JSON.parse(localStorage.getItem("token")).email
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        console.log('Failed to fetch data for doughnut chart');
        return;
      }

      const data = await response.json();
      console.log('Data for bar chart:', data);
      // Process the received data for the bar chart
      // return data;
      setBarChartData(data);
  } catch (error) {
      console.log('Error fetching data for bar chart:', error);
      // Handle error appropriately
  }
}

async function fetchDataForLineChart() {
  const url = 'https://classroombackend-0a5q.onrender.com/chart/user2/line';
  const requestBody = {
      teacherEmail: JSON.parse(localStorage.getItem("token")).email
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        console.log('Failed to fetch data for doughnut chart');
        return;
      }

      const data = await response.json();
      console.log('Data for line chart:', data);
      // Process the received data for the line chart
      // return data;
      setLineChartData(data);
  } catch (error) {
      console.log('Error fetching data for line chart:', error);
      // Handle error appropriately
  }
}

async function fetchDataForDoughnutChart() {
  const url = 'https://classroombackend-0a5q.onrender.com/chart/user2/doughnut';
  const requestBody = {
      teacherEmail: JSON.parse(localStorage.getItem("token")).email
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
          console.log('Failed to fetch data for doughnut chart');
          return;
      }

      const data = await response.json();
      console.log('Data for doughnut chart:', data);
      // Process the received data for the doughnut chart
      // return data;
      setDoughnutChartData(data);
  } catch (error) {
      console.log('Error fetching data for doughnut chart:', error);
      // Handle error appropriately
  }
}


//data fetching functions

useEffect(() => {
  const fetchData = async () => {
    console.log("teacherEmail",teacherEmail);
      try {
          await Promise.all([
              fetchDataForBarChart(),
              fetchDataForLineChart(),
              fetchDataForDoughnutChart()
          ]);
      } catch (error) {
          console.error('Error fetching chart data:', error);
      }
  };

  // Fetch data initially when component mounts
  if(teacherEmail !== null){
    console.log("teacherEmail",teacherEmail);
    fetchData();
  }

  // Update data every 5 seconds
  const intervalId = setInterval(fetchData, 5000);

  // Clean up interval on component unmount
  return () => clearInterval(intervalId);
}, []);


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
  
return(
   <div className='mainbg' style={{backgroundColor:isDarkTheme?"#181822":"#E6EDFA" ,transition:"0.3s"}}>
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

    {1 && <div className="bg" style={{width:desiredWidth2,transition:"0.3s",backgroundColor:isDarkTheme?"#181822":"#E6EDFA" ,color:isDarkTheme?"white":"black"}}>
    <Notitoggle></Notitoggle>
     
    <div className="top" style={window.innerWidth>1200?{height:250+"px",marginTop:50+"px"}:{height:"fit-content",marginTop:100+"px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"30px",paddingBottom:"30px",width:"100%"}} >
        
        <div className="a shadow  " style={window.innerWidth>1200?{height:"fit-content",width:"22vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",display:"flex",justifyContent:"space-evenly",marginBottom:"130px",marginTop:"185px"}:{width:"300px",display:"flex",justifyContent:"center",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",flexDirection:"column-reverse",alignItems:"center",marginBottom:"20px"}}>

          <div style={{border:"0px solid white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:"",marginLeft:window.innerWidth>1200?"30px":"0px",fontSize:"20px",marginBottom:window.innerWidth>1200?"0px":"20px"}}>
            <div>{doughnutData.labels[0][0]}</div>
            <b style={{fontWeight:"900"}}>{classData.totalStudents}</b>
          </div>
            
           <div style={{marginRight:"",background:"",width:window.innerWidth>1200?"50%":"100%",display:"flex",justifyContent:"center"}}>
            <Graph graphColor="purple" textcolor="white" type="doughnut" doughnutLabel={doughnutData.labels[0]} doughnutData={doughnutData.datasets[0]}></Graph>
            {/* {console.log("doughnutData",doughnutData.datasets[0])} */}
            {/* {console.log("doughnutData",doughnutData.labels[0])} */}
            
            </div> 
        </div>
        <div className="a shadow " style={window.innerWidth>1200?{height:"fit-content",width:"22vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",display:"flex",justifyContent:"space-evenly",marginBottom:"130px",marginTop:"185px"}:{width:"300px",display:"flex",justifyContent:"center",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",flexDirection:"column-reverse",alignItems:"center",marginBottom:"20px"}}>

<div style={{border:"0px solid white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:"",marginLeft:window.innerWidth>1200?"30px":"0px",fontSize:"20px",marginBottom:window.innerWidth>1200?"0px":"20px"}}>
<div>{doughnutData.labels[1][0]}</div>
            <b style={{fontWeight:"900"}}>{classData.totalClassesByTeacher}</b>
</div>
  
 <div style={{marginRight:"",background:"",width:window.innerWidth>1200?"50%":"100%",display:"flex",justifyContent:"center"}}>
  <Graph graphColor="black" textcolor="white" type="doughnut" doughnutLabel={doughnutData.labels[1]} doughnutData={doughnutData.datasets[1]}></Graph>
  
  </div> 
</div>
<div className="a shadow " style={window.innerWidth>1200?{height:"fit-content",width:"22vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",display:"flex",justifyContent:"space-evenly",marginBottom:"130px",marginTop:"185px"}:{width:"300px",display:"flex",justifyContent:"center",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",flexDirection:"column-reverse",alignItems:"center",marginBottom:"20px"}}>

<div style={{border:"0px solid white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:"",marginLeft:window.innerWidth>1200?"30px":"0px",fontSize:"20px",marginBottom:window.innerWidth>1200?"0px":"20px"}}>
<div>{doughnutData.labels[2][0]}</div>
            <b style={{fontWeight:"900"}}>{assignmentsLength}</b>
</div>
  
 <div style={{marginRight:"",background:"",width:window.innerWidth>1200?"50%":"100%",display:"flex",justifyContent:"center"}}>
  <Graph graphColor="#93A0F3" textcolor="white" type="doughnut" doughnutLabel={doughnutData.labels[2]} doughnutData={doughnutData.datasets[2]}></Graph>
  
  </div> 
</div>
       
       

        </div>
        <div className="mid" style={window.innerWidth>1200?{height:"fit-content",marginTop:80+"px",marginBottom:"60px"}:{height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}} >
      
        <div className="b shadow" style={window.innerWidth>1200?{height:"fit-content",width:37+"vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",paddingTop:"30px",paddingBottom:"30px"}:{

height:"fit-content",width:300+"px",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",paddingTop:"30px",paddingBottom:"30px",marginBottom:"20px"}}>
        <div className="mt-4">
        <Graph backgroundColor="" type="bar" textcolor={isDarkTheme?"white":"black"} style={{}} barData={barData}></Graph></div>
        <div style={{marginLeft:"20px"}}><h6><b>Assignments in Class</b></h6>
   </div>
   <hr />
   <div style={{marginLeft:"20px"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
    updates every 5 sec


   </div>
        </div>
        <div className="a shadow" style={window.innerWidth>1200?{height:"fit-content",width:37+"vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",paddingTop:"30px",paddingBottom:"30px"}:{

height:"fit-content",width:300+"px",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",paddingTop:"30px",paddingBottom:"30px",marginBottom:"20px"}}> 
        <div className="mt-4">
        <Graph backgroundColor="" textcolor={isDarkTheme?"white":"black"} type="line" lineData={lineData}></Graph></div>
  

   <div style={{marginLeft:"20px",marginTop:1+"vw"}}><h6><b>Students in Class</b></h6>
   </div>
   <hr />
   <div style={{marginLeft:"20px"}}>
   <i class="fa-regular fa-clock me-3"></i>
 
   updates every 5 sec


   </div>


        </div>

        </div>
      
        <div className="end" style={window.innerWidth>1200?{height:500+"px",marginTop:-10+"px"}:{height:"fit-content",display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"center"}} >
        <div className="a shadow " style={window.innerWidth>1200?{height:450+"px",width:47+"vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginBottom:"20px"}:{
          height:450+"px",width:"300px",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginBottom:"20px"



        }}>
            <h4>Campaigns</h4>

            
            {
        Array.from({length: 3}).map((_, index) => (
          <div key={index}>
            <hr />
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
              <span><i className="fa-brands fa-microsoft fa-lg me-3"></i>Project name</span>
              {
                window.innerWidth>1200 && <>
                <span>
                <i className="fa-solid fa-user fa-lg"></i>
                <i className="fa-solid fa-user fa-lg" style={{marginLeft: "-5px"}}></i>
                <i className="fa-solid fa-user fa-lg" style={{marginLeft: "-10px"}}></i>
              </span>
              <span><b>$4500</b></span>
              <div style={{width: "15%", height: "10px", marginTop: "5px"}} className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                </>
              }
            </div>
            <hr />
          </div>
        ))
      }


        
          
        </div>
        <div className="b shadow" style={window.innerWidth>1200?{height:450+"px",width:27+"vw",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",padding:25+"px",marginTop:"-20px"}:{width:"300px",height:450+"px",backgroundColor:isDarkTheme?"#21222D":"white",borderRadius:13+"px",padding:25+"px",marginBottom:"40px"}}>
            <h4> Tasks</h4>
            {/* <i class="fa-solid fa-arrow-up me-3 fa-lg" style={{color: "#39aa31"}}></i><b>24%</b> this month */}
            <hr />
            <div>
               <div className="1" style={{height:80+"px",width:80+"%",borderLeft:"0px solid white",marginLeft:10+"Px"}}>
               <div style={{backgroundColor:"",height:30+"px",width:20+"px",marginLeft:-2.9+"%",marginRight:10+"px",display:"inline-block"}}><i class="fa-solid fa-list-check me-3 fa-lg" ></i>
             
               


               </div>
               <b>Task 1</b> <br />
               <span style={{marginLeft:10+"px",fontSize:"small"}}>22 DEC 7:20 PM</span>
               </div>



            </div>
            <hr />
            <div>
            <div className="1" style={{height:80+"px",width:80+"%",borderLeft:"0px solid white",marginLeft:10+"Px"}}>
               <div style={{backgroundColor:"",height:30+"px",width:20+"px",marginLeft:-2.9+"%",marginRight:10+"px",display:"inline-block"}}><i class="fa-solid fa-list-check me-3 fa-lg" ></i>
             
               


               </div>
               <b>Task 2</b> <br />
               <span style={{marginLeft:10+"px",fontSize:"small"}}>22 DEC 7:20 PM</span>
               </div>



            </div>
            <hr />
            <div>
            <div className="1" style={{height:80+"px",width:80+"%",borderLeft:"0px solid none",marginLeft:10+"Px"}}>
               <div style={{backgroundColor:"",height:30+"px",width:20+"px",marginLeft:-2.9+"%",marginRight:10+"px",display:"inline-block"}}><i class="fa-solid fa-list-check me-3 fa-lg" ></i>
             
               


               </div>
               <b>Task 3</b> <br />
               <span style={{marginLeft:10+"px",fontSize:"small"}}>22 DEC 7:20 PM</span>
               </div>
               <div style={{marginLeft:12+"px",marginTop:12+"px"}}> <Link style={{color:"white",textDecoration:"none"}}to="/user1/tasks"><h6><b>Show more..</b></h6></Link></div>

              



            </div>
          
        </div>
      

        </div>
      
        


      
    </div>}
    
    </div>
  )
}

export default Dashboard
