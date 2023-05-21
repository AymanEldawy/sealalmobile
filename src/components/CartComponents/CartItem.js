import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { ProductQuantity } from '../SingleProductComponents/ProductQuantity'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

const maxQuantity = 4
export const CartItem = ({ item }) => {
  const [quantityError, setQuantityError] = useState(false);
  const [quantity, setQuantity] = useState(item?.quantity)
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex items-center mb-4'>
      <div className='flex-[2]'>
        <div className='flex items-center gap-4'>
          <figure className='w-[120px] shrink-0'>
            <Image src={item?.image} alt={item?.name} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
          </figure>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">{item?.name}</h3>
            <p className="text-[#666666] text-sm">{item?.description}</p>
          </div>
        </div>
      </div>
      <div className='flex-1 text-center'>
        <span className='font-semibold'>{item?.size || 'XL'}</span>
      </div>
      <div className='flex-1 text-center'>
        {quantityError ? <p className="capitalize text-red-500">{fetchWord('max_quantity_msg', lang)}</p> : null}
        <ProductQuantity setQuantity={setQuantity} maxQuantity={maxQuantity} quantity={quantity} setQuantityError={setQuantityError} />
      </div>
      <div className='flex-1 text-center'>
        <strong>{item?.price}$</strong>
      </div>
    </div>
  )
}
