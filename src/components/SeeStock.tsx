import React, { useEffect, useState } from 'react'
import HeaderTable from './subcomps/HeaderTableRecords'
import TableRow from './subcomps/TableRowRecords'
import { getAllRecords, getRecordsByDate, getRecordsByKey, getRecordsByProduct } from '../controllers/SeeRecords';

const SeeStock:React.FC = () => {
    const [instock,setInstock] = useState<boolean>(true);
    const [ctry,setCrty] = useState("key");
    const [rows,setRows] = useState<{
        arrival_quantity: number,
        bought_price:number,
        date_of_arrival:string,
        product_desc: string,
        product_id: string,
        selling_price:number ,
        current_quantity:number
      }[]>();

    const [fromdate,setFrom] = useState("");
    const [TOdate,setTO] = useState("");

    const [key,setKey] = useState<string>("");
    const [id,setid] = useState<string>("");
    useEffect(()=>{
        if (ctry ==='key' && key.trim()!==""){
            getRecordsByKey(key)
            .then((res)=>{
                console.log(res.data)
                setRows(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else if (ctry ==='id' && id.trim()!==""){
            console.log('id')
            getRecordsByProduct(id)
            .then((res)=>{
                console.log(res.data)
                setRows(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        else if(ctry==='date' && fromdate!=="" && TOdate!==''){
            getRecordsByDate(fromdate,TOdate)
            .then((res)=>{
                console.log(res.data)
                setRows(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else{
            getAllRecords(instock)
            .then((res)=>{
                console.log(res.data)
                setRows(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },[instock,fromdate,TOdate,key,id]);


  return (
    <div className=' h-full w-full p-5'>
        <div className=' fixed top-3 left-3 text-blue-400 text-2xl'>
            <a href="/home">Home</a>
        </div>
        <div className=' mt-[60px] flex flex-col gap-5'>
            <div className=' h-fit flex flex-col items-center
             w-full bg-white/0 p-3 gap-5'>
            <div onClick={()=>{
                setCrty('stk')
            }} className=' bg-black/0 flex items-center justify-center w-[400px] relative'>
                <div className=' absolute left-3 flex items-center justify-center
                 h-5 w-5 rounded-full bg-white p-1'>
                    {
                        (ctry==='stk')?
                            <div className=' w-full h-full rounded-full bg-fuchsia-600'></div>
                        :
                            <></>
                    }
                </div>
                <div onClick={()=>{
                        setInstock(!instock);
                    }}
                    className={` ${instock ? ' bg-green-500/50':' bg-red-700/50'}
                 w-fit rounded-lg px-4 py-1 hover:cursor-pointer `}>Instock</div>
            </div>
           
            <div onClick={()=>{
                setCrty('key')
            }} className=' bg-black/0 flex items-center justify-center w-[400px] relative'>
                <div className=' absolute left-3 flex items-center justify-center
                 h-5 w-5 rounded-full bg-white p-1'>
                    {
                        (ctry==='key')?
                            <div className=' w-full h-full rounded-full bg-fuchsia-600'></div>
                        :
                            <></>
                    }
                </div>
                <div className=' flex justify-end items-end'>
                    <input className=' ml-9 h-[40px] w-[330px] px-4 rounded-xl' 
                    type="text" onChange={(e)=>{
                        setKey(e.target.value);
                    }} value={key} placeholder='Search by name'/>
                </div>
            </div>

            <div onClick={()=>{
                setCrty('id')
            }} className=' bg-black/0 flex items-center justify-center w-[400px] relative'>
                <div className=' absolute left-3 flex items-center justify-center
                 h-5 w-5 rounded-full bg-white p-1'>
                    {
                        (ctry==='id')?
                            <div className=' w-full h-full rounded-full bg-fuchsia-600'></div>
                        :
                            <></>
                    }
                </div>
                <div className=' flex justify-end items-end'>
                    <input className=' ml-9 h-[40px] w-[330px] px-4 rounded-xl' 
                    type="text" onChange={(e)=>{
                        setid(e.target.value);
                    }} value={id} placeholder='Search product ID'/>
                </div>
            </div>
                
            <div onClick={()=>{
                setCrty('date')
            }}  className=' bg-black/0 flex items-center justify-center w-[400px] relative'>
                <div className=' absolute left-3 flex items-center justify-center
                 h-5 w-5 rounded-full bg-white p-1'>
                    {
                        (ctry==='date')?
                            <div className=' w-full h-full rounded-full bg-fuchsia-600'></div>
                        :
                            <></>
                    }
                </div>
                <div className=' p-4 bg-black/20 rounded-xl scale-90 ml-6 flex gap-5'> 
                    <div className=' h-fit flex  items-center
                            w-full bg-white/10 p-3 gap-7'>
                                <div className=' text-white'>
                                    <p>From Date</p>
                                    <input className=' h-[40px] text-[#464545] w-[150px] px-4 rounded-xl' 
                                    type="date" onChange={(e)=>{
                                        setFrom(e.target.value);
                                    }} value={fromdate} placeholder='From Date'/>
                                </div>
                                <div className=' text-white'>
                                    <p>To Date</p>
                                    <input className=' h-[40px] text-[#464545] w-[150px] px-4 rounded-xl' 
                                    type="date" onChange={(e)=>{
                                        setTO(e.target.value);
                                    }} value={TOdate} placeholder='To Date'/>
                                </div>

                            </div>
                    </div>
            </div>
               
    
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                   <HeaderTable 
                   head={['Product_id','Description','Arrived Quantity','Date','Bought Price','Selling Price','Current Quantity']}/>
                    <tbody>
                        {
                            // use map again
                           rows && rows.length > 0 ?
                           rows.map((ele,idx)=>
                            <TableRow row={ele}/>
                        )
                           :
                           <></>
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default SeeStock