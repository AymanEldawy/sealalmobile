import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const CartHead = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex border-b-2 border-[#D2D2D2] text-[#6D6D6D] font-semibold p-2 px-4'>
      <div className='flex-[2]'>{fetchWord('product_description', lang)} </div>
      <div className='flex-1 text-center'>{fetchWord('size', lang)} </div>
      <div className='flex-1 text-center'>{fetchWord('quantity', lang)} </div>
      <div className='flex-1 text-center'>{fetchWord('price', lang)} </div>
    </div>
  )
}
