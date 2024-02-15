import React from 'react'

function Button({
    text,
    type='button',
    bgColor='bg-slate-950',
    textColor='text-white',
    className='',
    Icon,
    ...props
}){
    return (
        <>
        <button className={`flex items-center justify-between mx-0.5 px-7 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
         {Icon} {text}</button>
        </>
    )
}

export default Button