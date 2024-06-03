import React from 'react'

const HomePage:React.FC = () => {
  return (
    <div className=' w-full h-full p-5 font-thin
    flex items-center justify-center flex-col'>
        <div className=' text-white text-3xl mb-[100px]'>Menu</div>
        <div className=' w-fit h-full '>
            <div className='  flex flex-col w-full h-fit flex-wrap gap-4 bg-white/0 p-5'>
            <div className=' p-4 pt-16 bg-black/20 flex gap-5
                flex-wrap relative rounded-lg items-center justify-center '>
                    <div className=' absolute bg-green-700 px-3
                     top-4 left-2  text-white rounded-xl font-thin'>
                        Add
                    </div>
                    <div onClick={()=>{
                        window.location.href='/addstock'
                    }} className=' hover:cursor-pointer flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] '>
                        <img className=' w-10 mr-3' src="https://i.pinimg.com/564x/77/a3/ab/77a3abc3b5af542e9e9498ab85dd2d64.jpg"
                         alt="+" />
                        <p className=''>Add New Stock</p>
                    </div>
                    <div onClick={()=>{
                        window.location.href='/addcustomer'
                    }} className='hover:cursor-pointer  flex items-center px-3 
                    bg-white h-11 rounded-lg w-[200px] '>
                        <img className=' w-11 mr-3' 
                         src="https://media.istockphoto.com/id/1476256670/vector/3d-add-user-icon-create-group-symbol-new-profile-account-people-icon-and-plus-avatar-human.jpg?s=612x612&w=0&k=20&c=Jg4VlZO_N5bvTnSiXyMcydfGbW7CujuiNYvO7kAqmyM=" 
                        alt="+" />
                        <p className=''>Add Customer</p>
                    </div>
                </div>
                {/* <div className=' p-4 pt-10 bg-black/20 flex gap-2
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
                </div> */}
                <div className=' p-4 pt-16 bg-black/20 flex gap-5
                flex-wrap relative rounded-lg items-center justify-center '>
                    <div className=' absolute bg-green-700 px-3
                     top-4 left-2  text-white rounded-xl font-thin'>
                        Manage
                    </div>
                    <div onClick={()=>{
                        window.location.href='/sell'
                    }} className='  flex items-center px-3 
                        bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                            <img className=' w-10 mr-3' src="https://cdn-icons-png.freepik.com/256/4558/4558759.png?semt=ais_hybrid"
                             alt="💲" />
                        <p className=''>Sell</p>
                    </div>
                    <div  onClick={()=>{
                        window.location.href='/seestock'
                    }} className='  flex items-center px-3 
                        bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                            <img className=' w-10 mr-3' src="https://media.istockphoto.com/id/1414451080/vector/smile-eyes-look-away-emoji-a-sticker-for-a-chat-message.jpg?s=612x612&w=0&k=20&c=CkfS4-p14xKZXtEIXi_U2vrlRRFR7QrVazWr8eYDTqA="
                             alt="💲" />
                        <p className=''>See Stock</p>
                    </div>
                    <div onClick={()=>{
                        window.location.href='/profits'
                    }} className='  flex items-center px-3 
                        bg-white h-11 rounded-lg w-[200px] hover:cursor-pointer'>
                            <img className=' w-10 mr-3' src="https://i.pinimg.com/564x/c0/ca/04/c0ca040c2e49e51c89375201417387ca.jpg"
                             alt="💲" />
                        <p className=''>Profits</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage