import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { colors, size } from '../../Constants/constants'
import { createCominations } from '../../Func'

const Modal = ({close,combinations}) => {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setselectedSizes] = useState([])
    function addClr(clr) {
        console.log("dd");
        if (selectedColors.includes(clr) || clr === 'Select Color') return
        setSelectedColors([...selectedColors, clr])
    }
    function addSize(size) {

        if (selectedSizes.includes(size) || size === 'Select Size') return
        setselectedSizes([...selectedSizes, size])
    }
    function removeClr(clr){
        setSelectedColors(selectedColors.filter(e=>e!=clr))
    }
    function removeSize(size){
        setselectedSizes(selectedSizes.filter(e=>e!=size))
    }
    function submit(){
        combinations(createCominations(selectedColors,selectedSizes))
        close(false)
    }

    return (
        <div className='w-full h-[90vh] bg-transparent absolute  top-14 flex justify-center items-center px-4 md:px-20'>
            <div className='w-full md:w-3/4 lg:w-2/4 min-h-60 bg-[#243e7c] rounded'>
                <div className='w-full flex justify-end p-3 '>
                    <FontAwesomeIcon className='cursor-pointer text-white' onClick={()=>close(false)} icon={faClose} />
                </div>
                <div className=' md:px-8 px-2 text-white'>
                    <div className='flex gap-3 justify-center text-white '>
                        <div className='flex gap-3'>
                            <p>Color :</p>
                            <select name="" id="" onChange={(e) => addClr(e.target.value)} className='bg-transparent outline-none' >
                                <option value={null} className='bg-black'>Select Color</option>
                                {colors.map((color, i) => <>
                                    <option key={i} className='bg-black'>{color}</option>
                                </>)}
                            </select>
                        </div>
                        <div className='flex gap-3'>
                            <p>Size :</p>

                            <select name="" id="" onChange={(e) => addSize(e.target.value)} className='bg-transparent outline-none' >
                                <option value={null} className='bg-black'>Select Size</option>
                                {size.map((color, i) => <>
                                    <option key={i} className='bg-black'>{color}</option>
                                </>)}
                            </select>
                        </div>


                    </div>
                    <div >
                        {selectedColors.length>0&&<h1>Selected Colors</h1>}
                        <div className='flex gap-2 mt-2'>
                            {
                                selectedColors.map((color) => <>
                                    <h1 className='border px-2 py-1 cursor-pointer'>{color} <FontAwesomeIcon icon={faClose} onClick={()=>removeClr(color)}/></h1>
                                </>)

                            }
                        </div>
                        {selectedSizes.length>0&&<h1>Selected Sizes</h1>}
                        <div className='flex gap-2 mt-2'>
                            {
                                selectedSizes.map((size) => <>
                                    <h1 className='border px-2 py-1 cursor-pointer'>{size} <FontAwesomeIcon icon={faClose} onClick={()=>removeSize(size)} /></h1>
                                </>)
                            }</div>
                    </div>


                </div>
                <div className='flex justify-center mb-5 mt-4'>
                    {selectedColors.length>0&&selectedSizes.length>0&&<button className='bg-blue-300 px-4 py-2 shadow rounded' onClick={submit}>Submit</button>}
                </div>
            </div>

        </div>
    )
}

export default Modal
