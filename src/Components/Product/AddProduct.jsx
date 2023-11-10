import React, { useState } from 'react'
import { inputFileds } from '../../Constants/constants'
import Modal from '../Modal/Modal'
import Table from '../Table/Table'

const AddProduct = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [combinations,setCombinations]=useState([])

  return (
    <>
    <div className='mt-12 px-6 md:px-20 text-white'>
        <div>
            <h1 className='font-bold text-lg ps-2'>Add Product</h1>
        </div>
        <div className='border mt-2'></div>
        <div className='grid md:grid-cols-2 md:gap-4 mt-6'>
            {inputFileds.map((label)=><div key={label} className='pb-4 md:pb-0'>
                <p className='text-lg pb-2'>{label}</p>
                <input placeholder={label+'...'} className='w-full bg-transparent border rounded outline-none h-10 px-2 py-1' type="text" />
            </div>)}
        </div>
        <div className='mt-4'>
            <h1  className='text-lg pb-2'>Variants</h1>
            <button onClick={setIsOpen} className='border p-3 hover:border-black transition hover:text-black hover:bg-white duration-300 ease-in-out'>Select varients</button>

        </div>
        
    </div>
    {isOpen&&<Modal close={setIsOpen} combinations={setCombinations}/>}
    {combinations.length>0&&<Table combinations={combinations}/>}
    {combinations.length>0&&<div className='px-4 md:px-20 mt-14'>
        <button className='p-2 border text-white rounded'>Submit</button>
    </div>}
    
    </>
  )
}

export default AddProduct
