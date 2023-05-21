import React from 'react'

export const ProductPrice = ({ price, discount }) => {
  let result = discount ? price - (discount / 100) * price : price;
  return (
    <div className='flex items-center border p-1 text-center gap-2 flex-1 justify-center'>
      <span className='text-primary text-sm'>${result?.toFixed(2)}</span>
      {discount ? <span className='text-xs line-through text-gray-500'>${discount}</span> : null}
    </div>
  )
}
