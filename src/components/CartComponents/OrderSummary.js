import React, { useContext } from 'react'
import { BookmarkIcon } from '../Icons'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import Image from 'next/image'
import { Button } from '../Global/Button/Button'

export const OrderSummary = ({ subtotal, total, cart }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-[#FAFAFA] mt-6 '>
      <h3 className="capitalize flex gap-2 font-semibold items-center"><BookmarkIcon /> {fetchWord('order_summary', lang)}</h3>
      <div className='flex border-b border-[#CFCFCF] pb-2 mt-4 justify-between'>
        <h4 className='capitalize text-sm font-medium flex-1'>{fetchWord('Product_name', lang)}</h4>
        <h4 className='capitalize text-sm font-medium text-center w-[80px]'>{fetchWord('quantity', lang)}</h4>
        <h4 className='capitalize text-sm font-medium text-center w-[70px]'>{fetchWord('price', lang)}</h4>
      </div>
      {
        cart?.map(item => (
          <div className='flex items-center mt-4 text-xs' key={item?.id}>
            <div className='flex-1 flex items-center gap-2'>
              <Image src={item?.image} alt={item?.name} width={40} height={40} className='w-10 h-10 object-contain rounded-md' />
              <h5>{item?.name}</h5>
            </div>
            <span className='text-center w-[80px]'>({item?.quantity})</span>
            <strong className='text-center w-[70px]'>${item?.price * item?.quantity}</strong>
          </div>
        ))
      }
      <div className='border-b border-[#CFCFCF] my-4' />
      <div className='flex items-center justify-between gap-1 text-sm'>
        <h3>{fetchWord('Subtotal', lang)}: <strong>${subtotal + 20}</strong> </h3>
        <h4>{fetchWord('Total', lang)}: <strong>${total + 20}</strong> </h4>
      </div>
      <Button classes="w-full mt-4 !p-3">{fetchWord('Review_your_order', lang)}</Button>
    </div>
  )
}
