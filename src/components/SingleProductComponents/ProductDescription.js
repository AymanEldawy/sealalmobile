import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ProductFeatures } from './ProductFeatures'

export const ProductDescription = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mb-12">
      <h3 className="text-secondary font-semibold mb-3 capitalize">{fetchWord('introduction', lang)}</h3>
      <p className='text-lead text-sm mb-4' >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et
        dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>

      <div className='flex gap-2 items-center'>
        <Image src="/images/products/2.png" alt="product description" height={140} width={230} className="w-[140px] h-[230px] object-cover" />
        <ul className='flex flex-col gap-6'>
          <li className='flex gap-2 text-xs items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="text-sm min-w-[80px]">{fetchWord('Material', lang)}:</strong>
            <span>Cotton</span>
          </li>
          <li className='flex gap-2 text-xs items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="text-sm min-w-[80px]">{fetchWord('Weight', lang)}:</strong>
            <span>100 <sup>g</sup></span>
          </li>
          <li className='flex gap-2 text-xs items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="text-sm min-w-[80px]">{fetchWord('colors', lang)}:</strong>
            <span>
              Beige, white, blue
            </span>
          </li>
          <li className='flex gap-2 text-xs items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="text-sm min-w-[80px]">{fetchWord('sizes', lang)}:</strong>
            <span>44, 48, 50</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
