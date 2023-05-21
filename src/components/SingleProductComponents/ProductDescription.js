import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ProductFeatures } from './ProductFeatures'

export const ProductDescription = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mb-12">
      <h3 className="text-secondary text-xl font-semibold mb-3 capitalize">{fetchWord('introduction', lang)}</h3>
      <p className='text-lead text-sm mb-4' >

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et
        dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>

      <div className='flex gap-8 items-center'>
        <Image src="/images/products/2.png" alt="product description" height={350} width={350} className="w-72 h-72 object-cover" />
        <ul className='flex flex-col gap-6'>
          <li className='flex gap-4 items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="min-w-[100px]">{fetchWord('Material', lang)}:</strong>
            <span>Cotton</span>
          </li>
          <li className='flex gap-4 items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="min-w-[100px]">{fetchWord('Weight', lang)}:</strong>
            <span>100 <sup>g</sup></span>
          </li>
          <li className='flex gap-4 items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="min-w-[100px]">{fetchWord('colors', lang)}:</strong>
            <span>
              Beige, white, blue
            </span>
          </li>
          <li className='flex gap-4 items-center'>
            <span className='w-2 h-2 rounded-full bg-red-500' />
            <strong className="min-w-[100px]">{fetchWord('sizes', lang)}:</strong>
            <span>44, 48, 50</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
