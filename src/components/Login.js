import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';




const Login = (props) => {
    const {showAlert}=props;
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    const [loading, setLoading] = useState(false) ;
    const[type,setType]=useState("1");
    // let history = useHistory();
    let navigate = useNavigate();
    const onChange2 = (e)=>{
      const selectedValue = e.target.value;
      setType( selectedValue );

  }
    

    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

      const loginUser = async (email, password) => {
        let url = '';

        if (type === "2"||type==="3") {
          url = 'https://classroom-backend-uow6.onrender.com/auth/loginTeacher';
        } else if (type === "1") {
          url = 'https://classroom-backend-uow6.onrender.com/auth/loginStudent';
        }
        const data = {
          email: email,
          password: password,
        };
    
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
         
    
          const json = await response.json();
          setLoading(false);

          if(!json.error){
             localStorage.setItem("token", JSON.stringify(json.logindata.authtoken));
             localStorage.setItem("token2", JSON.stringify(json.token));
            console.log(json);
            alert("Login Successful");
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
            alert(json.error);
          }
          else{
            alert("Something went wrong");
          }
        
       
          
        } catch (error) {
          alert("Internal Server Error");
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        // const { email, password } = credentials;
    
        loginUser(credentials.email, credentials.password);
    }


    return (<>
    
    
    
        
                <div className="flex1 flex2 flex">
                 
                    {!loading && <div>
                        <lottie-player src="https://lottie.host/e1099103-9082-458f-9820-90f8929e924c/Ujk9LgevjJ.json" background="" speed="1" style={{height:300+"px",width:300+"px"}} loop autoplay direction="1" mode="normal"></lottie-player>
                        
                        <div className="text-center"vstyle={{width:100+"vw"}}><h1 className='text-center pb-3'><b>Welcome Back !</b></h1></div></div> }
                 

         {loading && <h1>  LOADING...</h1>}
         {!loading && <div className='login ' style={{width:40+"%",minWidth:270+"px"}} id='spg'>
           
            <form  onSubmit={handleSubmit}>
            <div className="mb-3" style={{}}> 
                    <label htmlFor="name" className="form-label"><b>You are a ?</b></label>
                <select class="form-select"  aria-label="Default select example" style={{border:"2px solid green",borderRadius:0+"px"}} value={type} onChange={onChange2} id="type" name="type" required >
  {/* <option selected>Open this select menu</option> */}
  <option value="1">Student</option>
  <option value="2">Teacher</option>
  <option value="3">Parent</option>
</select></div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><b>E mail</b></label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" id='spg_btn' className="btn btn-success mb-3 mt-3" style={{height:50+"px",width:200+"px"}}><b>Submit</b></button>
            </form>
        </div> }
                    
            
                
               </div>                
         
               </>)
}

export default Login
