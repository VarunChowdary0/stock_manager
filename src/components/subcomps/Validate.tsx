import React, { useEffect } from 'react'

const Validate:React.FC = () => {
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('Ionso_Log');
        if(window.location.pathname!=='/login'){
            if(!isLoggedIn){
                window.location.href='/login';
            }
        }
    })
    return (
    <></>
  )
}

export default Validate