import React, { useState } from 'react'
import { NewStock } from '../controllers/AddingController';

const AddStock:React.FC = () => {

    const today = new Date();
    const date = `${today.getFullYear()}-${((Number(today.getMonth())+1) > 9)?(today.getMonth()+1):'0'+(today.getMonth()+1) }-${(Number(today.getDate())> 9)?today.getDate():'0'+today.getDate()}`


    const [product_id,setProduct_id] = useState<string>("");
    const [description,setDescription] = useState<string>("");
    const [ArrivalQuantity,setArrivalQuantity] = useState<number>(1);
    const [ArrivalDate,setArrivalDate] = useState<any>(date);
    const [boughtPrice,setBougthPrice] = useState<number>();
    const [sellPrice,setSellprice] = useState<number>();
   
    const handleSave = async () =>{
        setflasher("Loading... 🔃")
        const Data = {
            product_id,
            description,
            ArrivalQuantity,ArrivalDate,
            boughtPrice,
            sellPrice
        }  
        console.log(Data);
    await NewStock(product_id,description,ArrivalQuantity,ArrivalDate,boughtPrice,sellPrice)
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

    const [error,setError] = useState<boolean>(false);
    const [flasher,setflasher] = useState<string>("");
  return (
    <div className=' h-full w-full flex items-center justify-center'>
        <div className=' fixed  top-3 left-3 text-blue-400 text-2xl'>
            <a href="/home">Home</a>
        </div>
        <div className=' mt-[50px] max-sm:mt-[100px] p-4 rounded-xl h-fit flex
         gap-3 flex-col w-[500px] bg-white'>
            <div className=''>
                <p className=' text-2xl pl-5'>Add New Stock</p>
            </div> 
            <div className=' bg-[#e2e1e1] p-3 rounded-md pl-3 flex 
             gap-4 flex-col w-full h-full'>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Product ID</div>
                    <input onChange={(e)=>{
                        setProduct_id(e.target.value)
                    }} className=' ml-2 h-[40px] px-2 w-[70%]
                     rounded-xl border border-[#8b8b8b]' 
                    type="text" value={product_id} placeholder='Enter Product ID'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Description</div>
                    <input className=' ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]' 
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                    type="text" placeholder='Enter Description'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Arrival Quantity</div>
                    <input className=' ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]' 
                    value={ArrivalQuantity}
                    onChange={(e)=>{
                        setArrivalQuantity(Number(e.target.value));
                    }}
                    type="number" placeholder='Enter Arrival Quantity'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Date of Arrival</div>
                    <input className=' ml-2 h-[40px] px-2 w-[70%]
                     rounded-xl border border-[#8b8b8b]' 
                    value={ArrivalDate}
                    onChange={(e)=>{
                        setArrivalDate(e.target.value);
                    }}
                    type="date" placeholder='Enter Date of Arrival'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Bought Price</div>
                    <input className=' ml-2 h-[40px] px-2 w-[70%] rounded-xl 
                    border border-[#8b8b8b]' 
                    value={boughtPrice}
                    onChange={(e)=>{
                        setBougthPrice(Number(e.target.value))
                    }}
                    type="number" placeholder='Enter Bought Price'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>Selling Price</div>
                    <input className=' ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]' 
                    value={sellPrice}
                    onChange={(e)=>{
                        setSellprice(Number(e.target.value));
                    }}
                    type="number" placeholder='Enter Selling Price'/>
                </div>
            </div>
            <div className=' h-3'>
                <p className={` text-center text-2xl ${error?'text-red-800':'text-green-700'} `}>{flasher}</p>
            </div>
            <div className=' font-semibold flex items-center justify-end'>
                <div onClick={handleSave} className=' hover:cursor-pointer
                 active:scale-75 transition-all px-4 py-1 rounded-xl 
                bg-green-600 text-white'>Save</div>
            </div>
        </div>
    </div>
  )
}

export default AddStock