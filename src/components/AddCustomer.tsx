import React, { useState } from 'react'
import { NewCustomer } from '../controllers/AddingController';

const AddCustomer:React.FC = () => {
    const uuid = "";
    const [error,setError] = useState<boolean>(false);
    const [flasher,setflasher] = useState<string>("");

    const [name,setname] = useState<string>("");
    const [email,setemail] = useState<string>("");
    const [phone,setPhone] = useState<number>(0);

    const handleSave = () =>{
        const data = {
            name,
            phone,
            email
        }
        if(name.length>3){
            if(String(phone).length===10){
                console.log(data)
                NewCustomer(name,phone,email)
                .then((res)=>{
                    if(res.status){
                        setflasher(res.data);
                        setTimeout(()=>{
                            setflasher("");
                        },5000)
                    }
                    else{
                        setError(true);
                        setflasher("⚠️ Something went wrong");
                        setTimeout(()=>{
                            setflasher("");
                            setError(false);
                        },5000)
                    }
                })
                .catch((err)=>{
                    console.log(err);
                    setError(true);
                    setflasher("⚠️ Something went wrong");
                    setTimeout(()=>{
                        setflasher("");
                        setError(false);
                    },2000)
                })
            }
        }
    }
  return (
    <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' fixed top-3 left-3 text-blue-400 text-2xl'>
            <a href="/home">Home</a>
        </div>
        <div className=' p-4 rounded-xl h-fit flex
         gap-3 flex-col w-[500px] bg-white'>
            <div className=' flex items-center'>
            <img className=' w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFuaQWiuGJEie7ZxemO4bjBvNAnNzKd3R5A&s"
                 alt="" />
                <p className=' text-2xl pl-5'>Add New Customer</p>
            </div>
            <hr />
            <div className=' bg-[#e2e1e1]/0 p-3 rounded-md pl-3 flex 
             gap-4 flex-col w-full h-full'>
                
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>
                        <img className=' w-10' src="https://cdn-icons-png.flaticon.com/512/6682/6682701.png" alt="" />
                            <p> Name of the Customer</p>
                        </div>
                    <input onChange={(e)=>{
                        setname(e.target.value)
                    }} className=' ml-2 h-[40px] px-2 w-[70%] rounded-xl border border-[#8b8b8b]' 
                    type="text" value={name} placeholder='Enter Name of the Customer'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>
                    <img className=' w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPh70alpTRkIVEVjE5dlDdWqmL_CdnXRcEA&s" alt="" />
                        Phone Number</div>
                    <input
                onChange={(e) => setPhone(Number(e.target.value))}
                className={`ml-2 h-[40px] px-2 w-[70%] 
                rounded-xl border border-[#8b8b8b]
                 ${(String(phone).length>9)?'opacity-100':'opacity-60'} `}
                type="phone"
                placeholder='Enter Phone Number'
                value={phone}
                />
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Email Address</div>
                    <input onChange={(e)=>{
                        setemail(e.target.value)
                    }} className=' ml-2 h-[40px] px-2 w-[70%] rounded-xl border border-[#8b8b8b]' 
                    type="text" value={email} placeholder='Enter Email Address of the Customer'/>
                </div>
            </div>
            <div className=' h-3'>
                <p className={` text-center text-2xl
                ${error?'text-red-800':'text-green-700'} `}>{flasher}</p>
            </div>
            <div className=' flex items-center justify-end'>
                <div onClick={handleSave} className=' hover:cursor-pointer
                 active:scale-75 transition-all px-4 py-1 rounded-xl 
                bg-green-600 text-white'>Save</div>
            </div>
        </div>
    </div>
  )
}

export default AddCustomer