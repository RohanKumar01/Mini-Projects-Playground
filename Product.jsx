import React from 'react'

const Product = ({items}) => {
    // console.log(item)
  return (
    <div className='border-gray-700 gap-2 flex flex-col p-2 border-[1px] rounded-md'>
       <div className='flex justify-center items-center'>
       <img className='h-[40vh] w-[40vh]' src={items.images} alt="productImage" />
       </div>
        <div className='flex items-center  gap-6 justify-center'>
        <span>{items.title}</span>
        <span className='p-2 bg-green-700 rounded-md'>${items.price}</span>
        </div>
        <div className='flex gap-2 items-center justify-center mt-1'>
            <button className='w-[50%] text-md bg-emerald-600'> Add to cart</button>
            <button className='w-[50%] bg-red-700 hidden'>Delete from cart</button>
        </div>
    </div>
  )
} 

export default Product