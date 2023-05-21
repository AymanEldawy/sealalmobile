import React from 'react'

export const ProductDiscount = ({ discount }) => {
  return (
    <span className='absolute top-[50px] ltr:left-4 rtl:right-4 text-xs bg-[#FF541F] text-white p-1 rounded'>
      -${discount}
    </span>
  )
}
