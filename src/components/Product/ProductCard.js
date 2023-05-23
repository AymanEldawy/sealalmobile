import React, { useContext, useEffect } from 'react'

import { ProductFavorite } from './ProductFavorite'
import { ProductImg } from './ProductImg'
import { ProductInfo } from './ProductInfo'
import { ProductPrice } from './ProductPrice'
import { ProductRating } from './ProductRating'
import { Button } from '../Global/Button/Button'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { CartIcon } from '../Icons'

export const ProductCard = ({ grid, size, product }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className={`relative ${grid ? 'flex gap-4' : ' border border-gray-100 pt-2 px-2'} `}>
      <div>
        <ProductFavorite className={grid ? 'ltr:left-2 rtl:right-2' : ''} favorite={product?.favorite} />
        <ProductImg src={product?.image} alt={product?.name} productId={product?.id} />
      </div>
      <div className={grid ? 'flex-1' : ''}>
        <ProductInfo rating={product?.rating} brand={product?.company_name} title={product?.name} productId={product?.id} size={size} />
        <div className='flex gap-1 mt-1 '>
          <ProductPrice size={size} price={product?.price} discount={product?.discount} />
          <span className={`${size === 'large' ? 'text-sm' : 'text-[8px]'}  flex items-center justify-center text-[#6881A1]`}>{product?.delivery_time}</span>
        </div>
        <div className='flex gap-2 mt-2'>
          {
            product?.status ?
              <span className={`${size === 'large' ? 'text-sm' : "text-[10px]"} bg-[#3BB77E] text-white text-xs p-1 rounded`}>
                New
              </span>
              : null
          }
          {
            product?.discount ?
              <span className={`${size === 'large' ? 'text-sm' : "text-[10px]"} bg-[#FF541F] text-white p-1 rounded`}>
                -${product?.discount}
              </span> : null
          }
        </div>
        <Button onClick={() => {/* add to cart  */ }} outline classes={`flex gap-1 rounded-xl mt-3 font-semibold ${grid ? "" : 'mx-auto'} w-fit block px-2 text-sm`}>
          <CartIcon className="h-4 w-4" />
          {fetchWord('add_to_cart', lang)}
        </Button>
      </div>
    </div>
  )
}
