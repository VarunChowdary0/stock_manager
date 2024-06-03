import React, { useEffect, useState } from 'react'
import HeaderTable from './subcomps/HeaderTableRecords'
import TableRow from './subcomps/TableRowRecords'
import { getProfits, getProfitsTotal } from '../controllers/SeeRecords';
import TableRow_prodfits from './subcomps/TableRow_Profits';

const SeeProfits:React.FC = () => {
 
    const today = new Date();
    const date = `${today.getFullYear()}-${((Number(today.getMonth())+1) > 9)?(today.getMonth()+1):'0'+(today.getMonth()+1) }-${(Number(today.getDate())> 9)?today.getDate():'0'+today.getDate()}`
    console.log(date) 
    const [profitVal,setPofival] = useState<number>();
    const [fromdate,setFrom] = useState(date);
    const [TOdate,setTO] = useState(date);

    const [rows2,setRows] = useState<{  email: string,
                                        name:string,
                                        phone_number:string,
                                        price_sold: number
                                        product_id:string,
                                        profit:number,
                                        quantity:number,
                                        sale_id:string,
                                        sold_date:string}[]>([])
    useEffect( ()=>{
        getProfits(fromdate,TOdate)
        .then((res)=>{
            console.log(res.data);
            setRows(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });


        getProfitsTotal(fromdate,TOdate)
        .then((res)=>{
            console.log(res.data.A0);
            setPofival(res.data.A0)
        })
        .catch((err)=>{
            console.log(err);
        });

    },[fromdate,TOdate])
  return (
    <div className=' h-fit w-full p-5'>
    <div className=' fixed top-3 left-3 text-blue-400 text-2xl'>
        <a href="/home">Home</a>
    </div>
    <div className=' mt-[60px] flex flex-col gap-5'>
        <div className=' h-fit flex  items-center
         w-full bg-white/10 p-3 gap-7'>
            <div className=' text-white'>
                <p>From Date</p>
                <input className=' h-[40px] text-[#464545] w-[150px] px-4 rounded-xl' 
                type="date" value={fromdate}
                onChange={(e)=>{
                    setFrom(e.target.value);
                }} placeholder='From Date'/>
            </div>
            <div className=' text-white'>
                <p>To Date</p>
                <input className=' h-[40px] text-[#464545] w-[150px] px-4 rounded-xl' 
                type="date" value={TOdate} 
                onChange={(e)=>{
                    setTO(e.target.value);
                }} placeholder='To Date'/>
            </div>


        </div>
        <div className=' text-white text-3xl ml-14 w-[150px]'> Rs.<span className=' ml-1 text-green-800'>{profitVal}</span>
        </div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <HeaderTable 
               head={['Sale ID','Customer number','Customer Name',"Customer Mail",'Product ID','Date','Quantity','Price Sold','Profit']}/>
                <tbody>
                    {
                        rows2 && rows2.map((ele,idx)=>
                        <TableRow_prodfits row={ele}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default SeeProfits