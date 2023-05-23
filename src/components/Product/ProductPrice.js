import React from 'react'

export const ProductPrice = ({ price, discount, size }) => {
  let result = discount ? price - (discount / 100) * price : price;
  return (
    <div className='flex items-center text-center gap-2'>
      <span className={`text-primary ${size === 'large' ? 'text-base' : 'text-xs'}`}>${result?.toFixed(2)}</span>
      {discount ? <span className={`${size === 'large' ? 'text-xs' :'text-[10px]'} line-through text-gray-500 `}>${discount}</span> : null}
    </div>
  )
}
