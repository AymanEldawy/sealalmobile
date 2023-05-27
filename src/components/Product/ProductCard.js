import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

import { Button } from '../Global/Button/Button'
import { CartIcon, DeleteIcon } from '../Icons'
import { ProductCardColors } from './ProductCardColors'
import { ProductFavorite } from './ProductFavorite'
import { ProductGallery } from './ProductGallery'
import { ProductImg } from './ProductImg'
import { ProductInfo } from './ProductInfo'
import { ProductPrice } from './ProductPrice'
import { ProductRating } from './ProductRating'
import { GlobalOptions } from '@/context/GlobalOptions'

export const ProductCard = ({ removeFromCart, hideReview, grid, size, product }) => {
  const router = useRouter()
  const { lang } = useContext(LanguageContext)
  const { addToCart } = useContext(GlobalOptions)
  return (
    <div className={`relative ${grid ? 'flex' : ' border border-gray-100 pt-2 px-2'} `}>
      <div className='relative'>
        <ProductFavorite className={grid ? 'rtl:left-auto ltr:right-auto ltr:left-2 rtl:right-2' : ''} favorite={product?.favorite} />
        {
          product?.images?.length && router?.pathname !== '/cart' ? (
            <ProductGallery grid={grid} images={product?.images} alt={product?.name} productId={product?.id} />
          ) : (
            <ProductImg grid={grid} src={product?.image} alt={product?.name} productId={product?.id} />
          )
        }
        {
          product?.colors?.length && router?.pathname !== '/cart' ? <ProductCardColors colors={product?.colors} /> : null
        }
      </div>
      {
        grid ? <span className='h-full w-[2px] min-h-[180px] mx-3 border-l border-gray-200' /> : null
      }
      <div className={grid ? 'flex-1' : ''}>
        <ProductInfo hideReview={hideReview} rating={product?.rating} brand={product?.company_name} title={product?.name} productId={product?.id} size={size} />
        <div className='flex gap-1'>
          <ProductPrice size={size} price={product?.price} discount={product?.discount} />
          <span className={`${size === 'large' ? 'text-sm' : 'text-[8px]'} whitespace-nowrap flex items-center justify-center text-[#6881A1]`}>{product?.delivery_time}</span>
        </div>
        <div className='flex gap-2 mt-1'>
          {
            product?.status ?
              <span className={`h-[22px] leading-4 ${size === 'large' ? 'text-sm' : "text-[10px]"} bg-[#3BB77E] text-white text-xs p-1 rounded`}>
                New
              </span>
              : null
          }
          {
            product?.discount ?
              <span className={`h-[22px] leading-4 ${size === 'large' ? 'text-sm' : "text-[10px]"} bg-[#FF541F] text-white p-1 rounded`}>
                -${product?.discount}
              </span> : null
          }
        </div>
        {
          !!removeFromCart ? (
            <Button onClick={() => removeFromCart(product?.id)} outline classes={`flex gap-1 rounded-xl !text-xs mt-2 font-semibold ${grid ? "" : 'mx-auto'} w-fit block px-2 text-sm`}>
              <DeleteIcon className="h-4 w-4" />
              {fetchWord('remove_from_cart', lang)}
            </Button>
          ) : (
            <Button onClick={() => addToCart({...product, quantity: 1})} outline classes={`flex gap-1 rounded-xl !text-xs mt-2 font-semibold ${grid ? "" : 'mx-auto'} w-fit block px-2 text-sm`}>
              <CartIcon className="h-4 w-4" />
              {fetchWord('add_to_cart', lang)}
            </Button>
          )
        }
      </div>
    </div>
  )
}
