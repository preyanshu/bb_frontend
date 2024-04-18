import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from './components/Alert';
import Dashboard from "./components/user1/Dashboard";
import Dashboard2 from "./components/user2/Dashboard";
import Notifications from "./components/user1/Notifications";
import Campaigns from "./components/user1/Campaigns";
import Tasks from "./components/user1/Tasks";
import Chats from "./components/user1/Chats";
import ChatProvider from "./components/context/chatcontext";
import Announcement from "./components/user1/Announcement";
// import Calender from "./components/user1/Calender";
import Networks from "./components/user1/Networks";
import Calenderpg from "./components/user1/Calender";
import Library from "./components/user1/Library";
import Profile from "./components/user1/Profile";
import Support from "./components/user1/Support";
import Feedback from "./components/user1/Feedback";
import Student_attendence from "./components/user1/Student_attendence";
import Student_progress from "./components/user1/Student_progress";
import Underprocess from "./components/user1/Underprocess";
import Flagstate from "./components/context/notes/Flagstate";
import AOS from "aos";
import { ThemeProvider } from './components/context/ThemeContext';
import { useLocation } from "react-router-dom";


function App() {

  
  // let teacher;

  // const location=useLocation();
  // // const navigate=useNavigate();

  // if(location.pathname==="/user2/announcement"){
  //   teacher=true;
  // }
  // else if(location.pathname==="/user1/announcement"){
  //   teacher=false;
  // }

  const [alert, setAlert] = useState(null);
  const [displayalert, setdisplayalert] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const showAlert = (message, type)=>{
    setdisplayalert(true)
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
        setdisplayalert(false)
    }, 1000);
}
  







  return (<>
  <Flagstate>
    <ThemeProvider>
  <ChatProvider>
  <Router>
    {/* <div className="App" style={{ width: 70 + "vw", overflowX: "scroll" }}>
      <Chart1 chartData={userData}></Chart1>
    </div> */}
    <div className="app">
    <Sidebar showAlert={showAlert}></Sidebar>
    <Alert alert={alert} displayalert={displayalert}/>
    <Routes>
    <Route exact path="/" element={<Home ></Home>} />
    <Route exact path="/signUp" element={<Signup showAlert={showAlert}></Signup>} />
    <Route exact path="/login" element={<Login showAlert={showAlert}></Login>} />
    <Route exact path="/user1" element={<Dashboard showAlert={showAlert}></Dashboard>} />
    <Route exact path="/user1/notification" element={<Notifications showAlert={showAlert}></Notifications>} />
    <Route exact path="/user1/campaigns" element={<Campaigns showAlert={showAlert}></Campaigns>} />
    <Route exact path="/user1/tasks" element={<Tasks showAlert={showAlert}></Tasks>} />
    <Route exact path="/user1/chats" element={<Chats showAlert={showAlert}></Chats>} />
    <Route exact path="/user1/announcement" element={<Announcement showAlert={showAlert}></Announcement>} />
    <Route exact path="/user1/calender" element={<Calenderpg showAlert={showAlert}></Calenderpg>} />
    <Route exact path="/user1/networks" element={<Networks showAlert={showAlert}></Networks>} />
    <Route exact path="/user1/library" element={<Library showAlert={showAlert}></Library>} />
    <Route exact path="/user1/profile" element={<Profile showAlert={showAlert}></Profile>} />
    <Route exact path="/user1/support" element={<Support showAlert={showAlert}></Support>} />
    <Route exact path="/user1/feedback" element={<Feedback showAlert={showAlert}></Feedback>} />
    <Route exact path="/user2" element={<Dashboard2 showAlert={showAlert}></Dashboard2>} />
    <Route exact path="/user2/notification" element={<Notifications showAlert={showAlert}></Notifications>} />
    <Route exact path="/user2/campaigns" element={<Campaigns showAlert={showAlert}></Campaigns>} />
    <Route exact path="/user2/tasks" element={<Tasks showAlert={showAlert}></Tasks>} />
    <Route exact path="/user2/chats" element={<Chats showAlert={showAlert}></Chats>} />
    <Route exact path="/user2/announcement" element={<Announcement showAlert={showAlert}></Announcement>} />
    <Route exact path="/user2/calender" element={<Calenderpg showAlert={showAlert}></Calenderpg>} />
    <Route exact path="/user2/networks" element={<Networks showAlert={showAlert}></Networks>} />
    <Route exact path="/user2/library" element={<Library showAlert={showAlert}></Library>} />
    <Route exact path="/user2/profile" element={<Profile showAlert={showAlert}></Profile>} />
    <Route exact path="/user2/support" element={<Support showAlert={showAlert}></Support>} />
    <Route exact path="/user2/feedback" element={<Feedback showAlert={showAlert}></Feedback>} />
    <Route exact path="/user2/studentattendence" element={<Student_attendence showAlert={showAlert}></Student_attendence>} />
    <Route exact path="/user2/studentprogress" element={<Student_progress showAlert={showAlert}></Student_progress>} />
    <Route exact path="/user3" element={<Dashboard showAlert={showAlert}></Dashboard>} />
    <Route exact path="/user3/notification" element={<Notifications showAlert={showAlert}></Notifications>} />
    <Route exact path="/user3/campaigns" element={<Campaigns showAlert={showAlert}></Campaigns>} />
    <Route exact path="/user3/tasks" element={<Tasks showAlert={showAlert}></Tasks>} />
    <Route exact path="/user3/chats" element={<Chats showAlert={showAlert}></Chats>} />
    <Route exact path="/user3/announcement" element={<Announcement showAlert={showAlert}></Announcement>} />
    <Route exact path="/user3/calender" element={<Calenderpg showAlert={showAlert}></Calenderpg>} />
    <Route exact path="/user3/networks" element={<Networks showAlert={showAlert}></Networks>} />
    <Route exact path="/user3/library" element={<Library showAlert={showAlert}></Library>} />
    <Route exact path="/user3/profile" element={<Profile showAlert={showAlert}></Profile>} />
    <Route exact path="/user3/support" element={<Support showAlert={showAlert}></Support>} />
    <Route exact path="/user3/feedback" element={<Feedback showAlert={showAlert}></Feedback>} />
    <Route exact path="/user1/airesume" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user3/airesume" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user1/activities" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user2/activities" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user3/activities" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user1/codeiann" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user1/codeian" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user3/codeian" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user1/results" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user3/results" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user1/reports" element={<Underprocess showAlert={showAlert}></Underprocess>} />
    <Route exact path="/user3/reports" element={<Underprocess showAlert={showAlert}></Underprocess>} />
  
              {/* <Route exact path="/chart1" element={<Userpanel showAlert={showAlert}/>} /> */}

    </Routes>
    </div>
    
</Router>

</ChatProvider>
</ThemeProvider>
</Flagstate>
    </> );
}

export default App;
