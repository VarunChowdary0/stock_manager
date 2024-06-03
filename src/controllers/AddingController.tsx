import axios from "axios"
import { url } from "./Server_URL"
import { v4 as uuidv4 } from 'uuid';


export const NewStock = (
    product_id:string,
    description:string,
    ArrivalQuantity:number,
    ArrivalDate:any,
    boughtPrice:number|undefined,
    sellPrice:number|undefined) =>{
    const data = {
        product_id,
            description,
            ArrivalQuantity,ArrivalDate,
            boughtPrice,
            sellPrice
    }
    return axios.post(url+'addstock',data)
    .then((res)=>{
        console.log(res.data)
        return {status:true,data:res.data}
    })
    .catch((err)=>{
        console.log(err);
        return {status:false,data:"NA"}
    })
}

export const NewCustomer = (
    name:string,
    phone:number,
    email:string 
)=>{
   return axios.post(url+"addcustomer",{
        name,phone,email
    })
    .then((res)=>{
        console.log(res.data)
        return {status:true,data:res.data}
    })
    .catch((err)=>{
        console.log(err);
        return {status:false,data:"NA"}
    })
}

export const NewSale = (
    product_id:string,
    phone_number:number,
    Quantity:number,
    price_sold:number,
    date:string
) =>{
    const uniqueId = uuidv4();
    console.log(product_id)
    return axios.post(url+'sell',{
        sale_id : uniqueId,
        phone_number,
        product_id,
        Quantity,
        date,
        price_sold
    })
    .then((res)=>{
        console.log(res.data)
        return {status:true,data:res.data}
    })
    .catch((err)=>{
        console.log(err);
        return {status:false,data:"NA"}
    })

}