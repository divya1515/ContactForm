import React, { useState } from 'react'
import Button from './Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import imgsrc from '../../contact.png'
import Inputaestrik from './Inputaestrik';
import { FiEye, FiEyeOff } from 'react-icons/fi';
function Contact() {
   const [formData,setformData]=useState({
      name:'',
      email:'',
      phoneno:'',
   })
   const [valid,setvalid]=useState({
      name:true,
      email:true,
      phoneno:true,
      password:true
   })
   const regex = /\d/;
   let [isValid,setisValid]=useState(true)
   let h=0;
   const handleClick=(event)=>{
      event.preventDefault();
      
      if(formData.name=='' || regex.test(formData.name))
      {
        setvalid((prev)=>({
          ...prev,
          name:false
        }));
        isValid=false;
      }
      else{
         setvalid((prev)=>({
            ...prev,
            name:true
          }));
          h=1;
      }
      if(formData.email=='' || !(formData.email.includes('@')))
      {
         setvalid((prev)=>({
            ...prev,
            email:false
          }));
          isValid=false;
          h=0
      }
      else{
         setvalid((prev)=>({
            ...prev,
            email:true
          }));
          h=1
      }
      if(formData.phoneno.length != 10)
      {
         setvalid((prev)=>({
            ...prev,
            phoneno:false
          }));
          isValid=false;
          h=0
      }
      else{
         setvalid((prev)=>({
            ...prev,
            phoneno:true
          }));
          h=1
      }
      (h===1 && (setisValid(true)))
      if(isValid)
      {
         alert("Your details have been successfully submited")
         window.location.reload();
      }
      else
      {
         alert("Fill all feilds correctly ")
        
      }
   }
  
   return (
      <>
         <div className='p-8'>
            <div className='text-5xl font-bold tracking-wider'>CONTACT US</div>
            <p className='pt-3 text-xl'>Lets Connect , We are here to Help,Lets Connect , We are here to Help Lets Connect , We are here to Help Lets Connect , We are here to Help</p>
            <div className='flex justify-between'>
               <form className='pt-9 w-1/3'>
                  <div className='flex justify-between'>
                     <Button text={"VIA SUPPORT CHAT"} Icon={<MdMessage className='mr-2.5' />} />
                     <Button text={"VIA CALL"} Icon={<FaPhoneAlt className='mr-2.5' />} />
                  </div>
                  <Button text={"VIA EMAIL FORM"} textColor='text-black' bgColor='bg-white' Icon={<HiMail className='mr-4.5' />} className=' flex justify-center items-center py-2 m-3 text-lg' style={{ outline: '2px solid black', paddingLeft:'11 rem', width: '100%' }} />
                  <div className='pt-5 space-y-4'>
                     <Inputaestrik label='NAME' id='NAME'name='name' formData={formData}
                     setformData={setformData} className='outline-black outline-4 outline-double' valid={valid}/>
                     <Inputaestrik label='E-MAIL' name='email' id='E-MAIL'
                     formData={formData} setformData={setformData} className='outline-black outline-4 outline-double' valid={valid}/>
                     <Inputaestrik label='PHONE-NO' id='PHONE-NO' name='phoneno'  formData={formData} setformData={setformData}className='outline-black outline-4 outline-double' valid={valid}/>
                     <Inputaestrik type='password' label='PASSWORD' id='PASSWORD' name='password'  formData={formData} setformData={setformData}className='outline-black outline-4 outline-double' valid={valid}
                    />
                  </div>
                  <Button text={"SUBMIT"} className='mt-4' onClick={handleClick}/>
               </form>
               <img src={imgsrc} className="w-1/4 h-1/4 pr-10" 
               style={{ borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}
               alt="CONTACT" />
            </div>
         </div>
      </>
   )
}

export default Contact