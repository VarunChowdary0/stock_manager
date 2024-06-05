import React, { useState } from 'react'
import { NewStock } from '../controllers/AddingController';

const AddStock:React.FC = () => {

    const today = new Date();
    const date = `${today.getFullYear()}-${((Number(today.getMonth())+1) > 9)?(today.getMonth()+1):'0'+(today.getMonth()+1) }-${(Number(today.getDate())> 9)?today.getDate():'0'+today.getDate()}`


    const [product_id,setProduct_id] = useState<string>("");
    const [description,setDescription] = useState<string>("");
    const [ArrivalQuantity,setArrivalQuantity] = useState<number>(1);
    const [ArrivalDate,setArrivalDate] = useState<any>(date);
    const [boughtPrice,setBougthPrice] = useState<number>(NaN);
    const [sellPrice,setSellprice] = useState<number>(NaN);
   
    const [Safe_on,setSafe] = useState<boolean>(false);
    const handleSave = async () =>{
        if(!Safe_on && ( product_id.trim() !=="" && description.trim() !=="" && boughtPrice>0 && sellPrice>boughtPrice )){
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
                    setSafe(true)
                    setTimeout(()=>{
                        setflasher("");
                        setProduct_id("");
                        setDescription("");
                        setArrivalQuantity(1);
                        setBougthPrice(NaN);
                        setSellprice(NaN);
                        setSafe(false);
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

    const [error,setError] = useState<boolean>(false);
    const [flasher,setflasher] = useState<string>("");
  return (
    <div className=' h-full w-full flex items-center justify-center'>
        <div className=' fixed  top-3 left-3 text-blue-400 text-2xl'>
            <a href="/home">Home</a>
        </div>
        <div className=' mt-[0px] max-sm:mt-[70px] p-4 rounded-xl h-fit flex
         gap-3 flex-col w-[500px] bg-white scale-90 max-sm:scale-95'>
            <div className=' flex items-center'>
            <img className=' w-10 mr-3' src="https://i.pinimg.com/564x/77/a3/ab/77a3abc3b5af542e9e9498ab85dd2d64.jpg"
                         alt="+" />
                <p className=' text-2xl pl-5'>Add New Stock</p>
            </div> 
            <hr />
            <div className=' bg-[#e2e1e1]/0 p-3 rounded-md pl-3 flex 
             gap-4 flex-col w-full h-full'>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex font-semibold items-center gap-2'>
                        <img className=' w-10' src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_13-512.png"
                         alt="" />
                        <p>Product ID</p>
                    </div>
                    <input onChange={(e)=>{
                        setProduct_id(e.target.value)
                    }} className= {` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ product_id.trim().length > 0 ? ' border-green-600':'border-red-700 border-[2px]'}` } 
                    type="text" value={product_id} placeholder='Enter Product ID'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'>
                    <div className=' flex font-semibold items-center gap-2'>
                        <img className=' w-10' src="https://cdn-icons-png.flaticon.com/512/1356/1356585.png"
                         alt="" />
                        <p>Description</p>
                    </div>
                    </div>
                    <input className=' ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]' 
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value.toLowerCase());
                    }}
                    type="text" placeholder='Enter Description'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' font-semibold'></div>
                    <div className=' flex font-semibold items-center gap-2'>
                        <img className=' w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIAzGr6Gg9tpreAjT1w892GYTKIRjoi4h_w&s"
                         alt="" />
                        <p>Arrival Quantity</p>
                    </div>
                    <input className= {` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ ArrivalQuantity > 0 ? ' border-green-600':'border-red-700 border-[2px]'}` }
                    value={ArrivalQuantity}
                    onChange={(e)=>{
                        setArrivalQuantity(Number(e.target.value));
                    }}
                    type="number" placeholder='Enter Arrival Quantity'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex items-center gap-2 font-semibold'>
                        <img className=' w-10' src="https://i.pinimg.com/736x/f6/3c/ea/f63cea7ca3521d0a2b8adbe4f3e10aa5.jpg"
                            alt="" />
                            <p>Arrival Date</p>
                    </div>
                    <input className={` ml-2 h-[40px] px-2 w-[70%]
                     rounded-xl border border-[#8b8b8b] `}
                    value={ArrivalDate}
                    onChange={(e)=>{
                        setArrivalDate(e.target.value);
                    }}
                    type="date" placeholder='Enter Date of Arrival'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex items-center gap-2 font-semibold'>
                        <img className=' w-10' src="https://thumbs.dreamstime.com/b/price-tag-icon-retail-sale-promotion-creative-element-design-stock-market-icons-collection-pixel-perfect-price-tag-icon-170316963.jpg"
                            alt="" />
                            <p>Bought Price</p>
                    </div>
                    <input className= {` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b]
                     ${ boughtPrice > 0 ? ' border-green-600':'border-red-700 border-[2px]'}` } 
                    value={boughtPrice}
                    onChange={(e)=>{
                        setBougthPrice(Number(e.target.value))
                    }}
                    type="number" placeholder='Enter Bought Price'/>
                </div>
                <div className=' _block_ flex gap-2 flex-col'>
                    <div className=' flex items-center gap-2 font-semibold'>
                        <img className=' w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9lBBBsrq4Bxfvn6_g37WoJClcqTZosMfRQ&s"
                            alt="" />
                            <p>Selling Price</p>
                    </div>                    
                    <input className={` ml-2 h-[40px] px-2 w-[70%] 
                    rounded-xl border border-[#8b8b8b] 
                    ${(sellPrice>boughtPrice)?' border-green-700':' border-red-700 border-[2px]'}`} 
                    value={sellPrice}
                    min={1}
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