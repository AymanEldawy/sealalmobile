import React from 'react'

export const ProductSale = ({ className, status }) => {
  return (
    <span className={`absolute ltr:left-4 rt:right-4 top-[50px] bg-primary text-white text-xs p-1 rounded ${className}`}>
      Sale
    </span>
  )
}
