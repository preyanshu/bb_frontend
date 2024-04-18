import React from "react";
import Flagcontext from "./Flagcontext";
import { useState } from "react";

const Flagstate =(props)=>{
    const [flag2, setflag2] = useState(true);
    const [dark,setdark]=useState(true);
    
    
    const toggle=()=>{

        if(dark){
            setdark(false);
        }
        else{
            setdark(true);
        }
    
    }






    return(
        
            <Flagcontext.Provider value={{flag2,setflag2,dark,toggle}}>
                {props.children}
            </Flagcontext.Provider>
        
    )
}

export default Flagstate;