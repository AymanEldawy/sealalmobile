import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const FavoriteHead = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex gap-8 border-b-2 border-[#D2D2D2] text-secondary font-semibold p-2 px-4'>
      <div className='flex-1'>{fetchWord('product_description', lang)} </div>
      <div className='flex-1 '>{fetchWord('Stock_status', lang)} </div>
    </div>
  )
}
