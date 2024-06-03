import React from 'react'

interface currentProps{
    head : string[]
}

const HeaderTable:React.FC<currentProps> = (props) => {
    
  return (
    <thead className="text-xs text-gray-700 
    uppercase bg-gray-50 
    dark:bg-gray-700 dark:text-gray-400">
        <tr>
            {
                props.head.map((ele,idx)=>
                    <th id={`col_head_${idx}`} scope="col" className="px-6 py-3">  
                        {ele}  
                    </th>
                )
            }
        </tr>
    </thead>
  )
}

export default HeaderTable