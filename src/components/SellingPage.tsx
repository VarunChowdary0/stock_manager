import React, { useState } from 'react'
import { NewSale } from '../controllers/AddingController';

const SellingPage:React.FC = () => {
    const [error,setError] = useState<boolean>(false);
    const [flasher,setflasher] = useState<string>("");


    const [phone_number,setPhone] = useState<number>(0);
    const [product_id,setProduct_id] = useState<string>("");
    const [Quantity,setQuantity] = useState<number>(1);
    const [price_sold,setPriceSold] = useState<number>(0);
    const today = new Date();
    const date_ = `${today.getFullYear()}-${((Number(today.getMonth())+1) > 9)?(today.getMonth()+1):'0'+(today.getMonth()+1) }-${(Number(today.getDate())> 9)?today.getDate():'0'+today.getDate()}`
    const [date,setDate] = useState<any>(date_);

    const [toBill,setBiller] = useState<boolean>(false);

    const handleSave  = async () => {
        // const data = {
        //     phone_number,
        //     product_id,
        //     Quantity,
        //     price_sold,
        //     date
        // }
        if(String(phone_number).length===10){
            if(product_id.length>0){
                if(Quantity!==0){
                    console.log("eed")
                await NewSale(product_id,phone_number,Quantity,price_sold,date)
                    .then((res)=>{
                        if(res.status){
                            setflasher(res.data);
                            setBiller(true);
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
            else{
                console.log("ph")
            }
        }
        // NewSale
    }
  return (
    <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' fixed top-3 left-3 text-blue-400 text-2xl'>
            <a href="/home">Home</a>
        </div>
       { (!toBill) ?
        <div className=' p-4 rounded-xl h-fit  h-fitflex
         gap-3 flex-col w-[500px] bg-white'>
            <div className=' flex items-center'>
                <img className=' w-12' src="https://cdn-icons-png.freepik.com/256/4558/4558759.png?semt=ais_hybrid" alt="" />
                <p className=' text-2xl pl-5'>Sale Records</p>
            </div>
            <hr />
            <div className=' bg-[#e2e1e1]/0 p-3 rounded-md pl-3 flex 
             gap-4 flex-col w-full h-full'>
               
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex items-center gap-2 font-semibold'>
                    <img className=' w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPh70alpTRkIVEVjE5dlDdWqmL_CdnXRcEA&s" alt="" />
                        <div>Customer Phone Number</div>
                    </div>
                    <input 
                    onChange={(e)=>{
                        setPhone(Number(e.target.value));
                    }}
                    value={phone_number} className={` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ String(phone_number).length === 10 ? ' border-green-600':'border-red-700 border-[2px]'}` }
                    type="phone" placeholder='Enter Customer Phone number'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex font-semibold items-center gap-2'>
                        <img className=' w-10' src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_13-512.png"
                         alt="" />
                        <p>Product ID</p>
                    </div>
                    <input value={product_id} 
                    onChange={(e)=>{
                        setProduct_id(e.target.value);
                    }}
                    className={` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ product_id.trim().length>0 ? ' border-green-600':'border-red-700 border-[2px]'}` }
                    type="text" placeholder='Enter Product ID'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                     <div className=' flex font-semibold items-center gap-2'>
                        <img className=' w-10' src="https://cdn-icons-png.freepik.com/512/3920/3920962.png"
                         alt="" />
                        <p>Quantity</p>
                    </div>
                    <input value={Quantity} 
                    onChange={(e)=>{
                        setQuantity(Number(e.target.value))
                    }}
                    min={0}
                    className={` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ Quantity>0 ? ' border-green-600':'border-red-700 border-[2px]'}` }
                    type="number" placeholder='Enter Quantity'/>
                </div>
                <div className={` _block_ flex gap-2 flex-col ${price_sold>0?'':' border-red-500'}`}>
                    <div className=' font-semibold'>
                    <div className=' flex font-semibold items-center gap-2'>
                        <img className=' w-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ofTuLq5TeH3VKgvk0Jgq4Eycb6MpNQ4nOw&s"
                         alt="" />
                        <p>Price Sold</p>
                    </div>
                    </div>
                    <input value={price_sold} min={0}
                    onChange={(e)=>{
                        setPriceSold(Number(e.target.value));
                    }} 
                    className={` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ price_sold > 0 ? ' border-green-600':'border-red-700 border-[2px]'}` }
                    type="phone" placeholder='Enter Price Sold'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex items-center gap-2 font-semibold'>
                        <img className=' w-10' src="https://i.pinimg.com/736x/f6/3c/ea/f63cea7ca3521d0a2b8adbe4f3e10aa5.jpg"
                            alt="" />
                            <p>Date of Sale</p>
                    </div>
                    <input value={date}
                    onChange={(e)=>{
                        setDate(e.target.value);
                    }}
                    className=' ml-2 h-[40px] px-2 w-[70%] rounded-xl border border-[#8b8b8b]' 
                    type="date" placeholder='Date of Sale'/>
                </div>
            </div>
            <div className=' h-3'>
                <p className={` text-center text-2xl ${error?'text-red-800':'text-green-700'} `}>{flasher}</p>
            </div>
            <div className=' flex items-center justify-end'>
            <div onClick={handleSave} className=' hover:cursor-pointer
                 active:scale-75 transition-all px-4 py-1 rounded-xl 
                bg-green-600 text-white'>Save</div>
            </div>
        </div>
        :
        <div className=' _Bill_ w-[400px] max-sm:w-[350px] max-sm:h-[280px] h-[300px] bg-white 
        rounded-xl flex p-7 relative flex-col gap-5 py-10 pt-[60px]'>
            <div className=' w-full absolute top-3 right-6 scale-75 flex items-center justify-center gap-5'>
                <div>
                    <img className=' w-14 rounded-2xl' src="/MyLogo.png" alt="" />
                </div>
                <div className=' h-fit w-fit flex flex-row gap-4 items-center justify-center'>
                    <p className=' text-xl font-semibold
                    text-green-800'>DATE : </p>
                    <p className=' text-xl'>{date_}</p>
                </div>
            </div>
            <div className=' h-fit w-fit flex flex-row gap-4 items-center justify-center'>
                <p className=' text-xl font-semibold
                 text-green-800'>Phone Number </p>
                <p className=' text-xl'>{phone_number}</p>
            </div>
            <div className=' h-fit w-fit  flex flex-row gap-4 items-center justify-center'>
                <p className=' text-xl font-semibold
                 text-green-800'>Product Number</p>
                <p className=' text-xl'>{product_id}</p>
            </div>
            <div className=' h-fit w-fit flex flex-row gap-4 items-center justify-center'>
                <p className=' text-xl font-semibold
                 text-green-800'>Quantity </p>
                <p className=' text-xl'>{Quantity}</p>
            </div>
            <div className=' h-fit w-fit flex flex-row gap-4 items-center justify-center'>
                <p className=' text-xl font-semibold
                 text-green-800'>Price</p>
                <p className=' text-xl'>{price_sold}</p>
            </div>
        </div>}
    </div>
  )
}

export default SellingPage