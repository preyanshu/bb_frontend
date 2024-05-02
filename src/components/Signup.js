// import React from 'react'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import "./signup.css";
import { toast } from 'react-toastify';

const Signup = (props) => {
    const {showAlert}=props
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:"",type:"",rollno:"",semester:"",section:"",branch:"",childEmail:""}) 
    const[type,setType]=useState("1");
    const [loading, setLoading] = useState(false) 
    
    let navigate = useNavigate();

    const handleSubmit = async (event) => {

      event.preventDefault();
      setLoading(true);
      // alert
      let url = '';

if (type === "2"||type==="3") {
  url = 'https://classroombackend-0a5q.onrender.com/auth/registerTeacher';
} else if (type === "1") {
  url = 'https://classroombackend-0a5q.onrender.com/auth/registerStudent';
}
        if (credentials.password !== credentials.cpassword) {
            setLoading(false);
            // alert("password did not match");
            toast.error("password did not match");
            return 0;
          }
      
          try {
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                rollno:(credentials.rollno).toUpperCase(),
                semester:(credentials.semester).toUpperCase(),
                section:(credentials.section).toUpperCase(),
                branch:(credentials.branch).toUpperCase(),
                childEmail:credentials.childEmail

                
              }),
            });
            const json = await response.json();
      
            console.log(json);
            setLoading(false);
      
            if(!json.error){
              localStorage.setItem("token", JSON.stringify(json.signupData
              ));
              localStorage.setItem("token2", JSON.stringify(json.token));
             console.log(json);
            //  alert("Registration Successful");
             toast.success("Registration Successful");
             if(type==="1"){
               navigate('/user1');
             }
             else if(type==="2"){
               navigate('/user2');
             }
             else if(type==="3"){
               navigate('/user3');
             }
 
           }
           else if(json.error){
            //  alert(json.error);
             toast.error(json.error);
            
           }
           else{
            //  alert("Something went wrong");
             toast.error("Something went wrong");
           }
           setLoading(false);
        
           
         } catch (error) {
          setLoading(false);
          //  alert("Internal Server Error");
           toast.error("Internal Server Error");
         }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const onChange2 = (e)=>{
        const selectedValue = e.target.value;
        setType( selectedValue );

    }


  return (
    <div id='signuppage' style={{backgroundColor:"#181822",top:"0px",position:"absolute",color:"white"}}>
        <div className='sidetextbar2'>
            {/* <img src="cartoon-os-upgrade.png"alt="" /> */}
            <dotlottie-player src="https://lottie.host/ab3e573b-6a8a-4639-9f8d-529866fe410e/YICqDJBGxH.json" background="transparent" speed="1"  loop autoplay  style={{width:35+"vw",height:"auto",minWidth:270+"px",marginLeft:10+"px"}} ></dotlottie-player>
        </div>

    <div className='container' id='spg' style={{color:"white"}}>
        {!loading &&  <h1 className='text-center pb-3'><b>Welcome!</b></h1>}
           
            {loading && <h1 className='text-center'>LOADING..</h1>}
            {!loading && <form  onSubmit={handleSubmit}>
            <div className="mb-3 d-flex" style={{justifyContent:"space-between"}}>
                <div style={{width:60+"%",display:"inline-block"}}>
                <label htmlFor="name" className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp"  style={{borderRadius:"8px"}} minLength={4} />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="ura" style={{}}> 
                    <label htmlFor="name" className="form-label"><b>You are a ?</b></label>
                <select class="form-select"  aria-label="Default select example" style={{border:"2px solid green",borderRadius:8+"px"}} value={type} onChange={onChange2} id="type" name="type" required >
  {/* <option selected>Open this select menu</option> */}
  <option value="1">Student</option>
  <option value="2">Teacher</option>
  <option value="3">Parent</option>
</select></div>
               
                </div>


                {type==="3"&& <>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><b>Child Email</b></label>
                    <input type="email" className="form-control" value={credentials.childEmail} onChange={onChange} id="childEmail" name="childEmail" aria-describedby="emailHelp" style={{borderRadius:"8px"}} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                
                
                </>}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><b>Email address</b></label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" style={{borderRadius:"8px"}} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
            {type=="1" && <div className="mb-3 d-flex type1box" style={{justifyContent:"space-between"}}>
                <div style={{display:"inline-block"}}>
                <label htmlFor="name" className="form-label"><b>Your RollNo?</b></label>
                    <input type="text" className="form-control" value={credentials.rollno} onChange={onChange} id="rollno" name="rollno" aria-describedby="emailHelp"  style={{borderRadius:"8px"}} maxLength={8}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div style={{}}> 
                    <label htmlFor="name" className="form-label"><b>Section :</b></label>
                    <input type="text" className="form-control" value={credentials.section} onChange={onChange} id="section" name="section" aria-describedby="emailHelp" maxLength={1} style={{borderRadius:"8px"}} minLength={1} />
               </div>
                <div style={{}}> 
                    <label htmlFor="name" className="form-label"><b>Semester :</b></label>
                    <input type="number" className="form-control" value={credentials.semester} onChange={onChange} id="semester" name="semester" aria-describedby="emailHelp"  max={8} style={{borderRadius:"8px"}}/>
               </div>
                <div style={{}}> 
                    <label htmlFor="name" className="form-label"><b>Branch :</b></label>
                    <input type="text" className="form-control" value={credentials.branch} onChange={onChange} id="branch" name="branch" aria-describedby="emailHelp" style={{borderRadius:"8px"}} maxLength={3} />
               </div>
               
                </div>}

             
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required style={{borderRadius:"8px"}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
                    <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required style={{borderRadius:"8px"}}/>
                </div>

                <button type="submit mt-3" className="btn btn-success" id="spg_btn" style={{height:50+"px",width:200+"px",marginTop:10+"px"}}><b>Submit</b></button>
            </form>}
            
        </div>
        </div>
  )
}

export default Signup
