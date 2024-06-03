import React, { useEffect } from 'react'

const Loader:React.FC = () => {
    const isLoggedIn = localStorage.getItem('Ionso_Log');
  
    useEffect(()=>{
      console.log(window.location.pathname)
        if(isLoggedIn){
            window.location.href="/home";
        }
        else{
            window.location.href='/login';
        }
    },[])
  return (
    <div className=' h-full w-full flex items-center justify-center'>
      <p className=' text-white text-4xl'>
         Welcome
      </p>
    </div>
  )
}

export default Loader