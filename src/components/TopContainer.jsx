import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
const TopContainer = ({onDelete}) => {
  return (
    <div className='flex justify-between w-4/5 mx-auto mt-4 mb-4'>
      <input type="text" placeholder="Enter Value ..." className='w-[25rem] border rounded-lg pl-2 pt-1 pb-1 text-gray-600 font-medium'/>
      <div className='h-8 w-8 bg-red-400 flex items-center justify-between rounded-lg cursor-pointer' onClick={onDelete}><MdDeleteOutline  className='mx-auto text-white'/></div>
    </div>
  )
}

export default TopContainer
