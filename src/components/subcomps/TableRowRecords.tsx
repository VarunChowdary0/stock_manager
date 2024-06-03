import React from 'react'

interface currentProps{
    row : {
      arrival_quantity: number,
      bought_price:number,
      current_quantity:number,
      date_of_arrival:string,
      product_desc: string,
      product_id: string,
      selling_price:number 
    }
}
const TableRow:React.FC<currentProps> = (props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.product_id}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.product_desc}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.arrival_quantity}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.date_of_arrival}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.bought_price}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.selling_price}
        </th>  
        <th  scope="row" className="px-6 py-4 font-medium 
                text-gray-900 whitespace-nowrap dark:text-white">
                        {props.row.current_quantity}
        </th>  
    </tr>
  )
}

export default TableRow