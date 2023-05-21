
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { ProductQuantity } from '../SingleProductComponents/ProductQuantity'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { Button } from '../Global/Button/Button'
import { DeleteIcon } from '../Icons'

export const FavoriteItem = ({ item }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex items-center mb-4 gap-8'>
      <div className='flex-1'>
        <div className='flex items-center gap-4'>
          <figure className='w-[120px] shrink-0'>
            <Image src={item?.image} alt={item?.name} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
          </figure>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">{item?.name}</h3>
            <p className="text-[#666666] text-sm">{item?.description}</p>
            <strong>{item?.price}$</strong>
          </div>
        </div>
      </div>
      <div className='flex-1 text-center'>
        <div className='flex justify-between items-end'>
          <span className="font-semibold">In Stock</span>
          <div className='flex items-center gap-2'>
            <Button classes="!py-2 !px-4 text-sm !rounded-sm "><DeleteIcon /> </Button>
            <Button classes="!py-2 !px-4 text-sm !rounded-sm min-w-[200px] capitalize">{fetchWord('add_to_cart', lang)} </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
