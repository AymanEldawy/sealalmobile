import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext } from 'react'

export const SignInWith = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mt-5'>
      <div className="flex items-center gap-4 ">
        <button className='flex flex-1 items-center gap-2 p-2 border border-[#E8E9EA] rounded-md'>
          <Image src="/images/google-icon.png" alt="google" height={25} width={25} className='object-cover max-w-fit !h-auto' />
          <span className='capitalize'>  {fetchWord('signin_with_google', lang)}</span>
        </button>
        <button className='flex flex-1 items-center gap-2 p-2 border border-[#E8E9EA] rounded-md'>
          <Image src="/images/facebook-icon.png" alt="facebook" height={25} width={25} className='object-cover max-w-fit !h-auto' />
          <span>  {fetchWord('signin_with_facebook', lang)}</span>

        </button>
      </div>
      <button className='flex items-center mt-4 w-1/2 mx-auto gap-2 p-2 border border-[#E8E9EA] rounded-md'>
        <Image src="/images/apple-icon.png" alt="apple" height={25} width={25} className='object-cover max-w-fit !h-auto' />
        <span>  {fetchWord('signin_with_apple', lang)}</span>

      </button>
    </div>
  )
}
