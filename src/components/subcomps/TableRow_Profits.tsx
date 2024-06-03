import React from 'react'

interface currentProps{
    row : {  email: string,
        name:string,
        phone_number:string,
        price_sold: number
        product_id:string,
        profit:number,
        quantity:number,
        sale_id:string,
        sold_date:string}
}
const TableRow_prodfits:React.FC<currentProps> = (props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.sale_id}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.phone_number}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.name}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.email}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.product_id}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.sold_date}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.quantity}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.price_sold}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.profit}
        </th>  
    </tr>
  )
}

export default TableRow_prodfits