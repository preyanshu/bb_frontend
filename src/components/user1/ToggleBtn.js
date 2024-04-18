import React, { useContext } from 'react'
import './togglebtn.css'
import { useTheme } from '../context/ThemeContext';
const ToggleBtn = () => {
    const { toggleTheme,isDarkTheme } = useTheme();
  return (<>
  {!isDarkTheme &&  <div  
        >
            <input type="checkbox" id="switch"  style={{display:"none"}} onClick={()=>{
                toggleTheme();
            }}  checked/>
            <label for="switch" className='label2'>Toggle</label>

           
        </div>}
  {isDarkTheme &&  <div  
        >
            <input type="checkbox" id="switch"  style={{display:"none"}} onClick={()=>{
                toggleTheme();
            }}  />
            <label for="switch" className='label2'>Toggle</label>

           
        </div>}
  
  
  
  </>
    
        
      
    
  )
}

export default ToggleBtn
