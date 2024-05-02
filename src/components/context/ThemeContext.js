// ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
var i =0;
var j =0;

export const ThemeProvider = ({ children }) => {
  const [Wtext, setText] = useState('');

// useEffect(()=>{
  
 
//   const text = window.location.href;
//    setText(text);
//   //  console.log(Wtext);


// },[Wtext])
// console.log("window",window.location.href)
// let teacher =0;
const [teacher,setTeacher]=useState(0);

useEffect(()=>{
  const text = window.location.href;
//  setText(text);
if (text.includes("user1") || text.includes("user3")) {
 setTeacher(0);
} else {
  setTeacher(1);
}

},[])



  

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [Event,setevents]=useState([]);
  const [gAnnouncements,SetGAnnouncements]=useState([]);
  const [gNotifications,SetGNotifications]=useState([]);
  const [update,setUpdate]=useState(false);
  const [date,setdate]=useState("");
  const [current, setCurrent] = useState(new Date());
  const [flag,setFlag]=useState(false);
  const[loading_ano,setloading_ano]=useState(false);
  const[loading_noti,setloading_noti]=useState(false);
  const[assignmentsLength,setAssignmentsLength]=useState();

 


  const fetchassignment = async (e) => {

    console.log("e",e);
    console.log("emailid",e.emailid) ;

    console.log("fetchingassignment")
    try {
     
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ';
  
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Content_Type': 'application/json',
          'Authorization': `Bearer ${e.token}`,
        
        }
        // You can include a 'body' field here for POST requests if sending data
      };

      const url = (teacher) ? `https://classroombackend-0a5q.onrender.com/teacher/viewAssignments/${e.emailid}` : `https://classroombackend-0a5q.onrender.com/student/viewAssignments/${e.emailid}`;
  
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log("data",data);
  
  
      if (data.error) {
          console.log(data.error)
      }
      else{
        
    
      
     
      
      // const filteredArray = data.filter(obj => (e.assignments).includes(obj._id));
     
      // SetGNotifications(data);
      setAssignmentsLength(data.length);
      return data;

      }
  
    } catch (error) {
     
      console.error('There was a problem with the fetch operation:', error);
      // Handle error as needed
      return [];
    }
  };


  const fetchannouncement = async (requestBody,token) => {
    try {
       
        // const token2 = (teacher) ? `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQ4NGJmN2U2OGI4MDUwNTcxNmE1OCIsImlhdCI6MTcwNTg3MDUyN30.Nk0EktNhRHXlBTGJgXjozXuIxnUhu-24KHBl838lMpQ` : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjMxZTJiOTRmMjlkNTI5ZjA1MGQ0MyIsImlhdCI6MTcxMDQzMjYxMH0.nFlfZLUgVvlyVX9yBo09yJ-KpipYqLaI-uO0FNKoeII`;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody) // Add the request body here
        };

        const url = (teacher) ? `https://classroombackend-0a5q.onrender.com/teacher/viewAnnouncementsallteacher` : `https://classroombackend-0a5q.onrender.com/student/viewAnnouncementsall`;

        const response = await fetch(url, requestOptions);

        const announce = await response.json();
        
        // alert(announce)
        console.log("announce", announce);

        if (announce.error) {
            // alert("Internal server error");
        } else {
            // console.log("datannounce", announce);
            return announce;
        }

    } catch (error) {
      
      
        console.error('There was a problem with the fetch operation:', error);
        // Handle error as needed
        return [];
    }
};


  useEffect(()=>{
    let a=[];
    let b=[];
    console.log("useeffect");

    if(JSON.parse(localStorage.getItem('token')) && localStorage.getItem('token2') ){
      async function fetchData() {
        setloading_ano(true);
        setloading_noti(true);
        a= await fetchannouncement({emailid:JSON.parse(localStorage.getItem('token')).email},JSON.parse(localStorage.getItem('token2')));
        b= await fetchassignment({emailid:JSON.parse(localStorage.getItem('token')).email,token:JSON.parse(localStorage.getItem('token2'))});
        console.log("assignment",a);
        if(a && b){
          SetGAnnouncements(a);
          SetGNotifications(b);

        }
       
        setFlag(true);
        setloading_ano(false);
        setloading_noti(false);
        }
    
    
        
     fetchData();

    }

 
  
  
  


  },[])

  const checkForUpdates = async (gAnnouncements,gNotifications) => {
    try{
      let newNotifications=[];
    newNotifications = await fetchassignment({emailid:JSON.parse(localStorage.getItem('token')).email,token:JSON.parse(localStorage.getItem('token2'))});
    let newAnnouncements=[];
    newAnnouncements = await fetchannouncement({emailid:JSON.parse(localStorage.getItem('token')).email},JSON.parse(localStorage.getItem('token2')));

    // const update = [...newNotifications, ...newAnnouncements];

    // Check if there are new notifications compared to the previous state
    if (newNotifications && newNotifications.length !== gNotifications.length+j) {
     
        SetGNotifications(newNotifications);
        
      
      
     
      // console.log("updated notifications");
      setAssignmentsLength(newNotifications.length);

      console.log(newNotifications.length);
      console.log(gNotifications.length+j);
      j++;
    
      setUpdate(true);
    } 

    // Check if there are new announcements compared to the previous state
    if (newAnnouncements && newAnnouncements.length !== (gAnnouncements.length+i)) {
      SetGAnnouncements(newAnnouncements);
      console.log(newAnnouncements.length);
      console.log(gAnnouncements.length+i);
      i++;
      
      setUpdate(true);
      
    }
    }
    catch(error){
      console.error('There was a problem with the fetch operation:', error);
      // Handle error as needed
      return [];
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  
  useEffect(() => {
    
    if(flag && localStorage.getItem('token') && localStorage.getItem('token2')){
      const interval = setInterval(() => {
        
        var a = gAnnouncements;
    var b= gNotifications;
    if((localStorage.getItem('token') && localStorage.getItem('token2'))){
      checkForUpdates(a,b);

    }
        
      }, 6000); // Check every 60 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
   
  }, [flag]);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme ,Event,setevents,date,setdate,current,setCurrent,gAnnouncements,gNotifications,SetGAnnouncements,gAnnouncements,SetGNotifications,update,setUpdate,loading_ano,loading_noti,assignmentsLength}}>
      {children}
    </ThemeContext.Provider>
  );
};
