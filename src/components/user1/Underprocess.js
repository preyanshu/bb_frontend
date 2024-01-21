import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Underprocess = () => {

  const location=useLocation();
  const pathname=location.pathname;
  const pattern = /^\/user1\/.*/;
const pattern2 = /^\/user2\/.*/;
const pattern3 = /^\/user3\/.*/;
  return (
    <div className=' d-flex ' style={{justifyContent:"center",alignItems:"center",height:"100vh",border:"0px solid black"}}>
        <h1>
        Under Development

{(pattern.test(pathname)||pathname==="/user1") && <Link to='/user1' style={{marginLeft:"20px"}}>Go Back</Link>}
{(pattern2.test(pathname)||pathname==="/user2") && <Link to='/user2' style={{marginLeft:"20px"}}>Go Back</Link>}
{(pattern3.test(pathname)||pathname==="/user3") && <Link to='/user3' style={{marginLeft:"20px"}}>Go Back</Link>}
      
        
        </h1>
    </div>
  )
}

export default Underprocess
