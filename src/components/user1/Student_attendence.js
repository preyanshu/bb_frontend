import React, { useState } from 'react'
import { useRef ,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import Notitoggle from '../Notitoggle';
import { useTheme } from '../context/ThemeContext';

const Student_attendence = (props) => {
    const{isDarkTheme}=useTheme();
    
    const location=useLocation();
    const navigate=useNavigate();
    const[flag,setflag]=useState(false);
    const {flag2,setflag2}=useContext(Flagcontext);
    const[studentdetails,setstudentdetails]=useState([]);
    const[assignments,setAssignments]=useState([]);
    const[announcements,setAnnouncements]=useState([]);
    const[modal1,setModal1]=useState({
      title:"",
      dueDate:"",
      description:""
    });
    const[modal2,setModal2]=useState({title:"",
    description:""});
    const[token_new,settoken]=useState("Loading..");
    const[token,settoken2]=useState("Loading..");
    useEffect(()=>{
      if(window.innerWidth<1200){
        console.log("innerwidth",window.innerWidth);
        setflag2(false);
        
    
      }
      if(localStorage.getItem("token2")){
        settoken(JSON.parse(localStorage.getItem("token2")));
      }
      if(JSON.parse(localStorage.getItem("token"))){
        settoken2(JSON.parse(localStorage.getItem("token")));
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
    // console.log(JSON.parse(localStorage.getItem("token").name));
    const [class1,setclass]=useState({
    
      semester: "",
      section: "",
      teacher: {
        $oid: "658c297bb9382e89b1df6331"
      },
      subject: "",
      subjectCode: "",
      assignments: [],
      students: [],
      announcements: [],
      
    });
    const [current,setcurrent]=useState({
    

      _id:"",
      semester: ""
    });
    const[stu,setstu]=useState(false);
    const[student,setstudent]=useState({name:""});
    const [selectedItems, setSelectedItems] = useState([]);
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
    


  
    const ref=useRef();
    const ref2=useRef();
    const ref2close=useRef();
    const ref3=useRef();
    const ref3close=useRef();
    const onChange = (e) => {
        setclass({ ...class1, [e.target.name]: e.target.value });
      };
    const onChange2 = (e) => {
        setstudent({ ...student, [e.target.name]: e.target.value });



      };
    const onChangemodal1 = (e) => {
        setModal1({ ...modal1, [e.target.name]: e.target.value });



      };
    const onChangemodal2 = (e) => {
        setModal2({ ...modal2, [e.target.name]: e.target.value });



      };

      async function linkSheet(classId) {
        const url = 'http://localhost:5000/spreadsheet/link-spreadsheet';
    
        const requestData = {
            classId: classId
        };
    
        const headers = {
            'Accept': '*/*',
            'Authorization': `Bearer ${token_new}`,
            'Content-Type': 'application/json'
        };
    
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestData)
        };
    
        try {
            const response = await fetch(url, options);
    
            if (!response.ok) {
              alert('Failed to link spreadsheet');
                throw new Error(`HTTP error! Status: ${response.status}`);
               
            }
    
            const data = await response.json();
            console.log('Fetched_data____:', data); 
            // Log the fetched data
            
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to link spreadsheet');
            // Handle error as needed
            throw error; // Rethrow the error for the caller to handle
        }
    }


      const addClass = async () => {
        try {
          // const token = `Bearer ${token_new}`;
      
          const requestBody = {
            name: token.name,
            semester: class1.semester,
            section: class1.section,
            subject: class1.subject,
            subjectCode: class1.subjectCode
          };
      
          // const queryParams = new URLSearchParams(requestBody).toString();
          console.log("request",requestBody);
      
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token_new}`
            },
            body: JSON.stringify(requestBody)
          };
      
          const response = await fetch("https://classroom-backend-uow6.onrender.com/teacher/createClass", requestOptions);
          console.log("done");
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          console.log("data",data);

          await linkSheet(data._id);

          alert("sheet linked successfully");

          
          console.log(data);

          
          
          // Further logic with the data
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          // Handle error as needed
        }
      };
      
      // Call the addClass function
   

      async function removeStudentFromClass(classId, studentId,token) {
        try {
             // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
    
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    classId: classId,
                    studentId: studentId
                })
            };
    
            const response = await fetch('http://localhost:5000/teacher/removestudent', requestOptions);
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || 'Failed to remove student from class');
            }
    
            return data;
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
    }
      
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        ref.current.click();
        addClass();
        console.log("fetching data");

        setTimeout(() => {

        fetchData(JSON.parse(localStorage.getItem("token2")),JSON.parse(localStorage.getItem("token")));
        fetchData(JSON.parse(localStorage.getItem("token2")),JSON.parse(localStorage.getItem("token")));

        }, 500);
        // setdetails(details.concat(class1));
        
        
        // console.log("fetching data");
        
        setclass({
         
          semester: "",
          section: "",
          teacher: {
            $oid: "658c297bb9382e89b1df6331"
          },
          subject: "",
          subjectCode: "",
          assignments: [],
          students: [],
          announcements: [],
          
        })
        
        // console.log(class1);
       
        // setdetails(details.concat(class1))
        // setclass({
    
        //   semester: "",
        //   section: "",
        //   teacher: {
        //     $oid: "658c297bb9382e89b1df6331"
        //   },
        //   subject: "",
        //   subjectCode: "",
        //   assignments: [],
        //   students: [],
        //   announcements: [],
          
        // })
       
        
      
    }
    const handleSubmit2=(e)=>{
        e.preventDefault();
        ref.current.click();
        // setdetails(details.concat(class1))
        // const newObject = { id: 2, name: "Updated Object 2" };


      
    }
    const addstu=(e)=>{
      const data=details;
      const itemId = e._id;
      const index = selectedItems.indexOf(itemId);
    
       if(index === -1){
        const updatedSelectedItems = [...selectedItems, itemId];
      setSelectedItems(updatedSelectedItems);
       
        // console.log("added",data);
        current.students.push(e._id);

        const updatedArray = data.map((obj) => {
          if (obj._id === current._id) {
            return current; // Replace the object with the updated object
          }
          return obj; 
        });

        
      
      console.log("added",updatedArray);
      setdetails(updatedArray);


       }
       else if(index !== -1){
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems.splice(index, 1);
        setSelectedItems(updatedSelectedItems);
        const updatedCurrentstu = current.students.filter(
          (id) =>  id !== e._id
        );
        current.students = updatedCurrentstu;

        const updatedArray = data.map((obj) => {
          if (obj._id === current._id) {
            return current; // Replace the object with the updated object
          }
          return obj; 
        });

        setdetails(updatedArray);
        console.log("removed",updatedArray);
       }
     
       
       




           
       
      
    }

    const fetchData = async (token_new,token) => {
      try {
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ';
    
        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token_new}`
          }
        };
    
        const response = await fetch(`https://classroom-backend-uow6.onrender.com/teacher/viewClasses?name=${token.name}`, requestOptions);
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log("data",data);

        setdetails(data)
      
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error as needed
      }
    };
    
    // Call the fetchData function
    useEffect(()=>{
      if(localStorage.getItem("token2") && localStorage.getItem("token")){
        // settoken();
      
        
      fetchData(JSON.parse(localStorage.getItem("token2")),JSON.parse(localStorage.getItem("token")));
        
      }

    },[])
   
    
    const fetchstu = async () => {
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
    
        const response = await fetch('https://classroom-backend-uow6.onrender.com/teacher/searchStudents', requestOptions);
        const data = await response.json();
    
        if (data.error) {
            alert("internal server error");
        }
        else{
          
      
        
        console.log("fetching it again",data);
        // Further logic with the data
        setstudentdetails(data);

        }
    
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error as needed
      }
    };
    
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
    const fetchannouncement = async (e) => {
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
    
        const response = await fetch(`https://classroom-backend-uow6.onrender.com/teacher/viewAnnouncements/${e._id}`, requestOptions);
        const data = await response.json();
    
        if (data.error) {
            alert("internal server error");
        }
        else{
          
      
        setAnnouncements(data);

        }
    
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error as needed
      }
    };
    
    // Call the fetchData function when the component mounts or when needed
    useEffect(() => {
      fetchstu();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const idToNameMap = {};

// Creating a mapping of IDs to student names
studentdetails.forEach(student => {
  idToNameMap[student._id] = student.name;
});

const addassignment = async () => {
  console.log("current",{classId:current._id,title:modal1.title,dueDate:modal1.dueDate,description:modal1.description});
  try {
    const token =  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ`  
    

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content_Type': 'application/json',
        'Authorization': `Bearer ${token_new}`,
      
      
      },
      body: JSON.stringify( {classId:current._id,title:modal1.title,dueDate:modal1.dueDate,description:modal1.description})
      // You can include a 'body' field here for POST requests if sending data
    };
    const url = "https://classroom-backend-uow6.onrender.com/teacher/addAssignment";  

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    if (result.error) {
        alert("internal server error");
    }
    else{
      
  
    
    // alert("assignment added successfully");
    fetchassignment(current);
    

    }

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Handle error as needed
  }
};


async function removeClass(classId, email,token) {
  try {
       

      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
              classId: classId,
              email: email
          })
      };

      const response = await fetch('http://localhost:5000/teacher/removeclass', requestOptions);
      const data = await response.json();

      if (!response.ok) {
          throw new Error(data.error || 'Failed to remove class from teacher');
      }

      return data;
  } catch (error) {
      console.error('Error:', error.message);
      throw error;
  }
}


const addannouncement = async () => {
  console.log("current",{classId:current._id,title:modal2.title,description:modal2.description});
  try {
    const token =  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ`  
    

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content_Type': 'application/json',
        'Authorization': `Bearer ${token_new}`,
      
      
      },
      body: JSON.stringify( {classId:current._id,title:modal2.title,content:modal2.description})
      // You can include a 'body' field here for POST requests if sending data
    };
    const url = "https://classroom-backend-uow6.onrender.com/teacher/addAnnouncement";  

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    if (result.error) {
        alert("internal server error");
    }
    else{
      
  
    
    // alert("assignment added successfully");
    fetchannouncement(current);
    

    }

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Handle error as needed
  }
};
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
    hr: 3600,
    min: 60,
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

