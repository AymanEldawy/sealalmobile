import Link from 'next/link'
import React from 'react'
import { ProductRating } from './ProductRating'

export const ProductInfo = ({ rating, productId, brand, title, size }) => {
  return (
    <div className='flex flex-col my-2'>
      <div className='flex gap-4'>
        <p className={`text-secondary ${size === 'large' ? 'text-sm' : 'text-xs'} font-medium`}>{brand}</p>
        <ProductRating rating={rating} small={size !== 'large'} />
      </div>
      <Link href={`/products/${productId}`} className={`text-[#333E48] hover:text-primary ${size === 'large' ? 'text-base' : 'text-sm'} font-semibold`}>{title}</Link>
    </div>
  )
}
