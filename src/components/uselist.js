import React from 'react'




export const Userlist = ({u, handleClick}) => {

 
  return (
    <div className="container my-3" style={{overflowY: "auto"}} >
      <div className='row'>
          <div className=" d-flex align-items-center py-2 col-12 userSch" onClick={handleClick}>
            <img src={u.pic} style={{width: "50px", borderRadius: "50%"}} alt="" />
            <div className='mx-2'>
             <div> <strong>{u.name}</strong></div>
            </div>
              
          </div>
      </div>
    </div>
  )
}
