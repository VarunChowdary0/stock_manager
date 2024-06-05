import axios from "axios"
import { url } from "./Server_URL"

export const getAllRecords = (stock:boolean) =>{
    
    const statement = `SELECT * FROM Products WHERE current_quantity ${stock ? '<>' : '='}  0`
    return axios.post(url+'get_sales_records',{
        statement
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

export const getRecordsByDate = (datestart:string,dateend:string) =>{
    const statement = `SELECT * FROM Products WHERE date_of_arrival BETWEEN "${datestart}" AND "${dateend}";` 
    return axios.post(url+'get_sales_records',{
        statement
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

export const getRecordsByKey = (key:string) =>{
    const statement = `SELECT * FROM Products WHERE product_desc REGEXP '${key.toLowerCase()}?';`; 
    return axios.post(url+'get_sales_records',{
        statement
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

export const getRecordsByProduct = (product_id:string) =>{
    const statement = `SELECT * FROM Products WHERE product_id REGEXP '${product_id}?';`; 
    return axios.post(url+'get_sales_records',{
        statement
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

export const getProfits = (datestart:string,dateend:string) =>{
    const statement = `SELECT * FROM
    ( SELECT * FROM Sales S INNER JOIN Customers C ON S.phone_number = C.phone_number ) E0 WHERE E0.sold_date BETWEEN "${datestart}" AND "${dateend}}";` 
    return axios.post(url+'get_sales_records',{
        statement
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
export const getProfitsTotal = (datestart:string,dateend:string) =>{
    const statement = `SELECT   SUM(profit * quantity) AS A0 FROM
    ( SELECT * FROM Sales S INNER JOIN Customers C ON S.phone_number = C.phone_number ) E0 WHERE E0.sold_date BETWEEN "${datestart}" AND "${dateend}}";` 
    return axios.post(url+'get_sales_records',{
        statement
    })
    .then((res)=>{
        // console.log(res.data)
        return {status:true,data:res.data[0]}
    })
    .catch((err)=>{
        console.log(err);
        return {status:false,data:"NA"}
    })
}
