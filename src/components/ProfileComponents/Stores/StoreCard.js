import { Button } from '@/components/Global/Button/Button'
import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

import { StoreAvatarInfo } from '../StoreAvatarInfo'

export const StoreCard = ({setSelectedStore }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='p-2 rounded bg-[#FCFCFC]'>
      <div className='flex justify-between items-center'>
        <StoreAvatarInfo hideFollow />
        <Button onClick={() => setSelectedStore(1)} outline classes="text-sm">{fetchWord('go_to_store', lang)}</Button>
      </div>
      <div className='mt-4 px-2'>
        <h5 className='text-sm text-[#2E2E2E] mb-2'>seller’s products</h5>
        <div className='flex gap-2'>
          {
            products?.slice(0, 5).map(product => (
              <Image key={product?.id} src={product?.image} alt={product?.name} height={99} width={77} className='rounded-md h-24 w-16' />
            ))
          }
        </div>
      </div>
    </div>
  )
}
