import { AwardIcon, CardIcon, EasyShopCartIcon, TrunkIcon } from '@/components/Icons'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

const info = [
  { name: 'easy_shopping', description: 'fast_shipping_description', icon: <EasyShopCartIcon /> },
  { name: 'flash_sale', description: 'fast_shipping_description', icon: <AwardIcon /> },
  { name: 'easy_payment', description: 'fast_shipping_description', icon: <CardIcon /> },
  { name: 'fast_shipping', description: 'fast_shipping_description', icon: <TrunkIcon /> },
]

export const WhyChooseUs = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='py-8'>
      <h2 className='text-center mb-4 font-medium text-secondary text-2xl'>{fetchWord('why_us', lang)}</h2>
      <div className='flex gap-4 items-center'>
        {info?.map(item => (
          <div key={item?.name} className='flex flex-col gap-2 items-center justify-center flex-1'>
            <span className='h-20'>{item?.icon}</span>
            <h4 className='text-lg font-medium mt-4 capitalize'>{fetchWord(item?.name, lang)}</h4>
            <p className='text-ptext text-sm text-center'>{fetchWord(item?.description, lang)}</p>
          </div>
        ))}

      </div>
    </div>
  )
}
