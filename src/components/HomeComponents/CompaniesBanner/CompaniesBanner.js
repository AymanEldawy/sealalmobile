import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

export default function CompaniesBanner() {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-[#ECECEC] p-[24px] rounded-2xl my-12'>
      <div className='grid grid-cols-3 gap-4'>

        {
          Array(3).fill().map((r, index) => (
            <div className='rounded-lg overflow-hidden relative' key={index}>
              <div className='absolute top-0 left-0 h-full flex flex-col justify-center p-2 gap-1 w-1/2 capitalize text-white bg-[#DF4B4B53]'>
                <h3 className='font-medium text-lg'>{fetchWord('company_name', lang)}</h3>
                <h4 className='font-medium text-sm'>{fetchWord('flash_sale', lang)}</h4>
                <p className='text-xs'>{fetchWord('shopping_now_description', lang)}</p>
              </div>
              <Image src={`/images/companies/${index + 1}.png`} alt="company name" height={200} width={400} className="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
