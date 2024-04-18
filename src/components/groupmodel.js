import React, { useState } from 'react';
import axios from 'axios';
import { useChatContext } from './context/chatcontext';

export const Groupmodel = () => {

    // const user = JSON.parse(localStorage.getItem('token'));

    const {chats, user, setChats} = useChatContext();

    const [loading, setLoading] = useState(false);
    const [userChat, setUserChat] = useState([]);
    const [userToAdd, setUserToAdd] = useState([])
    const [grpName, setGrpName] = useState('');

    const createGroup = async () => {

      if(!grpName || !userToAdd){
        alert("fill all fields")
          return 0;
      }
        try {
            setLoading(true);

            const config = {
              headers: {
                  Authorization: `Bearer ${user.authtoken}`,
              },
          };

          const {data} = await axios.post("https://chatapp-backend-tm8i.onrender.com/api/chat/creategroupchat", {
              name: grpName,
              users: JSON.stringify(userToAdd.map((u) => u._id)),
          }, config);
          
            console.log(data);
          setChats([data, ...chats]);
            setLoading(false); 
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    const handleClick = (user) =>{

      if(userToAdd.includes(user)){
        return [...userToAdd]
      }
       
       setUserToAdd([...userToAdd, user]);
    }


    const deleteuser = (u) =>{
       
       setUserToAdd(userToAdd.filter((x) => x._id !== u._id));
    }

    const handleSearch = async (val) => {

       if(!val){
         return setUserChat([]);
      }
        try {
            setLoading(true);
            console.log(loading)
            const config = {
                headers: {
                    Authorization: `Bearer ${user.authtoken}`,
                },
            };

            const response = await axios.get(`https://chatapp-backend-tm8i.onrender.com/api/user/allusers?search=${val}`, config);
            const { data } = response;
            setUserChat(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <div >
            <div className="d-flex justify-content-center grouphead">
                Create Group Chat
            </div>
            <div className="mt-3">
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Group Name"
                    onChange={(e) => setGrpName(e.target.value)}
                    required
                />
            </div>
            <div className="my-3">
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Search members to add"
                    onChange={(e) => handleSearch(e.target.value)}
                    required
                />
            </div>

            <div>
              { <div className="container">
                  <div className="row">
                {userToAdd.map((u) => {
                  return <div className='my-3 col-12 d-flex px-3' key={u._id}  onClick={()=>{deleteuser(u)}}>
                    <span style={{backgroundColor: "#302341", padding: "5px", color: "white", borderRadius: "4px", cursor: "pointer"}}>{u.name}<i className="fa-solid fa-xmark " style={{color: "red", fontSize: "13px",marginLeft:"8px"}}></i> </span>
                  </div>
                })
              }
            </div>
            </div>
            }
        </div>

            <div style={{ overflowY: 'auto', height: "30%"}}>
                {userChat.length > 0 && (
                    <div className="container">
                        <div className="row">
                            {userChat.slice(0,3).map((user) => (
                                <div
                                    className="col-12 container userSch d-flex align-items-center my-2"
                                    key={user._id}
                                    style={{
                                         cursor: 'pointer',
                                        height: '8vh',
                                        width: '90%',
                                        borderRadius: '8px',
                                    }}
                                    onClick={() =>{handleClick(user)}}
                                >
                                    <strong>{user.name}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <button className="btn mt-3 btn-info" style={{ width: '100%', position: "sticky",backgroundColor:"#8F4FBE",border:"0px" }} onClick={createGroup}>
                Create
            </button>
        </div>
    );
};
