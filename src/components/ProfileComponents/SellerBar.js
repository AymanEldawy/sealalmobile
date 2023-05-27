import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import { FollowBtn } from '../FollowBtn/FollowBtn'
import { Button } from '../Global/Button/Button'
import Link from 'next/link'

export const SellerBar = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-bmain  p-2 flex items-center text-xs justify-between mb-4'>
      <div className='flex gap-1 items-center'>
        <strong className='text-secondary capitalize'>{fetchWord('seller', lang)}</strong>:
        <Link href="/stores/4231" className='font-medium hover:text-secondary'>Seller name</Link>
        <FollowBtn small />
      </div>
      <Button outline classes="!p-1 text-xs">{fetchWord('rate_seller', lang)}</Button>
    </div>
  )
}
