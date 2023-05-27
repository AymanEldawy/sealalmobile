import Link from 'next/link'
import React from 'react'
import { ProductRating } from './ProductRating'

export const ProductInfo = ({ hideReview, rating, productId, brand, title, size }) => {
  return (
    <div className='flex flex-col my-2'>
      <Link href="/stores/423" className={`text-secondary ${size === 'large' ? 'text-sm' : 'text-xs'} font-medium`}>{brand}</Link>
      <Link href={`/products/${productId}`} className={`h-[20px] overflow-hidden text-[#333E48] hover:text-primary ${size === 'large' ? 'text-base' : 'text-sm'} font-semibold`}>{title}</Link>
      {hideReview ? null :
        <ProductRating rating={rating} small={size !== 'large'} />
      }
    </div>
  )
}
