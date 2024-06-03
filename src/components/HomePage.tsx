import React from 'react'

const HomePage:React.FC = () => {
  return (
    <div className=' w-full h-full p-5 font-thin
    flex items-center justify-center flex-col'>
        <div className=' text-white text-3xl mb-[100px]'>Menu</div>
        <div className=' w-fit h-full '>
            <div className='  flex flex-col w-full h-fit flex-wrap gap-4 bg-white/0 p-5'>
                <div className=' p-4 pt-10 bg-black/20 flex 
                 flex-wrap
                gap-2 relative rounded-lg'>
                    <div className=' absolute bg-green-700 px-3
                     top-2 left-2  text-white rounded-xl font-thin'>
                        Add
                    </div>
                    <div onClick={()=>{
                        window.location.href='/addstock'
                    }} className=' hover:cursor-pointer flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] '>
                        <p className=''>Add New Stock</p>
                    </div>
                    <div onClick={()=>{
                        window.location.href='/addcustomer'
                    }} className='hover:cursor-pointer  flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] '>
                        <p className=''>Add Customer</p>
                    </div>
                </div>
                <div className=' p-4 pt-10 bg-black/20 flex gap-2
                flex-wrap relative rounded-lg'>
                    <div className=' absolute bg-green-700 px-3
                     top-2 left-2  text-white rounded-xl font-thin'>
                        Edit
                    </div>
                    <div className='  flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                        <p className=''>Edit Product</p>
                    </div>
                    <div className='  flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                        <p className=''>Edit Customer</p>
                    </div>
                    <div className='  flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                        <p className=''>Edit Sale</p>
                    </div>
                </div>
                <div className=' p-4 pt-10 bg-black/20 flex gap-2
                flex-wrap relative rounded-lg'>
                    <div className=' absolute bg-green-700 px-3
                     top-2 left-2  text-white rounded-xl font-thin'>
                        Manage
                    </div>
                    <div onClick={()=>{
                        window.location.href='/sell'
                    }} className='  flex items-center px-3 
                        bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                        <p className=''>Sell</p>
                    </div>
                    <div  onClick={()=>{
                        window.location.href='/seestock'
                    }} className='  flex items-center px-3 
                        bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                        <p className=''>See Stock</p>
                    </div>
                    <div onClick={()=>{
                        window.location.href='/profits'
                    }} className='  flex items-center px-3 
                        bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                        <p className=''>Profits</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage