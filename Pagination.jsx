import React, { useEffect, useState } from 'react'
import fetchProductsHook from '../hooks';
import Product from './Product';

const Pagination = () => {
    const {data , loading } = fetchProductsHook();

    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(data.length / 10);

const handlePageChange =(newPage)=>{
    console.log(newPage)
    if(newPage>=1 && totalPages ){
        setPage(newPage);
        setCurrentPage(newPage)
    }
}
  const onSelectHandler =(page)=>{
    setPage(page)
    setCurrentPage(page)
  }
    // const [products, setProducts] = useState("")
    // // console.log(data,loading)
  return (
    <>
    <div className='fixed top-2 right-2 p-4 rounded-xl text-white z-10 bg-slate-400 cursor-pointer'>
    <div >
        Cart
    </div>
    <div className='w-[40%] h-[20%] bg-slate-700 '>

    </div>
    
    </div>
    <div className='h-full bg-slate-900 text-white p-4 w-full relative'>
   <div className='grid  grid-cols-4 relative gap-2 mb-4'>
   {
        data.length> 0 &&( data.slice(page*10-10,page*10).map((item)=>{
            // console.log(item);
            return <Product  key={item.id} items={item}/>
            
        }))
    }
    </div>
        <div className='relative w-full' >
            {   
                data.length>0 && <div className=' items-center flex w-full'>
                    <span onClick={()=>handlePageChange(page-1)} className=' cursor-pointer'>◀</span>
                    <div className='flex flex-1 justify-around'>
                    {
                    [...Array(Math.ceil(data.length / 10)).keys()].map((i) => {
                        return (
                        <span onClick={()=>onSelectHandler(i+1)} key={i} className={`cursor-pointer p-[2vh] border-[1px] border-gray-700 relative flex flex-1 items-center justify-center ${i+1 === currentPage ? "bg-gray-500":""}`}>
                            {i + 1}
                        </span>
                        );
                    }) 
                    
                    }
                    </div>
                    <span onClick={()=>handlePageChange(page+1)} className='cursor-pointer'>▶</span>
                </div>
            }
        </div>
   
    </div>
    </>
  )
}

export default Pagination