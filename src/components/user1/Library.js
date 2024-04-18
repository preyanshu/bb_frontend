import React, { useState } from 'react'
import { useRef ,useEffect} from 'react';
import { Link, useLocation,useNavigate} from "react-router-dom";
import Sidebar_2 from "./Sidebar_2";
import { useContext } from 'react';
import Flagcontext from '../context/notes/Flagcontext';
import Notitoggle from '../Notitoggle';
// import { useTheme } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Library = (props) => {
    const[flag,setflag]=useState(false);
    const {flag2,setflag2}=useContext(Flagcontext);
    const{isDarkTheme}=useTheme();
    const[modal,setmodal]=useState({
      name:"",
      price:"",
      category:"",
      availableQuantity:"",
    }
    );
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
    const[details,setdetails]=useState({user_name:"",no:"",auther:"",book_name:""});
  
    const [books, setBooks] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://lms-backend-final.onrender.com/api/books/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          setBooks(data.books); // Assuming the response has a 'books' property
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData(); // Call the async function
  
      // If you need to clean up after the component, you can return a function from useEffect
      return () => {
        // Cleanup code (if needed)
      };
    }, []);
  
    const ref=useRef();

    const [response, setResponse] = useState(null);

    const makePostRequest = async (isbn) => {
      const url = 'https://lms-backend-final.onrender.com/api/users/borrow';
      const headers = {
        'Accept': '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTAwZTY3NWQ2ZDYyNjJmNGEzYThiMyIsImlhdCI6MTcwNDk4ODI2MywiZXhwIjoxNzA3NTgwMjYzfQ.rSzGykkyt23qZkFxRyCGGgJfM3iNVexvnPTDWdL4tro',
      };
  
      const userId = '65a00e675d6d6262f4a3a8b3'; // You may replace this with a variable if needed
  
      const body = {
        bookIsbn: isbn,
        userId,
      };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
        });
  
        const data = await response.json();
        if(data.book){
          setResponse(data);
          alert("Book Borrowed successfully")
        }
        else{
          alert(data.error)
        }
        
      } catch (error) {
        console.error('Error making POST request:', error);
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



<div className="a shadow " style={{height:60+"vh",width:77+"vw",backgroundColor:"white",borderRadius:13+"px",border:"0px solid black",padding:25+"px",marginTop:30+"px",backgroundColor:isDarkTheme?"#302341":"white",position:"relative"}}>
<div style={{position:"absolute",backgroundColor:"",height:"150px",width:"100%",top:"-80px",left:"0px",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <img src="../BBCrm(5).png" alt="" style={{height:"auto",width:"60%",zIndex:"+100"}}/>
</div>

        <h4 style={{marginTop:15+"px",marginBottom:27+"px"}}><b><i class="fa-solid fa-book-open fa-lg ml-5 me-3 "></i>Books</b></h4>
        {/* <i class="fa-solid fa-check fa-lg" style={{color: "#2dbe45"}}></i> <b>Lorem </b> ipsum dolor <br /> <br /> */}
        {books && books.length===0 && <><h5  className="text-center" style={{width:"100%"}}>No books</h5></>}
        {!books && <><h5  className="text-center" style={{width:"100%"}}>Loading...</h5></>}
        
       
       { books && books.length>0 && <>
        <div style={{height:56+"vh",width:100+"%",overflowY:"scroll",display:"flex",marginLeft:10+"px",marginLeft:"5px"}} className='anobox libbox'>
          
            <div className="a anotitlesmall" style={{border:"0px solid black",height:100+"%"}} >
              
            <div className='my-3 p-1 anotext ' style={{color:"GrayText"}}><b>Title</b></div> <br />
            {books.map((i)=>{
                    return(<>
                        <div className='my-3 p-1 anotext'style={{height:41+"px"}} >{i.name}</div>
                        </>)

                })}
            </div>
            <div className="a classsec libcategorysec" style={{border:"0px solid black",height:100+"%",width:27+"%"}}>
           
            <div className='my-3 p-1 anotext ' style={{color:"GrayText"}}><b>Category</b></div> <br />
            {books.map((i)=>{
                    return(<>
                        <div className='my-3 p-1 anotext' style={{height:41+"px"}}>{i.category}</div>
                        </> )

                })}
            </div>
            <div className="a createdsec libchargesec" style={{border:"0px solid black",height:100+"%",width:27+"%"}}>
       
            <div className='my-3 p-1 anotext ' style={{color:"GrayText"}}><b>Issue Charge(in Rs)</b></div> <br />
            {books.map((i)=>{
              // console.log("i",i);
             
                    return(<>
                        <div className='my-3 p-1 anotext' style={{height:41+"px"}}>{i.price}</div>
                        </>)

                })}
            </div>
            <div className="a anobtn libbtnsec " style={{border:"0px solid black",height:100+"%",width:19+"%"}}>
              
            <>
            <div className='my-3 p-1 anotext' style={{color:"GrayText"}}><b>...</b></div> <br />
                        </>
                {books.map((e)=>{
                    return(<>

                      <div className='my-3 btnlib'><div style={{height:41+"px",backgroundColor:"#11ADAC"}} onClick={()=>{
                          setmodal(e);
                          ref.current.click();
                          
                      }} className="btn btn-primary" >Borrow</div> <div className="btn btn-success"onClick={()=>{
                       
                      
                          // ref.current.click();

                      }} style={{height:41+"px",backgroundColor:"#8F4EC2"}}>View</div></div>
                      </>)

                })}


            </div>

            

        </div> 
       
       
       </>}
       
         
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
        <h5 class="modal-title" id="exampleModalLabel">Details...</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="d-flex" style={{justifyContent:"space-around"}}>
        
        <div> <i class="fa-solid fa-book fa-2xl me-3 mb-5 mt-4"></i>Book name : {modal.name} <br />
        <i class="fa-solid fa-user fa-2xl me-3 mb-5"></i>Quantity : {modal.availableQuantity} <br />
        <i class="fa-solid fa-indian-rupee-sign fa-2xl me-3 mb-5"></i>Issue Charge : {modal.price} rs <br />
        <i class="fa-solid fa-layer-group fa-2xl me-3 mb-5" style={{marginLeft:"-7px"}}></i>Category : {modal.category}<br />
        {/* <i class="fa-solid fa-hashtag fa-2xl me-3 mb-5 "></i>ISBN CODE : book_no */}
        </div>
        </div>

        {/* <div className="d-flex" style={{justifyContent:"space-around"}}>
        <h6 className='me-3 mt-3'>Borrow Duration ?</h6>
        <select class="form-select" aria-label="Default select example" style={{width:"40%"}}>
    
  <option selected>Days</option>
  <option value="7">7 Days</option>
  <option value="15">15 Days</option>
  <option value="30">30 Days</option>
</select>
        </div> */}
        <hr />
          <h5>
          <span style={{color:"red"}}>Note :</span>  You can borrow only one book at a time.
        </h5>
        <div className="w-100 d-flex mt-3 align-items-center justify-content-space-evenly" style={{justifyContent:"space-evenly"}} >
        <button type="button" class="btn btn-success " data-bs-dismiss="modal" style={{width:"48%"}} onClick={()=>{
         makePostRequest(modal.isbn);
         
        }}>Confirm</button>
        <button type="button" class="btn btn-secondary " data-bs-dismiss="modal" style={{width:"48%"}}>Close</button>

        </div>
        
      </div>
      
    </div>
  </div>
</div>
  </>)
}

export default Library
