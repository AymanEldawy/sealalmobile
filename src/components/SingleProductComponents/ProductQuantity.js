import React, { useState } from 'react'

export const ProductQuantity = ({ maxQuantity, quantity, setQuantity, setQuantityError }) => {
  const increaseQuantity = () => {
    if (quantity < maxQuantity)
      setQuantity(prev => prev + 1)
    else
      setQuantityError(true)
  }
  const decreaseQuantity = () => {
    if (quantity > 1)
      setQuantity(prev => prev - 1)
  }
  return (
    <div className='p-2 rounded-md border border-[#030303] flex items-center justify-between px-2 gap-2 min-w-[120px]'>
      <button disabled={quantity === 1} onClick={decreaseQuantity} className='cursor-pointer flex items-center justify-center w-5 h-5 p-1 bg-[#ECECEC] '>-</button>
      <span>{quantity}</span>
      <button disabled={quantity === maxQuantity} onClick={increaseQuantity} className='cursor-pointer flex items-center justify-center w-5 h-5 p-1 bg-[#ECECEC] '>+</button>
    </div>
  )
}
