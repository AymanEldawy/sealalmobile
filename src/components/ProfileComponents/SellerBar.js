import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import { Button } from '../Global/Button/Button'

export const SellerBar = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-bmain  p-2 flex items-center text-xs justify-between mb-4'>
      <div className='flex gap-1 items-center'>
        <strong className='text-secondary capitalize'>{fetchWord('seller', lang)}</strong>:
        <h4 className='font-medium'>Seller name</h4>
        <span className="text-[#B9B9B9] border border-[#B9B9B9] bg-white rounded-3xl text-[8px] p-[2px] px-2 capitalize mx-2">{fetchWord('follow', lang)}</span>
      </div>
      <Button outline classes="!p-1 text-xs">{fetchWord('rate_seller', lang)}</Button>
    </div>
  )
}
