import React, { useEffect, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

function Inputaestrik({
    type='text',
    className='',
    name,
    label,
    id,
    height='h-7',
    formData,
    setformData,
    Icon,
    valid,
    ...props
}){
    const [showpassword,setshowpassword]=useState(false);
    const [weakpassword,setweakpassword]=useState('')
    const handleChange=(event)=>{
        
       setformData((prevData)=>({
        ...prevData,
         [name]:event.target.value
       }))
       if(type==="password")
       {
          const s=event.target.value;
          if(s.length==0)
          {
            setweakpassword('')
          }
          if(s.length<8)
          {
            setweakpassword(true)
          }
          if(s.length>=8 && s.includes('@') || s.includes('$'))
          {
            setweakpassword(false)
          }
          
       }
    }
    const h=0;
    const togglePasswordVisibility = () => {
        setshowpassword(!showpassword);
    }
    
    return(
        <>
           <div>
           <label htmlFor={id} className="flex items-center">
            {label}
            <span className="text-red-500">*</span>
            </label>
            <div className="relative">
            <input 
            onChange={handleChange}
            value={formData[name]}
            name={name}
            id={id} 
            className={`w-full p-3 ${height} ${className}`}{...props}
            {...props}
            type={showpassword ? 'text' : type}
            required/>
              {type === 'password' && (
                    <div 
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={togglePasswordVisibility}
                    >
                        {showpassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                
            </div>
            {type==='password'  && (
                    weakpassword ?(
                        <div className='text-red-900 text-lg font-medium'>The password is weak</div>
                    ):(weakpassword===false?(
                        <div className='text-green-900 text-lg font-medium'>The password is strong </div>
                    ):(
                        <div></div>
                    ))
                    
                )}
            {valid[name]===false && (
                <div className='text-red-900 text-lg font-medium'>This {name} is not valid</div>
            )}
            </div>
        </>
    )
    
}

export default Inputaestrik