import React, { useState } from 'react'
import { useRef ,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
import Sidebar_2 from "./Sidebar_2";
import Graph from './Graph';
import "./Student_progress.css"
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import Notitoggle from '../Notitoggle';
import { useTheme } from '../context/ThemeContext';
import { findAllByDisplayValue } from '@testing-library/react';
import { toast } from 'react-toastify';


const Student_progress= (props) => {
    const location=useLocation();
    const navigate=useNavigate();
    const[flag3,setflag3]=useState(false);
    const {flag2,setflag2}=useContext(Flagcontext);
    const [smil,setmail]=useState("");
    const[loading,setloading]=useState(false);
    const[loading2,setloading2]=useState(false);
    const[loading3,setloading3]=useState(false);
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
     

    const[details,setdetails]=useState(null);
    const[type,setType]=useState("all");
    const[type2,setType2]=useState("all");
    const[type3,setType3]=useState("all");
    const[flag,setflag]=useState(false);
    const[filter,setfilter]=useState(false);
    const{isDarkTheme}=useTheme();
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ';
    
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content_Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          
          }
          // You can include a 'body' field here for POST requests if sending data
        };
    
        const response = await fetch('https://classroombackend-0a5q.onrender.com/teacher/searchStudents', requestOptions);
        const data = await response.json();
    
        if (data.error) {
          
            toast.error("internal server error");
        }
        else{
          
      
        
        console.log(data);
        // Further logic with the data
        setdetails(data);

        }
    
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error as needed
      }
    };
    
    // Call the fetchData function when the component mounts or when needed
    useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

  
    const ref=useRef();
    const ref2=useRef();
    const onChange2 = (e)=>{
        const selectedValue = e.target.value;
        setType( selectedValue );
      


    }
    const onChange3 = (e)=>{
        const selectedValue = e.target.value;
        setType2( selectedValue );
     


    }
    const onChange4 = (e)=>{
        const selectedValue = e.target.value;
        setType3( selectedValue );
     


    }


    const [barData, setChartData] = useState([]);
    const [lineData,setLineData]=useState([]);
    const [marksData,setMarksData]=useState([]);
  
  
  
  
  
  
    const fetchChartDataForline2 = async (stumail) => {
      const url = 'https://classroombackend-0a5q.onrender.com/chart/user1/line2';
      const requestBody = {
          studentEmail: stumail
      };
    
      try {
        setloading(true);
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestBody)
          });
    
          if (!response.ok) {
              throw new Error('Failed to fetch chart data');
          }
    
          const chartData = await response.json();
          console.log("chart",chartData)
          if(!chartData.error){
            setChartData(chartData);

          }
          
          setloading(false); // Update state with fetched chart data
      } catch (error) {
          console.error('Error fetching chart data:', error);
          setloading(false);
          // Handle error appropriately
      }
    };
  
    const fetchAttendanceData = async (stumail) => {
      try {
        setloading2(true);
        const response = await fetch(`https://classroombackend-0a5q.onrender.com/spreadsheet/fetch-attendance/${stumail}`);
        if (!response.ok) {
          console.log(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("datafsfjhgfd",data)
        if(!data.error){
          setLineData(data);

        }
        // Return the fetched data
        setloading2(false);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setloading2(false);
        // throw error; // Propagate the error to the caller
      }
    };
  
    const fetchMarksData = async (stumail) => {
      try {
        setloading3(true);
        const response = await fetch(`https://classroombackend-0a5q.onrender.com/spreadsheet/fetch-marks/${stumail}`);
        if (!response.ok) {
          console.log(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("marks",data)
        if(!data.error){
          setMarksData(data); 

        }
       
        setloading3(false);
        // Return the fetched data
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setloading3(false);
        // throw error; // Propagate the error to the caller
      }
    };
  
  


    const fetchDatachart = async (email) => {
       
      try {
          await Promise.all([
              fetchChartDataForline2(email),
              // fetchDataForDoughnutChart(),
              fetchAttendanceData(email),
              fetchMarksData(email)



          ]);
      } catch (error) {
          console.error('Error fetching chart data:', error);
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
        flag3 &&<i class="fa-solid fa-arrow-left fa-xl ml-5 mx-3 " style={{position:"absolute",right:"10px",marginLeft:"200px",top:"37px"}} onClick={()=>{
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
      

    

    <div className="notifications"style={{width:desiredWidth3,transition:"0.3s",backgroundColor:isDarkTheme?"#1F1F29":"#E6EDFA",color:isDarkTheme?"white":"black"}}>
   <Notitoggle></Notitoggle>

<div className="a " style={{height:79+"vh",width:78+"vw",backgroundColor:isDarkTheme?"#1F1F29":"#E6EDFA",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",color:isDarkTheme?"white":"black",position:"relative"}}>
{flag && <>
  <i class=" arrow fa-solid fa-arrow-left fa-xl ml-5 mx-3 " style={{position:"absolute",left:"30px",top:"67px",cursor:"pointer"}} onClick={()=>{
          
          setflag(false);
          setChartData([]);
          setLineData([]);
          setMarksData([]);
           
          //  setstu(false);
       
     
   }}></i>
</>}
  {
    flag && <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"30px"}}>
    <h4><b>Student,s Progress</b></h4>

  </div>
  }
  
    {!flag && <><div style={{display:"flex",justifyContent:"end",alignItems:"end"}}>
      
      {
        !filter &&  <div className="btn btn-success me-3 w-lg-160" style={{height:"40px",backgroundColor:"#914EC0",border:"0px"}}  onClick={()=>{
          if(filter){
            setfilter(false);
          }
          else{
            setfilter(true)
          }
        }}><b><i class="fa-solid fa-sort fa-xl melg--2 "></i><span className='d-none d-sm-none d-lg-inlineblock'>Apply Filter</span> </b></div>
      }
      {
        filter &&  <div className="btn btn-danger me-3" style={{height:"40px"}} onClick={()=>{
          if(filter){
            setfilter(false);
          }
          else{
            setfilter(true)
          }
        }}  ><b><i class="fa-solid fa-sort fa-xl me-lg-2 "></i><span className='d-none d-sm-none d-lg-inlineblock'>Remove Filter</span>  </b></div>
      }
   
    <div  className="me-2 " style={{width:90+"px",color:isDarkTheme?"white":"black"}}> 
    <label htmlFor="type mb-2"><b>Section:</b></label> 
                <select class="form-select"  aria-label="Default select example" style={{border:"2px solid green",borderRadius:0+"px"}} value={type} onChange={(e)=>{
                    onChange2(e);
                }} id="type" name="type" required >
  {/* <option selected>Open this select menu</option> */}
 
  <option value="all">All</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option> 
  <option value="D">D</option>
</select></div>
    <div  className="me-2 " style={{width:100+"px",color:isDarkTheme?"white":"black"}}> 
    <label htmlFor="type mb-2"><b>Branch:</b></label> 
                <select class="form-select"  aria-label="Default select example" style={{border:"2px solid green",borderRadius:0+"px"}} value={type2} onChange={(e)=>{
                    onChange3(e);
                }} id="type" name="type" required >
  {/* <option selected>Open this select menu</option> */}
 
  <option value="all">All</option>
  <option value="CSE">CSE</option>
  <option value="MNC">MNC</option>
  <option value="EEE">EEE</option>
  <option value="ECE">ECE</option>
</select></div>
    <div  className="me-2 " style={{width:100+"px",color:isDarkTheme?"white":"black"}}> 
    <label htmlFor="type mb-2"><b>Semester:</b></label> 
                <select class="form-select"  aria-label="Default select example" style={{border:"2px solid green",borderRadius:0+"px"}} value={type3} onChange={(e)=>{
                    onChange4(e);
                }} id="type" name="type" required >
  {/* <option selected>Open this select menu</option> */}
 
  <option value="all">All</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
</select></div>
   

    </div>

    {details && details.length===0 && <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
      <h4><b>No Data Found</b></h4>
    </div>}
    {!details  && <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
      <h4><b>Loading...</b></h4>
    </div>}

   {details && details.length>0 &&<>

    <div  className="m-3 p-lg-5"style={{border:"0px solid black",height:"90%",display:"flex",flexDirection:"column",alignItems:"center",overflowY:"auto"}}>
      {!filter &&
      details
       .map((e, index) => (
         <div  className="shadow p-3 px-5 mb-5 progdata h-lg-130" style={window.innerWidth>1200?{ backgroundColor: isDarkTheme?"#181822":"white", height: "130px", width: "93%",borderRadius:"10px" }:{
          height:"fit-content",backgroundColor: isDarkTheme?"#181822":"white",width:"93%"
         }} onClick={()=>{
          setmail(e.email);
          console.log("hiiiiii");
          setflag(true);

          if(localStorage.getItem("token")){
            // console.log("teacherEmail",teacherEmail);
            fetchDatachart(e.email);
          }


          
         }}>
               <h6 class="" style={{color:"#11ADAC",fontWeight:"bolder",fontSize:"22px"}}><b>{e.name}</b></h6>
               <div  className="mt-3"style={window.innerWidth>1200?{ display: "flex", justifyContent: "space-between",color:isDarkTheme?"white":"black"}:{display: "flex", justifyContent: "space-between",color:isDarkTheme?"white":"black",flexDirection:"column"}}>
                 <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
                   <b>Section: </b> {e.section}
                 </div>
                 <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
                 <b>Semester: </b>  {e.semester}
                 </div>
                 <div  style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
                 <b>Roll No: </b> {e.rollno}
                 </div>
                 <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
                 <b>Branch: </b> {e.branch}
                 </div>
   
               </div>
   
   
           </div>
       ))
       }
    
       
    
      
      {filter &&
     details
     .filter((e) => {
       // Check if the variables are not "all" or if they are "all," don't filter.
       return (type !== "all" ? e.section === type : true) &&
              (type2 !== "all" ? e.branch === type2 : true) &&
              (type3 !== "all" ? e.semester === type3 : true);
     })
     .map((e, index) => (
       <div
         className="shadow p-3 px-5 mb-5 progdata"
         style={window.innerWidth>1200?{ backgroundColor: isDarkTheme?"#181822":"white", height: "130px", width: "93%",borderRadius:"10px" }:{
          height:"fit-content",backgroundColor: isDarkTheme?"#181822":"white",width:"93%"
         }}
         onClick={() => {
           setmail(e.email);
           console.log("E",e.email);
           setflag(true);

           if(localStorage.getItem("token") ){
            // console.log("teacherEmail",teacherEmail);
            fetchDatachart(e.email);
          }
         }}
         key={index} // Don't forget to add a unique key for each element in the map function
       >
         <h6 className="" style={{ color: "#11ADAC", fontWeight: "bolder",fontSize:"22px" }}>
           <b>{e.name}</b>
         </h6>
         <div className="mt-3" style={window.innerWidth>1200?{ display: "flex", justifyContent: "space-between",color:isDarkTheme?"white":"black"}:{display: "flex", justifyContent: "space-between",color:isDarkTheme?"white":"black",flexDirection:"column"}}>
           <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
             <b>Section: </b> {e.section}
           </div>
           <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
             <b>Semester: </b> {e.semester}
           </div>
           <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
             <b>Roll No: </b> {e.rollno}
           </div>
           <div style={window.innerWidth>1200?{ height: "60px", width: "180px" }:{width:"180px",height:"fit-content"}}>
             <b>Branch: </b> {e.branch}
           </div>
         </div>
       </div>
     ))
   
       }
      {/* {type==="semester" &&
      details
      .filter((e) => e.semester === type2 )
       .map((e, index) => (
         <div  className="shadow p-3 px-5 mb-5 progdata" style={{backgroundColor:"#F0F2F5",height:"130px",width:"93%"}} onClick={()=>{
          setflag(true);
         }}>
               <h6 class="" style={{color:"#11ADAC",fontWeight:"bolder"}}><b>{e.name}</b></h6>
               <div  className="mt-3"style={{display:"flex",justifyContent:"space-between"}}>
                 <div style={{height:"60px",width:"180px"}}>
                   <b>Section: </b>  {e.section}
                 </div>
                 <div style={{height:"60px",width:"180px"}}>
                 <b>Semester: </b> {e.semester}
                 </div>
                 <div style={{height:"60px",width:"180px"}}>
                 <b>Roll No: </b> {e.rollno}
                 </div>
                 <div style={{height:"60px",width:"180px"}}>
                 <b>Branch: </b>  {e.branch}
                 </div>
   
               </div>
   
   
           </div>
       ))
       } */}
        
  

        

    </div>
   
   
   </>



   }</>}
    {flag && <div style={window.innerWidth>1200?{display:"flex",justifyContent:"space-evenly",marginTop:"40px",alignItems:"center",height:"100%"}:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>

      <div className="a " style={window.innerWidth>1200?{height:420+"px",width:24+"vw",borderRadius:13+"px",backgroundColor:""}:{width:"300px",height:"fit-content"}}> 
   {
    1 && <>
    <Graph backgroundColor="" textcolor={isDarkTheme?"white":"black"} type="line" lineData={marksData}></Graph>
    </>
   }
     {
    marksData.length===0&& !loading3&&<>
    <div className='text-center'>No Data</div>

    </>
   }
   {
    loading3 &&<>
    <div className='text-center'>Loading...</div>

    </>
   }
   {
    !loading3 && marksData.length!==0&& <>
    <div className='text-center'>Subjectwise Marks in %</div>
    
    </>
   }


   


        </div>
        <div className="b " style={window.innerWidth>1200?{height:420+"px",width:24+"vw",borderRadius:13+"px",backgroundColor:""}:{width:"300px",height:"fit-content"}}>
        <Graph backgroundColor="#22222E" textcolor={isDarkTheme?"white":"black"} type="bar" barData={barData} ></Graph>

        {
    barData.length===0&& !loading&& <>
    <div className='text-center'>No Data</div>

    </>
   }
        {
    loading && <>
    <div className='text-center'>Loading...</div>

    </>
   }
   {
    !loading &&  barData.length!==0&&<>
    <div className='text-center'>Classwise attendance</div>
    
    </>
   }
      
   
        </div>
        <div className="c " style={window.innerWidth>1200?{height:420+"px",width:24+"vw",borderRadius:13+"px",backgroundColor:""}:{width:"300px",height:"fit-content"}}>
        <Graph backgroundColor="#22222E" textcolor={isDarkTheme?"white":"black"} type="line"  lineData={lineData}></Graph>
       
        {
    loading2 && <>
    <div className='text-center'>Loading...</div>

    </>
   }
    {
    lineData.length===0&& !loading2 && <>
    <div className='text-center'>No Data</div>

    </>
   }
   {
    !loading2 &&  lineData.length!==0&&<>
    <div className='text-center'>Subjectwise Attendance in %</div>
    
    </>
   }
       
  
   
        </div>



      
      
      
      </div>}

    



      
    </div>


</div>

    </div>
 



      
    </div>
 

  </>)
}

export default Student_progress
