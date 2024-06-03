import React, { useState } from 'react'
import { login } from '../controllers/Login_controller';

const LoginPage:React.FC = () => {
    const [RememberMe,setRemember] = useState<boolean>(false);

    const Set_Remember = () =>{
        setRemember(!RememberMe);
    }

    const [flasher,setflasher] = useState<string>("");

    const [username,setusername] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [secret,setSecret] = useState<string>("");

    const [loading,setLoad] = useState<boolean>(false);

    const handleLogin = async () =>{
        if(secret.length >= 5 ){
            setLoad(true);
           await login(username,password,secret)
                .then((res)=>{
                    setLoad(false);
                    if(res.status){
                        localStorage.setItem('Ionso_Log',JSON.stringify(true));
                        window.location.href='/home';
                    }
                    else{
                        setflasher("Invalid Credentials");
                        setTimeout(()=>{
                            setflasher("")
                        },1500);
                    }
                })
                .catch((err)=>{
                    setflasher("Invalid Credentials");
                    setLoad(false);
                    setTimeout(()=>{
                        setflasher("");
                    },1500);
                })
        }
    }

  return (
    <div className=' w-full bg-[#000000] text-black font-semibold
    h-screen pl-[170px] pr-[170px] max-md:pl-[50px] max-md:pr-[50px] max-sm:p-0'>
         <div 
        style={{
            // backgroundImage: "url('https://i.postimg.cc/sxnB6nsN/Screenshot-2024-05-16-125253.png')",
            // backgroundImage: "url('https://i.postimg.cc/kXkS0d5C/Screenshot-2024-05-16-213756.png')",
            backgroundImage: "url('https://i.postimg.cc/X7HgzPRc/Screenshot-2024-05-16-214249.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
        className=' h-full  max-sm:scale-[0.8] shadow-lg w-full flex 
        // bg-gradient-to-r from-[#958dcc] from-10% via-[#c197d4] via-30% to-[#fbefd5] to-90% 
        gap-4 flex-col items-center pt-[70px]'>
            <div className=' rounded-lg bg-yellow-200 text-sm px-3 py-1 '>Please Login</div>
            <div className='text-4xl '>
            Welcome Back!</div>
            <div className=' mt-7 mr-10 bg-black/0 
                    w-[420px] h-[500px] px-14 
                    flex flex-col '>
                        <div className=' __block_1 h-[65%] mt-10 flex flex-col'>
                            <div className=' _mail_ flex flex-col gap-2'>
                                <div className=' pl-4'>
                                    Username 
                                </div>
                                <input className=' w-full px-5 py-2 outline-none
                                 rounded-xl font-thin border active:border-[#9c69e0]
                                 hover:border-[#9c69e0]  hover:cursor-pointer tracking-widest'
                                 onChange={(e)=>{
                                    setusername(e.target.value)
                                 }}
                                 type="text" placeholder='USERNAME' value={username}/>
                            </div>
                            <div className=' mt-2 _mail_ flex flex-col gap-2'>
                                <div className=' pl-4'>
                                    Password
                                </div>
                                <input className=' w-full px-5 py-2 outline-none
                                 rounded-xl font-thin border active:border-[#9c69e0]
                                 text-[#726b73]
                                 hover:border-[#9c69e0] tracking-[3px]  hover:cursor-pointer'
                                 onChange={(e)=>{
                                    setPassword(e.target.value)
                                 }}
                                 type="Password" placeholder='Enter Password' value={password} />
                            </div>
                            <div className=' bg-white/0 w-full flex px-2
                             justify-between text-sm mt-3 '>
                                <div onClick={Set_Remember}
                                 className=' hover:cursor-pointer 
                                flex items-center justify-center gap-2'>
                                    <div className=' h-5 p-[3px] w-5 rounded-[4px] border
                                     border-[#cdc2c2] bg-white'>
                                        {
                                            RememberMe &&
                                            <div   style={{
                                                backgroundColor : "#c1d04e"
                                            }} 
                                            className=' h-full w-full  '></div>  
                                        }
                                    </div>
                                    <p className=' text-[#817281]/70 font-normal'>Remember me</p>
                                </div>
                                <div>
                                    <p className=' hover:cursor-pointer
                                     hover:underline'>Forgot Password?</p>
                                </div>
                            </div>
                            <div className=' mt-8'>
                                {
                                    loading ? 
                                    <p className=' text-center'>Loading...</p>
                                    :
                                    <div onClick={handleLogin} className={` bg-black px-3 py-2 text-center font-normal
                                    text-white rounded-xl hover:cursor-pointer
                                    transition-all ${secret.length>=5 ? ' opacity-100 active:scale-95':' opacity-50'}`}>
                                        Login
                                    </div>
                                }
                            </div>
                        </div>
                        <div className=' __block_2  h-[35%] bg-red-400/0 flex flex-col'>
                            <div className=' flex gap-5 items-center justify-center font-thin'>
                                <div className=' border w-[100px] border-t-1 border-[#caaae56b]'></div>
                                <p className=' text-[#545252]'>or</p>
                                <div className=' border w-[100px] border-t-1 border-[#caaae56b]'></div>
                            </div>
                        <div className=' mt-8 flex gap-3 items-center justify-center h-11 rounded-xl bg-white'>
                        <input className=' w-full px-5 py-2 outline-none
                                 rounded-xl font-thin hover:cursor-pointer tracking-widest'
                                 onChange={(e)=>{
                                    setSecret(e.target.value)
                                 }}
                                 type="password" placeholder='USER KEY' value={secret}/>
                        </div>
                        <p className=' text-center text-red-700 mt-3'>{flasher}</p>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage