import React from 'react'

function Input({
    type='text',
    className='',
    height='h-7',
    ...props
}){
    return(
        <>
         <input className={`w-full ${height} ${className}`}{...props}/>
        </>
    )

}

export default Input