const filteredStudents = studentdetails.filter((e) => e.semester === current.semester && e.section === current.section);

function removeStudentFromObject(obj, studentIdToRemove) {
  // Clone the original object to avoid mutating it directly
  const newObj = { ...obj };

  // Check if the students array exists in the object
  if (newObj.students && Array.isArray(newObj.students)) {
      // Find the index of the student ID to remove
      const index = newObj.students.findIndex(studentId => studentId === studentIdToRemove);

      // If the student ID is found, remove it from the students array
      if (index !== -1) {
          newObj.students.splice(index, 1);
      }
  }

  return newObj;
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
    <div className="notificationbg" style={{width:desiredWidth2,transition:"0.3s",backgroundColor:isDarkTheme?"#181822":"#E6EDFA",color:isDarkTheme?"white":"black"}}>     
      

    

    <div className="notifications"style={{width:desiredWidth3,transition:"0.3s"}}>
<Notitoggle></Notitoggle>

<div className="a astuatten " style={{height:73+"vh",width:78+"vw",backgroundColor: isDarkTheme ? (!stu ? "#22222E" : "#181822") : (!stu ? "white" : "#E6EDFA")
,borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",position:"relative"}}>

        <h4 style={{marginTop:15+"px",marginBottom:27+"px"}}><b>
        <i class="fa-solid fa-arrow-left fa-lg ml-5 me-3 " onClick={()=>{
           
           setstu(false);
       
     
   }}></i> <i class="fa-solid fa-plus fa-lg ml-5 me-3 " onClick={()=>{
    
           
                ref.current.click();
            
          
        }}></i>
                 </b> {stu &&<span style={{fontSize:"20px"}}>
                  
                  
                  {!current.spreadsheetLink && <>
                    <i class="fa-solid fa-clipboard-user fa-lg " style={{color:"#1BAAAB"}} onClick={()=>{
                      alert("No Sheet Linked");
                    }}></i>
                  </>}

                  {current.spreadsheetLink && <>

                    <a href={current.spreadsheetLink} target='blank'><i class="fa-solid fa-clipboard-user fa-lg " style={{color:"#1BAAAB"}}></i></a>
                  
                  </>}
                 
                 
                 
                 
                 </span>  } </h4> 
                 {/* {!stu && <div className="d-flex w-100" style={{border:"0px solid black",position:"absolute",height:"70px",top:"20px",left:"0px",alignItems:"center",justifyContent:"center"}}>

<h2 style={{fontWeight:"300"}}></h2>
</div>} */}
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
        <div class="" style={{display:"",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",position:"relative"}}>
          {
            !details && <><div className='text-center d-flex'  style={{width:"100%",height:"100%",position:"absolute",border:"0px solid black",alignItems:"center",justifyContent:"center",top:"-40px",flexDirection:"column"}}>
              
              <h4 >Loading...</h4>
              </div></>
          }
          {details && details.length===0 && details && <div className="text-center d-flex " style={{width:"100%",height:"100%",position:"absolute",border:"0px solid black",alignItems:"center",justifyContent:"center",top:"-40px",flexDirection:"column"}}> 
          <lottie-player src="https://lottie.host/c2257700-6895-4ddc-ad93-1176a948baa5/QhrZ0OUaa6.json" background={isDarkTheme?"#22222E":"white"} speed="1" style={{width:"300px",height:"300px"}} loop autoplay direction="1" mode="normal"></lottie-player>
            <h5 className='mt-5'>You Dont Have Any Created Classes ..</h5> </div>}
       
       
        <div class="card-group" >
  
  {!stu &&details&& details.map((e)=>{
    return(
        <div className="col-md-3 m-1" style={{Width:"250px"}}>
    <div className="card my-3" style={{backgroundColor:isDarkTheme?"#22222E":"white"}} >
        <div className="card-body card-bodyclass " style={{backgroundColor:isDarkTheme?"#302341":"#E6EDFA",position:"relative",borderRadius:"20px"}}  >
            <div className="d-flex align-items-center">
                <h5 className="card-title me-4" style={{fontWeight:"800",color:"darkgreen"}}>{e.subjectCode}</h5> <br />
                <h6><b className='mt-1' style={{color:isDarkTheme?"white":"black"}}>{e.subject}</b></h6>
                <i className="far fa-trash-alt mx-2" style={{position:"absolute",right:"20px",top:"20px",color:"red",cursor:"pointer"}} onClick={()=>{
                  prompt("Are you sure you want to delete this class?","yes");

                  console.log("clicked");

const classId = e._id;
const email = JSON.parse(localStorage.getItem("token")).email;

removeClass(classId, email,JSON.parse(localStorage.getItem("token2")))
    .then(data => {
        console.log('Class removed from teacher:',data);
        fetchData(JSON.parse(localStorage.getItem("token2")));
        function removeObjectById(array, idToRemove) {
          return array.filter(obj => obj._id !== idToRemove);
      }
      setdetails(removeObjectById(details,e._id));
        
    })
    .catch(error => {
        console.error('Failed to remove class from teacher:', error);
    });

    





                }} ></i>
                <hr />
                
            </div>
            < p className="card-text" style={{color:isDarkTheme?"white":"black"}} onClick={()=>{
          
          setstu(1);
          setcurrent(e);
          
          fetchassignment(e);
          fetchannouncement(e);
          


   }}><b><i class="fa-solid fa-user me-2"></i>Teacher : </b> <span style={{color:isDarkTheme?"white":"black"}}>{token.name}</span> <br />
             <b><div class="fa-solid fa-user me-2" style={{color:"#302341"}}></div>Semester :</b> <span style={{color:isDarkTheme?"white":"black"}}>{e.semester}</span> <br />
             <b><div class="fa-solid fa-user me-2" style={{color:"#302341"}}></div>section :</b> <span style={{color:isDarkTheme?"white":"black"}}>{e.section}</span> </p>

        </div>
      </div>
     </div>

    )

})  }


{stu && <div  class="d-flex  p-3 students"style={{border:"0px solid grey",height:"50vh",position:"relative",borderRadius:"8px",flexDirection:"column",flexWrap:"wrap",alignItems:"flex-start",overflowX:"auto",backgroundColor:isDarkTheme?"#22222E":"white"}}>
  {/* <div className="text-center my-3" style={{width:"100%",height:"30px",position:"absolute"}}>   <h4>Students</h4> </div> */}

  {current.students.length===0 && <div className="text-center d-flex " style={{width:"100%",height:"100%",position:"",border:"0px solid black",alignItems:"center",justifyContent:"center"}}>   <h4>No Students In The Class</h4> </div>}
  
      
{stu &&
  
 
  current.students.map(studentId => {
    // Find the student object using the ID
    const student = studentdetails.find(student => student._id === studentId);

    // Check if the student exists before displaying
    

    if (student) {
      return (<>
       
       <div className="col-md-3 m-1 my-3" style={{width:"fit-content",height:"60px",minWidth:"200px"}} key={student._id}>
          <div className="card my-3" style={{height:"65px",backgroundColor:"#181822"}}>
            <div className="card-body p-3 " style={{backgroundColor:"#181822",borderRadius:"15px",position:"relative",color:"white"}} onClick={() => {
              setstu(1);
            }}>
              <div className="d-flex align-items-center">
                <h5 className="card-title me-4 mt-1"><i class="fa-solid fa-user me-3"></i>{student.name}</h5>
                {/* Additional content */}
                {/* <i className="far fa-cross mx-2" ></i> */}
                <i class="far fa-trash-can mx-2" style={{position:"absolute",right:"0px",top:"10px",color:"red",cursor:"pointer"}} onClick={()=>{

const classId = current._id;
const studentId = student._id;

removeStudentFromObject(current, studentId);

removeStudentFromClass(classId, studentId,JSON.parse(localStorage.getItem("token2")))
    .then(data => {
        console.log('Student removed from class:', data);
        fetchstu();
    })
    .catch(error => {
        console.error('Failed to remove student from class:', error);
    });



                }}></i>
              </div>
              {/* Other card content */}
            </div>
          </div>
        </div>
      
       
       
       
       
   
     
        </>);
    }
    return null; // Return null if the student ID doesn't match any student
  })


}
  </div>}
{stu && <div  id='scrolldiv' class="d-flex pb-3 assignment"style={{border:"0px solid grey",height:"50vh",flexDirection:"column",alignItems:"center",overflowY:"auto",backgroundColor:isDarkTheme?"#22222E":"white",overflowX:"hidden",borderRadius:"8px",position:"relative"}}>
  {/* <div className="text-center my-3" style={{width:"100%",height:"30px",position:"absolute"}}>   <h4>Students</h4> </div> */}


 
     

 <div className="mt-3 d-flex  px-3" style={{ width: "100%", border:"0px solid black",height:50+"px",alignItems:"center"}} >
  <h4 style={{fontWeight:"800"}}> <span style={{color:""}}><i class="fa-solid fa-file me-3" style={{color:"#1BAAAB"}}></i>Assignments</span> <i class="fa-solid fa-plus fa-lg  " style={{marginLeft:50+"px",position:"absolute",top:"30px",right:"26px"}} onClick={()=>{
    ref2.current.click();
  }}></i></h4> 
 </div>
   {assignments.length===0 && <div className="text-center d-flex " style={{width:"100%",height:"100%",position:"",border:"0px solid black",alignItems:"center",justifyContent:"center"}}>   <h4>No Assignments</h4> </div>}

      {assignments.map((e)=>{

        return(<>
        <div className="mt-3 pb-3" style={{ width: "90%", border: "0px solid black", overflowY: "hidden" ,minHeight:"100px",backgroundColor:isDarkTheme?"#181822":"#E6EDFA",position:"relative",borderRadius:"15px"}}>
  <h6 className='mx-3 mt-3'><b className='me-5' style={{color:"darkgreen"}}>{e.title}</b></h6>
  <div className='p-3 pt-1' style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
    {e.description}
  </div>
</div>


       
         
        
        </>)
       
      })}
    



      
  </div>}
{stu && <div  id='scrolldiv' class="d-flex pb-3  announcements"style={{border:"0px solid grey",height:"50vh",flexDirection:"column",alignItems:"center",overflowY:"auto",backgroundColor:isDarkTheme?"#22222E":"white",overflowX:"hidden",borderRadius:"8px",position:"relative"}}>
  {/* <div className="text-center my-3" style={{width:"100%",height:"30px",position:"absolute"}}>   <h4>Students</h4> </div> */}


 
     

 <div className="mt-3 d-flex  px-3" style={{ width: "100%", border:"0px solid black",height:50+"px",alignItems:"center"}} >
  <h4> <span style={{color:"",fontWeight:"800"}}><i class="fa-solid fa-bullhorn me-3" style={{color:"#1BAAAB"}}></i>Announcements</span> <i class="fa-solid fa-plus fa-lg " style={{marginLeft:50+"px",position:"absolute",top:"30px",right:"26px"}} onClick={()=>{
    ref3.current.click();
  }}></i></h4> 
 </div>

 {announcements.length===0 && <div className="text-center d-flex " style={{width:"100%",height:"100%",position:"",border:"0px solid black",alignItems:"center",justifyContent:"center"}}>   <h4>No Announcements</h4> </div>}
  

      {announcements.map((e)=>{
          const date = new Date(e.createdAt);

          const timeAgo = getTimeDifference(date);

        return(<>
        <div className="mt-3 pb-3" style={{ width: "90%", border: "0px solid black", overflowY: "hidden" ,minHeight:"100px",backgroundColor:isDarkTheme?"#181822":"#E6EDFA",borderRadius:"15px"}}>
  <h6 className='mx-3 mt-3'><b className='me-5' style={{color:"#0156FD"}}>{e.title}</b></h6>
  <div className='p-3 pt-1' style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
    {e.content}
  </div>
</div>


       
         
        
        </>)
       
      })}
    



      
  </div>}

   
 
 
  
</div>
        
       
        
       
      
        
      
        
       
    </div>    
    </div>


</div>

    </div>
 



      
    </div>
 
<button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
  Launch demo modal
</button>


<div  style={{zIndex:"+100000"}}class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:"fit-content"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{stu && <>Add Student</>}{!stu && <b><i class="fa-solid fa-people-roof me-3"></i>Create a Class</b>} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {!stu &&  <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Subject Code</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='subjectCode' onChange={onChange} value={class1.subjectCode}/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Subject</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name='subject' onChange={onChange} value={class1.subject}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Semester</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} value={class1.semester} name='semester'/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Section</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name='section' onChange={onChange} value={class1.section}/>
  </div>
  
  <button type="submit" class="btn btn-success w-100">ADD</button>
</form>}



        {stu &&  <form onSubmit={handleSubmit2}>
 
  <div style={{height:"300px",overflowY:"auto"}}>
  {stu && studentdetails
        .filter((e) => e.semester === current.semester && e.section === current.section).length===0 && <div className="text-center d-flex " style={{width:"100%",height:"100%",position:"",border:"0px solid black",alignItems:"center",justifyContent:"center"}}>   <h5>No Students Registered For this Section And Semester</h5> </div>}

  
  
{filteredStudents.map((e, index) => (
      <div
        key={index}
        className='studentcard'
        style={{
          width: '96%',
          height: 'fit-content',
          margin: '2%',
          padding: '12px',
          backgroundColor: selectedItems.includes(e._id) ? 'lightgreen' : '#F2F2F2',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '8px',
        }}
        onClick={() => addstu(e)}
      >
        <div>
          {!selectedItems.includes(e._id)&&<img
            src='https://tse2.mm.bing.net/th?id=OIP.eCrcK2BiqwBGE1naWwK3UwHaHa&pid=Api&P=0&h=180' 
            alt=''
            className='mx-3'
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '0px solid black',
            }}
          /> }
          {selectedItems.includes(e._id) && <img
            src='http://clipart-library.com/images_k/green-checkmark-transparent/green-checkmark-transparent-17.png' 
            alt=''
            className='mx-3'
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '0px solid black',
            }}
          /> }
          
        </div>
        <div className='me-5'>
          <h6 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{e.rollno}</h6>
          <h6>{e.name}</h6>
        </div>
      </div>
    ))}
    <button onClick={() => {
      
      // Here you can send the selectedStudentNames array to the backend
    }}>Add</button>
    

  </div>
  
  
  <button type="submit" class="btn btn-primary mt-3 w-100" onClick={()=>{
    const selectedStudentNames = filteredStudents.filter(student => selectedItems.includes(student._id)).map(student => student.name);
    // Now you have an array of selected student names
    console.log("s",selectedStudentNames);
    async function sendPostRequest(url, headers, body) {
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(body)
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const responseData = await response.json();
          return responseData;
      } catch (error) {
          console.error('Error:', error);
          throw error;
      }
  }
  
  // Usage example:
  const url = 'http://localhost:5000/teacher/addStudentToClass';
  const headers = {
      'Accept': '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Authorization': `Bearer ${token_new}` ,
      'Content-Type': 'application/json'
  };
  const body = {
      "classId": current._id,
      "studentNames": selectedStudentNames
  };
  
  sendPostRequest(url, headers, body)
      .then(responseData => {
          console.log('Response:', responseData);
          
      })
      .catch(error => {
          console.error('Error:', error);
          
      });
  }}>ADD</button>
