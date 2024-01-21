import React from "react";
import Flagcontext from "./Flagcontext";
import { useState } from "react";

const Flagstate =(props)=>{
    const [flag2, setflag2] = useState(true);






    return(
        
            <Flagcontext.Provider value={{flag2,setflag2}}>
                {props.children}
            </Flagcontext.Provider>
        
    )
}

export default Flagstate;