import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-14 bg-[#0f172a] border-b border-black shadow-lg shadow-[]'>
      <div className='flex justify-between h-full items-center px-10 text-white'>
        <div className='cursor-pointer'>
           <h1 className='text-xl font-bold '>E-Cart</h1>
        </div>
        <div className='flex justify-around'>
            <p>Add Product</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
