import React from 'react'

const Table = ({ combinations }) => {
    return (
        <div className='px-4 md:px-20 mt-10 text-white '>
            <table className='w-full'>
                <thead>
                    <tr className='text-left border-b h-14'>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {combinations.map((ele)=><tr className='h-10'>
                        <td>{ele.color}</td>
                        <td>{ele.size}</td>
                        <td><input type="number" className='bg-transparent border rounded w-24' /></td>
                        <td><input type="number" className='bg-transparent border rounded w-12' /></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table