</form>}
     
        
      </div>
     
    </div>
  </div>
</div>


<button type="button" ref={ref2} class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{display:"none"}}>
  Launch demo modal
</button>


<div  style={{zIndex:"+100000"}}class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:"fit-content"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Assign Assignment </h5>
        <button type="button" ref={ref2close} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        { 1 &&  <form  onSubmit={(e)=>{
          e.preventDefault();
          ref2close.current.click();
          addassignment();
          console.log("modal1",modal1);
          const yourDiv = document.getElementById('scrolldiv');

// Scroll the div to its bottom
yourDiv.scrollTop = yourDiv.scrollHeight;

          
        }}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='title' onChange={onChangemodal1} value={modal1.title} />
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Due-Date</label>
    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangemodal1} value={modal1.dueDate} name='dueDate'/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    {/* <input type="text-area" class="form-control" id="exampleInputPassword1" name='description' onChange={onChange} />
     */}
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name='description' onChange={onChangemodal1} value={modal1.description}></textarea>
  </div>
   <br />
  
  <button type="submit" class="btn btn-success" style={{width:"100%"}}>ASSIGN</button>
</form>}

        
      </div>
    </div>
  </div>
</div>

<button type="button" ref={ref3} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" style={{display:"none"}}>
  Launch demo modal
</button>


<div  style={{zIndex:"+100000"}}class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"style={{height:"fit-content"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Announcement </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={ref3close}></button>
      </div>
      <div class="modal-body">
        { 1 &&  <form onSubmit={(e)=>{
          e.preventDefault();
          ref3close.current.click();
          console.log("modal2",modal2);
          // addassignment();
          addannouncement();
        }} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='title' onChange={onChangemodal2}  value={modal2.title}/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    {/* <input type="text-area" class="form-control" id="exampleInputPassword1" name='description' onChange={onChange} />
     */}
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name='description' onChange={onChangemodal2} value={modal2.description}></textarea>
  </div>
   <br />
  
  <button type="submit" class="btn btn-primary" style={{width:"100%"}}>Send</button>
</form>}

        
      </div>
    </div>
  </div>
</div>
  </>)
}

export default Student_attendence
