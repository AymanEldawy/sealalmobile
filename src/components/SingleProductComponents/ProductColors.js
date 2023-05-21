import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

export const ProductColors = ({ productColors, color, setColor }) => {
  const {lang} = useContext(LanguageContext)
  return (
    <div className="">
      <h4 className="uppercase mb-2">{fetchWord('color', lang)}</h4>
      <div className="flex gap-2  font-medium">
        {productColors?.map(currentColor => (
          <button onClick={() => setColor(currentColor?.id)} key={currentColor?.id} className={`flex gap-1 items-center flex-col ${currentColor?.id === color ? "border-2 border-primary rounded-md" :""}`}>
            <Image src={currentColor?.src} alt={currentColor?.name} height={60} width={60} className="w-14 h-14 object-contain" />
            <span className='capitalize text-xs text-lead'>{currentColor?.name}</span>
          </button>
        ))
        }
      </div>
    </div>
  )
}
