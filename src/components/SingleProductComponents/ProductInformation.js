import { LanguageContext } from '@/context/LangContext'
import { colors, sizes } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

import { ProductFavorite } from '../Product/ProductFavorite'
import { ProductSale } from '../Product/ProductSale'
import RatingStars from '../RatingStars/RatingStars'
import { ProductColors } from './ProductColors'
import { ProductQuantity } from './ProductQuantity'
import { ProductSizes } from './ProductSizes'
import { ProductPrice } from '../Product/ProductPrice'

export const ProductInformation = ({ sale, status, handleToCart, product, color, setColor, size, setSize, quantity, setQuantity, maxQuantity }) => {
  const { lang } = useContext(LanguageContext);
  const [quantityError, setQuantityError] = useState(false)
  return (
    <div className='flex-1'>
      <div className='flex flex-wrap relative items-center gap-2'>
        <h3 className='text-secondary font-medium'>{product?.company_name}</h3>
        <ProductFavorite className="static !top-0 ltr:ml-auto rtl:mr-auto" favorite={product?.favorite} count={103} />
      </div>
      <h2 className='text-xl font-semibold mt-2 mb-2'>{product?.name}</h2>
      <div className="flex gap-2 items-center mb-2">
        <RatingStars rating={product?.rating} />
        <span className='text-xs text-[#333333]'>(6) {fetchWord('review', lang)}</span>
      </div>
      <div className='flex gap-1'>
        {status ?
          <span className='bg-[#3BB77E] text-white text-xs p-1 rounded'>
            New
          </span> : null
        }
        {
          sale ?
            <ProductSale className="!static" />
            : null
        }
      </div>
      <div className='flex gap-4 items-center mt-2'>
        <ProductPrice size="large" price={product?.price} discount={product?.discount} />
        <span className='text-xs text-[#6881A1]'>{product?.delivery_time}</span>
      </div>
      {/* <div className='border border-[#E9E9E9] my-4 h-[1px]' /> */}
      <p className='text-lead text-sm'>{product?.description}</p>
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <ProductColors productColors={colors?.slice(0, 5)} color={color} setColor={setColor} />
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <ProductSizes productSizes={sizes} size={size} setSize={setSize} />
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <div className="flex gap-4 items-center">
        {quantityError ? <p className="capitalize text-red-500 ">{fetchWord('out_of_stock', lang)}</p> :
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} maxQuantity={maxQuantity} setQuantityError={setQuantityError} />
        }
        <button onClick={handleToCart} className='active:bg-transparent active:text-primary capitalize w-full max-w-[300px] p-2 capitalizes rounded-sm text-center bg-primary text-white'>{fetchWord('add_to_cart', lang)}</button>
      </div>
      <div className="mt-4 capitalize text-xs">
        <div className='flex gap-4'>
          <p><strong>{fetchWord('SKU', lang)}</strong>: U2012</p>
          <p><strong>{fetchWord('tags', lang)}</strong>: Hot, Women</p>
        </div>
        <p className="mt-1"><strong>{fetchWord('categories', lang)}</strong>: Dress, Handbag, T-Shirts</p>
        <p className="mt-1"><strong>{fetchWord('product_code', lang)}</strong>: 3234432423 </p>
      </div>
    </div>
  )
}
